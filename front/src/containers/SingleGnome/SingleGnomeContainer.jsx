import React, { Component } from 'react'
import { connect } from 'react-redux'

import SingleGnome from '../../components/SingleGnome'

import { fetchGnomeFriends, selectGnome, gnomesFriend, gnomeFriendsbyId, fetchGnomes, fetchGnomeByID} from '../../redux/actions/gnomesActions'

import _ from 'lodash'


class SingleGnomeContainer extends Component {
    constructor(props){
        super(props)

        this.changeGnome = this.changeGnome.bind(this)
    }
    componentWillMount(){
        console.log(this.props, 'willmount')
        let url = this.props.match.url.split('/');
        if(this.props.gnomesList.length == 0){
            this.props.fetchGnomeByID(url[2])
            this.props.fetchGnomes()
            this.props.gnomeFriendsbyId(url[2])
        }else{
            this.props.gnomeFriendsbyId(url[2])
        }
    }

    componentWillUpdate(){
        console.log(this.props.gnomeFriends)
        if(this.props.gnomeFriends.length != 0 && this.props.gnomesList.length != 0){
            this.props.gnomesFriend(this.props.gnomeFriends, this.props.gnomesList)

        }
    }

    componentDidMount(){
        let url = this.props.match.url.split('/');
        this.props.fetchGnomeFriends(url[2])
    }
    
    changeGnome(gnomeID){
        //When clicked on a friend, sets the selectedGnome to the new and sets the friends to the new gnome friends.
        this.props.selectGnome(gnomeID)
        this.props.history.push('/Gnome/' + gnomeID)
        this.props.gnomeFriendsbyId(gnomeID)
    }
    
    render() {
        let selectedGnome = this.props.selectedGnome;
        let friendsArr = this.props.gnomeFriends;
        return (
            <div>
                <SingleGnome selectedGnome={selectedGnome} friendsArr={friendsArr} changeGnome={this.changeGnome}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedGnome: state.gnomes.selectedGnome,
    gnomesList: state.gnomes.gnomes,
    gnomeFriends: state.gnomes.gnomeFriends,
    professions: state.gnomes.professions

})

const mapDispatchToProps = dispatch => {
    return{
        fetchGnomeFriends:function(friends){
            dispatch(fetchGnomeFriends(friends))
        },
        selectGnome:function(gnomeID){
            dispatch(selectGnome(gnomeID))
        },
        fetchGnomes:function(){
            dispatch(fetchGnomes())
        },
        fetchGnomeByID:function(gnomeID){
            dispatch(fetchGnomeByID(gnomeID))
        },
        gnomesFriend:function(arr,arrGnomes){
            dispatch(gnomesFriend(arr, arrGnomes))
        },
        gnomeFriendsbyId:function(gnomeID){
            dispatch(gnomeFriendsbyId(gnomeID))
        }
        
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleGnomeContainer)
