const { randomBytes, scryptSync } = require('crypto');

const encryptPassword = (password , salt) => {
    return scryptSync(password, salt, 32).toString('hex');
  };


  const hashPassword = (password)=> {
    // Any random string here (ideally should be at least 16 bytes)
    const salt = randomBytes(16).toString('hex');
    return encryptPassword(password, salt) + salt;
  };

    // fetch the user from your db and then use this function

    // Match password against the stored hash


  const matchPassword = (password , hash ) => {
    // extract salt from the hashed string
    // our hex password length is 32*2 = 64
    const salt = hash.slice(64);
    const originalPassHash = hash.slice(0, 64);
    const currentPassHash = encryptPassword(password, salt);
    return originalPassHash === currentPassHash;
  };


  module.exports = {matchPassword,hashPassword }