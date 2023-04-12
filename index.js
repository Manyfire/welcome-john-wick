window.onload=inicio ;


function inicio(){
  document.getElementById('boton1').onclick = evaluar ;
}

function evaluar(){
  let nombre = document.getElementById('nombre').value.toLowerCase() ;
  let year = Number(document.getElementById('edad').value) ;

  if(nombre == 'john wick' && year == 2023){
    document.getElementById('caja1').style.display = 'none';
    document.getElementById('caja2').style.display = 'flex';
    
  }
  if(nombre == 'john wick' && year == 2023){
    document.getElementById('information').style.display = 'flex';
    document.getElementById('information').innerHTML = 'Welcome Home John Wick! and Keanu Reeves!';
  }
  
  else {
    document.getElementById('information').style.display="block";

    if(nombre != 'john wick') {
    document.getElementById('information').innerHTML =`${nombre} ! You entered the wrong name!` ;
    document.getElementById('nombre').value = " ";
    document.getElementById('nombre').focus();//le cursor en la position del input.
  }
  if(year != 2023) {
    document.getElementById('information').innerHTML =' The year is not correct..';
    document.getElementById('edad').value = " " ;
    document.getElementById('edad').focus();
  }

  }

}