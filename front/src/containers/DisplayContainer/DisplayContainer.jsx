import React, { Component } from 'react'
import { connect } from 'react-redux'


import GnomesListContainer from '../GnomesList/GnomesListContainer'

export class DisplayContainer extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>                                                                                    
                <GnomesListContainer props={this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer)
