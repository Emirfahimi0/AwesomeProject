import axios from "axios";

import { LOAD_USER, USER_FAIL, USER_REQUEST, USER_SUCCESS } from "../constants/userConstant";

export const getUser  = () =>async (dispatch) => {
    try {
        dispatch({type:USER_REQUEST})
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

        dispatch({type: USER_SUCCESS,
            payload:data})
            console.log("Payload:",data)
    } catch (error) {

        dispatch({
            type: USER_FAIL,
            payload: error
        })
        
    }
}

export const loadUser  = (user_id:number) =>async (dispatch) => {
    try {
        dispatch({type:USER_REQUEST})
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/?id=${user_id}`)
        console.log("load user data",data)

        dispatch({
            type:LOAD_USER,
            payload:data})
    } catch (error) {

        dispatch({
            type: USER_FAIL,
            payload: error
        })
        
    }
}

export const updateLoader = () => async (dispatch) => {

    
    
        
}