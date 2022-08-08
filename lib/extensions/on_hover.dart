import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

extension HoverExtension on Widget {
  Widget get scaleOnHover {
    return ScaleOnHover(child: this);
  }
  Widget fadeOnHover(Widget target) {
    return FadeOnHover(child: this, target: target);
  }
}

class ScaleOnHover extends StatefulWidget {
  final Widget child;
  ScaleOnHover({required this.child});

  @override
  _ScaleOnHoverState createState() => _ScaleOnHoverState();
}

class _ScaleOnHoverState extends State<ScaleOnHover> {
  double scale = 1.0;
  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (e) => _mouseEnter(true),
      onExit: (e) => _mouseEnter(false),
      child: TweenAnimationBuilder(
        duration: const Duration(milliseconds: 200),
        tween: Tween<double>(begin: 1.0, end: scale),
        builder: (BuildContext context, double value, _) {
          return Transform.scale(scale: value, child: widget.child);
        },
      ),
    );
  }

  void _mouseEnter(bool hover) {
    setState(() {
      if (hover)
        scale = 1.05;
      else
        scale = 1.0;
    });
  }
}

class FadeOnHover extends StatefulWidget {
  final Widget child;
  final Widget target;
  FadeOnHover({required this.child, required this.target});

  @override
  _FadeOnHoverState createState() => _FadeOnHoverState(child);
}

class _FadeOnHoverState extends State<FadeOnHover> {
  _FadeOnHoverState(this.nextChild) : super();
  double opacity = 1.0;
  Widget nextChild;
  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (e) => _mouseEnter(true),
      onExit: (e) => _mouseEnter(false),
      child: AnimatedSwitcher(
        duration: const Duration(milliseconds: 400),
        child: nextChild,
      ),
      //child: TweenAnimationBuilder(
      //  duration: const Duration(milliseconds: 200),
      //  tween: Tween<double>(begin: 0.0, end: opacity),
      //  builder: (BuildContext context, double value, _) {
      //    return Opacity(opacity: value, child: widget.child);
      //  },
      //),
    );
  }

  void _mouseEnter(bool hover) {
    setState(() {
      if (hover)
        nextChild = widget.target;
      else
        nextChild = widget.child;
    });
  }
}
