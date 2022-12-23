/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { Breadcrumbs } from '../lib';

class App extends Component {

    constructor() {
        super();
        this.state = {
            items: [
              {label: 'First'},
              {label: 'Second'},
              {label: 'Third'},
            ],
            value: 'Second'
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <Breadcrumbs
                    setProps={this.setProps}
                    {...this.state}
                />
                <div>
                  <h3>{this.state.value}</h3>
                  <p>This is the {this.state.value.toLowerCase()} page.</p>
                </div>
            </div>
        )
    }
}

export default App;
