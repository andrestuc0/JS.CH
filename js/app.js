function verificarNota() {
    let aprobado = 0;
    let desaprobado = 0;
    let recursa = 0;

    while (true) {
        let nota = parseInt(prompt("Ingresa tu nota"));
        if (nota <= 3) {
            alert("Recursas")
           
        } else if (nota <= 6) {
            alert(
                "Desaprobaste")
            
        } else {
            alert("Felicidades aprobaste!")
           
        }
    }
    
}