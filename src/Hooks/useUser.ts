import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

import {
  PropertyProps,
  UserInfoProps,
  UsersItemProps,
  UsersProps,
} from '../models/user'
import { RootState } from '../store/store'
import {
  changeUserInfo as storeUserInfo,
  changeProperties as storeProperties,
  changeCurrentProperty as storeCurrentProperty,
} from '../store/slices/userSlice'
import {
  changeHousekeepingStatus as storeHousekeeping,
  changeCurrentHousekeepingStatus as storeCurrentHouskeeping
  
} from '../store/slices/HouskeepingSlice'
import { changeAllowed } from '../store/slices/deviceSlice'
import { getHotels, getUserInfo, getUsers, useGetHousekeepingStatus, useGetRooms, useGetReservations, getReservation } from './api'
import { useProgress } from '../Components/ProgressHud/ProgressContext'
import { useInterval } from '.'
import { refreshTime } from '../models/constants'
import { HousekeepingStatusProps } from '../models/housekeeping'
import { RoomProps, RoomTypesProps } from '../models/room'
import { ReservationInterface } from '../store/slices/reservationSlice'
import { ReservationProps } from '../models/reservation'

export default function useUser(refresh = false) {
  const dispatch = useDispatch()
  const { user, properties, currentProperty } = useSelector(
    (state: RootState) => state.user,
  )
  const { isAllowed } = useSelector((state: RootState) => state.device)
  const {housekeepingstatus, currentHousekeepingstatus, completed} = useSelector((state: RootState)=> state.housekeeping)
  const { showProgress, hideProgress } = useProgress()
  const [startInterval, stopInterval] = useInterval()

  const [loading, setLoading] = useState<boolean>(false)

  const changeUserInfo = useCallback(
    (userInfo: UserInfoProps) => {
      dispatch(storeUserInfo(userInfo))
    },
    [dispatch],
  )

  const changeCurrentProperty = useCallback(
    (property: PropertyProps) => {
      dispatch(storeCurrentProperty(property))
    },
    [dispatch],
  )

  const changeAllowPermission = useCallback(
    (allow: boolean) => {
      dispatch(changeAllowed(allow))
    },
    [dispatch],
  )


  const changeProperties = useCallback(
    (pros: PropertyProps[]) => {
      dispatch(storeProperties(pros))
    },
    [dispatch],
  )

  const changeHousekeeping = useCallback(
    (housekeeping : HousekeepingStatusProps[]) => {
      dispatch(storeHousekeeping(housekeeping))
    }, 
    [dispatch],
  )

  const changeCurrentHousekeeping = useCallback(
    (currentHousekeeping : HousekeepingStatusProps[] )=>{
      dispatch(storeCurrentHouskeeping(currentHousekeeping))
    }, 
    [dispatch]
  )

  const fetchUsers = useCallback(
    async (showLoader = false) => {
      setLoading(true)

      if (showLoader) {
        showProgress('Loading...')
      }

      try {
        let userInfo: UserInfoProps = await getUserInfo()
        let users: UsersProps = await getUsers()

        const fn = _.spread(_.union)
        const mergedUsers = (fn(Object.values(users)) || []) as UsersItemProps[]
        const filteredUser = mergedUsers.find(
          item => item?.userID === userInfo?.user_id,
        )

        if (filteredUser?.propertyId) {
          userInfo = await getUserInfo({
            property_id: filteredUser?.propertyId,
            role_details: true,
          })
          userInfo = { ...userInfo, ...filteredUser }
        }

        const hotels: PropertyProps[] =
          (await getHotels({ pageNumber: 1, pageSize: 100 })) || []
         

        changeProperties(hotels || [])

        



        

        const cProperty = hotels.find(
          h =>
            h?.propertyID?.toString() === filteredUser?.propertyId?.toString(),
        )


        // const reservation: ReservationProps[] = (await useGetReservations({
        //   status: 'checked_in',
        //   roomName: '563374-1'})) || []
        //    console.log('reservation:', reservation)

        //  const creservation: ReservationProps [] = (await getReservation({
          
        //   reservationID: '0868206565471'})) || []
        //      console.log('reservationssasa:', creservation)





       
        const rooms: RoomTypesProps[] = (await useGetRooms())|| []
        // console.log('Rooms: ', rooms)


        const cRooms = rooms.find(
          r => r.propertyID?.toString() === cProperty?.propertyID?.toString(),
        )
        // console.log(cRooms)
        
       

       
        
        changeCurrentProperty(cProperty!)

        changeUserInfo(userInfo)

        const housekeepingStatus: HousekeepingStatusProps[] =  (await useGetHousekeepingStatus()) || []

        const currentHousekeeping: HousekeepingStatusProps[] = housekeepingStatus.filter( k => 
          k?.housekeeperID?.toString()=== '47287')

          if (cRooms) {
            
          
            const commonRoomsWithPropertyName = housekeepingStatus
              .filter(housekeeping =>
                cRooms.rooms?.some(room =>
                  housekeeping.roomID?.toString() === room.roomID?.toString()
                )
              )
              .map(item => ({
                ['propertyName']: cProperty?.propertyName ,
                ...item,
              }));
          
            // console.log('Common rooms with property name:', commonRoomsWithPropertyName);
            changeHousekeeping(commonRoomsWithPropertyName || [])
          }
          
        changeCurrentHousekeeping( currentHousekeeping || [])

        

        // const currentRooms: RoomProps[]= (await useGetRooms()) || []
        // console.log('Rooms: ', currentRooms.map( e => console.log(e)))



        setLoading(false)
        hideProgress()
      } catch (error) {
        setLoading(false)
        hideProgress()
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [changeCurrentProperty, changeProperties, changeUserInfo],
  )

  const clearTimers = useCallback(() => {
    stopInterval()
  }, [stopInterval])

  const startCycling = useCallback(() => {
    if (refresh) {
      startInterval(() => {
        fetchUsers()
      }, refreshTime)
    }
  }, [fetchUsers, refresh, startInterval])

  useEffect(() => {
    startCycling()

    return () => {
      clearTimers()
    }
  }, [clearTimers, startCycling])

  return {
    loading,
    user,
    properties,
    currentProperty,
    isAllowed,
    housekeepingstatus,
    fetchUsers,
    changeCurrentProperty,
    changeAllowPermission,
    changeProperties,
    changeHousekeeping,
  }
}
