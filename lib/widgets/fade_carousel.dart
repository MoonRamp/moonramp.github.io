import 'package:flutter/material.dart';
import 'dart:async';

import 'package:moonramp_github_io/widgets/crypto_qr_code.dart';

class FadeCarousel extends StatefulWidget {
  const FadeCarousel({Key? key, required this.children}) : super(key: key);
  final List<Widget> children;

  @override
  State<FadeCarousel> createState() => _FadeCarouselState();
}

class _FadeCarouselState extends State<FadeCarousel> {
  late Timer _timer;
  int _currentChild = 0;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(Duration(seconds: 3), (timer) async {
      if (mounted) {
        setState(() {
          if (_currentChild + 1 == widget.children.length) {
            _currentChild = 0;
          } else {
            _currentChild++;
          }
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 256,
      child: AnimatedSwitcher(
        duration: Duration(milliseconds: 500),
        transitionBuilder: (Widget child, Animation<double> animation) {
          return FadeTransition(child: child, opacity: animation);
        },
        child: widget.children[_currentChild],
      ),
    );
  }

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }
}
