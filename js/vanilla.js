let mainNav = document.getElementById('menu');
let navbarToggle = document.getElementById('navbarToggle');

navbarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
})


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");

    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


updateMemberPics();

function updateMemberPics() {
  if ($(window).width() < 800) {
    let change = document.getElementById('changehtml');
    change.innerHTML = '<img class="introTextAnimation" src="sources/podklady/STDwed.svg" alt="Shoot the door weddings" style="width:100%;padding-top:60px;">';

  } else {
    console.log('nejde to');
  }
}

$(document).ready(function() {
  $(this).scrollTop(0);
});
