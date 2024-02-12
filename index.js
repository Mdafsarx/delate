


const  SubHanAllAhDisplay=document.getElementById('SubhanallahDisplay');
const plusButtonSubHaAllah=document.getElementById('plusButtonSubhaallah');
const minusButtonSub=document.getElementById('minusButtonSub');


let subHaNaAllahValue=0;
let AlhamduliahValue=0;
let allahHuAkbarValue=0;


plusButtonSubHaAllah.addEventListener('click',function(){

    if(subHaNaAllahValue===33){
        return alert('Complect🎉')
    }
subHaNaAllahValue+=1
SubHanAllAhDisplay.innerText=subHaNaAllahValue;
SubHanAllAhDisplay.style.color='gray'
});

minusButtonSub.addEventListener('click',function(){
    
    if(subHaNaAllahValue===0){
        return alert("INVALID 💣")
    }

    subHaNaAllahValue -=1
    SubHanAllAhDisplay.innerText=subHaNaAllahValue;
    SubHanAllAhDisplay.style.color='red'
})

const AlhamduliahDisplay=document.getElementById('AlhamduliahDisplay');
const plusButtonAlhamduliah=document.getElementById('plusButtonAlhamduliah');
const minusButtonAlhamduliah=document.getElementById('minusButtonAlhamduliah');


plusButtonAlhamduliah.addEventListener('click',function(){
    if(AlhamduliahValue===33){
        return alert('Complect🎉')
    }
AlhamduliahValue=AlhamduliahValue+1;
AlhamduliahDisplay.innerHTML=AlhamduliahValue;
AlhamduliahDisplay.style.color='gray'

})


minusButtonAlhamduliah.addEventListener('click',function(){

if(AlhamduliahValue===0){
    return alert('INVALID 💣')
}

    AlhamduliahValue -=1;
    AlhamduliahDisplay.innerText=AlhamduliahValue;
    AlhamduliahDisplay.style.color='red'
})



const allahHuakbarDisplay=document.getElementById('allahHuakbarDisplay');
const plusButtonAllahHuakbar=document.getElementById('plusButtonAllahHuakbar');
const minusButtonAlaahHuAkbar=document.getElementById('minusButtonAlaahHuAkbar');

plusButtonAllahHuakbar.addEventListener('click',function(){
    if(allahHuAkbarValue===34){
        return alert('Complect🎉')
    }
allahHuAkbarValue+=1;
allahHuakbarDisplay.innerText=allahHuAkbarValue;
allahHuakbarDisplay.style.color='gray'

})


minusButtonAlaahHuAkbar.addEventListener('click',function(){

if(allahHuAkbarValue===0){
    return alert('INVALID 💣')
}

allahHuAkbarValue-=1;
    allahHuakbarDisplay.innerText=AlhamduliahValue;
    allahHuakbarDisplay.style.color='red'
})



const reset=document.getElementById('reset');
reset.addEventListener('click',function(){
    allahHuakbarDisplay.innerText=0;
    allahHuAkbarValue=0;
    subHaNaAllahValue=0;
    SubHanAllAhDisplay.innerText=0;
    AlhamduliahDisplay.innerText=0;
    AlhamduliahValue=0;
})
