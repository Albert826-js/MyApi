 export const albertAll =10;





let a =["albert","carlin"];

 export function red() {

  console.log(a[1]);
  


  
}

export const buttonClick =document.getElementById('butter');

buttonClick.addEventListener('click',()=>{

  
  console.log("hi");
  let prom= new Promise((resolve, reject) => {

    let a=1;

    if (a==1) {

        resolve("good");
        
    } else {
        reject("erroe");
    }


    
})

const data = setTimeout((a) => {
    
  fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>console.log(...data));


console.log("the date is arrived");














  
},2000);




 

console.log(prom);  
  
  
})



 export function paren(ad) {

  let yar =new Promise((resolve, reject) => {

    if (ad==1) {
      resolve("finish")
      
    } else {

      reject("rejected");
      
    }
    
  })

  setTimeout(() => {
    console.log("parent is arrived");

    console.log(yar);
    
    
    
  }, 2000);
  
}

let rec={ };

fetch('https://fakestoreapi.com/products',{
  method:'Post',
  headers:{
     'Content-Type': 'application/json'
  },
  body: JSON.stringify(rec)

})

.then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error( error));





  fetch('https://fakestoreapi.com/products')
  .then(give=>give.json())
  .then(data=>console.log(...data))





  
 

