import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import HelloMessage from './Components/HelloMessage';
import ClassCompProps from './Components/ClassCompProps';
import Student from './Components/Student';
import Employee from './Components/Employee';
import Customer from './Components/Customer';
import Click from './Components/Click';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Students from './Components/Students';


let a ="React";
function App() {
  const flagVal = true;
  const showName = "World";
  let age = 15;
  // Making conditional statement out side
  if(flagVal == false)
  // return(<Component1/>)
  return(
    <div>
      <Component1/>
      {/* the bellow example is the only way of using '&&' conditional operator */}
      {showName === "World" && <h1>Hollo World</h1>}
    </div>
  )
  else
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
          <Student name="Roop"/>
        </p>
        <p>
          <Employee name="Developer"/>
        </p>
        <p>
          {/* to write numbers we can use { } */}
          <Customer name="RPKMR" age={30}/>
        </p>
        <p>
          <Click name = "RPKMR"/>
        </p>
        <p>
          <EventBind/>
        </p>
        <ParentComponent/>
        <p>
          <Component2/>
          {/* the bellow example is the only way of using '&&' conditional operator */}
          {showName === "World" && <h1>Hollo World</h1>}
          {/* using ternary operator */}
          {
            age >= 18 ? <h1>{age} is eligible age for vote</h1> : <h1>{age} is not eligible age for vote</h1> 
          }
        </p>
        <p>
          <Students/>
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
