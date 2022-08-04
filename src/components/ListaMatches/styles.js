import styled from 'styled-components';

export const Foto = styled.img`
width: 55px;
height: 55px;
margin-left: 2%;
object-fit: cover;
    overflow: hidden;
border-radius: 100%;
`

export const Match = styled.div`
display: flex;
width: 300px;

margin-inline: auto;
padding: 8px;

& p{
    margin: 15px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
};
&:hover{
    background-color: #d1cbd8;
    cursor: pointer;



}
`