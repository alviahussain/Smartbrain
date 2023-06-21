import React from "react";

const Rank = ({name, entries}) => {
    return (
        <div className="pa0 ma0">
            <div className="white f5 mt0">
                {name+', your current entries is...'}
            </div>
            <div className="white f2">
                {entries}
            </div>
        </div>
    );
}

export default Rank;