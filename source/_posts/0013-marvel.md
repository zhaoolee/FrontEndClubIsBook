---
title: 《Marvel漫威宇宙》(香肠)
date: 2019-07-06 00:00:12
top: 8800
tags: 
- Marvel漫威宇宙
- 香肠
categories:
- 《Marvel漫威宇宙》(香肠)
---

------

<!-- more -->


- 主要贡献者: [ChanClay](https://github.com/ChanClay)








## 如何快速拥有一个像贾维斯一样聪明的智能管家

*作为一名程序员，除了撸码每天自然需要想一些比较N(zhi)B(zhang)的操作，在这里我将带领大家打开全新的漫威宇宙大门，感受不一样的漫威科技*

在开始之前我们需要安装Node.js来确保我们的AI能跑起来，至于怎么安装此处直接省略。。。(绝不是因为我懒！！！)

我创建这个系统的时候，经过深思熟虑才觉得给它命名为ai.js，由于该系统是人工智能系统开发道路上人们迈出的一大步，所以模块划分极为严谨、繁琐，一共有**4**个模块

第一个模块:**系统初始化**

这将是我们整个系统运行的第一步，相信大家运行起来后能明显感受到，系统对人类浓浓的温暖

```
var init = function(){
    console.log('你好，请问有什么可以帮您的吗？');
    initAi();
};
```

第二个模块:**Ai交流初始化**

这个时候我们是我们的系统最渴望发挥自己作用的时候，它调整好了自己的状态，即将开始聆听我们的声音

```
var readline;
var ai;
var initAi = function(){
    readline = require('readline');
    ai = readline.createInterface({  
        input: process.stdin,  
        output: process.stdout  
    });
    contract();
}
```

第三个模块:**交流信息传输**

它感受到我们输入的内容了，它即将对我们的提问进行处理

```
 var contract = function(){
    ai.on('line', function (input) {
        idiot(input);
    });
}
```

第四个模块:**AI信息分析并反馈**

它在认真的思考我们的问题，并对我们的提问做出了回答，这简直就是完美的Ai系统

```
var idiot = function(msg){
    ai.close();
    if(msg == "再见"){
        return;
    }
    var strs= new Array();
    msg=msg.replace("你","我")
    msg=msg.replace("？","！")
    msg=msg.replace("我想","你可以")
    strs=msg.split("吗");
    var n = strs.length;
    var result = '';
    for(let i = 0;i<n;i++){
        result += strs[i];
    }
    console.log(result)
    initAi();
}
```

当你读懂这四个模块后自然就知道我们的ai有多强大了,最后配上强大AI的运行图片(本期单纯因为本人太忙了，皮一下，后面的一定是干货，打人别打脸，谢谢T_T)

![ai](https://user-images.githubusercontent.com/15868458/61673333-a4af7900-ad21-11e9-9972-f31b55e79c5e.png)



