  function enterSearch() {
      if(event.keyCode == 13){
        myFunction();  // 실행할 이벤트
      }
    }
    function myFunction() {
      var x = document.getElementById("text").value;
    
      //제거 해도됨
      window.location.href = "../html/"+x+".html";
    }
