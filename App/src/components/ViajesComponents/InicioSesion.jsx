import styled from "styled-components"
import { GiCondorEmblem } from "react-icons/gi";

const MainContainer = styled.div`
    z-index: 200;
    position: absolute; /* Posicionamiento absoluto */
    top: 50%; /* Se posiciona en la mitad vertical */
    left: 50%; /* Se posiciona en la mitad horizontal */
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    border: 3px solid #058079;
    padding: 20px;
`;

const Logo = styled(GiCondorEmblem)`
    color: #ffffff;
    background-color: #058079;
    border-radius: 90px;
`;
const SimpleLabel = styled.label`
  font-family: "Pacifico", cursive;


`;

const SimpleInput = styled.input`
border: 1px solid #058079;
border-radius: 20px;

`;

const SimpleButton = styled.button`
background-color: #04c8b7;
padding: 8px;
border-radius: 10px;
border: 0;
color: #ffff;

`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InicioSesion = () =>{
    return(
        <MainContainer>
            <div style={{display:"flex", alignItems:"center", gap:"5px"}}>
            <h2>Bienvenido!</h2>
            <Logo size={20}/>
            </div>
            <ContentContainer>
                <SimpleLabel>Usuario</SimpleLabel>
                <SimpleInput placeholder=""/>
            </ContentContainer>
            <ContentContainer>
                <SimpleLabel>Contraseña</SimpleLabel>
                <SimpleInput type="password"/>
            </ContentContainer>
            <div style={{
                marginTop: "20px"
            }} >
            <SimpleButton>Iniciar sesión</SimpleButton>
            </div>
        </MainContainer>
    )
}