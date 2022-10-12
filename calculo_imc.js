 const form = document.querySelector('#formulario_1');
 form.addEventListener('submit', function(e) {
 
e.preventDefault();
const inputPastel = e.target.querySelector('#pastel');
const inputDog = e.target.querySelector('#dog');
const inputBolos = e.target.querySelector('#bolos');
const inputPudim = e.target.querySelector('#pudim');
const inputCanjica = e.target.querySelector('#canjica');
const inputRefri = e.target.querySelector('#refri');


const pastel = Number(inputPastel.value);
const dog = Number(inputDog.value);

const bolos = Number(inputBolos.value); 
const pudim = Number(inputPudim.value);
const canjica = Number(inputCanjica.value); 
const refri = Number(inputRefri.value); 


if((!Number.isInteger(pastel)) || (!(pastel >= 0))){
    setResultado_1('Quantidade invalida', false);
    return
}

if((!Number.isInteger(dog)) || (!(dog >= 0))){
    setResultado_1('Quantidade invalida', false);
    return
}


if((!Number.isInteger(bolos)) || (!(bolos >= 0))){
    setResultado_1('Quantidade invalida', false);
    return
}

if((!Number.isInteger(pudim)) || (!(pudim >= 0))){
    setResultado_1('Quantidade invalida', false);
    return
}

if((!Number.isInteger(canjica)) || (!(canjica >= 0))){
    setResultado_1('Quantidade invalida', false);
    return
}

if((!Number.isInteger(refri)) || (!(refri >= 0))){
    setResultado_1('Quantidade invalida', false);
    return
}


       
const total_pagar = getTotal_pagar(pastel, dog, bolos, pudim, canjica, refri);  
const msg_1 = `<b>Total à pagar R$:<b> ${total_pagar}`;
setResultado_1(msg_1, true);
console.log(total_pagar);

const lista_item = getLista_item(pastel, dog, bolos, pudim, canjica, refri);  
const msg_3 = `ITENS DO PEDIDO: <br> ${lista_item}`; 
setResultado_3(msg_3, true);
console.log(lista_item);


function getLista_item(pastel, dog, bolos, pudim, canjica, refri){
 
const itens = [pastel, dog, bolos, pudim, canjica, refri]
    
let lista_item = "";
    
    for (let i = 0; i < itens.length; i++) {

        if((itens[0] > 0) && (itens[0] < 2)){
            lista_item += itens[0] + "- PASTEL" +  "<br>";
           }  else if (itens[0] >= 2) {   
                lista_item += itens[0] + "- PASTEIS" +  "<br>";
            } 
           
            "<br>"
         if((itens[1] > 0) && (itens[1] < 2)){
                lista_item += itens[1] + "- HOT DOGE" +  "<br>";
            } else if (itens[1] >= 2){   
                lista_item += itens[1] + "- HOT DOGES" +  "<br>";
                        
                    } 
                    "<br>"
                    
                            if((itens[2] > 0) && (itens[3] < 2)){
                                lista_item += itens[2] + "- BOLO RECHEADO" +  "<br>";
                    
                            } else if (itens[2] >= 2){   
                                lista_item += itens[2] + "- BOLOS RECHEADOS" +  "<br>";
                                        
                                    } 
                                    "<br>"

                                    if((itens[3] > 0) && (itens[3] < 2)){
                                        lista_item += itens[3] + "- BOLO SEM RECHEIO" +  "<br>";
                            
                                    } else if (itens[3] >= 2){   
                                        lista_item += itens[3] + "- BOLOS SEM RECHEIO" +  "<br>";
                                                
                                            } 
                                            "<br>"
                                            if((itens[4] > 0) && (itens[4] < 2)){
                                                lista_item += itens[4] + "- PUDIM DIVERSOS" +  "<br>";
                                    
                                            } else if (itens[4] >= 2){   
                                                lista_item += itens[5] + "- PUDIM DIVERSOS" +  "<br>";
                                                        
                                                    } 
                                                    "<br>"   
                                                    
                                            if((itens[5] > 0) && (itens[5] < 2)){
                                                lista_item += itens[5] + "- REFRIGERANTE DOLINHO" +  "<br>";
                                    
                                            } else if (itens[5] >= 2){   
                                                lista_item += itens[5] + "- REFRIGERANTES DOLINHO" +  "<br>";
                                                        
                                                    } 
                                                    break;
                                                    
                                                }
                                                return  lista_item;
                                            }
             

function getTotal_pagar(pastel, dog,  bolos, pudim, canjica, refri){

if((pastel > 0) || (dog > 0) || (bolos > 0) || (pudim > 0) || (canjica > 0) || (refri > 0)) {
   
   if((pastel % 2) ==  0) {
       pro_pastel = ((pastel/2)*10)    
    }
      else {
    pro_pastel = Math.floor(pastel/2)
    pro_pastel = ((pro_pastel*10) + 6.00)
}

if((dog % 2) ==  0) {
    pro_dog = ((dog/2)*15)    
 }
   else {
    pro_dog = Math.floor(dog/2)
    pro_dog = ((pro_dog*15) + 8.00)
}

if(bolos >= 0) {
    pro_bolo_rech = (bolos*5)    
 }
   

if(pudim >= 0) {
    pro_bolo_sem_rech = (pudim*3)    
 }
   

if(canjica >=  0) {
    pro_pudim = (canjica*5)    
 }


if(refri >=  0) {
    pro_refri = (refri*3)    
 }
   
    const total_pagar = ((pro_pastel) + (pro_dog) + (pro_bolo_rech) + (pro_bolo_sem_rech) +
    (pro_pudim) + (pro_refri))
    
    return total_pagar.toFixed(2) 
}
 


    else {
        alert("Há campos com preenchimento invlido");
        }
    
    }

function criarP(){
    const p = document.createElement('p');
    return p;
}   

function setResultado_1(msg_1, isValid){
    const resultado = document.querySelector('#resultado_1');
    resultado.innerHTML ='';
 
    const p = criarP();
 
    if(isValid){
        p.classList.add('paragrafo_resultado_1');
     } else{
         p.classList.add('bad_1');
    }
   
 p.innerHTML = msg_1;
 resultado.appendChild(p);
   
}

function criarP(){
    const p = document.createElement('p');
    return p;
 
}


function criarP3(){
    const p3 = document.createElement('p3');
    return p3;
}   

function setResultado_3(msg_3, isValid){
    const resultado = document.querySelector('#resultado_3');
    resultado.innerHTML ='';
 
    const p3 = criarP3();
 
    if(isValid){
        p3.classList.add('paragrafo_resultado_3');
     } else{
         p2.classList.add('bad_3');
    }
   
 p3.innerHTML = msg_3;
 resultado.appendChild(p3);
   
}

function criarP3(){
    const p3 = document.createElement('p3');
    return p3;
 
}


const form_2 = document.querySelector('#formulario_2');
form_2.addEventListener('submit', function(e) {
 
e.preventDefault();

const inputVl_dinheiro = e.target.querySelector('#vl_dinheiro');
const vl_dinheiro = Number(inputVl_dinheiro.value); 

const troco = getTroco(vl_dinheiro, total_pagar);  
const msg_2 = `<b>Troco do cliente R$:<b> ${troco}`;
setResultado_2(msg_2, true);
console.log(troco);


function getTroco(vl_dinheiro, total_pagar){
    if(vl_dinheiro >= total_pagar) {
        const troco = (vl_dinheiro - total_pagar);
        return troco.toFixed(2);
        
    } else {
        alert("Dinheiro menor que o total");
    } 
}
  

function criarP2(){
    const p2 = document.createElement('p2');
    return p2;
}   

function setResultado_2(msg_2, isValid){
    const resultado = document.querySelector('#resultado_2');
    resultado.innerHTML ='';
 
    const p2 = criarP2();
 
    if(isValid){
        p2.classList.add('paragrafo_resultado_2');
     } else{
         p2.classList.add('bad_2');
    }
   
 p2.innerHTML = msg_2;
 resultado.appendChild(p2);
   
}

function criarP2(){
    const p2 = document.createElement('p2');
    return p2;
 
}

}); 
});

