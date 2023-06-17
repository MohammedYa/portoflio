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

