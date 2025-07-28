
//React hook = special function that allows functional components to use React features without writing vlass components (react v16.8)
//            (useState, useEffect, useContext, useReducer, useCallback, etc.)

//useState() = a react hook that allows the creation of a stateful variable AND a setter function to update its value in the Virtual DOM (most common)

//import MyComponent from "./MyComponent"

import Counter from "./Counter"

function App() {



  return (
      <>
        <Counter/>
      </>)
/*
  return (
    <>
      <MyComponent/>
    </>)
*/

}

export default App
