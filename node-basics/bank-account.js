var accounts = [];


function createAccount(account){

	accounts.push(account);
	return account;

}

function getAccount(username){
	var matchedAccount;
	accounts.forEach(function (account){
		if (account.username === username){
			matchedAccount = account;
		}
	});
	return matchedAccount;
}

function deposit (account, amount){
	if (typeof amount === "number"){
		account.balance += amount;
	} else {
		console.log("Deposit not accepted, amount was not a number! ");
	}
	
}

function withdraw (account, amount){
	if (typeof amount === "number"){
		account.balance -= amount;
	} else {
		console.log("Withdrawl not accepted, amount was not a number! ");
	}
}

function getBalance(account){
	return account.balance;
}

function createBalanceGetter(account){
	function balanceGetter (){
		console.log(account.username + " has " + account.balance + " dollars.");
	}
	return balanceGetter;
}

var illyasAccount = createAccount({ 
	username: "Illya", 
	balance: 0
});

deposit (illyasAccount, 1000);

var bobsAccount = createAccount({ 
	username: "Bob", 
	balance: 0
});

deposit (bobsAccount, 3000);


deposit(illyasAccount, "100");

withdraw(illyasAccount, "56");

var illyaBalanceGetter = createBalanceGetter(illyasAccount);

illyaBalanceGetter();

deposit(illyasAccount, 500);

illyaBalanceGetter();

withdraw(illyasAccount, 121);

illyaBalanceGetter();









