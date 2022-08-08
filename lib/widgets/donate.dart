import 'package:flutter/material.dart';

import 'package:moonramp_github_io/widgets/crypto_qr_code.dart';
import 'package:moonramp_github_io/widgets/donate_coin.dart';

class Donate extends StatelessWidget {
  const Donate({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: SingleChildScrollView(
        child: Container(
        padding: EdgeInsets.symmetric(vertical: 20, horizontal: 20),
        child: Column(
          children: <Widget>[
            Text(
              'Want to contribute but not into software dev?',
              style: Theme.of(context).textTheme.headline5,
              textAlign: TextAlign.center,
            ),
            SizedBox(
              height: 10,
            ),
            Text(
              'Show your financial support by donating funds to one of the following addresses:',
              style: Theme.of(context).textTheme.subtitle1,
              textAlign: TextAlign.center,
            ),
            DonateCoin(
              ticker: 'xmr',
              tickerName: 'Monero',
              logo: 'monero-256.png',
              color: Color(0xFFFF6600),
              qrData: 'monero:468ZeZpnUdfXjkzvzt1QBcA5SU1coDg1z7CtKhzixfQabT1zUQt6YivN7XAAGbUzt4i6hXqkNTc82TzAG4FiLag1GK7xPSk',
              address: '468ZeZpnUdfXjkzvzt1QBcA5SU1coDg1z7CtKhzixfQabT1zUQt6YivN7XAAGbUzt4i6hXqkNTc82TzAG4FiLag1GK7xPSk',
            ),
            DonateCoin(
              ticker: 'btc',
              tickerName: 'Bitcoin',
              logo: 'bitcoin-256.png',
              color: Color(0xFFF99400),
              qrData: 'bitcoin:bc1qefwe0jnue2327zjpef8e80ndyt24xjsqgt33ek',
              address: 'bc1qefwe0jnue2327zjpef8e80ndyt24xjsqgt33ek',
            ),
            DonateCoin(
              ticker: 'bch',
              tickerName: 'Bitcoin Cash',
              logo: 'bitcoin-cash-256.png',
              color: Color(0xFF2FCF6E),
              qrData: 'bitcoincash:qqea0f43hs6qf5fhgy7qycfcukxjuxlyx5patf45zg',
              address: 'qqea0f43hs6qf5fhgy7qycfcukxjuxlyx5patf45zg',
            ),
            DonateCoin(
              ticker: 'eth',
              tickerName: 'Ethereum',
              logo: 'ethereum-256.png',
              color: Color(0xFF454A75),
              qrData: 'ethereum:0xC4c32CaEaA67812B2E906d44fc5f085F1d053760',
              address: '0xC4c32CaEaA67812B2E906d44fc5f085F1d053760',
            ),
            DonateCoin(
              ticker: 'etc',
              tickerName: 'Ethereum Classic',
              logo: 'ethereum-classic-256.png',
              color: Color(0xFF3AB83A),
              qrData: 'ethereumclassic:0x4fcAb283AD37A0F33C4570F167A5dDc855338df2',
              address: '0x4fcAb283AD37A0F33C4570F167A5dDc855338df2',
            ),
          ],
        ),
      ),
      ),
    );
  }
}
