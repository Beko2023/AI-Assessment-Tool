import React from "react";
import PropTypes from "prop-types";

const QuizProgress = ({ current, total }) => {
  return (
    <div className="step-progress">
      <div className="steps">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`step ${i < current ? "completed" : ""} ${
              i === current - 1 ? "active" : ""
            }`}
          >
            <div className="step-marker">{i + 1}</div>
            {i < total - 1 && (
              <div
                className={`step-connector ${
                  i < current - 1 ? "completed" : ""
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

QuizProgress.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuizProgress;
