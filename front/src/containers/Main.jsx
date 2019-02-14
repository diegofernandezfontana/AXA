import React, { Component } from 'react';

import GnomesListContainer from './GnomesList/GnomesListContainer'

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Welcome to Brastlewark</h1>
                <GnomesListContainer/>
            </div>
        );
    }
}

export default Main;