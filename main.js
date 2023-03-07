function main() {
    const tabla = [
        {tradicional: "90-100", range: "12-14", letter: "A", rating: "4", mensaje:"Excelente"},
        {tradicional: "80-89", range: "9-11", letter: "B", rating: "3", mensaje:"Casi excelente"},
        {tradicional: "70-79", range: "6-8", letter: "C", rating: "2", mensaje:"Sobresaliente"},
        {tradicional: "60-69", range: "3-5", letter: "D", rating: "1", mensaje:"Aceptable"},
        {tradicional: "<60", range: "1-2", letter: "E", rating: "0", mensaje:"Insuficiente"},
        {tradicional: "0", range: "0", letter: "Z", rating: "0", mensaje:"No aplica"}
    ];

    console.table(tabla)


    console.table(tabla);
    tipoDeNota = prompt("Selcciona el formato (Tradicional: 1 // range: 2 // sbg: 3)");

    if (tipoDeNota === "1"){
        nota = prompt("Ingrese su nota en formato tradicional: ");
        tradicional()
    }
    else if (tipoDeNota === "2"){
        nota = prompt("Ingrese su nota en formato range; ");
        range()
    }
    else if (tipoDeNota === "3"){
        nota = prompt("Ingrese su nota en formato sbg: ");
        sbg()
    }
    else {
        alert("Formato incorrecto, presiona ENTER para iniciar de nuevo")
        main()}


    function tradicional (){
        if (nota >= 90 && nota <= 100){
        alert(`Tu calificacion es ${tabla[0].letter} y tu promedio es ${tabla[0].mensaje}`);
        }
        else if (nota >= 80 && nota < 90){
        alert(`Tu calificacion es ${tabla[1].letter} y tu promedio es ${tabla[1].mensaje}`);
        }
        else if (nota >= 70 && nota < 80){
        alert(`Tu calificacion es ${tabla[2].letter} y tu promedio es ${tabla[2].mensaje}`);
        }
        else if (nota >= 60 && nota < 70){
        alert(`Tu calificacion es ${tabla[3].letter} y tu promedio es ${tabla[3].mensaje}`);
        }
        else if (nota < 60  && nota != 0){
        alert(`Tu calificacion es ${tabla[4].letter} y tu promedio es ${tabla[4].mensaje}`);
        }
        else if (nota == 0){
        alert(`Tu calificacion es ${tabla[5].letter} y tu promedio es ${tabla[5].mensaje}`);
        }
        else {
            alert("Ingresa un NUMERO entre 0 hasta 100, presiona ENTER para inciar de nuevo")
            main()}
    }

    function range(){
        if (nota >= 12 && nota <= 14){
        alert(`Tu calificacion es ${tabla[0].letter} y tu promedio es ${tabla[0].mensaje}`);
        }
        else if (nota >= 9 && nota < 12){
        alert(`Tu calificacion es ${tabla[1].letter} y tu promedio es ${tabla[1].mensaje}`);
        }
        else if (nota >= 6 && nota < 9){
        alert(`Tu calificacion es ${tabla[2].letter} y tu promedio es ${tabla[2].mensaje}`);
        }
        else if (nota >= 3 && nota < 6){
        alert(`Tu calificacion es ${tabla[3].letter} y tu promedio es ${tabla[3].mensaje}`);
        }
        else if (nota <= 1 && nota < 3){
        alert(`Tu calificacion es ${tabla[4].letter} y tu promedio es ${tabla[4].mensaje}`);
        }
        else if (nota == 0){
        alert(`Tu calificacion es ${tabla[5].letter} y tu promedio es ${tabla[5].mensaje}`);
        }
        else {
            alert("Ingresa un NUMERO entre 0 hasta 14, presiona ENTER para inciar de nuevo")
            main()}
    }

    function sbg (){
        if (nota === "4"){
        alert(`Tu calificacion es ${tabla[0].letter} y tu promedio es ${tabla[0].mensaje}`);
        }
        else if (nota === "3"){
        alert(`Tu calificacion es ${tabla[1].letter} y tu promedio es ${tabla[1].mensaje}`);
        }
        else if (nota === "2"){
        alert(`Tu calificacion es ${tabla[2].letter} y tu promedio es ${tabla[2].mensaje}`);
        }
        else if (nota === "1"){
        alert(`Tu calificacion es ${tabla[3].letter} y tu promedio es ${tabla[3].mensaje}`);
        }
        else if (nota === "0"){
        alert(`Tu calificacion es ${tabla[5].letter} y tu promedio es ${tabla[5].mensaje}`);
        }
        else {
            alert("Ingresa un NUMERO entre 0 hasta 4, presiona ENTER para inciar de nuevo")
            main()}
    }
}

main()