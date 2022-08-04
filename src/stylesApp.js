import styled from "styled-components";


export const Background = styled.div`
width: 100vw;
height:100vh;
background:linear-gradient(blueviolet, #48A498);
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {

}
`

export const Div = styled.div`
width: 350px;
height: 95vh;
background-color: white;
border: 1px solid black;
border-radius: 10px;
left:0;
right:0;
margin-left:auto;
margin-right:auto;
top:15px;
position: absolute;
overflow-y:auto;
overflow-x: hidden;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 100vw;
height: 100vh;
top: 0px;
overflow-x: hidden;
border-radius: 0px;
}
`


export const Logo = styled.img`
width: auto;
height:55px;
margin-top: 22px;
`

export const Icone = styled.img`
width: 25px;
height: 25px;
margin: 10%;
margin-bottom: 15px;
:hover{
    cursor: pointer;
}
`
export const Cabecalho = styled.div`
display: flex;
justify-content: space-around;
width: 350px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 100vw;
}
`
export const Hr = styled.hr`

margin-top: 5px;
border-color: 30px purple;
margin-bottom: 20px;
`




