/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	
	modules: [
		{ 
			header: "Sea Data",
                        module: "sea-temp",
                        position: "bottom_center"
                },
		{
			module: "clock",
			position: "top_right"
		},
		{
			module: "compliments",
			position: "top_bar"
		},
		{
			header: "Current Weather Data",
			module: "currentweather",
			position: "bottom_left",
			config: {
				location: "Dublin",
				locationID: "2964574",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "aec456f81761e7ea07cd03fe1e42e3d1"
			}
		},
		{
			module: "weatherforecast",
			position: "bottom_left",
			config: {
				location: "Dublin",
				locationID: "2964574",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "aec456f81761e7ea07cd03fe1e42e3d1"
			}
		},
		{
			module: "newsfeed",
			position: "top_left",
			config: {
				feeds: [
					{
						title: "RTE News",
						url: "http://www.rte.ie/news/rss/news-headlines.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		//{
			//header: "Google Maps",
                        //module: "iFrame",
                        //position: "bottom_bar"
		//},
		{
            		module: 'MMM-google-route',
            		position: 'bottom_right',
            		config: {
                		key: '<YOUR_KEY>',
                		directionsRequest:{
                		    origin: '<ROUTE START>',
                		    destination: '<ROUTE FINISH>'
                		}
            		}
        	}		
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

