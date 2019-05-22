// ==UserScript==
// @name         博客园闪存
// @namespace    http://www.terwergreen.com/
// @version      0.0.1
// @description  博客园后台界面美化
// @author       Terwer
// @match        *://ing.cnblogs.com/*
// @grant        GM_addStyle
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// ==/UserScript==

console.log("New style of cnblogs ing desgined by Terwer!");

var config = {
   blogName:'远方的灯塔',
   author:'tangyouwei'
};

(function() {
    'use strict';

    // bootstrap4
    addLinkCss('https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css');
    console.log("add bootstrap4");

    function addLinkCss(url){
        var link = window.document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        document.getElementsByTagName("HEAD")[0].appendChild(link);
    }

    // ==========================
    // 自定义css
    var cnblogsIngCss = `
body{
    line-height:22px;
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: "Hiragino Sans GB","Microsoft Yahei",SimSun,Arial,"Helvetica Neue",Helvetica;
    color: #333;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fff !important;
}


button, input, optgroup, select, textarea {
    margin: 0;
    padding: 0;
    border: 1px solid #ededed;
    border-radius: 0;
    font-family: "Hiragino Sans GB","Microsoft Yahei",SimSun,Arial,"Helvetica Neue",Helvetica;
}

a:link, a:visited, a:active {
    color: #555 !important;
    background-color: transparent !important;
    text-decoration: none !important;
}

a:hover{
    color:  #00B38A !important;
}

ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
}
`;

    cnblogsIngCss += `
#wrapper{
    width: 100%;
}
#app_bar{
    width: 20%;
}
#container_content{
    width: 78%;
    float: right;
    margin: 0 1%;
}
#right_sidebar{
    width:200px;
}
`;

    //与元数据块中的@grant值相对应，功能是生成一个style样式
    GM_addStyle(cnblogsIngCss);

    // 重新布局
    reAlign();

    function reAlign(){
      $("#top").remove();
    }
})();
