---
title: 安装kali虚拟机
date: 2019-07-02 14:18:16
tags: 
- Linux
- Kali
categories:
- Linux老司机
---

> ![Kali](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/a569ba44eb6ab113e906a6c308270149.png)

###### Kali是一套用于安全渗透(黑客)的Linux发行版, 好处在于, 系统内置了大量的安全渗透方面的软件, 新手可以免于配置, 开箱即用! 
> 即使不打算做安全, 开阔一下眼界也是好的~
> ![动图: 内置工具](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/645e5f4866fdbb1d87efcb06b10deb14.gif)

<!-- more -->
###### Kali安装的过程中, 给出了太多的选项, 这里详细记录了安装配置的过程

## 第一部分: 获取镜像(kali-linux-2018.1-amd64), 配置虚拟机(VMware 专业版 10.1.0 )
####  获取Kali[镜像](https://images.offensive-security.com/kali-linux-2018.1-amd64.torrent)
> ![Kali镜像](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/09f017868df8e9530844f8587ac64fe4.png)

####  第二部分: 建立虚拟机
###### 从镜像安装
> ![从镜像安装](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/0f2ece70e4a2f94796117289461ffa82.png)

###### 选择镜像, 继续
> ![选择镜像](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/4f23800a4412dab15403024482f0883b.png)
###### 选择最新 Debian64位
> ![选择Debain64位](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/b12679896ffb63a185c5c7ad32ea690c.png)
###### 选择传统BIOS引导, 继续
> ![传统BIOS引导](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/1c9b82ad817f2c97171afc80c7a58f0a.png)

###### 自定设置
> ![自定设置](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/51bae93cffbfb680e229de973198b4ff.png)
> 选择位置后, 配置内存为4G 和硬盘容量为 64G(物理机资源充足, 为了虚拟机流畅,可以多配置一些物理资源)
> ![硬盘64G](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/018b507758efa048aed1ebe8ee313b90.png)
> ![内存4G](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/b472f1306435928e7efe33187306a273.png)
## 第三部分: 开启虚拟机
> ![安装图形化界面](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/68336fc2a277a1d04ebaf7b45b9018f0.png)
###### 语言:中文简体
> ![中文简体](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/82f88f004e047b27db5debd2c988ecba.png)

###### 地区: 中国
> ![中国](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/db0a5d11fc0d7ec13be4c56ddf8c6f2f.png)

###### 语言: 汉语
> ![语言选择](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/5b9d7f3e7d832fd07487de87ccaf9b96.png)

###### 自动安装
> ![自动安装](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/f135606751a35c1ad0492f0fea213d5e.png)

###### 配置网络
> ![网络配置](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/88716f849575ad652622f4d4d7532ba1.png)


###### 配置域名
>![配置域名](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/7cc6c243888700dbfffbaad9c757f401.png)

###### 填写密码(两次一致)
> ![填写密码](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/34f2f26c96bedbfdc2eed235549ddd51.png)

##### 自动校对时钟
> ![校对时钟](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/d3a6e1ffc0e0af337c0fb3220e0980c2.png)
###### 使用整个磁盘
> ![使用整个磁盘](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/59d663edac47e1b1db714849229a8d26.png)

###### 选择需要分区的磁盘
> ![磁盘分区](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/271c83bb0c21f18558f6be0087194702.png)
###### 选择分区方式
> ![选择分区方式](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/3a2b44bfbfe52aa6a174878112814ccb.png)

###### 确认分区
> ![确认分区](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/93238f488ec47237ca0ed15fc6d4641a.png)

###### 真的确认了? 真的!
> ![确认分区](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/dd0e823d563c943bd37dff4abe15a93f.png)

###### 安装系统
> ![安装系统](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/331b0ac7073f3fde123b4d15d1cc0561.png)

###### 使用网络镜像吗? 否!
> ![选择否](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/bbb2d22c1e24f2e43f51df0daac04552.png)


###### 将GRUB安装至硬盘? 是!
> ![是](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/0b5c17b31abcd5db0d026b7d1fff73a9.png)

###### 选择启动器安装位置
> ![选择启动器安装位置](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/5320cde881568cb5c531d6d1d2f7ef50.png)


###### 重启, 完成安装!
> ![重启](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/ccd93c9e4ef3d1128521f5c9bd501199.png)
>
> ##  第四部分: 登录系统 
###### 登录root账户
> ![输入用户名](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/25b0916f5ed65bb09d98f39c25836cf9.png)
> ![输入密码](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/235188b056db89599d26b4d59f3d4f3d.png)
> ![安装完成](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/3d6c36c4b03090f1e53260158bd96519.png)


## 第五部分: Kali的基本配置

###### 安装VMware Tools(物理机和虚拟机可共享粘贴板, 拖拽传输文件)
> ![安装VMware Tools](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/7edebfa4846d99d78e253eae74208c41.png)
> ![挂载安装](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/5262034282467b61709d7d598fab8230.png)
> ![复制tool](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/bce5efe5eb9fae2774d657b0be7b83ca.png)
> ![解包](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/8458ad845b34384b5f3d3f7632924bb0.png)
> ![一路回车](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/6c55779d49922e54cfdb6ab442b7f51e.png)
> 重启生效

###### 更换镜像源
1. 编辑 `vim /etc/apt/sources.list`
2. 将镜像源写入`sources.list`文件, 
3. `:wq`,退出保存文件
4. 更新镜像源`apt-update`
```
#阿里云
deb http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
deb-src http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
 
#清华大学
deb http://mirrors.tuna.tsinghua.edu.cn/kali kali-rolling main contrib non-free
deb-src https://mirrors.tuna.tsinghua.edu.cn/kali kali-rolling main contrib non-free

#中科大
deb http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
deb-src http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
  
#浙大
#deb http://mirrors.zju.edu.cn/kali kali-rolling main contrib non-free
#deb-src http://mirrors.zju.edu.cn/kali kali-rolling main contrib non-free
 
#东软大学
#deb http://mirrors.neusoft.edu.cn/kali kali-rolling/main non-free contrib
#deb-src http://mirrors.neusoft.edu.cn/kali kali-rolling/main non-free contrib
 
#官方源
#deb http://http.kali.org/kali kali-rolling main non-free contrib
#deb-src http://http.kali.org/kali kali-rolling main non-free contrib
 
#重庆大学
#deb http://http.kali.org/kali kali-rolling main non-free contrib
#deb-src http://http.kali.org/kali kali-rolling main non-free contrib
```
> ![清华, 阿里, 科大 源更新成功](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/2317fba8644016b2297c03f3d6be55b0.png)

###### 安装google拼音输入法
```
apt-get install fcitx
apt-get install fcitx-googlepinyin
```
重启系统后生效, 输入法切换, ctrl+space

###### 更改目录为英文, 方便跳转
```
mv 桌面 Desktop
mv 文档 Documents
mv 图片 Pictures
mv 音乐 Music
mv 下载 Downloads
mv 视频 Video
mv 公共 Public
mv 模板 Template
```
> ![before](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/18394196af71f56750781dc50c6195f0.png)
> ![after](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/190d44bcefb9d4cdf66b1738e5b1ca1f.png)


