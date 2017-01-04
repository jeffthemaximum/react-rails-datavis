import React from 'react';
import ReactOnRails from 'react-on-rails';

import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';

import BaseComponent from 'libs/components/BaseComponent';

function HomeComponent(props){
    return(
        <div>
            <h1>DataVis!</h1>
            <form
                onSubmit = {props.onUserSubmit}>
                <div className="form-group">
                    <textarea
                        placeholder="stick your json here."
                        className="form-control"
                        rows="3"/>
                    <button
                        type="submit"
                        className="btn btn-primary">
                        submit
                    </button>
                </div>
            </form>
            <h2>The name from our props is {props.name}</h2>
        </div>
    )
}
module.exports = HomeComponent;
