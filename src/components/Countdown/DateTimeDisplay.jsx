import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
    // console.log(value == value)
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p>{value}</p>
            {/* <span>{type}</span> */}
        </div>
    );
};

export default DateTimeDisplay;
