function translateToEN() {
let lang = 'en';

  translateWeb(lang);
  changeSelector();
}


function translateWeb(lang) {
  var allItems = document.getElementsByClassName('js_translate');
  // console.log(allItems.length);
  var actualName = "";
  var finalJSON = [];

  for (var k = 0; k < allItems.length; k++) {
    actualName = allItems[k].innerText;

    if (langData[actualName]) {

      if (langData[actualName][lang]) {

        allItems[k].innerHTML = langData[actualName][lang];
      } else {
        // console.log('Nenalezen překlad slova: ' + allItems[k].innerText);
      }
    } else {
      // console.log('Slovo vůbec nenalezeno: ' + allItems[k].innerText);
      finalJSON.push('\n\'' + allItems[k].innerText + '\'\n' + ': {\'en\':\'\'\n}');
    }
  }
   // console.log(finalJSON.toString());
}

function changeSelector() {
  let changeSelectorDiv = document.getElementById('changeSelector');

  changeSelectorDiv.innerHTML = '<button onclick="myFunction()" class="dropbtn">EN</button> <div id="myDropdown" class="dropdown-content"> <a><span class="flag-icon flag-icon-us"></span></a> <a onclick="window.location.reload()" ><span class="flag-icon flag-icon-sk"></span></a>';
}
