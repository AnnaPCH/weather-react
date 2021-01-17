import Weather from "./Weather";
import './App.css';
import Loader from 'react-loader-spinner';

function App() {
  return (
    <div className="App">
      <h1>Hello from React!</h1>
      <Weather />
      <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000}
 
      />
    </div>
  );
}

export default App;
