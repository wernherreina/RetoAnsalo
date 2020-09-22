function setLetter(letter) {
    document.getElementById('campoletra').innerHTML = document.getElementById('campoletra').innerHTML + letter;
  }

  function setNumber(number) {
    document.getElementById('camponumero').innerHTML = document.getElementById('camponumero').innerHTML + number;
    
  }

  function BorrarTodo() {
    //document.getElementById('letra').innerHTML = document.getElementById('letra').innerHTML + letter;
    const teclaBorrar = document.getElementById('campoletra')
    const Borrarcamponumero = document.getElementById('camponumero')
    Borrarcamponumero.innerHTML="" 
    teclaBorrar.innerHTML=""

  }

  
  function teclaBorrar() {
    //document.getElementById('letra').innerHTML = document.getElementById('letra').innerHTML + letter;
    const teclaBorrar = document.getElementById('campoletra')
    teclaBorrar.innerHTML=""

  }
 
  function teclaBorrarCampoNumero() {
  const Borrarcamponumero = document.getElementById('camponumero')
  Borrarcamponumero.innerHTML="" 
}

  const comprobar = document.getElementById('comprobar')

const listaDeTareas = []
const listaDeNumeros = []

comprobar.addEventListener('click', (e)=>{
   e.preventDefault() 


       const textLetra = document.getElementById('campoletra').innerHTML
        console.log(textLetra)

        const textNumero = document.getElementById('camponumero').innerHTML
        console.log(textNumero)

        ///////////////////////////////// NUMEROS    ////////////////

        if(listaDeTareas.some(buscaEnletras_ => buscaEnletras_.letras_ === "ABCDEFGHIJ")){
            // alert("las letras están Completas, Seguimos con los Número.");

            const Borrarcamponumero = document.getElementById('camponumero')
            Borrarcamponumero.innerHTML="" 
            swal("Terminaste las Letras!", "Seguimos con los números!", "success");  
            
            switch(textNumero) {
                case "1" :
                    teclaBorrar()
                    console.log('Tiene el 1')
                    const tarea1 ={
                        letras_: "1"
                    }
                    listaDeNumeros.push(tarea1)
                    console.log(listaDeNumeros)
                    swal("Excelente!", "Tienes 1!", "success"); 
                break; 
                case "12":
                    teclaBorrar()
                if(listaDeNumeros.some(buscaEnletras_ => buscaEnletras_.letras_ === "1")){
                    console.log('Tiene el 12')
                    const tarea2 ={
                        letras_: "12"
                    }
                    listaDeNumeros.push(tarea2)
                    console.log(listaDeNumeros)
                    swal("Excelente!", "Tienes 12!", "success");  
                            
                } else{
            
                    alert("Te falta el 1");
            
                }
    
                break;
                case "123":
                    teclaBorrar()
                if(listaDeNumeros.some(buscaEnletras_ => buscaEnletras_.letras_ === "12")){
                    console.log('Tiene el 123')
                    const tarea3 ={
                        letras_: "123"
                    }
                    listaDeNumeros.push(tarea3)
                    console.log(listaDeNumeros)
                    swal("Excelente!", "Tienes 123!", "success");          
                } else{
            
                    alert("Te falta el 2");
            
                }
    
                break;
                case "1234":
                    teclaBorrar()
                if(listaDeNumeros.some(buscaEnletras_ => buscaEnletras_.letras_ === "123")){
                    console.log('Tiene la 1234')  
                    const tarea4 ={
                        letras_: "1234"
                    }
                    listaDeNumeros.push(tarea4)
                    console.log(listaDeNumeros)
                    swal("Excelente!", "Tienes 1234!", "success");            
                } else{
            
                    alert("Te falta el 3");
            
                }
    
                break;
                case "12345":
                    teclaBorrar()
                if(listaDeNumeros.some(buscaEnletras_ => buscaEnletras_.letras_ === "1234")){
                    console.log('Tiene la 12345')
                    const tarea5 ={
                        letras_: "12345"
                    }
                    listaDeNumeros.push(tarea5)
                    console.log(listaDeNumeros)
                    swal("Excelente!", "Tienes 12345!", "success");           
                } else{
            
                    alert("Te falta el 4");
            
                }
    
                break;
                case "123456":
                    teclaBorrar()
                if(listaDeNumeros.some(buscaEnletras_ => buscaEnletras_.letras_ === "12345")){
                    console.log('Tiene la 123456')
                    const tarea6 ={
                        letras_: "123456"
                    }
                    listaDeNumeros.push(tarea6)
                    console.log(listaDeNumeros)
                    swal("Excelente!", "Tienes 123456!", "success");          
                } else{
            
                    alert("Te falta el 5");
            
                }
                break;
                case "1234567":
                    teclaBorrar()
                if(listaDeNumeros.some(buscaEnletras_ => buscaEnletras_.letras_ === "123456")){
                    console.log('Tiene la 1234567')
                    const tarea7 ={
                        letras_: "1234567"
                    }
                    listaDeNumeros.push(tarea7)
                    console.log(listaDeNumeros)
                    swal("Excelente!", "Tienes 1234567!", "success");         
                } else{
            
                    alert("Te falta el 6");
            
                }
                break;
                case "12345678":
                    teclaBorrar()
                if(listaDeNumeros.some(buscaEnletras_ => buscaEnletras_.letras_ === "1234567")){
                    console.log('Tiene la 12345678')
                    const tarea8 ={
                        letras_: "12345678"
                    }
                    listaDeNumeros.push(tarea8)
                    console.log(listaDeNumeros)
                    swal("Excelente!", "Tienes 12345678!", "success");          
                } else{
            
                    alert("Te falta el 7");
            
                }
                break;
                case "123456789":
                    teclaBorrar()
                if(listaDeNumeros.some(buscaEnletras_ => buscaEnletras_.letras_ === "12345678")){
                    console.log('Tiene la 123456789')
                    const tarea9 ={
                        letras_: "123456789"
                    }
                    listaDeNumeros.push(tarea9)
                    console.log(listaDeNumeros)
                    swal("Excelente!", "Tienes 123456789!", "success");         
                } else{
            
                    alert("Te falta el 8");
            
                }
                break;
                case "1234567890":
                    teclaBorrar()
                if(listaDeNumeros.some(buscaEnletras_ => buscaEnletras_.letras_ === "123456789")){
                    console.log('Tiene la 1234567890')
                    const tarea10 ={
                        letras_: "1234567890"
                    }
                    listaDeNumeros.push(tarea10)
                    console.log(listaDeNumeros)
                    swal("FELICITACIONES ANSALO!", "POR FIN ACABASTE!", "success");         
                } else{
            
                    alert("Te faltam números");
            
                }
    
                break;
    
                default:
                console.log("Fuera del deafult")
                swal("Error!", "vuelve a jugar!", "error");  
            }

        } else{

                                
        switch(textLetra) {
          case "A" :
            teclaBorrarCampoNumero()
                console.log('Tiene la A')
                const tarea1 ={
                    letras_: "A"
                }
                listaDeTareas.push(tarea1)
                console.log(listaDeTareas)
                swal("Empezamos!", "Tienes A!", "success"); 
          break; 
          case "AB":
            teclaBorrarCampoNumero()
            if(listaDeTareas.some(buscaEnletras_ => buscaEnletras_.letras_ === "A")){
                console.log('Tiene la AB')
                const tarea2 ={
                    letras_: "AB"
                }
                listaDeTareas.push(tarea2)
                console.log(listaDeTareas)
                swal("Excelente!", "Tienes AB!", "success"); 
          
                        
            } else{
        
                alert("Te falta la A");
        
            }

          break;
          case "ABC":
            teclaBorrarCampoNumero()
            if(listaDeTareas.some(buscaEnletras_ => buscaEnletras_.letras_ === "AB")){
                console.log('Tiene la ABC')
                const tarea3 ={
                    letras_: "ABC"
                }
                listaDeTareas.push(tarea3)
                console.log(listaDeTareas)
                swal("Excelente!", "Tienes ABC!", "success");        
            } else{
        
                alert("Te falta la B");
        
            }

          break;
          case "ABCD":
            teclaBorrarCampoNumero()
            if(listaDeTareas.some(buscaEnletras_ => buscaEnletras_.letras_ === "ABC")){
                console.log('Tiene la ABCD')  
                const tarea4 ={
                    letras_: "ABCD"
                }
                listaDeTareas.push(tarea4)
                console.log(listaDeTareas)
                swal("Excelente!", "Tienes ABCD!", "success");         
            } else{
        
                alert("Te falta la C"); 
        
            }

          break;
          case "ABCDE":
            teclaBorrarCampoNumero()
            if(listaDeTareas.some(buscaEnletras_ => buscaEnletras_.letras_ === "ABCD")){
                console.log('Tiene la ABCDE')
                const tarea5 ={
                    letras_: "ABCDE"
                }
                listaDeTareas.push(tarea5)
                console.log(listaDeTareas)
                swal("Excelente!", "Tienes ABCDE!", "success");          
            } else{
        
                alert("Te falta la D");
        
            }

          break;
          case "ABCDEF":
            teclaBorrarCampoNumero()
            if(listaDeTareas.some(buscaEnletras_ => buscaEnletras_.letras_ === "ABCDE")){
                console.log('Tiene la ABCDEF')
                const tarea6 ={
                    letras_: "ABCDEF"
                }
                listaDeTareas.push(tarea6)
                console.log(listaDeTareas)
                swal("Excelente!", "Tienes ABCDEF!", "success");         
            } else{
        
                alert("Te falta la E");
        
            }
          break;
          case "ABCDEFG":
            teclaBorrarCampoNumero()
            if(listaDeTareas.some(buscaEnletras_ => buscaEnletras_.letras_ === "ABCDEF")){
                console.log('Tiene la ABCDEFG')
                const tarea7 ={
                    letras_: "ABCDEFG"
                }
                listaDeTareas.push(tarea7)
                console.log(listaDeTareas)
                swal("Excelente!", "Tienes ABCDEFG!", "success");        
            } else{
        
                alert("Te falta la F");
        
            }
          break;
          case "ABCDEFGH":
            teclaBorrarCampoNumero()
            if(listaDeTareas.some(buscaEnletras_ => buscaEnletras_.letras_ === "ABCDEFG")){
                console.log('Tiene la ABCDEFGH')
                const tarea8 ={
                    letras_: "ABCDEFGH"
                }
                listaDeTareas.push(tarea8)
                console.log(listaDeTareas)
                swal("Excelente!", "Tienes ABCDEFGH!", "success");       
            } else{
        
                alert("Te falta la G");
        
            }
          break;
          case "ABCDEFGHI":
            teclaBorrarCampoNumero()
            if(listaDeTareas.some(buscaEnletras_ => buscaEnletras_.letras_ === "ABCDEFGH")){
                console.log('Tiene la ABCDEFGHI')
                const tarea9 ={
                    letras_: "ABCDEFGHI"
                }
                listaDeTareas.push(tarea9)
                console.log(listaDeTareas)
                swal("Excelente!", "Tienes ABCDEFGHI!", "success");        
            } else{
        
                alert("Te falta la H");
        
            }
          break;
          case "ABCDEFGHIJ":
            teclaBorrarCampoNumero()
            if(listaDeTareas.some(buscaEnletras_ => buscaEnletras_.letras_ === "ABCDEFGHI")){
                    console.log('Tiene la ABCDEFGHJ')
                    const tarea10 ={
                        letras_: "ABCDEFGHIJ"
                    }
                    listaDeTareas.push(tarea10)
                    console.log(listaDeTareas)
                    swal("Primera Etapa Completada!", "Seguimos!", "success");  
                    teclaBorrar()
                } else{
        
                    alert("Te falta la I");
            
                }
           break;


           default:
            swal("Error!", "vuelve a jugar!", "error");  
            console.log("Fuera del deafult de sw letras")
            
        }

    }  

    localStorage.setItem('listaDeTareas', JSON.stringify(listaDeTareas));

}
 )
 



 //Funciona OK hasta las 22-09-20 12:18

         // function para fijar el  theme dado
         function setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
        }

        // function para cambiar a dark theme
        function toggleTheme() {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-light');
            } else if (localStorage.getItem('theme') === 'theme-retro')  {
                setTheme('theme-light');
            } else {
                setTheme('theme-dark');
            }
        }
         // function para cambiar a dark theme
        function RetroTheme() {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-retro');
            } else if (localStorage.getItem('theme') === 'theme-light')  {
                setTheme('theme-retro');
            } else {
                setTheme('theme-light');
            }
        }

        // Immediately invoked function to set the theme on initial load
        (function () {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-dark');
            } else {
                setTheme('theme-light');
            }
        })
        ();

