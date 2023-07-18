var typed = new Typed('#element', {
    strings: ['Muhammed', 'FrontEnd Developer.',],
    typeSpeed: 100,
    backSpeed: 50,
    loop:true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
  });

  $(window).ready(function() {
  $(window).resize(function() {
    let windowsize = $(window).width();
    if (windowsize >= 360 && windowsize < 992) {
      $("#list").hide();

    }
    else{
      $("#list").show();

    }
  });});
  $("#list-icon").on( "click", function() {
    $("#list"). slideToggle(2000);
  })

  $("#setting").click(function(){
    let optionWidth=$(".switches").outerWidth() 
    let right=$(".option").css("right")
    if(right=="0px"){
      $(".option").animate({"right":-optionWidth},1500)
    }
    else{
      $(".option").animate({"right":"0px"},1500)
    }
  })
  let bgOptionColor=["#20c997","#6610f2","#007bff","#17a2b8","#dc3545","#e83e8c","#28a745","#ffc107","#fd7e14","#795548"]
for(let i=0;i<bgOptionColor.length;i++){
  $(".color").eq(i).css('backgroundColor',bgOptionColor[i])
}




let SkillSec=document.querySelector(".SkillSection")
let ProgresSpans=document.querySelectorAll(".progress span")
window.addEventListener("scroll", function(){
  if(window.scrollY>=SkillSec.offsetTop){
  ProgresSpans.forEach(
  (span)=>{
    span.style.width=span.dataset.width
  }
)
  }
})

let Nums=document.querySelector(".nums")
let NumSpans=document.querySelectorAll(".num")
let started=false;
function startCount(el){
let goal= el.dataset.goal;
let count= setInterval(()=>{
el.textContent++;
if(el.textContent==goal){
clearInterval(count);
}
},100/goal)
}
window.onscroll=function(){
  if(window.scrollY>=Nums.offsetTop-700){
    if(!started){
       NumSpans.forEach((NumSpan)=>{startCount(NumSpan) })

    }
started=true

  }
}





//color option //
const btnTitle=document.querySelector(".title .btn")
const name=document.querySelector(".test h3 a")
const email=document.querySelector(".emaill")
const cvBtn=document.querySelector(".cv-btn")
const massegeBtn=document.querySelector(".get-info button")
const header1=document.querySelector(".about-me h2")
const header2=document.querySelector(".serv p")
const header3=document.querySelector(".box p ")
const header4=document.querySelector(".porto p ")
const icons=Array.from(document.querySelectorAll(".serv-icons"))
const infoIcons=Array.from(document.querySelectorAll(".info .ico"))
const address=Array.from(document.querySelectorAll(".skil"))
const progressSpan=Array.from(document.querySelectorAll(".progress span"))
const mohamed=document.querySelector(".mohamed")
const colorOption=Array.from(document.querySelectorAll(".color"))
const colors=["#20c997","#6610f2","#007bff","#17a2b8","#dc3545","#e83e8c","#28a745","#ffc107","#fd7e14","#795548"]
for(let i=0;i<colorOption.length;i++){
  colorOption[i].addEventListener("click",function(){
    btnTitle.style.color=`${colors[i]}`;
    btnTitle.style.borderColor=`${colors[i]}`;
    name.style.color=`${colors[i]}`;
    email.style.color=`${colors[i]}`
    mohamed.style.color=`${colors[i]}`
    cvBtn.style.backgroundColor=`${colors[i]}`
    cvBtn.style.borderColor=`${colors[i]}`
    massegeBtn.style.backgroundColor=`${colors[i]}`
    massegeBtn.style.borderColor=`${colors[i]}`
    for(let x=0; x<icons.length;x++){
      icons[x].style.color=`${colors[i]}`
    }
    for(let y=0; y<address.length;y++){
      address[y].style.color=`${colors[i]}`
    }
    for(let z=0; z<infoIcons.length;z++){
      infoIcons[z].style.color=`${colors[i]}`
    }
    for(let j=0; j<progressSpan.length;j++){
      progressSpan[j].style.backgroundColor=`${colors[i]}`
    }
  })
}