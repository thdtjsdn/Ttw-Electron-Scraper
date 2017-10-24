//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

/**
 * 스크래핑 할 URL 목록
 * @property {Array}
 */
global.DATA_URL = {
	idx : 0
	, iLen : 0//global.gos.data.length;
	, data : [
		  { nm : "", url : "http://www.naver.com" }
		, { nm : "", url : "http://www.daum.net" }
		, { nm : "", url : "http://newsstand.naver.com/?list=ct1&pcode=092" }
		, { nm : "", url : "http://kin.naver.com/index.nhn" }
		, { nm : "", url : "http://pc.shopping2.naver.com/home/p/index.nhn" }
	]
};
global.DATA_URL.iLen = global.DATA_URL.data.length;