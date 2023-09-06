// Identify DOM Elements

let funFact1 = document.getElementById('fact1');
let funFact2 = document.getElementById('fact2');
let funFact3 = document.getElementById('fact3');


// Functions that manipulate the Styles of the Document.


function revealFact() {
    funFact1.textContent = "I've have danced and performed across Australia and internationally in Europe and Asia";
    funFact1.style.height = "150px";
    funFact1.style.border = 'none';

} 
function revealFact2() {
    funFact2.textContent = "In addition to programming, I have addtional experience working as a Service Desk Technician";
    funFact2.style.height = "150px";
    funFact2.style.border = 'none';
} 
function revealFact3() {
    funFact3.textContent = "Other hobbies include Films, Live Performance and Indie Video Games";
    funFact3.style.height = "150px";
    funFact3.style.border = 'none';
} 
function restoreMystery(event) {
    event.target.textContent = '?';
    event.target.style.height = "125px";
    event.target.style.border = "solid 3.5px black"
}


// Create and list event listeners for revealing the Fun Facts
funFact1.addEventListener('mouseover', revealFact);
funFact2.addEventListener('mouseover', revealFact2);
funFact3.addEventListener('mouseover', revealFact3);
funFact1.addEventListener('mouseout', restoreMystery);
funFact2.addEventListener('mouseout', restoreMystery);
funFact3.addEventListener('mouseout', restoreMystery);




