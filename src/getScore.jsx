import PropTypes from 'prop-types';

export default function GetScore({score}){
    return <curr-score id="score">Score: {score}</curr-score>;
}

GetScore.propTypes = {
    score: PropTypes.number
}