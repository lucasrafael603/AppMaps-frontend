import React, {useState,useEffect, useCallback, ChangeEvent} from 'react';
import {FiArchive} from 'react-icons/fi' 
import backend from '../../services/backend'
import Modal from '../Modal/Modal'
import '../Upload/stylesUpload.css'
import {DivPrincipal, SideBar, Header } from '../Profile/styles'
import { Map, TileLayer, Marker, Popup, Circle, CircleMarker} from "react-leaflet";
import './styles';
import { Link } from 'react-router-dom';



export default function Upload(){
    
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [valorDMS, setValorDMS] = useState([])
    const [apendice, setValorApendice] = useState([])
    const [posicao, setPosicao] = useState([])
    const [userAtual, setUserAtual] = useState('')




    useEffect(()=> {


      const UserStorage = localStorage.getItem('@Users')
       //console.log('uus', userAtual)
       //console.log(UserStorage)
       setUserAtual(JSON.parse(UserStorage))
       
       
   
   
     }, [])
   
    

    useEffect(() =>{


        

        console.log('verificação de estado apendice', apendice)
        console.log('verificação de estado DMS',valorDMS)

        
          localStorage.setItem('@dms', valorDMS)
      
        

    },[valorDMS])

    const UpdateFile =  useCallback(async (e: ChangeEvent<HTMLInputElement>) => {

        if(e.target.files){

       
          const data = new FormData()
      
          data.append('arquivos/upload', e.target.files[0])

           backend.patch('/users/arquivos', data).then( (values) => {

            console.log('Verifacação de todos Dados disponiveis',values.data)

            
            var respRelatorio = new Array()
            respRelatorio =  values.data[0]
            
            
           
            console.log('Somente Apendice', respRelatorio)
            


      
                
                
                var Coordenadas = new Array()
    
                Coordenadas =  values.data[2]
                console.log('Somente DMS',Coordenadas)
                
            


               //const testandosplit = respRelatorio.toString().split(/[a][e][r][o][d][r][o][m][e][s]/gi)
               
              //var testandosplit = respRelatorio.toString().split(/[a][e][r][o][d][r][o][m][e][s]/gi)
               //testandosplit = testandosplit.toString().split(/[n][a][m][e]/gi)
               //testandosplit = testandosplit.toString().split(/[c][i][t][y]/gi)
               //testandosplit = testandosplit.toString().split(/[d][e][s][c][r][i][p][t][i][o][n]/gi)
           


              setValorApendice(respRelatorio)
              setValorDMS([...valorDMS, Coordenadas])
                
                setIsModalVisible(true)
            

        
            

          })
        }    

    },)
    

   async function handleLogin(e){
        e.preventDefault()

      
    }

    return (
      <>

    < DivPrincipal>
        <SideBar>
          <Header>
            <Link to={'/'}> <button style={{backgroundColor: 'red', fontSize: '1.0rem', marginBottom: '1.0rem', color: 'white', cursor: 'pointer', borderRadius: '0.5rem' }}> Logout </button> </Link>
            <br/>
            <span style={{color: 'green', fontWeight: 'bolder'}}> Online: <span id='username' style={{fontSize: '1.3rem', display:'block', marginTop: '0.3rem', marginLeft: '0.2rem'}} > {userAtual} </span> </span>
          </Header>



        <div className="Container-pai"> 
        
        <div className='FilhoContainer' >
            <label htmlFor='uploadArq'>
            <FiArchive/>
            <input  type='file' id='uploadArq' onChange={UpdateFile} />  
            </label>
            <span style={{}}> Fazer Upload </span>
          </div>
        </div>
            
           {isModalVisible ? <Modal onClose={ ()=> setIsModalVisible(false) } >


                    

                          {console.log('diz',apendice['aerodromes'].map((values) => console.log(values) ))}


                              
                          <table id='table'>

                          {apendice['aerodromes'].map((values) => {

                            
                            
                              return (
                                <>
  
                                <tr id='trilha1'>
                                <th> Nome: </th>
                                <td>{values.name}</td>
                                </tr>

                                <tr id='trilha2'>
                                <th> Cidade: </th>
                                <td>{values.city}</td>
                                </tr>

                                <tr id='trilha3'>
                                <th> Descrição: </th>
                                <td>{values.description}</td>
                                </tr>

                                <tr id='trilha4'>
                                <th> Criação em: </th> 
                                <td>{values.created_at}</td>
                                </tr>
                                
                                <tr id='trilha4'>
                                <th> Quantidade de pistas </th> 
                                <td>{values['runways'][0].designation}</td>
                                </tr>
                                

                                
                                </>
                              )


                          })}
                            
                          </table>
                    
                     </Modal> : null}

                     
                     
              </SideBar>

              <Map id='mapid' center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={[45.4, -75.7]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Circle center={[45.4, -75.7]} radius={5000} color='red' /> 

      <Circle center={[-16.004, 48.974722225]} radius={600} />
        <CircleMarker center={[-16.004, 48.974722225]} radius={5000}> 
          <Popup>
           A pretty CSS3 popup. <br /> Easily customizable.
         </Popup>
       </CircleMarker>                            

      <Marker position={[-19.238888888888887, 50.97472222222222]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

                          
      {valorDMS.map((values) => {


        return (
            <>

              
      <Marker position={[values[0][0], values[0][1]]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Circle center={[values[0][0], values[0][1]]} radius={5000} color='red' /> 

               
      <Marker position={[values[1][0], values[1][1]]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Circle center={[values[1][0], values[1][1]]} radius={5000} color='red' /> 


      <Marker position={[values[2][0], values[2][1]]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Circle center={[values[2][0], values[2][1]]} radius={5000} color='red' /> 


      <Marker position={[values[3][0], values[3][1]]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Circle center={[values[3][0], values[3][1]]} radius={5000} color='red' /> 


      <Marker position={[values[4][0], values[4][1]]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Circle center={[values[4][0], values[4][1]]} radius={5000} color='red' /> 


            

            </>

        )


      })}




        </Map>


        </DivPrincipal>
              </>
    )
}


