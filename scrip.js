function calcular(event){
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result");

    let alcoolSpan = document.getElementById("alcool-result");
    let gasolinaSpan = document.getElementById("gasolina-result");

    

    /* Calculo: alcool/ gasolina
    e se o resultado for menor que 0.7 compensa usar alcool.
    */

    let calculo = (alcoolInput / gasolinaInput);
    if (calculo<0.7){
        //Aqui conpensa usar alcool
        textResult.innerHTML = "Compensa usar Alcool";

    }else{
        // compensa usar gasolina
        textResult.innerHTML ="Compensa usar Gasolina";
    }

    alcoolSpan.innerHTML = "Alcool R$ " + alcoolInput;
    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;

    contentResult.classList.remove("hide")

}