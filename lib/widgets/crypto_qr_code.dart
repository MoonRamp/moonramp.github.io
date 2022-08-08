import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';

class CryptoQrCode extends StatelessWidget {
  const CryptoQrCode({Key? key, required this.ticker, required this.uri, required this.color, this.qrData}) : super(key: key);

  static final Color baseColor = Color(0xFF271D1C);

  final String ticker;
  final String uri;
  final Color color;
  final String? qrData;

  @override
  Widget build(BuildContext context) {
    var data = qrData != null ? qrData! : 'https://moonramp.github.io?ticker=${ticker}';
    return QrImageView(
      data: data,
      version: QrVersions.auto,
      size: 256,
      errorCorrectionLevel: QrErrorCorrectLevel.H,
      embeddedImage: AssetImage('assets/crypto/' + uri),
      appearance: QrAppearance(
        markerStyle: QrMarkerStyle(
          color: color,
          shape: QrMarkerShape.roundedRect,
        ),
        markerDotStyle: QrMarkerDotStyle(
          color: baseColor,
          shape: QrMarkerDotShape.square,
        ),
        moduleStyle: QrDataModuleStyle(
          colors: QrColors.single(baseColor),
          shape: QrDataModuleShape.square,
        ),
        embeddedImageStyle: QrEmbeddedImageStyle(
          size: Size(64, 64),
        ),
      ),
    );
  }
}
