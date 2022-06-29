import CryptoJS from 'crypto-js';

export const passwordManager = {
  hashPassword: (password: string): string => {
    return CryptoJS.AES.encrypt(password, `${process.env.ENCRYPT_SECRET}`).toString();
  },
  comparePassword: (password: string, hash: string): boolean => {
    return CryptoJS.AES.decrypt(hash, `${process.env.ENCRYPT_SECRET}`).toString(CryptoJS.enc.Utf8) === password;
  }
};