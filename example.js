const dns = require('./index'); // const dns = require('@cryptoscamdb/graceful-dns');

(async () => {
    const nameservers = await dns.getNS('google.com');
    console.log(nameservers);
})();
