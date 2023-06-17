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