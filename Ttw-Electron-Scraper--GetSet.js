//----------------------------------------------------------------------------------------------------;

//	GET / SET;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------GET METHOD;

/*/
var a = [ [ "&", "＆" ], [ "/", "／" ], [ ":", "：" ], [ "=", "＝" ], [ "?", "？" ] ];
var a = [ [ 38, 65286 ], [ 47, 65295 ], [ 58, 65306 ], [ 61, 65309 ], [ 64, 65311 ] ];

url.replace( "http://", "" ).replace( "https://", "" )
	.replace( /\&/gi, "＆" )//38 -> 65286;
	.replace( /\//gi, "／" )//47 -> 65295;
	.replace( /\:/gi, "：" )//58 -> 65306;
	.replace( /\=/gi, "＝" )//61 -> 65309;
	.replace( /\?/gi, "？" )//63 -> 65311;
;
//*/

/**
 * @function
 * @param {String} url
 * @return {String}
 */
global.getConvertURL = function( url ){ return url.replace( "http://", "" ).replace( "https://", "" ).replace( /\&/gi, "＆" ).replace( /\//gi, "／" ).replace( /\:/gi, "：" ).replace( /\=/gi, "＝" ).replace( /\?/gi, "？" ) };

//--------------------------------------------------SET METHOD;

//--------------------------------------------------GET / SET METHOD;

//--------------------------------------------------;