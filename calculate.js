/* This function evaluates an expression when user clicks on corresponding keys */
 function getValue() {
            var value = 0; //initializes the variable that will hold the value the user clicks on
            window.onload = function() {
              document.getElementById("one").onclick = function() {
             value = document.getElementById("one").innerHTML;
                document.getElementById("result").innerHTML += value; /* adds the value user clicked on to the results div */
              };
              document.getElementById("two").onclick = function() {
                value = document.getElementById("two").innerHTML;
                document.getElementById("result").innerHTML += value;
              };
              document.getElementById("three").onclick = function() {
                value = document.getElementById("three").innerHTML;
                document.getElementById("result").innerHTML += value;
              };
              document.getElementById("four").onclick = function() {
                value = document.getElementById("four").innerHTML;
                document.getElementById("result").innerHTML += value;
              };
              document.getElementById("five").onclick = function() {
                value = document.getElementById("five").innerHTML;
                document.getElementById("result").innerHTML += value;
              };
              document.getElementById("six").onclick = function() {
                value = document.getElementById("six").innerHTML;
                document.getElementById("result").innerHTML += value;
              };
              document.getElementById("seven").onclick = function() {
                value = document.getElementById("seven").innerHTML;
                document.getElementById("result").innerHTML += value;
              };
              document.getElementById("eight").onclick = function() {
                value = document.getElementById("eight").innerHTML;
                document.getElementById("result").innerHTML += value;
              };
              document.getElementById("nine").onclick = function() {
                value = document.getElementById("nine").innerHTML;
                document.getElementById("result").innerHTML += value;
              };
              document.getElementById("zero").onclick = function() {
                value = document.getElementById("zero").innerHTML;
                document.getElementById("result").innerHTML += value;
              };
              document.getElementById("decimal").onclick = function() {
                value = document.getElementById("decimal").innerHTML;
                document.getElementById("result").innerHTML += value;
              };
              document.getElementById("delete").onclick = function() {
                document.getElementById("result").innerHTML = "";
              };
              document.getElementById("add").onclick = function() {
                value = document.getElementById("add").innerHTML;
                document.getElementById("result").innerHTML += value;
              };
              document.getElementById("subtract").onclick = function() {
                value = document.getElementById("subtract").innerHTML;
                document.getElementById("result").innerHTML += value;
              };
              document.getElementById("divide").onclick = function() {
                value = document.getElementById("divide").innerHTML;
                document.getElementById("result").innerHTML += value;
              };
              document.getElementById("multiply").onclick = function() {
                value = document.getElementById("multiply").innerHTML;
                document.getElementById("result").innerHTML += value;
              };
              document.getElementById("equals").onclick = function() {
                var equation = document.getElementById("result").innerHTML; /* Gets the expression in results div */
                var finalAnswer = eval(equation);                           /* The expression is evaluated and answer is displayed */
                document.getElementById("result").innerHTML = finalAnswer;
              }
            };
          }
          getValue();