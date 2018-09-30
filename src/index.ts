import * as dns from 'dns';
import * as url from 'url';

/**
 * Get the IP address of a hostname.
 * @param hostname
 */
export const getIP = (hostname: string): Promise<string | undefined> => {
  return new Promise(resolve => {
    dns.lookup(url.parse(hostname).hostname || hostname, (error, address) => {
      if (error) {
        return resolve(undefined);
      }

      resolve(address);
    });
  });
};

/**
 * Get all DNS records associated with a hostname.
 * @param hostname
 */
export const getDNS = (hostname: string): Promise<dns.AnyRecord[] | undefined> => {
  return new Promise(resolve => {
    dns.resolveAny(url.parse(hostname).hostname || hostname, (error, records) => {
      if (error) {
        return resolve(undefined);
      }

      resolve(records);
    });
  });
};

/**
 * Get the name servers associated with a hostname.
 * @param hostname
 */
export const getNS = (hostname: string): Promise<string[] | undefined> => {
  return new Promise(resolve => {
    dns.resolveNs(url.parse(hostname).hostname || hostname, (error, addresses) => {
      if (error) {
        return resolve(undefined);
      }

      resolve(addresses);
    });
  });
};

/**
 * Do a reverse DNS lookup for an IP address.
 * @param ip
 */
export const reverseDNS = (ip: string): Promise<string[] | undefined> => {
  return new Promise(resolve => {
    dns.reverse(ip, (error, hostnames) => {
      if (error) {
        return resolve(undefined);
      }

      resolve(hostnames);
    });
  });
};

export const getServers = dns.getServers;

export const setServers = dns.setServers;
