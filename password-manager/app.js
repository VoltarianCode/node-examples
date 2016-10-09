//console.log("starting password manager");

var storage = require ("node-persist");
storage.initSync();
var crypto = require("crypto-js");

function getAccounts(masterPassword){

	var encryptedObject = storage.getItemSync("accounts");
	if (typeof encryptedObject === "undefined"){
		var accounts = [];
	} else {
		var bytesOfObject = crypto.AES.decrypt(encryptedObject, masterPassword);
		var decryptedJSON = bytesOfObject.toString(crypto.enc.Utf8); 
		var accounts = JSON.parse(decryptedJSON);
	}

	return accounts;

}

function saveAccounts(accounts, masterPassword){

	var encryptedObject 
		= crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
	storage.setItemSync("accounts", encryptedObject.toString());

}

function createAccount(account, masterPassword){

	var accounts = getAccounts(masterPassword);

	accounts.push(account);
	saveAccounts(accounts, masterPassword);

	return account;
}


function getAccount(accountName, masterPassword){

	var accounts = getAccounts(masterPassword);
	var matchedAccount;

	accounts.forEach(function(account){
		if (account.name === accountName){
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

var argv = require('yargs')
.command('create', 'Creating an account', function(yargs){
	yargs.options({
		name: {
			demand: true,
			alias: 'n',
			description: 'Account Name goes here e.g. Facebook, Twitter',
			type: 'string'
		},
		username: {
			demand: true,
			alias: 'u',
			description: 'username aka the login information (usually email)',
			type: 'string'

		},
		password: {
			demand: true,
			alias: 'p',
			description: 'password goes here',
			type: 'string'

		},
		masterPassword:{
			demand: true,
			alias: 'm',
			description: 'master password goes here',
			type: 'string'
		}
	});
})
.command('get', 'Getting account info', function(yargs){
	yargs.options({
		name: {
			demand: true,
			alias: 'n',
			description: 'Account Name goes here e.g. Facebook, Twitter',
			type: 'string'

		},
		masterPassword:{
			demand: true,
			alias: 'm',
			description: 'master password goes here',
			type: 'string'
		}
	});
})
.argv;


var command = argv._[0];
var account;

if(command === 'create'){
	try {
		createAccount({
		name: argv.name,
		username: argv.username,
		password: argv.password
	}, argv.masterPassword);
	} catch (e){
		console.log("unable to create account");
	}
	
} else if (command === 'get' ){
	try {
		account = undefined;
		account = getAccount(argv.name, argv.masterPassword);
		if (typeof account === 'undefined'){
			console.log('Account not found.');
		} else {
			console.log(account);
		}
		
	} catch (e) {
		console.log("unable to get account");
	}
	
}







