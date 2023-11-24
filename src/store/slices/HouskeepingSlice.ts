import { createSlice } from "@reduxjs/toolkit";
import {HousekeepingStatusProps} from '../../models/housekeeping'


export interface HousekeepingInterface {
    housekeepingstatus: HousekeepingStatusProps | null
    currentHousekeepingstatus: HousekeepingStatusProps | null
    completed : HousekeepingStatusProps[] | []
}

const initialState: HousekeepingInterface= {
    housekeepingstatus: null,
    currentHousekeepingstatus: null,
    completed: [],
}

const housekeepingSlice = createSlice({
    name: 'houskeeping',
    initialState,
    reducers: {
        changeHousekeepingStatus(state: HousekeepingInterface, action){
            state.housekeepingstatus = action.payload
        },
        changeCurrentHousekeepingStatus(state: HousekeepingInterface, action ){
            state.currentHousekeepingstatus = action.payload
        },

        changeCompleted(state: HousekeepingInterface, action){
            state.completed = action.payload
        },

        clearHousekeeping(){
            return initialState
        }
    }
})

export const {
    changeHousekeepingStatus,
    clearHousekeeping,
    changeCurrentHousekeepingStatus,
    changeCompleted,
} = housekeepingSlice.actions


export default housekeepingSlice.reducer