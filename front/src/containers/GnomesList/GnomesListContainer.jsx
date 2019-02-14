import React, { Component } from 'react'

import styles from './styles.css'

class GnomesListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gnomesList: []
        }
    }
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
        .then(data => data.json())
        .then(data => this.setState({ gnomesList: data }))
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <div className={styles.gnomesList}>
                    {
                        this.state.gnomesList.length == 0 ? 'Loading' : this.state.gnomesList.Brastlewark.map(gnome => {
                            return (
                                <div key={gnome.id} className={styles.singleGnome}>
                                    <h1> {gnome.name} </h1>
                                    <img src={gnome.thumbnail} alt="" />

                                    {gnome.professions.length >0 ? 
                                        <ul> 
                                            {
                                                gnome.professions.map(profession =>{ 
                                                    return( <li className={styles.gnomeProfession}>{profession}</li>)
                                                })  
                                            }
                                        </ul>
                                     : <p> No profession </p> 
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

export default GnomesListContainer