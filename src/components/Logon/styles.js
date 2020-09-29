import styled from 'styled-components'



//Neste caso do CSS do input só vai ser aplicado no input que esta dentro do form
//Exemplo do CSS normal: form input {}

//button:hover {}
//Dentro do button utilizar &:hover



export const DivPrincipal  = styled.div`


    width: 100%; 
    max-width: 1120px;
    height: 100vh; /*Definido para ocupar a largura toda do corpo*/
    margin: 0 auto; /*Define a margin de altura 0 e de largura automatica que é = a centralizada */
    display: flex; /* display flex deixa itens alinhado um ao lado do outro como padrão */
    /*flex-direction: column; Alinha o flex de acordo com a opção escolhida*/
    border: 20px solid black;
    background-color: #259;
    align-items: center; /*Ajusta alinhamento vertical*/
    justify-content: space-between ; /*Ajusta alinhamento horizontal*/


    section {

    width: 100%;
    max-width: 350px;
    margin: auto;
    background-color: white;
    border: 8px solid #135;
    border-radius: 10px;



    }


h1{


  font-size: 32px;
  margin-bottom: 32px;
}


.items{

display: flex;
justify-content: center;
border: 8px solid black;
padding: 4%;
margin: 4%;

}

#FormPai{

  
  width: inherit;
  
  flex-direction: column;
  display: flex;
  align-items: center;


}


#btns{
  
  
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: row;
  padding: 10px;
  

  #inputCadastro{

      margin: 5px;
      margin-left: 1.5rem;

  }

  button{

    width: 5.8rem;
    height: 4.8rem;
    border-radius: 10px;
    background-color: #139;
    color: white;
    transition: 0.5s;
    cursor: pointer;
    
  }

  button:hover{
    
    background-color: green;

  }

  #inputCadastro{

    

    svg{
        width: 3.5rem;
        

    }

  }
}



`

