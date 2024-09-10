import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

html{
    scroll-behavior: smooth;
  }

body {
    margin: 0;
    padding: 0;
    font-family: 'helvetica', sans-serif;
    color: #dde2e5;
    
    }
    main {
        display:flex;
        flex-direction: column;
        gap: 2rem;
        box-sizing: content-box;
    }

    a {
    text-decoration: none;
    }

    li {
    list-style: none;
    }



`