
//rendering lists

import Lists from './Lists.jsx'

function App() {


  
  const fruits = [{id: 1, name: 'apple', calories: 95}, 
                  {id: 2, name: 'orange', calories: 45}, 
                  {id: 3, name: 'banana', calories: 105}, 
                  {id: 4, name: 'coconut', calories: 159}];

  const vegetables = [{id: 5, name: 'broccoli', calories: 115}, 
                  {id: 6, name: 'kales', calories: 65}, 
                  {id: 7, name: 'spinach', calories: 99}, 
                  {id: 8, name: 'cucumber', calories: 167}];

  const beverages = [{id: 9, name: 'tea', calories: 50}, 
                  {id: 10, name: 'porridge', calories: 70}, 
                  {id: 11, name: 'coffee', calories: 82}, 
                  {id: 12, name: 'soya', calories: 110}];

  return (<>
            {fruits.length > 0 ? <Lists items={fruits} category="Fruits"/> : null};
            {vegetables.length > 0 ? <Lists items={vegetables} category="Vegetables"/> : null};

            {/** a shorthand alternative to the ternary operator */}

            {beverages.length > 0 && <Lists items={beverages} category="Beverages"/>};
        </>)

}

export default App
