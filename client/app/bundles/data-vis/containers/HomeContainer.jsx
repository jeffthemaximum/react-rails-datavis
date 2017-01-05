import React from 'react';
import HomeComponent from '../components/HomeComponent';
import {csvStringToJson} from '../helpers/csvHelpers';

const HomeContainer = React.createClass({
    getInitialState(){
        return {
            formatting: true,
            jsonData: "",
            yourName: "Jerf",
        }
    },
    handleSubmit(event){
        event.preventDefault();
        var input = $(event.target).find("textarea").val();
        var resp = csvStringToJson(input);
        console.log(resp)
    },
    render(){
        return(
            <HomeComponent
                data= {this.state}
                name = {this.state.yourName}
                onSubmit={this.handleSubmit}/>
        )

    }
});

module.exports = HomeContainer;