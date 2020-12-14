/*
AppMeasurement for JavaScript version: 2.17.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
/*
imp info ver.3.3 by simple-logic for www.cr.mufg.jp mainsite,MUFG,DC,NICOS(NetBranch),AMEX
*/
var codeVer = "mun_20200131_2.17.0";

/* init hostname */
var sc_host = location.host;
var sc_path = location.pathname;
var sc_domain = location.hostname;

var sc_domainList=[
	"www.cr.mufg.jp",
	"www2.cr.mufg.jp",
	"www2.mufgcard.com",
	"club.dccard.co.jp",
	"houjin.dccard.co.jp",
	"branch.nicos.co.jp",
	"search.cr.mufg.jp",
	"www.af-mark.jp",
	"campaign.j-a-net.jp",
	"support.trafficgate.net",
	"support2.trafficgate.net",
	"entry11.bk.mufg.jp",
	"direct3.smbc.co.jp",
	"direct.smbc.co.jp",
	"web2.ib.mizuhobank.co.jp",
	"web.ib.mizuhobank.co.jp",
	"info.cr.mufg.jp",
	"sp-point.net",
	"mun-m.custhelp.com",
	"mun-d.custhelp.com",
	"mun-n.custhelp.com",
	"mun-a.custhelp.com",
	"mun-uj.custhelp.com",
	"mun-ja.custhelp.com",
	"mun-apply.custhelp.com",
	"www.payment.cr.mufg.jp"
].join(",");

// RS select

if(sc_domainList.indexOf(location.host) !=-1){
	s_account="munwwwcrmufgjp";
}else{
	s_account="mundev";
}
var s=s_gi(s_account);

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet="UTF-8";
s.cookieDomainPeriods=location.host.match(/\.(co|ne|or|ac)\.jp$/)?"3":"2"

/*force Periods*/
if(location.host.indexOf(".cr.mufg.jp") != -1){
		s.cookieDomainPeriods=3;
}

/* Conversion Config */
s.currencyCode="JPY"
/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=false
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls,docx,xlsx,pptx,sit,sitx"
s.linkInternalFilters="javascript:," + sc_domainList;
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace="mun"
s.trackingServer="mun.122.2o7.net"

/* clickThruQuality counter */
var i=1;	//init
/* Plugin Config */
sc_doplugin_once = false;

// s_code version & path
s.prop75 = codeVer;
s.eVar75 = "D=c75";

try{ // MUST use try&catch
	var currentScript = (function (e) { if(e.nodeName.toLowerCase() == 'script') return e; return arguments.callee(e.lastChild) })(document);
	s.prop74 = (currentScript)?currentScript.src:"";
	s.eVar74 = "D=c74";
} catch(err) {};

try {
	for(var sci in _sc){s[sci]=_sc[sci];}
}catch(e){};

/* Page Name Plugin Config */
s.siteID=""					// leftmost value in pagename
s.defaultPage="index.html"	// filename to add when none exists
s.queryVarsList=""			// query parameters to keep
s.pathExcludeDelim=";"		// portion of the path to exclude
s.pathConcatDelim="/"		// page name component separator
s.pathExcludeList=""		// elements to exclude from the path
s.usePlugins=true

