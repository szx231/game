import{g as o}from"./vendor.2331be84.js";const N=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=a(n);fetch(n.href,l)}};N();console.log("Hello world");const T=document.querySelector(".canvas");T.width=window.innerWidth;T.height=window.innerHeight;document.querySelectorAll("Circle");const f=T.getContext("2d");class P{constructor(t,a,r,n,l,d,y,D){this.x=t,this.y=a,this.radius=r,this.dx=n,this.dy=l,this.color=d,this.shadowBlur=y,this.shadowColor=D}draw(){f.beginPath(),f.arc(this.x,this.y,this.radius,Math.PI*2,!1),f.fillStyle=this.color,f.shadowBlur=this.shadowBlur,f.shadowColor=this.shadowColor,f.fill(),f.stroke(),this.update()}update(){(this.x+this.radius>window.innerWidth||this.x-this.radius<0)&&(this.dx=-this.dx),(this.y+this.radius>window.innerHeight||this.y-this.radius<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy}}function b(e,t){return Math.floor(Math.random()*(t-e+1))+e}const L=["#D2E2F9","#C8D6FC"],k=["#D2E2F9","#C8D6FC","#21337F","#93ACF2","#3458AE","#7699E7","#B6C9FB"],O=[];for(let e=0;e<100;e++){let t=2.2,a=Math.random()*(window.innerHeight-t*2)+t,r=Math.random()*(window.innerWidth-t*2)+t,n=(Math.random()-.5)*10,l=(Math.random()-.5)*2.5;const d=b(1,k.length-1),y=b(1,L.length-1);O.push(new P(a,r,t,n,l,k[d],15,L[y]))}function E(){requestAnimationFrame(E),f.clearRect(0,0,window.innerWidth,window.innerHeight);for(let e=0;e<O.length;e++)O[e].draw()}E();const c=document.querySelector(".game-field"),I=document.querySelector(".setting__field"),G=document.querySelector(".setting-field__button");document.querySelector(".hero");const R=document.querySelector(".welcome-field"),$=document.querySelector(".welcome-field__title"),z=document.querySelector(".welcome-field__descr"),j=document.querySelector(".welcome-field__button"),K=new Audio("./sound/odinochnyiy-lazernyiy-vyistrel.mp3"),_=new Audio("./sound/btnclickAudio.mp3"),U=new Audio("./sound/onloadMainpage.mp3"),Y=new Audio("./sound/gameOver.mp3");window.onload=function(){o.to(".welcome-field",{duration:2.5,opacity:.6}),o.to(".welcome-field__title",{duration:3.5,opacity:1}),o.to(".welcome-field__descr",{duration:1.5,opacity:1}),V(),X(),o.to(".welcome-field__button",{delay:6,duration:3.5,opacity:1})};j.addEventListener("click",()=>{_.play(),setTimeout(()=>{Z(),setTimeout(()=>{R.remove(),I.style.display="inline",ee()},3e3)},1e3)});const M=e=>(e.innerHTML=e.textContent.replace(/(\S*)/g,t=>'<div class="word">'+t.replace(/(-|#|@)?\S(-|#|@)?/g,"<div class='letter'>$&</div>")+"</div>"),e),J=M(z),Q=M($);function g(e,t){return Math.random()*(t-e)+e}function V(){Array.from(Q.querySelectorAll(".letter")).forEach((e,t)=>{o.from(e,2.5,{opacity:0,scale:.1,x:g(-500,500),y:g(-500,500),z:g(-500,500),delay:t*.2,repeat:0})})}function X(){Array.from(J.querySelectorAll(".letter")).forEach((e,t)=>{o.from(e,.5,{opacity:0,scale:.1,x:g(-500,500),y:g(-500,500),z:g(-500,500),delay:t*.02,repeat:0})})}function Z(){o.to(".welcome-field__title",{delay:.5,duration:2,ease:"bounce.out",x:1500}),o.to(".welcome-field__descr",{delay:1,duration:2,ease:"bounce.out",x:-1500}),o.to(".welcome-field__button",{delay:1,duration:2,ease:"bounce.out",y:1500}),o.to(".welcome-field",{opacity:0,duration:2.5})}function ee(){o.from(".setting__descr",{delay:.5,duration:2,ease:"bounce.out",x:1500}),o.from(".setting-controls__image",{delay:.5,duration:2,ease:"bounce.out",x:-1500}),o.from(".setting-controls__spacebar",{delay:.5,duration:2,ease:"bounce.out",x:1500}),o.from(".setting-field__button ",{delay:1,duration:2,ease:"bounce.out",y:1500}),o.from(".setting__field",{opacity:0,duration:2.5}),U.play()}G.addEventListener("click",te);function te(){_.play(),c.style.display="grid",o.to(".setting__descr",{delay:.5,duration:2,ease:"bounce.out",x:1500}),o.to(".setting-controls__image",{delay:.5,duration:2,ease:"bounce.out",x:-1500}),o.to(".setting-controls__spacebar",{delay:.5,duration:2,ease:"bounce.out",x:1500}),o.to(".setting-field__button ",{delay:1,duration:2,ease:"bounce.out",y:1500}),o.to(".setting__field",{opacity:0,duration:2.5}),setTimeout(()=>{I.remove()},1e3)}document.querySelector(".timer");const i=document.querySelector("#player"),B=document.querySelector(".modal__ammo"),oe=document.querySelector(".modal-ammo__btn");document.querySelectorAll(".game-field__heart");const A=document.querySelector(".gameOver-field"),v=document.querySelector(".game-field__startgame"),q=document.querySelector(".hour"),w=document.querySelector(".minute"),p=document.querySelector(".second"),x=document.querySelector(".milliseconds");let W=0,h=0,s=0,m=0,C=null,u=3;document.addEventListener("keydown",ne);function ne(e){(i.offsetTop-145>=c.offsetTop||e.key==="w"||e.key==="W"||e.key==="\u0426"||e.key==="\u0446"||e.keyCode===38)&&(i.style.top=i.offsetTop-30+"px"),(i.offsetTop<=5||e.key==="s"||e.key==="S"||e.key==="\u042B"||e.key==="\u044B"||e.keyCode===40)&&(i.style.top=i.offsetTop+30+"px"),(i.offsetLeft>=c.offsetLeft+200||e.key==="a"||e.key==="A"||e.key==="\u0444"||e.key==="\u0424"||e.keyCode===37)&&(i.style.left=i.offsetLeft-30+"px"),(i.offsetLeft<=-10||e.key==="d"||e.key==="D"||e.key==="\u0432"||e.key==="\u0412"||e.keyCode===39)&&(i.style.left=i.offsetLeft+30+"px"),e.keyCode===32&&(K.play(),setTimeout(ae,500))}oe.addEventListener("click",()=>{_.play(),B.style.display="none"});const F=["./images/enemy1.png","./images/enemy2.png","./images/enemy3.png","./images/enemy4.png","./images/enemy5.png","./images/enemy7.png"];function re(e,t){return Math.random()*(t-e)+e}function ie(e,t){return Math.floor(Math.random()*(t-e)+e)}function S(){const e=b(1,F.length-1);let t=F[e],a=ie(7,80),r=document.createElement("img");r.offsetLeft-2,r.setAttribute("src",t),r.className="enemy",r.style.top=a+"%",c.appendChild(r),se(r);let n=setInterval(()=>{u<1&&clearInterval(n),(r.offsetLeft+r.width<99||r.offsetTop>i.offsetTop&&r.offsetTop<i.offsetTop+i.height&&r.offsetLeft<=i.offsetLeft)&&(u--,le(),H(r,490))},500)}function le(){const e=document.querySelectorAll(".game-field__heart");e[e.length-1].remove()}function H(e,t){e.setAttribute("src","images/boom.gif"),setTimeout(()=>{e.remove()},t)}function ae(){let e=document.createElement("div");e.className="bullet",e.style.top=i.offsetTop+50+"px",e.style.left=i.offsetLeft+150+"px",c.appendChild(e),de(e)}function se(e){let t=re(15,19);setInterval(()=>{e.style.left=e.offsetLeft-t+"px"},100)}function de(e){let t=setInterval(()=>{e.style.left=e.offsetLeft+25+"px",ce(e),e.offsetLeft>c.clientWidth&&(e.remove(),clearInterval(t))},25)}function ce(e){let t=document.querySelector(".enemy");if(t!=null){let a=t.offsetTop,r=e.offsetTop,n=e.offsetTop+e.offsetHeight,l=t.offsetTop+t.offsetHeight,d=e.offsetLeft+2,y=t.offsetLeft+2;c.offsetLeft,n<=l&&d+e.offsetWidth>=y&&d<=y+t.offsetWidth&&r>=a&&(H(t,700),e.remove())}}v.addEventListener("click",me);function me(){_.play(),u=3,c.insertAdjacentHTML("afterbegin",`<img
          draggable="false"
          src="./images/heart.png "
          alt=""
          class="game-field__heart game-field__heart1"
        />
        <img
          draggable="false"
          src="./images/heart.png"
          alt=""
          class="game-field__heart game-field__heart2"
        />
        <img
          draggable="false"
          src="./images/heart.png"
          alt=""
          class="game-field__heart game-field__heart3"
        />`),v.style.display="none",ue(),setTimeout(()=>{S()},1e3),fe()}function fe(){let e=setInterval(()=>{if(document.querySelectorAll(".game-field__heart"),u<1||s>=20){clearInterval(e),document.querySelectorAll(".game-field__heart");let t=setInterval(()=>{if(u<1||s>=40){clearInterval(t);let a=setInterval(()=>{u<1&&clearInterval(a),S()},1400)}S()},1600)}S()},3e3)}function ue(){let e=setInterval(()=>{u<1&&(document.querySelectorAll(".enemy").forEach(a=>a.remove()),clearInterval(C),Y.play(),ye(),clearInterval(e),c.style.display="none",setTimeout(()=>{ve(),A.style.display="grid",o.to(".gameOver-field",{duration:2.5,opacity:.8}),we()},1e3))},100)}function ye(){setTimeout(()=>{document.querySelectorAll(".enemy").forEach(t=>t.remove()),Te()},4e3),i.style.top="40%",i.style.left="0%",v.style.display="grid",B.style.display="block"}v.addEventListener("click",()=>{clearInterval(C),C=setInterval(ge,10)});function ge(){m++,m<9&&(x.innerText="0"+m),m>0&&(x.innerText=m),m>99&&(s++,p.innerText="0"+s,m=0,x.innerText="0"+m),s<9&&(p.innerText="0"+s),s>9&&(p.innerText=s),s>59&&(h++,w.innerText="0"+h,s=0,p.innerText="0"+s),h>9&&(w.innerText=h),W>9&&(q.innerText=h)}const pe=document.querySelector(".gameOver__result"),he=document.querySelector(".gameOver__GameClose"),_e=document.querySelector(".gameOver__PlayAgain");function ve(){pe.innerText=`YOUR SCORE: ${q.textContent}:${w.textContent}:${p.textContent}:${m}`}function we(){o.from(".inviteInterview",{duration:4,delay:.7,ease:"slow(0.7, 0.7, false)",y:-1500}),o.from(".gameOver__text",{duration:3.5,delay:.6,ease:"slow(0.7, 0.7, false)",y:-1500}),o.from(".gameOver__result",{duration:3,delay:.5,ease:"slow(0.7, 0.7, false)",y:-1500}),o.from(".gameOver__repeat",{duration:2.5,delay:.4,ease:"slow(0.7, 0.7, false)",y:-1500}),o.from(".gameOver__buttons",{opacity:0,duration:4,delay:2})}he.addEventListener("click",xe);function xe(){o.to(".inviteInterview",{delay:2,duration:3.5,ease:"bounce.out",y:1500}),o.to(".gameOver__text",{delay:1.6,duration:3,ease:"bounce.out",y:1500}),o.to(".gameOver__result",{delay:1.2,duration:2.5,ease:"bounce.out",y:1500}),o.to(".gameOver__repeat",{delay:.8,duration:2,ease:"bounce.out",y:1500}),o.to(".gameOver__buttons",{delay:.4,duration:1.5,ease:"bounce.out",y:1500}),o.to(".gameOver-field",{opacity:0,duration:1.5}),setTimeout(()=>{A.remove()},2500)}function Se(){o.to(".gameOver-field",{opacity:0,duration:4}),o.to(".inviteInterview",{duration:4,delay:.2,ease:"slow(0.7, 0.7, false)",y:-1500}),o.to(".gameOver__text",{duration:3.5,delay:.6,ease:"slow(0.7, 0.7, false)",y:-1500}),o.to(".gameOver__result",{duration:3,delay:.8,ease:"slow(0.7, 0.7, false)",y:-1500}),o.to(".gameOver__repeat",{duration:2.5,delay:1,ease:"slow(0.7, 0.7, false)",y:-1500}),o.to(".gameOver__buttons",{duration:3,delay:1.2,ease:"slow(0.7, 0.7, false)",y:-1500}),o.to(".gameOver-field",{opacity:0,delay:5}),o.from(".inviteInterview",{delay:5,y:0}),o.from(".gameOver__text",{delay:5,y:0}),o.from(".gameOver__result",{delay:5,y:0}),o.from(".gameOver__repeat",{delay:5,y:0}),o.from(".gameOver__buttons",{delay:5,y:0})}_e.addEventListener("click",()=>{Se(),setTimeout(()=>{A.style.display="none",c.style.display="grid"},4e3)});function Te(){W=0,h=0,s=0,m=0,q.textContent="00",w.textContent="00",p.textContent="00",x.textContent="00"}
