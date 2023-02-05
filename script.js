"use strict";
var a = parseInt(prompt("enter the first number"));
var b = parseInt(prompt("enter the second number"));
var c = parseInt(prompt("enter the third number"));


function pyth()
  {
    if((a > 0) && (b> 0) && (c>0))
    {
      if((a>=b)&&(a>=c))
      {
        if((a*a)== (b*b+c*c))
        {
          var x = document.getElementById("answer");
          x.innerHTML = "Yes!";
          document.getElementById('answer').className = 'a';
        } else
        {
          var x = document.getElementById("answer");
          x.innerHTML = "No";
          document.getElementById('answer').className = 'b';

        }
      }else if((b>=a)&&(b>=c))
      {
        if((b*b)== (a*a+c*c))
        {
          var x = document.getElementById("answer");
          x.innerHTML = "Yes!";
          document.getElementById('answer').className = 'a';
        } else
        {
          var x = document.getElementById("answer");
          x.innerHTML = "No";
          document.getElementById('answer').className = 'b';
        }
      }else
      {
        if((c*c)== (b*b+a*a))
        {
          var x = document.getElementById("answer");
          x.innerHTML = "Yes!";
          document.getElementById('answer').className = 'a';
        } else
        {
          var x = document.getElementById("answer");
          x.innerHTML = "No";
          document.getElementById('answer').className = 'b';
        }
      }
    } else
    {
      var x = document.getElementById("answer");
      x.innerHTML = "Error";
          document.getElementById('answer').className = 'c';
    }
    
    
  }

pyth();

