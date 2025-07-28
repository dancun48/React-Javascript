

//import styles from './Button.module.css'


function Button(){

    //inline CSS - small components with minimal styling

    const styles = {
                    padding: '10px 20px',
                    backgroundColor: 'rgb(32, 166, 211)',
                    borderRadius: '7px',
                    border: 'none',
                    color: 'white',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                    }

    return (
        <button style={styles}>Click Me</button>
    )
}

export default Button