import { GrHomeOption } from "react-icons/gr";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import styled from "styled-components"


const Barra = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 0;
    background-color: #5e5e5e;
    padding: 10px;
`;

const IconoAtras = styled(IoChevronBackOutline)`
    color: #afafaf;
`;

const IconoHome = styled(FaRegCircle)`
    color: #afafaf;
`;

const IconoMinimizar = styled(GrHomeOption)`
    color: #afafaf;

`;

export const Home = () => {
    return (
      <Barra>
        <IconoAtras size={20} /> {/* Icono de retroceder */}
        <IconoHome /> {/* Icono de ir a home */}
        <IconoMinimizar /> {/* Icono de ir a home */}
      </Barra>
    );
  };
  