    const covertButton = document.querySelector(".convert-button")
    const currencySelect = document.querySelector(".currency-select")

    function convertValue(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToCovert = document.querySelector(".currency-value-to-convert") //valor em real
    const CurrencyValueConverted = document.querySelector(".currency-value") // Outras moedas
        console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2
    const  audToday = 4.1
    const  cadToday = 8.1

    
    console.log(cadToday)

    if (currencySelect.value == "cad") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("es-CA",{
            style: "currency",
            currency: "CAD",
        }).format(inputCurrencyValue / cadToday )
    }

    if(currencySelect.value == "aud"){
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU",{
            style:"currency",
            currency: "AUD",
        }).format(inputCurrencyValue / audToday)
    }

    if(currencySelect.value == "dolar"){
    //Se o select estiver selecionado o valor de dolar, entre aqui (if)
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD",
    }).format(inputCurrencyValue / dolarToday)

    }

    if(currencySelect.value == "euro"){
     //Se o select estiver selecionado o valor de Euro, entre aqui (if)
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    
    }


    CurrencyValueToCovert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)

    }
    
    function changeCurrency(){
        const currencyName = document.getElementById("currency-name")
        const currencyImage = document.querySelector(".currency-img")



        if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
        }

        if( currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/euro3.png"
        }

        if (currencySelect.value == "aud") {
            currencyName.innerHTML = "Australia"
            currencyImage.src = "./assets/Autralia.ico"
        }

        if (currencySelect.value == "cad") {
            currencyName.innerHTML = "Canada"
            currencyImage.src = "./assets/canada.ico"
        }
        convertValue()
    }
    


    currencySelect.addEventListener("change", changeCurrency)
    covertButton.addEventListener("click", convertValue)