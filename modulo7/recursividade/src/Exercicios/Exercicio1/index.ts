
const imprimeN = (n: number) => {
   if (n >= 0) {
       imprimeN(n - 1);
       console.log(n);
   }
};
imprimeN(4);
imprimeN(6);

const imprimeNDec = (n:number) => {
   if (n >= 0) {
       console.log(n)
       imprimeNDec(n - 1);
       
   }
};

imprimeNDec(3)
