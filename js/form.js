// User puts-in the numbers for the investments. 
//Get the number from the input field

var inv = document.getElementById('inv');
// console.log(inv);
// form.style.backgroundColor = "orange";
// inv.style.backgroundColor = "white";
// inv.style.color = "black"

// inv.value = 2;

//user puts in the numbers for the Savings

var svn = document.getElementById('sav');
// svn.style.backgroundColor = "blue";
// console.log("Hello");
//user clicks on the Submit btn and the script calculates the Payback period
//let payoff = document.getElementById('poff');
// payoff.value = 20;
var int = document.getElementById('int');

let button = document.getElementById('btn-submit');
// button.style.color = "green";

/////// The payback number is populated in the Payback cell

// button.onclick = () => {
    
//     document.getElementById('poff').value = parseFloat(inv.value) + parseFloat(svn.value);
//     //document.write(payoff.value); // - writes in a new page
//     // alert("Hello");
//     // console.log("clicked");
// };
  
document.getElementById('calc').addEventListener('submit', function(e) {
    e.preventDefault(); //to prevent form submission
    // alert('click');
    document.getElementById('poff').value = parseFloat(inv.value) * (parseFloat(int.value)/100 + 1) / parseFloat(svn.value);
    }); 


//User clicks on the Reset button and the fields a reset to null