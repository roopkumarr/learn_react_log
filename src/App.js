import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import HelloMessage from './Components/HelloMessage';
import ClassCompProps from './Components/ClassCompProps';
import Student from './Components/Student';


let a ="React";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {/* Self closing tag */}
          <Greet/> 
        </p>
        <p>
          <Welcome/>
        </p>
        <p>
          <Hello/>
        </p>
        {/* <p>
          <HelloMessage name="World."datafield={{"a":1,"b":2}}/>
        </p>
        <p>
          <HelloMessage name="Developer."datafield={{"a":1,"b":2}}/>
        </p> */}
        <p>
          <HelloMessage name="World."datafield={{"a":1,"b":2}}>
            <p>Clild Component 1</p>
            </HelloMessage>
        </p>
        <p>
          {/* <HelloMessage name="Developer."datafield={{"a":1,"b":2}}/> */}
          <HelloMessage name="Developer."/>
          <button>Click Cild Comp</button>
        </p>
        <p>
          {/* we can pass variable using {<variable>} */}
          {/* this even shows how props can be passed from parent component to child component */}
          {/* in our case app.js is parent component and HelloMessage is child component and attribute name is getting the variable a passed*/}
          <HelloMessage name={a}/>
          <button>Click Cild Comp</button>
        </p>
        <p>
          <ClassCompProps name="World"wordCount="5"/>
          <ClassCompProps name="Classes"wordCount="7">
            <p>Child comp inside class</p>
            </ClassCompProps>
        </p>
        <p>
          <Student/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
