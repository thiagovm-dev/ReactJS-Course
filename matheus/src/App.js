import { useState } from 'react';
import './App.css';
import YourName from './components/JS/YourName';
import Grettings from './components/JS/Grettings'




function App() {
  const [name, setName] = useState()
  
  
  return (
    <div className="App">
      <h1>State Lift</h1>
      <YourName setName={setName} />   
      <Grettings name={name} />   
      
     
    </div>
  )
} 

export default App;
 