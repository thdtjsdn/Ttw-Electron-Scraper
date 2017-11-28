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
		/*/
		  { nm : "", url : "http://www.naver.com" }
		, { nm : "", url : "http://www.daum.net" }
		, { nm : "", url : "http://newsstand.naver.com/?list=ct1&pcode=092" }
		, { nm : "", url : "http://kin.naver.com/index.nhn" }
		, { nm : "", url : "http://pc.shopping2.naver.com/home/p/index.nhn" }
		//*/
		//{ nm : "", url : "https://www.kaola.com/product/1395405.html?referPage=searchPage&referId=paparecipe&from=page1&position=1&istext=0&srId=35d995a802fa4d2176ffd90d50f79ceb&zn=result&zp=page1-1&ri=paparecipe&rp=search" }
		{ nm : "", url : "https://detail.tmall.hk/hk/item.htm?spm=a230r.1.14.48.128db825aICe1w&id=538001047732&ns=1&abbucket=16&skuId=3497633292526" }
	]
};
global.DATA_URL.iLen = global.DATA_URL.data.length;