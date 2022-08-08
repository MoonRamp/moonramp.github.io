import 'package:flutter/material.dart';

import 'package:moonramp_github_io/widgets/crypto_qr_code.dart';

class DonateCoin extends StatelessWidget {
  const DonateCoin({Key? key, required this.ticker, required this.tickerName, required this.logo, required this.color, required this.qrData, required this.address}) : super(key: key);

  final String ticker;
  final String tickerName;
  final String logo;
  final Color color;
  final String qrData;
  final String address;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        SizedBox(
          height: 20,
        ),
        Text(
          tickerName,
          style: Theme.of(context).textTheme.headline6,
          textAlign: TextAlign.center,
        ),
        SizedBox(
          height: 10,
        ),
        Container(
          padding: EdgeInsets.symmetric(horizontal: 40),
          child: Text(
            address,
            style: Theme.of(context).textTheme.subtitle2,
            textAlign: TextAlign.center,
          ),
        ),
        SizedBox(
          height: 20,
        ),
        CryptoQrCode(
          ticker: ticker,
          uri: logo,
          color: color,
          qrData: qrData,
        ),
      ],
    );
  }
}
