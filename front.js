// ==UserScript==
// @name         博客园
// @namespace    http://www.terwergreen.com/
// @version      0.0.1
// @description  博客园界面美化
// @author       Terwer
// @match        *://www.cnblogs.com/
// @match        *://www.cnblogs.com/sitehome*
// @match        *://www.cnblogs.com/pick*
// @match        *://www.cnblogs.com/candidate*
// @match        *://www.cnblogs.com/news*
// @match        *://www.cnblogs.com/following*
// @match        *://www.cnblogs.com/aggsite*
// @match        *://www.cnblogs.com/cate*
// @match        *://www.cnblogs.com/comment*
// @grant        GM_addStyle
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// ==/UserScript==

console.log("New style of cnblogs desgined by Terwer!");

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


var cnblogsCss = `
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

cnblogsCss +=`
#cnblogs_a1{
    display:none;
}
#cnblogs_b1{
    display:none;
}
#cnblogs_b2{
    display:none;
}
#cnblogs_b3{
    display:none;
}
#cnblogs_b4{
    display:none;
}

#hd_info{
    background: #F2F5F4 !important;
}
`;

// nav_menu
cnblogsCss += `
#nav_menu{
    margin:0;
    min-width: 1200px;
    height: 40px;
    background: #32373e;
}
#nav_menu .inner {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
}

#nav_menu div.lg_tbar_l {
    float: left;
}

#nav_menu ul.lg_tbar_m {
    float: left;
    overflow: hidden;
    margin-left: 34px;
}

#nav_menu div.lg_tbar_r {
    float: right;
}


#nav_menu div.lg_tbar_l .logo {
    color:  #00B38A !important;
    height: 21px;
    float: left;
    padding-left: 0;
    font-weight: bold;
    font-size: 24px;
    text-decoration: none;
}

#nav_menu div.lg_tbar_l a, #lg_tbar div.lg_tbar_r a, #lg_tbar div.lg_tbar_l span, #lg_tbar div.lg_tbar_r span {
    color: #c4c3c3 !important;
    float: left;
    line-height: 40px;
    padding: 0 12px;
}

#nav_menu ul.lg_tbar_m li {
    width: 70px;
    line-height: 40px;
    float: left;
}

#nav_menu ul.lg_tbar_m li a.current {
    color: #fff !important;
    background: #24282C !important;
}
#nav_menu ul.lg_tbar_m li a {
    font-size: 14px;
    color: #afb5c0 !important;
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
    padding:0;
}

#nav_menu a:link, #nav_menu a:visited, #nav_menu a:active {
    color: #eee !important;
    text-decoration: none;
}
#nav_menu ul.lg_tbar_m li a:hover{
   color: #fff !important;
}

#nav_menu div.lg_tbar_l a.lg_app, #nav_menu div.lg_tbar_r a.lg_app {
    color: #08d7a2;
    padding: 0 12px 0 27px;
    margin-top: 13px;
    line-height: 15px;
}
#nav_menu div.lg_tbar_l a, #nav_menu div.lg_tbar_r a, #nav_menu div.lg_tbar_l span, #nav_menu div.lg_tbar_r span {
    color: #c4c3c3;
    float: left;
    line-height: 40px;
    padding: 0 12px;
}
`;

cnblogsCss += `
#side_nav{
    top:174px;
    background-color: #fff !important;
}
#side_right{
    top:174px;
    background-color: #fff !important;
}

.search-wrapper {
    background: #F2F5F4;
    padding: 30px 0 28px;
    min-width: 1200px;
}
.search_box {
    border: 0 solid #00b38a;
    width: 938px;
    height: 46px;
    margin: 0 auto;
    position: relative;
}

.search_input {
    width: 762px;
    height: 20px;
    line-height: 20px;
    float: left;
    font-size: 16px;
    padding: 12px 16px;
    margin: 0;
    border: 1px solid #E8E8E8;
    border-right: 0;
}
.search_button {
    float: left;
    width: 142px;
    height: 46px;
    font-size: 18px;
    color: #FFF;
    border: 0;
    background: #00b38a;
    cursor: pointer;
}
`;

cnblogsCss += `
.rss_link{
    top:178px;
}
`

cnblogsCss += `
.post_nav_block_wrapper{
    border:none;
}
.post_nav_block a{
    border:none;
}

