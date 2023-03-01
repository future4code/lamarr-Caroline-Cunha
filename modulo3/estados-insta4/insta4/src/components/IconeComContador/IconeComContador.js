import React from 'react'
import './style.css'
import styled from 'styled-components'


const ContainerIcone = styled.div`
	display: flex;
`
const ImagemIcone = styled.img`
	argin-right: 5px;
`

export function IconeComContador(props) {
	return <ContainerIcone>
		<ImagemIcone alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</ContainerIcone>
}
