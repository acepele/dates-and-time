/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const dt = new Date();
document.getElementById("basic").innerHTML = dt;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const d = new Date(2022, 5, 15)
document.getElementById("today").innerHTML = d;


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const bd = new Date("September 17, 1993");
document.getElementById("birthday").innerHTML = bd;


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
const dt1 = new Date();
document.getElementById("iso").innerHTML = dt.toISOString();


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
// JS ISO DATE
const date1 = new Date("2020-02-20");
document.getElementById("date1").innerHTML = date1;
// JS SHORT DATE
const date2 = new Date("05/15/2015");
document.getElementById("date2").innerHTML = date2;
// JS LONG DATE
const date3 = new Date("January 04 2022");
document.getElementById("date3").innerHTML = date3;

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
const gd = new Date();
document.getElementById("get1").innerHTML = gd.getTime();

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const gm = new Date();
let months = month[gm.getMonth()];
document.getElementById("get2").innerHTML = months;

const gh = new Date();
document.getElementById("get3").innerHTML = gh.getHours();

const gday = new Date();
document.getElementById("get4").innerHTML = gday.getDay();


// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

const sy = new Date();
sy.setFullYear(2022);
document.getElementById("set1").innerHTML = sy;

const sm = new Date();
sm.setMonth(8);
document.getElementById("set2").innerHTML = sm;

const sd = new Date();
sd.setDate(sd.getDate() + 50);
document.getElementById("set3").innerHTML = sd;

const sh = new Date();
sh.setHours(12);
document.getElementById("set4").innerHTML = sh;