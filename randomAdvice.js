const cardContainer=document.querySelector(".card-container");
const card=document.querySelector(".card");
const title=document.querySelector(".title");
const text=document.querySelector(".text");
const Button=document.querySelector(".btn");
console.log(Button);


async function advices() {
try{

const response=await fetch(`https://api.allorigins.win/raw?url=https://api.adviceslip.com/advice&random=${Math.random()}`,{

method:"GET",

headers:{
    "Content-Type":"application/json"
}
})

if(!response.ok){

    throw new Error(`Error:${response.status}`);
}

const data=await response.json();
console.log(data);

title.textContent=`ADVICE #${data.slip.id}`;
text.textContent=data.slip.advice;

    }

catch(err){

    console.log(err.message);
    
}


};



advices();

Button.addEventListener("click", async()=>{
    await advices() ;
})