function s_doPlugins(s) {
	/* force referrer for smartphone page Unique Setting*/
	/* force flg for smartphone page Unique Setting*/
	if(location.href.indexOf("/spn/") != -1){
		s.eVar30 = "Touch_SmartPhone_Site";
		if(document.cookie.indexOf("sc_ref")!=-1){
			s.referrer = s.getCk("sc_ref");
			document.cookie = 'sc_ref=; expires= Sat, 05 Sep 1998 12:22:55 GM; path=/';
		}
	}

	/* SearchCenter */
	/* s.pageURL=s.manageQueryParam('s_kwcid',1,1,s.tempURL);  */
	/* Tracking code */
	if(!s.campaign){
		s.campaign=s.Util.getQueryParam('cid');
	}
	/*original tracking code */
	if(!s.eVar47){
		s.eVar47 = "D=v0";
	}
	/* internal campagin */
	if(!s.eVar46){
		s.eVar46=s.Util.getQueryParam('bid');
	}
	/* member campagin */
	if(!s.eVar44){
		s.eVar44=s.Util.getQueryParam('mid');
	}
	/* newsplus campagin */
	if(!s.eVar43){
		s.eVar43=s.Util.getQueryParam('sid');
	}
	/* App campagin */
	if(!s.eVar40){
		s.eVar40=s.Util.getQueryParam('appid');
	}


	/* useragent */
	s.eVar29 = "D=User-Agent";

	// /* pageName */
	// if(!s.pageName){
	// 	s.pageName = "/" + s.getPageName();
	// }

	/*copy pageName for LandingPage*/
	s.eVar1 = "D=pageName";

	/* server */
	s.server = location.hostname;

	/* url */
	s.eVar72 = s.prop1 = "D=g";

	/* referer */
	s.prop2 = "D=r";
	s.eVar2 = "D=r";

	/* hier & channel temp */
	var sc_tmpName = "/" + s.getPageName();
	var sc_dirArray = sc_tmpName.split("/").slice(0,-1);

	/* hier1 */
	var sc_tmp_hier = sc_dirArray.toString();
	if(!s.hier1){
		s.hier1 = location.hostname + sc_tmp_hier;
	}

	/* clickThruQuality */
	s.clickThruQuality_yt('event15','event16');

	/* prop4,5_eVar4,5 TimePartingCodes Hour */
	var tmp_date = new Date();//init
	s.prop4 = tmp_date.getFullYear() +"/"+ (tmp_date.getMonth()+1) +"/"+ tmp_date.getDate();	//YYYY/MM/DD
	s.eVar4 = "D=c4";
	s.prop5 = s.getTimeParting('h','9',tmp_date.getFullYear());	// Set hour 30min
	s.eVar5 = "D=c5";

	/* First visiter or Reperter*/
	if (s.getNewRepeat() =="New") {
		s.prop6 = "D=pageName";
		s.eVar6 = "First_or_Over60days";
	}else{
		s.eVar6 = "in60days_Repeater";
	}

	/* UserStatus*/
	if(s.events){
		if(s.events.indexOf("purchase") != -1){
			s.eVar8 = "cardentry";
		}
		if(s.events=="event1"){
			s.eVar8 = "webmemberentry";
			s.eVar9 = "D=v8";
		}
	}

	/*ChannelManager +cross visit*/

	if(s.getVisitStart("s_visitstart") == 1){
		s_vs_flg = true;
	}else{
		s_vs_flg = false;
	}

	if(!sc_doplugin_once){
		s.campaign_tmp = s.campaign;//backup temporary
		s.cm_keyword = "";
		s.cm_host ="";


		if(!s.eo && !s.lnk){
			s.objCM = s.channelManager();
		}

		if(s.objCM){
			s.cm_keyword = s.objCM.keyword ? s.objCM.keyword : "";
			if (s.cm_keyword.toLowerCase() == "notutf-8"){
					s.cm_keyword = "";
			}
			if(!s.cm_keyword || s.cm_keyword == "n/a"){
				s.cm_keyword = "Not_keyword";
			}
			s.cm_host = s.objCM.referringDomain ? s.objCM.referringDomain.split("/")[0] : "";
			if(!s.cm_host){
				s.cm_host = "Not_referrer";
			}

			s.eVar27=s.objCM.channel ? s.objCM.channel : "";
			if(s.eVar27=="Listing"){
				s.eVar27+="::"+s.objCM.partner;
				s.eVar49 = "Li::" + s.objCM.partner + ":" + s.cm_keyword;
				s.eVar45 = "Li::" + s.cm_keyword;
			}else if(s.eVar27=="Organic"){
				s.eVar27+="::"+s.objCM.partner;
				s.eVar49 = "Or::" + s.objCM.partner + ":" + s.cm_keyword;
				s.eVar45 = "Or::" + s.cm_keyword;
			}else if(s.eVar27=="Other Websites"){
				if(s.campaign){
					s.eVar27="AD_Websites";
					s.eVar49 = "Aw::" + s.campaign;
					s.eVar45 = "";
				}else{
					s.eVar27="Other_Websites";
					s.eVar49 = "Ow::" + s.cm_host;
					s.eVar45 = "";
				}
			}else if(s.eVar27=="Direct"){
				if(s.campaign){
					s.eVar27="AD_Websites";
					s.eVar49 = "Aw::" + s.campaign;
					s.eVar45 = "";
				}else{
					if(s_vs_flg){//visit once.
						s.eVar27="Direct";
						s.eVar49 = "Direct";
						s.eVar45 = "";
						s.campaign_tmp ="Direct";
					}else{
						s.eVar27="";
						s.eVar49 = "";
						s.eVar45 = "";
						s.campaign_tmp ="";
					}
				}
			}

			/*mailmagazine*/
			if(s.eVar44){
				s.eVar27 = "MailMag";
				s.eVar49 = "Mm::" + s.eVar44;
				s.eVar45 = "";
			}
		}
		/*postclick channel level*/
		s.eVar28 = s.crossVisitParticipation(s.eVar27,'s_cmb','60','5',' > ','purchase',1);

		/*postclick minimum level*/
		s.eVar49 = s.crossVisitParticipation(s.eVar49,'s_cpm','60','5',' > ','purchase',1);

		/*postclick keyword(PPC only)*/
		s.eVar48 = s.crossVisitParticipation(s.eVar45,'s_key','60','5',' > ','purchase',1);

		//Recover campaingn
		s.campaign = s.campaign_tmp;
	}

	/* MicroLevelPath(channel+search)*/
	if(s.eVar27){
		if(s.prop16 && s.prop18=="Zero"){
			s.prop7 = s.eVar27 + "::search:0:" + s.prop16 //search + result0
		}else if(s.prop16 && s.prop18!="Zero"){
			s.prop7 = s.eVar27 + "::search:" + s.prop16; //search + result other0
		}else{
			s.prop7 = s.eVar27 + "::" + s.pageName; //other
		}
	}else{
		if(s.prop16 && s.prop18=="Zero"){
			s.prop7 = "search:0:" + s.prop16 //search + result0
		}else if(s.prop16 && s.prop18!="Zero"){
			s.prop7 = "search:" + s.prop16; //search + result other0
		}else{
			s.prop7 = "D=pageName";
		}
	}

	/* 404 error ValueClear */
	if(s.pageType){
		s.pageName = "";
		s.channel = "404NotFound";
	}

	//s_vi
	s.eVar73 = s.prop73 = "D=s_vi";

//-------------------------------------------------------- Renewal 2015/10/13 -----------//
	//pageName
	if(!s.pageName && !s.pageType) {
		s.pageName = getPageNameMTL("/");
		s.pageName = MaxBytesString(s.pageName,100)
	}

	//action on 1st request this block
	var sc_1stOr2nd = s.get1stOr2ndpage();
	if(sc_1stOr2nd==1){
		//new or in30days or over30 or over90 or over180
		var nowDate = new Date();
		var nowTime = nowDate.getTime();
		var timeSpan=30*24*60*60*1000;
		var seghis=[];
		if((nowTime-s.c_r('sc_segmsest'))>(30*60*1000)){
			s.setCk('sc_segm', "", -1); //now session flg reset
		}
		s.setCk('sc_segmsest',nowTime); //now time set

		seghis = s.c_r('sc_segmhis');
		if(!seghis){
			s.eVar39 = "new";
		}else if(nowTime-seghis > timeSpan*6){
			s.eVar39 = "over180";
		}else if(nowTime-seghis > timeSpan*3){
			s.eVar39 = "over90";
		}else if(nowTime-seghis > timeSpan*1){
			s.eVar39 = "over30";
		}else{
			s.eVar39 = "in30days";
		}
		s.prop39 = "D=v39";

		if(!s.c_r('sc_segm')){	//now sessing first
			if(!s.c_r('sc_segmhis')){
				s.setCk('sc_segmhis',nowTime,365);
			}else{
				s.setCk('sc_segmhis',s.c_r('sc_segmhis'),365);
			}
		}
		s.setCk('sc_segm', "1");
	}

	//ExternalCampagin
	if(!s.eVar41){
		s.eVar41 = s.Util.getQueryParam('aacid');
		if(s.eVar41) {
			s.eVar42 = "D=v41";
		}
	} else if(!s.Util.getQueryParam('aacid')) {
		s.eVar41 = "";
	}

	//News+ or Web register */
	if(!s.eVar50){
		s.eVar50 = s.Util.getQueryParam('lid');
		s.prop50 = "D=v50";

		if(s.eVar50.indexOf("news") != -1) {
			s.events = "event42";
		} else if(s.eVar50.indexOf("register") != -1) {
			s.events = "event43";
		}
	}

	//EntryPage
	if(sc_1stOr2nd==1){
		s.prop65 = 'D="(E)"+pageName';
		s.eVar21 = 'D="(E)"+pageName';
	} else {
		s.prop65 = "D=pageName";
		s.eVar21 = "D=pageName";
	}

	//directory base depth
	var sc_pathArray = sc_path.split("/");
	if (typeof(sc_pathArray[2]) =="undefined"){
		s.prop66 = s.eVar66 = sc_host + "/";
		s.prop67 = s.eVar67 = 'D=c66';
		s.prop68 = s.eVar68 = 'D=c66';
		s.prop69 = s.eVar69 = 'D=c66';
		s.prop70 = s.eVar70 = 'D=c66';
	}else if(typeof(sc_pathArray[3]) =="undefined"){
		s.prop66 = s.eVar66 = sc_host +"/";
		s.prop67 = s.eVar67 = 'D=c66+"' + sc_pathArray[1] + '/"';
		s.prop68 = s.eVar68 = 'D=c66+"' + sc_pathArray[1] + '/"';
		s.prop69 = s.eVar69 = 'D=c66+"' + sc_pathArray[1] + '/"';
		s.prop70 = s.eVar70 = 'D=c66+"' + sc_pathArray[1] + '/"';
	}else if(typeof(sc_pathArray[4]) =="undefined"){
		s.prop66 = s.eVar66 = sc_host + "/";
		s.prop67 = s.eVar67 = 'D=c66+"' + sc_pathArray[1] + '/"';
		s.prop68 = s.eVar68 = 'D=c66+"' + sc_pathArray[1] + '/' + sc_pathArray[2] + '/"';
		s.prop69 = s.eVar69 = 'D=c66+"' + sc_pathArray[1] + '/' + sc_pathArray[2] + '/"';
		s.prop70 = s.eVar70 = 'D=c66+"' + sc_pathArray[1] + '/' + sc_pathArray[2] + '/"';
	}else if(typeof(sc_pathArray[5]) =="undefined"){
		s.prop66 = s.eVar66 = sc_host + "/";
		s.prop67 = s.eVar67 = 'D=c66+"' + sc_pathArray[1] + '/"';
		s.prop68 = s.eVar68 = 'D=c66+"' + sc_pathArray[1] + '/' + sc_pathArray[2] + '/"';
		s.prop69 = s.eVar69 = 'D=c66+"' + sc_pathArray[1] + '/' + sc_pathArray[2] + '/' + sc_pathArray[3] +'/"';
		s.prop70 = s.eVar70 = 'D=c66+"' + sc_pathArray[1] + '/' + sc_pathArray[2] + '/' + sc_pathArray[3] +'/"';
	}else{
		s.prop66 = s.eVar66 = sc_host + "/";
		s.prop67 = s.eVar67 = 'D=c66+"' + sc_pathArray[1] + '/"';
		s.prop68 = s.eVar68 = 'D=c66+"' + sc_pathArray[1] + '/' + sc_pathArray[2] + '/"';
		s.prop69 = s.eVar69 = 'D=c66+"' + sc_pathArray[1] + '/' + sc_pathArray[2] + '/' + sc_pathArray[3] +'/"';
		s.prop70 = s.eVar70 = 'D=c66+"' + sc_pathArray[1] + '/' + sc_pathArray[2] + '/' + sc_pathArray[3] +'/' + sc_pathArray[4] +'/"';
	}


	//all host
	if(document.referrer){
		s.prop71 = document.referrer.split("//")[1].split("/")[0];
		s.eVar71 = "D=c71";
	} else {
		s.prop71 = "no ref";
		s.eVar71 = "D=c71";
	}

	/* channel */
	if(!s.channel){
		if(sc_dirArray[2]){
			s.channel = "/" + sc_dirArray[1] + "/" + sc_dirArray[2] + "/";
		}else if(sc_dirArray[1]){
			s.channel = "/" + sc_dirArray[1] + "/";
		}else{
			s.channel = "/";
		}
	} else {
		var channel = s.channel;
	}

	/*Category(Large)*/
	var splitPath = sc_path.split("/");

	var repeatList1 = {};
	repeatList1 = ["rule","contact","service","point","cashing","support"];

	var repeatList2 = {};
	repeatList2 = ["amex","carduse","dc","jacard","ja","jalcard","jcb","mufgcard","nicos","select"];

	//FAQ
	if(sc_domain.indexOf(".custhelp.com") != -1 || splitPath[2] == "faq") {
		s.prop11 = "FAQ";
	//SEARCH
	} else if(sc_domain.indexOf("search.cr.mufg.jp") != -1) {
		s.prop11 = "SEARCH";
	//LANDING
	} else if(splitPath[1] == "landing") {
		s.prop11 = "LANDING";
	} else {
		//NEW
		if(!s.prop11) {
			if(splitPath[1] == "apply" || (splitPath[1] == "ja" && splitPath[2] == "apply") || (splitPath[1] == "amex" && splitPath[2] == "apply")) {
				s.prop11 = "NEW";
			}
		}
		//REPEAT
		if(!s.prop11) {
			if(splitPath[1] == "member") {
				for(var i =0;i < repeatList1.length;i++) {
					if(splitPath[2] == repeatList1[i]) {
						s.prop11 = "REPEAT";
						break;
					}
				}
			} else {
				for(var i =0;i < repeatList2.length;i++) {
					if(splitPath[1] == repeatList2[i]) {
						s.prop11 = "REPEAT";
						break;
					}
				}
			}
		}
		//TOP
		if(!s.prop11) {
			if(s.channel == "/") {
				s.prop11 = "TOP";
			//s.channel
			} else if(channel) {
				s.prop11 = channel;
			//OTHER
			} else {
				s.prop11 = "OTHER";
			}
		}
	}

	/*Category(Medium)*/
	if(s.prop11 == "NEW") {
		if(s.prop9) {
			s.prop12 = "NEW>" + s.prop9;
		} else if(splitPath[1] == "ja") {
			s.prop12 = "NEW>" + "JA";
		} else if(splitPath[1] == "amex") {
			s.prop12 = "NEW>" + "AMEX";
		} else {
			s.prop12 = "NEW>" + "OTHER";
		}
	} else if(s.prop11 == "FAQ") {
		if(splitPath[2] == "faq") {
			var faqBrandList = {};
			faqBrandList = ["member","apply","mufgcard","dc","nicos","amex","ja","jcb","loan"];
			for(var i =0;i < faqBrandList.length;i++) {
				if(splitPath[1] == faqBrandList[i]) {
					s.prop12 = "FAQ>" + "TOP";
					break;
				}
			}
		} else if(sc_domain.indexOf("mun-apply") != -1) {
			s.prop12 = "FAQ>" + "NEW";
		} else if(sc_domain.indexOf("mun-m") != -1) {
			s.prop12 = "FAQ>" + "MUFG";
		} else if(sc_domain.indexOf("mun-d") != -1) {
			s.prop12 = "FAQ>" + "DC";
		} else if(sc_domain.indexOf("mun-n") != -1) {
			s.prop12 = "FAQ>" + "NICOS";
		} else if(sc_domain.indexOf("mun-a") != -1) {
			s.prop12 = "FAQ>" + "AMEX";
		} else if(sc_domain.indexOf("mun-uj") != -1) {
			s.prop12 = "FAQ>" + "UFJJCB";
		} else if(sc_domain.indexOf("mun-ja") != -1) {
			s.prop12 = "FAQ>" + "JA";
		} else {
			s.prop12 = "FAQ>" + "OTHER";
		}
	} else if(s.prop11 == "REPEAT") {
		if(splitPath[1] == "mufgcard") {
			s.prop12 = "REPEAT>" + "MUFG";
		} else if(splitPath[1] == "nicos") {
			s.prop12 = "REPEAT>" + "NICOS";
		} else if(splitPath[1] == "dc") {
			s.prop12 = "REPEAT>" + "DC";
		} else if(splitPath[1] == "amex") {
			s.prop12 = "REPEAT>" + "AMEX";
		} else if(splitPath[1] == "jacard" || splitPath[1] == "ja") {
			s.prop12 = "REPEAT>" + "JA";
		} else if(splitPath[1] == "jalcard") {
			s.prop12 = "REPEAT>" + "JAL";
		} else if(splitPath[1] == "jcb") {
			s.prop12 = "REPEAT>" + "UFJJCB";
		} else if(sc_path.indexOf("/member/service/webs/maintenance/") != -1) {
			if(sc_path.indexOf("index_02.html") != -1 || sc_path.indexOf("mufgcard.html") != -1) {
				s.prop12 = "REPEAT>" + "MUFG";
			} else if(sc_path.indexOf("nicos.html") != -1) {
				s.prop12 = "REPEAT>" + "NICOS";
			} else if(sc_path.indexOf("dc_ws.html") != -1 || sc_path.indexOf("index_01.html") != -1) {
				s.prop12 = "REPEAT>" + "DC";
			} else {
				s.prop12 = "REPEAT>" + "OTHER";
			}
		} else if(sc_path.indexOf("/member/support/") != -1) {
			if(sc_path.indexOf("/transfer_j/index.html") != -1 || sc_path.indexOf("/transfer_vm/index.html") != -1) {
				s.prop12 = "REPEAT>" + "MUFG";
			} else if(sc_path.indexOf("/transfer_a/index.html") != -1) {
				s.prop12 = "REPEAT>" + "AMEX";
			} else {
				s.prop12 = "REPEAT>" + "OTHER";
			}
		} else if(sc_path.indexOf("/member/rule/") != -1) {
			if(sc_path.indexOf("/mufgcard/index.html") != -1) {
				s.prop12 = "REPEAT>" + "MUFG";
			} else if(sc_path.indexOf("/nicos/index.html") != -1) {
				s.prop12 = "REPEAT>" + "NICOS";
			} else if(sc_path.indexOf("/dc/index.html") != -1) {
				s.prop12 = "REPEAT>" + "DC";
			} else if(sc_path.indexOf("/amex/index.html") != -1) {
				s.prop12 = "REPEAT>" + "AMEX";
			} else {
				s.prop12 = "REPEAT>" + "OTHER";
			}
		} else {
			s.prop12 = "REPEAT>" + "OTHER";
		}
	} else if(s.prop11 == "SEARCH") {
		if(s.Util.getQueryParam('site[]')) {
			s.prop12 = "SEARCH>" + "PLURAL";
		} else if(s.Util.getQueryParam('site')) {
			var searchBrand= s.Util.getQueryParam('site');
			if(searchBrand == "default") {
				s.prop12 = "SEARCH>" + "MUFG";
			} else if(searchBrand == "dc") {
				s.prop12 = "SEARCH>" + "DC";
			} else if(searchBrand == "nicos") {
				s.prop12 = "SEARCH>" + "NICOS";
			} else if(searchBrand == "amex") {
				s.prop12 = "SEARCH>" + "AMEX";
			} else if(searchBrand == "ja") {
				s.prop12 = "SEARCH>" + "JA";
			} else if(searchBrand == "jcb") {
				s.prop12 = "SEARCH>" + "UFJJCB";
			} else if(searchBrand == "all") {
				s.prop12 = "SEARCH>" + "ALL";
			} else {
				s.prop12 = "SEARCH>" + "OTHER";
			}
		} else {
			s.prop12 = "SEARCH>" + "OTHER";
		}
	} else if(s.prop11 == "LANDING") {
		if(splitPath[2] == "dc") {
			s.prop12 = "LANDING>" + "DC";
		} else if(splitPath[2] == "nicos") {
			s.prop12 = "LANDING>" + "NICOS";
		} else if(splitPath[2] == "amex") {
			s.prop12 = "LANDING>" + "AMEX";
		} else if(splitPath[2] == "ja") {
			s.prop12 = "LANDING>" + "JA";
		} else if(splitPath[2] == "ufj") {
			s.prop12 = "LANDING>" + "UFJJCB";
		} else if(splitPath[2] == "mufgcard") {
			s.prop12 = "LANDING>" + "MUFG";
		} else {
			s.prop12 = "LANDING>" + "OTHER";
		}
	} else {
		s.prop12 = "D=c11";
	}

	/*Category(Small)*/
	if(s.prop12 == "NEW>OTHER") {
		if(splitPath[1]) {
			if(!splitPath[2]) {
				s.prop13 = s.prop12 + ">" + "index.html";
			} else {
				s.prop13 = s.prop12 + ">" + splitPath[2]
			}
		}
	} else if(s.prop12.indexOf("NEW>") != -1) {
		if(splitPath[2]) {
			if(!splitPath[3]) {
				s.prop13 = s.prop12 + ">" + "index.html";
			} else {
				s.prop13 = s.prop12 + ">" + splitPath[3]
			}
		}
	} else if(s.prop12 == "REPEAT>OTHER") {
		if(!splitPath[1]) {
			s.prop13 = s.prop12 + ">" + "index.html";
		} else {
			s.prop13 = s.prop12 + ">" + splitPath[1]
		}
	} else if(s.prop12.indexOf("REPEAT") != -1) {
		if(splitPath[1]) {
			if(!splitPath[2]) {
				s.prop13 = s.prop12 + ">" + "index.html";
			} else {
				s.prop13 = s.prop12 + ">" + splitPath[2]
			}
		}
	} else if(s.prop12 == "FAQ>TOP") {
		s.prop13 = "D=c12";
	} else if(s.prop12.indexOf("FAQ") != -1) {
		if(!splitPath[1] || (splitPath[1] == "app" && !splitPath[2])) {
			s.prop13 = s.prop12 + ">" + "TOP";
		} else if(sc_path.indexOf("/list/") != -1) {
			s.prop13 = s.prop12 + ">" + "LIST";
		} else if(sc_path.indexOf("/detail/") != -1) {
			s.prop13 = s.prop12 + ">" + "DETAIL";
		} else {
			s.prop13 = s.prop12 + ">" + "OTHER";
		}
	} else if(s.prop12.indexOf("SEARCH") != -1) {
		s.prop13 = "D=c12";
	} else if(s.prop12.indexOf("LANDING>UFJJCB") != -1) {
		if(splitPath[3]) {
			if(!splitPath[4]) {
				s.prop13 = s.prop12 + ">" + "index.html";
			} else {
				s.prop13 = s.prop12 + ">" + splitPath[4]
			}
		} else {
			s.prop13 = "D=c12";
		}
	} else if(s.prop12.indexOf("LANDING>") != -1) {
		if(splitPath[2]) {
			if(!splitPath[3]) {
				s.prop13 = s.prop12 + ">" + "index.html";
			} else {
				s.prop13 = s.prop12 + ">" + splitPath[3]
			}
		} else {
			s.prop13 = "D=c12";
		}

	} else {
		s.prop13 = "D=c11";
	}

	/*Category(Small_2)*/
	if(s.prop11 == "NEW") {
		s.prop14 = "D=c13";
	} else if(s.prop12.indexOf("REPEAT>OTHER") != -1) {
		if(splitPath[1]) {
			if(!splitPath[2]) {
				s.prop14 = s.prop13 + ">" + "index.html";
			} else {
				s.prop14 = s.prop13 + ">" + splitPath[2]
			}
		} else {
			s.prop14 = "D=c13";
		}
	} else if(s.prop12.indexOf("REPEAT>") != -1) {
		if(splitPath[2]) {
			if(!splitPath[3]) {
				s.prop14 = s.prop13 + ">" + "index.html";
			} else {
				s.prop14 = s.prop13 + ">" + splitPath[3]
			}
		} else {
			s.prop14 = "D=c13";
		}
	} else if(s.prop11 == "FAQ") {
		if(s.prop12 == "FAQ>TOP") {
			s.prop14 = "D=c12";
		} else if(s.prop13.indexOf("TOP") != -1) {
			s.prop14 = "D=c13";
		} else if(s.prop13.indexOf("FAQ") != -1 && s.prop13.indexOf("LIST") != -1) {
			for(var i =0;i < splitPath.length;i++) {
				if(splitPath[i] == "c") {
					i++;
					s.prop14 = s.prop13 + ">" + splitPath[i];
					break;
				} else {
					s.prop14 = "D=c13";
				}
			}
		} else if(s.prop13.indexOf("FAQ") != -1 && s.prop13.indexOf("DETAIL") != -1) {
			for(var i =0;i < splitPath.length;i++) {
				if(splitPath[i] == "a_id") {
					i++;
					s.prop14 = s.prop13 + ">" + splitPath[i];
					break;
				} else {
					s.prop14 = "D=c13";
				}
			}
		} else {
			s.prop14 = "D=c13";
		}
	} else if(s.prop12.indexOf("SEARCH") != -1) {
		s.prop14 = "D=c12";
	} else if(s.prop12.indexOf("LANDING") != -1) {
		s.prop14 = "D=c13";
	} else {
		s.prop14 = "D=c11";
	}

	//FAQ Exclusion
	if(sc_domain.indexOf(".cr.mufg.jp") != -1 && splitPath[2] != "faq") {
		//Category
		s.eVar53 = "D=c11";
		if(s.prop12.indexOf("D=") != -1) {
			s.eVar54 = s.prop12;
		} else {
			s.eVar54 = "D=c12";
		}

		if(s.prop13.indexOf("D=") != -1) {
			s.eVar55 = s.prop13;
		} else {
			s.eVar55 = "D=c13";
		}

		if(s.prop14.indexOf("D=") != -1) {
			s.eVar56 = s.prop14;
		} else {
			s.eVar56 = "D=c14";
		}

		//Hierarchy
		s.eVar57 = "D=c66";
		s.eVar58 = "D=c67";
		s.eVar59 = "D=c68";
		s.eVar60 = "D=c69";
		s.eVar61 = "D=c70";

		if(sc_path.indexOf("/support/") != -1) {
			if(sc_path.indexOf("/mufgcard/support/webs/") != -1 || sc_path.indexOf("/dc/support/webs/") != -1
				|| sc_path.indexOf("/nicos/support/webs/") != -1 || sc_path.indexOf("/amex/support/webs/") != -1) {
				//Category
				s.eVar62 = "D=c11";
				if(s.prop12.indexOf("D=") != -1) {
					s.eVar63 = s.prop12;
				} else {
					s.eVar63 = "D=c12";
				}

				if(s.prop13.indexOf("D=") != -1) {
					s.eVar64 = s.prop13;
				} else {
					s.eVar64 = "D=c13";
				}

				if(s.prop14.indexOf("D=") != -1) {
					s.eVar65 = s.prop14;
				} else {
					s.eVar65 = "D=c14";
				}
			}
		} else if(sc_path.indexOf("/request/") == -1 && sc_path.indexOf("/contact/") == -1 && sc_path.indexOf("/voice/") == -1) {
				//Category
				s.eVar62 = "D=c11";
				if(s.prop12.indexOf("D=") != -1) {
					s.eVar63 = s.prop12;
				} else {
					s.eVar63 = "D=c12";
				}

				if(s.prop13.indexOf("D=") != -1) {
					s.eVar64 = s.prop13;
				} else {
					s.eVar64 = "D=c13";
				}

				if(s.prop14.indexOf("D=") != -1) {
					s.eVar65 = s.prop14;
				} else {
					s.eVar65 = "D=c14";
				}
		}
	}

	//FAQ Answer CV event50
	if(s.prop13.indexOf("FAQ") != -1 && s.prop13.indexOf("DETAIL") != -1) {
		s.events = "event50";
	}

	//Replacement
	if(s.eVar51) {
		s.list1 = s.prop51 = "D=v51";
	}

	//FAQ URL
	if(sc_domain.indexOf(".custhelp.com") != -1 || splitPath[2] == "faq") {
		s.eVar15 = s.prop15 = "D=g";
		if(sc_path.indexOf("/related/") != -1) {
			s.eVar52 = "Widget";
			s.prop52 = "D=v52";
		} else if((sc_path.indexOf("/kw/") != -1 && sc_path.indexOf("/list/") != -1)
			|| (sc_path.indexOf("/kw/") != -1 && document.referrer.indexOf("/list/") != -1)) {
			s.eVar52 = "Search";
			s.prop52 = "D=v52";
		}
	}

	//inboundMarketing
	s.channelManager('','','0');

	var InflowKbn_1 = "";
	var InflowKbn_2 = "";

	if (document.referrer) {
		var refDmain
		refDmain = document.referrer.split("/")[2];
	}

	if(s.eVar41){
		var splitCamp = s.eVar41.split("_");
		if(splitCamp.length != 1){
			if (splitCamp[0] == "lt") {
				InflowKbn_1 = "LIS";
				if (splitCamp[1] == "yh") {
					InflowKbn_2 = "LIS:yh";
				} else if (splitCamp[1] == "gl") {
					InflowKbn_2 = "LIS:gl";
				} else {
					InflowKbn_2 = "LIS:oth";
				}
			} else if (splitCamp[0] == "pu") {
				InflowKbn_1 = "PU";
				InflowKbn_2 = "PU:" + splitCamp[1];
			} else if (splitCamp[0] == "nw") {
				InflowKbn_1 = "NW";
				InflowKbn_2 = "NW:" + splitCamp[1];
			} else if (splitCamp[0] == "rt") {
				InflowKbn_1 = "RT";
				InflowKbn_2 = "RT:" + splitCamp[1];
			} else if (splitCamp[0] == "af") {
				InflowKbn_1 = "AF";
				InflowKbn_2 = "AF:" + splitCamp[1];
			} else if (splitCamp[0] == "sns") {
				InflowKbn_1 = "SNS";
				InflowKbn_2 = "SNS:" + splitCamp[1];
			} else if (splitCamp[0] == "qr") {
				InflowKbn_1 = "QR";
				InflowKbn_2 = "QR:" + splitCamp[1];
			} else {
				if (refDmain) {
					InflowKbn_1 = "AACID";
					InflowKbn_2 = "AACID:" + refDmain;
				} else {
					InflowKbn_1 = "AACID";
					InflowKbn_2 = "AACID:oth";
				}
			}
		} else {
			InflowKbn_1 = "AACID";
			InflowKbn_2 = "AACID:" + s.campaign;
		}
	} else if (s.eVar44) {
		InflowKbn_1 = "ML";
		InflowKbn_2 = "ML";
	} else if (s._channel == "Natural Search") {
		InflowKbn_1 = "ORG";
		InflowKbn_2 = "ORG:co:" + s._partner;
	} else if (refDmain) {
		if(refDmain.indexOf("custhelp.com") != -1 || refDmain.indexOf("cr.mufg.jp") != -1) {
			if(sc_1stOr2nd==1) {
				InflowKbn_1 = "DIR";
				InflowKbn_2 = "DIR";
			}
		} else {
			if(sc_1stOr2nd==1) {
				InflowKbn_1 = "OTH";
				InflowKbn_2 = "OTH:" + refDmain;
			}
		}

		if(!InflowKbn_1) {
			var snsDomainList = new Array();
			snsDomainList = ["facebook.com","t.co","twitter.com","youtube.com"];
			for (var y =0;y < snsDomainList.length;y++) {
				if (refDmain.indexOf(snsDomainList[y]) !=-1) {
					InflowKbn_1 = "SNS";
					InflowKbn_2 = "SNS:" + refDmain;
					break;
				}
			}

			var munDomainList = new Array();
			munDomainList = ["www.point-meijin.com","www.mun-prepaid.com","webyutai.cr.mufg.jp","mun-ticket.jp","ec-solution.ne.jp","www.saiyo.cr.mufg.jp","okaimononet.com"];
			for (var y =0;y < munDomainList.length;y++) {
				if (refDmain.indexOf(munDomainList[y]) !=-1) {
					InflowKbn_1 = "REL";
					InflowKbn_2 = "REL:" + refDmain;
					break;
				}
			}
		}
	} else {
		if (sc_1stOr2nd==1) {
			InflowKbn_1 = "DIR";
			InflowKbn_2 = "DIR";
		}
	}

	if(InflowKbn_1 && InflowKbn_2) {
		s.eVar37 = InflowKbn_1;
		s.eVar38 = InflowKbn_2;
		s.prop37 = "D=v37";
		s.prop38 = "D=v38";
	}

	//search
	if(s.eVar16){
		s.prop16 = "D=v16";
	}

	if(s.eVar17){
		s.prop17 = "D=v17";
	}

	//event6 copy
	if(s.events) {
		if(s.events.indexOf("event6") != -1 && s.events.indexOf("event41") == -1) {
			s.events += ",event41";
		}
	}

	s.fid = "";
//-------------------------------------------------------- Renewal 2015/10/13 -----------//


	//New FAQ Site
	if((splitPath[1] == "faq") && (splitPath[2] == "detail")) {

		var brand_flg = "";
		if (document.referrer) {
			var faq_ref;
			faq_ref = document.referrer.split("/");
		}

		//brand select
		if (document.cookie.match(/f_brand=([^;]*)/)) {
			var cookie_param = "";
			cookie_param = document.cookie.match(/f_brand=([^;]*)/)[1];
			s.eVar76 = brand_flg = cookie_param;
		}

		var faq_inout = aa_refdmainFAQ(refDmain);
		if (faq_inout == 1) {
			if (typeof(s.events) !="undefined") {
				s.events+=",event61";
			} else {
				s.events="event61";
			}
		} else if (faq_inout == 2) {
			if (typeof(s.events) !="undefined") {
				s.events+=",event62";
			} else {
				s.events="event62";
			}
		} else {
			if (typeof(s.events) !="undefined") {
				s.events+=",event63";
			} else {
				s.events="event63";
			}
		}

		switch(brand_flg) {
		case 'm':
			if (faq_inout == 1) {
				s.events += ",event64";
			} else if (faq_inout == 2) {
				s.events += ",event65";
			} else {
				s.events += ",event66";
			}
			break;

		case 'd':
			if (faq_inout == 1) {
				s.events += ",event67";
			} else if (faq_inout == 2) {
				s.events += ",event68";
			} else {
				s.events += ",event69";
			}
			break;

		case 'n':
			if (faq_inout == 1) {
				s.events += ",event70";
			} else if (faq_inout == 2) {
				s.events += ",event71";
			} else {
				s.events += ",event72";
			}
			break;

		case 'a':
			if (faq_inout == 1) {
				s.events += ",event73";
			} else if (faq_inout == 2) {
				s.events += ",event74";
			} else {
				s.events += ",event75";
			}
			break;

		case 'ja':
			if (faq_inout == 1) {
				s.events += ",event76";
			} else if (faq_inout == 2) {
				s.events += ",event77";
			} else {
				s.events += ",event78";
			}
			break;

		case 'apply':
			if (faq_inout == 1) {
				s.events += ",event81";
			} else if (faq_inout == 2) {
				s.events += ",event82";
			} else {
				s.events += ",event83";
			}
			break;

		case 'uj':
			if (faq_inout == 1) {
				s.events += ",event84";
			} else if (faq_inout == 2) {
				s.events += ",event85";
			} else {
				s.events += ",event86";
			}
			break;

		case 'loan':
			if (faq_inout == 1) {
				s.events += ",event87";
			} else if (faq_inout == 2) {
				s.events += ",event88";
			} else {
				s.events += ",event89";
			}
			break;

		default:
			if (faq_inout == 1) {
				s.events += ",event90";
			} else if (faq_inout == 2) {
				s.events += ",event91";
			} else {
				s.events += ",event92";
			}
			break;

		}
	}


	//sid
	if(s.eVar43) {
		s.eVar77 = s.eVar79 = "D=v43";
	}

	//cid
	if(s.campaign){
		s.eVar78 = "D=v0";
	}

//-------------------------------------------------------- FAQ Report 2020/01/31 -----------//


	s.plugins="track_off";

	sc_doplugin_once = true;
}
s.doPlugins=s_doPlugins


