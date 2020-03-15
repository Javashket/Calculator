function round(name){
    return (Math.round(name*100)/100);
}

function random(min,max) {
    return round((Math.random() * (max - min) + min));
}

function create (){
    for( var i=0 ; i<9 ; i++) {
        document.getElementById(i).innerHTML = random(0,10);
    }
}

create();

var a = 0;
var b = 0;
var idcheika1=20;
var idcheika2=20;
var idcheika3=20;
var cheika1 = false;
var cheika2 = false;
var cheika3 = false;

function checkName(name) {
    if(cheika1==false&&name.id!=idcheika2){
        a = name.innerHTML;
        name.style.background='#ADD8E6';
        cheika1=true;
        idcheika1=name.id;
    } else if(cheika1==true && name.id==idcheika1 ){
        a=0;
        name.style.background="#FFFFFF";
        cheika1=false;
        idcheika1=20;
    } else if(cheika2==false) {
        b = name.innerHTML;
        name.style.background='#E0FFFF';
        cheika2=true;
        idcheika2 = name.id;
    } else if(cheika2==true && name.id == idcheika2 ){
        b=0;
        name.style.background="#FFFFFF";
        cheika2=false;
        idcheika2=20;
    }
}

function idem(name){ 
    if(cheika3==false){
        idcheika3 = name.id;
        name.style.background='#FF6347';
        cheika3=true;
    } else  if (cheika3==true && name.id == idcheika3) {
        name.style.background='#FFFFFF';
        idcheika3=20;
        cheika3=false;
    }
}

function mnog(name) {
    if(cheika1==false && cheika2==false){
        alert("Вы не выбрали ни одного числа для умножения!");
    } else if(cheika1==true && cheika2==true) {
        if(idcheika3==20) {
            alert("Вы не выбрали ячейку для сохранения результата!");
        } else {
            result = round(a*b)
            document.getElementById(idcheika3).innerHTML = result;
        }
    } else if (cheika1==true||cheika2==true) {
        alert("Вы выбрали только 1 число для умножения, выберите второе!");
    }
}