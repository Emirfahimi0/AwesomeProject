import { Dispatch } from "redux";

import { BANKRUPT, DEPOSIT, WITHDRAWAL } from "../constants/bankConstant";

interface DepositAction {
    type: "DEPOSIT",
    payload: number;

}

interface WithdrawAction {
    type: "WITHDRAWAL",
    payload: number;

}
interface BankruptAction {
    type: "BANKRUPT",

}

type Action = DepositAction | WithdrawAction | BankruptAction

export const DepositBank =(amount:number) => {
    return (dispatch :Dispatch<Action>) => {
        dispatch({
            type: DEPOSIT,
            payload: amount , 
        })
    }
}
export const WithdrawalBank =(amount:number) => {
    return (dispatch :Dispatch <Action>) => {
        dispatch({
            type: WITHDRAWAL,
            payload: amount, 
        })
    }
}
export const BankruptBank =() => {
    return (dispatch :Dispatch<Action>) => {
        dispatch({
            type: BANKRUPT,
                })
    }
}