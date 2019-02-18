import React from 'react'
import styles from '../containers/GnomesList/styles.css'

export default ({gnomesList, handleClickGnome}) => {
    return (
        <div>
            <div className={styles.gnomesList}>
                    {
                        gnomesList.length == 0 ? 'Loading' : gnomesList.map(gnome => {
                            return (
                                <div key={gnome.id} className={styles.singleGnome}  onClick={() => handleClickGnome(gnome.id)}>
                                    <div>
                                        <img src={gnome.thumbnail} alt="" />

                                    </div>
                                    <div>
                                        <h1> {gnome.name} </h1>

                                    </div>
                                    <div>

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
                                </div>
                            )
                        })

                    }
            </div>
                
        </div>
    )
}