import React from 'react';
import Post from './components/Post/Post';
import './style.css';



function App() {
return(
   
<div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
           />
           <Post
            nomeUsuario={'lia'}
            fotoUsuario={'https://vignette.wikia.nocookie.net/clubpenguin/images/1/16/Yellow_Snorkel.PNG/revision/latest?cb=20130322161821'}
            fotoPost={'http://ecoviagem.com.br/noticias/turismo/turismo-internacional/cinco-atividades-para-aprender-em-uma-viagem-a-aruba-18784/centro-82794.jpg'}
           />
           <Post
            nomeUsuario={'mila'}
            fotoUsuario={'https://apuamarafting.com.br/wp-content/uploads/2018/03/rapel.png'}
            fotoPost={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRohChuhjVvudXlkG0dHf1steXY-bX_J7mZA&usqp=CAU'}
           />
  </div>
 
)

}


export default App;
