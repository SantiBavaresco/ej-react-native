import React from 'react'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import Carousel from "./CarouselComponent.jsx"
import CarouselAux from "./CarouselAux.jsx"
import Map from "./Map.jsx"


import AppBar from './AppBar.jsx'
import { Redirect, Route, Routes } from 'react-router-native'

const Main = () => {
  return (
    <View style={{ flex: 1 , width: '100%', backgroundColor: "#c7c8c1"}}>
      {/* <RepositoryList /> */}
      <AppBar />       
        <Routes>
          <Route path='/' element= {<RepositoryList />} />
          <Route path='/claudio' element= {<Carousel />} />
          <Route path='/mapview' element= {<Map />} />


          <Route path='/signin' element= 
          {
            // <Carousel/>
            <CarouselAux/>
            // <Text>Working on it</Text>
          } 
          />
         {/* <Redirect to='/' /> */}
        </Routes> 
      {/* <Text> SOY EL TEXTO DE MAIN asdasa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa as dasdkjkj asldasldjlahsjdhasldajhsdalks aslasdlasd asd</Text> */}
    </View>
  )
}

export default Main