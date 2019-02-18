import axios from 'axios'

export const fetchGnomes = () => dispatch => {

    axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
    .then(res=> 
        dispatch({
            type: "FETCH_GNOMES",
            payload: res.data.Brastlewark
        }) 
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

export const fetchGnomeFriends = (gnomes) => {
    return dispatch => {
        dispatch({
            type: "FETCH_FRIENDS",
            payload: gnomes
        })
    }
}