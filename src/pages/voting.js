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
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAwQMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAgMBB//EAC8QAAICAQIEBAUEAwEAAAAAAAABAgMEBRESITFRMkFhwRMiI3GBFEJSkTNiobH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP2UAAAAAAAAAADmyyFUeKyaivUh5+oxx1wQ2lb28o/corrbL58V0nJ+pYLm7WKY8qoSm+/REaWtXPlGqCX9lYC4izjrN3nVW/8AhIq1mpva2uUH3T3RSAYNXTdXfHiqnGX2Z2ZOE51y467HCS6NF1p+pq5xqydo2eUvKRBZAAigAAAAAAAAAAAAAAAAAAELVMxY1XDB/Vktl6LuTJSjGLlJ7JLmZfKvlk3ztl+58l2RYPNttttttvfdnwAqAACAAAAAKvdJzfjR+DY/qRW6f8kWJk6ZyqtjZB7Si90ammyN1UbYeGa3Jg7ABFAAAAAAAAAAAAAAAAQ9Xs+HhSS6zaiZ0utff0al/tv/AMKXoWIAAqAAAAAAAABe6HZx48q/OEuX2KItNAf1bo/6r/0lWLoDqCKAAAAAAAAAAAAAAAArNejvTS/JSe/9FIaPVKvi4c1tzj8y/BnCxAAFQAAAAAAAALXQF890vRIqi+0WrgxOPbnY9/x0JVixPgBFAAAAAAAAAAAAAAAAPxuZnOx/02TKtL5d94/Y0xHzsRZdLitlOPOL9iwZkHVkJVzcLFwyXVM5KgAAgAAAB9jGUpKMU230S8wrvGplkXxqh1b5+i8zUwgoQUIrZRWyImm4X6WtuaXxZeJ9vQmEUABAAAAAAAAAAAAAAAAAB92ZHvzMeh7WWrftHmwPmbg15cE5JRsXhn7MocrDvxX9SG8P5R6GiouqvrUqpcS3PTqtmuXZllRkQaS7TcW3nwcD7w5EWejVvwXTX3W5dMUofJl1HRIed8vxE96dLxa+bg7H3mxpikoxbsifDVBvu3yS/JeYGBXifO3x2teLt9iZFKKUYraK/alyObbIVQdlkuGK6tkV0CNRn4t8uGFq4uz5ErbvyIPgAAAAAAAAAAAAAAPxuAOLrq6IOdslGK7nGVlV41XHZz36RXVszuTlW5U+O1/aK6ICVmarZduqfp19/wBzXsV7ALEStPyni3uT/wActuJe5o4SjZCM4STjLo0ZIlYOdZiNKPzV+cH7FsGlPhGxs/Hv8M+GX8Z9SStn0e/qZUB9ZHyMzHx19SzeX8Yvdge7aXNy2SM9qmZ+qs4YNuqPT1fcZuo2ZPyJcFPbfm/uQuXl0KgTsPU7sZ8Mvq1vrGXX8Mggo1OPkVZNfHVLfuvNejPUytN9lFinXLhl37mhwcyvLr3T2sj4okEkAEUAAAAAAAAPPJyIY1Ttm9kui7s9N0lu2kl5szmo5byruX+OHKK9wPHIyJ5NjssfN+XY8gCxAAFQAAA7jbZBbRnJLspM4AHbtsfWybXZyZwAAAAAAADum2dNkbK5bSXT1OABp8LKhlUqceUl4o9me5mMLJli3qyPh6SXdGmhKM4RnFpqS3RGn0AEAAAABJ8MW3yS6gVus5TqqVMH81nX0RR+57ZdzyMidr6SfJdkeJqJQABAAAAAAAAAAAAAAAAAAAC30TK33xpv1h7oqDumyVNkbIPaUXuiK1YOapqyqM49JLc6IoAAPq6kPVZyhhWcL232X9gAZwAGmQAAAAAAAAAAAAAAAAAAAAAAAF9ok5SxGpPfhk0iwAJVgACK/9k=" alt="Player-1 profile picture" className="player_picture"/>
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