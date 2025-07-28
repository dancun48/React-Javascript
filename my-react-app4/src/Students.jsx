
//defaultProps = are default values for props in case they are not passed from the parent component
//                  name: 'Guest'

//propTypes = a mechanism that ensures that the passed value is of the correct datatype e.g age: propTypes.number; does not stop the application from running JUST good for debugging

import propTypes from 'prop-types'

function Students(props){

    return(

        <div className="students">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? 'Yes' : 'No'}</p> {/**requires a ternary operator to access the values */}
        </div>

    );
}

// restricting datatypes with prop-types

Students.propTypes = {
    name: propTypes.string,
    age:  propTypes.number,
    isStudent: propTypes.bool,
}

// default values in case there are no values passed for the parameters

Students.defaultProps = {
    name: 'Guest', //did not work
    age: 0,         //did not work
    isStudent: false,       //worked
}

export default Students