
//HOW TO STYLW REACT COMPONENTS WITH CSS
//-----------------------------------------
//(not including external frameworks like Tailwind or preprocessors)

// 1. EXTERNAL - normal external css sheet linked to the Component
// 2  MODULES - create a folder for the component and its css sheet; Component.module.css and Component.jsx and them import the style sheet into the component file
// 3. INLINE - 


import Button from './Button.jsx'

function App() {

  return (
    <Button/>
  )
}

export default App
