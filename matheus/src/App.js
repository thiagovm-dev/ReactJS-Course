import './App.css';

function App() {
const name = 'Thiago Viana de Menezes'
const newName = name.toUpperCase()

function imc(h, w){
  return (w/(h*h))
}
//img
const url = 'https:via.placeholder.com/300'

  return (
    <div className="App">
   <h1>Hello, World!</h1>
   <p>My first React App by tvm</p>
   <hr/>
   <p>Hi, {name}</p>
   <p>Hi, {newName}</p>
   <p>Sum: {2 + 2 }</p>
   <p>IMC: {imc(1.84, 97)}</p>
   <hr/>
   <img src={url} alt="My img tvm" />
    </div>
  );
}

export default App;
 