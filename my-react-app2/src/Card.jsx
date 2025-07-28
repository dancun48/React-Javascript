
import profilePic from './assets/pic.png'

function Card(){

    return (
        <div className="card">

        
            <img className="card-image" alt="profile-picture" src={profilePic}></img>

            <h2 className='card-title'>Dancun O. O.</h2>

            <p className='card-text'>A web developer who builds and maintains websites and web applications and play video games.</p>

        </div>

    );
}

export default Card