
window.onload = function(){
     var name = document.getElementById("contact").name;
     var email = document.getElementById("contact").name;
     var message = document.getElementById("contact").name;
     var submit = document.getElementById("contact").submit;
     var isEverythingOK = true;

          name.onchange = function(e){
               if(name.value ===""){
                    isEverythingOK = false;
               }
               else{
                    isEverythingOK = true;
               }
               submit.onclick = function(e){
                    if (!isEverythingOK)
                    e.preventDefault();
    };
          };
