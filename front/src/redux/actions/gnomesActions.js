export const fetchGnomes = () => dispatch => {
    console.log("ESTOY ENTRANDO ACA")
    fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
    .then(res => res.json())
    .then(res=> 
        dispatch({
            type: "FETCH_GNOMES",
            payload: res
        }) 
    )
}