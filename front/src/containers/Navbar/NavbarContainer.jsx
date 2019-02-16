import React, { Component } from 'react'

import {Link} from 'react-router-dom'

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

    handleSubmit(evt) {
        evt.preventDefault();
        console.log(this.state.filterWord);
        
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

export default NavbarContainer