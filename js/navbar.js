// Menu toggle for mobile
$(document).ready(function() {
  $('#nav-icon4').click(function() {
    $(this).toggleClass('open');
  });
});

$(document).ready(function() {
  $("#navToggle a").click(function(e) {
    e.preventDefault();

    $("header > nav").slideToggle("medium");
    $("#logo").toggleClass("menuUp menuDown");
  });

  $(window).resize(function() {
    if ($(window).width() >= "600") {
      $("header > nav").css("display", "block");

      if ($("#logo").attr('class') == "menuDown") {
        $("#logo").toggleClass("menuUp menuDown");
      }
    } else {
      $("header > nav").css("display", "none");
    }
  });

  $("header > nav > ul > li > a").click(function(e) {
    if ($(window).width() <= "600") {
      if ($(this).children()) {
        $(this).siblings().slideToggle("fast")
        $(this).children(".toggle").html($(this).children(".toggle").html() == 'close' ? 'expand' : 'close');
      }
    }

  });
});

// NAVBAR HIDING

// Need to have css code to :
// position:fixed
// top:0;
// transition: ex. top ease 0.5s;

if ($(window).width() < 800) {
  console.log('navbar not hiding');
} else {
  navbarHiding();
}


function navbarHiding() {
  let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById('navbar');

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      // console.log(prevScrollPos)
      // console.log(currentScrollPos);;
      navbar.style.top = '0';
    } else {
      // navbar.style.top = '-15px';
    }
    prevScrollPos = currentScrollPos;
  }
}

// end


// SCROLLING TO #ELEMENT
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'swing');
  if ($(window).width() < 800) {
  $('#menu').toggleClass('active');
}
});

//
// $(document).click(function(e) {
// 	if (!$(e.target).is('#navbar') && $('#menu').hasClass('active')) {
//     	$('#menu').removeClass('active');
//     }
// });
