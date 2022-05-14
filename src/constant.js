/**
 * @typedef {Object} IMG_TYPE
 * @property {string} LIST 商品图
 * @property {string} DETAIL 商品详情
 */

/**
 * @type {IMG_TYPE}
 */
export const IMG_TYPE = {
  LIST: 'list',
  DETAIL: 'detail'
}

/**
 * @typedef {Object} SELECTOR
 * @property {string} LIST 商品图的选择器
 * @property {string} DETAIL 商品详情的选择器
 * @property {string} STYLE 商品详情style的选择器
 */
export const SELECTOR = {
  LIST: 'body > div.goods-detail > div.container.main-info-box > div > div > div.main-img-box > div.scroll.img-list-scroll > div > div.scroll-content > div > div > img',
  DETAIL: 'body > div.goods-detail > div > div.detail-content-box.container > div.tab-con > div.wdis img',
  STYLE: 'body > div.goods-detail > div > div.detail-content-box.container > div.tab-con > div.wdis > style'
}

// 京东商品编码
export const CODES = [
  100003839604,
  100006674653,
  100006691925,
  283407,
  782870,
  100001967835,
  100002749220,
  100002233158,
  100000470506,
  100002253696,
  7615209,
  7401114,
  100001671301,
  100007178954,
  100007174296,
  921622,
  5277278,
  4212107,
  4212093,
  5517154,
  5212435,
  7551342,
  251321,
  100006140582,
  2719782,
  1589983,
  5626394,
  1257030,
  100009884494,
  1020958,
  1229274,
  547625,
  100005874595,
  100004080666,
  1257017,
  5212141,
  100010792504,
  100005996615,
  2305548,
  1815113,
  2494030,
  4562448,
  100010086872,
  100010205210,
  1789970,
  4173042,
  8031356,
  100005642161,
  100010086870,
  2026944,
  1916952,
  8245159,
  1549379,
  2271513,
  100000371769,
  100005701521,
  100005642173,
  100010205188,
  7729169,
  4306678,
  4115001,
  4928228,
  4211042,
  5114900,
  6554399,
  8293524,
  8506189,
  6399613,
  100006250956,
  6098230,
  3806515,
  4342643,
  100005412100,
  100010566414,
  758284,
  2209566,
  731821,
  2134982,
  547702,
  1282777,
  623718,
  623727,
  100004709771,
  100004364581,
  100005079241,
  100007537848,
  100007514746,
  100012460532,
  100009263758,
  100009119302,
  100000372035,
  100000164074,
  100008964422,
  100011176740,
  100011176754,
  6571080,
  7482590,
  100006368210,
  5965327,
  5319736,
  7551452,
  7551430,
  6571082,
  7482560,
  100003975469,
  1707085,
  100004483355,
  6571056,
  100001554223,
  100002937375,
  100004686758,
  100004172358,
  5093595,
  100005445804,
  100006057399,
  5197510,
  5227744,
  7949936,
  100000597148,
  4250979,
  2170821,
  2170730,
  2170706,
  4602893,
  100000511528,
  100000509427,
  100009585358,
  100001956937,
  4295615,
  100009585374,
  5423766,
  1279118,
  1455935,
  5964698,
  1479754,
  6061813,
  1324253,
  100005842862,
  1200964,
  6050303,
  100007603128,
  100007345904,
  312454,
  7739938,
  5965243,
  100011165140,
  100001717841,
  100011165162,
  897628,
  859381,
  1883578,
  100011165138,
  100011165136,
  1883572,
  100002408530,
  6411149,
]