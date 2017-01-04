import React from 'react';
import ReactOnRails from 'react-on-rails';

function InputChoiceComponent(props){
    return(
        <div>
            <button type="button" className="btn btn-primary btn-lg btn-block" id="1">Copy/paste Json</button>
            <button type="button" className="btn btn-primary btn-lg btn-block" id="2">Copy/paste CSV</button>
            <button type="button" className="btn btn-primary btn-lg btn-block" id="3">Upload CSV</button>
        </div>
    )
}

module.exports = InputChoiceComponent;