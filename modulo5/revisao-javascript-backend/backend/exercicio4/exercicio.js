
var listaA = [

    { nome: "Banana"},
    { nome: "Laranja"}
    
]

var listaB = [

    { nome: "Cebola"},
    { nome: "Laranja"}
    
]


var listaC ;

listaC = listaA.concat(listaB)

console.log(listaC);

function removeDuplicata(inArray){
    var arr = inArray.concat()
    for (var i=0; arr.length; ++i) {
        for (var j=i+1; j<arr.length; ++j) {
            if (arr[i]===arr[j]) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}


var arraySemDuplicata = removeDuplicata(listaC);

console.log(arraySemDuplicata)
console.log ("Removendo duplicatas usando removeDuplicata >" + removeDuplicata(listaC) )

