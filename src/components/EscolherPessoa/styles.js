import styled from 'styled-components';


export const FotoPessoa = styled.img`
  width:300px;
  height: auto;
  max-height: 300px; 
  /* min-height:400px;
  min-width: 300px; */
  border-radius: 10px;
 
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  object-fit: contain;
      overflow: hidden;

  justify-self: center;
  filter: saturate(200%);
   mask-image: linear-gradient(to top, rgba(0,0,0,0) 10%, black 80%);
   -webkit-mask-image: linear-gradient(to top, (0,0,0,0)  10%, black 80%);  
  
   @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
height: 60%;
height: auto;
max-height: 60%; 

}
`;

export const FotoContainer = styled.div`
position: absolute;
  left: 50%;
  transform: translateX(-50%);
width: 300px;
height: 280px;
background-color: black;
border-radius: 10px;
box-shadow: 0px 0px 10px #48A498;
z-index: 0;
display: flex;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
height: 60%;

}


`


export const Identificacao = styled.div`
 color: darkviolet;
  position: absolute;
            top: 255px;
            left: 50%;
            transform: translateX(-50%);
  word-wrap: break-word;
  width: 290px;
  text-align: left;
  text-shadow: 1px 1px 5px black;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  & span{
    display: flex;
    margin-bottom: -30px;
  } 
  & p{
    font-weight: 400;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {

    top: 53%;

}
  `


export const BotaoLike = styled.img`
 width: 50px;
 height: 50px;
 filter:grayscale(100%);
 &:hover{
   width: 50px;
   height: 50px;
   cursor: pointer;
   filter: hue-rotate(180deg);
 }
 `

export const BotaoDisLike = styled.img`
width: 50px;
height: 50px;
filter:grayscale(100%);
&:hover{
  width: 50px;
  height: 50px;
  cursor: pointer;
  filter: saturate(100%);
}`;

export const BotaoContainer = styled.div`
width: 350px;
display: flex;
justify-content: space-around;
bottom: 30px;
position: fixed;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
bottom: 15%;
left: 50%;
transform: translateX(-50%);

}
`