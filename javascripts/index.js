!function(t){function e(r){if(n[r])return n[r].exports;var c=n[r]={i:r,l:!1,exports:{}};return t[r].call(c.exports,c,c.exports,e),c.l=!0,c.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,n){"use strict";function r(t,e){if(Array.isArray(t))return Array.prototype.map.call(t,e);var n=[],r=void 0;for(var c in t)t.hasOwnProperty(c)&&(r=t[c],n.push(e(r,c)));return n}e.a=r},function(t,e,n){"use strict";function r(t){var e="";t=t.childNodes||t;for(var n=0;n<t.length;n++)t[n]&&(e+=1!=t[n].nodeType?t[n].nodeValue:r(t[n].childNodes));return e}e.a=r},,function(t,e,n){"use strict";var r=function(){return document.querySelectorAll(".reply_content")};e.a=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),c=n(5),a=n(3);Object(r.a)(Object(a.a)(),c.a)},function(t,e,n){"use strict";function r(t){var e=Object(c.a)(t);e&&Object(a.a)(e)&&(t.style.position="relative",Object(u.a)(t,Object(o.a)(e)))}e.a=r;var c=n(1),a=n(6),u=n(7),o=n(12)},function(t,e,n){"use strict";var r=function(t){return t.indexOf("@")>-1};e.a=r},function(t,e,n){"use strict";var r=n(8),c=function(t,e){var n=document.createElement("div");n.setAttribute("class","reply_box");var c=parseInt(t.parentElement.querySelector(".fr .no").textContent);Object(r.a)(n,e,c),t.insertBefore(n,t.firstChild)};e.a=c},function(t,e,n){"use strict";var r=n(9),c=n(0),a=n(10),u=function(t,e,n){var u=Object(r.a)(),o="";Object(c.a)(e,function(t){var e=Object(a.a)(t,n);Object(c.a)(e,function(e){o+=u.replace(/\{\{replace\}\}/g,t+": "+e)})}),o||t.setAttribute("style","background: #cecece; color: white;"),o=o||"Cannot find any replys in current page.",t.innerHTML=o};e.a=u},function(t,e,n){"use strict";var r=function(){return"<p>{{replace}}</p>"};e.a=r},function(t,e,n){"use strict";var r=n(11),c=n(0),a=Object(r.a)(),u=function(t,e){var n=[];return Object(c.a)(a,function(r){r.user===t&&r.level<e&&n.push(r.content)}),n};e.a=u},function(t,e,n){"use strict";var r=n(0),c=n(1),a=n(3),u=function(){return Object(r.a)(Object(a.a)(),function(t){if(!t||!t.previousElementSibling)return{};var e=t.parentElement.querySelector("strong a").text,n=parseInt(t.parentElement.querySelector(".fr .no").textContent);return{user:e,content:Object(c.a)(t),level:n}})};e.a=u},function(t,e,n){"use strict";var r=n(0),c=function(t){var e=t.match(/\@[^\s]*/g)||[];return Object(r.a)(e,function(t){return t.replace(/\@/,"")})};e.a=c}]);
//# sourceMappingURL=index.js.map