
function calculaPrecoTotal(quantidade) {
  if (quantidade <=11 && quantidade>0){
  let precoMaca = 1.30
  let precoTotal =precoMaca * quantidade
  return precoTotal
  
  }else{
   let precoMaca1 = 1.00
   let precoTotal2 = precoMaca1 * quantidade
   return precoTotal2
  }
  } 
