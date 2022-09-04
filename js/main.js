
   //CODIGO jQuery
   $(function(){

    $(".nombre-sitio").lettering();

    //Menu fijo
    let windowHeight=$(window).height();
    let barraAltura=$(".barra").innerHeight();
    $(window).scroll(function(){
        let scroll=$(window).scrollTop();

    })

     //Programa de conferencias
    $(".programa-evento .info-curso:first").show();
    $(".menu-programa a:first").addClass("activo");
    $(".menu-programa a").on("click",function(){
        $(".menu-programa a").removeClass("activo");
        $(this).addClass("activo");
        $(".ocultar").hide();
        var enlace=$(this).attr("href");
        $(enlace).fadeIn(1000);
        return false;
    });

    //Animaciones para los numeros

    $(".resumen-evento li:nth-child(1) p").animateNumber({number:6}, 1200);
    $(".resumen-evento li:nth-child(2) p").animateNumber({number:15}, 1200);
    $(".resumen-evento li:nth-child(3) p").animateNumber({number:3}, 1500);
    $(".resumen-evento li:nth-child(4) p").animateNumber({number:9}, 1500);
   });

   //CUENTA REGRESIVA
   $(".cuenta-regresiva").countdown('2016/12/10 09:00:00', function(event){
    $("#dias").html(event.strftime('%D'));
    $("#horas").html(event.strftime("%H"));
    $("#minutos").html(event.strftime("%M"));
    $("#segundos").html(event.strftime("%S"));
   });




   //CODIGO JAVASCRIPT
   //let clave="AIzaSyDtKZDo1iAgPphXpEWt_pueJwXA7kunao8"
    

    function initMap() {
        let latlng={
            lat: 20.6772885,
            lng: -103.3856328
        };
     let map = new google.maps.Map(document.getElementById("mapa"), {
        'center': latlng,
        'zoom': 14,
        'mapTypeId':google.maps.MapTypeId.ROADMAP
        //'draggable':false,//para que no haga zoom en el mapa
        //'scrollwheel':false//para que no pueda dar zoom con el scroll de mouse
      });

    let contenido="<h2>GDLWEBCAMP</h2>"+
                  "<p>Del 10 al 12 de Diciembre</p>"+
                  "<p>Visitanos!!</p>";

      let informacion=new google.maps.InfoWindow({
        content:contenido
      });
      let marker= new google.maps.Marker({
        position:latlng,
        map:map,
        title:'GDLWEBCAMP'
      });
      marker.addListener("click", function(){
         informacion.open(map, marker);
      });
    }
(function(){
    'use strict';
    
    let regalo=document.getElementById("regalo");


    document.addEventListener('DOMContentLoaded', function(){

     //Datos usuarios
     let nombre =document.getElementById("nombre");
     let apellido =document.getElementById("apellido");
     let email =document.getElementById("email");

     //Campos pases
     let pase_dia =document.getElementById("pase_dia");
     let pase_dosdias =document.getElementById("pase_dosdias");
     let pase_completo =document.getElementById("pase_completo");
     
     //Botones y Divs
     let calcular=document.getElementById("calcular");
     let errorDiv=document.getElementById("error");
     let botonRegistro=document.getElementById("btnRegistro");
     let lista_productos=document.getElementById("lista-productos");
     let sumaTotal=document.getElementById("suma-total");
     
     //EXTRAS
     let camisaEvento =document.getElementById("camisa-evento");
     let etiquetas =document.getElementById("etiquetas");
     
    calcular.addEventListener('click' , calcularMontos);
    
    pase_dia.addEventListener("blur", mostrarDias);
    pase_dosdias.addEventListener("blur", mostrarDias);
    pase_completo.addEventListener("blur", mostrarDias);

    
    nombre.addEventListener("blur", validarCampos);
    apellido.addEventListener("blur", validarCampos);
    email.addEventListener("blur", validarCampos);
    email.addEventListener("blur", validarEmail);
    
    //Validar campos en javascript
    function validarCampos() {
        if(this.value == ''){
            errorDiv.style.display='block';
            errorDiv.innerHTML="Este campo es obligatorio";
            this.style.border='1px solid red';
            errorDiv.style.border='1px solid red';
        }else{
            errorDiv.style.display="none";
            this.style.border="1px solid #cccccc";
        }
    };

    //Validar Email en javascript
    function validarEmail(){
        if(this.value.indexOf("@") > -1){
            errorDiv.style.display="none";
            this.style.border="1px solid #cccccc";
        }else{
            errorDiv.style.display='block';
            errorDiv.innerHTML="Debe tener al menos una @";
            this.style.border='1px solid red';
            errorDiv.style.border='1px solid red';
        }
    };

     //Calcular el total apagar 
     function calcularMontos(event){
        event.preventDefault();
        if (regalo.value===''){
            alert("Debes eligir un regalo");
            regalo.focus();
        }else{
            let boletoDia= parseInt(pase_dia.value, 10) || 0,
                boletosDosDias= parseInt(pase_dosdias.value, 10) || 0,
                boletosCompletos= parseInt(pase_completo.value, 10) || 0,
                camisaComprada=parseInt(camisaEvento.value, 10) || 0,
                etiquetasCompradas=parseInt(etiquetas.value, 10) || 0;

            let totalPagar=(boletoDia*30)+ (boletosDosDias*45)+(boletosCompletos*50) +((camisaComprada*10)*0.93)+(etiquetasCompradas*2);
             //console.log(totalPagar);
            let listadoProductos=[];
            if(boletoDia>=1){
                listadoProductos.push(boletoDia + " Pases por dias")
            }
            if(boletosDosDias>=1){
                listadoProductos.push(boletosDosDias + " Pases por 2 dias")
            }
            if(boletosCompletos>=1){
                listadoProductos.push(boletosCompletos + " Pases completos")
            }
            if(camisaComprada>=1){
                listadoProductos.push(camisaComprada + " Camisas")
            }
            if(etiquetasCompradas>=1){
                listadoProductos.push(etiquetasCompradas + " Etiquetas")
            }
            //console.log( listadoProductos);


            //Mostrar la lista de productos
             lista_productos.style.display="block";
             lista_productos.innerHTML ="";
            for (let i=0;i<listadoProductos.length;i++){
                lista_productos.innerHTML += listadoProductos[i] + '<br/>';
            }
            sumaTotal.innerHTML ="$ "+ totalPagar.toFixed(2);

        }
     };

     //Mostrar talleres segun su compra
     function mostrarDias(){
        let boletoDia= parseInt(pase_dia.value, 10) || 0,
        boletosDosDias= parseInt(pase_dosdias.value, 10) || 0,
        boletosCompletos= parseInt(pase_completo.value, 10) || 0;

        let diasElegidos=[];
        if(boletoDia>0){
            diasElegidos.push("viernes");
        }
        if(boletosDosDias>0){
            diasElegidos.push("viernes", "sabado");
        }
        if(boletosCompletos>0){
            diasElegidos.push("viernes", "sabado","domingo");
        }
        for(let i=0;i<diasElegidos.length;i++){
            document.getElementById(diasElegidos[i]).style.display="block";
        }
     }
     
    });
  
})();






  

