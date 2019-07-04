---
title: Python将md批量转为docx.md
date: 2019-07-02 10:09:12

categories:
- 程序员

tags: 
- Python
- Word
- Markdown

---

> 这两天写毕业论文, 发现了一个可以将markdown快速转为word格式的小工具**pandoc**, 非常好用, 比如我有一个名为`毕业论文.md`的文件, 我只需在命令行运行
```
pandoc 毕业论文.md -o 毕业论文.docx
```
即可根据md文件生成新的docx文件! 

<!-- more -->
###### pandoc支持相互转换的格式, 多的惊人!  
> ![pandoc](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/7c842ad61192e2828f14c335c9c0d634.jpeg)
## Pandoc[主站链接](https://pandoc.org/index.html)
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/7e41be7ec3e377991d6dc7e243a6c32c.png)
## 安装包[下载地址](https://github.com/jgm/pandoc/releases/tag/2.2)
> ![https://github.com/jgm/pandoc/releases/tag/2.2](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/060943e44678d8f7c593b4adf477da0e.png)

## 使用技巧:
- 由于word确实很难用, 我们可以用md格式书写, 然后转换成docx
- 懒是第一生产力, pandoc可以在命令行运行, 所以, 我们可以配合python脚本将`md`格式批量转换为`docx`
- 这是我写的一个简易脚本


```python
import os  

def auto_md_to_docx(file_dir):
    # 获取当前目录下所有的md文件的路径信息
    all_whole_path_files = []
    for root, dirs, files in os.walk(file_dir):
        for file in files:
            try:
                if file[-3:] == ".md":
                    file_info = [root+'/', file]
                    all_whole_path_files.append(file_info)
            except Exception as e:
                print(e)
    print("==>", all_whole_path_files)

    # 将md依次转换为pandoc
    for file_info in all_whole_path_files:
        md_file_path_file = file_info[0] + file_info[1]
        docx_file_name = file_info[1][:-3] + '.docx'
        docx_file_path_file = file_info[0] + docx_file_name
        new_command = 'pandoc ' + md_file_path_file + ' -o ' + docx_file_path_file

        try:
            result = os.popen(new_command).readlines()
            if len(result) == 0:
                print(md_file_path_file, "已经转换为", docx_file_path_file)
        except Exception as e:
            print(e)

def main():
    auto_md_to_docx('.')

if __name__ == '__main__':
    main()


```
> ![运行效果](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/c9f735f0d273a51c21e5913b8254598b.png)
> ![最终结果](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/2cd983b5f65272f4304e8ccedeb8b762.png)

## windows用户安装pandoc
#### 1.下载32位免安装版软件包
下载地址: https://github.com/jgm/pandoc/releases/tag/2.2.1
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/092dae2c76f1e425f21e3a7f713976d3.png)
#### 2.将软件包放入c盘, 并解压
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/07a9ce868548792b5383ca389a296a7c.png)

#### 3.获取pandoc.exe的绝对路径
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/44a9ec98a5a0bbab827daf5270a29f8f.png)

#### 4. 将pandoc.exe的绝对路径放入环境变量
> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/54015040f12f14d002db63d0392fc6a2.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/38f6acd538a4806055c3db07625ce255.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/943f722a07cf59360787e0bc72bb0de2.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/591fd880e325bd1d7f29e72542aa0177.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/1241fa13c7de2022f46f806394553a6b.png)

> ![](https://raw.githubusercontent.com/zhaoolee/GraphBed/master/zhaoolee_images000000/14e09c7c60e52c998b986ecf0b083447.png)

- 值得一提的是, 我这里用的md测试文件, 都是从我的简书后台打包下载的, 也就是本地是不存在图片的, 而pandoc会自动帮我们把图片下载到本地, 然后保存到新生成的doc中.
- 只要将我的脚本稍加修改, 就可以按照上面的网状图, 进行任意两种格式的互转(比如word转pdf), 有兴趣的小伙伴可以自己动手折腾一下

> 另外, 小白福利, 我把这篇博客做成了视频 https://www.bilibili.com/video/av24136955/
> 欢迎观看, 欢迎投币, 欢迎弹幕, 欢迎转发



