 const geolocalizer = require("./geolocalizer")

 const haversine = require("./haversine")

 const dla = require("./DLA")

 const dlo = require("./DLO")


 const calculateDistance = (ip1, ip2) => {

 	  const  address1 =  geolocalizer(ip1)  

 	  const address2 = geolocalizer(ip2)

      const coordinates1 = address1.ll

      const coordinates2 = address2.ll

      const dlat = dla(coordinates1[0], coordinates2[0])

      const dlong = dlo(coordinates1[1], coordinates2[1])

      return  haversine(dlat, dlong, coordinates1[0], coordinates2[0])

 }

 module.exports = calculateDistance










// 207.97.227.239"