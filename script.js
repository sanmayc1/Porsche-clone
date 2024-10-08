var cardscrol = document.getElementById("cardscrol");

// right scroll
function scrolright(){
    cardscrol.scrollBy({
        left:500,
        behavior:'smooth'
    });
}
//left scroll
function scrolleft(){
    cardscrol.scrollBy({
        left:-500,
        behavior:"smooth"
    });
}


const menudrop=document.getElementById('menu-drop');
const body=document.querySelector('body');

function Openmenu(){
    
    menudrop.style.left='0';
    body.style.overflow='hidden';
}

function closemenu(){
    menudrop.style.left='-40%';
    body.style.overflow='scroll';

}

// footer li 1
var footerlist=document.querySelector('.footer-list');
const downicon=document.querySelector('.down-icon');

function expand(){
 footerlist.classList.toggle('expand');
 downicon.classList.toggle('down');
}

// footer li 2

var footerlist2=document.querySelector('.footer-list2');
const downicon2=document.querySelector('.down-icon2');

function expand2(){
 footerlist2.classList.toggle('expand2');
 downicon2.classList.toggle('down2');
}
// fotter li 3

var footerlist3=document.querySelector('.footer-list3');
const downicon3=document.querySelector('.down-icon3');

function expand3(){
 footerlist3.classList.toggle('expand3');
 downicon3.classList.toggle('down3');
}
// fotter li 4
var footerlist4=document.querySelector('.footer-list4');
const downicon4=document.querySelector('.down-icon4');

function expand4(){
 footerlist4.classList.toggle('expand4');
 downicon4.classList.toggle('down4');
}