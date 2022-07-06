import React from 'react';
import Post from './components/Post/Post';
import './style.css';
import styled from 'styled-components';



const MainCont = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center

`

function App() {

  const arrayPost = [

    {nomeUsuario:"Paulinha", 
     fotoUsuario:"https://picsum.photos/50/50",
     fotoPost:"https://picsum.photos/200/150",
    },
    {nomeUsuario:"Lia", 
     fotoUsuario:"https://vignette.wikia.nocookie.net/clubpenguin/images/1/16/Yellow_Snorkel.PNG/revision/latest?cb=20130322161821", 
     fotoPost:"http://ecoviagem.com.br/noticias/turismo/turismo-internacional/cinco-atividades-para-aprender-em-uma-viagem-a-aruba-18784/centro-82794.jpg",
    },
    {nomeUsuario:"Mila", 
     fotoUsuario:"https://apuamarafting.com.br/wp-content/uploads/2018/03/rapel.png", 
     fotoPost:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRohChuhjVvudXlkG0dHf1steXY-bX_J7mZA&usqp=CAU",
    }
  ]
  
    const listaPost=arrayPost.map((elemento, index)=>{
   
      return  <Post 
        nomeUsuario={elemento.nomeUsuario} 
        fotoUsuario={elemento.fotoUsuario} 
        fotoPost={elemento.fotoPost}
        
        key={index}
      />
   
  })

  return (
    <MainCont>
      {listaPost}

      {console.log(arrayPost)}

    </MainCont>

  )
}




export default App;
