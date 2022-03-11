


// $(document).ready(function () {
//   //your code here


//   $('.first').change(function() {
//     localStorage.setItem(this.id, this.value);
//   }).val(function() {
//     return localStorage.getItem(this.id)
//   });
// });




// document.querySelector(document).ready(function () {
//   //your code here


//   document.querySelector('.first').change(function() {
//     localStorage.setItem(this.id, this.value);
//   }).val(function() {
//     return localStorage.getItem(this.id)
//   });
// });





/*
var select = document.querySelector(".first");
var selectOption = select.options[select.selectedIndex];
var lastSelected = localStorage.getItem('select');

if(lastSelected) {
    select.value = lastSelected; 
}

select.onchange = function () {
   lastSelected = select.options[select.selectedIndex].value;
   console.log(lastSelected);
   localStorage.setItem('select', lastSelected);
}

*/


 /*

   document.querySelector('.first').change(function() {
    localStorage.setItem(this.id, this.value);
   }).val(function() {
     return localStorage.getItem(this.id)
   });

   */

/*

function firstSelected (){
  let select = document.querySelector(".first");
   let selectOption = select.options[select.selectedIndex];
   let lastSelected = localStorage.getItem('select');
   
   if(lastSelected) {
       select.value = lastSelected; 
   }
   
   select.onchange = function () {
      lastSelected = select.options[select.selectedIndex].value;
      console.log(lastSelected);
      localStorage.setItem('select', lastSelected);
   }

}

   

  function secondSelected (){
    let select = document.querySelector(".second");
    let selectOption = select.options[select.selectedIndex];
    let lastSelected = localStorage.getItem('select');
    
    if(lastSelected) {
        select.value = lastSelected; 
    }
    
    select.onchange = function () {
       lastSelected = select.options[select.selectedIndex].value;
       console.log(lastSelected);
       localStorage.setItem('select', lastSelected);
    }
  }

  */

  // first
  var select = document.querySelector(".first");
  var selectOption = select.options[select.selectedIndex];
  var lastSelected = localStorage.getItem('select');
  
  if(lastSelected) {
      select.value = lastSelected; 
  }
  
  select.onchange = function () {
     lastSelected = select.options[select.selectedIndex].value;
     localStorage.setItem('select', lastSelected);
  }



  // second
  var select1 = document.querySelector(".second");
  var selectOption1 = select1.options[select1.selectedIndex];
  var lastSelected1 = localStorage.getItem('select1');
  
  if(lastSelected) {
      select1.value = lastSelected1; 
  }
  
  select1.onchange = function () {
     lastSelected1 = select1.options[select1.selectedIndex].value;
     localStorage.setItem('select1', lastSelected1);
  }


// third
  var select2 = document.querySelector(".third");
  var selectOption2 = select2.options[select2.selectedIndex];
  var lastSelected2 = localStorage.getItem('select2');
  
  if(lastSelected) {
      select2.value = lastSelected2; 
  }
  
  select2.onchange = function () {
     lastSelected2 = select2.options[select2.selectedIndex].value;
     localStorage.setItem('select2', lastSelected2);
  }




switch (lastSelected) {
  case "openSans":
   console.log("1");
   document.getElementById("myDiv").style.fontFamily = "sans-serif";
   //select.style.backgrounClor ="777";
    break;
  case "cairo":
    document.getElementById("myDiv").style.fontFamily = "cairo";
    break;
  case "roboto":
    document.getElementById("myDiv").style.fontFamily = "roboto";
    break;
}


switch (lastSelected1) {
  case "red":
    document.getElementById("myDiv").style.backgroundColor = "#FF0000";
    break;
  case "green":
    document.getElementById("myDiv").style.backgroundColor = "#008000";
    break;
  case "black":
    document.getElementById("myDiv").style.backgroundColor = "#000";
    break;
  case "blue":
    document.getElementById("myDiv").style.backgroundColor = "#0000FF";
    break;
  case "brown":
    document.getElementById("myDiv").style.backgroundColor = "#654321";
    break;
  case "grey":
    document.getElementById("myDiv").style.backgroundColor = "#808080";
    break;
}


switch (lastSelected2) {
  case "16":
    document.getElementById("myDiv1").style.cssText = "16px";
    console.log(lastSelected, lastSelected1,lastSelected2);
  case "18":
    document.getElementById("myDiv1").style.fontSize = "18px";
    break;
  case "20":
    document.getElementById("myDiv1").style.fontSize = "20px";
    break;
  case "22":
    document.getElementById("myDiv1").style.fontSize = "22px";
    break;
  case "24":
    document.getElementById("myDiv1").style.fontSize = "24px";
    break;
  case "26":
    document.getElementById("myDiv1").style.fontSize = "26px";
    break;
  case "28":
    document.getElementById("myDiv1").style.fontSize = "28px";
    break;
  case "30":
    document.getElementById("myDiv1").style.fontSize = "30px";
    break;
}