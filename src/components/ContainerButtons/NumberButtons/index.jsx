import { Container } from "./styles";

function NumbersButtons(props) {
  return (
    <Container>
      <div>{props.number}</div>
    </Container>
  );
}

export default NumbersButtons;
