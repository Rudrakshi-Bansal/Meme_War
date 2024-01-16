
import '../styles/user.css';


const User = ()=>{
    return (
        <div className="user">
            {/* <div className="backdrop"> */}
                <div className="Topic">
                    <div className="wordTopic">Topic</div>
                    <div className="topic">Cats</div>
                </div>
                <div className="memeBox">
                    <div className="meme"></div>
                    <button className="upload">Upload</button>
                {/* </div> */}
            </div>

        </div>)
}

export default User