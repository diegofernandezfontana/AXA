import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import SingleGnomeContainer from './SingleGnome/SingleGnomeContainer'
import DisplayContainer from './DisplayContainer/DisplayContainer'
import NavbarContainer from './Navbar/NavbarContainer'
import NotFound from '../components/NotFound'
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <div>

                <NavbarContainer/>  
                <Switch>
                    <Route exact path="/" component={DisplayContainer}/>
                    <Route exact path="/Gnome/:id" component={SingleGnomeContainer}/>
                    <Route path="/*" component={NotFound}/>
                </Switch>

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