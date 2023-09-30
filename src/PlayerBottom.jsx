import PropTypes from 'prop-types';
import { useState } from "react"

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function PlayerBottom({players, setScore}){

    const randPlayer = players[Math.floor(Math.random() * players.length)+1];
    const [player, setPlayer] = useState(randPlayer.name);
    const [playertd, setPlayertd] = useState(randPlayer.touchdowns);

    const newPlayer = () => {
        const otherPlayertd = document.querySelector('#ptop');
        const playertdnum = document.querySelector('#pbot');
        const botOver = document.querySelector('#botOverlay');
        console.log(otherPlayertd.innerText);
        console.log(playertd);

        if(playertd >= otherPlayertd.innerText){
            playertdnum.style.opacity = '1';
            botOver.style.backgroundColor = 'rgb(124,252,0)';

            sleep(2000).then(() => {
            playertdnum.style.opacity = '0';
            botOver.style.backgroundColor = '';
            const randPlayerNew = players[Math.floor(Math.random() * players.length)+1];
            setPlayer(randPlayerNew.name)
            setPlayertd(randPlayerNew.touchdowns);
            setScore((prevScore) => prevScore + 1);
        })
        }
        else{
            playertdnum.style.opacity = '1';
            botOver.style.backgroundColor = 'rgb(255,6,6)';

            sleep(2000).then(() => {
            playertdnum.style.opacity = '0';
            botOver.style.backgroundColor = '';
            const randPlayerNew = players[Math.floor(Math.random() * players.length)+1];
            setPlayer(randPlayerNew.name)
            setPlayertd(randPlayerNew.touchdowns);
            setScore(0);
            console.log("Bottom Player has less TD's")
            })
        }
    }

    return(
        <overlay-top id="botOverlay" style={{backgroundColor: "rgba(124,252,0,0)"}}>
        <player-bottom onClick={newPlayer}>
            <div className='nameandtd'>
            <div-two className="pbot" id="pbot" style={{opacity: "0"}}>{playertd}</div-two>
            <div-two className="pbot" >{player}</div-two>
            </div>
        </player-bottom>
        </overlay-top>
    )
}

PlayerBottom.propTypes = {
    players: PropTypes.array,
    setScore: PropTypes.func
}