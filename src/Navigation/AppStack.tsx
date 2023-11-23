import React, { useCallback, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from 'react-native-splash-screen'
import { useTheme } from 'native-base'

import { useUser, useAuth, useLocation } from '../Hooks'

import { isMountedRef, navigationRef } from './navigationUtils'
import Routes from './routesNames'
import { renderHeader } from './header'
import MainStack from './MainStack'
import Indicator from '../Components/ProgressHud/Indicator'
import { notificationService } from '../Services/NotificationService'
import renderModals from './modals'

import Login from '../Screens/PrevSecreen/Auth/Login'
import ReservationList from '../Screens/PrevSecreen/ReservationList'
import SelectProperty from '../Screens/PrevSecreen/SelectProperty'
import AllowPermissions from '../Screens/PrevSecreen/AllowPermissions'
import AddNote from '../Screens/PrevSecreen/AddNote'
import Rooms from '../Screens/PrevSecreen/Housekeeping/Rooms'
import ReportIssue from '../Screens/PrevSecreen/Settings/ReportIssue'
import TakePayment from '../Screens/PrevSecreen/TakePayment'
import CustomizeList from '../Components/lists/CustomizeLists/CustomizeList'
import SortList from '../Components/lists/CustomizeLists/SortList'
import PropertiesList from '../Components/lists/CustomizeLists/PropertiesList'

const Stack = createStackNavigator()

const AppStack = () => {
  const { tokenData, getAuthSession, loading } = useAuth()
  const { properties, isAllowed, fetchUsers, changeHousekeeping } = useUser(true)
  const { getCurrentLocation } = useLocation()
  const { colors } = useTheme()

  const accessToken = tokenData?.accessToken

  const bootstrapAsync = async () => {
    try {
      await getAuthSession()
    } catch (e) {
      // Restoring token failed
    }
  }

  useEffect(() => {
    const mounted = async () => {
      isMountedRef.current = true

      return () => (isMountedRef.current = false)
    }

    mounted()

    bootstrapAsync()
  })

  useEffect(() => {
    if (accessToken) {
      fetchUsers(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken])

  useEffect(() => {
    if (accessToken && isAllowed) {
      requestPermissions()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, isAllowed])

  const requestPermissions = useCallback(async () => {
    try {
      await getCurrentLocation()
      await notificationService.requestNotificationPermission()
    } catch (error) {}
  }, [getCurrentLocation])

  const isLoggedIn = !!accessToken
  const allowProperty = !isAllowed && properties?.length > 1
  const permissionAllow = !isAllowed && properties?.length === 1

  const isLoading =
    isLoggedIn && !isAllowed && !allowProperty && !permissionAllow

  if (!loading) {
    SplashScreen.hide()
  }

  if (isLoading) {
    return <Indicator />
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoggedIn ? (
        <Stack.Navigator
          screenOptions={({ navigation }) => {
            return {
              ...renderHeader({ navigation, color: colors.primary['100'] }),
            }
          }}>
          {allowProperty ? (
            <Stack.Screen
              name={Routes.SelectProperty}
              component={SelectProperty}
              options={{ title: 'Select a Property', headerShown: true }}
            />
          ) : permissionAllow ? (
            <Stack.Screen
              name={Routes.AllowPermissions}
              component={AllowPermissions}
              options={{ title: 'Allow App Permissions', headerShown: true }}
            />
          ) : (
            <Stack.Group>
              <Stack.Screen name={Routes.Main} component={MainStack} />
           

             

            </Stack.Group>
          )}

          {renderModals(Stack)}
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Routes.Login} component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}

export default AppStack
