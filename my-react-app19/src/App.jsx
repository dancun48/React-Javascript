//useState() = re-renders the component when the state value changes

//useRef() = 'use Reference' does not cause re-renders when its value changes
//            when you want a component to 'remember' some information, but you don't want to trigger new renders

//            1. accessing/interacting with thr DOM elements
//            2. handling Focus, Animations, and Transtitions
//            3. managing Timers and Intervals

import MyComponent from "./MyComponent";

function App() {


  return (<MyComponent/>)
}

export default App
