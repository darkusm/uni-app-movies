(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/movie-tpl/movie-detail"],{"2fd1":function(t,n,e){},"36a7":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){e.e("components/uni-fab/uni-fab").then(function(){return resolve(e("2ad8"))}.bind(null,e)).catch(e.oe)},a={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,TabCur:0,scrollLeft:0,movie:{title:"王国",country:"韩国",year:"2020-03-25",movieImg:"https://img.kuyun88.com/pic/uploadimg/2019-1/201912519593775229.jpg",wishCount:"999",originalTitle:"王国",director:{name:"王晶"},casts:"美女， 帅哥， 路人甲",generes:"韩剧",downUrls:[{order:"第01集",url:"http://kuyun.xiazaikuyun.com/20200401/7666_3431c77c/龙岭迷窟 第01集.mp4"},{order:"第02集",url:"http://kuyun.xiazaikuyun.com/20200401/7666_3431c77c/龙岭迷窟 第01集.mp4"},{order:"第03集",url:"http://kuyun.xiazaikuyun.com/20200401/7666_3431c77c/龙岭迷窟 第01集.mp4"},{order:"第04集",url:"http://kuyun.xiazaikuyun.com/20200401/7666_3431c77c/龙岭迷窟 第01集.mp4"},{order:"第05集",url:"http://kuyun.xiazaikuyun.com/20200401/7666_3431c77c/龙岭迷窟 第01集.mp4"}],summary:"胡八一、王胖子和大金牙被村民编造的绣花鞋的故事所骗，前往陕西古蓝县水路艰险，胡八一挺身让众人脱险。在招待所幸遇陈瞎子提醒，得以逃脱村民圈套。三人无意掉入&ldquo;龙岭迷窟&rdquo;遭蝙蝠袭击，发现身上长出红斑，决定在王大爷家修整，遇到同样来找红斑根源的shirley杨，并听闻了鹧鸪哨和了尘大师寻找雮尘珠的英勇故事。几人决心寻找雮尘珠，陈瞎子告诉他们&ldquo;内藏眢&rdquo;就在此地。村民故技重施，威胁胡八一等人寻找钱财，两拨人马前往洞穴，遭到蜘蛛袭击，被困暗阁，但大家齐心协力，化险为夷，最终进入了&ldquo;棋盘&rdquo;机关，众人协作，找到了龙骨天书，逃出洞穴，准备前往云南继续解密&ldquo;红斑&rdquo;。"},pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#d81e06",buttonColor:"#d81e06"},contents:[{iconPath:"../../static/fab/home.svg",selectedIconPath:"../../static/fab/home-select.svg",text:"首页",active:!0},{iconPath:"../../static/fab/zan.svg",selectedIconPath:"../../static/fab/zan-select.svg",text:"红包",active:!0},{iconPath:"../../static/fab/quan.svg",selectedIconPath:"../../static/fab/quan-select.svg",text:"会员券",active:!0}],horizontal:"right",vertical:"top",direction:"horizontal",zanModal:!1}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)},trigger:function(n){console.log(n),0!=n.index?1!=n.index?t.showModal({title:"提示",content:"您".concat(this.contents[n.index].active?"选中了":"取消了").concat(n.item.text),success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}}):this.zanModal=!0:t.redirectTo({url:"/pages/index/index"})},hideModal:function(t){this.zanModal=!1}},components:{uniFab:o}};n.default=a}).call(this,e("543d")["default"])},"7ed0":function(t,n,e){"use strict";var o={"uni-fab":function(){return e.e("components/uni-fab/uni-fab").then(e.bind(null,"2ad8"))}},a=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}))},"877d":function(t,n,e){"use strict";(function(t){e("d369"),e("921b");o(e("66fd"));var n=o(e("fc2a"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"88e5":function(t,n,e){"use strict";var o=e("2fd1"),a=e.n(o);a.a},"8a46":function(t,n,e){"use strict";e.r(n);var o=e("36a7"),a=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=a.a},fc2a:function(t,n,e){"use strict";e.r(n);var o=e("7ed0"),a=e("8a46");for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);e("88e5");var u,i=e("f0c5"),r=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"1259a1d3",null,!1,o["a"],u);n["default"]=r.exports}},[["877d","common/runtime","common/vendor"]]]);