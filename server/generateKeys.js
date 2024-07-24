const crypto = require("crypto");

const generateKey = () => crypto.randomBytes(32).toString("hex");

console.log(generateKey());
console.log(generateKey());
