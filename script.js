const photos = window.PHOTOS || [];

const flowerData = [
  ["A flor do meu sorriso","Porque tem dias em que lembrar de você já deixa tudo mais leve.","🌹"],
  ["A flor do seu olhar","Seu olhar tem um jeito de ficar na minha cabeça mesmo quando você não está por perto.","🌷"],
  ["A flor da saudade","É engraçado como uma pessoa pode estar longe e ainda assim aparecer em tantos pensamentos.","🌺"],
  ["A flor dos nossos momentos","Cada lembrança bonita merece um lugar especial. Essa é uma delas.","🌸"],
  ["A flor do futuro","Essa eu deixei para tudo aquilo que ainda podemos viver e transformar em memória.","💐"]
];

const bouquet = document.getElementById("bouquet");
flowerData.forEach((item,i)=>{
  const f=document.createElement("div");
  f.className=`flower f${i+1}`;
  const img=photos[i%Math.max(photos.length,1)] || "";
  f.innerHTML=`<div class="stem"></div><div class="leaf"></div><div class="leaf r"></div>
  <div class="bloom">${img?`<img src="${img}" alt="">`:''}</div><div class="flower-center"></div>`;
  f.onclick=()=>openModal(i);
  bouquet.appendChild(f);
});

const gallery=document.getElementById("gallery");
photos.forEach((p,i)=>{
  const img=document.createElement("img");
  img.src=p; img.alt=`Momento ${i+1}`; img.loading="lazy";
  img.onclick=()=>openModal(i);
  gallery.appendChild(img);
});

const modal=document.getElementById("modal");
function openModal(i){
  const d=flowerData[i%flowerData.length];
  document.getElementById("modalTitle").textContent=d[0];
  document.getElementById("modalText").textContent=d[1];
  document.getElementById("modalFlower").textContent=d[2];
  document.getElementById("modalPhoto").src=photos[i%Math.max(photos.length,1)] || "";
  modal.classList.remove("hidden");
}
document.getElementById("closeModal").onclick=()=>modal.classList.add("hidden");
modal.onclick=e=>{if(e.target===modal)modal.classList.add("hidden")};

const envelope=document.getElementById("envelope");
document.getElementById("openBtn").onclick=()=>{
  envelope.classList.add("open");
  setTimeout(()=>{
    document.getElementById("intro").style.transition="1s";
    document.getElementById("intro").style.opacity="0";
    setTimeout(()=>document.getElementById("intro").remove(),900);
    document.getElementById("main").classList.remove("hidden");
    window.scrollTo(0,0);
  },1300);
};

document.getElementById("loveBtn").onclick=()=>{
  const m=document.getElementById("loveMessage");
  m.textContent="Eu escolheria você de novo. E de novo. E de novo. ♡";
  burst();
};

function burst(){
  for(let i=0;i<35;i++){
    const s=document.createElement("span");
    s.textContent=["♥","♡","✦","🌸"][Math.floor(Math.random()*4)];
    s.style.position="fixed";s.style.left="50%";s.style.top="65%";s.style.zIndex="250";
    s.style.fontSize=(14+Math.random()*25)+"px";s.style.pointerEvents="none";
    document.body.appendChild(s);
    const x=(Math.random()-.5)*window.innerWidth*.9, y=-(100+Math.random()*window.innerHeight*.5);
    s.animate([{transform:"translate(-50%,-50%) scale(.3)",opacity:1},{transform:`translate(calc(-50% + ${x}px),calc(-50% + ${y}px)) rotate(${Math.random()*500}deg)`,opacity:0}],{duration:1400+Math.random()*1000,easing:"cubic-bezier(.15,.75,.3,1)"}).onfinish=()=>s.remove();
  }
}

const canvas=document.getElementById("particles"),ctx=canvas.getContext("2d");
let pts=[];
function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0)}
function init(){pts=Array.from({length:55},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.6+.4,v:Math.random()*.25+.05,a:Math.random()}))}
function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);pts.forEach(p=>{p.y-=p.v;if(p.y<0)p.y=innerHeight;ctx.globalAlpha=.2+p.a*.45;ctx.fillStyle="#ffd6e4";ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()});requestAnimationFrame(draw)}
addEventListener("resize",()=>{resize();init()});resize();init();draw();
