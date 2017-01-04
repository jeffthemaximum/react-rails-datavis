import React from 'react';
import ReactOnRails from 'react-on-rails';
import HomeContainer from '../containers/HomeContainer';
import ButtonChoice from './ButtonChoice';

function InputChoiceComponent(props){
    
    const choice = props.choice;
    let inputForm;

    switch (choice) {
        case 2:
            inputForm = <HomeContainer/>
            break;
        default:
            inputForm = <ButtonChoice
                            choice={choice}
                            onClick={props.onClick}/>
            break;
    }

    return(
        <div>
            {inputForm}
        </div>
    )
}

module.exports = InputChoiceComponent;