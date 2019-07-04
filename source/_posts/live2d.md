---
title: 3行代码 为网站添加萌萌哒看板娘
date: 2019-07-04 08:09:17
tags: 
- 看板娘
- Hexo
- Next
categories:
- 个人网站
---
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/a578298705ef3749a72362da3b2445e6.png)

> 看板娘一词源自日语“看板娘(かんばんむすめ)”。其中的“看板”指的是店面招牌，或者是为了宣传、打广告而制作的宣传牌。“看板娘”也就是店面的招牌姑娘，亦即能够提升店面人气和顾客流量的女服务生、女店员等。也就是说，看板娘本身就是一块“活看板”，其本身的魅力就能够起到宣传、拉人气的作用。英语又称之为“Poster Girl”。

<!-- more -->
- 上面这一段是百度说的

> 为网站添加萌萌哒看板娘, 可以让网站更有吸引力 
- 上面这一句是昭昭说的(皮一下, 很开心)

以下Gif图录制页面: [https://zhaoolee.github.io/GBlog/](https://zhaoolee.github.io/GBlog/) 

- 看板娘默认只在PC端才会显示 (手机屏幕太小, 放上看板娘容易遮挡内容, 体验不好)

## 效果如图所示:

- 可以玩射击游戏, 被射击到的网页元素会消失

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/4e81a9d5ee08681ad965520fc74a133a.gif)
> 里面的子弹可以穿越屏幕边缘的哦(空格键发射子弹, 左右键旋转飞机🛬)

- 更换看板娘

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/335a107b1e4b4f291483c54d51b33080.gif)
> 更换看板娘的记录,会被存储到浏览器的Local Storage里面, 下一次进入网页, 依然会是你喜欢的看板娘


- 给看板娘换装

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/ed82c702b6cde5a3aa0768cb2ccfb7a6.gif)
> 看板娘换装的记录,也会被存储到浏览器的Local Storage里面, 下一次进入网页, 依然会是你喜欢的看板娘和她的衣服

- 换了好看的衣服, 拍张照片吧!

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/74045dab5ba9eca8cd7db6efb08ec459.gif)

- 看博客的时候, 看板娘会给出贴心小提示


> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/4a562e2f3d197a6d3d613bdac0e69b9d.gif)


## 如何安装看板娘

- 只需在网页中引入这三行代码即可

```
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css"/>
<script src="https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js"></script>
```

## 定制看板娘的语录(调教你的看板娘)
- 1. 从github中下载项目: [https://github.com/stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)
- 2. 更改waifu-tip.json里面的内容
![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/a5a143e7da2a8b689813c2ec1dae5b65.png)

- 3. 更改autoload.js的引入位置
将`<script src="https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js"></script>` 改成自己的
如果实在不会玩, 可以参考我的代码, 开源地址: [https://github.com/zhaoolee/GBlog](https://github.com/zhaoolee/GBlog)


## 小结:

看板娘的很多语言都是通过配置文件定制的, 所以看板娘的秉性全靠主人的本事, 我改了一下配置文件, 感觉很欢乐, 甚至玩出了人工智能的感觉~






