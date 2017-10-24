//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

/**
 * global.win.loadURL의 사이트의 HTMLElements 구성이 완료된후 호출되는 함수
 * @function
 */
global.win.webContents.onloadend = function( d )
{
	console.log( "----[ S ] - global.win.webContents.onloadend():void----------" );

	//*/
	global.win.webContents.initialize();
	//*/
	//global.win.webContents.initialize(); 빠지고 바로 global.exec_tjs_web__***()를 해도 될듯함;
	//*/

	console.log( "----[ E ] - global.win.webContents.onloadend():void----------" );
};