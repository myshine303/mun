// note
//PC
//Brand selection(launcher)     C
//Brand selection(embed)        Link to chatbot page（5）
//No brand selection(launcher)  C
//No brand selection(embed)     A
//Chatbot dedicated page
//No brand selection(embed)     A

//SP
//Brand selection(launcher)     C
//Brand selection(embed)        Link to chatbot page（5）
//No brand selection(launcher)  C
//No brand selection(launcher)  C
//Chatbot dedicated page
//No brand selection(embed)     B

var chatbot_data = [{
	value: 'MUFG',
	data_config_index_c: 11,
	data_config_index_b: 23,
	data_config_index_a: 5,
	data_token: "801cc84d-a091-4220-90f8-56c7fe73122d",
	name: 'MUFGカード',
	id: "Chatbot_c_mufg",
	link: "/chatbot/mufgcard/index.html"
}, {
	value: 'DC',
	data_config_index_c: 12,
	data_config_index_b: 24,
	data_config_index_a: 6,
	data_token: "801cc84d-a091-4220-90f8-56c7fe73122d",
	name: 'DCカード',
	id: "Chatbot_c_dc",
	link: "/chatbot/dc/index.html"
}, {
	value: 'NICOS',
	data_config_index_c: 13,
	data_config_index_b: 25,
	data_config_index_a: 7,
	data_token: "801cc84d-a091-4220-90f8-56c7fe73122d",
	name: 'NICOSカード',
	id: "Chatbot_c_nicos",
	link: "/chatbot/nicos/index.html"
}, {
	value: 'AMEX',
	data_config_index_c: 14,
	data_config_index_b: 26,
	data_config_index_a: 8,
	data_token: "801cc84d-a091-4220-90f8-56c7fe73122d",
	name: 'MUFGカード・アメリカン・エキスプレス®・カード',
	id: "Chatbot_c_amex",
	link: "/chatbot/amex/index.html"
}, {
	value: 'JA',
	data_config_index_c: 15,
	data_config_index_b: 27,
	data_config_index_a: 9,
	data_token: "801cc84d-a091-4220-90f8-56c7fe73122d",
	name: 'JAカード',
	id: "Chatbot_c_ja",
	link: "/chatbot/ja/index.html"
}, {
	value: 'NEW',
	data_config_index_c: 16,
	data_config_index_b: 28,
	data_config_index_a: 10,
	data_token: "801cc84d-a091-4220-90f8-56c7fe73122d",
	name: '新規カード申込み',
	id: "Chatbot_c_new",
	link: "/chatbot/apply/index.html"
}];
var chatbot_data_id = "";
var mobile = "";
var mobile_old = "";
var chatbot_type = "";
var resizeTimer;
var error_connection = "通信状況やご利用環境により、ただいま自動応答アシスタントをご利用いただくことができません。恐れ入りますが、しばらく経ってから再度ご質問をお願いいたします。申し訳ございません。";
var bedore_close = "";

$(function() {
	var chatbot_object = $("#chatbot");
	chatbot_data_id = chatbot_object.attr("data-chatbot-id");

	//// note
	//// 1 PC/SP embedded
	//// 2 PC/SP launcher
	//// 3 PC embedded SP launcher
	if(chatbot_object.hasClass("embedded")){
		chatbot_type = 1;
	}else if(chatbot_object.hasClass("launcher")){
		chatbot_type = 2;
	}else if(chatbot_object.hasClass("mixed")){
		chatbot_type = 3;
	};

	check_mobile();

	$(window).on('resize', function(e) {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {

			check_mobile();

			switch(chatbot_type){
				case 1:
					//embed
					if(mobile_old != mobile){
						chatbot_restart();
					};
					break;
				case 2:
					//launcher
					if(mobile_old != mobile){
						if($("#chatbot").hasClass("chatbot_brand")){
							// do nothing
						}else if($("#chatbot").hasClass("chatbot_open")){
							chatbot_restart();
						};
					};
					break;
				case 3:
					//mixed
					if(mobile_old != mobile){
						chatbot_restart();
					};
					break;
			}
		}, 250);
	});

	chatbot_check("load");

	$("#chatbot").delegate( "#chatbot_chat", "click", function(e) {
		e.preventDefault();
		chatbot_check("direct");
	});

	$("#chatbot").delegate( "#chatbot_open", "click", function(e) {
		e.preventDefault();
		chatbot_check("launcher");
	});

	$("#chatbot").delegate( "#chatbot_close", "click", function(e) {
		e.preventDefault();
		set_chatbot_cookie();
		chatbot_close();
	});

	$("#chatbot").delegate( "#chatbot_close1", "click", function(e) {
		e.preventDefault();

		$("#chatbot").removeClass("chatbot_ani_open");
		$("#chatbot").animate({
			bottom: "-=100%"
		}, 500, function() {
			chatbot_launcher();
		});
	});

	$("#chatbot").delegate( "#chatbot_mini", "click", function(e) {
		e.preventDefault();

		if($("#chatbot").hasClass("chatbot_ani_min")){
			$("#chatbot").removeClass("chatbot_ani_min");
			$("#chatbot").addClass("chatbot_ani_max");
		}else{
			$("#chatbot").addClass("chatbot_ani_min");
			$("#chatbot").removeClass("chatbot_ani_max");
		}
	});
});

