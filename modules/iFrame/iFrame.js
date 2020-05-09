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
				url: "https://goo.gl/maps/hTraHffgHAgMP7Rh7",
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
