---
title: 最受欢迎的Linux发行版, Manjaro折腾全记录（超长超详细）
date: 2019-07-02 16:39:06
tags: 
- Linux
- Manjaro
categories:
- Linux老司机
---


> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/4cece7374c806c4f3aa108c42604de51.png)

## Manjaro到底有多受欢迎?

> DistroWatch是一个包含了各种Linux发行版及其他自由/开放源代码的类Unix操作系统（如OpenSolaris、MINIX及BSD等）的新闻、人气排名、以及其他一般信息等的网站。它包含了数百种发行版的信息
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/3a527a73261675fc70f6548d8bf524bf.png)
原文链接: https://distrowatch.com/table.php?distribution=manjaro


<!-- more -->

## 获取manjaro
- 进入官网获取镜像 https://manjaro.org/download/
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/c53451572f2da24588bab741d0bce7c9.png)
镜像下载地址:https://osdn.net/dl/manjaro/manjaro-kde-18.0.2-stable-x86_64.iso
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/7bbaf473ce556990a02f7171cd7b128b.png)

## 在vmware中安装manjaro
- 选择镜像
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/9c87bd6537179a15da38994c3a9abc5c.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/da38e0e6a0a1c4437089cc3cca724675.png)

- 配置虚拟机
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/6b20f7f4865ee2dfb462a4310cb9c8c1.png)
- BIOS启动
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/7b70856d934107dbc954f978be926478.png)
- 自定义配置
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/9126eced118709501180786f4eff404d.png)

- 硬盘推荐50G或更大
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/f23ef24aedfb13dfaa770e6073551cb0.png)
- 内存4G
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/c7dd54e0665dabe271533ebbbadf9de5.png)
- 开机
> ![image.png](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/45504ecd3931619db709492b4eb968bd.png)
- 等待
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/1ecd14bb57ba22af27b5f3468b4e8f0a.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/1d0da7c6ef5a667cd5f66fe470f0751b.png)
- 选择中文
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/99218666f8c9fec4808eb0ca98643346.png)
- 启动安装程序
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/4801a522b5c584bca2a7b03a0ce72613.png)
- 选择语言
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/3a0b52657e1ce117cdd80edce66a082a.png)
- 选择上海, 下一步
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/84c304fb0180f2d4c911d0ac2b867c5a.png)
- 下一步
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/9c424b52d808c9c9925e61186a030e0e.png)
- 抹除磁盘,下一步
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/2ef3aca13d05e98f8fa923fa3c2dbca3.png)
- 创建用户
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/08100ce4d10f92a2aceb434f6dc6c53b.png)
- 确认信息, 开始正式安装
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/4321ba89eb14757e5e858cab0be7efe6.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/079cc163782fbcb8fa2a26fd7e3fb747.png)
- 等待安装过程
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/f29e66da2aeebdfc9517d2bd8e6f8b01.png)
- 完成安装
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/c6f843a70a14a991b99d7383ee3e0b3a.png)
- 重启后, 安装完成
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/811020451d93aa08b57d5d9e9fd41e10.png)

## 将终端添加到桌面
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/62fb3640d10d619118eda4418271b27a.png)

## 双击打开桌面的终端,查看manjaro信息
```
screenfetch
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/a93ccc8dd6088642c32a1b7681d7ba08.png)
---
现在我们还不能实现虚拟机与物理机共享粘贴板, 这里需要安装vmware-tools
## 安装 vmtool
```
sudo pacman -R open-vm-tools
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/171dfd22655b121b1ab4370419474f00.png)

```
git clone https://github.com/rasa/vmware-tools-patches.git
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/c7a13808e259929fa6d6b14f687f5673.png)

```
cd vmware-tools-patches
sudo ./patched-open-vm-tools.sh
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/2398246a75608965565acd5606367b05.png)
现在就可以愉快和物理机共享粘贴板了! 下面的各种安装命令, 都可以直接复制粘贴到虚拟机运行!
---
我们可以试着将`sudo pacman -S vim`, 粘贴到虚拟机, 安装编辑器之神vim到我们的虚拟机
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/91828701348b1d7c30e5200ef5da120a.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/03668ecbcd7fc2c576b58cd7019026e2.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/6fa3870e158df73e81d55c1644107bbe.png)

