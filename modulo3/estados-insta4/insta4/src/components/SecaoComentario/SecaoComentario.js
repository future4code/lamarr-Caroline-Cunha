import React from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
		display: flex;
		justify-content: center;
		padding: 5px;
`
const InputComentario =style.input`
		width: 100%;
		margin-right: 5px;
`

export function SecaoComentario(props) {

	return (
		<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={props.valor}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}