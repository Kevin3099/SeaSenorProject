/* global Module */

/* Magic Mirror
 * Module: iFrame
 *
 * By Ben Williams http://desertblade.com
 * MIT Licensed.
 */

Module.register("iFrame",{
		// Default module config.
		defaults: {
				url: "https://www.google.ie/maps/place/Waterford/@52.2474997,-7.1481352,13z/data=!3m1!4b1!4m5!3m4!1s0x4842c69c63d9e44d:0xc5bb81888b67b9fb!8m2!3d52.2593197!4d-7.1100702",
				height:"200px",
				width:"50%"
		},


	// Override dom generator.
	getDom: function() {
		var iframe = document.createElement("IFRAME");
		iframe.style = "border:0"
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		iframe.src =  this.config.url;
		return iframe;
	}

});