.post_nav_block a.current_nav:link, .post_nav_block a.current_nav:visited, .post_nav_block a.current_nav:active {
    background-color: #fff;
    border:none;
    border-bottom: 2px solid #0dca9f;
}
.post_nav_block a:link, .post_nav_block a:visited, .post_nav_block a:active{
    border:none;
}

.post_item{
    color: #555;
    border: 1px solid #ededed;
    padding: 18px;
}

.post_item_body{
    margin-left: 0;
}

.post_item_body a.titlelnk{
    margin: 0;
    font-size: 16px;
    color: #00b38a !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    font-weight: normal;
    text-decoration: none;
}
#post_list .post_item_summary{
    font-size: 14px;
}
.post_item_foot{
    height: 20px;
    padding: 15px 10px;
    background-color: #fafafa;
}

.diggit{
    display: inline-block;
    max-width: 108px;
    height: 28px;
    font-size: 12px;
    line-height: 20px;
    color: #555 !important;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    background-image:none;
    background-color: #fafafa;
}
.diggnum{
    color: #555 !important;
}
.pfs{
    width:48px;
    height:48px;
    margin-right:15px;
    border:none;
    margin-top:0;
}
.digg{
    float:right;
}
.gray:hover{
    font-size:14px;
}
`;

// 左侧菜单
cnblogsCss += `
#side_nav{
    top:596px;
}
#sidebar{
    position: absolute;
    left: 10px;
    top: 174px;
}
.r_l_1{
    height: 0;
}
.r_l_2{
    margin: 0;
    height: 0;
}
.r_l_3{
    margin: 0;
    height: 0;
    border-bottom: 1px solid #ddd;
}
#side_nav .w_l{
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
}
`;
cnblogsCss+=`
        ul, dl, dd {
            padding: 0;
            margin: 0;
            list-style: none;
            color: #666;
        }

        .mainside_l {
            width: 160px;
            background: #fff;
            border: 1px solid #00b38a;
            margin: 0;
        }

        /*整个列表的宽高，背景，边框*/
        .list_title {
             height: 30px;
             width: 160px;
             background: #00b38a;
             color: #fff;
             font-size: 18px;
             font-weight: bold;
             line-height: 30px;
             text-align: center;
             margin: 0; /*如果不设置，标题与列表之间有空白*/
        }

        /*列表标题的宽高，背景，字体*/
        .list {
            padding-top: 6px; /*列表与标题之间的空隙*/
            position: relative;
        }

        .list > li {
            font-size: 14px;
            line-height: 32px;
            padding-left: 26px;
            padding-right: 12px;
        }

        /*直接子元素*/
        .list a {
            color: #666;
        }

        /*列表文字颜色*/
        .list > li:hover {
            color: #00b38a;
            background: #b8f4e7;
        }

        /*当鼠标滑过时，列表项颜色、背景变化*/
        .list a:hover {
            color: #ff5000;
        }

        /*当鼠标滑过时，列表字体颜色变化*/
        .list_fuhao {
            float: right;
        }

        /* > 这个符号靠右显示*/
        .li_toggle:hover ul {
            display: block;
        }

        .li_toggle a{
            text-decoration: none;
        }

        /*鼠标滑过时，显示菜单*/
        .list_items {
            position: absolute;
            left: 160px;
            top: 0;
            border: 1px solid #00b38a;
            background: #fff;
            display: none; /*隐藏菜单*/
        }

        /*二级菜单设置*/
        .list_items_l {
            float: left;
            border-right: 1px solid #f4f4f4;
        }

        /*二级菜单左侧区域设置*/
        .list_items_l a {
            text-decoration: none;
        }

        .list_dl {
            padding: 10px 14px 0 26px;
        }

        /*二级菜单左侧定义列表*/
        .list_dl h3 {
            font-size: 18px;
            font-weight: normal;
            padding-top: 12px;
        }

        /*二级菜单左侧标题*/
        .list_dl h3 a {
            color: #3c3c3c;
        }

        .list_dl dt span {
            float: right;
            font-size: 12px;
        }

        .list_dl dd {
            font-size: 12px;
            line-height: 26px;
            padding-bottom: 10px;
        }

        /*二级菜单列表项设置*/
        .list_dl dd a {
            padding-right: 13px;
            white-space: nowrap;
        }

        /*二级菜单列表超链接设置*/
        .list_dl dd a:hover {
            color: #666;
        }

        .list_items_r {
            float: right;
            width: 250px;
            height: 518px;
            text-align: left;
        }

        /*二级菜单右侧区域设置*/
        .list_items_r h3 {
            font-size: 16px;
            margin: 10px 0 0;
            height: 40px;
            line-height: 40px;
            text-align: center;
        }

        /*二级菜单右侧标题*/
        .list_items_pic {
            margin: 0 10px;
            width: 232px;
            height: 456px;
        }

        /*二级菜单右侧列表设置*/
        .pic {
            float: left;
            width: 116px;
            height: 152px;
            padding: 0 10px;
        }

        /*二级菜单右侧图片div设置*/
        .pic a {
            text-decoration: none;
        }

        .pic img {
            width: 97px;
            height: 97px;
            border: 1px dotted #ededed;
        }

        .pic p {
            width: 97px;
            overflow: hidden;
            text-overflow: clip;
            white-space: nowrap;
            font-size: 12px;
            text-align: center;
        }
        /*二级菜单右侧图片div设置*/
