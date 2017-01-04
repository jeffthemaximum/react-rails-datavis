import React from 'react';
import ReactOnRails from 'react-on-rails';

function ButtonChoice(props){
    return(
        <div>
            { (props.choice === 1 || props.choice == 3) &&
                <h3>Not implemented yet :(</h3>
            }
            <button onClick={props.onClick} type="button" className="btn btn-primary btn-lg btn-block" id="1">Copy/paste Json</button>
            <button onClick={props.onClick} type="button" className="btn btn-primary btn-lg btn-block" id="2">Copy/paste CSV</button>
            <button onClick={props.onClick} type="button" className="btn btn-primary btn-lg btn-block" id="3">Upload CSV</button>
        </div>
    )
}

module.exports = ButtonChoice;