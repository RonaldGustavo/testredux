import axios from "axios";

export const GET_lIST_KONTAK = 'GET_LIST_KONTAK'

export const getListKontak = ()=> {
    console.log("2. masuk action");
    return(dispatch) => {
    
    //loading
    // dispatch({
    //     type: GET_lIST_KONTAK,
    //     payload: {
    //         loading: false,
    //         data: false,
    //         errorMessage: false
    //     }
    // })


    // Get API
    axios({
        method: "GET",
        url: "https://64db7a91593f57e435b105e8.mockapi.io/customers",
        timeout: 12000
    }).then(response => {

        console.log("3. berhasil dapat data: " , response.data);
        //berhasil get api
        
        dispatch({
            type: GET_lIST_KONTAK,
            payload: {
                loading: false,
                data: response.data,
                errorMessage: false
            }
        })

    }).catch(error => {

        console.log("3. gagal  dapat data: " , error);

        //gagal get api

        dispatch({
            type: GET_lIST_KONTAK,
            payload: {
                loading: false,
                data: false,
                errorMessage: error.message
            }
        })

    })

    }
}