import './App.css';
import Events from './components/JS/Events';
import Form from './components/JS/Form';

function App() {
  
  return (
    <div className="App">
      <h1>Testing Events</h1>
      <Events number="01" />
      <Events number="02" />
      <h1>My Register</h1>
      <Form />
    </div>
  );
}

export default App;
 