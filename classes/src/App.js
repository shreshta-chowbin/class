import './App.css';
import StuTenth from './classes/StuTenth.js';

function App() {
  
  let stu1= new StuTenth("abc",60,70,80,40,50,60);

  stu1.calculateResult();


  let stu2= new StuTenth("xyz", -9,20,30,40,50,60);

  stu2.calculateResult();

  return (
    <div className="App">
    </div>
  );
}

export default App;