/*function*/
function sc_wid_click(wid){
	if(wid){
		if(wid.indexOf("-") != -1 && wid.indexOf("_") != -1){
			splwid = wid.split("-");
			prod = splwid[1];
			cparam = wid;
			brand = splwid[0].split("_")[0];
			s=s_gi(s_account);
			s.linkTrackVars='products,eVar18,eVar7,events';
			s.linkTrackEvents='prodView';
			s.products=";" + brand + "-" + prod;
			s.eVar18=cparam;
			s.eVar7=brand;
			s.events="prodView";
			s.tl(this,'o','MemberSite_BannerClick:'+s.eVar7);
		}
	}
}

function sc_cstel_click(Brand){
	s=s_gi(s_account);
	s.linkTrackVars='events,eVar7';
	s.linkTrackEvents='event3';
	s.events='event3';
	s.eVar7=Brand;
	s.tl(this,'o','CS_TelClick:'+s.eVar7);
}

function sc_csmail_click(Brand){
	s=s_gi(s_account);
	s.linkTrackVars='events,eVar7';
	s.linkTrackEvents='event4';
	s.events='event4';
	s.eVar7=Brand;
	s.tl(this,'o','CS_MailClick:'+s.eVar7);
}

function sc_login_click(Brand){
	// s=s_gi(s_account);
	// s.linkTrackVars='events,eVar7,eVar8,eVar9,eVar10';
	// s.linkTrackEvents='event2';
	// s.events='event2';
	// s.eVar7=Brand;
	// s.eVar8='loginuser';
	// s.eVar9='loginuser';
	// s.eVar10='loginuser';
	// s.tl(this,'o','WebMemberLoginClick:'+s.eVar7);
	return true;
}

