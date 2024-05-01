import React from 'react'
import './App.css';
import ComponentC from './components/ComponentC';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'cereal'}>
        <ChannelContext.Provider value={'Hog Rider'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App;
