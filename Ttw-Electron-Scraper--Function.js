//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

/**
 * global.DATA_URL 정보를 기반으로 CallBack 함수 파일을 생성한다.
 * url과 nm 정보를 파일 명으로 한다.
 * 이미 존재하는 명명의 파일은 생성하지 않는다.
 * @function
 */
var _createCallBackFunctionFiles__From__DATA_URL = function()
{
	console.log( "-[ S ] - _createCallBackFunctionFiles__From__DATA_URL():void----------" );

	var f0 = STtwUtilFsReadStream.checkWhetherFile;
	var f1 = STtwUtilFsWriteStream.writeFile_UTF8;
	var f2 = global.getConvertURL;

	var io;
	var a = global.DATA_URL.data;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		var nmPath;
		var domPath;
		var jsPath;

		io = a[ i ];
		if( io.nm )
		{
			nmPath = "./tjs-exec-web/nm/" + nm;domPath = nmPath + ".dom.js";jsPath = nmPath + ".js";
			//파일이 존재하지 않으면 생성;
			if( !f0( domPath ) ) f1( domPath, "" );if( !f0( jsPath ) ) f1( jsPath, "" );
		}
		else
		{
			var url0 = f2( io.url );
			nmPath = "./tjs-exec-web/url/" + url0;domPath = nmPath + ".dom.js";jsPath = nmPath + ".js";
			//파일이 존재하지 않으면 생성;
			if( !f0( domPath ) ) f1( domPath, "" );if( !f0( jsPath ) ) f1( jsPath, "" );
		}
	}

	console.log( "-[ E ] - _createCallBackFunctionFiles__From__DATA_URL():void----------" );
};

/**
 * @function
 */
global.go = function(){
	console.log( "--[ S ] - global.go():void----------" );

	var to = global.DATA_URL.data[ global.DATA_URL.idx ]//target Object;

	global.win.loadURL( to.url );

	++global.DATA_URL.idx;

	if( global.DATA_URL.idx >= global.DATA_URL.iLen )
	{
		global.DATA_URL.idx = 0;
		return;
	}

	console.log( "--[ E ] - global.go():void----------" );
};

/**
 * NodeJS Initialized 함수
 * global.win.webContents.initialize가 호출 되어 Browser Interfaces가 완성된 후 호출되는 함수
 * @function
 */
global.initialized = function()
{
	console.log( "--[ S ] - global.initialized():void----------" );

	//global.DATA_URL 정보를 기반으로 CallBack 함수 파일을 생성한다.;
	_createCallBackFunctionFiles__From__DATA_URL();

	/*/
	//Original <Head>와 <Body>를 저장한다.;
	global.exec_tjs_web__saveOriginal__HeadAndBody();

	//View 구성을 완료 후 DOM과 JS를 조작후 <Head>와 <Body>를 저장한다.;
	global.exec_tjs_web__saveProcess__DOMAndJS();

	//View 구성을 완료 후 DOM과 JS를 조작후 <Head>와 <Body>를 저장한다.;
	global.exec_tjs_web__saveProcess__DOMAndJS__Compress();
	//*/

	//View 구성을 완료 후 DOM과 JS를 조작후 <Head>와 <Body>를 저장한다.;
	global.exec_tjs_web__saveProcess__DOMAndJS__Compress();

	console.log( "--[ E ] - global.initialized():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------;

/**
 * Original <Head>와 <Body>를 저장한다.
 * @function
 */
global.exec_tjs_web__saveOriginal__HeadAndBody = function()
{
	console.log( "--[ S ] - global.exec_tjs_web__saveOriginal__HeadAndBody():void----------" );

	var to = global.DATA_URL.data[ global.DATA_URL.idx ];//target Object;
		console.log( "target NAME : " + to.nm );
		console.log( "target URL : " + to.url );

	var js = global.exec_tjs_web__saveOriginal__HeadAndBody._tjs.replace( "<!=data=!>"
		, JSON.stringify( { nm : to.nm, url : global.getConvertURL( to.url ) } )
	);
		//console.log( js );

	//#PROMIS;
	var rPromis = global.win.webContents.executeJavaScript( js )
		rPromis.then(function( result ){ global.go(); }
			, function( result ){ console.log( "[ ERROR ] - exec_tjs_web__saveOriginal__HeadAndBody.tjs Error" ); }
		);
	if( r )

	console.log( "--[ E ] - global.exec_tjs_web__saveOriginal__HeadAndBody():void----------" );
};
global.exec_tjs_web__saveOriginal__HeadAndBody._tjs = global.REQUIRES.fs.readFileSync( "./tjs-exec-web/saveOriginal__HeadAndBody.tjs" ).toString( "utf8" );

//--------------------------------------------------;

/**
 * View 구성을 완료 후 DOM과 JS를 조작후 <Head>와 <Body>를 저장한다.
 * @function
 */
global.exec_tjs_web__saveProcess__DOMAndJS = function()
{
	console.log( "--[ S ] - global.exec_tjs_web__saveProcess__DOMAndJS():void----------" );

	var to = global.DATA_URL.data[ global.DATA_URL.idx ];//target Object;
		console.log( "target NAME : " + to.nm );
		console.log( "target URL : " + to.url );

	var js = global.exec_tjs_web__saveProcess__DOMAndJS._tjs.replace( "<!=data=!>", JSON.stringify( { nm : to.nm, url : global.getConvertURL( to.url ) } ) );
		//console.log( js );

	//#PROMIS;
	var rPromis = global.win.webContents.executeJavaScript( js );
		rPromis.then(function( result ){ if( result ) global.go(); }
			, function( result ){ console.log( "[ ERROR ] - exec_tjs_web__saveProcess__DOMAndJS.tjs Error" ); }
		);

	console.log( "--[ E ] - global.exec_tjs_web__saveProcess__DOMAndJS():void----------" );
};
global.exec_tjs_web__saveProcess__DOMAndJS._tjs = global.REQUIRES.fs.readFileSync( "./tjs-exec-web/saveProcess__DOMAndJS.tjs" ).toString( "utf8" );

//--------------------------------------------------;

/**
 * View 구성을 완료 후 DOM과 JS를 조작후 <Head>와 <Body>를 저장한다.
 * @function
 */
global.exec_tjs_web__saveProcess__DOMAndJS__Compress = function()
{
	console.log( "--[ S ] - global.exec_tjs_web__saveProcess__DOMAndJS__Compress():void----------" );

	var to = global.DATA_URL.data[ global.DATA_URL.idx ];//target Object;
		console.log( "target NAME : " + to.nm );
		console.log( "target URL : " + to.url );

	var js = global.exec_tjs_web__saveProcess__DOMAndJS__Compress._tjs.replace( "<!=data=!>", JSON.stringify( { nm : to.nm, url : global.getConvertURL( to.url ) } ) );
		//console.log( js );

	//#PROMIS;
	var rPromis = global.win.webContents.executeJavaScript( js );
		rPromis.then(function( result ){ if( result ) global.go(); }
			, function( result ){ console.log( "[ ERROR ] - exec_tjs_web__saveProcess__DOMAndJS__Compress.tjs Error" ); }
		);

	console.log( "--[ E ] - global.exec_tjs_web__saveProcess__DOMAndJS__Compress():void----------" );
};
global.exec_tjs_web__saveProcess__DOMAndJS__Compress._tjs = global.REQUIRES.fs.readFileSync( "./tjs-exec-web/saveProcess__DOMAndJS__Compress.tjs" ).toString( "utf8" );

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;