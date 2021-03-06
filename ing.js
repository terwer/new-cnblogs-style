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

.long_input{
    display: block;
    width: 99% !important;
    height: calc(1.5em + .75rem + 2px) !important;
    padding: 0.375rem .75rem;
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin-bottom: 5px;
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
    width: 80%;
    float: right;
    margin: 0;
}
#main{
    margin-left: 20px;
}
#right_sidebar{
    width: 275ox;
}
`;

    cnblogsIngCss +=`
#top{
    height: 60px;
    position: inherit;
    border: none;
}

.header-container{
    z-index: 3;
    position: fixed;
    top: 0;
    height: 60px;
    width: 100%;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-container .logo-container{
    margin-left: 20px;
    width: 200px;
    min-width: 200px;
    display: flex;
    align-items: center;
}

.header-container .logo-container .logo {
    background-image: url(https://files-cdn.cnblogs.com/files/tangyouwei/sprite@1x.045621082c025a11d7a9.gif);
    background-position: -206px -85px;
    height: 28px;
    width: 28px;
    margin-right: 10px;
}

.header-container .logo-container .text {
    font-size: 20px;
    color: #16b998;
}

.header-container .logo-container .text a{
    color: #16b998 !important;
    padding: 0 !important;
    text-decoration: none !important;
    cursor: pointer;
}

.header-container .logo-container .beta{
    width: 50px;
    height: 22px;
    line-height: 22px;
    margin-left: 8px;
    background: #5583aa;
    font-size: 12px;
    color: #fff;
    border-radius: 2px;
    text-align: center;
}

.header-container .search-container{
    display: flex;
    align-items: center;
    position: relative;
    left: -65px;
}

.header-container .search-container .search-icon {
    height: 32px;
    width: 32px;
    background-image: url(https://files-cdn.cnblogs.com/files/tangyouwei/sprite@1x.045621082c025a11d7a9.gif);
    background-position: -136px -565px;
    position: relative;
    left: 36px;
}

.header-container .search-container input {
    outline: 0;
    width: 540px;
    height: 32px;
    border: 0 solid gray;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    padding: 0 0 0 40px;
    border-radius: 4px;
    background: #f5f6fa;
    box-sizing: border-box;
    -moz-padding-top: 3px;
}

.header-container .user-container{
    margin-right: 40px;
    display: flex;
    align-items: center;
}

.header-container .user-container .avatar{
    height: 30px;
    width: 30px;
    background: #f5f6f7;
    border-radius: 50%;
    margin-right: 25px;
    cursor: pointer;
}

.header-container .user-container .notify {
    position: relative;
    width: 25px;
    height: 25px;
    cursor: pointer;
}

.header-container .user-container .notify .notify-icon {
    width: 25px;
    height: 25px;
    background-image: url(https://files-cdn.cnblogs.com/files/tangyouwei/sprite@1x.045621082c025a11d7a9.gif);
    background-position: -102px -189px;
}

.header-container .user-container .notify .notify-count{
    position: absolute;
    top: -8px;
    left: 14px;
    padding: 0 5px;
    height: 16px;
    background: #f57f59;
    border-radius: 8px;
    display: flex;
    align-items: center;
    font-size: 10px;
    color: #fff;
}
#ing_home_search{
    display: none;
}

.submit_btn_self {
    color: #fff !important;
    background-color: #007bff !important;
    border-color: #007bff !important;

    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0 .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
`;

    cnblogsIngCss += `
#container {
    height: 100%;
    margin: 10px 400px 0 400px;
    position: relative;
}

#app_list_wrapper{
}
.app_r_1,app_r_2,app_r_3{
    display: none;
}

.avatar_block_wrapper {
    height: 85px;
}

.topic_nav_block a.current_nav:link, .topic_nav_block a.current_nav:visited, .topic_nav_block a.current_nav:active{
    border: none;
    border-bottom: 2px solid #0dca9f;
}

.topic_nav_block a:link, .topic_nav_block a:visited, .topic_nav_block a:active{
    border: none;
}

.topic_nav_block_wrapper{
   padding: 4px 0;
}

.pager{
    font-size: 14px;
}
.pager span.current{
    background:#0dca9f;
    border: 1px solid #0dca9f;
}
.pager a{
    border: 1px solid #dee2e6;
    color: #555 !important;
}
.pager a:hover{
    color: #fff !important;
    background: #0dca9f !important;
}
`;

    //与元数据块中的@grant值相对应，功能是生成一个style样式
    GM_addStyle(cnblogsIngCss);

    // 重新布局
    reAlign();

    function reAlign(){

      //  顶部
      var topHtml = `
<div class="header-container" style="width: 100%;">
    <div class="logo-container">
        <div class="logo"></div>
        <div class="text"><a href="https://ing.cnblogs.com">博客园闪存</a></div>
        <div class="beta">正式版</div>
    </div>
    <div class="search-container">
        <div class="search-icon"></div>
        <form method="get" id="ing_top_search" autocomplete="false" action="https://zzk.cnblogs.com/s/ing">
            <input id="searchInput" name="keywords" placeholder="搜索闪存" type="text" class="ng-pristine ng-valid ng-touched">
        </form>

    </div>
    <div class="user-container">
        <img class="avatar" src="https://images.zsxq.com/FjyKWxEmQLmReH4FlovVXBaTFcae?e=1906272000&amp;token=kIxbL07-8jAj8w1n4s9zv64FuZZNEATmlU_Vm6zD:00v7HL5z7VZSOejkM0ZVxRBnUJE=">
        <div class="notify">
            <div class="notify-icon"></div>
        </div>
    </div>
</div>
`;
      $("#top").html(topHtml);

      $("#wrapper #header").remove();

      $("#txt_ing").addClass("form-control");
      $('input[type="text"]').addClass("form-control");
      $("#comment_btn").removeClass("submit_btn_self").addClass("btn btn-primary");
    }
})();
