import 'package:flutter/material.dart';

import 'package:moonramp_github_io/extensions/on_hover.dart';

class InfoCard extends StatelessWidget {
  const InfoCard({Key? key, required this.icon, required this.title, required this.text}) : super(key: key);

  final IconData icon;
  final String title;
  final String text;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        height: 200,
        padding: EdgeInsets.symmetric(vertical: 20, horizontal: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Icon(icon, size: 50),
            Text(title, style: Theme.of(context).textTheme.headline4),
            Text(
              text,
              style: Theme.of(context).textTheme.subtitle1,
              textAlign: TextAlign.center
            ),
          ],
        ),
      ),
    ).scaleOnHover;
  }
}
