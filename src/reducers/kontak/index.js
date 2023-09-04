import { GET_lIST_KONTAK } from "../../actions/kontakAction"


const initialState = {
getListKontakResult: false,
getListKontakLoading: true,
getListKontakError: false


}

const kontak = (state = initialState, action) => {

    switch(action.type){
        case GET_lIST_KONTAK:
            return{
                ...state,
                getListKontakResult: action.payload.data,
                getListKontakLoading: action.payload.loading,
                getListKontakError: action.payload.errorMessage
                
            }
        default:
            return state
    }
}

export default kontak
