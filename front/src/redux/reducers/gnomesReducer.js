
const initialSate ={
    gnomes: [],
    selectedGnome: {},
    filteredGnomes: [],
    gnomeFriends: [],

};

export default (state = initialSate, action)=>{


    switch (action.type) {
        case "FETCH_GNOMES":
            return Object.assign({}, state, { gnomes: action.payload });

        case "SELECT_GNOME":
            return Object.assign({}, state, {  selectedGnome: state.gnomes[action.payload] });
        
        case "FETCH_GNOME_BY_ID":
            return Object.assign({}, state, {  selectedGnome: action.payload });
    
        case "FILTER_GNOMES":
            return Object.assign({}, state, {  filteredGnomes: action.payload });
        
        case "SET_FRIENDS":
            return Object.assign({}, state, {  gnomeFriends: action.payload });
        
        case "GNOMES_FRIENDS_BY_ID":
            return Object.assign({}, state, {  gnomeFriends: action.payload });
        
        case "FETCH_PROFESSIONS":
            return Object.assign({}, state, {  professions: action.payload });
        
        
        default:
            return state;
    }
}


