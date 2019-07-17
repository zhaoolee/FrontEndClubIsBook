const fs = require("fs");
const path = require("path");
const axios = require('axios');


// 获取chromeappheroes readme数据
// https://raw.githubusercontent.com/zhaoolee/ChromeAppHeroes/master/README.md

async function get_md_data (href){
    let data = await axios.get(href);
    let result = data.data;
    console.log(result);
    return result;
}


async function replace_md (html_href, file_path){
    // 获取md数据
    let html_data = await get_md_data(html_href)
    // 获取chrome_app_heroes数据
    let md_data = fs.readFileSync(file_path).toString();
    let start_index = md_data.indexOf("<!-- more -->");
    let end_index = md_data.length-1;
    let old_content = md_data.slice(start_index, end_index);
    let new_content = "<!-- more -->\n\n"+html_data;
    let new_md_data = md_data.replace(old_content, new_content);
    fs.writeFileSync(file_path, new_md_data);
    console.log("===>>", new_md_data, "\n", file_path, "内容替换完成");
}


async function main(){

    // 爬取Chrome插件英雄榜并替换到本地文件中
    await replace_md("https://raw.githubusercontent.com/zhaoolee/ChromeAppHeroes/master/README.md", "./source/_posts/0006-chrome_app_heroes.md");

    // 爬取中国人的表情包并替换到本地文件中
    await replace_md("https://raw.githubusercontent.com/zhaoolee/ChineseBQB/master/README.md", "./source/_posts/0008-bqb.md");

    // 爬取星聚弃疗榜并替换到本地文件中
    await replace_md("https://raw.githubusercontent.com/zhaoolee/StarsAndClown/master/README.md", "./source/_posts/0003-stars_and_clown.md");

}

main();



