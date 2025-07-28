
//function Lists(){

//const fruits = [{id: 1, name: 'apple', calories: 95}, {id: 2, name: 'orange', calories: 45}, {id: 3, name: 'banana', calories: 105}, {id: 4, name: 'coconut', calories: 159}];

//const listItems = fruits.map(fruit => <li>{fruit}</li>); // .map() => converts the array into an unordered/ordered list

//----sorting by names lexicographically-----
//fruits.sort((a, b) => a.name.localeCompare(b.name));    //alphabetical order
//fruits.sort((a, b) => b.name.localeCompare(a.name));    //reverse alphabtical order

//----sorting by calories lexicographically---
//fruits.sort((a, b) => b.calories - a.calories); 

//const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories}</li>);  // for the objects we need to assign them a key/unique identifier for successful rendering and should nont be the name

//-filter()---method----------

//const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

//const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp; {lowCalFruit.calories}</li>);

//const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

//const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruits.id}>{highCalFruit.name}: &nbsp; {highCalFruit.calories}</li>);

//const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories}</li>);

//return (<><ul>{listItems}</ul>;   {/**returns an unordered list */}<ol>{listItems}</ol>;   {/**returns an ordered list */}</>);

/*return (
    <>
        <ul>{listItems}</ul>
    </>
)

}

export default Lists
*/

import PropTypes from 'prop-types'


function Lists(props){

    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; {item.calories}</li>);

    return (<>

        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    
        </>);

}

Lists.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.array(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number})),
}


Lists.defaultProps = {
    category: 'Category',
    items: [],
}
export default Lists