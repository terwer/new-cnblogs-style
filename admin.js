// ==UserScript==
// @name         博客园后台
// @namespace    http://www.terwergreen.com/
// @version      0.0.1
// @description  博客园后台界面美化
// @author       Terwer
// @match        *://i.cnblogs.com/*
// @match        *://i-import.cnblogs.com/*
// @grant        GM_addStyle
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// ==/UserScript==

console.log("New style of cnblogs admin desgined by Terwer!");

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

    // ==============================================
    // 自定义css
    var cnblogsAdminCss = `
body{
    margin: 0;
    font-family: "Hiragino Sans GB","Microsoft Yahei",SimSun,Arial,"Helvetica Neue",Helvetica;
    font-size: 12px;
    line-height: 1.5;
    padding: 0;
    background-color: #F2F5F4;
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

    // 顶部
    cnblogsAdminCss += `
#top_nav{
    background: #F2F5F4 !important;
    height: 26px;
    line-height: 26px;
    font-size: 12px;
}

#top_nav #left a {
    margin-left: 6px;
    margin-right: 6px;
}

#blog_top_nav_block #site_nav{
    padding-left: 4px;
}


#blog_top_nav_block #site_nav a{
    margin-left: 6px;
}
`;

    // 页面标题

    cnblogsAdminCss += `
#SiteTitle h2{
    font-size:24px;
    font-weight: bold;
    padding:0;
}
#SiteTitle h2 a{
    color:  #00B38A !important;
}

#blog_title h3{
  font-size:20px;
  font-weight: bold;
}
#blog_title h3 a{
    color:  #00B38A !important;
}
#BlogTitle h3{
  font-size:20px;
  font-weight: bold;
}
#BlogTitle h3 a{
    color:  #00B38A !important;
}

table#Footer td{
    border:none;
    padding:0;
}
#footer{
    margin-bottom: 5px;
}

#main_head #SiteTitle{
    height:70px;
    background-color: #F8F8F8;
}
#Header #SiteTitle{
  height:70px;
  background-color: #F8F8F8;
  padding-bottom: 0;
}
#Header #BlogTitle{
  padding:0;
  top:10px;
}

#main_body {
    background: #fff;
}
#BodyTable tbody tr:nth-child(2){
    background: #fff;
    padding:0;
    margin:0;
}
td#Body{
    border:none;
}
#content_area{
    border:none;
}
`;
    // 左侧菜单
    cnblogsAdminCss += `
/* 左侧随笔 */
#main_body #left_container{
   margin-top: 0;
   border: none;
}
/* 左侧文章 */
#BodyTable #LeftNavHeader{
   margin-top: 0;
   padding:0;
}
div.LeftNavHeader{
   margin-top: 0;
}

#main_body #left_container #left_nav h2 {
    color: #fff;
    height: 36px;
    font-size: 18px;
    font-weight: bold;
    line-height: 32px;
    background: #00b38a;
    margin:0;
    padding:0;
    border-top: 1px solid #00b38a;
    border-right: 1px solid #00b38a;
}
#main_body #left_container #sidebar_categories h2{
    color: #fff;
    height: 36px;
    font-size: 18px;
    font-weight: bold;
    line-height: 32px;
    background: #00b38a;
    border: 1px solid #00b38a;
    margin:0;
    padding:0;
}
#BodyTable #LeftNavHeader{
    color: #fff;
    height: 36px;
    font-size: 18px;
    font-weight: bold;
    line-height: 32px;
    background: #00b38a;
    border: 1px solid #00b38a;
}
#BodyTable #CategoriesHeader{
    color: #fff;
    height: 36px;
    font-size: 18px;
    font-weight: bold;
    line-height: 32px;
    background: #00b38a;
    border: 1px solid #00b38a;
    padding: 0;
}

#BodyTable .left_nav{
    padding:0;
}
#BodyTable .left_nav ul{
    margin: 0;
    background-color: rgb(50, 65, 87);
}
#BodyTable #LinksActions{
    margin: 0;
}

#main_body #left_container #left_nav ul{
    background-color: rgb(50, 65, 87);
}
#main_body #left_container #sidebar_categories ul{
    background-color: rgb(50, 65, 87);
}
#main_body #sub_nav{
    display: none;
}
#BodyTable #SubNav{
    display: none;
}

#BodyTable ul#TopNav a{
    background-color: #fff;
    border: none;
    font-size: 20px;
    padding: 5px 5px 15px 0;
     font-weight: bold;
    text-decoration: none;
    color: #555 !important;
    height: 36px;
}
#BodyTable ul#TopNav a:hover{
    color:  #00B38A !important;
}
ul#TopNav{
    height:36px;
}
ul#TopNav li{
    padding: 0 2px 0 0;
}
#tab_nav{
    border: none;
}
#tab_nav ul{
    height:36px;
    border: none;
}
#tab_nav li a.current_nav:link, #tab_nav li a.current_nav:visited, #tab_nav li a.current_nav:active{
    background-color: #fff;
    border: none;
    border-bottom: 2px solid #0dca9f;
    font-size: 20px;
    padding: 5px 5px 1px 5px;
    font-weight: bold;
    text-decoration: none;
    color: #555 !important;
}
#tab_nav li a:link, #tab_nav li a:visited, #tab_nav li a:active{
    background-color: #fff;
    border: none;
    font-size: 20px;
    padding: 5px 5px 1px 5px;
    font-weight: bold;
    text-decoration: none;
    color: #555 !important;
}
#tab_nav li a.current_nav:hover{
    color: #00B38A !important;
}
#tab_nav li a:hover{
    color: #00B38A !important;
}

