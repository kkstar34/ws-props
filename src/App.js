import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

function App() {





  function handleName(name){
      alert(name)
  }

  let fullName='Kouyate Karim';
  let bio= "dev fullstack";
  let profession= "dev";
  return (
    <div className="App">
        <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}> <img src="https://www.commentcoder.com/static/5b126458667d1830e61215514ba05399/b17f8/conventions-nommage.jpg"/> </Profile>
    </div>
  );
}

export default App;
