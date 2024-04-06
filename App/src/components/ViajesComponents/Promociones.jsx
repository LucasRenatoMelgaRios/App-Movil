import styled from "styled-components"
import Fondo from "../img/machu.jpg"
import Londres from "../img/Londres.jpg"
import Rio from "../img/Rio_Janeiro.jpg"
import Caracas from "../img/Caracas.jpg"
import Roma from "../img/roma.jpg";
import Venecia from "../img/venecia.jpg";
import Chichen from "../img/Chichen.jpg";
import Man from "../img/man1.jpg"
import Man2 from "../img/man2.webp"
import Woman from "../img/woman1.jpg"
import Woman2 from "../img/woman2.jpg"
import { FaStar } from "react-icons/fa";


const PromocionesMainContainer = styled.div`
 margin-top: 100px;
 margin-left: 20px;
 margin-right: 20px;

 max-width: 100%;

 img{
    width: 100%;
    height: 100px;
    object-fit: cover;
 }
`;

const Promo = styled.div`
 margin-left: 20px;
 margin-right: 20px;
 max-width: 100%;
 display: flex;
 margin-bottom: 10px;

 img{
    width: 100%;
    height: 100px;
    object-fit: cover;
 }
`;

const TituloDePagina = styled.h3`
    font-size: 2.3rem;
  
`;

const Texto = styled.p`
font-family: "Loved by the King", cursive;
font-size: 1.8rem;
`;

const ReseñaImage = styled.div`
    width: 90px;
    display: flex;
    gap: 20px;
    object-fit: cover;

    img{
        width: 100%;
        height: 100%;
        border-radius: 360px;
    }
`;

const ReseñaContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Estrella = styled(FaStar)`
    color: yellow;
`;

export const Promociones = () =>{
    return(
        <>
        <PromocionesMainContainer>
            <TituloDePagina>Y tú... ¿Que tal la pasaste?</TituloDePagina>
        </PromocionesMainContainer>
        <div style={{
            display: "flex",
            flexDirection:"column"
        }}>
        <Promo>
 
            <img src={Londres} style={{position:"relative"}} />
            <Texto 
            style={{
                position: "absolute",
                color: "#ffffff",
                bottom:"680px",
                fontSize:"2rem",
                left:"30px"
            }}
            >Londres</Texto>
        </Promo>

        <Promo>
            <div style={{display:"flex", gap:"10px"}}>
            <ReseñaImage>
        <img src={Man} alt="" />
    </ReseñaImage>
    <Texto>Pedro Paucar <Estrella/><Estrella/><Estrella/><Estrella/><Estrella/></Texto>

            </div>
     

 <Texto 
 style={{
     position: "absolute",
     color: "#ffffff",
     bottom:"680px",
     fontSize:"2rem",
     left:"30px"
 }}
 >Londres</Texto>
 
</Promo>
<Promo>
<div style={{display:"flex", gap:"10px"}}>
            <ReseñaImage>
        <img src={Man2} alt="" />
    </ReseñaImage>
    <Texto>Paul Sanchez<Estrella/><Estrella/><Estrella/><Estrella/></Texto>

            </div>
    
 <Texto 
 style={{
     position: "absolute",
     color: "#ffffff",
     bottom:"680px",
     fontSize:"2rem",
     left:"30px"
 }}
 >Londres</Texto>
</Promo>
<Promo>
<div style={{display:"flex", gap:"10px", justifyContent:"center", alignItems:"center"}}>
            <ReseñaImage>
        <img src={Woman} alt="" />
    </ReseñaImage>
    <Texto>Angela Rivera<Estrella/><Estrella/><Estrella/><Estrella/></Texto>

            </div>
 <Texto 
 style={{
     position: "absolute",
     color: "#ffffff",
     bottom:"680px",
     fontSize:"2rem",
     left:"30px"
 }}
 >Londres</Texto>
</Promo>
<Promo>
<div style={{display:"flex", gap:"10px", justifyContent:"center", alignItems:"center"}}>
            <ReseñaImage>
        <img src={Woman2} alt="" />
    </ReseñaImage>
    <Texto>Xi Jao Li<Estrella/><Estrella/><Estrella/><Estrella/></Texto>

            </div>
 <Texto 
 style={{
     position: "absolute",
     color: "#ffffff",
     bottom:"680px",
     fontSize:"2rem",
     left:"30px"
 }}
 >Londres</Texto>
</Promo>
       

        
        </div>

        
        </>
    )
}