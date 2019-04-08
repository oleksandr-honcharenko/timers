// /* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const propTypes = {
  onClick: PropTypes.func,
  timers: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string,
    working: PropTypes.bool,
  })),
};

const defaultProps = {
  onClick: PropTypes.func,
  timers: [],
};

const TimersField = ({ timers, onClick }) =>
  (
    <div className="timers">
      {
        timers.map((item, itemNumber) => {
          if (item.working === false) {
            return null;
          }
          return (
          // eslint-disable-next-line react/no-array-index-key
            <div key={itemNumber} className="timer">
              <Button
                className="btn-dismiss"
                onClick={() => onClick(itemNumber)}
              >
                {'X'}
              </Button>
              <span>
                {`Timer №${itemNumber + 1}`}
                <span className="actualTime">
                  {item.time}
                </span>
              </span>
            </div>
          );
        })
      }
    </div>
  );

TimersField.propTypes = propTypes;
TimersField.defaultProps = defaultProps;

export default TimersField;
