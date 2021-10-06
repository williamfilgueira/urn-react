import { useEffect } from "react";

import { Container } from "./styles";

import NumberButtons from "../NumberButtons";

import OptionsButtonList from "../OptionButtonList";

function ListButtons() {
  // criando array com 10 posições e passando por props os valores nos botoes
  const ListButtons = Array(10)
    .fill("")
    .map((_, index, currentArray) => {
      const isLastNumber = currentArray.length - 1 === index;
      if (isLastNumber) {
        return 0;
      }
      return index + 1;
    });

  useEffect(() => {}, [ListButtons]);

  // criando botoes branco, corrige e confirmar
  const OptionButtons = Array(3)
    .fill("")
    .map((_, index, currentArray) => {
      const lastNumber = currentArray.length === index;
      if(lastNumber){
        return ;
      }
      return index;
    });

  useEffect(() => {}, [OptionButtons]);

  console.log(OptionButtons);
  return (
    <Container>
      {ListButtons.map((currentButton) => {
        return <NumberButtons number={currentButton} key={currentButton} />;
      })}
      <OptionsButtonList />
    </Container>
  );
}

export default ListButtons;
