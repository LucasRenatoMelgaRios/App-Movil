import styled from "styled-components"
import { GiCondorEmblem } from "react-icons/gi";


const Barra = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    gap:10px;
    align-items: center;
    background-color: #009e94;
    position: fixed;
    top: 40px;
    padding-left: 20px;
    z-index: 1;
`;

const Logo = styled(GiCondorEmblem)`
    color: #ffff;
`;

export const Header = () =>{
    return(
        <Barra>
            <Logo size={30}/>
         <h2 style={{color: "#ffff"}}>CondorTraveling</h2>   
        </Barra>
    )
}