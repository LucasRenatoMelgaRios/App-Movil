import { BiSolidOffer } from "react-icons/bi";
import { PiAirplaneTakeoffBold } from "react-icons/pi";
import { FaBoxesPacking } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { ImFire } from "react-icons/im";


import styled from "styled-components"


const Barra = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #009e94;
    position: fixed;
    bottom: 40px;
`;

const IconoPromociones = styled(BiSolidOffer)`
    color: #ffffff;

`;

const IconoDestinos = styled(PiAirplaneTakeoffBold)`
    color: #ffffff;   
     color:#0d5451; 

`;

const IconoPaquetesVacacionales = styled(FaBoxesPacking)`
    color: #ffffff;

`;

const IconoReseñas = styled(IoNewspaperOutline)`
    color: #ffffff;

`;

const IconoFuego = styled(ImFire)`
    color: #ffffff;
`;

const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Texto = styled.p`
    color: #ffff;
    font-size: 0.6rem;
`;

export const BarraNav = () => {
    return (
      <Barra>
        <Contenedor>
        <IconoPromociones size={20} /> {/* Icono de retroceder */}
        <Texto >Promociones</Texto>
        </Contenedor>

        <Contenedor >
        <IconoDestinos size={20} /> {/* Icono de retroceder */}
        <Texto style={{color:"#0d5451"}}>Destinos</Texto>
        </Contenedor>
        <Contenedor>
        <IconoPaquetesVacacionales size={20} /> {/* Icono de retroceder */}
        <Texto>Paquetes</Texto>
        </Contenedor>
        <Contenedor>
        <IconoReseñas size={20} /> {/* Icono de retroceder */}
        <Texto>Reseñas</Texto>
        </Contenedor>
        <Contenedor>
        <IconoFuego size={20} /> {/* Icono de retroceder */}
        <Texto>Especiales</Texto>
        </Contenedor>
      </Barra>
    );
  };