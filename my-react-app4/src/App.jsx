// props = red-only properties that are shared between components
//          a parent component can send data to a child component
//          <component key=value/>


import Students from './Students.jsx'

function App() {
  
    return (
      <>

        <Students name="Spongebob" age={30} isStudent={false}/>
        <Students name="Patrick" age={37} isStudent={true}/>
        <Students name="Sandy" age={25} isStudent={false}/>
        <Students name="Squidward" age={42} isStudent={true}/>
        <Students/>
      
      </>
    );
}

export default App
