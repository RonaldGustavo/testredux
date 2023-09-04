import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak } from "../../actions/kontakAction";
import { useNavigate } from "react-router-dom";


const ListKontak = () => {

    const navigate = useNavigate()

    // const { getListKontakResult, getListKontakLoading, getListKontakError } = useSelector((state) => state.kontakReducer)
    const { getListKontakResult, getListKontakLoading, getListKontakError } = useSelector((state) =>  state.kontakReducer)

    // get data dari loginReducer
    const dataEmail = useSelector(state => state.loginReducer.email);
    const dataPassword = useSelector(state => state.loginReducer.password);

    //menampilkan data form
    const name = useSelector((state) => state.formReducer.names); // Pastikan reducer formReducer diakses dengan benar
    const email = useSelector((state) => state.formReducer.emails); // Pastikan reducer formReducer diakses dengan benar


    const dispatch = useDispatch()

    useEffect(() => {

        //panggil action getlistkontak

        console.log("1. use effect component did mount");

        dispatch(getListKontak())
        console.log("data form: ",name);
        console.log("loading is",getListKontakLoading);

    }, [dispatch])


    return (
        <div>
<button onClick={()=> {
    navigate("/form")
}}>form</button>

            {/* menampilkan data loginReducer */}
            <h4>{dataEmail }</h4>
            <h4>{dataPassword}</h4>
            <h4>name form: {name    }</h4>
            <h4>email form: {email    }</h4>

            {getListKontakResult ? (
                getListKontakResult.map(kontak => {
                    return (
                        <>

                        <p key={kontak.id}><b>Nama: </b> {kontak.name} </p>
                        <p><b>Address: </b>{kontak.address}</p>
                        <br />

                        </>
                    
                    )
                }) 
            ) : getListKontakLoading ? (
                
           <p>Loading....</p>
            ) : (
                <p> {getListKontakError ? getListKontakError : "data kosong"} </p>

            )
            }
        </div>
    )
}

export default ListKontak