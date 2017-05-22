function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function defaultTab(){
  document.getElementById("defaultOpen").click();
}

//document.getElementById("defaultOpen").click();

function onClick(element) {
  document.getElementById("img00").src = element.src;
  document.getElementById("modal00").style.display = "block";
}

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

function onClick(element) {
  document.getElementById("img02").src = element.src;
  document.getElementById("modal02").style.display = "block";
}
