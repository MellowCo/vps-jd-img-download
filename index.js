//文件下载
import { existsSync, mkdirSync, createWriteStream } from 'fs'
import { join } from 'path'
import request from 'request'
import puppeteer from 'puppeteer'
import codes from './data.js'
import { DETAIL, LIST, IMG_TYPE } from './constant.js'

// 创建文件夹
function makeDir(path) {
  const dirPath = join('./', `/file/${path}`)

  if (!existsSync(dirPath)) {
    mkdirSync(dirPath)
  }

  return dirPath
}

/**
 * 下载图片
 * @param {*} urls 图片的url数组
 * @param {*} path 保存的文件夹名称
 */
function downLoad(urls, path) {
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i].replace('n5', 'imgzone')
    const name = url.split('/').pop()

    let stream = createWriteStream(join(makeDir(path), name))
    request(url)
      .pipe(stream)
      .on('close', function () {
        console.log('文件[' + name + ']下载完毕')
      })
  }
}

async function openPage() {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: './userDataCache'
  })
  const page = await browser.newPage()

  for (let i = 0; i < codes.length; i++) {
    const code = codes[i]
    await page.goto(`https://vsp.jd.com/sku/${code}.html`)

    makeDir(code)

    let listUrls = null,
      detailUrls = null

    await page.waitForSelector(LIST)

    // 商品图
    listUrls = await page.$$eval(LIST, (imgs) =>
      imgs.map((val) => val.src)
    )

    downLoad(listUrls, `${code}/${IMG_TYPE.LIST}`)

    // 商品详情
    detailUrls = await page.$$eval(DETAIL, (imgs) =>
      // 商品详情 img
      imgs.map((val) => val.src)
    )

    if (detailUrls.length === 0) {
      // 商品详情 为div下的 background-image
      detailUrls = await page.$$eval('style', (divs) => {
        // 获取style下的css代码
        const bg = []
        divs.forEach((val) => {
          // 通过正则获取 url
          // background-image: url(//img30.360buyimg.com/sku/jfs/t1/126496/16/4818/430234/5ee5c341E75997a9a/c1076fddeb3a1ab4.png);

          const tempUrls = val.innerText.match(/url\([\/\.\w]*\)/g)
          tempUrls.forEach((tempUrl) =>
            bg.push(`https:${tempUrl.slice(4, -1)}`)
          )
        })
        return bg
      })
    }

    downLoad(detailUrls, `${code}/${IMG_TYPE.DETAIL}`)
  }
}

openPage()
