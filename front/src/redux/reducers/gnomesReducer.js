
const initialSate ={
    gnomes: [],
    selectedGnome: -1
};

export default (state = initialSate, action)=>{


    switch (action.type) {
        case "FETCH_GNOMES":
            return Object.assign({}, state, { gnomes: action.payload });
        case "SELECT_GNOME":
            console.log(action.payload)
            return Object.assign({}, state, { selectedGnome: action.payload });
        default:
            return state;
    }
}


