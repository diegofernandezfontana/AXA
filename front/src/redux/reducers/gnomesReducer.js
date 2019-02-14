
const initialSate ={
    gnomes: []
};

export default (state = initialSate, action)=>{


    switch (action.type) {
        case "FETCH_GNOMES":
            return { gnomes: action.payload}
        default:
            return state;
    }
}


