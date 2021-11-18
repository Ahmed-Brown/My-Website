function openPage(pageName, elmnt, color) {
  
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";

  elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();





document.onreadystatechange = function() { 

    if (document.readyState !== "complete") { 

        document.querySelector("body").style.visibility = "hidden"; 

        document.querySelector(".loading").style.visibility = "visible"; 
        

    } else { 

        document.querySelector(".loading").style.display = "none"; 

        document.querySelector("body").style.visibility = "visible"; 
        

    } 
};
