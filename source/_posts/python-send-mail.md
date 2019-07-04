---
title: 3行代码发邮件(含发送图片)
date: 2019-07-02 09:20:22
categories:
- 程序员

tags: 
- Python
- mail
---
> 最近有发邮件的需求
> 发现了一个python发邮件的开源项目[yagmail](https://github.com/kootenpv/yagmail), 3行代码搞定邮件, 很赞

## 以下三行代码实现的功能

- 发送超链接
- 发送图片资源(支持发送各种静态资源, 文件名最好是英文)

<!-- more -->

## 源码
```
import yagmail

# 连接邮箱服务器
yag = yagmail.SMTP(user="lijianzhaoyou@163.com", password="填自己的", host='smtp.163.com')

# 邮箱正文
contents = ['今天是周末,我要学习, 学习使我快乐;', '<a href="https://www.python.org/">python官网的超链接</a>', './girl.jpg']

# 发送邮件
yag.send('zhaoolee@gmail.com', '主题:学习使我快乐', contents)
```

##  图片资源在此:
> ![girl.jpg](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/f0d68a44d83322c194482f4c28adfc36.png)

> ![gmail收到的邮件](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/342f5110530330f2fc61b1198d6c3080.png)
> ![qq邮箱收到的邮件](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/a7cc6caa5d9cadd8fdef46754437f85c.png)



> 如何获取163邮箱授权码?
> ![设置 => POP3/SMTP/IMAP](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/245479d46b420b90ace78fc62fc1ae9b.png)
> ![设置授权码](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/e3cfd472a30bfa823e3b1252a4d92d1a.png)
> ![弹框提示](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/8a00504611a070226e4ce78a66c658b7.png)
