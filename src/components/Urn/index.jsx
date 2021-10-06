// importando componentes de estilos
import { UrnContainer, UrnStyles, ScreenUrn } from "./styles";


// importando componentes de botoes
import ContainerButtons from "../ContainerButtons";

function Urn() {
  return (
    <>
      <UrnContainer>
        <UrnStyles>
          <ScreenUrn>
            <h1>urna</h1>
          </ScreenUrn>
          <ContainerButtons/>
        </UrnStyles>
      </UrnContainer>
    </>
  );
}

export default Urn;
