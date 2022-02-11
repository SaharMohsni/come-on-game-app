import CryptoJS from 'crypto-js'

const ENCRYPTION_KEY = '#base64Key#'
const ENCRYPTION_IV = '#base64IV#'

const key = CryptoJS.enc.Base64.parse(ENCRYPTION_KEY)
const iv = CryptoJS.enc.Base64.parse(ENCRYPTION_IV)

/* Encryption of critical data, mainly for browser local storage usage (e.g. user profile storage) */
export const encryptData = data => CryptoJS.AES.encrypt(data, key, { iv })

/* Decryption of critical data, mainly for browser local storage usage (e.g. user profile storage) */
export const decryptData = data =>
  CryptoJS.AES.decrypt(data, key, { iv }).toString(CryptoJS.enc.Utf8)
