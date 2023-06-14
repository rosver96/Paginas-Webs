//********************************************************    gestion de clientes     ********************************************************* */

// se declara el formulario y la tabla del html//
const formularioGestionC = document.getElementById('formularioGestionC');
const padreTabla = document.getElementById('TablaGestionC');


// se recibe información de los inputs del html//
const identificacion = document.getElementById('identificacion');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const fechanacimiento = document.getElementById('fechanacimiento');
const nacionalidad = document.getElementById('nacionalidad');

// array clientes//
const clientesGestion = [];

// Función para cargar datos a la tabla en el tbody//
function listarClientes(clientesGestion) {
  padreTabla.innerHTML = '';
  clientesGestion.forEach((e, index) => {
    let hijo = document.createElement('tr');
    hijo.classList.add('table-secondary', 'tabla');

    let clienteid = document.createElement('td');
    clienteid.textContent = `${e.idC}`;
    hijo.appendChild(clienteid);

    let clientenombre = document.createElement('td');
    clientenombre.textContent = `${e.nombreC}`;
    hijo.appendChild(clientenombre);

    let clienteapellido = document.createElement('td');
    clienteapellido.textContent = `${e.apellidoC}`;
    hijo.appendChild(clienteapellido);

    let clientetelefono = document.createElement('td');
    clientetelefono.textContent = `${e.telefonoC}`;
    hijo.appendChild(clientetelefono);

    let clientecorreo = document.createElement('td');
    clientecorreo.textContent = `${e.correoC}`;
    hijo.appendChild(clientecorreo);

    let clientefechanacimiento = document.createElement('td');
    clientefechanacimiento.textContent = `${e.fechanacimientoC}`;
    hijo.appendChild(clientefechanacimiento);

    let clientenacionalidad = document.createElement('td');
    clientenacionalidad.textContent = `${e.nacionalidadC}`;
    hijo.appendChild(clientenacionalidad);

    // se crea el botón eliminar y editar//
    let botonEliminar = document.createElement('td');
    eliminarBoton = document.createElement('button');
    botonEditar = document.createElement('button');
    botonEditar.classList.add('btn', 'btn-primary');
    eliminarBoton.classList.add('btn', 'btn-danger');
    eliminarBoton.textContent = 'eliminar';
    botonEditar.textContent ='editar';
    botonEditar.dataset.index = index; 
    botonEliminar.appendChild(botonEditar);
    botonEliminar.appendChild(eliminarBoton);
    hijo.appendChild(botonEliminar);

    // el padre que es el tbody se añade el hijo//
    padreTabla.appendChild(hijo);

    // Llamado al botón eliminar//
    eliminarBoton.addEventListener('click', function() {
      eliminarCliente(index);
    });

    // Llamado al botón editar//
    botonEditar.addEventListener('click', function(){
      editarCliente(index);
    });
    crearSelectorP();  // se llama a la funcion crear para la parte de tiquetes//
  });
}

// Función para cargar los datos del cliente en los campos del formulario o actulizar todos los datos//
function editarCliente(index) {
  const cliente = clientesGestion[index];
  identificacion.value = cliente.idC;
  nombre.value = cliente.nombreC;
  apellido.value = cliente.apellidoC;
  telefono.value = cliente.telefonoC;
  correo.value = cliente.correoC;
  fechanacimiento.value = cliente.fechanacimientoC;
  nacionalidad.value = cliente.nacionalidadC;

  // Modificar el evento submit del formulario para actualizar los datos  formularioGestionC//
  formularioGestionC.addEventListener('submit', function (event) {
    event.preventDefault();
    cliente.idC = identificacion.value;
    cliente.nombreC = nombre.value;
    cliente.apellidoC = apellido.value;
    cliente.telefonoC = telefono.value;
    cliente.correoC = correo.value;
    cliente.fechanacimientoC = fechanacimiento.value;
    cliente.nacionalidadC = nacionalidad.value;

    listarClientes(clientesGestion);
    formularioGestionC.reset(); //resetear el formulario//
   

    // Volver a asignar el evento submit para agregar cliente
    // formularioGestionC.removeEventListener('submit', actualizarCliente());
    formularioGestionC.addEventListener('submit', agregarCliente());
  
  });
}
// funcion para eliminar clientes //
function eliminarCliente(eliminar){
  clientesGestion.splice(eliminar, 1)
  listarClientes(clientesGestion);
};

