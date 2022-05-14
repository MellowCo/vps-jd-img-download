/*
 * @Author: licl
 * @Date: 2022-05-14 16:08:15
 * @LastEditTime: 2022-05-14 16:52:04
 * @LastEditors: licl
 * @Description: 
 */
import { join } from 'path'
import request from 'request'
import { existsSync, mkdirSync, createWriteStream } from 'fs'


// 创建文件夹
export function makeDir(path){
  const dirPath = join('./', path)

  if(!existsSync(dirPath)){
    mkdirSync(dirPath)
  }

  return dirPath
}

/**
 * 下载图片
 * @param {*} urls 图片的url数组
 * @param {*} path 保存的文件夹名称
 */
export function downLoad(urls, path){
  for (let i = 0;i < urls.length;i++){
    const url = urls[i].replace('n5', 'n1')
    const name = url
      .split('/')
      .pop()
      

    let stream = createWriteStream(join(makeDir(`/file/${path}`), name))

    request(url)
      .pipe(stream)
      .on('close', function(){
        console.log(`文件[${name}]下载完毕`)
      })
  }
}
