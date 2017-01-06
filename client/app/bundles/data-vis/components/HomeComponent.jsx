import React from 'react';
import ReactOnRails from 'react-on-rails';

import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';

import BaseComponent from 'libs/components/BaseComponent';
import JsonRowComponent from './JsonRowComponent';

function HomeComponent(props){
    const {defaultCsv, jsonData} = props.data;
    return(
        <div>
            <h1>DataVis!</h1>
            <form
                onSubmit = {props.onSubmit}>
                <div className="form-group">
                    <textarea
                        placeholder="stick your json here."
                        className="form-control"
                        rows="10"
                        defaultValue={defaultCsv}>
                    </textarea>
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
                    <div>
                        <h4>Directions</h4>
                        <p>Paste your CSV data here, or test it out with our sample data!</p>
                    </div>
                }
            </div>
        </div>
    )
}
module.exports = HomeComponent;
