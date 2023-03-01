import React, {useState} from 'react'
import './style.css'
import styled from 'styled-components';

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'


const Container = styled.div`
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px
`

const Identificacao = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px
`

const Footer = styled.footer`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between
`
const ImgUser = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%}
`

const ImgPhoto = styled.img`
  width: 100%;
`


function Post(props){
  
  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [coment, setComent]=useState("")

  const onClickCurtida = () => {

    setCurtido(!curtido)
    console.log('Curtiu!')

    if (!curtido){
      setnumeroCurtidas(numeroCurtidas+1)
      } else {
        setnumeroCurtidas(numeroCurtidas-1)
      }
   
  }
  
  const onClickComentario = () => {
    setComentando(!comentando)
    
    console.log(comentando)
    
  }
  
  // if(comentando) {
  //   componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
  // }

  const aoEnviarComentario = () => {
    setComentando(false)
    if (coment!=="") {
    setNumeroComentarios(numeroComentarios + 1)
  }
  setComentando("")
  }

  const handleInputComent=(e)=>{
    setComent(e.targe.value)

    console.log(coment)
  }

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
      
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} onChangComentario={handleInputComent} valor={coment} />
    }

  return(
    <Container>
      <Identificacao>
        <ImgUser src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </Identificacao>

      <ImgPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <Footer>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </Footer>
      {componenteComentario}
    </Container>
  )
}


export default Post