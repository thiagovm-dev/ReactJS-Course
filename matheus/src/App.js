import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName'
import Person from './components/Person';
import Phase from './components/Phase';

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

    </div>
  );
}

export default App;
 