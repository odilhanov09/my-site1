var myAge; //o'zgaruvchi yaratish
myAge = 31; // o'zgaruvchiga qiymat berish
myAge = 15; // qiymatini yangilash

let sodiqjonsAge;
sodiqjonsAge = 21;

const P = 3.14;  // o'zgarmas constanta
// P=3.24; xato

let studentName = "Abbosbek";
studentName = "O"

// console.log("Hello user! " + studentName + " Hello everybody"); 

let a = -15000000;
let b = 8;

// console.log(b*a);

// alert("bugun svet o'chiq holda dars o'tamiz")  // ogohlantirish предупреждение
// confirm('Will you marry me?'); // tasdiqlash подтверждение
// let saidakbarsAge = prompt("Salom Saidakbar! Yoshing nechchida?");  // ma'lumot olish 
// console.log("Saidakbarning yoshi " + saidakbarsAge + " ekan!");

// driversLisenceExpireDate - camelCase;
// drivers_lisence_expire_date - snakeCase;


// let brothersName = prompt('akangning yoshi nechida?');
// let difference = prompt('sendan necha yosh katta?');

// alert("sening yoshing " + (brothersName - difference) + " da!");


// && - ikkala shart bajarilsagina

// || - hech yoq bitta shart bajarilsa bo'ldi


// if((0 < a) && (a < 100)){
//     console.log("a  ning qiymati 0 bilan  100 orasida");
// } else{
//     console.log("a  ning qiymati 0 bilan  100 orasida emas");
// }

alert(" onga yursang qizizngni yo'qotasan")
alert("chapga yursang akauntingni yo'qotasan")
alert("togriga yursang kot bolasan ")

let direction = prompt('tanla musavvir qayoqqa yurasan?')
if( direction=="chapga") {
    let javob =  confirm("javobmi?")
    if(javob){
        alert("tayorlanip tur 5 minutta akk uhlisan")
    }
    else{
        alert ("erkakmisan?")
    }
}
if(direction=="onga"){
    let javob =  confirm("javobmi?")
    if(javob){
        alert("qizing keti ")
    }
    else{
        alert ("erkakmisan?")
    }
}
if(direction=="togriga"){
    let javob =  confirm("javobmi?")
    if(javob){
        alert("kot bolasan")
    }
    else{
        alert ("erkakmisan?")
    }
}



