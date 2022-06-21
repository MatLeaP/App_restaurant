const URLJSON    = "./datos.json"


$.get(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
    let datos = respuesta;
        for (const dato of datos) {
            $("#listaProductos").append(`<div class= "productosItem">
                    <img src="${dato.img}" >
                    <h2> ${dato.producto}</h2>
                    <p>Precio $ ${dato.precio}</p>
                    </div>`)
            }
    }
});
$("#btnTodo").click(() => {
    $(".productosItem").hide()
    $.get(URLJSON, function (respuesta, estado) {
        if(estado === "success"){
        let datos = respuesta;
            for (const dat of datos) {
                $("#listaProductos").append(`<div class= "productosItem">
                        <img src="${dat.img}" >
                        <h2> ${dat.producto}</h2>
                        <p>Precio $ ${dat.precio}</p>
                        </div>`)
                }
        }
    });
});


$("#btnEntradas").click(() => {
    $(".productosItem").hide()
    $.get(URLJSON, function (respuesta, estado) {
        if(estado === "success"){
        let datos = respuesta;
        let listaEntradas = datos.filter(datos=> datos.categoria == "entrada")
            for (const dat of listaEntradas) {
                $("#listaProductos").append(`<div class= "productosItem">
                        <img src="${dat.img}" >
                        <h2> ${dat.producto}</h2>
                        <p>Precio $ ${dat.precio}</p>
                        </div>`)
                }
        }
    });
});

$("#btnComidas").click(() => {
    $(".productosItem").hide()
    $.get(URLJSON, function (respuesta, estado) {
        if(estado === "success"){
        let datos = respuesta;
        let listaComidas = datos.filter(datos=> datos.categoria == "comida")
            for (const dat of listaComidas) {
                $("#listaProductos").append(`<div class= "productosItem">
                        <img src="${dat.img}" >
                        <h2> ${dat.producto}</h2>
                        <p>Precio $ ${dat.precio}</p>
                        </div>`)
                }
        }
    });
});

$("#btnBebidas").click(() => {
    $(".productosItem").hide()
    $.get(URLJSON, function (respuesta, estado) {
        if(estado === "success"){
        let datos = respuesta;
        let listaBebidas = datos.filter(datos=> datos.categoria == "bebida")
            for (const dat of listaBebidas) {
                $("#listaProductos").append(`<div class= "productosItem">
                        <img src="${dat.img}" >
                        <h2> ${dat.producto}</h2>
                        <p>Precio $ ${dat.precio}</p>
                        </div>`)
                }
        }
    });
});

$("#btnPostres").click(() => {
    $(".productosItem").hide()
    $.get(URLJSON, function (respuesta, estado) {
        if(estado === "success"){
        let datos = respuesta;
        let listaPostres = datos.filter(datos=> datos.categoria == "postre")
            for (const dat of listaPostres) {
                $("#listaProductos").append(`<div class= "productosItem">
                        <img src="${dat.img}" >
                        <h2> ${dat.producto}</h2>
                        <p>Precio $ ${dat.precio}</p>
                        </div>`)
                }
        }
    });
});



$(document).ready(function(){
$("#buttons").hide();

let botonReserva = document.getElementById("boton")
botonReserva.addEventListener('click', reserva)  

class Reservas{
    constructor(nombre, adultos, niños,telefono, fecha,id){
        this.nombre = nombre;
        this.adultos = adultos;
        this.niños = niños;
        this.telefono = telefono; 
        this.fecha = fecha;   
        this.id = id;
    } 
}
let guardarLocal = [];

function reserva(e){
    e.preventDefault();
    listaReserva.innerHTML = '';
    let nombre = document.getElementById("nombre").value;
    let adultos = document.getElementById("adultos").value;
    let niños = document.getElementById("niños").value;
    let telefono = document.getElementById("telefono").value;
    let fecha = document.getElementById("fecha").value;
    let id = Math.floor(Math.random() * (1000 - 1)) + 1;

    guardarLocal = new Reservas(nombre,adultos,niños,telefono,fecha,id) 
    
    if(nombre != ""){
        let cartel = document.createElement(`li`)
        cartel.innerHTML = `<li>Reserva a nombre de: ${nombre}</li>
                            <li>Para ${adultos} adultos</li>
                            <li>Para ${niños} niños</li>
                            <li>Telefono de contacto: ${telefono}</li>
                            <li>El dia :  ${fecha}</li>
                            <li>Num id : ${id} </li>
                            `
                            
        listaReserva.appendChild(cartel)
    }else{
    }
    
    console.log(guardarLocal)
    form.reset();
    $("#buttons").show();
}



let btnReservar = document.getElementById('btnReservar')
btnReservar.addEventListener('click', guardarReserva)


function guardarReserva(){
    let reservaArray = JSON.parse(localStorage.getItem("agenda"))|| [];
    console.log(reservaArray);
    reservaArray.push(guardarLocal);
    let agenda = JSON.stringify(reservaArray);
    localStorage.setItem("agenda", agenda)
    listaReserva.innerHTML = '';
    $("#buttons").hide();
    }
});


    let btnIngresar = document.getElementById('btnIngresar')
    btnIngresar.addEventListener('click', ingreso)


    function removeItem(pId){
        let arrayReservas = JSON.parse(localStorage.getItem("agenda"))|| [];
        const itemsFiltrados = arrayReservas.filter((p) => p.id !== pId)
        let agenda = JSON.stringify(itemsFiltrados);
        localStorage.setItem("agenda", agenda)
        listReservasAdm.innerHTML = '';
        let newArr = JSON.parse(localStorage.getItem("agenda"))|| [];
        newArr.map((p)=>{
            $("#listReservasAdm").append (`<div id="listAdm">
                                <p>Reserva a nombre de: ${p.nombre},
                                ${p.adultos} adultos,
                                ${p.niños} niños, 
                                (${p.telefono})telefono de contacto,
                                fecha  ${p.fecha}, num de id: ${p.id}</p> <button  onclick="removeItem(${p.id})" class="btnDelete" >Remover</button>
                                </div>`)
        })  
        console.log(itemsFiltrados)
        console.log("hola")
    }

function ingreso(e){
    e.preventDefault();
    let arrayReservas = JSON.parse(localStorage.getItem("agenda"))|| [];
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    console.log(arrayReservas)  
    if((usuario == "admin") && (password == "1234")){
            arrayReservas.map((p)=>{
                $("#listReservasAdm").append (`<div id="listAdm">
                                    <p>Reserva a nombre de: ${p.nombre},
                                    ${p.adultos} adultos,
                                    ${p.niños} niños, 
                                    (${p.telefono})telefono de contacto,
                                    fecha  ${p.fecha}, num de id: ${p.id}</p> <button  onclick="removeItem(${p.id})" class="btnDelete" >Remover</button>
                                    </div>`)
    }) 


    formLogin.reset();
    }
}


