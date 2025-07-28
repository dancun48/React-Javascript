

function Button(){


    const handleClick3 = (e) => {e.target.textContent = 'OUCH🤕'};

    //return (<button onClick={(e) => handleClick3(e)}>Click Me!😀</button>)
    return (<button onDoubleClick={(e) => handleClick3(e)}>Click Me!😀</button>)
    /*
    let count = 0;

    const handleClick = (name) => {

        if(count < 3){
            count++;
            console.log(`${name} clicked me ${count} time/s.`)
        }
        else{
            console.log(`${name} Stop Clickimg Me!`)
        }
    };

    //const handleClick2 = (name) => console.log(`${name} Stop Clicking Me!`);


    //return (<button onClick={handleClick}>Click Me!😀</button>)   //function without arguments
    ///return (<button onClick={() => handleClick2('Dancun')}>Click Me!😀</button>)    //function with arguments

    return (<button onClick={() => handleClick('Dancun')}>Click Me!😀</button>)*/
}

export default Button