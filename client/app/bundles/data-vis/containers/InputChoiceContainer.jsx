import React from 'react';
import InputChoiceComponent from '../components/InputChoiceComponent';

const InputChoiceContainer = React.createClass({
    getInitialState(){
        return {
            choice: null
        }
    },
    handleClick(event){
        event.preventDefault();
        var choice = Number($(event.target).attr('id'));
        this.setState({
            choice: choice
        })
    },
    render() {
        return(
            <InputChoiceComponent
                onClick={this.handleClick}
                choice={this.state.choice}/>
        )
    }
});

module.exports = InputChoiceContainer;