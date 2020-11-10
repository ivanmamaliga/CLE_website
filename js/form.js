// User puts-in the numbers for the investments. 
//Get the number from the input field

var inv = document.getElementById('inv');


//user puts in the numbers for the Savings

var svn = document.getElementById('sav');

var int = document.getElementById('int');

let button = document.getElementById('btn-submit');


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

////////////////////// Toggle Navbar ///////////////////

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})