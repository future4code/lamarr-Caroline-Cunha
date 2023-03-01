import React from 'react'
import './style.css'
import styled from 'styled-components'

const ContainerComent = styled.div`
	display: flex;
    justify-content: center;
    padding: 5px
`
const ComentInput = styled.input`
	width: 100%;
    margin-right: 5px
`

export function SecaoComentario(props) {

	
	return (
		<ContainerComent>
			<ComentInput
				placeholder={'Comentário'}
				value={props.valor}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</ContainerComent>
	)
}