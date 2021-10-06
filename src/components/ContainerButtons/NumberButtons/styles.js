import styled from "styled-components";

import theme from "../../../global/theme";

const { colors, fonts } = theme;

const Container = styled.div`
  flex: 0 0 50px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background: ${colors.black};
  color: ${colors.white};
  border-radius: 2px;
`;

export { Container };
