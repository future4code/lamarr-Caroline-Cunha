import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background: #011640;
    color: white;
    height: 100px;
    text-align: center;
    font-size: 22px;
    line-height: 100px;
`

function Header () {
    return(
        <HeaderContainer>
            <h1>Astromatch</h1>
    
        </HeaderContainer>
    )

}

export default Header;