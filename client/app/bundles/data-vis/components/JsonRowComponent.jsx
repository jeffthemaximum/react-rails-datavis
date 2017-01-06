import React from 'react';

function JsonRowComponent(props){
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