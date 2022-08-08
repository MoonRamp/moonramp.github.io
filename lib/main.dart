import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';

import 'package:json_theme/json_theme.dart';
import 'dart:convert';
import 'dart:math';
import 'dart:async';

import 'package:responsive_grid/responsive_grid.dart';

import 'package:moonramp_github_io/extensions/on_hover.dart';
import 'package:moonramp_github_io/widgets/animated_card.dart';
import 'package:moonramp_github_io/widgets/comparison_table.dart';
import 'package:moonramp_github_io/widgets/crypto_qr_code.dart';
import 'package:moonramp_github_io/widgets/donate.dart';
import 'package:moonramp_github_io/widgets/fade_carousel.dart';
import 'package:moonramp_github_io/widgets/info_card.dart';
import 'package:moonramp_github_io/widgets/matrix_coin.dart';
import 'package:moonramp_github_io/widgets/supported_coin.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  final themeStr = await rootBundle.loadString('assets/theme_moonramp.json');
  final themeJson = jsonDecode(themeStr);
  final theme = ThemeDecoder.decodeThemeData(themeJson)!;

  runApp(MyApp(theme: theme));
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key, required this.theme}) : super(key: key);

  final ThemeData theme;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MoonRamp',
      theme: theme,
      home: const MyHomePage(title: 'MoonRamp'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  late final ScrollController _scrollController;
  late final List<Widget> _matrixCoinWidgets;

  final GlobalKey scrollViewKey = GlobalKey();
  final GlobalKey gridKey = GlobalKey();
  final GlobalKey topStackKey = GlobalKey();
  final GlobalKey subStackKey = GlobalKey();

  @override
  void initState() {
    _scrollController = new ScrollController();
    _matrixCoinWidgets = [
      Image.asset('assets/crypto/coins/rounded/bitcoin.png'),
      Image.asset('assets/crypto/coins/rounded/ethereum.png'),
      Image.asset('assets/crypto/coins/rounded/monero.png'),
    ];
    Timer(Duration(seconds: 1), () {
      ScaffoldMessenger.of(context).showMaterialBanner(MaterialBanner(
         padding: EdgeInsets.all(20),
         content: Text('MoonRamp is pre-alpha and not ready for general adoption', style: TextStyle(fontWeight: FontWeight.bold)),
         leading: Icon(Icons.error_outlined),
         backgroundColor: Theme.of(context).colorScheme.error,
         actions: <Widget>[
           TextButton(
             onPressed: () => ScaffoldMessenger.of(context).hideCurrentMaterialBanner(),
             child: Text('I understand'),
           ),
         ],
       ),
      );
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    List<Widget> coinWidgets = [];
    for (var i = 0; i < 12; i++) {
      coinWidgets.add(_getMatrixCoin(context));
    }
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        actions: [
          TextButton(
            onPressed: (){},
            child: Text(
              'Book',
              style: TextStyle(
                color: Theme.of(context).colorScheme.onPrimary,
              ),
            ),
          ),
          TextButton(
            onPressed: (){},
            child: Text(
              'API',
              style: TextStyle(
                color: Theme.of(context).colorScheme.onPrimary,
              ),
            ),
          ),
          TextButton(
            onPressed: (){},
            child: Text(
              'Docs',
              style: TextStyle(
                color: Theme.of(context).colorScheme.onPrimary,
              ),
            ),
          ),
          TextButton(
            onPressed: (){},
            child: Text(
              'Github',
              style: TextStyle(
                color: Theme.of(context).colorScheme.onPrimary,
              ),
            ),
          ),
        ],
      ),
      body: SingleChildScrollView(
        key: scrollViewKey,
        controller: _scrollController,
        child: Stack(
          key: topStackKey,
          children: <Widget>[
            ...coinWidgets,
            ResponsiveGridRow(
              key: gridKey,
              children: [
                ResponsiveGridCol(
                  lg: 6,
                  child: Container(
                    padding: EdgeInsets.symmetric(vertical: 100, horizontal: 100),
                    alignment: Alignment(0, 0),
                    child: Column(
                      children: <Widget>[
                        Text(
                          'Accept Crypto Payments with No Fees and No Third-Party',
                          style: Theme.of(context).textTheme.headline3?.copyWith(fontWeight: FontWeight.bold),
                        ),
                        SizedBox(height: 50),
                        Row(
                          children: <Widget>[
                            Expanded(
                              flex: 2,
                              child: ElevatedButton(onPressed: (){}, style: ElevatedButton.styleFrom(minimumSize: Size(200, 50)), child: Text('Get Started')).scaleOnHover,
                            ),
                            Expanded(child: Container()),
                            Expanded(
                              flex: 2,
                              child: OutlinedButton(onPressed: (){}, style: ElevatedButton.styleFrom(minimumSize: Size(200, 50)), child: Text('Github')).scaleOnHover,
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
                ResponsiveGridCol(
                  lg: 6,
                  child: Container(
                    padding: EdgeInsets.symmetric(vertical: 50),
                    alignment: Alignment(0, 0),
                    child: AnimatedCard(
                      child: FadeCarousel(
                        children: <Widget>[
                          CryptoQrCode(
                            key: ValueKey<int>(0),
                            ticker: 'btc',
                            uri: 'bitcoin-256.png',
                            color: Color(0xFFF99400),
                          ),
                          CryptoQrCode(
                            key: ValueKey<int>(1),
                            ticker: 'bch',
                            uri: 'bitcoin-cash-256.png',
                            color: Color(0xFF2FCF6E),
                          ),
                          CryptoQrCode(
                            key: ValueKey<int>(2),
                            ticker: 'xmr',
                            uri: 'monero-256.png',
                            color: Color(0xFFFF6600),
                          ),
                          CryptoQrCode(
                            key: ValueKey<int>(3),
                            ticker: 'eth',
                            uri: 'ethereum-256.png',
                            color: Color(0xFF454A75),
                          ),
                          CryptoQrCode(
                            key: ValueKey<int>(4),
                            ticker: 'eth',
                            uri: 'ethereum-classic-256.png',
                            color: Color(0xFF3AB83A),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                ResponsiveGridCol(
                  lg: 12,
                  child: Container(
                    padding: EdgeInsets.symmetric(vertical: 20),
                    alignment: Alignment(0, 0),
                    child: Row(
                      children: <Widget>[
                        Expanded(
                          child: Container(),
                        ),
                        Expanded(
                          child: SupportedCoin(
                            ticker: 'BTC',
                            icon: 'assets/crypto/bitcoin-256.png',
                            blankIcon: 'assets/crypto/bitcoin-blank-256.png',
                          ),
                        ),
                        Expanded(
                          child: Container(),
                        ),
                        Expanded(
                          child: SupportedCoin(
                            ticker: 'XMR',
                            icon: 'assets/crypto/monero-256.png',
                            blankIcon: 'assets/crypto/monero-blank-256.png',
                          ),
                        ),
                        Expanded(
                          child: Container(),
                        ),
                        Expanded(
                          child: SupportedCoin(
                            ticker: 'BCH',
                            icon: 'assets/crypto/bitcoin-cash-256.png',
                            blankIcon: 'assets/crypto/bitcoin-cash-blank-256.png',
                          ),
                        ),
                        Expanded(
                          child: Container(),
                        ),
                      ],
                    ),
                  ),
                ),
                ResponsiveGridCol(
                  lg: 12,
                  child: Container(
                    padding: EdgeInsets.symmetric(vertical: 20),
                    alignment: Alignment(0, 0),
                    child: Row(
                      children: <Widget>[
                        Expanded(
                          child: Container(),
                        ),
                        Expanded(
                          child: Container(),
                        ),
                        Expanded(
                          child: SupportedCoin(
                            ticker: 'ETH',
                            icon: 'assets/crypto/ethereum-256.png',
                            blankIcon: 'assets/crypto/ethereum-blank-256.png',
                          ),
                        ),
                        Expanded(
                          child: Container(),
                        ),
                        Expanded(
                          child: SupportedCoin(
                            ticker: 'ETC',
                            icon: 'assets/crypto/ethereum-classic-256.png',
                            blankIcon: 'assets/crypto/ethereum-classic-blank-256.png',
                          ),
                        ),
                        Expanded(
                          child: Container(),
                        ),
                        Expanded(
                          child: Container(),
                        ),
                      ],
                    ),
                  ),
                ),
                ResponsiveGridCol(
                  lg: 12,
                  child: Container(
                    padding: EdgeInsets.symmetric(vertical: 25),
                    alignment: Alignment(0, 0),
                    child: Container(
                      clipBehavior: Clip.antiAlias,
                      decoration: BoxDecoration(
                        color: Colors.black,
                        shape: BoxShape.circle,
                        boxShadow: [BoxShadow(blurRadius: 10, color: Colors.black.withAlpha(0x66), spreadRadius: 7)],
                      ),
                      child: Image.asset(
                        'assets/moonramp_icon.png',
                      ),
                    ).scaleOnHover,
                  ),
                ),
                ResponsiveGridCol(
                  lg: 4,
                  child: Container(
                    padding: EdgeInsets.symmetric(vertical: 40, horizontal: 20),
                    alignment: Alignment(0, 0),
                    child: InfoCard(
                      icon: Icons.lock,
                      title: 'Secure',
                      text: 'Role Based Access Control, Multiple Layers of Encryption, Full Control',
                    ),
                  ),
                ),
                ResponsiveGridCol(
                  lg: 4,
                  child: Container(
                    padding: EdgeInsets.symmetric(vertical: 40, horizontal: 20),
                    alignment: Alignment(0, 0),
                    child: InfoCard(
                      icon: Icons.science,
                      title: 'Advanced',
                      text: 'WASM program runtime, REST & JsonRPC API\'s, robust sql backend support',
                    ),
                  ),
                ),
                ResponsiveGridCol(
                  lg: 4,
                  child: Container(
                    padding: EdgeInsets.symmetric(vertical: 40, horizontal: 20),
                    alignment: Alignment(0, 0),
                    child: InfoCard(
                      icon: Icons.icecream,
                      title: 'Cyberpunk',
                      text: 'Built by crypto maximalist for everyone. Giving financial independence back to the people',
                    ),
                  ),
                ),
                ResponsiveGridCol(
                  lg: 1,
                  child: Container(
                    alignment: Alignment(0, 0),
                  ),
                ),
                ResponsiveGridCol(
                  lg: 10,
                  child: Container(
                    alignment: Alignment(0, 0),
                    child: Card(
                      child: Container(
                        padding: EdgeInsets.symmetric(vertical: 20, horizontal: 20),
                        child: ComparisonTable(),
                      ),
                    ),
                  ),
                ),
                ResponsiveGridCol(
                  lg: 1,
                  child: Container(
                    alignment: Alignment(0, 0),
                  ),
                ),
                ResponsiveGridCol(
                  lg: 12,
                  child: Container(
                    padding: EdgeInsets.symmetric(vertical: 25),
                    alignment: Alignment(0, 0),
                    child: ElevatedButton(onPressed: (){}, style: ElevatedButton.styleFrom(minimumSize: Size(300, 80)), child: Text('Get Started')).scaleOnHover,
                  ),
                ),
                ResponsiveGridCol(
                  lg: 12,
                  child: Container(
                    height: 100,
                    alignment: Alignment(0, 0),
                  ),
                ),
                ResponsiveGridCol(
                  lg: 6,
                  child: Container(
                    alignment: Alignment(0, 0),
                    child: Column(
                      children: <Widget>[
                        Text(
                          'Read the Docs',
                          style: Theme.of(context).textTheme.headline4?.copyWith(fontWeight: FontWeight.bold),
                        ),
                        SizedBox(height: 25),
                        Text(
                          'Learn about how to deploy MoonRamp and the integrate with the API',
                          style: Theme.of(context).textTheme.subtitle1,
                        ),
                        SizedBox(height: 25),
                        OutlinedButton(onPressed: (){}, style: ElevatedButton.styleFrom(minimumSize: Size(200, 50)), child: Text('Docs')).scaleOnHover,
                      ],
                    ),
                  ),
                ),
                ResponsiveGridCol(
                  lg: 6,
                  child: Container(
                    alignment: Alignment(0, 0),
                    child: Container(
                      padding: EdgeInsets.symmetric(vertical: 20, horizontal: 40),
                      child: Container(
                        clipBehavior: Clip.antiAlias,
                        decoration: BoxDecoration(
                          color: Colors.black,
                          shape: BoxShape.rectangle,
                          boxShadow: [BoxShadow(blurRadius: 5, color: Colors.black.withAlpha(0x66), spreadRadius: 2)],
                        ),
                        child: ClipRRect(
                        borderRadius: BorderRadius.circular(5.0),
                          child: Image.asset(
                            'assets/moonramp_docs.png',
                          ),
                        ),
                      ).scaleOnHover,
                    ),
                  ),
                ),
                ResponsiveGridCol(
                  lg: 12,
                  child: Container(
                    height: 100,
                    alignment: Alignment(0, 0),
                  ),
                ),
                ResponsiveGridCol(
                  lg: 12,
                  child: Container(
                    height: 100,
                    color: Theme.of(context).colorScheme.primary,
                    alignment: Alignment(0, 0),
                    child: Text(
                      '© 2022 MoonRamp Developers',
                      style: TextStyle(
                        color: Theme.of(context).colorScheme.onPrimary,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){
          showDialog(context: context, barrierDismissible: true, builder: (context){
            return Center(
              child: Container(
                height: MediaQuery.of(context).size.height * 0.75,
                width: MediaQuery.of(context).size.width * 0.5,
                child: Donate(),
              ),
            );
          });
        },
        tooltip: 'Contribute',
        child: const Icon(Icons.attach_money),
      ).scaleOnHover,
    );
  }

  Widget _getMatrixCoin(BuildContext context) {
    return MatrixCoin(
       parentKey: gridKey,
       coinWidgets: _matrixCoinWidgets,
       maxLeft: MediaQuery.of(context).size.width,
     );
  }

  @override
  void dispose() {
    super.dispose();
  }
}

class StripeClipper extends CustomClipper<Path> {

  StripeClipper();

  @override
  Path getClip(Size size) {
    var path = Path();
    path.moveTo(size.width, 0);
    path.lineTo(size.width / 4, 0);
    path.lineTo(0, size.height);
    path.lineTo(size.width - size.width / 4, size.height);
    path.close();
    return path;
  }

  @override
  bool shouldReclip(CustomClipper<Path> oldClipper) {
    return false;
  }
}