// check if viewport is mobile
function check_mobile(){
	mobile_old = mobile;
	if($(window).width() <= 639){
		mobile = true;
	}else{
		mobile = false;
	};
}

// check the health of bedore
function chatbot_check(func, value, data_config_index, data_token){
	if (typeof value === "undefined" || value === null) {
		value = "";
	};
	if (typeof data_config_index === "undefined" || data_config_index === null) {
		data_config_index = "";
	};
	if (typeof data_token === "undefined" || data_token === null) {
		data_token = "";
	};

	//embed always on
	if(chatbot_type == 1 && func == "load" && chatbot_data_id == "Chatbot_c_all"){
		chatbot_brand();
	}else{
		$.get('https://bedore.jp/api/healthcheck/1dcc9f7804818ed6/9/')
			.done(function(data1) {
			if(JSON.stringify(data1.success)=="true"){
				check_chatbot_cookie(func,1, value, data_config_index, data_token);
			}else{
				check_chatbot_cookie(func,2, value, data_config_index, data_token);
			};
		})
			.fail(function() {
			switch(chatbot_type){
				case 1:
					//embed
					chatbot_error();
					break;
				case 2:
					//launcher
					if(func != "load"){
						check_chatbot_cookie(func,2, value, data_config_index, data_token);
					};
					break;
				case 3:
					//mixed
					if(mobile){
						if(func != "load"){
							chatbot_error();
						};
					}else{
						chatbot_error();
					};
					break;
			}
		})
			.always(function() {
		});
	};
}

// check the cookies for user interaction with chatbot
function check_chatbot_cookie(func, bedore_health, value, data_config_index, data_token) {
	var closeUrl = get_chatbot_cookie();
  closeUrl = closeUrl.split("@cht");
  var pathname = window.location.pathname;
  var user = "";
	var ctr= "";

  $.each(closeUrl, function( index, value ) {
    if(value == pathname){
      user = "close";
      return false;
    }
  });

  if(user == "close" && chatbot_type == 2){
		// do nothing;
  }else if(user == "close" && chatbot_type == 3 && mobile){
    // do nothing;
	}else if(func == "direct"){
		$.each(chatbot_data, function( index, value ) {
			if(chatbot_data_id == value.id){
				ctr = index;
				return false;
			}
		});

		if(ctr >= 0){
			var data_config_index = chatbot_data[ctr].data_config_index;
			$("#chatbot").addClass("chatbot_ani_open");

			if(bedore_health == 1){
				var string = "";
				$("#chatbot").html("");
				$("#chatbot").addClass("chatbot_brand chatbot_open");
				string += "<div class='chatbot_box'>";
				string += "<div id='chatbot_box_overlay'><span></span></div>";
				string += "<div id='chatbot_box_bedore'></div>";
				string += "<div id='chatbot_box_inner'>";
				string += "<a id='chatbot_mini'></a>";
				string += "<a id='chatbot_close1'><img src='/cmn/img/chatbot/close1.jpg' alt='x'></a>";
				string += "<p class='chatbot_ttl'>自動応答アシスタント</p>";
				string += "<div class='chatbot_cont'>";
				string += "<div'><div'>";
				$("#chatbot").html(string);
				$(".chatbot_box").slideDown(function(){
					createWebagent(chatbot_data[ctr].value, chatbot_data[ctr].data_config_index_c, chatbot_data[ctr].data_token);
				});
			}else{
				chatbot_error();
			};
		}else{
			chatbot_error();
		};
	}else if(func == "bedore" ){
		switch(chatbot_type){
			case 1:
				//embed
				break;
			case 2:
				//launcher
				if(bedore_health == 1){
					$("#chatbot").addClass("chatbot_brand");
					createWebagent(value, data_config_index, data_token);
				}else{
					chatbot_error();
				}
				break;
			case 3:
				//mixed
				break;
		}
	}else if(func == "launcher"){
		switch(chatbot_type){
			case 1:
				//embed
				break;
			case 2:
				//launcher
				if(bedore_health == 1){
					chatbot_brand();
				}else{
					chatbot_error();
				}
				break;
			case 3:
				//mixed
				break;
		}
	}else if(func == "load"){
		switch(chatbot_type){
			case 1:
				//embed
				if(bedore_health == 1){
					$.each(chatbot_data, function( index, value ) {
						if(chatbot_data_id == value.id){
							ctr = index;
							return false;
						}
					});

					var string = "";
					$("#chatbot").html("");
					$("#chatbot").addClass("chatbot_brand chatbot_open");
					string += "<div class='chatbot_box'>";
					string += "<div id='chatbot_box_overlay'><span></span></div>";
					string += "<div id='chatbot_box_bedore'></div>";
					string += "<div id='chatbot_box_inner'>";
					string += "<a id='chatbot_mini'></a>";
					string += "<a id='chatbot_close1'><img src='/cmn/img/chatbot/close1.jpg' alt='x'></a>";
					string += "<p class='chatbot_ttl'>自動応答アシスタント</p>";
					string += "<div class='chatbot_cont'>";
					string += "<div'><div'>";
					$("#chatbot").html(string);

					if(mobile){
						data_config_index = chatbot_data[ctr].data_config_index_b;
					}else{
						data_config_index = chatbot_data[ctr].data_config_index_a;
					};

					createWebagent(chatbot_data[ctr].value, data_config_index, chatbot_data[ctr].data_token);
				}else {
					chatbot_error();
				};
				break;
			case 2:
				//launcher
				if(bedore_health == 1){
					chatbot_launcher();
				}else {
					chatbot_error();
				};
				break;
			case 3:
				//mixed
				if(mobile){
					chatbot_launcher();
				}else{
					if(bedore_health == 1){
						$.each(chatbot_data, function( index, value ) {
							if(chatbot_data_id == value.id){
								ctr = index;
								return false;
							}
						});

						var string = "";
						$("#chatbot").html("");
						$("#chatbot").addClass("chatbot_brand chatbot_open");
						string += "<div class='chatbot_box'>";
						string += "<div id='chatbot_box_overlay'><span></span></div>";
						string += "<div id='chatbot_box_bedore'></div>";
						string += "<div id='chatbot_box_inner'>";
						string += "<a id='chatbot_mini'></a>";
						string += "<a id='chatbot_close1'><img src='/cmn/img/chatbot/close1.jpg' alt='x'></a>";
						string += "<p class='chatbot_ttl'>自動応答アシスタント</p>";
						string += "<div class='chatbot_cont'>";
						string += "<div'><div'>";
						$("#chatbot").html(string);

						createWebagent(chatbot_data[ctr].value, chatbot_data[ctr].data_config_index_a, chatbot_data[ctr].data_token);
					}else {
						chatbot_error();
					};
				};
				break;
		}
	}
}

