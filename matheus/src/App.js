import './App.css';
import HelloWorld from './components/JS/HelloWorld';
import SayMyName from './components/JS/SayMyName'
import Person from './components/JS/Person';
import Phase from './components/JS/Phase';
import List from './components/JS/List'

function App() {
  const name = 'Maria Silva'


  return (
    <div className="App">
   <Phase />
   <Phase />
   <hr/>
   <SayMyName name="Thiago Viana" />
   <SayMyName name="Eike Menezes" />
   <SayMyName name={name} />
   <hr/>
   <Person
    name="Thiago"
    age="37"
    occupation="Lawer and JS Programmer"
    photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTICTsBX7WBXUR0yxvpoveKgydzBQfFjcW0nQ&usqp=CAU"
    />
  <List />
    </div>
  );
}

export default App;
 