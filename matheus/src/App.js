import './App.css';
import AnotherList from './components/JS/AnotherList'



function App() {

  const myitems = ['React', 'Vue', 'Angular']
  
  return (
    <div className="App">
      <h1>Lists Rendenization</h1>
        <AnotherList items={myitems} />
        <AnotherList items={[]} />
      
     
    </div>
  )
} 

export default App;
 