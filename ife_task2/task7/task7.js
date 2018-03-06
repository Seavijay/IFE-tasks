    var oDivs = [];
    var divs = document.querySelectorAll('div');
    var oBtns = document.querySelectorAll('input');
    function pre(node){
      if (node != null) {
        oDivs.push(node);
        pre(node.firstElementChild);
        pre(node.lastElementChild);
      }
    }
    function mid(node){
      if (node != null) {
        mid(node.firstElementChild);
        oDivs.push(node);
        mid(node.lastElementChild);
      }
    } 
    function las(node){
      if (node != null) {
        las(node.firstElementChild);
        las(node.lastElementChild);
        oDivs.push(node);
      }
    }
    oBtns[0].onclick = function(){
      oDivs = [];
      pre(divs[0]);
      var i = 0;
      function onPre(){
        if (oDivs[i-1]) oDivs[i-1].style.backgroundColor = 'white';
        if (i == oDivs.length) {
          clearInterval(setOnPre);
        }
        oDivs[i].style.backgroundColor = 'green';
        i++;
      }
      var setOnPre = setInterval(onPre,1000);
    }
    oBtns[1].onclick = function(){
      oDivs = [];
      mid(divs[0]);
      var i = 0;
      function onMid(){
        if (oDivs[i-1]) oDivs[i-1].style.backgroundColor = 'white';
        if (i == oDivs.length) {
          clearInterval(setOnMid);
          return false;
        }
        oDivs[i].style.backgroundColor = 'green';
        i++;
      }
      var setOnMid = setInterval(onMid,1000);
    }
    oBtns[2].onclick = function(){
      oDivs = [];
      las(divs[0]);
      var i = 0;
      function onLas(){
        if (oDivs[i-1]) oDivs[i-1].style.backgroundColor = 'white';
        if (i == oDivs.length) {
          clearInterval(setOnLas);
          return false;
        }
        oDivs[i].style.backgroundColor = 'green';
        i++;
      }
      var setOnLas = setInterval(onLas,1000);
    }