function sc_force_exit(url){
	s=s_gi(s_account);
	s.tl(this,'e','exit:'+ url);
}

function sc_send_other(url){
	s=s_gi(s_account);
	s.tl(this,'o','send:' + url);
}

function sc_intcmp(bid){
	// s=s_gi(s_account);
	// s.linkTrackVars='eVar46';
	// s.eVar46=bid;
	// s.tl(this,'o','internal_campagin');
	return true;
}

function aa_clickAdmission(){
	s=s_gi(s_account);
	s.linkTrackVars='events';
	s.linkTrackEvents='event44';
	s.events='event44';
	s.tl(this,'o','aa_clickAdmission');
}

function aa_clickAccordion(){
	s=s_gi(s_account);
	s.linkTrackVars='events';
	s.linkTrackEvents='event48';
	s.events='event48';
	s.tl(this,'o','aa_clickAccordion');
}

function aa_clickPhoneNumber(){
	s=s_gi(s_account);
	s.linkTrackVars='events';
	s.linkTrackEvents='event49';
	s.events='event49';
	s.tl(this,'o','aa_clickPhoneNumber');
}

function aa_clickAppConfirmation(){
	s=s_gi(s_account);
	s.linkTrackVars='events';
	s.linkTrackEvents='event55';
	s.events='event55';
	s.tl(this,'o','aa_clickAppConfirmation');
}

function aa_clickAppTravel(){
	s=s_gi(s_account);
	s.linkTrackVars='events';
	s.linkTrackEvents='event55';
	s.events='event55';
	s.tl(this,'o','aa_clickAppTravel');
}

function aa_clickPointMeijin(){
	s=s_gi(s_account);
	s.linkTrackVars='events';
	s.linkTrackEvents='event52';
	s.events='event52';
	s.tl(this,'o','aa_clickPointMeijin');
}

function aa_clickPrepaid(){
	s=s_gi(s_account);
	s.linkTrackVars='events';
	s.linkTrackEvents='event53';
	s.events='event53';
	s.tl(this,'o','aa_clickPrepaid');
}

function aa_clickOtherSite(){
	s=s_gi(s_account);
	s.linkTrackVars='events';
	s.linkTrackEvents='event54';
	s.events='event54';
	s.tl(this,'o','aa_clickOtherSite');
}

function aa_clickWalletQAYes(cl){
	s=s_gi(s_account);
	s.tl(this,'o', cl);
}

function aa_clickWalletQANo(cl){
	s=s_gi(s_account);
	s.tl(this,'o', cl);
}

$('.acdWaletteQA').click(function () {
	var $self = $(this);
	var $linkname = $self.attr("data-AcNo");
    if (!$self.hasClass("open")) {
		s=s_gi(s_account);
		s.tl(this,'o',$linkname);
	} else if ($(this).hasClass("open")) {
	}
});

$('.analysisPhoneNum').click(function () {
	var $self = $(this);
	var $linkname = $self.attr("data-telNo");
    if($linkname){
		s=s_gi(s_account);
		s.tl(this,'o',$linkname);
	}
});

function aa_clickCPLPLink(cl){
	s=s_gi(s_account);
	s.tl(this,'o', cl, null,'navigate');
}

/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */

/* normalize pageName function */
function getPageNameMTL(delimiter, paramDelimiter, hashDelimiter) {
//config
//object : s
//array  : sc_pageNameParams
//array  : sc_pageNameHashes
//string : s.dirIndexes
//string : s.pageNameDomain
//func   : s.getQueryParam()
//url param using for pageName

	//init config
	var dirIn =(s.dirIndexes)?s.dirIndexes:"index.html";
	var pnDmn =(s.pageNameDomain)?s.pageNameDomain:location.host;
	var baseURL = pnDmn + sc_path;
	var arrayURL;
	var fileName;
	var hashName = location.hash;
	var pageName;
	if(typeof(delimiter) == "undefined"){delimiter ="/"};
	if(typeof(paramDelimiter) == "undefined"){paramDelimiter ="?"};
	if(typeof(hashDelimiter) == "undefined"){hashDelimiter =""};

	//exclude params
	arrayURL = baseURL.split("#")[0].split("?")[0].split("/");
	fileName = arrayURL[arrayURL.length-1];
	if(fileName =="" || fileName.indexOf("index.")>-1){
		arrayURL[arrayURL.length-1]=dirIn;
	}
	pageName =arrayURL.join(delimiter);

	//add params
	if(typeof(sc_pageNameParams) !="undefined"){
		var sep =paramDelimiter;
		for (var sci in sc_pageNameParams){
			if(s.Util.getQueryParam(sc_pageNameParams[sci])){
				pageName += sep + sc_pageNameParams[sci]+"="+s.Util.getQueryParam(sc_pageNameParams[sci]);
				sep = (paramDelimiter =="?" || paramDelimiter =="&" )?"&":paramDelimiter;
			}
		}
	}
	//add hashes
	if(typeof(sc_pageNameHashes) !="undefined"){
		var sep =hashDelimiter;
		for (var sci in sc_pageNameHashes){
			if(hashName ==sc_pageNameHashes[sci]){
				pageName += sep + hashName;
			}
		}
	}
	return pageName;
}


/*
 * Function MaxBytesString
 */
function MaxBytesString(f,d){var e=0;var a="";for(var b=0;b<f.length;b++){
var g=f.charCodeAt(b);if((g>=0&&g<129)||(g==63728)||(g>=65377&&g<65440)||(g>=63729&&g<63732)){
e+=1}else{e+=2}if(e>=d){break}a+=f.charAt(b)}return a};

/*
 * Plugin: get1stOr2ndpage 0.2
 * require getVisitStart
 * returns 1 on first page of visit
 * returns 2 on second page of visit but not reload
 * otherwise 0
 * 20110203_13_26
 */
s.get1stOr2ndpage = function() {
	if(s.getVisitStart("sc_visit")){
		//when landingpage
		s.c_w('sc_fs', 'ld',0);
		s.c_w('sc_fspage', location.href, 0);
		return 1;
	}else if(s.c_r('sc_fs')=="ld" && location.href != s.c_r('sc_fspage')){
		//when 2ndpage
		s.c_w('sc_fs', '',-1);
		s.c_w('sc_fspage', '', -1);
		return 2;
	}
	return 0;
}

/*
 * Plugin: getVisitStart v2.0 - returns 1 on first page of visit
 * otherwise 0
 */
