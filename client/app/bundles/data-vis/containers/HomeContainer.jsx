import React from 'react';
import HomeComponent from '../components/HomeComponent';
import {csvStringToJson} from '../helpers/csvHelpers';

const HomeContainer = React.createClass({
    getInitialState(){
        return {
            formatting: true,
            jsonData: null,
            yourName: "Jerf",
        }
    },
    handleSubmit(event){
        event.preventDefault();
        var input = $(event.target).find("textarea").val();

        csvStringToJson(input, function(resp){
            this.setState({
                jsonData: resp
            });
        }.bind(this)); 
    },
    render(){
        return(
            <HomeComponent
                data= {this.state}
                name = {this.state.yourName}
                onSubmit={this.handleSubmit}
                jsonData={this.state.jsonData}/>
        )

    }
});

module.exports = HomeContainer;