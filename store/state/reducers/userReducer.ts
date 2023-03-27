import { user } from ".";
import { LOAD_USER, USER_FAIL, USER_REQUEST, USER_SUCCESS } from "../../constants/userConstant";

const initialState: IReduxState = {
    user: [{
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }],
    loading: true
}

export interface  IReduxState {
    user: user[];
    loading: boolean;
}

export const userReducer = (state:IReduxState = initialState ,action) =>{
    console.log("check",action)
    switch(action.type){
        case USER_REQUEST:
            return {
                loading:true,
                 user: []
        }
        case LOAD_USER:  
        return{
            ...state,
            user :action.payload,
            loading:false
        }
        case USER_SUCCESS:
            return {
                ...state,
            loading:false,
            user:action.payload
        }
    
        case USER_FAIL:
            return {
                user: null,
                loading :false,
                error:action.payload
            }
        

        default:
            return {...state}
        
    }
}
