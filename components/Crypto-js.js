
import CryptoJS from 'react-native-crypto-js';
import Constants from 'expo-constants';

const secretKey = process.env.CRYPTO_SECRET_KEY;


function encryptData(data) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
}

function decryptData(encryptedData) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

export { encryptData, decryptData };