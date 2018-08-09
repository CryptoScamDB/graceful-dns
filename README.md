# graceful-dns

## Disclaimer

Are you writing code in dev environments? Check out [the experimental DNS Promises API](https://nodejs.org/api/dns.html#dns_dns_promises_api) (added in v10.6.0)

Do you want promises to reject instead of returning `undefined`? Check out [dns-then](https://github.com/node-then/dns-then)

This project wraps a part of Node.js's [dns module](https://nodejs.org/api/dns.html#dns_dns) in non-rejecting promises (instead of rejecting, it returns `undefined`. It also parses URLs to hostnames automatically. **It's not a 1:1 port**.

## Usage

> npm install graceful-dns

## API

- [**getServers()**](https://nodejs.org/api/dns.html#dns_dns_getservers) - *returns an array of IP addresses which are configured for DNS lookups*
- [**setServers(servers)**](https://nodejs.org/api/dns.html#dns_dns_setservers_servers) - *configures an array of IP addresses which are configured for DNS lookups*
- [**getIP(hostname)**](https://nodejs.org/api/dns.html#dns_dns_lookup_hostname_options_callback) - *returns a promise which will resolve to either `undefined` or the IP address*
- [**getDNS(hostname)**](https://nodejs.org/api/dns.html#dns_dns_resolveany_hostname_callback) - *returns a promise which will resolve to either `undefined` or an array of DNS records*
- [**getNS(hostname)**](https://nodejs.org/api/dns.html#dns_dns_resolvens_hostname_callback) - *returns a promise which will resolve to either `undefined` or an array of nameservers*
- [**reverseDNS(ip)**](https://nodejs.org/api/dns.html#dns_dns_reverse_ip_callback) - *returns a promise which will resolve to either `undefined` or an array of hostnames*

## Examples

```
const dns = require('graceful-dns');

(async () => {
    const ip = await dns.getIP('example.com');
	if(ip) {
	    console.log("Found IP: " + ip);
	} else {
	    console.log("Could not find IP address");
	}
})();
```