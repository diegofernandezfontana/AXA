import React, { Component } from 'react'
import { connect } from 'react-redux'

import SingleGnome from '../../components/SingleGnome'

import { fetchGnomeFriends, selectGnome} from '../../redux/actions/gnomesActions'

import _ from 'lodash'


class SingleGnomeContainer extends Component {
    constructor(props){
        super(props)

        this.changeGnome = this.changeGnome.bind(this)
    }

    componentDidMount(){
        let arrayFriends = this.props.selectedGnome.friends
        if(arrayFriends.length > 0){
            this.searchFriends(arrayFriends, this.props.gnomesList)
        } else{
            this.props.fetchGnomeFriends([])
        }
    }

    changeGnome(gnomeID, nextGnome){
        //When clicked on a friend, sets the selectedGnome to the new and sets the friends to the new gnome friends.
        this.props.selectGnome(gnomeID)
        this.searchFriends(nextGnome.friends, this.props.gnomesList)
    }

    searchFriends(friendsArray, gnomesList){
        let arrFriends = []
        _.filter(friendsArray, function(friend){
            _.filter(gnomesList, function(gnome){
                if(friend == gnome.name){
                    arrFriends.push(gnome)
                }
            })
        })
        
        this.props.fetchGnomeFriends(arrFriends)
    }

    render() {
        let selectedGnome = this.props.selectedGnome;
        let friendsArr = this.props.gnomeFriends;
        
        return (

            <SingleGnome selectedGnome={selectedGnome} friendsArr={friendsArr} changeGnome={this.changeGnome}/>
           
        )
    }
}

const mapStateToProps = (state) => ({
    selectedGnome: state.gnomes.selectedGnome,
    gnomesList: state.gnomes.gnomes,
    gnomeFriends: state.gnomes.gnomeFriends
})

const mapDispatchToProps = dispatch => {
    return{
        fetchGnomeFriends:function(friends){
            dispatch(fetchGnomeFriends(friends))
        },
        selectGnome:function(friends){
            dispatch(selectGnome(friends))
        },
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleGnomeContainer)
