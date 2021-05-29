var youName = prompt("Rokib asked ! your Name");
var youAge = prompt("Rokib asked ! your Age");
var youSchool = prompt("Rokib asked ! your School Name");
var yourLocation = prompt("Rokib asked ! your Distrect");

function mymachine(name, age, school, yourLocation) {

    var show = "Hi **" + name + "** how are your brother. " + "<br>" + " Your are " + age + " Years old. " + "<br>" + " You live in " + yourLocation + " right! " + "<br>" + " Your are student of " + school + "<br>" + "Good byy !" + youName + " Massage me on <a href='facebook.com'> Facebook</a>";
    document.querySelector(".myDiv").innerHTML = show

};

mymachine(youName, youAge, youSchool, yourLocation)