// evento para agregar al formulario//
formularioGestionC.addEventListener('submit', agregarCliente);

// funcion para crear clave y valor del diccionario //
function agregarCliente(event) {
  event.preventDefault();
  const nuevoCliente = {};
  nuevoCliente.idC = identificacion.value;
  nuevoCliente.nombreC = nombre.value;
  nuevoCliente.apellidoC = apellido.value;
  nuevoCliente.telefonoC = telefono.value;
  nuevoCliente.correoC = correo.value;
  nuevoCliente.fechanacimientoC = fechanacimiento.value;
  nuevoCliente.nacionalidadC = nacionalidad.value;
  nuevoCliente.puntosC = 0;

  clientesGestion.push(nuevoCliente);
  listarClientes(clientesGestion);
  formularioGestionC.reset();
}

// ******************************************************** **   gestion de rutas  **************************************************************//

// se declara el formulario y la tabla del html//
const formularioRutas = document.getElementById('formularioRutas');
const tablaRutas = document.getElementById('tablaRutas');


// se recibe información de los inputs del html//
const nombreRuta = document.getElementById('n_Ruta');
const valorTiquete = document.getElementById('v_Tiquete')
const ciudadOrigen = document.getElementById('c_Origen');
const ciudadDestino = document.getElementById('c_Destino');
const puntos = document.getElementById('puntos');

// array o lista de las rutas y el contador//
const rutasGestion = [];
var contador = 1;

// se previene el envio del formulario y se crea la clave y valor (se guardan en el array)//
formularioRutas.addEventListener('submit', function(event) {
  event.preventDefault();
  let nuevaRuta = {}; //diccionario nuevo//
  nuevaRuta.id = contador;
  nuevaRuta.nruta = nombreRuta.value;
  nuevaRuta.vtiquete = valorTiquete.value;
  nuevaRuta.corigen = ciudadOrigen.value;
  nuevaRuta.cdestino = ciudadDestino.value;
  nuevaRuta.pts = puntos.value;
  contador++
  rutasGestion.push(nuevaRuta);
  listarRutas(rutasGestion);
  formularioRutas.reset();
  crearSelectorR();
});

//funcion de crear las lista rutas//
function listarRutas(rutas){
    tablaRutas.innerHTML ='';

    rutasGestion.forEach ((e, index) => {
      let hijoR = document.createElement('tr');
      hijoR.classList.add('table-secondary', 'tabla');

      let iden = document.createElement('td');
      iden.textContent = `${e.id}`;
      hijoR.appendChild(iden);

      let nR = document.createElement('td');
      nR.textContent = `${e.nruta}`;
      hijoR.appendChild(nR);

      let vT = document.createElement('td');
      vT.textContent = `${e.vtiquete}`;
      hijoR.appendChild(vT);

      let cO = document.createElement('td');
      cO.textContent = `${e.corigen}`;
      hijoR.appendChild(cO);

      let cD = document.createElement('td');
      cD.textContent = `${e.cdestino}`;
      hijoR.appendChild(cD);

      let pT = document.createElement('td');
      pT.textContent = `${e.pts}`;
      hijoR.appendChild(pT);

      tablaRutas.appendChild(hijoR);

      // se crea el botón eliminar //
      let btnEliminar = document.createElement('td');
      eliminarBtn = document.createElement('button');
      eliminarBtn.classList.add('btn', 'btn-danger');
      eliminarBtn.textContent = 'eliminar'
      btnEliminar.appendChild(eliminarBtn);
      hijoR.appendChild(btnEliminar);


      // evento llamar boton eliminar rutas(btnEliminar)//
      btnEliminar.addEventListener('click', function() {
        eliminarRuta(index);
      });
  });

}
// funcion para eliminar clientes //
    function eliminarRuta(index){
      rutasGestion.splice(index, 1)
      listarRutas(rutasGestion);
};

//*********************************************************** Compra de tiquetes ***********************************************************************//

const formularioTiquetes = document.getElementById('formularioTiquetes');
const selectPasajero = document.getElementById('selectPasajero');
const selectRuta = document.getElementById('selectRuta');