#main_body #left_container #left_nav ul{
    padding: 0;
}
#main_body #left_container #sidebar_categories ul{
    padding: 0;
}
#BodyTable #LinksActions{
    padding: 0;
}
#main_body #left_nav ul li{
    padding: 10px 20px;
}
#main_body #sidebar_categories ul li{
    padding: 10px 20px;
}
#BodyTable ul#LinksActions li{
    padding: 10px 20px;
    height: auto;
}
#BodyTable ul#LinksCategories li{
      padding: 10px 20px;
}
#main_body #left_nav ul li a{
    color: #fff !important;
    text-decoration: none;
    font-size: 16px;
}
#main_body #sidebar_categories ul li a{
    color: #fff !important;
    text-decoration: none;
    font-size: 16px;
}
#BodyTable ul#LinksActions li a{
    color: #fff !important;
    text-decoration: none;
    font-size: 16px;
}
#BodyTable ul#LinksCategories li a{
    color: #fff !important;
    text-decoration: none;
    font-size: 16px;
}
#main_body #left_nav ul li:hover{
    background-color: rgb(40, 52, 70);
}
#BodyTable ul#LinksActions li:hover{
    background-color: rgb(40, 52, 70);
}
#BodyTable ul#LinksCategories li:hover{
    background-color: rgb(40, 52, 70);
}
#main_body #sidebar_categories ul li:hover{
    background-color: rgb(40, 52, 70);
}

#main_wrap{
    width: 90%;
    margin: 0;
}
#main_container{
    margin: 0;
}
#left_container{
    width: 187px;
}
#content_area{
    padding: 0;
}
td.NavLeftCell{
    width:200px;
}
#Main {
    padding: 0 5px;
}
#content_area #post_list{
    margin: 15px 0 0 3px !important;
}
`;

    // 随笔列表
    cnblogsAdminCss +=`
.table{
   font-size:16px;
}
#post_list .post-title{
    width: 50%;
}
#post_list td {
    padding: 10px;
}
#post_list table th {
    font-weight: bold;
    color: inherit;
    border: 1px solid #dee2e6 !important;
    width: 10%;
    text-align: center;
    padding: 10px;
}
#post_list table{
    border: none;
}

#Results_Contents table{
    border: none;
}
#Results_Contents table td {
    padding: 10px;
    font-size: 16px;
}
#Results_Contents table th {
    font-weight: bold;
    color: inherit;
    border: 1px solid #dee2e6 !important;
    width: 10%;
    text-align: center;
    padding: 10px;
    font-size: 16px;
}
`;

    // 添加新随笔
    cnblogsAdminCss +=`
div.CollapsibleTitle,div.CollapsibleHeader {
    color: #fff;
    background: #00b38a;
    border-bottom: 1px dashed #00b38a;
    border-top: 1px solid #00b38a;
    font-size: 16px;
}
`;

    //与元数据块中的@grant值相对应，功能是生成一个style样式
    GM_addStyle(cnblogsAdminCss);

    // make site title
    makeSiteTitle();

    // make left op
    makeLeftOp();

    // make table
    makeTable();

    // 页面标题
    function makeSiteTitle(){
        $("#SiteTitle").html("<h2><a href='https://i.cnblogs.com/'>博客园文章管理后台</a></h2>");
        $("#blog_title").html("<h3><a target='blank' href='https://www.cnblogs.com/"+config.author+"'>"+config.blogName+"</a></h2>");
        $("#BlogTitle").html("<h3><a target='blank' href='https://www.cnblogs.com/"+config.author+"'>"+config.blogName+"</a></h2>");
    }

    function makeLeftOp(){
        if(typeof $("#CategoriesHeader").html() != "undefined" &&  $("#CategoriesHeader").html().trim() == ""){
            $("#CategoriesHeader").css("background","#fff");
            $("#CategoriesHeader").css("border","none");
        }
        $("#SubNav").remove();

        var href=window.location.href;
        if(href.indexOf("EditArticles")>=0){
            $("#TabArticles").css("border-bottom","2px solid #0dca9f");
        }else if(href.indexOf("EditDiary")>=0){
            $("#TabDiary").css("border-bottom","2px solid #0dca9f");
        }else if(href.indexOf("Feedback")>=0){
            $("#TabFeedback").css("border-bottom","2px solid #0dca9f");
            $("#Results_headerTitle").html("评论");
        }else if(href.indexOf("EditLinks")>=0){
            $("#TabLinks").css("border-bottom","2px solid #0dca9f");
        }else if(href.indexOf("EditGalleries")>=0){
            $("#TabGalleries").css("border-bottom","2px solid #0dca9f");
        }else if(href.indexOf("Files")>=0){
            $("#TabFiles").css("border-bottom","2px solid #0dca9f");

            var fas = $("#Results_Contents table td a");
            fas.each(function(i,n){
                console.log(n);
                var txt = $(n).html();
                if(txt=="Download"){
                 $(n).html("下载");
                }else if(txt=="Delete"){
                  $(n).html("删除");
                }
            });

        }else if(href.indexOf("Configure")>=0){
            $("#TabConfigure").css("border-bottom","2px solid #0dca9f");
        }else if(href.indexOf("Preferences")>=0){
            $("#TabPreferences").css("border-bottom","2px solid #0dca9f");
        }else{
            $("#TabPosts").css("border-bottom","2px solid #0dca9f");
        }
    }

    function makeTable(){
        $("#post_list table").addClass("table table-bordered table-striped table-condensed table-hover");
        $("#post_list table .post-title a").attr("target","_blank");
        $("#AddFiles_myFile").addClass("form-control").css("height","auto");
        $("#AddFiles_Contents div").css("color","#00b38a");
        $("#AddFiles_lbkAddFile").removeClass("Button").addClass("btn btn-primary");

        $("#Results_Contents table").addClass("table table-bordered table-striped table-condensed table-hover").css("margin-top","10px");
    }

})();