s.getVisitStart=new Function("c",""
+"var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c"
+")){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;");


/*
 * Plugin: getPageName - parse URL and return
 */
s.getPageName=new Function("u",""
+"var s=this,v=u?u:''+location.href,x=v.indexOf(':'),y=v.indexOf('/',"
+"x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s."
+"queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub"
+"string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i"
+"ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d"
+"efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;"
+"z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p."
+"substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x"
+";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s"
+"ubstring(x+1)}return n");
s.fl=function(x,l){return x?(''+x).substring(0,l):x};
s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);
y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;
z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};

/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");



/*
 * Plugin: getTimeParting 1.3 - Set timeparting values based on time zone
 * DST disabled
 */

s.getTimeParting=new Function("t","z","y",""
+"var dc,ne,z,y,f,ne,gmar,dsts,gnov,dste,spr,fl,cd,utc,tz,thisy,thish,thismin,thisd,t,dt;"
+"dc=new Date('1/1/2000');f=15;ne=8;if(dc.getDay()!=6||"
+"dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);"
+"if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay("
+");gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'"
+"+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();"
+"if(cd>spr&&cd<fl){z=z}else{z=z};utc=cd.getTime()+(cd.getTimezoneO"
+"ffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear("
+");var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Fr"
+"iday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thi"
+"sh=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow="
+"days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>3"
+"0){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){th"
+"ish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+'"
+":'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return tim"
+"estring}if(t=='d'){return daystring};if(t=='w'){return en"
+"dstring}}};"
);

/*
 * Plugin: getNewRepeat 1.1 - Return whether user is new or repeat
 */
s.getNewRepeat=new Function("Expire",""
+"var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();if(!Expire)"
+"{Expire=30}e.setTime(ct+Expire*24*60*60*1000);cval=s.c_r('s_nr');if(c"
+"val.length==0){s.c_w('s_nr',ct,e);return'New'}if(cval.length!=0&&ct-c"
+"val<30*60*1000){s.c_w('s_nr',ct,e);return'New'}if(cval<1123916400001)"
+"{e.setTime(cval+Expire*24*60*60*1000);s.c_w('s_nr',ct,e);return'Repea"
+"t'}else{return'Repeat'}");

/*
 * Plugin: clickThruQuality 0.8 custom version by yt
 */
s.clickThruQuality_yt=new Function("tcth_ev","cp_ev",""
+"if(i<=1){var ev=(s.events?s.events+',':'');if(s.c_r('cf')>=1){s.c_w('"
+"cf',-1,0);s.events=ev+cp_ev;}else if(s.c_r('cf')>-1){s.events=ev+tcth"
+"_ev;s.c_w('cf',1,0);}i++;}");

/*
 * Plugin: getCk v0.1 - get Cookie
 */
s.getCk=new Function("c",""
+"var s=this,k=s.c_r(c);return k;");

/*
 * Plugin: setCk v0.1 - set Cookie
 */
s.setCk=new Function("c","v","e",""
+"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);s.c"
+"_w(c,v,e?a:0);");

/*
 * Utility Function: p_c
 */
s.p_c=new Function("v","c",""
+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+"ngth:x).toLowerCase()?v:0");
/*
 * Utility Function: p_gh
 */
s.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");

/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * s.join: 1.0 - s.join(v,p)
 */

s.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");

/*
 * Utility clearVars v0.1 - clear variable values (requires split 1.5)
 */
s.clearVars=new Function("l","f",""
+"var s=this,vl,la,vla;l=l?l:'';f=f?f:'';vl='pageName,purchaseID,chan"
+"nel,server,pageType,campaign,state,zip,events,products';for(var n=1"
+";n<51;n++)vl+=',prop'+n+',eVar'+n+',hier'+n;if(l&&(f==1||f==2)){if("
+"f==1){vl=l}if(f==2){la=s.split(l,',');vla=s.split(vl,',');vl='';for"
+"(x in la){for(y in vla){if(la[x]==vla[y]){vla[y]=''}}}for(y in vla)"
+"{vl+=vla[y]?','+vla[y]:'';}}s.pt(vl,',','p_clr',0);return true}else"
+" if(l==''&&f==''){s.pt(vl,',','p_clr',0);return true}else{return fa"
+"lse}");
s.p_clr=new Function("t","var s=this;s[t]=''");

/*
 * Plugin Utility: Replace v1.0
 */

s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 * Plugin: getVisitStart v2.0 - returns 1 on first page of visit
 * otherwise 0
 */
s.getVisitStart=new Function("c",""
+"var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c"
+")){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;");

/*
 * Plugin Utility: Replace v1.0
 */

s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 *	Plug-in: crossVisitParticipation v1.7 - stacks values from
 *	specified variable in cookie and returns value
 */

s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
+"ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry"
+"[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli"
+"m:dl});if(ce)s.c_w(cn,'');return r;");

/*
 * channelManager v2.55 - Tracking External Traffic
 * multibyte support
 */
s.channelManager=new Function("a","b","c","d","e","f",""
+"var s=this,A,B,g,l,m,p,q,P,h,k,u,S,i,O,T,j,r,t,D,E,F,G,H,N,U,v=0,X,"
+"Y,W,n=new Date;n.setTime(n.getTime()+1800000);if(e){v=1;if(s.c_r(e)"
+")v=0;if(!s.c_w(e,1,n))s.c_w(e,1,0);if(!s.c_r(e))v=0;}g=s.referrer?s"
+".referrer:document.referrer;g=g.toLowerCase();if(!g)h=1;i=g.indexOf"
+"('?')>-1?g.indexOf('?'):g.length;j=g.substring(0,i);k=s.linkInterna"
+"lFilters.toLowerCase();k=s.split(k,',');for(m=0;m<k.length;m++){B=j"
+".indexOf(k[m])==-1?'':g;if(B)O=B;}if(!O&&!h){p=g;U=g.indexOf('//');"
+"q=U>-1?U+2:0;Y=g.indexOf('/',q);r=Y>-1?Y:i;u=t=g.substring(q,r).toL"
+"owerCase();P='Other Natural Referrers';S=s.seList+'>'+s._extraSearc"
+"hEngines;if(d==1){j=s.repl(j,'oogle','%');j=s.repl(j,'ahoo','^');g="
+"s.repl(g,'as_q','*');}A=s.split(S,'>');for(i=0;i<A.length;i++){D=A["
+"i];D=s.split(D,'|');E=s.split(D[0],',');for(G=0;G<E.length;G++){H=j"
+".indexOf(E[G]);if(H>-1){if(D[2])N=u=D[2];else N=t;if(d==1){N=s.repl"
+"(N,'#',' - ');g=s.repl(g,'*','as_q');N=s.repl(N,'^','ahoo');N=s.rep"
+"l(N,'%','oogle');}i=s.split(D[1],',');for(k=0;k<i.length;k++){"
+"try{l=s.Util.getQueryParam(i[k],decodeURIComponent(g),'')}catch(ignr){l="
+"'non_utf8'};l=l.toLowerCase();if(l)break;}}}}}if(!O||f!='1'"
+"){O=s.Util.getQueryParam(a,'',b);if(O){u=O;if(N)P='Paid Search';else P='Unk"
+"nown Paid Channel';}if(!O&&N){u=N;P='Natural Search';}}if(h==1&&!O&"
+"&v==1)u=P=t=p='Typed/Bookmarked';g=s._channelDomain;if(g){k=s.split"
+"(g,'>');for(m=0;m<k.length;m++){q=s.split(k[m],'|');r=s.split(q[1],"
+"',');S=r.length;for(T=0;T<S;T++){Y=r[T].toLowerCase();i=j.indexOf(Y"
+");if(i>-1)P=q[0];}}}g=s._channelParameter;if(g){k=s.split(g,'>');fo"
+"r(m=0;m<k.length;m++){q=s.split(k[m],'|');r=s.split(q[1],',');S=r.l"
+"ength;for(T=0;T<S;T++){U=s.Util.getQueryParam(r[T]);if(U)P=q[0];}}}g=s._"
+"channelPattern;if(g){k=s.split(g,'>');for(m=0;m<k.length;m++){q=s.s"
+"plit(k[m],'|');r=s.split(q[1],',');S=r.length;for(T=0;T<S;T++){Y=r["
+"T].toLowerCase();i=O.toLowerCase();H=i.indexOf(Y);if(H==0)P=q[0];}}"
+"}X=P+l+t;c=c?c:'c_m';if(c!='0')X=s.getValOnce(X,c,0);if(X){s._refer"
+"rer=p?p:'n/a';s._referringDomain=t?t:'n/a';s._partner=N?N:'n/a';s._"
+"campaignID=O?O:'n/a';s._campaign=u?u:'n/a';s._keywords=l?l:N?'Keywo"
+"rd Unavailable':'n/a';s._channel=P?P:'n/a';}");
/* Grouped SearchEngine List */
s.seList="www.google.co.jp|q,as_q|Google - Japan>search.yahoo.co.jp|p,va|Yahoo! - Japan>bing.com|q|Microsoft Bing>www.google.com|q,as_q|Google>websearch.rakuten.co.jp|qt|Rakuten>www.googleadservices.com||googleadservices.com>search.goo.ne.jp|MT|Goo (Jp.)>search.biglobe.ne.jp|search|Biglobe>search.smt.docomo.ne.jp|MT|Docomo.ne.jp>search.fenrir-inc.com|q|Sleipnir>www.google.com.tw|q,as_q|Google - Taiwan>search.nifty.com|q|Nifty>search.ask.com|q|Ask Jeeves>search.azby.fmworld.net|q|FMWORLD>search.auone.jp|q|au>www.google.com.hk|q,as_q|Google - Hong Kong>search.myjcom.jp|q|J:COM>search.yahoo.com|p|Yahoo!>www.so-net.ne.jp/search|query|So-net>www.baidu.com|wd,word|Baidu>www.google.co.th|q,as_q|Google - Thailand>www.google.co.uk|q,as_q|Google - United Kingdom>www.google.com.sg|q,as_q|Google - Singapore>www.google.co.kr|q,as_q|Google - Korea>www.google.com.au|q,as_q|Google - Australia>www.haosou.com|q|Haosou (so.com)>www.google.ca|q,as_q|Google - Canada>www.google.de|q,as_q|Google - Germany>www.google.fr|q,as_q|Google - France>www.google.co.in|q,as_q|Google - India>excite.co.jp/search|search|Excite - Japan>www.google.com.br|q,as_q|Google - Brasil>search.naver.com|query|Naver>www.google.co.id|q,as_q|Google - Indonesia>www.google.com.ph|q,as_q|Google - Philippines>www.google.ru|q,as_q|Google - Russia>www.google.com.vn|q,as_q|Google - Viet Nam>www.google.co.nz|q,as_q|Google - New Zealand>www.google.it|q,as_q|Google - Italy>www.msn.com|q|MSN>search.livedoor.com|q|Livedoor.com>search.jword.jp|name|JWord>www.google.es|q,as_q|Google - Spain>isearch.avg.com|q|AVG Secure Search>search.myway.com|searchfor|MyWay.com>www.google.nl|q,as_q|Google - Netherlands>www.google.com.mx|q,as_q|Google - Mexico>www.google.ch|q,as_q|Google - Switzerland>www.google.be|q,as_q|Google - Belgium>www.google.pl|q,as_q|Google - Poland>www.google.com.tr|q,as_q|Google - Turkey>www.sogou.com|query|Sogou>www.google.ae|q,as_q|Google - United Arab Emirates>www.google.se|q,as_q|Google - Sweden>www.google.com.kh|q,as_q|Google - Cambodia>www.google.com.ua|q,as_q|Google - Ukraine>www.google.hu|q,as_q|Google - Hungary>www.google.at|q,as_q|Google - Austria>www.google.fi|q,as_q|Google - Finland>www.google.com.ar|q,as_q|Google - Argentina>www.google.dk|q,as_q|Google - Denmark>www.google.cz|q,as_q|Google - Czech Republic>www.google.ie|q,as_q|Google - Ireland>www.google.com.my|q,as_q|Google - Malaysia>www.google.bg|q,as_q|Google - Bulgaria>www.google.com.pe|q,as_q|Google - Peru>www.google.ro|q,as_q|Google - Romania>www.google.no|q,as_q|Google - Norway>www.google.cl|q,as_q|Google - Chile>www.google.com.pk|q,as_q|Google - Pakistan>www.google.co.il|q,as_q|Google - Israel>www.google.com.bd|q,as_q|Google - Bangladesh>www.google.com.sa|q,as_q|Google - Saudi Arabia>www.google.lk|q,as_q|Google - Sri Lanka>www.google.mn|q,as_q|Google - Mongolia>www.google.com.co|q,as_q|Google - Colombia>www.google.com.eg|q,as_q|Google - Egypt>www.google.pt|q,as_q|Google - Portugal>www.google.gr|q,as_q|Google - Greece>www.google.com.np|q,as_q|Google - Nepal>www.google.co.za|q,as_q|Google - South Africa>www.google.la|q,as_q|Google - Laos>tw.search.yahoo.com|p,va|Yahoo! - Taiwan>search-results.com|q|search-results.com>www.google.sk|q,as_q|Google - Slovakia>search.mywebsearch.com|searchfor|mywebsearch>www.google.rs|q,as_q|Google - Serbia>search.daum.net|q|Daum>yandex.ru,www.yandex.com|text|Yandex.ru>www.google.dz|q,as_q|Google - Algerie>www.google.hr|q,as_q|Google - Croatia>www.google.com.py|q,as_q|Google - Paraguay>s.luna.tv|q|Lunascape>www.google.kz|q,as_q|Google - Kazakhstan>search.mobile.yahoo.co.jp|p|YahooJapan - Mobile>search.aol.com,search.aol.ca|query,q|AOL.com Search>www.google.as|q,as_q|Google - American Samoa>www.google.mu|q,as_q|Google - Mauritius>www.google.com.bo|q,as_q|Google - Bolivia>sm.cn|q|sm.cn>www.google.si|q,as_q|Google - Slovenia>www.google.com.ec|q,as_q|Google - Ecuador>search.fresheye.com|kw|FreshEye>www.google.ge|q,as_q|Google - Repulic of Georgia>m.baidu.com|word|m.baidu.com>www.google.ee|q,as_q|Google - Estonia>www.google.lt|q,as_q|Google - Lithuania>www.google.by|q,as_q|Google - Belarus>www.google.co.ve|q,as_q|Google - Venezuela>www.google.co.tz|q,as_q|Google - Tanzania>www.google.com.gt|q,as_q|Google - Guatemala>www.google.jo|q,as_q|Google - Jordan>www.google.com.do|q,as_q|Google - Dominican Republic>www.google.az|q,as_q|Google - Azerbaijan>www.google.lv|q,as_q|Google - Latvia>www.google.lu|q,as_q|Google - Luxembourg>www.google.com.jm|q,as_q|Google - Jamaica>www.google.am|q,as_q|Google - Armenia>hk.search.yahoo.com|p,va|Yahoo! - Hong Kong>www.zensearch.com|q|ZenSearch>www.google.com.kw|q,as_q|Google - Kuwait>www.google.co.mz|q,as_q|Google - Mozambique>au.search.yahoo.com|p,va|Yahoo! - Australia>www.google.cm|q,as_q|Google - Cameroun>www.google.is|q,as_q|Google - Island>www.youdao.com|q|Youdao>www.google.com.mt|q,as_q|Google - Malta>www.google.com.cy|q,as_q|Google - Cyprus>www.google.ht|q,as_q|Google - Haiti>www.google.tn|q,as_q|Google - Tunisia>www.google.com.ng|q,as_q|Google - Nigeria>www.google.hn|q,as_q|Google - Honduras>www.google.iq|q,as_q|Google - Iraq>www.google.ba|q,as_q|Google - Bosnia-Hercegovina>www.google.sn|q,as_q|Google - Senegal>www.google.com.bh|q,as_q|Google - Bahrain>www.google.tt|q,as_q|Google - Trinidad and Tobago>go.mail.ru|q|Mail.ru>www.google.com.ni|q,as_q|Google - Nicaragua>www.google.com.bn|q,as_q|Google - Brunei>www.google.co.zm|q,as_q|Google - Zambia>www.google.mv|q,as_q|Google - Maldives>kakaku.com/search_results|query|Kakaku>www.google.com.et|q,as_q|Google - Ethiopia>es.search.yahoo.com|p,va|Yahoo! - Spain>www.google.com.uy|q,as_q|Google - Uruguay>uk.search.yahoo.com|p,va|Yahoo! - UK and Ireland>www.google.mg|q,as_q|Google - Madagasikara>www.google.ws|q,as_q|Google - Samoa>www.google.com.sv|q,as_q|Google - El Salvador>www.google.fm|q,as_q|Google - Micronesia>vn.search.yahoo.com|p,va|Yahoo! - Viet Nam>www.google.ps|q,as_q|Google - Palestinian territories>sg.search.yahoo.com|p,va|Yahoo! - Singapore>www.google.com.af|q,as_q|Google - Afghanistan>www.google.com.bz|q,as_q|Google - Belize>www.google.co.zw|q,as_q|Google - Zimbabwe>nz.search.yahoo.com|p,va|Yahoo! - New Zealand>www.google.com.na|q,as_q|Google - Namibia>www.google.je|q,as_q|Google - Jersey>www.google.com.pr|q,as_q|Google - Puerto Rico>www.google.co.bw|q,as_q|Google - Botswana>www.google.com.sb|q,as_q|Google - Solomon Islands>www.google.co.ke|q,as_q|Google - Kenya>www.google.com.pa|q,as_q|Google - Panama>www.google.rw|q,as_q|Google - Rwanda>www.google.com.ag|q,as_q|Google - Antigua and Barbuda>www.google.com.gi|q,as_q|Google - Isle of Gibraltar>search.alot.com|q|alot.com>www.google.cd|q,as_q|Google - Rep. Dem. du Congo>www.google.bs|q,as_q|Google - The Bahamas>www.google.gl|q,as_q|Google - Greenland>www.google.bi|q,as_q|Google - Burundi>ca.search.yahoo.com|p,va|Yahoo! - Canada>www.google.vg|q,as_q|Google - British Virgin Islands>search.start.sony.jp|MT|My VAIO>wsearch.ocn.ne.jp|MT|OCN>www.google.dj|q,as_q|Google - Djibouti>www.google.com.fj|q,as_q|Google - Fiji>www.google.co.vi|q,as_q|Google - Virgin Islands>www.google.md|q,as_q|Google - Moldova>fr.search.yahoo.com|p,va|Yahoo! - France>br.search.yahoo.com|p,va|Yahoo! - Brazil>yandex.com.tr|text|Yandex.com.tr>de.search.yahoo.com|q,as_q|Yahoo! - Germany";
/* SearchEngine addition */
s.seList = s.seList + ">livedoor-search.naver.jp|q|libedoor-search>search.hatena.ne.jp|word|hatena-search>search.auone.jp|q|au one>www.marsflag.com|q|MARSFLAG>www.mooter.co.jp|keywords|Mooter>www.namaan.net|query|NAMAAN>s.luna.tv|q|Luna.TV>so-net.ne.jp|query|So-net>search.jword.jp|name|JWord";


