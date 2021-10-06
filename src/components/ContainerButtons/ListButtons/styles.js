import styled from "styled-components";

import theme from "../../../global/theme";

const { colors, fonts } = theme;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 180px;
`;

export { Container };
