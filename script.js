function tempe(){
    var cel = document.getElementById("c").value;
    var fer = ( cel * 9/5) + 32;
    document.getElementById("f").value = fer
}

function tempp(){
    var fer = document.getElementById('f').value;
    var cel = (fer - 32) * 5/9;
    document.getElementById('c').value = cel
}
function wer(){
    var w = document.getElementById("kg").value;
    var p = w * 2.205;
    document.getElementById("lbs").value = p;
}

function weightptokg(){
    var p = document.getElementById('lbs').value;
    var kg = p *  0.45359237;
    document.getElementById('kg').value = kg
}

function di(){
    var km = document.getElementById("Distance").value;
    var m = km * 0.62137;
    document.getElementById("miles").value = m;
}

function diii (){
    var m = document.getElementById('miles').value;
    var km = m * 1.609344;
    document.getElementById('Distance').value = km
}