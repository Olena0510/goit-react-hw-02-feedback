import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { TitleStatistic, Good, Neutral, Bad, Total, Positive } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
        <div>
            <TitleStatistic>Statistics</TitleStatistic>
            {total === 0 ? (<Notification message = "There is no feedback"></Notification>) : (
            <div>
            <Good>Good: {good}</Good>
            <Neutral>Neutral: {neutral} </Neutral>
            <Bad>Bad: {bad} </Bad>
            <Total>Total: {total} </Total>
            <Positive>Positive feedback: {positiveFeedback}%</Positive>
            </div>
            )}
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};



