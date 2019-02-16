import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SingleGnomeContainer extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>SOY SINGLE</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SingleGnomeContainer)