`;

cnblogsCss += `
#paging_block{
   margin: 0 6px;
}
#paging_block a:link, a:visited, a: {
    color: #555 !important;
    background-color: transparent !important;
    text-decoration: none;
}
#paging_block a:hover,.active {
     color:#e9ecef !important;
     background-color: #00B38A !important;
}
#paging_block .active {
     color:#e9ecef !important;
     background-color: #00B38A !important;
}
.search_input{
    height:47px;
}
p{
margin:0;
}
`;


//与元数据块中的@grant值相对应，功能是生成一个style样式
GM_addStyle(cnblogsCss);

// 移除广告
removeAd();
// 生成菜单
makeNavMenu();
// 生成搜索
makeSearch();
// 生成左侧菜单
makeLeftMenu();
// 生成分页
makePager();

// function
function removeAd() {
    $("#header").remove();
    $("#cnblogs_a1").remove();
    $("#cnblogs_b1").remove();
    $("#cnblogs_b2").remove();
    $("#cnblogs_b3").remove();
    $("#cnblogs_b4").remove();

    $(".side_search").remove();
    $("#search_block").remove();

    $("#ad_right_text").remove();
}

// make nav menu
function makeNavMenu() {
    var inner = ``;
    var innerHeader = `<div class="inner">
<div class="lg_tbar_l">
<a href="https://www.cnblogs.com/" class="logo">博客园</a>
</div>`;

    var innerBody = `<ul class="lg_tbar_m">
<li>
<a href="https://www.cnblogs.com/" class="current" data-lg-tj-id="5i00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">首页</a>
</li>
`;

    var as = $("#nav_menu a");
    // console.log(as);
    as.each(function (i, n) {
        var hrf = $(n).attr("href");
        var txt = $(n).text();
        innerBody += `<li><a rel="nofollow" href="` + hrf + `" target="_blank" data-lg-tj-id="ic00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" data-lg-tj-track-code="index_yanzhi">` + txt + `</a></li>`;
    });
    innerBody += `</ul>`;


    var innerFooter = `<div class="lg_tbar_r">
<a rel="nofollow" href="https://app.cnblogs.com/"  target="_blank" class="lg_app" data-lg-tj-id="5500" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" target="_blank">博客园APP</a>
<a rel="nofollow" href="https://i.cnblogs.com/" target="_blank" class="lg_os" data-lg-tj-id="5600" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" data-lg-tj-track-code="index_qiyeban">进入后台</a>
</div>
</div>`;

    inner += innerHeader;
    inner += innerBody;
    inner += innerFooter;

    $("#nav_menu").empty()
    $("#nav_menu").append(inner);
}

// make search
function makeSearch() {
    var search = `
<div id="search">
    <!-- 搜索 -->
    <div class="search-wrapper">
    <div id="search_box" class="search_box" data-lg-tj-track-code="index_search" data-lg-tj-track-type="1">
        <form id="searchForm" class="searchForm clearfix" name="searchForm" action="https://zzk.cnblogs.com/s?t=b" method="get">
            <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
            <input type="text" id="search_input" name="w" class="search_input ui-autocomplete-input" tabindex="1" maxlength="64" autocomplete="off" value="" placeholder="请输入文章关键字">
            <input type="submit" id="search_button" class="search_button" value="搜索" data-lg-tj-id="4V00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">
        </form>
    </div>
    </div>
