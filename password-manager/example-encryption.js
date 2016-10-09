var crypto = require("crypto-js");

var secretMessage = "Secret Message, I like the prequels.";
var secretKey = "123abc";

//ENCRYPTING STRINGS

//Encrypt

var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);

console.log("Encrypted message: " + encryptedMessage);

//Decrypt

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decrypted = bytes.toString(crypto.enc.Utf8); 
console.log("Decrypted message: " + decrypted);


//ENCRYPTING OBJECTS


var secretObject = {
	name: "illya",
	secret: "he likes the prequels",
	age: 20
};

var json = JSON.stringify(secretObject);

var encryptedObject = crypto.AES.encrypt(json, secretKey);

console.log("Encrypted object: " + encryptedObject);

//Decrypt

var bytesOfObject = crypto.AES.decrypt(encryptedObject, secretKey);
var decryptedJSON = bytesOfObject.toString(crypto.enc.Utf8); 
var decryptedObject = JSON.parse(decryptedJSON);
console.log("Decrypted secret: " + decryptedObject.secret);
