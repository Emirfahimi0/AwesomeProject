import { Action } from ".";
import { BANKRUPT, DEPOSIT, WITHDRAWAL } from "../../constants/bankConstant";

const initialState = 0

const Bankreducer = (state:number = initialState, action:Action) => {

    switch(action.type){
        case DEPOSIT:
            return state + action.payload
            case WITHDRAWAL:
                return state - action.payload;
             case BANKRUPT:
                    return 0
            default :
                    return state;
    }
    

}

export default Bankreducer