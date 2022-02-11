import axios from 'axios'
import {
  requestHeaderWithoutToken
} from 'shared/utils/requestHeader'
import URL from './constants'



export const loginUser = async body => {
  const result = await axios.post(
    URL.baseApiUrl() + URL.auth.loginUser,
    {
      ...body,
    },
    requestHeaderWithoutToken(),
  )
  return result.data
}

export const logoutUser = async body => {
    const result = await axios.post(
      URL.baseApiUrl() + URL.auth.logoutUser,
      {
        ...body,
      },
    )
    return result.data
  }



