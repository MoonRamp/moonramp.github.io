import 'package:flutter/material.dart';

class ComparisonTableHeaderCell extends StatelessWidget {
  const ComparisonTableHeaderCell({Key? key, required this.text}) : super(key: key);

  final String text;

  @override
  Widget build(BuildContext context) {
    return TableCell(
      child: Container(
        height: 100,
        child: Center(
          child: Text(
            text,
            style: Theme.of(context).textTheme.headline6?.copyWith(fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}

class ComparisonTableCell extends StatelessWidget {
  const ComparisonTableCell({Key? key, required this.text}) : super(key: key);

  final String text;

  @override
  Widget build(BuildContext context) {
    return TableCell(
      child: Container(
        height: 50,
        child: Center(
          child: Text(
            text,
            style: Theme.of(context).textTheme.subtitle1,
          ),
        ),
      ),
    );
  }
}

class ComparisonTable extends StatelessWidget {
  const ComparisonTable({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Table(
      border: TableBorder(horizontalInside: BorderSide(width: 2, color: Theme.of(context).colorScheme.primary)),
      defaultColumnWidth: FlexColumnWidth(),
      defaultVerticalAlignment: TableCellVerticalAlignment.middle,
      children: <TableRow>[
        TableRow(
          children: <Widget>[
            ComparisonTableHeaderCell(text: 'Crypto Gateway'),
            ComparisonTableHeaderCell(text: 'Open Source'),
            ComparisonTableHeaderCell(text: 'Non-Custodial'),
            ComparisonTableHeaderCell(text: 'Programmable'),
            ComparisonTableHeaderCell(text: 'Fees'),
          ],
        ),
        TableRow(
          children: <Widget>[
            ComparisonTableCell(text: 'MoonRamp'),
            ComparisonTableCell(text: '√'),
            ComparisonTableCell(text: '√'),
            ComparisonTableCell(text: '√'),
            ComparisonTableCell(text: '0%'),
          ],
        ),
        TableRow(
          children: <Widget>[
            ComparisonTableCell(text: 'BtcPay'),
            ComparisonTableCell(text: '√'),
            ComparisonTableCell(text: '√'),
            ComparisonTableCell(text: 'X'),
            ComparisonTableCell(text: '0%'),
          ],
        ),
        TableRow(
          children: <Widget>[
            ComparisonTableCell(text: 'Bitpay'),
            ComparisonTableCell(text: 'X'),
            ComparisonTableCell(text: 'X'),
            ComparisonTableCell(text: 'X'),
            ComparisonTableCell(text: '1%*'),
          ],
        ),
        TableRow(
          children: <Widget>[
            ComparisonTableCell(text: 'Coingate'),
            ComparisonTableCell(text: 'X'),
            ComparisonTableCell(text: 'X'),
            ComparisonTableCell(text: 'X'),
            ComparisonTableCell(text: '1% + Withdraw fees'),
          ],
        ),
        TableRow(
          children: <Widget>[
            ComparisonTableCell(text: 'Coinbase'),
            ComparisonTableCell(text: 'X'),
            ComparisonTableCell(text: '√*'),
            ComparisonTableCell(text: 'X'),
            ComparisonTableCell(text: '1%'),
          ],
        ),
      ],
    );
  }
}
