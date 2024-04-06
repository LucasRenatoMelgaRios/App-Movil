import {BarraNav} from "./BarraNav"
import Fondo from "../img/machu.jpg"
import styled from "styled-components";
import { BarraHora } from "../BarraHora";
import { Header } from "./Header";
import { Home } from "../Home";
import { InicioSesion } from "./InicioSesion";
import { Promociones } from "./Promociones";

const FondoContainer = styled.div`
    position: absolute;
    width: 100%;
    z-index: 0;
    top:80px;
    height: 800px;
    object-fit: cover;
    overflow: hidden;
    img{
        height: 100%;
    }   
`;

export const HomeApp = () =>{
    return(
        <>

        <Header/>
        {/* <FondoContainer>
        <img src={Fondo} alt="" />
        </FondoContainer> */}
        {/* <InicioSesion/> */}
         <Promociones/> 
        <BarraNav/>
        <BarraHora/>
        <Home/>
        </>
    )
}