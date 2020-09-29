import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Logon from '../components/Logon/index'
import CreateAccount from '../components/CreateAccount/index'
import Mapa from '../components/Map/index'
import Maps from '../components/Map/map'
import Upload from '../components/Upload/index'



const Routes = () => {

return (

  <Switch> 
    
    <Route path='/' exact component={Logon} />
    <Route path='/Profile' exact component={Upload} />
    <Route path='/CreateAccount' exact component={CreateAccount} />
    <Route path='/Mapa' exact component={Mapa} />
    <Route path='/Mapinha' exact component={Maps} />

  </Switch>
  )
}

export default Routes