import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  // console.log(options);
  return options.map(feedbackState => (
    <button
      key={feedbackState}
      name={feedbackState}
      onClick={onLeaveFeedback}
      type="button"
    >
      {feedbackState}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
