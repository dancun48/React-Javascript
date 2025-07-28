

function ProfilePicture(){


        const imageUrl = './src/assets/catt.jpeg';

        const handleClick4 = (e) => e.target.style.display = 'none';

    return(
        <>
            <img src={imageUrl} onClick={(e) => handleClick4(e)}></img>
        </>
    )

}

export default ProfilePicture