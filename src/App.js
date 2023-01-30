import './App.css';
import Add from './components/Add';
import Multi from './components/Multi';
import Sqr from './components/Sqr';
import Students from './components/Students';
import Sub from './components/Sub';
import UserListing from './components/UserListing';

function App() {
 var student1 = {
  name : "Anuj",
  age : 23,
  roll_no : 1234,
  city : "Mumbai"
 }
 


// User and UserListing
 
  return (
    <>
    <UserListing />
    <Multi />
      <Sqr />
      <Students data={student1} />
      <Students data={{name : "Animesh", age : 22,roll_no : 121,city : "Nagpur"}} />
      <h1>Hello world</h1>
      <h1>Welcome to react app</h1>
      <h2>{9 * 5}</h2>
      <Add x={50} y={60} />
      <Sub x={500} y={400} />
    </>
  );
}

export default App;
