import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak } from "../actions/kontakAction";

const Hp = () => {

    const {getListKontak} = useSelector((state)=> state.kontakReducer)
    const dispatch = useDispatch()

    useEffect(() => {

        //panggil action getlistkontak

        console.log("1. masuk pak eko");

        dispatch(getListKontak())


        
    }, [dispatch])

    return(
        <div>

        </div>
    )
}
export default Hp