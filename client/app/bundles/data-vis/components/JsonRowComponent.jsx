import React from 'react';

function JsonRowComponent(props){
    debugger;
    return (
        <div>
            {props.jsonData.map(function(row){
                return (<p>
                    {row}
                </p>)
            })}
        </div>
    )
}

module.exports = JsonRowComponent;