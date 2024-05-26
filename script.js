
// Define the user date
let userdate = document.getElementById("date");
userdate.max = new Date().toISOString().split("T")[0]; // To prevent the user from selecting future date

// Ege Calculator Function
function calc_age() {

    var fulldate = new Date(userdate.value);

    var d1 = fulldate.getDate();
    var m1 = fulldate.getMonth() + 1;
    var y1 = fulldate.getFullYear();

    var currentDate = new Date();

    var d2 = currentDate.getDate();
    var m2 = currentDate.getMonth() + 1;
    var y2 = currentDate.getFullYear();
    
    let y, m, d;
    y = y2 - y1;

    if (m2 >= m1){
        m = m2-m1;}
    else{
        y --;
        m = m2-m1+12
    }

    if (d2 >= d1){
        d = d2-d1;}
    else{                   
        m --;
        d   = getDaysInMonth(y,m) + d2 - d1;
    }
    
    if (m<0){
        m = 11;
        y--;
    }

    age.innerHTML = 'You have '+y+' years, '+m+' months, and '+d+' days!'; // print the birth date on te screen

}
//to convert the days to months
function getDaysInMonth(year, month)
{
    return new Date(year,month,0).getDate();
}