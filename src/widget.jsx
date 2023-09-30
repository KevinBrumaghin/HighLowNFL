import PlayerBottom from "./PlayerBottom"
import PlayerTop from "./PlayerTop"
import Or from "./or";
import { useState } from "react"
import GetScore from "./getScore";
const players = [
    { name: 'Jerry Rice', touchdowns: 208 },
    { name: 'Randy Moss', touchdowns: 156 },
    { name: 'Terrell Owens', touchdowns: 153 },
    { name: 'Cris Carter', touchdowns: 130 },
    { name: 'Marvin Harrison', touchdowns: 128 },
    { name: 'Larry Fitzgerald', touchdowns: 121 },
    { name: 'Antonio Gates', touchdowns: 116 },
    { name: 'Tony Gonzalez', touchdowns: 111 },
    { name: 'Tim Brown', touchdowns: 100 },
    { name: 'Steve Largent', touchdowns: 100 },
    { name: 'Don Hutson', touchdowns: 99 },
    { name: 'Isaac Bruce', touchdowns: 91 },
    { name: 'Andre Johnson', touchdowns: 70 },
    { name: 'James Lofton', touchdowns: 75 },
    { name: 'Anquan Boldin', touchdowns: 78 },
    { name: 'Andre Reed', touchdowns: 87 },
    { name: 'Lance Alworth', touchdowns: 85 },
    { name: 'Jimmy Graham', touchdowns: 85 },
    { name: 'Hines Ward', touchdowns: 85 },
    { name: 'Paul Warfield', touchdowns: 85 },
    { name: 'Mark Clayton', touchdowns: 84 },
    { name: 'Irving Fryar', touchdowns: 84 },
    { name: 'Steve Smith', touchdowns: 81 },
    { name: 'Art Powell', touchdowns: 81 },
    { name: 'Chad Johnson', touchdowns: 76 },
    { name: 'Wes Welker', touchdowns: 75 },
    { name: 'Sterling Sharpe', touchdowns: 65 },
    { name: 'Harold Carmichael', touchdowns: 79 },
    { name: 'Reggie Wayne', touchdowns: 82 },
    { name: 'Mike Evans', touchdowns: 81 },
    { name: 'Gary Clark', touchdowns: 65 },
    { name: 'Michael Irvin', touchdowns: 65 },
    { name: 'Brandon Marshall', touchdowns: 83 },
    { name: 'Torry Holt', touchdowns: 74 },
    { name: 'John Stallworth', touchdowns: 63 },
    { name: 'Calvin Johnson', touchdowns: 83 },
    { name: 'Rod Smith', touchdowns: 68 },
    { name: 'Keyshawn Johnson', touchdowns: 64 },
    { name: 'Bobby Mitchell', touchdowns: 65 },
    { name: 'Drew Hill', touchdowns: 60 },
    { name: 'Derrick Mason', touchdowns: 66 },
    { name: 'Joey Galloway', touchdowns: 77 },
    { name: 'A.J. Green', touchdowns: 70 },
    { name: 'John Taylor', touchdowns: 66 },
    { name: 'Keenan McCardell', touchdowns: 63 },
    { name: 'Al Toon', touchdowns: 31 },
    { name: 'Eric Moulds', touchdowns: 49 },
    { name: 'Santana Moss', touchdowns: 66 },
    { name: 'Muhsin Muhammad', touchdowns: 62 },
    { name: 'Stanley Morgan', touchdowns: 72 },
    { name: 'Gary Garrison', touchdowns: 58 },
    { name: 'Bob Hayes', touchdowns: 71 },
    { name: 'Herman Moore', touchdowns: 62 },
    { name: 'Brandon Stokley', touchdowns: 40 },
    { name: 'Donald Driver', touchdowns: 61 },
    { name: 'Roy Green', touchdowns: 66 },
    { name: 'Bill Brooks', touchdowns: 49 },
    { name: 'Dwayne Bowe', touchdowns: 73 },
    { name: 'Charley Hennigan', touchdowns: 51 },
    { name: 'Carl Pickens', touchdowns: 63 },
    { name: 'Derrick Alexander', touchdowns: 59 },
    { name: 'Brandon Lloyd', touchdowns: 53 },
    { name: 'DeSean Jackson', touchdowns: 63 },
    { name: 'Andre Rison', touchdowns: 84 },
    { name: 'Marques Colston', touchdowns: 72 },
    { name: 'Jordy Nelson', touchdowns: 72 },
    { name: 'DeAndre Hopkins', touchdowns: 71 },
    { name: 'Wesley Walker', touchdowns: 71 },
    { name: 'Gary Collins', touchdowns: 70 },
    { name: 'Travis Kelce', touchdowns: 69 },
    { name: 'Greg Jennings', touchdowns: 64 },
    { name: 'Isaac Curtis', touchdowns: 53 },
    { name: 'Billy Howton', touchdowns: 61 },
    { name: 'John Jefferson', touchdowns: 52 },
    { name: 'John Gilliam', touchdowns: 47 },
    { name: 'Michael Thomas', touchdowns: 64 },
    { name: 'Sammy White', touchdowns: 50 },
    { name: 'Roy Jefferson', touchdowns: 52 },
    { name: 'Antonio Brown', touchdowns: 75 },
    { name: 'Johnnie Morton', touchdowns: 43 },
    { name: 'Wes Chandler', touchdowns: 56 },
    { name: 'Alshon Jeffery', touchdowns: 47 },
    { name: 'Anthony Miller', touchdowns: 63 },
    { name: 'James Jett', touchdowns: 29 },
    { name: 'Isaac Byrd', touchdowns: 12 },
    { name: 'Willie Gault', touchdowns: 44 },
    { name: 'Golden Tate', touchdowns: 44 },
    { name: 'John Brown', touchdowns: 32 },
    { name: 'Mike Quick', touchdowns: 61 },
    { name: 'Willie Jackson', touchdowns: 44 },
    { name: 'Emmanuel Sanders', touchdowns: 42 },
    { name: 'Percy Harvin', touchdowns: 32 },
    { name: 'Robert Brooks', touchdowns: 32 },
    { name: 'Eric Decker', touchdowns: 53 },
    { name: 'Anthony Carter', touchdowns: 40 },
    { name: 'Jerry Porter', touchdowns: 44 },
    { name: 'Javon Walker', touchdowns: 31 },
    { name: 'Michael Crabtree', touchdowns: 54 },
    { name: 'Deion Branch', touchdowns: 39 },
    { name: 'Lynn Swann', touchdowns: 51 },
    { name: 'Mike Wallace', touchdowns: 33 },
    { name: 'Bobby Engram', touchdowns: 35 },
    { name: 'Dante Lavelli', touchdowns: 62 },
    { name: 'Greg Olsen', touchdowns: 60 }
];

export default function MainWidget(){
    const [score, setScore] = useState(0);
    return(
        <>
            <GetScore score = {score}/>
            <main-widget>
                <PlayerTop players = {players} setScore = {setScore}/>
                <PlayerBottom players = {players} setScore = {setScore}/>
            </main-widget>
            <Or />
        </>
    )
}