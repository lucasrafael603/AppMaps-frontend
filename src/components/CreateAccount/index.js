import React, {useEffect, useState} from 'react';
import {Header, DivPrincipal} from '../CreateAccount/styles'
//import Botao from '../../components/Botao'
import {Link} from 'react-router-dom'
import {FiCornerDownLeft} from 'react-icons/fi'


export default function CreateAccount(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('')
    const [estadoValidacao, setEstadoValidacao] = useState(false)



   async function handleValicao(e){
       // e.preventDefault()


      if(!nome | !email){

        setEstadoValidacao(false)

        window.alert('Favor preencher Nome/Email')

       }

      //  if(nome.length > 2){

      //   setEstadoValidacao(false)

      //   window.alert('O nome deve possuir mais que 2 caracteres')

      //  }

       if(senha !== confirmacaoSenha){

        window.alert('As senhas não são iguais, tente novamente!')

        setEstadoValidacao(false)

       }

       if(senha == confirmacaoSenha && senha.length && confirmacaoSenha.length >=5){


        setEstadoValidacao(true)

       }



    }

    return (
    <>
      
      <Header>
        <span>Cadastro de Usuário</span>
      </Header>
      <Link style={{marginLeft: '5%'}} to='/'><FiCornerDownLeft></FiCornerDownLeft></Link>
      <DivPrincipal>
        
        
        <span>Nome:</span>
        <input onChange={((value) => setNome(value.target.value) )} value={nome} type='text' placeholder='Inserir o seu Nome' />
        <span>Email:</span>
        <input onChange={((value) => setEmail(value.target.value) )} value={email} type='email' placeholder='Inserir o seu Email' />
        <span>Senha: </span>
        <input onChange={((value) => setSenha(value.target.value) )} value={senha} type='password' placeholder='Inserir a senha desejada' />
        <span>Confirmação de Senha: </span>
        <input onChange={((value) => setConfirmacaoSenha(value.target.value) )} value={confirmacaoSenha} type='password' placeholder='Repetir a senha' />
        <button onClick={handleValicao} id='btnValidar'> Validar </button>
        { estadoValidacao && <button id='btnCadastrar' onClick={(() => window.alert('Usuario Cadastrado') )} type='submit'>Cadastrar</button>}

        
        
        


      </DivPrincipal>
    </>

    )

}
