

const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btn = document.querySelector("#btn-copiar");
btn.style.display = "none";

function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
    btn.style.display= "block";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textarea.value);
    mensaje.value = textoDesencriptado;
    textarea.value = "";
    //mensaje.style.backgroundImage = "none";
    btn.style.display= "block";
}


function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i =0;i < matrizCodigo.length;i++){
        
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
           
        }
        

    if(stringEncriptado.length != 0){
          
                swal("Buen trabajo!", "Texto encriptado con éxito!", "success");
                   
        }
      else{
            swal("Ooops!","Debes ingresar un texto","warning");
            mensaje.style.backgroundImage = url("imagenes/descifrando2.jpg");
            
        }
    }
    return stringEncriptado;
}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i =0;i < matrizCodigo.length;i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
           
        }
    

    if(stringDesencriptado.length != 0){
          
        swal("Buen trabajo!", "Texto desencriptado con éxito!", "success");
           
}
else{
    swal("Ooops!","Debes ingresar un texto","warning");
    mensaje.style.backgroundImage = url("imagenes/descifrando2.jpg");
    
}
   
}
     return stringDesencriptado;
 }

/*copiar texto*/
function copyToClipBoard() {
    var content = document.getElementById('textArea');
   content.select();
  
    document.execCommand('copy');
    swal("Buen trabajo!", "Texto copiado con éxito!", "success");
   
    //alert("texto copiado con exito");
}

/* copyright*/
const year = document.querySelector('#current-year');
year.innerHTML = new Date().getFullYear();
