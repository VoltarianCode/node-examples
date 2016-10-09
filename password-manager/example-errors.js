

try {
	throw new Error("Unable to decrypt accounts!");
} catch (e) {
	console.log(e.message);
} finally {
	console.log("finally");
}

console.log("Try catch ended");