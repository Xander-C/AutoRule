const { get } = require('./main');
const { testAnkioInit, testAnkio } = require('../../../../tests/TestUtils');

const { formatDate } = require('common/index.js');

testAnkioInit(get, __dirname, 'com.tencent.mm');
test('微信转账收款', () =>
  testAnkio('微信转账收款', [
    {
      "type": "Income",
      "money": 17.0,
      "fee": 0,
      "shopName": '师大123',
      "shopItem": '你已收款，资金已存入零钱',
      "accountNameFrom": '零钱',
      "accountNameTo": '',
      "currency": 'CNY',
      "time": formatDate('2024年04月23日 11:50:05', 'Y年M月D日 h:i:s'),
      "channel": '微信[转账收款]',
    },
    {
      "type": "Income",
      "money": 399.84,
      "fee": 0,
      "shopName": 'Aa川信24小时自提点',
      "shopItem": '你已收款，资金已存入零钱',
      "accountNameFrom": '零钱',
      "accountNameTo": '',
      "currency": 'CNY',
      "time": formatDate('2024年05月13日 08:16:33', 'Y年M月D日 h:i:s'),
      "channel": '微信[转账收款]',
    },
  ]));
