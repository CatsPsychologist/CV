(()=>{"use strict";var e={866:function(e,t,i){var a=this&&this.__awaiter||function(e,t,i,a){return new(i||(i=Promise))((function(l,o){function n(e){try{c(a.next(e))}catch(e){o(e)}}function r(e){try{c(a.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,r)}c((a=a.apply(e,t||[])).next())}))},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const o=i(410),n=l(i(585)),r=l(i(785)),c=l(i(536)),s=l(i(406)),d=l(i(616)),u=l(i(566));t.App=class{init(){return a(this,void 0,void 0,(function*(){this.optionId=new o.domEl("#select_menu"),this.optionId.onSelectChange(this.onAlbumChange),(0,r.default)(),(0,c.default)(),(0,s.default)(),(0,d.default)(),(0,u.default)()}))}onAlbumChange(e=1){const t=new Request(`https://jsonplaceholder.typicode.com/albums1/${e}/photos`);fetch(t).then((e=>{if(200===e.status)return e.json();throw new Error("Что-то пошло не так на API сервере.")})).then((e=>{e.length=8,console.debug(e),(0,n.default)([])})).catch((e=>{console.error(e)}))}}},406:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=document.forms.form,a=document.getElementById("submit_btn");function l(){let e={name:i[0].value,phone:i[1].value,email:i[2].value};localStorage.setItem("formData",JSON.stringify(e))}function o(){i.checkValidity()&&localStorage.clear()}t.default=function(){i.addEventListener("change",l),a.addEventListener("click",o),function(){if(!localStorage.hasOwnProperty("formData"))return;let e=JSON.parse(localStorage.getItem("formData")||"");i[0].value=e.name,i[1].value=e.phone,i[2].value=e.email}()}},616:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const e=document.getElementById("header");window.addEventListener("scroll",(function(){window.scrollY>=e.clientHeight?e.classList.add("header_primary"):e.classList.remove("header_primary")}))}},536:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){document.getElementById("header_list").addEventListener("click",(()=>{document.getElementById("menu-toggle").checked=!1}))}},630:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0,(i=t.Label||(t.Label={}))["Item 1"]="1",i["Item 2"]="2",i["Item 3"]="3",i["Item 4"]="4"},73:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.data=void 0,t.data=[{id:1,title:"accusamus beatae ad facilis cum similique qui sunt",url:"https://via.placeholder.com/600/92c952",userImage:"https://via.placeholder.com/150/92c952",redirectLink:"https://jsonplaceholder.typicode.com",category:"Design"},{id:2,title:"reprehenderit est deserunt velit ipsam",url:"https://via.placeholder.com/600/771796",userImage:"https://via.placeholder.com/150/771796",redirectLink:"https://jsonplaceholder.typicode.com",category:"Design"},{id:3,title:"officia porro iure quia iusto qui ipsa ut modi",url:"https://via.placeholder.com/600/24f355",userImage:"https://via.placeholder.com/150/24f355",redirectLink:"https://jsonplaceholder.typicode.com",category:"Design"},{id:4,title:"culpa odio esse rerum omnis laboriosam voluptate repudiandae",url:"https://via.placeholder.com/600/d32776",userImage:"https://via.placeholder.com/150/d32776",redirectLink:"https://jsonplaceholder.typicode.com",category:"Design"},{id:5,title:"natus nisi omnis corporis facere molestiae rerum in",url:"https://via.placeholder.com/600/f66b97",userImage:"https://via.placeholder.com/150/f66b97",redirectLink:"https://jsonplaceholder.typicode.com",category:"Design"}]},785:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const a=i(73),l=document.getElementById("number_bar"),o=Math.ceil(a.data.length/2);let n=1;function r(){const e=2*(n-1),t=2*n;!function(e){const t=e.map((e=>{return`\n   <div class="item">\n         <img class="blog_img" src="${(t=e).userImage}" alt="design image" width="328">\n             <div class="item_info">\n               <h5 class="card_name">${t.category}</h5>\n               <div class="article">\n                 <img class="article_img" src="../assets/images/10blog_small.png" alt="man image" width="48">\n                 <div class="article_text">\n                     <h3 class="card_info">\n                         ${t.title}\n                     </h3>\n                     <a href="${t.redirectLink}" class="blog_link">Read Now</a>\n                </div>\n             </div>\n         </div>\n     </div>\n`;var t})).join("");document.getElementById("blog_items").innerHTML=t}(a.data.filter(((i,a)=>a>=e&&a<t)))}t.default=function(){const e=[...Array(o)].map(((e,t)=>`<button class="button_num btn">${t+1}</button>`));l.innerHTML=e.join("");let t=l.childNodes;t[n-1].classList.add("active"),l.addEventListener("click",(e=>{for(let i=0;i<t.length;i++)t[i].classList.remove("active"),e.target===t[i]&&(t[i].classList.add("active"),n=i+1);r()}))},r()},410:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.domEl=void 0;const a=i(630),l=document.getElementById("select_menu");t.domEl=class{constructor(e){this.optionCount=Object.keys(a.Label).length,this.init(e)}init(e){this._element=document.querySelector(`${e}`),this.getSelectMenu(this._element)}getSelectMenu(e){const t=[...Array(this.optionCount)].map(((e,t)=>`<a href="" class="select_item">Item ${t+1}</a>`));e.innerHTML=t.join("")}onSelectChange(e){this._element.addEventListener("click",(t=>{t.preventDefault();for(let i=0;i<l.childNodes.length;i++)t.target===l.childNodes[i]&&e(i+1)}))}}},566:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){$(".course_swiper_wrapper").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),function(){const e=document.querySelector(".slick-prev"),t=document.querySelector(".slick-next");e.innerHTML='<div class="button_arrow left"></div>',t.innerHTML='<div class="button_arrow right"></div>'}()}},437:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.slideData=void 0,t.slideData=[{albumId:1,id:1,title:"accusamus beatae ad facilis cum similique qui sunt",url:"https://via.placeholder.com/600/92c952",thumbnailUrl:"https://via.placeholder.com/150/92c952"},{albumId:1,id:2,title:"reprehenderit est deserunt velit ipsam",url:"https://via.placeholder.com/600/771796",thumbnailUrl:"https://via.placeholder.com/150/771796"},{albumId:1,id:3,title:"officia porro iure quia iusto qui ipsa ut modi",url:"https://via.placeholder.com/600/24f355",thumbnailUrl:"https://via.placeholder.com/150/24f355"},{albumId:1,id:4,title:"culpa odio esse rerum omnis laboriosam voluptate repudiandae",url:"https://via.placeholder.com/600/d32776",thumbnailUrl:"https://via.placeholder.com/150/d32776"},{albumId:1,id:5,title:"natus nisi omnis corporis facere molestiae rerum in",url:"https://via.placeholder.com/600/f66b97",thumbnailUrl:"https://via.placeholder.com/150/f66b97"},{albumId:1,id:6,title:"accusamus ea aliquid et amet sequi nemo",url:"https://via.placeholder.com/600/56a8c2",thumbnailUrl:"https://via.placeholder.com/150/56a8c2"},{albumId:1,id:7,title:"officia delectus consequatur vero aut veniam explicabo molestias",url:"https://via.placeholder.com/600/b0f7cc",thumbnailUrl:"https://via.placeholder.com/150/b0f7cc"},{albumId:1,id:8,title:"aut porro officiis laborum odit ea laudantium corporis",url:"https://via.placeholder.com/600/54176f",thumbnailUrl:"https://via.placeholder.com/150/54176f"}]},585:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const a=i(437),l=document.getElementById("degrees_slider_wrapper"),o=document.getElementById("btn_prev"),n=document.getElementById("btn_next");function r(e){var t;t=e.map((e=>`<a href="#" class="slide">\n                    <img class="item_bg" src="${e.thumbnailUrl}" alt="API image" width="200" height="200">\n                    <h3 class="item_name">${e.title}</h3>\n                </a>`)),l.innerHTML=t.join(" ")}t.default=r,r(a.slideData);let c=document.querySelector(".slide").clientWidth;o.addEventListener("click",(()=>l.scrollLeft-=c+18)),n.addEventListener("click",(()=>l.scrollLeft+=c+18))}},t={};(new(function i(a){var l=t[a];if(void 0!==l)return l.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,i),o.exports}(866).App)).init()})();