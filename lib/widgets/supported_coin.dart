import 'package:flutter/material.dart';

import 'package:moonramp_github_io/extensions/on_hover.dart';

class SupportedCoin extends StatelessWidget {
  const SupportedCoin({Key? key, required this.ticker, required this.icon, required this.blankIcon}) : super(key: key);

  final String ticker;
  final String icon;
  final String blankIcon;

  @override
  Widget build(BuildContext context) {
    TextStyle? style;
    if (MediaQuery.of(context).size.width >= 768) {
     style = Theme.of(context).textTheme.headline4;
    } else {
     style = Theme.of(context).textTheme.headline5;
    }
    return Container(
      clipBehavior: Clip.antiAlias,
      decoration: BoxDecoration(
        color: Colors.black,
        shape: BoxShape.circle,
        boxShadow: [BoxShadow(blurRadius: 7, color: Colors.black.withAlpha(0x44), spreadRadius: 5)],
      ),
      child: Image.asset(
        icon,
      ),
    ).fadeOnHover(
      Stack(
        alignment: Alignment.center,
        children: <Widget>[
          Image.asset(
            blankIcon,
          ),
          Center(
            child: Text(
              ticker,
              style: style?.copyWith(
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
          ),
        ],
      ),
    ).scaleOnHover;
  }
}
