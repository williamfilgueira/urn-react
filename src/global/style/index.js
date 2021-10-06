import { createGlobalStyle } from "styled-components"
import theme from "../theme";

const {colors, fonts} = theme;

// criando componente global de estilos
const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    background: ${colors.white};
    height: 60rem;
    color: ${colors.black};

}

`

export default GlobalStyles;
// exportando o mesmo.