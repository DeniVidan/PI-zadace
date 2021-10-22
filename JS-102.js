let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka;

if (bodovi < 50){
    poruka = "nedovoljan 1"
}
else if(bodovi >= 50 && bodovi <= 64){
    poruka = "dovoljan 2"
}
else if(bodovi >= 65 && bodovi <= 79){
    poruka = "dobar 3"
}
else if(bodovi >= 80 && bodovi <= 89){
    poruka = "vrlo dobar 4"
}
else if(bodovi >= 90 && bodovi <= 100){
    poruka = "odlican 5"
}
else{
    poruka = "krivo uneseno"
}

console.log(poruka);