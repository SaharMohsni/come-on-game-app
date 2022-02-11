import moment from 'moment'

export const requestHeaderWithoutToken = () => ({
  headers: {
    'Accept-Language': `en-US`,
    'Access-Control-Allow-Origin': '*',
    'X-Timezone': `${moment().utcOffset()}`,
    Origin: window.location.origin,
  },
})



