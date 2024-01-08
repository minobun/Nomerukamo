import * as React from 'react';

const ControlPanel = (onClick: () => void) => {
    return (
        <div className="control-panel">
            <h3 onClick={onClick}>検索</h3>
        </div>
    );
}

export default React.memo(ControlPanel);