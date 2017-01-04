import React from 'react';
import HomeComponent from '../components/HomeComponent'

const HomeContainer = React.createClass({
    getInitialState(){
        return {
            formatting: true,
            jsonData: "",
            yourName: "Jerf",
        }
    },
    render(){
        return(
            <HomeComponent
                data= {this.state}
                name = {this.state.yourName}/>
        )

    }
});

module.exports = HomeContainer;