
//useEffect() = react hook that tells react to do some coode when:
//                    the component re-renders
//                    the component mounts
//                    the state of a value

//useEffect(function, [dependencies]);

//1. useEffect(() => {})            //runs after every render
//2. useEffect(() => {}, [)]        //runs only on mount
//3. useEffect(() => {}, [value])   //runs on mount and when value changes


//USES 
// Event Listeners
// DOM manipulation
//Subscriptions - real time updates
// Fetching Data from an API
// Clean up when a component unmounts

import MyComponent from "./MyComponent"

function App() {

  return (<><MyComponent/></>)
}

export default App
