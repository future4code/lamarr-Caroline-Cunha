
 

// // // let fahrenheit = (celsius * 1.8) + 32

// // // console.log(`${celsius} graus celsius é igual a ${fahrenheit} graus fahrenheit.`)


// // let kelvin = celsius + 273

// // console.log(`${celsius} graus celsius é igual a ${kelvin} kelvin.`)


// const celsius = prompt ("Informe um valor em celsius")

// const informaTemperatura = (letra) => {
//     console.log (letra)
// }

// let fahrenheit = (celsius * 1.8) + 32

// let kelvin = celsius + 273

const converteTemperatura = (celsius,letra) => {
    
    let final;
    let valorCelsius=0;
    
    letra==="F" ? valorCelsius=Number(celsius)*1.8+32:
    letra==="K" ? valorCelsius=Number(celsius)+273:{};
    if (letra==="F" && typeof celsius !=="strting") {
        return final=`${celsius} graus Celsius é equivalente a ${valorCelsius} graus fahrenheit.`
    
    }else if (letra==="K") {
        return final=`${celsius} graus Celsius é equivalente a ${valorCelsius} kelvin.`

    }else{
        return final=`Erro. Parâmetro inválido`
    }
   
  
}

console.log(converteTemperatura(50, "K"))
console.log(converteTemperatura(200, "F"))
console.log(converteTemperatura(100, "K"))
console.log(converteTemperatura(32, "F"))