
const initialSate ={
    gnomes: [],
    selectedGnome: {},
    filteredGnomes: [],
    gnomeFriends: []
};

export default (state = initialSate, action)=>{


    switch (action.type) {
        case "FETCH_GNOMES":
            return Object.assign({}, state, { gnomes: action.payload });
        case "SELECT_GNOME":
            return Object.assign({}, state, {  selectedGnome: state.gnomes[action.payload] });
        
        case "FILTER_GNOMES":
            return Object.assign({}, state, {  filteredGnomes: action.payload });
        
        case "FETCH_FRIENDS":
        console.log("REDUCER FETCH")
            return Object.assign({}, state, {  gnomeFriends: action.payload });
        
        
        default:
            return state;
    }
}


