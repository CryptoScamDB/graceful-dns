const dns = require('./index');

(async () => {
	const nameservers = await dns.getNS("google.com");
	console.log(nameservers);
})();