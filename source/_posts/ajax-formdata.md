---
title: 使用原生ajax通过formdata完成文件上传,并实时监控上传进度
date: 2019-07-01 07:05:30
tags: 
- ajax
- formdata
- Node.js
categories:
- 前端
---

- 在ajax1.0时代, 是无法直接上传文件的, 到了ajax2.0时代, 新增了FormData, 我们就可以用FormData完成文件的上传

- 以前我们用form表单中的`<input type="file"/>`实现文件上传, 但前端无法实时查看上传的进度, 而ajax2.0可以让我们实时监控上传进度

- 下面是一个原生js使用ajax 完成 FormData上传文件, 并实时监听文件上传进度的小Demo, 前后端均已完成代码实现(后端为nodejs实现)

## GIF效果展示
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/89035c4225712a81a5ab6018191a53a6.gif)


<!-- more -->

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/1189f7ade380d1148b1522a4af2259b2.png)



前端实现代码:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>原生ajax2.0使用FormData上传文件, 并监听上传进度</title>
</head>
<body>
    <div style="text-align: center; padding-top: 50px">
        <div style="font-size: 16px; color: #44A1F8;padding-bottom: 50px">原生ajax2.0使用FormData上传文件, 并监听上传进度</div>
        <input type="file" id="avatar" />
        <button onclick="to_upload_file()">上传</button>
        <br>
        <br>
        <div style="text-align: left;display: inline-block;width: 300px; height: 20px; border: 1px solid #44A1F8; border-radius: 2px;position: relative">
            <div id="progress_bar" style="display: inline-block; width: 0px; height: 20px;background-color: #64B587"></div>
            <div style="text-align: center;width: 300px;position: absolute; top: 0; font-size:16px; color: #413F43">
                <div id="loading">
                    上传进度0%
                </div>
            </div>
            
        </div>
    </div>
        <script>
            // 处理上传进度
            function progressFunction(e){
                var progress_bar = document.getElementById("progress_bar");
                var loading_dom = document.getElementById("loading");
                var loading = Math.round(e.loaded / e.total * 100);
                console.log("loading::", loading);

                if(loading === 100){
                    loading_dom.innerHTML = "上传成功^_^";
                }else{
                    loading_dom.innerHTML = "上传进度"+loading+"%"
                }
                
                progress_bar.style.width = String(loading * 3) + "px";
            }
            // 上传成功
            function uploadComplete(e) {
                console.log("上传成功！", e);
            }
            // 上传失败
            function uploadFailed(e) {
                console.log("上传失败", e);
            }
    
            function to_upload_file(){
                var file_obj = document.getElementById("avatar").files[0]
                if(file_obj){
                    var url = "/upload_file";
                    var form = new FormData();
                    form.append("file", file_obj);
                    var xhr = new XMLHttpRequest();
                    xhr.onload = uploadComplete; // 添加 上传成功后的回调函数
                    xhr.onerror =  uploadFailed; // 添加 上传失败后的回调函数
                    xhr.upload.onprogress = progressFunction; // 添加 监听函数
                    xhr.open("POST", url, true);
                    xhr.send(form);
                }else{
                    alert("请先选择文件后再上传")
                }
            }
        </script>
</body>
</html>
```

- 后端实现代码
```
const express = require("express");
const multer = require("multer");
const expressStatic = require("express-static");
const fs = require("fs");

let server = express();
let upload = multer({ dest: __dirname+'/uploads/' })
// 处理提交文件的post请求
server.post('/upload_file', upload.single('file'), function (req, res, next) {
  console.log("file信息", req.file);
  fs.rename(req.file.path, req.file.path+"."+req.file.mimetype.split("/").pop(), ()=>{
    res.send({status: 1000})
  })
})

// 处理静态目录
server.use(expressStatic(__dirname+"/www"))
// 监听服务
server.listen(8080, function(){
  console.log("请使用浏览器访问 http://localhost:8080/")
});
```

## Gif图中使用的小姐姐图片素材
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/a9cbc4f00c87d3876d4ea88702aee549.jpeg)
> - [点我获取上图超清版](https://github.com/zhaoolee/FrontEndClubIsBook/raw/master/%E3%80%8A%E5%80%BC%E5%BE%97%E6%94%B6%E8%97%8F%E7%9A%84%E5%A3%81%E7%BA%B8%E3%80%8B/%E6%B1%9F%E5%8D%97%E7%83%A7%E9%85%92.jpg)
## 小结:

本文代码及相关素材已经托管到Github仓库, 永久下载地址[https://github.com/zhaoolee/Blog/tree/master/form_data_upload_file](https://github.com/zhaoolee/Blog/tree/master/form_data_upload_file)