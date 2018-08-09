const dns = require('dns');
const url = require('url');

module.exports.getServers = dns.getServers;

module.exports.setServers = dns.setServers;

module.exports.getIP = (hostname) => {
	return new Promise(resolve => {
		dns.lookup(url.parse(hostname).hostname || hostname, (err,address) => {
			if(err) resolve(undefined);
			else resolve(address);
		});
	});
}

module.exports.getDNS = (hostname) => {
	return new Promise(resolve => {
		dns.resolveAny(url.parse(hostname).hostname || hostname, (err,records) => {
			if(err) resolve(undefined);
			else resolve(records);
		});
	});
}

module.exports.getNS = (hostname) => {
	return new Promise(resolve => {
		dns.resolveAny(url.parse(hostname).hostname || hostname, (err,addresses) => {
			if(err) resolve(undefined);
			else resolve(addresses);
		});
	});
}

module.exports.reverseDNS = (ip) => {
	return new Promise(resolve => {
		dns.resolveAny(ip, (err,hostnames) => {
			if(err) resolve(undefined);
			else resolve(hostnames);
		});
	});
}