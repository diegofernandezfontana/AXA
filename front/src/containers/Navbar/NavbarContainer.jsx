import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import _ from 'lodash'

import { filterGnomes } from '../../redux/actions/gnomesActions'

import styles from './styles.css'

class NavbarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterWord: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        this.setState({
            filterWord: evt.target.value
        })
    }
    filterItems(filterArr, word){
        let filterItems = [];
        filterArr.filter(gnome => {
            if(gnome.age == parseInt(word)){
                filterItems.push(gnome);
            } else if(gnome.name.toLowerCase().indexOf(word.toLowerCase()) > -1){
                filterItems.push(gnome);
            } else if(gnome.professions.length > 0){
                gnome.professions.map(profession => {
                    if(profession.toLowerCase() == word.toLowerCase()){
                        filterItems.push(gnome);
                    }
                });
            }
        })
        return _.uniqBy(filterItems, 'id');
    }

    handleSubmit(evt) {
        evt.preventDefault();
     
        let filteredGnomes = [];
        filteredGnomes = this.filterItems(this.props.gnomesList, this.state.filterWord);
        this.props.filterGnomes(filteredGnomes)
    }

    render() {

        return (
            <div className={styles.navbarTop}>
                <nav>
                    <div className={styles.title}>
                       <Link to="/"> Brastlewark</Link>
                    </div>
                    <div className={styles.navForm}>
                        <form onSubmit={this.handleSubmit}>
                            <input type="name"  value={this.state.filterWord} onChange={this.handleChange} />
                            <button>Search</button>
                        </form>
                    </div>

                </nav>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return {
        gnomesList: state.gnomes.gnomes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterGnomes:function(arrGnomes){
            dispatch(filterGnomes(arrGnomes))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)


