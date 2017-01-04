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
    handleUserSubmit(event){
        event.preventDefault();
        var input = $(event.target).find("textarea").val();
        console.log(input);
    },
    render() {
        <InputChoiceComponent />
    }
    // render(){
    //     console.log(this.state);
    //     return(
    //         <HomeComponent
    //             data= {this.state}
    //             name = {this.state.yourName}
    //             onUserSubmit = {this.handleUserSubmit}/>
    //     )

    // }
});

module.exports = HomeContainer;