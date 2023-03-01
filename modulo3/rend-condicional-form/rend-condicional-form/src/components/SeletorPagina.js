import React, {useState} from "react";
import { Etapa1 } from "./Etapa1";
import { Etapa2 } from "./Etapa2";
import { Etapa3 } from "./Etapa3";
import { EtapaFinal } from "./EtapaFinal";

// export function SeletorPagina () {

//     const [trocaState, setTrocaState] = useState (3);
            
//             function RenderizaEtapa () {
//                 setTrocaState(1)
//             }

//                     switch (trocaState) {
//                      case 1: 
//                         return <Etapa1 condRenderiza={RenderizaEtapa}/>
                       
//                     case 2: 
//                         return <Etapa2 condRenderiza={RenderizaEtapa}/>
                       
//                     case 3: 
//                         return <Etapa3 condRenderiza={RenderizaEtapa}/>
                       
//                     case 4: 
//                         return <EtapaFinal condRenderiza={RenderizaEtapa}/>
                    
//                     default: 
//                         return <Etapa1 condRenderiza={RenderizaEtapa}/>
                       
                    
//     }


            
// }




// Exemplo 1 - if/else

// export function SeletorPagina () {

//     const [trocaState, setTrocaState] = useState (false)
//     if (trocaState) {
//         return <h1>Valor verdadeiro</h1>

//     }else{
//         return <h1>Valor falso</h1>
//     }
// }



// exemplo switch case
// const [trocaState, setTrocaState] = useState (2);

// switch (trocaState) {
//     case 1: 
//         return <h1>Adicionar valor</h1>
//         break; 
//     case 2: 
//         return <h1>Alterar valor</h1>
//         break;
//     case 3: 
//         return <h1>Remover valor</h1>
//         break;
//     case 4: 
//         return <h1>Consultar valor</h1>
//         break;
//     default: 
//         return <h1>Escolha uma opção válida</h1>
//         break;
// }





