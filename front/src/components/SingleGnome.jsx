import React from 'react'
import styles from '../containers/SingleGnome/styles.css'

import {Link} from 'react-router-dom'

export default ({selectedGnome, friendsArr , changeGnome}) => { 
    return (
        <div className={styles.container}>
        <div className={styles.gnomeImgContainer}>
            <img src={selectedGnome.thumbnail} className={styles.imgGnome} alt=""/>
        </div>
        <div className={styles.gnomeDescription}>
            <h1>{selectedGnome.name}</h1>
            <p><b>Age: </b> <span>{selectedGnome.age} </span></p>
            <p><b>Weight: </b>  <span>{selectedGnome.weight}</span></p>
            <p> <b>Height: </b> <span>{selectedGnome.height}</span></p>

            <ul>
                <p><b>Professions:</b> </p>
                {

                    selectedGnome.professions ? selectedGnome.professions.map((profession, idx) =>{
                        if(selectedGnome.professions.length != (idx + 1)){
                            return <li key={idx}>{profession},</li>
                        } else{
                            return <li key={idx}>{profession}.</li>
                        }
                    })
                    : <li> This gnome has no profession.</li>
                }
            </ul>
            <ul>
                <p> <b>Friends:</b> </p>
                {
                    friendsArr.length > 0 ? friendsArr.map((friend, idx) =>{
                        if(friendsArr.length != (idx + 1)){
                            return (
                            <li key={friend.id} onClick={() => changeGnome(friend.id)}>
                                <Link to={ `/Gnome/2${friend.id}`} >
                                    { friend.name },  
                                </Link>
                            </li>
                            )
                        }else {
                            return (
                                <li key={friend.id} onClick={() => changeGnome(friend.id, friend)}>
                                    <Link to={ `/Gnome/${friend.id}`} >
                                        { friend.name }.
                                    </Link>
                                </li>
                                )
                        }
                    })
                    : <li> This gnome has no Friends.</li>
                }
            </ul>

            <Link to='/'> Go Back</Link>
        </div> 

        
        
    </div>
    )
}