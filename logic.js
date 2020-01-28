
/*Funcion encargada de limpiar los errores en html
Recibe un string con el id del contendor a limpiar*/
function limpiarContendorHtml(id){
    var contenedor=document.getElementById(id);
    contenedor.innerHTML="";
}



/*Muestra un mensaje de errore en la interfaz*/
function mostrarError(id,mensaje){
    var contenedor=document.getElementById(id);
    contenedor.innerHTML=mensaje;
}



/*Obtiene los datos de los inputs y valida la informacion correcta*/
function validaciones(valorRecibido){
    if(parseFloat(valorRecibido)>0 && parseFloat(valorRecibido)<=100){
        return true;
    }else{
        return false;
    }

}


/*Funcion encargada de llenar la barra de progreso*/
function cargarBarra(){
    //se obtienen las variables
    var porcentajeFinal = document.getElementById("id_valor1").value;
    var porcentajeProgreso = document.getElementById("id_valor2").value;

    if(validaciones(porcentajeFinal)){          //se valida el primer input
        limpiarContendorHtml("errorInput1");    //se limpiar el primer contenedor
        limpiarContendorHtml("errorInput3"); 
        if(validaciones(porcentajeProgreso)){   //se valida el primer input
            limpiarContendorHtml("errorInput2");    //se limpiar el primer contenedor
            limpiarContendorHtml("errorInput3"); 
            if(parseFloat(porcentajeFinal)>=parseFloat(porcentajeProgreso)){
                limpiarContendorHtml("errorInput1");    //se limpiar el primer contenedor
                limpiarContendorHtml("errorInput2");    //se limpiar el primer contenedor
                limpiarContendorHtml("errorInput3"); 
                cargarBarra_aux(porcentajeFinal,porcentajeProgreso);    //se carga la barra
            }
            else{
                mostrarError("errorInput3","Error: El el porcentaje final debe ser mayor al porcentaje de progreso");
                mostrarError("errorInput1","Valor invalido");   //Se muestra un mensaje de error
                mostrarError("errorInput2","Valor invalido");       //Se muestra un mensaje de error
            }

        }else{
            mostrarError("errorInput2","Valor invalido: El valor debe ser mayor a 0 y menor o igual a 100");   //Se muestra un mensaje de error
        }   
    }else{
        mostrarError("errorInput1","Valor invalido: El valor debe ser mayor a 0 y menor o igual a 100");       //Se muestra un mensaje de error
    }
}



/*Funcion Auxiliar de cargar barra  encargada de realizar el proceso y llenarla*/
function cargarBarra_aux(porcentajeFinal,porcentajeProgreso){
    let forumla= (parseFloat(porcentajeProgreso)*100)/parseFloat(porcentajeFinal);   //forumla para obtener el progreso
    document.getElementById("id_progres").style.width = forumla+"%";                //se cambia el tamaño de la barra de progreso
    document.getElementById("id_progresoTexto").innerHTML = porcentajeProgreso + "% completado de " + porcentajeFinal + "%"; 
    

}