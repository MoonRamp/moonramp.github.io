import 'package:flutter/material.dart';
import 'package:flutter/animation.dart';

import 'package:moonramp_github_io/widgets/crypto_qr_code.dart';

class AnimatedCard extends StatefulWidget {
  const AnimatedCard({Key? key, required this.child}) : super(key: key);
  final Widget child;

  @override
  State<AnimatedCard> createState() => _AnimatedCardState();
}

class _AnimatedCardState extends State<AnimatedCard> with TickerProviderStateMixin {
  late final AnimationController slideController;
  late final Animation<Offset> slideAnimation;

  @override
  void initState() {
    super.initState();
    slideController = AnimationController(
        duration: Duration(seconds: 1),
        vsync: this,
        value: 0.1,
    )..repeat(reverse: true);
    slideAnimation = Tween<Offset>(
      begin: Offset.zero,
      end: const Offset(0.0, 0.025),
    ).animate(CurvedAnimation(
      parent: slideController,
      curve: Curves.easeInOut,
    ));
  }

  @override
  Widget build(BuildContext context) {
    return SlideTransition(
      position: slideAnimation,
      child: Card(
        child: Padding(
          padding: EdgeInsets.symmetric(horizontal: 10, vertical: 10),
          child: Column(
            children: <Widget>[
              Padding(
                padding: EdgeInsets.symmetric(vertical: 15, horizontal: 15),
                child: widget.child,
              ),
              Container(
                child: Text(
                  'Powered by MoonRamp',
                  style: Theme.of(context).textTheme.subtitle2,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    slideController.dispose();
    super.dispose();
  }
}
