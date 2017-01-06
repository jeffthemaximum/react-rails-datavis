import React from 'react';
import ReactOnRails from 'react-on-rails';

import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';

import BaseComponent from 'libs/components/BaseComponent';
import JsonRowComponent from './JsonRowComponent';

function HomeComponent(props){
    const {jsonData} = props.data;
    return(
        <div>
            <h1>DataVis!</h1>
            <form
                onSubmit = {props.onSubmit}>
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
            <div>
                {
                    jsonData ?
                    <JsonRowComponent
                        jsonData={jsonData}/>
                    :
                    <h4>Paste some csv text above to test it out!</h4>

                }
            </div>
        </div>
    )
}
module.exports = HomeComponent;
