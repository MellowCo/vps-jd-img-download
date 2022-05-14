import puppeteer from 'puppeteer'
import { SELECTOR, IMG_TYPE, CODES } from './constant.js'
import { downLoad, makeDir } from './utils/index.js'

async function openPage(){
  makeDir('/file')

  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: './userDataCache',
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
  })
  const page = await browser.newPage()

  for (let i = 0;i < CODES.length;i++){
    const code = CODES[i]
    await page.goto(`https://vsp.jd.com/sku/${code}.html`)
    makeDir(`/file/${code}`)

    let listUrls = null,
      detailUrls = null

    // 商品图
    await page.waitForSelector(SELECTOR.LIST, { timeout: 2000 })
    listUrls = await page.$$eval(SELECTOR.LIST, async(imgs) => {
      return imgs.map((img) => `https:${img.dataset.src}`)
    })
    console.log(`${code}：商品图下载中...`)
    downLoad(listUrls, `${code}/${IMG_TYPE.LIST}`)

    try {
      // 商品详情 img
      await page.waitForSelector(SELECTOR.DETAIL, { timeout: 1000 })
      detailUrls = await page.$$eval(SELECTOR.DETAIL, (imgs) => {
        return imgs.map((val) => val.src)
      })
    } catch (e){
      console.error(e)
      // 商品详情 style
      await page.waitForSelector(SELECTOR.STYLE)

      // 商品详情 为div下的 background-image
      detailUrls = await page.$$eval(SELECTOR.STYLE, (divs) => {
        console.log('divs', divs);
        // 获取style下的css代码
        const bg = []
        divs.forEach((val) => {
          // 通过正则获取 url
          // background-image: url(//img30.360buyimg.com/sku/jfs/t1/126496/16/4818/430234/5ee5c341E75997a9a/c1076fddeb3a1ab4.png);
          const tempUrls = val.innerText.match(/url\([\/\.\w]*\)/g)
          tempUrls.forEach((tempUrl) => bg.push(`https:${tempUrl.slice(4, -1)}`))
        })
        return bg
      })
    }
    console.log(`${code}：详情图下载中...`)
    downLoad(detailUrls, `${code}/${IMG_TYPE.DETAIL}`)
  }
}

openPage()
