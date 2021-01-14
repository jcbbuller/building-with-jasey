        function myFunction() {
            // A JavaScript function is a block of code designed to perform a particular task.
          var para = document.createElement("P");
            // var are variables - a way to assign particular elements to a word or phrase
            
            // .createElement(), .createTextNodes(), .getElementBuyID() and .appendChild() are methods.
            // Methods are functions that are a property of an object. A good way to think of it is an 
            // object is something that has many different tools (or methods) that do different things, 
            // and you can call on those methods based on what you want to do. You can create your own 
            // methods for an objext or use Javascript native ones. 
            
          var t = document.createTextNode("Hi!");
          para.appendChild(t);
          document.getElementById("sayHi").appendChild(para);
        
        }