// get the cookies
function get_chatbot_cookie() {
	var name = "chatbot=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

// set the cookies for user interaction with chatbot
function set_chatbot_cookie(ctr) {
	var d = new Date();
	d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
  var pathname = window.location.pathname;
  var close_url = get_chatbot_cookie();
  var ctr_temp = "";

  // check if there is no index
  if(pathname[pathname.length -1] == "/"){
    pathname = pathname + "index.html" + "@cht" + pathname;
  }else{
    // check if there index
    ctr_temp = pathname.split("index.html")
    if(ctr_temp.length >= 2){
      pathname = ctr_temp[0] + "@cht" + pathname;
    }
  }
  if(close_url == ""){
    pathname = pathname;
  }else{
    pathname = close_url + "@cht" + pathname;
  };
  document.cookie = "chatbot=" + pathname  + ";" + expires + ";path=/";
}

// create chatbot launcher
function chatbot_launcher() {
	var string = "";
	if(chatbot_data_id != undefined){
		//	chatbot launcher
		string += "<div class='chatbot_launcher'>";

		if(chatbot_data_id == "Chatbot_c_all"){
			string += "<a href='' id='chatbot_open'><img src='/cmn/img/chatbot/launcher.png' alt='ご質問はこちら'></a>";
		}else{
			string += "<a href='' id='chatbot_chat'><img src='/cmn/img/chatbot/launcher.png' alt='ご質問はこちら'></a>";
		};
		string += "<a href='' id='chatbot_close'><img src='/cmn/img/chatbot/close.png' alt='x'></a>";
		string += "</div>";

		$("#chatbot").removeClass("chatbot_open chatbot_ani_open chatbot_brand chatbot_ani_min chatbot_ani_max").css("bottom","").html(string);
	};
}

// create chatbot multiple brand
function chatbot_brand() {
	var string = "";

	//	chatbot brand
	string += "<div class='chatbot_box'>";
	string += "<div id='chatbot_box_overlay'><span></span></div>";
	string += "<div id='chatbot_box_bedore'></div>";
	string += "<div id='chatbot_box_inner'>";
	string += "<a id='chatbot_mini'></a>";
	string += "<a id='chatbot_close1'><img src='/cmn/img/chatbot/close1.jpg' alt='x'></a>";
	switch(chatbot_type){
		case 1:
			//embed
			string += "<p class='chatbot_ttl chatbot_empty'></p>";
			string += "<div class='chatbot_cont chatbot_max'>";
			string += "<p class='chatbot_icon'>三菱UFJニコスえみと申します。<br>ご質問・ご不明点に自動回答いたします。ご質問したいブランド名を下記よりお選びください。</p>";
			break;
		case 2:
			//launcger
		case 3:
			//mixed
			string += "<p class='chatbot_ttl'>自動応答アシスタント</p>";
			string += "<div class='chatbot_cont'>";
			string += "<p class='chatbot_icon'>三菱UFJニコスえみと申します。お使いのブランド名をお選びください。</p>";
			break;
	}
	string += "<ul class='chatbot_list'>";
	$.each(chatbot_data, function( index, value ) {
		switch(chatbot_type){
			case 1:
				//embed
				string += "<li><a href='" + value.link + "' target='_blank'>" + value.name + "</a></li>";
				break;
			case 2:
				//launcger
				string += "<li onclick='chatbot_check(\"bedore\",\"" + value.value + "\", \"" + value.data_config_index_c + "\", \"" + value.data_token + "\")'><span>" + value.name + "</span></li>";
				break;
			case 3:
				//mixed
				break;
		}
	});
	string += "</ul></div></div></div>";
	$("#chatbot").addClass("chatbot_open chatbot_ani_open").html(string);
}

// clear the chatbot object
function chatbot_close() {
	$("#chatbot").html("");
}

// create chatbot error
function chatbot_error() {
	var string = "";

	//	chatbot brand
	string += "<div class='chatbot_box'>";
	string += "<div id='chatbot_box_inner'>";
	string += "<a id='chatbot_mini'></a>";
	string += "<a id='chatbot_close1'><img src='/cmn/img/chatbot/close1.jpg' alt='x'></a>";
	string += "<p class='chatbot_ttl'>自動応答アシスタント</p>"
	string += "<div class='chatbot_cont'>";
	string += "<p class='chatbot_icon chatbot_error'>" + error_connection + "</p>";
	string += "</div></div>";

	$("#chatbot").addClass("chatbot_open").html(string);
	$(".chatbot_box").slideDown();
}

function chatbot_restart(){
	$("#chatbot").html("");
	$("#chatbot").show();
	clearInterval(bedore_close);
	removeWebagent();
	chatbot_check("load");
}

// BEDORE FUNCTION
function removeWebagent() {
	var script = document.getElementById('bedore-webagent');
	if (script) script.parentNode.removeChild(script);

	var iframe = document.getElementById('bedore-webagent-inner');
	if (iframe) iframe.parentNode.removeChild(iframe);
}

function createWebagent (value, data_config_index, data_token) {
	var s = document.createElement('script');
	s.id = 'bedore-webagent';
	s.src = 'https://webagent.bedore.jp/init.js';
	s.charset = 'utf-8';
	s.setAttribute('data-token', data_token);
	s.setAttribute('data-config-index', data_config_index);
	s.setAttribute('data-pre-slots', JSON.stringify({CARDselect: {value: value}}));
	s.setAttribute('data-slots', JSON.stringify([{'context_name': 'select_card', 'value': value}]));
	$("#chatbot_box_bedore").html(s);

	var id = setInterval(function () {
		var iframe = $('#bedore-webagent-inner');
		if (iframe){
			if($("#bedore-webagent-inner").css("height") != undefined ){
				if($("#bedore-webagent-inner").css("height").length > 3 ){
					clearInterval(id);

					switch(chatbot_type){
						case 1:
							//embed
							if(mobile){
								$("#chatbot").fadeOut();
								bedore_close = setInterval(check_bedore, 100);
							}else{
                $("#chatbot_box_overlay, #chatbot_box_inner").fadeOut();
							};
							break;
						case 2:
							//launcher
							$("#chatbot").fadeOut();
							bedore_close = setInterval(check_bedore, 100);
							break;
						case 3:
							//mixed
							if(mobile){
								$("#chatbot").fadeOut();
								bedore_close = setInterval(check_bedore, 100);
							}else{
								$("#chatbot_box_overlay, #chatbot_box_inner").fadeOut();
							};
							break;
					}
				};
			};
		};

		//		var iframe = document.getElementById('bedore-webagent-inner')
		//		if (!iframe) return
		//
		//		var launcher = iframe.contentWindow.document.getElementById('launcher')
		//		if (!launcher) return
		//
		//		clearInterval(id);
		//		launcher.click();
	}, 100)
}

function check_bedore() {
	if(parseInt($("#bedore-webagent-inner").css("height")) <= 80){
		clearInterval(bedore_close);
		if(chatbot_type == 1){
			//embed sp close bedore
		}else{
			$("#chatbot").show();
			chatbot_launcher();
		};
		removeWebagent();
	};
}