import React from 'react'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar.jsx'
import { Redirect, Route, Routes } from 'react-router-native'

const Main = () => {
  return (
    <View style={{ flex: 1 , width: '100%',}}>
      {/* <RepositoryList /> */}
      <AppBar />       
        <Routes>
          <Route path='/' element= {<RepositoryList />} />
          <Route path='/signin' element= {<Text>Working on it</Text>} />
         {/* <Redirect to='/' /> */}
        </Routes> 
      {/* <Text> SOY EL TEXTO DE MAIN asdasa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa as dasdkjkj asldasldjlahsjdhasldajhsdalks aslasdlasd asd</Text> */}
    </View>
  )
}

export default Main