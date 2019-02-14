import React, { Component } from 'react';

import GnomesListContainer from './GnomesList/GnomesListContainer'
import NavbarContainer from './Navbar/NavbarContainer'
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavbarContainer/>                
                <h1>Welcome to Brastlewark</h1>
                <GnomesListContainer/>
            </div>
        );
    }
}


function mapStateToProps(){
    return {
        
    }
}
function mapDispatchToProps(){
    return {
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Main);