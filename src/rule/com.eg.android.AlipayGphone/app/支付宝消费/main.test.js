const { get } = require('./main');
const { testAnkioInit, testAnkio } = require('../../../../tests/TestUtils');


testAnkioInit(get, __dirname, 'com.eg.android.AlipayGphone');

test('支付宝消费', () =>
  testAnkio('支付宝消费', [
    {
      "type": "Expend",
      "money": 19.9,
      "fee": 0,
      "shopName": '广州市动景计算机科技有限公司',
      "shopItem": '夸克网盘会员(月/季/年)',
      "accountNameFrom": '长沙银行储蓄卡(2754)',
      "accountNameTo": '',
      "currency": 'CNY',
      "time": 1712524722000,
      "channel": '支付宝[消费-支出]',
    },
    {
      "type": "Expend",
      "money": 183,
      "fee": 0,
      "shopName": '滴滴平台第三方油站',
      "shopItem": '付款成功￥183.00 ',
      "accountNameFrom": '农业银行储蓄卡(9979)',
      "accountNameTo": '',
      "currency": 'CNY',
      "time": 1710680143000,
      "channel": '支付宝[消费-支出]',
    },
    {
      "type": "Expend",
      "money": 55,
      "fee": 0,
      "shopName": '173******86(未实名)',
      "shopItem": '付款成功￥55.00 ',
      "accountNameFrom": '北京银行信用购(原花呗)',
      "accountNameTo": '',
      "currency": 'CNY',
      "time": 1712723745000,
      "channel": '支付宝[消费-支出]',
    },

  ]));


test('支付宝收入', () =>
  testAnkio('支付宝收入', [
    {
      "type": "Income",
      "money": 0.02,
      "fee": 0,
      "shopName": '吱信（上海）网络技术有限公司',
      "shopItem": '支付宝发红包，你赚现金奖励',
      "accountNameFrom": '支付宝余额',
      "accountNameTo": '',
      "currency": 'CNY',
      "time": 1715479904000,
      "channel": '支付宝[消费-收入]',
    },
    {
      "type": "Income",
      "money": 0.3,
      "fee": 0,
      "shopName": '北京快手科技有限公司 bjk***@kuaishou.com',
      "shopItem": '收款到账￥0.30',
      "accountNameFrom": '支付宝余额',
      "accountNameTo": '',
      "currency": 'CNY',
      "time": 1714212854000,
      "channel": '支付宝[消费-收入]',
    },
    {
      "type": "Income",
      "money": 29.82,
      "fee": 0,
      "shopName": '退款通知',
      "shopItem": '退款-麻爪爪·酸辣凤爪·卤味小吃(大朗里悦里店)外卖订单',
      "accountNameFrom": '农业银行储蓄卡(9979)',
      "accountNameTo": '',
      "currency": 'CNY',
      "time": 1710669984000,
      "channel": '支付宝[消费-收入]',
    },
  ]));

  test('支付宝消费-英文', () =>
    testAnkio('支付宝消费-英文', [
      {
        "type": "Expend",
        "money": 14.9,
        "fee": 0,
        "shopName": '东南大学',
        "shopItem": 'Payment successful￥14.90 ',
        "accountNameFrom": 'BOC Debit Card(9372)',
        "accountNameTo": '',
        "currency": 'CNY',
        "time": 1726910854000,
        "channel": '支付宝[消费-支出]',
      },
      {
        "type": "Expend",
        "money": 12.5,
        "fee": 0,
        "shopName": '东南大学',
        "shopItem": 'Payment successful￥12.50 ',
        "accountNameFrom": 'BOC Debit Card(9372)',
        "accountNameTo": '',
        "currency": 'CNY',
        "time": 1726996018000,
        "channel": '支付宝[消费-支出]',
      },
    ]));