(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e9bac49"],{2870:function(t,n,i){},b39c:function(t,n,i){"use strict";i("2870")},bb51:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"home"},[i("div",{staticClass:"header"},[i("ul",{staticClass:"nav-list"},t._l(t.navs,(function(n,e){return i("li",{key:n.name},[i("a",{class:{active:n.isActive},attrs:{href:n.link},on:{click:function(i){return t.myFilter(e,n.link)}}},[t._v(" "+t._s(n.name)+" ")])])})),0),i("router-view",{staticStyle:{"z-index":"1001"}})],1)])},s=[],a={name:"Home",components:{},data:function(){return{navs:[{name:"视频锦集",link:"#/videos",isActive:!0},{name:"投掷点位",link:"#/point",isActive:!1}]}},methods:{myFilter:function(t,n){for(var i=0;i<this.navs.length;i++)this.navs[i].isActive=!1,this.navs[t].isActive=!0;this.$router.push(n)}}},c=a,r=(i("b39c"),i("2877")),l=Object(r["a"])(c,e,s,!1,null,"46a316fc",null);n["default"]=l.exports}}]);