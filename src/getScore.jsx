import PropTypes from 'prop-types';
export default function GetScore({score}){
    return <current-score>Score: {score}</current-score>;
}

GetScore.propTypes = {
    score: PropTypes.number
}