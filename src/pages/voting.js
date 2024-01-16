import VotingBar from '../components/votingBar';
import '../styles/voting.css';
import { useState } from 'react';

const VotingPage = ()=>{

    const [vote1, setVote1] = useState(1)
    const [vote2, setVote2] = useState(1)

    return (
        <div className="votingPage">
            <div className="header">
                <div className="player">
                    <div className="player_picture"></div>
                    <div className="player_name">Player 1</div>
                </div>
                <div className="middle_bar">
                    <VotingBar vote1={vote1} vote2={vote2} />
                    <div className="Topic">
                        <div className="wordTopic">Topic</div>
                        <div className="topic">Cats</div>
                    </div>

                </div>
                <div className="player">
                    <div className="player_picture"></div>
                    <div className="player_name">Player 1</div>
                </div>
            </div>
            <div className="memewar">
                <div className="memeBox">
                    <div className="meme1"></div>
                    <button className="vote_btn1" onClick={()=>{setVote1(vote1+1)}} >Vote</button>
                </div>
                <div className="vs_logo"></div>
                <div className="memeBox">
                    <div className="meme2"></div>
                    <button className="vote_btn2" onClick={()=>{setVote2(vote2+1)}}>Vote</button>
                </div>
            </div>

        </div>
    )
}

export default VotingPage