function aa_refdmainFAQ(rdomain) {
	if (rdomain == "search.cr.mufg.jp") return 1;
	var ref_domainList=[
		"www.cr.mufg.jp",
		"www2.cr.mufg.jp",
		"www2.mufgcard.com",
		"club.dccard.co.jp",
		"houjin.dccard.co.jp",
		"branch.nicos.co.jp",
		"info.cr.mufg.jp",
		"point-meijin.com",
		"info.cr.mufg.jp",
		"kaigai.cr.mufg.jp",
		"www8.cr.mufg.jp"
	].join(",");
	if(ref_domainList.indexOf(rdomain) !=-1){
		return 2;
	}else{
		return 3;
	}
}


/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(h){function q(){var a=f.pageYOffset+(f.innerHeight||0);a&&a>+g&&(g=a)}function r(){if(e.scrollReachSelector){var a=h.d.querySelector&&h.d.querySelector(e.scrollReachSelector);a?(g=a.scrollTop||0,a.addEventListener("scroll",function(){var d;(d=a&&a.scrollTop+a.clientHeight||0)>g&&(g=d)})):0<w--&&setTimeout(r,1E3)}}function l(a,d){var c,b,n;if(a&&d&&(c=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<c.length&&(b=c[n++]);)if(-1<a.indexOf(b))return null;p=1;return a}
function s(a,d,c,b,e){var f,k;if(a.dataset&&(k=a.dataset[d]))f=k;else if(a.getAttribute)if(k=a.getAttribute("data-"+c))f=k;else if(k=a.getAttribute(c))f=k;if(!f&&h.useForcedLinkTracking&&e){var g;a=a.onclick?""+a.onclick:"";varValue="";if(b&&a&&(d=a.indexOf(b),0<=d)){for(d+=b.length;d<a.length;)if(c=a.charAt(d++),0<="'\"".indexOf(c)){g=c;break}for(k=!1;d<a.length&&g;){c=a.charAt(d);if(!k&&c===g)break;"\\"===c?k=!0:(varValue+=c,k=!1);d++}}(g=varValue)&&(h.w[b]=g)}return f||e&&h.w[b]}function t(a,d,
c){var b;return(b=e[d](a,c))&&(p?(p=0,b):l(m(b),e[d+"Exclusions"]))}function u(a,d,c){var b;if(a&&!(1===(b=a.nodeType)&&(b=a.nodeName)&&(b=b.toUpperCase())&&x[b])&&(1===a.nodeType&&(b=a.nodeValue)&&(d[d.length]=b),c.a||c.t||c.s||!a.getAttribute||((b=a.getAttribute("alt"))?c.a=b:(b=a.getAttribute("title"))?c.t=b:"IMG"==(""+a.nodeName).toUpperCase()&&(b=a.getAttribute("src")||a.src)&&(c.s=b)),(b=a.childNodes)&&b.length))for(a=0;a<b.length;a++)u(b[a],d,c)}function m(a){if(null==a||void 0==a)return a;
try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=h;var f=window;f.s_c_in||(f.s_c_il=[],f.s_c_in=0);e._il=f.s_c_il;e._in=f.s_c_in;e._il[e._in]=e;f.s_c_in++;
e._c="s_m";var g=0,v,w=60;e.c={};var p=0,x={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,c,b=h.contextData,e=h.linkObject;(a=h.pageName||h.pageURL)&&(d=t(e,"link",h.linkName))&&(c=t(e,"region"))&&(b["a.activitymap.page"]=a.substring(0,255),b["a.activitymap.link"]=128<d.length?d.substring(0,128):d,b["a.activitymap.region"]=127<c.length?c.substring(0,127):c,0<g&&(b["a.activitymap.xy"]=10*Math.floor(g/10)),b["a.activitymap.pageIDType"]=h.pageName?1:0)};e.e=function(){e.trackScrollReach&&
!v&&(e.scrollReachSelector?r():(q(),f.addEventListener&&f.addEventListener("scroll",q,!1)),v=!0)};e.link=function(a,d){var c;if(d)c=l(m(d),e.linkExclusions);else if((c=a)&&!(c=s(a,"sObjectId","s-object-id","s_objectID",1))){var b,f;(f=l(m(a.innerText||a.textContent),e.linkExclusions))||(u(a,b=[],c={a:void 0,t:void 0,s:void 0}),(f=l(m(b.join(""))))||(f=l(m(c.a?c.a:c.t?c.t:c.s?c.s:void 0)))||!(b=(b=a.tagName)&&b.toUpperCase?b.toUpperCase():"")||("INPUT"==b||"SUBMIT"==b&&a.value?f=l(m(a.value)):"IMAGE"==
b&&a.src&&(f=l(m(a.src)))));c=f}return c};e.region=function(a){for(var d,c=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=s(a,c,c,c))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */


/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************
AppMeasurement for JavaScript version: 2.17.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(r){var a=this;a.version="2.17.0";var h=window;h.s_c_in||(h.s_c_il=[],h.s_c_in=0);a._il=h.s_c_il;a._in=h.s_c_in;a._il[a._in]=a;h.s_c_in++;a._c="s_c";var q=h.AppMeasurement.ec;q||(q=null);var p=h,m,s;try{for(m=p.parent,s=p.location;m&&m.location&&s&&""+m.location!=""+s&&p.location&&""+m.location!=""+p.location&&m.location.host==s.host;)p=m,m=p.parent}catch(u){}a.C=function(a){try{console.log(a)}catch(b){}};a.Pa=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.Kb=function(){var c=h.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.Ia&&!/^[0-9.]+$/.test(c)&&
(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.Ia=0<d?c.substring(d):c}return a.Ia};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.Kb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?
(d=new Date,d.setTime(d.getTime()+1E3*g)):1===d&&(d=new Date,g=d.getYear(),d.setYear(g+2+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toUTCString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.Hb=function(){var c=a.Util.getIeVersion();"number"===typeof c&&10>c&&(a.unsupportedBrowser=!0,a.ub(a,function(){}))};a.ub=function(a,b){for(var d in a)a.hasOwnProperty(d)&&"function"===typeof a[d]&&(a[d]=b)};
a.K=[];a.ea=function(c,b,d){if(a.Ja)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,k=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.fa)for(a.fa=1,d=0;d<k.length;d++)a.d.addEventListener(k[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.fa=0,a.delayReady())});f=1;e=0}else d||a.u("_d")&&(f=1);f&&(a.K.push({m:c,a:b,t:e}),a.fa||setTimeout(a.delayReady,
a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.u("_d")?b=1:a.ya();0<a.K.length;){d=a.K.shift();if(b&&!d.t&&d.t>c){a.K.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Ja=1;a[d.m].apply(a,d.a);a.Ja=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ea("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=
c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,k="";e=f="";if(a.lightProfileID)d=a.O,(k=a.lightTrackVars)&&(k=","+k+","+a.ka.join(",")+",");else{d=a.g;if(a.pe||a.linkType)k=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(k=a[e].ac,f=a[e].$b));k&&(k=","+k+","+a.F.join(",")+",");f&&k&&(k+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!k||0<=k.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.o=function(c,
b,d,f,e){var g="",k,l,h,n,m=0;"contextData"==c&&(c="c");if(b){for(k in b)if(!(Object.prototype[k]||e&&k.substring(0,e.length)!=e)&&b[k]&&(!d||0<=d.indexOf(","+(f?f+".":"")+k+","))){h=!1;if(m)for(l=0;l<m.length;l++)if(k.substring(0,m[l].length)==m[l]){h=!0;break}if(!h&&(""==g&&(g+="&"+c+"."),l=b[k],e&&(k=k.substring(e.length)),0<k.length))if(h=k.indexOf("."),0<h)l=k.substring(0,h),h=(e?e:"")+l+".",m||(m=[]),m.push(h),g+=a.o(l,b,d,f,h);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==
f&&0>e.indexOf(".contextData."))switch(h=k.substring(0,4),n=k.substring(4),k){case "transactionID":k="xact";break;case "channel":k="ch";break;case "campaign":k="v0";break;default:a.Pa(n)&&("prop"==h?k="c"+n:"eVar"==h?k="v"+n:"list"==h?k="l"+n:"hier"==h&&(k="h"+n,l=l.substring(0,255)))}g+="&"+a.escape(k)+"="+a.escape(l)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.Nb=function(){var c="",b,d,f,e,g,k,l,h,n="",m="",p=e="",r=a.T();if(a.lightProfileID)b=a.O,(n=a.lightTrackVars)&&(n=","+n+","+a.ka.join(",")+
",");else{b=a.g;if(a.pe||a.linkType)n=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].ac,m=a[e].$b));n&&(n=","+n+","+a.F.join(",")+",");m&&(m=","+m+",",n&&(n+=",events,"));a.events2&&(p+=(""!=p?",":"")+a.events2)}if(r&&r.getCustomerIDs){e=q;if(g=r.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.o("cid",e))}a.AudienceManagement&&
a.AudienceManagement.isReady()&&(c+=a.o("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);k=e.substring(4);g||("events"==e&&p?(g=p,p=""):"marketingCloudOrgID"==e&&r&&a.V("ECID")&&(g=r.marketingCloudOrgID));if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e=
"D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&
a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;
case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":p&&(g+=(""!=g?",":"")+p);if(m)for(k=g.split(","),g="",f=0;f<k.length;f++)l=k[f],h=l.indexOf("="),0<=h&&(l=l.substring(0,h)),h=l.indexOf(":"),0<=h&&(l=l.substring(0,h)),0<=m.indexOf(","+l+",")&&(g+=
(g?",":"")+k[f]);break;case "events2":g="";break;case "contextData":c+=a.o("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.o("mts",a[e],n,e));g="";break;default:a.Pa(k)&&("prop"==f?e="c"+k:"eVar"==f?e="v"+k:"list"==
f?e="l"+k:"hier"==f&&(e="h"+k,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}a.ja&&(c+="&lrt="+a.ja,a.ja=null);return c};a.B=function(a){var b=a.tagName;if("undefined"!=""+a.hc||"undefined"!=""+a.Wb&&"HTML"!=(""+a.Wb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.La=function(a){var b=h.location,
d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.L=function(c){var b=a.B(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+
f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.La(c),e)?{id:e.substring(0,100),type:g}:0};a.fc=function(c){for(var b=a.B(c),d=a.L(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.B(c),d=a.L(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Vb=function(){var c,b,d=a.linkObject,
f=a.linkType,e=a.linkURL,g,k;a.la=1;d||(a.la=0,d=a.clickObject);if(d){c=a.B(d);for(b=a.L(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.B(d),b=a.L(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:"";if(0<=l.indexOf(".tl(")||0<=l.indexOf(".trackLink("))d=0}}else a.la=1;!e&&d&&(e=a.La(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,n=0,p;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),
g=l.indexOf("?"),k=l.indexOf("#"),0<=g?0<=k&&k<g&&(g=k):g=k,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),k=0;k<g.length;k++)(p=g[k])&&l.substring(l.length-(p.length+1))=="."+p&&(f="d");if(a.trackExternalLinks&&!f&&(l=e.toLowerCase(),a.Oa(l)&&(a.linkInternalFilters||(a.linkInternalFilters=h.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(k=
0;k<g.length;k++)p=g[k],0<=l.indexOf(p)&&(n=1);n?m&&(f="e"):m||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),h.s_objectID&&(b.id=h.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.Ob=function(){var c=a.la,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||
f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.Rb()){var b={},d=0,e=a.pb(),g=e?e.split("&"):0,k,l,h,e=0;if(g)for(k=0;k<g.length;k++)l=g[k].split("="),f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");k={};for(h in a.contextData)h&&!Object.prototype[h]&&"a.activitymap."==h.substring(0,14)&&(k[h]=a.contextData[h],a.contextData[h]="");a.e=a.o("c",k)+
(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(h=0;h<f.length;h++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),k=0;k<b[l].length;k++)g=b[l][k],g==f[h]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":"")+l+"&u=0"),b[l].splice(k,1),d=1);c||(d=1);if(d){e="";k=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),k=1);for(l in b)!Object.prototype[l]&&0<k&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+"="+a.escape(l),
k--);a.wb(e)}}}return c};a.pb=function(){if(a.useLinkTrackSessionStorage){if(a.Ca())return h.sessionStorage.getItem(a.P)}else return a.cookieRead(a.P)};a.Ca=function(){return h.sessionStorage?!0:!1};a.wb=function(c){a.useLinkTrackSessionStorage?a.Ca()&&h.sessionStorage.setItem(a.P,c):a.cookieWrite(a.P,c)};a.Pb=function(){if(!a.Zb){var c=new Date,b=p.location,d,f,e=f=d="",g="",k="",l="1.2",h=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",q="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&(l="1.5",c=[],c.forEach))){l=
"1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;k=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.gc(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),
q=a.b.connectionType}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=h;a.browserWidth=g;a.browserHeight=k;a.connectionType=q;a.homepage=m;a.Zb=1}};a.Q={};a.loadModule=function(c,b){var d=a.Q[c];if(!d){d=h["AppMeasurement_Module_"+c]?new h["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.ib=function(){return d.sb};d.xb=function(b){if(d.sb=b)a[c+"_onLoad"]=b,a.ea(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",
{get:d.ib,set:d.xb}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.ea(c+"_onLoad",[a,d],1)||b(a,d))};a.u=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Rb=function(){return a.ActivityMap&&a.ActivityMap._c?!0:!1};a.Sb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);
if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.S=function(c,b){var d,f,e,g,k,h,m;m={};for(d=0;2>d;d++)for(f=0<d?a.Ea:a.g,e=0;e<f.length;e++)if(g=f[e],(k=c[g])||c["!"+g]){if(k&&!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(h in a[g])k[h]||(k[h]=a[g][h]);a[g]||(m["!"+g]=1);m[g]=a[g];a[g]=k}return m};a.cc=function(c){var b,d,f,e;for(b=0;2>b;b++)for(d=0<b?a.Ea:a.g,f=0;f<d.length;f++)e=d[f],c[e]=a[e],c[e]||"prop"!==e.substring(0,4)&&
"eVar"!==e.substring(0,4)&&"hier"!==e.substring(0,4)&&"list"!==e.substring(0,4)&&"channel"!==e&&"events"!==e&&"eventList"!==e&&"products"!==e&&"productList"!==e&&"purchaseID"!==e&&"transactionID"!==e&&"state"!==e&&"zip"!==e&&"campaign"!==e&&"events2"!==e&&"latitude"!==e&&"longitude"!==e&&"ms_a"!==e&&"contextData"!==e&&"supplementalDataID"!==e&&"tnt"!==e&&"timestamp"!==e&&"abort"!==e&&"useBeacon"!==e&&"linkObject"!==e&&"clickObject"!==e&&"linkType"!==e&&"linkName"!==e&&"linkURL"!==e&&"bodyClickTarget"!==
e&&"bodyClickFunction"!==e||(c["!"+e]=1)};a.Jb=function(a){var b,d,f,e,g,k=0,h,m="",n="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(h=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")?k=",p,ei,":0<=e.indexOf("baidu.")&&(k=",wd,word,"),k&&h)))){if((a=
h.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?m+=(m?"&":"")+e:n+=(n?"&":"")+e;m&&n?h=m+"&"+n:n=""}d=253-(h.length-n.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+h}return a};a.bb=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);
"visible"==b&&c()});return!1}return!0};a.ba=!1;a.H=!1;a.zb=function(){a.H=!0;a.p()};a.I=!1;a.Ab=function(c){a.marketingCloudVisitorID=c.MCMID;a.visitorOptedOut=c.MCOPTOUT;a.analyticsVisitorID=c.MCAID;a.audienceManagerLocationHint=c.MCAAMLH;a.audienceManagerBlob=c.MCAAMB;a.I=!1;a.p()};a.ab=function(c){a.maxDelay||(a.maxDelay=250);return a.u("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.Z=!1;a.G=!1;a.ya=function(){a.G=!0;a.p()};a.isReadyToTrack=function(){var c=!0;if(!a.mb()||!a.kb())return!1;
a.ob()||(c=!1);a.rb()||(c=!1);return c};a.mb=function(){a.ba||a.H||(a.bb(a.zb)?a.H=!0:a.ba=!0);return a.ba&&!a.H?!1:!0};a.kb=function(){var c=a.va();if(c)if(a.ra||a.aa)if(a.ra){if(!c.isApproved(c.Categories.ANALYTICS))return!1}else return!1;else return c.fetchPermissions(a.tb,!0),a.aa=!0,!1;return!0};a.V=function(c){var b=a.va();return b&&!b.isApproved(b.Categories[c])?!1:!0};a.va=function(){return h.adobe&&h.adobe.optIn?h.adobe.optIn:null};a.Y=!0;a.ob=function(){var c=a.T();if(!c||!c.getVisitorValues)return!0;
a.Y&&(a.Y=!1,a.I||(a.I=!0,c.getVisitorValues(a.Ab)));return!a.I};a.T=function(){var c=a.visitor;c&&!c.isAllowed()&&(c=null);return c};a.rb=function(){a.Z||a.G||(a.ab(a.ya)?a.G=!0:a.Z=!0);return a.Z&&!a.G?!1:!0};a.aa=!1;a.tb=function(){a.aa=!1;a.ra=!0};a.j=q;a.q=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.Eb=c;f.Db=b;f.Bb=d;a.j==q&&(a.j=[]);a.j.push(f);0==a.q&&(a.q=setInterval(a.p,100))};a.p=function(){var c;if(a.isReadyToTrack()&&(a.yb(),a.j!=q))for(;0<a.j.length;)c=a.j.shift(),c.Db.apply(c.Eb,
c.Bb)};a.yb=function(){a.q&&(clearInterval(a.q),a.q=0)};a.ta=function(c){var b,d={};a.cc(d);if(c!=q)for(b in c)d[b]=c[b];a.callbackWhenReadyToTrack(a,a.Da,[d]);a.Ba()};a.Lb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.Da=function(c){var b=new Date,
d="s"+Math.floor(b.getTime()/108E5)%10+Math.floor(1E13*Math.random()),f=b.getYear(),f="t="+a.escape(b.getDate()+"/"+b.getMonth()+"/"+(1900>f?f+1900:f)+" "+b.getHours()+":"+b.getMinutes()+":"+b.getSeconds()+" "+b.getDay()+" "+b.getTimezoneOffset()),e=a.T(),g;c&&(g=a.S(c,1));a.Sb()&&!a.visitorOptedOut&&(a.wa()||(a.fid=a.Lb()),a.Vb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(b.getTime()/1E3)),c=h.location,a.pageURL||(a.pageURL=
c.href?c.href:c),a.referrer||a.Za||(c=a.Util.getQueryParam("adobe_mc_ref",null,null,!0),a.referrer=c||void 0===c?void 0===c?"":c:p.document.referrer),a.Za=1,a.referrer=a.Jb(a.referrer),a.u("_g")),a.Ob()&&!a.abort&&(e&&a.V("TARGET")&&!a.supplementalDataID&&e.getSupplementalDataID&&(a.supplementalDataID=e.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.V("AAM")||(a.contextData["cm.ssf"]=1),a.Pb(),f+=a.Nb(),a.qb(d,f),a.u("_t"),a.referrer="")));a.Ba();g&&a.S(g,1)};a.t=
a.track=function(c,b){b&&a.S(b);a.Y=!0;a.isReadyToTrack()?null!=a.j&&0<a.j.length?(a.ta(c),a.p()):a.Da(c):a.ta(c)};a.Ba=function(){a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=h.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=a.useBeacon=a.referrer=0};a.Aa=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.Aa.push([c,b]):a.debugTracking&&a.C("DEBUG: Non function type passed to registerPreTrackCallback")};
a.fb=function(c){a.ua(a.Aa,c)};a.za=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.za.push([c,b]):a.debugTracking&&a.C("DEBUG: Non function type passed to registerPostTrackCallback")};a.eb=function(c){a.ua(a.za,c)};a.ua=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1].slice();e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.C(g.message)}}};a.tl=
a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.bodyClickTarget=c,a.bodyClickFunction=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||
"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.qb=function(c,b){var d=a.gb()+"/"+c+"?AQB=1&ndh=1&pf=1&"+(a.xa()?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.fb(d);a.cb(d);a.U()};a.gb=function(){var c=a.hb();return"http"+(a.ssl?"s":"")+"://"+c+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(a.xa()?"10":"1")+"/JS-"+a.version+(a.Yb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")};a.xa=function(){return a.AudienceManagement&&
a.AudienceManagement.isReady()||0!=a.usePostbacks};a.hb=function(){var c=a.dc,b=a.trackingServer;b?a.trackingServerSecure&&a.ssl&&(b=a.trackingServerSecure):(c=c?(""+c).toLowerCase():"d1","d1"==c?c="112":"d2"==c&&(c="122"),b=a.jb()+"."+c+".2o7.net");return b};a.jb=function(){var c=a.visitorNamespace;c||(c=a.account.split(",")[0],c=c.replace(/[^0-9a-z]/gi,""));return c};a.Ya=/{(%?)(.*?)(%?)}/;a.bc=RegExp(a.Ya.source,"g");a.Ib=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=
c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.bc),e=0;e<f.length;++e){var g=f[e],k=g.match(a.Ya),h="";"%"==k[1]&&"timezone_offset"==k[2]?h=(new Date).getTimezoneOffset():"%"==k[1]&&"timestampz"==k[2]&&(h=a.Mb());d.c=d.c.replace(g,a.escape(h))}}};a.Mb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+
(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.pa={};a.doPostbacks=function(c){if("object"==typeof c)if(a.Ib(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=
c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.pa[d.id]=new Image,a.pa[d.id].alt="",a.pa[d.id].src=d.c)}};a.cb=function(c){a.i||a.Qb();a.i.push(c);a.ia=a.A();a.Wa()};a.Qb=function(){a.i=a.Tb();a.i||(a.i=[])};a.Tb=function(){var c,b;if(a.oa()){try{(b=h.localStorage.getItem(a.ma()))&&(c=h.JSON.parse(b))}catch(d){}return c}};a.oa=function(){var c=!0;a.trackOffline&&a.offlineFilename&&h.localStorage&&h.JSON||(c=!1);return c};a.Ma=function(){var c=
0;a.i&&(c=a.i.length);a.l&&c++;return c};a.U=function(){if(a.l&&(a.v&&a.v.complete&&a.v.D&&a.v.R(),a.l))return;a.Na=q;if(a.na)a.ia>a.N&&a.Ua(a.i),a.qa(500);else{var c=a.Cb();if(0<c)a.qa(c);else if(c=a.Ka())a.l=1,a.Ub(c),a.Xb(c)}};a.qa=function(c){a.Na||(c||(c=0),a.Na=setTimeout(a.U,c))};a.Cb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.A()-a.Sa;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ka=function(){if(0<a.i.length)return a.i.shift()};a.Ub=function(c){if(a.debugTracking){var b=
"AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.C(b)}};a.wa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.X=!1;var t;try{t=JSON.parse('{"x":"y"}')}catch(w){t=null}t&&"y"==t.x?(a.X=!0,a.W=function(a){return JSON.parse(a)}):h.$&&h.$.parseJSON?(a.W=function(a){return h.$.parseJSON(a)},a.X=!0):a.W=function(){return null};a.Xb=function(c){var b,d,f;a.lb(c)&&(d=1,b={send:function(c){a.useBeacon=!1;navigator.sendBeacon(c)?b.R():b.ga()}});
!b&&a.wa()&&2047<c.length&&(a.$a()&&(d=2,b=new XMLHttpRequest),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.X?b.Fa=!0:b=0));!b&&a.Xa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||
"undefined"===typeof h.InstallTrigger||(b.abort=function(){b.src=q}));b.Ta=Date.now();b.Ha=function(){try{b.D&&(clearTimeout(b.D),b.D=0)}catch(a){}};b.onload=b.R=function(){b.Ta&&(a.ja=Date.now()-b.Ta);a.eb(c);b.Ha();a.Gb();a.ca();a.l=0;a.U();if(b.Fa){b.Fa=!1;try{a.doPostbacks(a.W(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.ga=function(){b.Ha();(a.trackOffline||a.na)&&a.l&&a.i.unshift(a.Fb);a.l=0;a.ia>a.N&&a.Ua(a.i);a.ca();a.qa(500)};b.onreadystatechange=function(){4==b.readyState&&(200==
b.status?b.R():b.ga())};a.Sa=a.A();if(1===d)b.send(c);else if(2===d)f=c.indexOf("?"),d=c.substring(0,f),f=c.substring(f+1),f=f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,""),b.open("POST",d,!0),b.withCredentials=!0,b.send(f);else if(b.src=c,3===d){if(a.Qa)try{f.removeChild(a.Qa)}catch(e){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Qa=a.v}b.D=setTimeout(function(){b.D&&(b.complete?b.R():(a.trackOffline&&b.abort&&b.abort(),b.ga()))},5E3);a.Fb=c;a.v=h["s_i_"+a.replace(a.account,",","_")]=
b;if(a.useForcedLinkTracking&&a.J||a.bodyClickFunction)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.da=setTimeout(a.ca,a.forcedLinkTrackingTimeout)};a.lb=function(c){var b=!1;navigator.sendBeacon&&(a.nb(c)?b=!0:a.useBeacon&&(b=!0));a.vb(c)&&(b=!1);return b};a.nb=function(a){return a&&0<a.indexOf("pe=lnk_e")?!0:!1};a.vb=function(a){return 64E3<=a.length};a.$a=function(){return"undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest?!0:!1};a.Gb=function(){if(a.oa()&&
!(a.Ra>a.N))try{h.localStorage.removeItem(a.ma()),a.Ra=a.A()}catch(c){}};a.Ua=function(c){if(a.oa()){a.Wa();try{h.localStorage.setItem(a.ma(),h.JSON.stringify(c)),a.N=a.A()}catch(b){}}};a.Wa=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Ka()}};a.forceOffline=function(){a.na=!0};a.forceOnline=function(){a.na=!1};a.ma=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.A=function(){return(new Date).getTime()};
a.Oa=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Yb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.S(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=
0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:h.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+
c+"="+d))){e=b.indexOf("#");0<=e&&(b=b.substr(0,e)+d);e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}},getIeVersion:function(){if(document.documentMode)return document.documentMode;for(var a=7;4<a;a--){var b=document.createElement("div");b.innerHTML="\x3c!--[if IE "+a+"]><span></span><![endif]--\x3e";if(b.getElementsByTagName("span").length)return a}return null}};a.F="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.F.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ka="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.O=a.ka.slice(0);a.Ea="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement".split(" ");
for(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.O.push("prop"+m)),a.g.push("eVar"+m),a.O.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" ");a.g=a.g.concat(m);a.F=a.F.concat(m);a.ssl=0<=h.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=
0;a.offlineFilename="AppMeasurement.offline";a.P="s_sq";a.Sa=0;a.ia=0;a.N=0;a.Ra=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=h;a.d=h.document;try{if(a.Xa=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Xa=!0}}catch(x){}a.ca=function(){a.da&&(h.clearTimeout(a.da),a.da=q);a.bodyClickTarget&&a.J&&a.bodyClickTarget.dispatchEvent(a.J);
a.bodyClickFunction&&("function"==typeof a.bodyClickFunction?a.bodyClickFunction():a.bodyClickTarget&&a.bodyClickTarget.href&&(a.d.location=a.bodyClickTarget.href));a.bodyClickTarget=a.J=a.bodyClickFunction=0};a.Va=function(){a.b=a.d.body;a.b?(a.r=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Ga)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.r,!1);else{a.b.removeEventListener("click",a.r,!0);a.Ga=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=
0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.M&&a.M==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=0;else{var k=a.M=a.clickObject;a.ha&&(clearTimeout(a.ha),a.ha=0);a.ha=setTimeout(function(){a.M==k&&(a.M=0)},1E4);f=a.Ma();a.track();if(f<a.Ma()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Oa(g)||
(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||h.name&&d==h.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=new h.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(m){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.bodyClickTarget=
c.target,a.J=b)}}}}}catch(n){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.r):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&h.MouseEvent)&&(a.Ga=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.r,!0)),a.b.addEventListener("click",a.r,!1))):setTimeout(a.Va,30)};a.Hb();a.ic||(r?a.setAccount(r):a.C("Error, missing Report Suite ID in AppMeasurement initialization"),a.Va(),
a.loadModule("ActivityMap"))}function s_gi(r){var a,h=window.s_c_il,q,p,m=r.split(","),s,u,t=0;if(h)for(q=0;!t&&q<h.length;){a=h[q];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(p=a.account?a.account:a.oun,p=a.allAccounts?a.allAccounts:p.split(","),s=0;s<m.length;s++)for(u=0;u<p.length;u++)m[s]==p[u]&&(t=1);q++}t?a.setAccount&&a.setAccount(r):a=new AppMeasurement(r);return a}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var r=window,a=r.s_giq,h,q,p;if(a)for(h=0;h<a.length;h++)q=a[h],p=s_gi(q.oun),p.setAccount(q.un),p.setTagContainer(q.tagContainerName);r.s_giq=0}s_pgicq();
