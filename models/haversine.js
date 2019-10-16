 const haversine =  (dlat, dlon, lat1, lat2) => {
 	const earth_radius = 6371
 	const a = Math.sin(dlat/2) * Math.sin(dlat/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon/2) * Math.sin(dlon/2)
 	const c = 2 * Math.asin(a)
 	const d = earth_radius * c 

 	return d

 }

 module.exports  = haversine