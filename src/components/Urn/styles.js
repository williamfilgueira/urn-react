import styled from "styled-components";
import theme from "../../global/theme";

// destruction no theme
const { colors, fonts } = theme;

// componente container urna
const UrnContainer = styled.div`
  flex: 1 1 700px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  font-family: ${fonts.text};
  width: 90%;
  height: 100%;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;
// componentes de estilo da urna
const UrnStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${colors.silver};
  padding: 30px;
  border-radius: 2px;
`;

// componente tela da urna
const ScreenUrn = styled.div`
  flex: 1 1 auto;
  width: 20rem;
  height: 10rem;
  background: linear-gradient(
    to rigth,
    ${colors.silverScreen1},
    ${colors.silverScreen2}
  );
  border: 1px solid ${colors.silverBorder};
  border-radius: 3px;
  display: flex;
`;

// exportando componentes
export { UrnContainer, UrnStyles, ScreenUrn };
