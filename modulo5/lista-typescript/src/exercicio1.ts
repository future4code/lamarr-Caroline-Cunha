// Exercício 1

const user1=(name:string, birthDate:string):string=>{
    const[day, month, year]=birthDate.split("/");

    const printPhrase=`Olá, me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}`;

    return printPhrase;
};

console.log("ex.1", user1("Yoda", "00/00/0000"))