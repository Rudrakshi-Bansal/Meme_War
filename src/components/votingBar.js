import '../styles/votingBar.css'

const VotingBar = ({vote1, vote2})=>{
    const multiplyBy= 100/(vote1+vote2)
    const percentage1= `${Math.round(vote1*multiplyBy)}%`;
    const percentage2= `${Math.round(vote2*multiplyBy)}%`
    return (
        <div className="voting_bar">
            <div className="player1_bar" style={{width: percentage1, backgroundColor: 'red'}}>{percentage1}</div>
            <div className="player2_bar" style={{width: percentage2, backgroundColor: 'blue'}}>{percentage2}</div>
        </div>

    )
}

export default VotingBar