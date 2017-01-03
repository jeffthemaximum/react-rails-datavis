import React from 'react';
import ReactOnRails from 'react-on-rails';

import BaseComponent from 'libs/components/BaseComponent';

const csv=require('csvtojson');

function HomeComponent(props){
    return(
        <div>
            <h1>Hello World!!!</h1>
            <h3>You're using REACT!!!!</h3>
        </div>
    )
}
const HomeContainer = React.createClass({
    render(){
        return(
            <HomeComponent/>
        )

    }
})

module.exports = HomeContainer;