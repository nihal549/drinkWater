
const liters = document.querySelector('.liters')
const percentage = document.querySelector('.percentage')
const remained = document.querySelector('.remained')
const cups =document.querySelector('.cups')
const modal = document.querySelector('.modal')
const form = document.querySelector('.form')
const container = document.querySelector('.container')
const indicatingGoal = document.querySelector('.display')
const modal2 = document.querySelector('.modal2')
form.addEventListener('submit',e=>{
    e.preventDefault()
    modal.style.display ='none';
    container.style.display ='flex'

    const goal = form.liters.value
    const bigGlassSize =goal*1000
    const glassSize =form.ml.value
    const glassCount = bigGlassSize/glassSize
  indicatingGoal.innerText= `Goal : ${goal}L`
for(let i=0;i<glassCount;i++){
   const child = document.createElement('div')
   child.setAttribute("class","small-glasses")
   child.innerText= glassSize
   cups.appendChild(child)
}

const smallGlass = document.querySelectorAll('.small-glasses');

smallGlass.forEach((glass,id)=>{
    glass.addEventListener('click',()=>highLight(id))
   
})


function highLight(id){
  if(smallGlass[id].classList.contains('.full')&& !smallGlass[id].nextElementSibling.classList.contains('.full')){
      id--
  }

  smallGlass.forEach((cup,id2)=>{
      if(id2<=id){
          cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
  })

  updateBigGlass()
}

function  updateBigGlass(){
    const fullGlasses = document.querySelectorAll('.small-glasses.full').length
const totalglasses =smallGlass.length;
if(fullGlasses==0){
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;

}else{
    percentage.style.visibility ='visible';
    percentage.style.height = `${fullGlasses/totalglasses *330}px`
    percentage.innerText =`${fullGlasses/totalglasses *100}%`
}

if(fullGlasses ==totalglasses){
    remained.style.visiblity ='hidden';
    remained.style.height =0;
    container.style.display ='none'
    modal2.style.display ='flex'
    

}else{
    remained.style.visibility = 'visible'
    liters.innerText=`${goal-(glassSize*fullGlasses/1000)}L`
}

}



})

