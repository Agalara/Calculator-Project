let num1=0;
let num2=0;
let num1isComplete=false;
let num2isComplete=false; 
let decimalMode=false;
let oper;

const opkey=document.querySelectorAll(`.operations .key`);
opkey.forEach((key)=>{
    key.addEventListener(`click`,(e)=>{
            // console.log(e.target.dataset.key);
            // console.log(e.target);
            oper=e.target.dataset.key;
            num1isComplete=true;

            console.log(typeof(oper));
            console.log(oper);
    });
});
   
const numkey=document.querySelectorAll(`.numbers .key`);
numkey.forEach((key)=>{
    key.addEventListener(`click`,(e)=>{
        console.log(e.target.dataset.key);
        console.log(typeof(e.target.dataset.key));  
        console.log(e.target);
            //crear numero
        if(e.target.dataset.key=="comma"){

            decimalMode=true;
        }else{

            buildNum(e.target.dataset.key);
        }
    });
});

// window.addEventListener("keydown",(e)=>{
//     console.log(e.key);
//     console.log(typeof(e.key));
//     console.log(e);
//     buildNum(e.key);
// });

// window.addEventListener("keydown",storeData);

// function storeData(e){
//     if(isNumber){
//         buildNum(e.key);
//     }
//     if(isOperand){
//         oper=e.target.dataset.key;
//         num1isComplete=true;
//     }


// }

function buildNum(num){
    
    if(!decimalMode){
    
        if(!num1isComplete){
        
            num1=num1*10+Number(num);
    
        }    
        else{

            num2=num2*10+Number(num);
        }
    }else{
        if(!num1isComplete){
        
            num1=num1+(Number(num));
    
        }    
        else{

            num2=num2*10+Number(num);
        }



    }

}

