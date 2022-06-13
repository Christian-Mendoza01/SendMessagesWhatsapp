let inputs = document.getElementsByClassName('formulario__input');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar')
        } else {
            this.nextElementSibling.classList.remove('fijar')
        }
    });
}

let labels = document.getElementsByClassName('textarea');
for (let e = 0; e < labels.length; e++) {
    labels[e].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar1')
        } else {
            this.nextElementSibling.classList.remove('fijar1')
        }
    });
}


     const form = document.getElementById("pruebafom");
    document.getElementById("enviar").addEventListener('click',function (){

    let phone = document.querySelector('#celular').value;
    let mensaje = document.querySelector('#mensaje').value;

    if(phone === ""){
        alert("El campo celular está vacío");
    } else {
        let url = 'https://api.whatsapp.com/send/?phone=' + phone + "&text=" + mensaje;
        window.open(url);

    }

});



   

/*
    if(celular === ("OK")){ 
    document.getElementById("prueba1").addEventListener('click',function (){

        let phone = document.querySelector('#celular').value;
        let mensaje = document.querySelector('#mensaje').value;



    let url = 'https://api.whatsapp.com/send/?phone=' + phone + "&text=" + mensaje;
    window.open(url);
    
});

}

*/
/*window.onload = iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener('click',validarCelular,false);
}    

function validarCelular(){
    elemento = document.getElementById("celular");
    if(elemento.value ==""){
        alert("El campo número de celular está vacío");
        return false;
   } 

   return true;

} 

    
   if(elemento === ""){ alert("El campo número de celular está vacío");}

   else if (elemento >=10){
/*  
document.querySelector('#enviar').addEventListener('click',function validar(){
    let formvalido = true
    let celular1
    celular1 = document.getElementById("celular").value;

    if(celular1 === ""){
        alert("El campo número de celular está vacío");
        return false;
   }
   return formvalido;
});
*/
/*
document.getElementById("enviar").addEventListener('click',function (){

        let phone = document.querySelector('#celular').value;
        let mensaje = document.querySelector('#mensaje').value;



    let url = 'https://api.whatsapp.com/send/?phone=' + phone + "&text=" + mensaje;
    window.open(url);
    
});


*/