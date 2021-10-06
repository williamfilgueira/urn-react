import styled from "styled-components";

// importando theme
import theme from "../../global/theme";

const {colors,fonts} = theme;

const Container = styled.div`
    padding: 10px;
    background-color: ${colors.backgroundNumbers};
    border-radius: 5px;
`;

export { Container };