## 更换为为中科大arch软件源`sudo vim /etc/pacman.conf`
```
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/dfa26fd99824d8c10fb157bd78b9f5d0.png)

- 更新软件源
```
sudo pacman -Syy && sudo pacman -S archlinuxcn-keyring
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/97d993a9444ed7737280236b9d57e3b6.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/79b513194cd5d0b530f4192a4c74c1df.png)
## 常用pacman命令
```
pacman -S  软件名   #安装
pacman -Syu    #更新
pacman -R 软件名    #移除
```
---
开始装软件
## 安装chrome
```
sudo pacman -S google-chrome
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/2b220580b6b2fc9c6a21056f80d36c2e.png)
- 将浏览器发送到桌面
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/41f9b0173402a331c6e98395f1f72773.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/c511bb719685c0f09ffb7a20f57491c8.png)

## 安装截图
```
sudo pacman -S deepin-screenshot
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/70d974cbc3da7e20f9c391086cc101b2.png)

## 安装TIM
```
sudo pacman -S deepin-wine-tim
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/6c089187c4eb4a52c387ddde7533b566.png)

## 安装网易云音乐
```
sudo pacman -S netease-cloud-music
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/b2017c373abc39f27c01d5e753e20b75.png)

## 网易云命令行版(github开源项目)
- 高品质网易云音乐命令行版本，简洁优雅，丝般顺滑，基于Python编写
- [开源地址](https://github.com/darknessomi/musicbox)
- [使用说明](https://github.com/darknessomi/musicbox/blob/master/README.md#%E9%94%AE%E7%9B%98%E5%BF%AB%E6%8D%B7%E9%94%AE)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/11f0f5aae1e771ace79b591794b9a39f.png)

```
sudo pacman -S yaourt
yaourt musicbox
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/f143434466b7cafa9642fb9671059ba4.png)




## 安装搜狗输入法
```
sudo pacman -S fcitx-im
sudo pacman -S fcitx-configtool
sudo pacman -S fcitx-sogoupinyin
```
- 添加输入法配置文件 `sudo vim ~/.xprofile`
```
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/16d63692118483abfacf0576447b4a0e.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/27367226306be2a7837b5b68467bd824.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/573dfb4e06efc94de0393c39a9025ed1.png)
为了让输入法生效,需要重启一下
## 安装markdown编辑器
```
sudo yaourt typora
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/bf3e54467a3db6524ed0d036b5753f53.png)
## 安装pdf阅读器
```
sudo yaourt foxit
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/fe98671864d9eb9a517785ccb481e816.png)
## 开启steam
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/b1d2dfbc6feb5ac0765d1c0b01f78eb0.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/967f9994ab457ef37cb443dbbe20f0d8.png)
- steam是自带软件, 如果启动不成功, 可以补一个包steam-native-runtime
```
sudo pacman -S steam-native-runtime
```

## 安装git客户端
```
sudo yaourt GitKraken
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/bd444f15b8a0d5d460a024ab141e4f24.png)
## 安装下载工具 uget 
```
sudo yaourt -S uget 
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/a16100286a9f67cb14a70a0454c3bdc7.png)
## 安装视频播放器
```
sudo yaourt -S mpv
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/58ef479b165d7a0f104da579c4e41d48.png)


## 安装zsh
```
#最新版本已经默认安装了。
sudo pacman -S zsh
# 安装oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
# 更换默认的shell
chsh -s /bin/zsh
```
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/1f685976074f02fa0d2fc9a9dc304ca3.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/a011d357aa81f35b9287d2680548efa5.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/07d8ce4d2010775a65f11207543134ef.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/2052ea3e4d4e5242d838d06efe3bfd6d.png)

## 让终端更好用
- 调整字体字号
> ![image.png](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/c20001ae02542e81056a51997e950693.png)
- 直接粘贴命令
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/211f83682ad98d62b7cf754b49a73397.png)

## 来点扩展(添加部件)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/8ab009d07eec507eb86c81643c048863.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/7e363728375bb6fc33e102942c5c964e.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/95f7decef565454461a73fbc534b1344.png)
- 组件: 应用程序面板
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/eea5cf2171e517a45af59f8bb149152d.png)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/78fe6e13e1c620246913176426e4293a.png)


## 小结:
- manjaro基于大名鼎鼎的arch, 拥有最为丰富的软件源, 界面UI简洁大方
- manjaro的系统动画非常流畅, 不像ubuntu那样卡顿, 显卡驱动也是一键安装
- manjaro本身也有好几个版本, 上文是基于KDE版本的, 也就是界面最复杂的版本, 其它版本安装软件会更简单一些, 如果你喜欢折腾, 就不要错过manjaro, 当然如果你对manjaro背后的arch感兴趣, 可以参考这一篇https://www.jianshu.com/p/3d3da6b930a1



