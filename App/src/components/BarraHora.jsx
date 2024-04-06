import styled from "styled-components"
import { FaWifi } from "react-icons/fa6";
import { FaSignal } from "react-icons/fa6";
import { IoBatteryHalf } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";


const Barra = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 0;
    padding: 10px;
`;

const Mitad = styled.div`
    width: 40%;
    display: flex;
    gap: 10px;
    justify-content: end;
    align-items: center;
    position: absolute;
    right: 0;
    padding-right: 20px;
`;

const OtraMitad = styled.div`
    width: 40%;
    display: flex;
    gap: 10px;
    justify-content: start;
    align-items: center;
    position: absolute;
    left: 0;
    padding-left: 20px;
`;

const Hora = styled.p`
    font-size: 1rem;
    font-weight: 400;
`;


export const BarraHora = () => {
    return (
      <Barra>
        <OtraMitad>
            <Hora>10:15</Hora>
        <FaWhatsapp size={18}/>
        </OtraMitad>
        <Mitad>
        <FaWifi />
        <FaSignal/>   
        <IoBatteryHalf size={20}/>   
        </Mitad>

      </Barra>
    );
  };