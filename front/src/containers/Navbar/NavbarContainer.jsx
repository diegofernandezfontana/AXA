import React, { Component } from 'react'

class NavbarContainer extends Component {
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(evt){
        evt.preventDefault();
        console.log("Estoy entrando aca")
    }

    render() {
        return (
            <div>
                <input type="text"/>
                <button onClick={this.handleSubmit}>Search</button>
            </div>
        )
    }
}

export default NavbarContainer