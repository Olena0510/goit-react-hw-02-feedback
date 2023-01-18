import PropTypes from 'prop-types';
import { FeedbackBtn, ListBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ListBtn>
           {options.map(option => {
        return (
          <FeedbackBtn
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackBtn>
        );
      })}
        </ListBtn>
    );

}
    FeedbackOptions.propTypes = {
        options: PropTypes.arrayOf(PropTypes.string.isRequired),
            onLeaveFeedback: PropTypes.func.isRequired,
    };



