import { combineReducers } from '@reduxjs/toolkit'

import userSlice from './userSlice'
import deviceSlice from './deviceSlice'
import reservationSlice from './reservationSlice'
import HouskeepingSlice from './HouskeepingSlice'

const rootReducer = combineReducers({
  user: userSlice,
  device: deviceSlice,
  reservation: reservationSlice,
  housekeeping: HouskeepingSlice,
})

export default rootReducer
