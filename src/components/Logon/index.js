import React, {useState} from 'react';
//import './styles.css';
import {Link} from 'react-router-dom' // Busca o conceito de SPA para ser aplicado em links da pages
import {FiUserPlus} from 'react-icons/fi' ///Ex 1:
import {DivPrincipal} from '../Logon/styles'


export default function Logon(){
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    

   async function handleLogin(e){
     //e.preventDefault()
    

        if(!id && id <= 3){

            window.alert('Favor preencher o campo de User/Email, O campo deve possuir mais que 3 Caracteres')
        }
           
        
        if(id && id > 3){

                
        console.log(id)
        localStorage.setItem('@Users', JSON.stringify(id))
        window.alert('Conta acessada, Seja-bem vindo!')

        }

        localStorage.setItem('@Users', JSON.stringify(id))
     
    }

    return (
        <DivPrincipal> 
            <section className="form">
        
                <div className='items'>
                <form id="FormPai">
                <h1 style={{backgroundColor: "black", color: "white", borderRadius: 10}} > Faça seu Login </h1>
                <div>
                <span style={{fontWeight: 'bolder'}} >User/Email: </span>
                <input type="text" placeholder="Seu Usuario/Email" value={id} onChange={e => setId(e.target.value)} ></input>
                </div>
                <br></br>
                <div>
                <span style={{fontWeight: 'bolder'}}>Senha: </span>
                <input  type="password" placeholder="Sua Senha" value={password} onChange={e => setPassword(e.target.value)} ></input>
                </div>
                <br></br>
                <div id='btns'>
                 
                <Link to='/Profile'><button className="button" onClick={handleLogin} type="button">Entrar</button></Link>
                    <div id='inputCadastro'>
                 <label htmlFor='Link'>
                <Link id='Link' className="back-link" to="/CreateAccount">    
                <FiUserPlus color="blue" />  
                </Link>
                </label>       
                    </div>
                </div>
                </form>
                </div>
            </section> 
            
            
            </DivPrincipal>
    )

// OBS: Ao substituir anchor por link também devera ser trocado href por To
}
//<Header > Ola Mundo </Header>