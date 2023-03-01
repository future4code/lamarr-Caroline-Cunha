import { createGlobalStyle } from 'styled-components';


export const GlobalStyle=createGlobalStyle`
    :root{
        --soft-white: #f2f2f2;
        --ivory: #fffff0; 
        --dark: #383b40;
        --deep-blue: #011640;
        --deep-blue-secondary: #010f2b;
        --orange: #FF4500

    }

    h1 {
       font-family: sans-serif;
       
    }

    h2{
        font-family: 'Courier New';
        color: (--deep-blue);
    }

    p{
        font-family: sans-serif;
        color: (--deep-blue-secondary);
        /* background: white; */
    }

    body{
     background: #f2f2f2;

    }

* {
    margin: 0;
    padding: 0;
    
}
`
