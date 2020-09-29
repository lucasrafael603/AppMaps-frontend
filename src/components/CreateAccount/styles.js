import styled from 'styled-components'




export const Header  = styled.header`


font-size: 3.6rem;
display: flex;
font-weight: bold;
justify-content: center;
background-color: #159;
box-shadow: 3px 6px black;


`


export const DivPrincipal  = styled.div`


display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 5%;

input + span,div,button {

  margin-top: 2.5%;

}

#btnValidar:hover{

  background-color: green;
  color: white;

}

#btnValidar{

background-color: yellow;
color: black;
font-weight: bold;
border-radius: 5px;
transition: 0.6s;
}


#btnCadastrar {
transition: 0.6s;
background-color: green;
color: white;
font-weight: bold;
border-radius: 5px;



}



`