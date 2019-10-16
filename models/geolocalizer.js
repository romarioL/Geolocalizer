 const geoip = require('geoip-lite')

 const  geolocalizer = (ip) => {
 	 return  geoip.lookup(ip)
 }

 module.exports = geolocalizer
