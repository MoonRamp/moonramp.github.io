import 'package:flutter/material.dart';
import 'package:flutter/animation.dart';
import 'package:flutter/scheduler.dart';

import 'dart:async';
import 'dart:math';

class MatrixCoin extends StatefulWidget {
  MatrixCoin({Key? key, required this.parentKey, required this.coinWidgets, required this.maxLeft}) : super(key: key);

  final GlobalKey parentKey;
  final List<Widget> coinWidgets;
  final double maxLeft;

  @override
  _MatrixCoinState createState() => _MatrixCoinState();
}

class _MatrixCoinState extends State<MatrixCoin> with SingleTickerProviderStateMixin {
  double _top = 0.0;
  double _left = 0.0;
  Duration _delay = Duration.zero;
  double _speed = 0.0;
  int _maxSize = 0;
  Duration _elapsed = Duration.zero;
  late final Ticker _ticker;
  List<Widget> _coins = [];

  void _randomize() {
    _top = 0.0;
    _left = Random().nextInt(widget.maxLeft ~/ 32) * 32;
    _delay = Duration(seconds: Random().nextInt(20));
    _speed = 6 + Random().nextDouble() * 6;
    _maxSize = 10 + Random().nextInt(10);
    _coins.clear();
  }

  @override
  void initState() {
    _randomize();
    final _random = new Random();
    _ticker = this.createTicker((elapsed) {
      if (elapsed < _delay) return;
      var speed = Duration(milliseconds: (1000 ~/ _speed));
      var delta = elapsed - _elapsed;
      if (delta >= speed) {
        Widget element = widget.coinWidgets[_random.nextInt(widget.coinWidgets.length)];
        final parentBox = widget.parentKey.currentContext!.findRenderObject() as RenderBox;
        final box = context.findRenderObject() as RenderBox;
        setState(() {
          _elapsed = elapsed;
          if (_top > parentBox.size.height) {
            _randomize();
            return;
          }
          _coins.add(element);
          if (_coins.length >= _maxSize) {
            _coins.removeAt(0);
            _top += 16 + 1 / 60 * _speed * delta.inMilliseconds;
          }
        });
      }
    });
    _ticker.start();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    List<double> stops = [];
    List<Color> colors = [];


    Color primary = Theme.of(context).colorScheme.primary.withAlpha(0x17);
    Color edge = Theme.of(context).colorScheme.error.withAlpha(0x17);
    colors = [Colors.transparent, primary, primary, edge];
    stops = [0, ((_coins.length - _maxSize / 2) / _coins.length), ((_coins.length - 1) / _coins.length), 0.0];

    return Positioned(
      top: _top,
      left: _left,
      child: ShaderMask(
        shaderCallback: (Rect bounds) {
          return LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            stops: stops,
            colors: colors,
          ).createShader(bounds);
        },
        blendMode: BlendMode.srcIn,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.start,
          children: _getCoins(context),
        ),
      ),
    );
  }

  List<Widget> _getCoins(BuildContext context) {
    List<Widget> coinWidgets = [];

    for (var coin in _coins) {
      coinWidgets.add(Container(
        padding: EdgeInsets.symmetric(vertical: 2, horizontal: 2),
        child: coin,
      ));
    }
    return coinWidgets;
  }

  @override
  void dispose() {
    _ticker.dispose();
    super.dispose();
  }
}