formularioTiquetes.addEventListener('submit', function(event) {
  event.preventDefault()
  let cedula = '';
  let valorRuta = 0;
  let puntos = 0;

  for(let ruta of rutasGestion){
    if(ruta.nruta == selectRuta.value){
      valorRuta = parseFloat(ruta.vtiquete);
      puntos = parseFloat(ruta.pts);
    }
  }

  for(let cliente of clientesGestion){
    if(cliente.nombreC == selectPasajero.value){
      cedula = cliente.idC;
      cliente.puntosC += puntos;
    }
  }
  alert (`        *Resumen de la compra*

        identificacion:  ${cedula}
        nombre Pasajero: ${selectPasajero.value}
        nombre Ruta:     ${selectRuta.value}
        valor Total:     ${valorRuta * 1.20}
        puntos ganados:  ${puntos}`)
        totalPuntos();  // se llama la funcion de puntos (fidelizacion)//
});

function crearSelectorP(){
  selectPasajero.innerHTML = '<option selected>seleccionar pasajero</option>';

  for(let cliente of clientesGestion){
    if(clientesGestion.length == 0){
      return
    }
    const crearOpcionPasajero = document.createElement('option');
    crearOpcionPasajero.textContent = cliente.nombreC;
    selectPasajero.appendChild(crearOpcionPasajero);

  }
}

function crearSelectorR(){
  selectRuta.innerHTML = ' <option selected>seleccionar ruta</option>';

  for(let newRuta of rutasGestion ){
    if(rutasGestion.length == 0){
      return
    }
    const crearOpcionRuta = document.createElement('option');
    crearOpcionRuta.textContent = newRuta.nruta;
    selectRuta.appendChild(crearOpcionRuta);

  }
}

//*********************************************************** Compra de tiquetes ***********************************************************************//

const TablaFidelizacion = document.getElementById('TablaFidelizacion');


function totalPuntos(){
  TablaFidelizacion.innerHTML = '';   //para que lo tome vacio en el html//
  
  // recorriendo el array de clientesGestion //
  for(cliente of clientesGestion){
    if(cliente.puntosC != 0){
      const filaPuntos = document.createElement('tr')  //se crea la fila o el text row para guardar en la tabla//
      filaPuntos.innerHTML = `<td> ${cliente.nombreC}</td>
                              <td>${cliente.apellidoC}</td>
                              <td>${cliente.puntosC}</td>`
                              TablaFidelizacion.appendChild(filaPuntos); // filaPuntos es el hijo de la tablaFidelizacion//
    }
  
  }
}










// // const formularioTiquetes = document.getElementById('formularioTiquetes')

//  // Lista de clientes registrados
//  var clientes = [
//   { nombre: "Cliente 1", puntos: 1000 },
//   { nombre: "Cliente 2", puntos: 500 },
//   { nombre: "Cliente 3", puntos: 2000 }
// ];

// // Lista de rutas de viaje
// var rutas = [
//   { nombre: "Ruta 1", valor: 100 },
//   { nombre: "Ruta 2", valor: 150 },
//   { nombre: "Ruta 3", valor: 200 }
// ];

// // Función para calcular el impuesto y la tasa aeroportuaria
// function calcularImpuestos(valor) {
//   var iva = valor * 0.16;
//   var tasaAeroportuaria = valor * 0.04;
//   return {
//     valorConImpuestos: valor + iva + tasaAeroportuaria,
//     iva: iva,
//     tasaAeroportuaria: tasaAeroportuaria
//   };
// }

// // Función para realizar la compra de tiquetes
// function realizarCompra() {
//   var clienteIndex = document.getElementById("Registrados").value - 1;
//   var rutaIndex = document.getElementById("nombre_Ruta").value - 1;

//   var cliente = clientes[clienteIndex];
//   var ruta = rutas[rutaIndex];

//   var impuestos = calcularImpuestos(ruta.valor);

//   var valorTotal = impuestos.valorConImpuestos;

//   // Mostrar resumen de la compra
//   document.getElementById("resumen").value =
//     "Cliente: " + cliente.nombre +
//     "\nRuta de viaje: " + ruta.nombre +
//     "\nValor sin impuestos: " + ruta.valor +
//     "\nIVA: " + impuestos.iva +
//     "\nTasa aeroportuaria: " + impuestos.tasaAeroportuaria +
//     "\nValor total: " + valorTotal;

//   // Abonar puntos de fidelización al cliente
//   cliente.puntos += Math.floor(valorTotal / 10);

//   console.log("Puntos de fidelización actualizados: " + cliente.puntos);
// }