</div>
`;
    $("#nav_menu").after(search);
}

// make left menu
function makeLeftMenu() {
    var leftMenu = `
    <div id="sidebar">
<div class="mainside_l">
    <h3 class="list_title">网站分类</h3>
`;

        leftMenu += `
    <ul class="list">

`;

    // 每一项开始
    var firstCatIdArray = cateIdList.split(",");
    var firstCnblogsMenu = $("#cate_title_block #cate_item li");
    // console.log("firstCnblogsMenu=>", firstCnblogsMenu);

    firstCnblogsMenu.each(function(i, n){
        // console.log("fm=>", n)
        var fa = $(n).find("a").eq(0);
        var fid = firstCatIdArray[i];
        var fhref = $(fa).attr("href");
        var ftext = $(fa).text();

        // .NET技术108698缓存java技术
        if(fid == 108698){
            fhref = '/cate/java/';
            ftext = 'Java后端';
        }


        leftMenu += `
        <li class="li_toggle" id="li_toggle_`+ fid +`">
            <a href="`+ fhref +`">`+ ftext +`</a>
`;
        leftMenu += `
        </li>
`;
    });
    // 每一项结束


    leftMenu += `
    </ul>
`;

    leftMenu +=`
</div>
</div>
`;

    // $("#cate_title_block").remove();
    $("#pager_bottom").after(leftMenu);

    // 等菜单加载完成后加载子菜单
    var loadCnblogsSubCategories = function () {
    // var subblock = $("#cate_sub_block");
    $.ajax({
        type: "post",
        contentType: 'application/json; charset=utf-8', // 很重要
        url: "/aggsite/SubCategories",
        data: '{"cateIds":"' + cateIdList + '"}',
        dataType: "text",
        success: function(res) {
          // console.log(res);
          var wrapper= document.createElement('div');
          wrapper.innerHTML=res;
          // console.log(wrapper);

          // 子菜单
          firstCatIdArray.forEach(function(e) {
              var fid = e;
              // console.log("show sub " + fid);
              var sub = $(wrapper).find("#cate_content_block_"+fid);
              var secondCnblogsMenu = $(sub).find('.cate_content_block ul li');

              // 有子菜单才追加
              if(secondCnblogsMenu.length>0 && fid!=108698){
                  var subItem = ``;
                  subItem +=`
                            <span class="list_fuhao"> > </span>
                            <ul class="list_items">
                               <li class="list_items_l">
                                 <dl class="list_dl">

`;

                  $(secondCnblogsMenu).each(function(k,m){
                      // console.log("m=>", $(m).html());
                      subItem+=`<dd>`+$(m).html()+`</dd>`;
                  });
                  subItem+=`

                                 </dl>
                               </li>
                  </ul>`;
                  $("#li_toggle_"+fid).append(subItem);
                  // console.log("subItem=>", subItem);
              }
          });

          // 全部完成，删除就菜单
          $("#cate_title_block").remove();
        }
     });
   };
   // 加载子菜单
   loadCnblogsSubCategories();
}

// 分页
function makePager(){
    var pager = $("#paging_block .pager");
    console.log("pager=>", pager);

    var newas = "";
    pager.children().each(function(i,n){
     console.log("href",$(n).attr("href"));
     console.log("class",$(n).attr("class"));
     console.log("txt",$(n).html());
     var cls = $(n).attr("class");
     var txt = $(n).html();
     var hrf = $(n).attr("href");

     if(cls=='ellipsis'){
        hrf="javascript:void(0);";
     }else if(typeof(cls) != "undefined" && cls.indexOf('current')>=0){
        cls = "active";
     }else{
        cls ="";
     }
     txt=txt.replace("Prev","上一页");
     txt=txt.replace("Next","下一页");

     var newa = "<li class='page-item'><a class='page-link "+cls+"' href='"+hrf+"'>"+txt+"</a></li>";
     newas += newa;
    });

    var pagerHtml = "<nav><ul class='pagination'>";
    pagerHtml += newas;
    pagerHtml += "</ul></nav>";
    console.log("pagerHtml=>",pagerHtml);
    $("#paging_block").html(pagerHtml);
}
