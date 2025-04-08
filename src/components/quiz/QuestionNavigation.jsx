import React from "react";
import PropTypes from "prop-types";
import Button from "../ui/Button";

const QuestionNavigation = ({
  onPrev,
  onNext,
  onSubmit,
  showPrev,
  showNext,
  showSubmit,
}) => {
  return (
    <div className="question-navigation">
      <div className="navigation-buttons">
        {showPrev && (
          <Button
            type="button"
            onClick={onPrev}
            variant="secondary"
            className="nav-button prev-button"
          >
            Previous
          </Button>
        )}

        {showNext && (
          <Button
            type="button"
            onClick={onNext}
            variant="primary"
            className="nav-button next-button"
          >
            Next
          </Button>
        )}

        {showSubmit && (
          <Button
            type="button"
            onClick={onSubmit}
            variant="primary"
            className="nav-button submit-button"
          >
            Submit Quiz
          </Button>
        )}
      </div>
    </div>
  );
};

QuestionNavigation.propTypes = {
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  showPrev: PropTypes.bool.isRequired,
  showNext: PropTypes.bool.isRequired,
  showSubmit: PropTypes.bool.isRequired,
};

export default QuestionNavigation;
