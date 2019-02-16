import React, { Component } from 'react'

import styles from './styles.css'

import {connect} from 'react-redux'

import {fetchGnomes} from '../../redux/actions/gnomesActions'

class GnomesListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gnomesList: [],
            filterWord: ''
        }
    }
    componentDidMount() {
        this.props.fetchGnomes()
    }
    

    render() {  
        console.log(this.props)
        return (
            <div>
                <div className={styles.gnomesList}>
                    {
                        this.props.gnomesList.gnomes.length == 0 ? 'Loading' : this.props.gnomesList.gnomes.Brastlewark.map(gnome => {
                            return (
                                <div key={gnome.id} className={styles.singleGnome}>
                                    <h1> {gnome.name} </h1>
                                    <img src={gnome.thumbnail} alt="" />
                                    {gnome.professions.length >0 ? 
                                        <ul> 
                                            {
                                                gnome.professions.map(profession =>{ 
                                                    return( <li key={profession} className={styles.gnomeProfession}>{profession}</li>)
                                                })  
                                            }
                                        </ul>
                                     : <ul> <li>No profession </li></ul> 
                                    }
                                </div>
                            )
                        })

                    }
                </div>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GnomesListContainer)


