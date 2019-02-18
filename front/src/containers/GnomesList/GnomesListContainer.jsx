import React, { Component } from 'react'
import {connect} from 'react-redux'

import {fetchGnomes, selectGnome} from '../../redux/actions/gnomesActions'


import GnomesList from '../../components/GnomesList'

class GnomesListContainer extends Component {
    constructor(props) {
        super(props)
        this.handleClickGnome = this.handleClickGnome.bind(this)
    }

    componentDidMount() {
        if(this.props.gnomesList.gnomes.length == 0){
            this.props.fetchGnomes()
       }
    }

    handleClickGnome(gnomeID){
        this.props.selectGnome(gnomeID)
        this.props.history.push('/Gnome/' + gnomeID)
    }
    

    render() {  
        let filteredGnomes = this.props.gnomesList.filteredGnomes;
        
        return (
            <div>
                { 
                    filteredGnomes.length > 0 ? 
                        <GnomesList gnomesList={filteredGnomes} handleClickGnome={this.handleClickGnome} /> :
                    this.props.gnomesList.gnomes.length > 0  ? 
                        <GnomesList gnomesList={this.props.gnomesList.gnomes} handleClickGnome={this.handleClickGnome} />
                    : <h2 style={{textAlign: "center", color: "#3f3f3f"}}>Loading...</h2>    
                }
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        gnomesList: state.gnomes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGnomes:function(){
            dispatch(fetchGnomes())
        },
        selectGnome:function(gnomeID){
            dispatch(selectGnome(gnomeID))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GnomesListContainer)


