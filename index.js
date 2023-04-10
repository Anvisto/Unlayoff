const prompt = require("prompt-sync")();
var x;

var name = prompt("Please enter your Name and Surname","Harry Potter");
var gender;
var male;
var female;

if (gender == male)
{
    alert("Welcome, MR. " + name);
}
else if (gender == female)
{
    alert("Welcome, MS. " + name);
}
