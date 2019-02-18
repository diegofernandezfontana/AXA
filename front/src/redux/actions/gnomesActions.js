import axios from 'axios'

import _ from 'lodash'

export const fetchGnomes = () => dispatch => {
    axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
    .then(res=> 
        dispatch({
            type: "FETCH_GNOMES",
            payload: res.data.Brastlewark
        }) 
    )
}

export const fetchGnomeFriends = (arrFriends) => dispatch => {
    return dispatch =>{
        dispatch({
            type: "SET_FRIENDS",
            payload: arrFriends
        }) 
    }
}

export const fetchGnomeByID = (ID) => dispatch => {
    axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
    .then(res=> 
        dispatch({
            type: "FETCH_GNOME_BY_ID",
            payload: res.data.Brastlewark[ID]
        }) 
    )
}


function  searchFriends(friendsArray, gnomesList){
    let arrFriends = []
    _.filter(friendsArray, function(friend){
        _.filter(gnomesList, function(gnome){
            if(friend == gnome.name){
                arrFriends.push(gnome)
            }
        })
    })
    return arrFriends;
}

export const gnomeFriendsbyId = (gnomeID) => dispatch => {
    let gnomesList = [];
    let gnomesFriends = [];
    axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
    .then(res => {

        gnomesFriends = res.data.Brastlewark[gnomeID].friends
        gnomesList = res.data.Brastlewark
        console.log(gnomesList)
        console.log(gnomesFriends)
        let finalArray = [];
        finalArray = searchFriends(gnomesFriends,gnomesList)
        dispatch({
            type: "GNOMES_FRIENDS_BY_ID",
            payload: finalArray
        })
     
    }
        
       
    )
}

export const selectGnome = (gnomeID) => {
    return dispatch => {
        dispatch({
            type: "SELECT_GNOME",
            payload: gnomeID
        })
    }
}

export const filterGnomes = (gnomesArr) => {
    return dispatch => {
        dispatch({
            type: "FILTER_GNOMES",
            payload: gnomesArr
        })
    }
}



export const gnomesFriend = (gnomeFriends, allGnomes) => {
    return dispatch =>{
        dispatch({
            type: "GNOME_FRIENDS",
            payload: gnomeFriends
        })
    }
}

