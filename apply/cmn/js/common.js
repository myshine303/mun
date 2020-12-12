(function ($) {
	$(function () {

		$('.js-cardCarousel01').slick({
			autoplay: false,
			infinite: false,
			dots: true,
			slidesToShow: 1,
			speed: 300,
			prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><span>前へ</span></button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><span>次へ</span></button>'
		})

		var setCarousel02 = function() {
			$('.js-cardCarousel02').slick({
				autoplay: false,
				infinite: false,
				dots: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				speed: 300,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><span>前へ</span></button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><span>次へ</span></button>'
			})
		}

		if (document.body.clientWidth < 641) {
			setCarousel02()
		}

		window.addEventListener('resize', function(e) {
			if (document.body.clientWidth < 641) {
				if (document.querySelector('.js-cardCarousel02.slick-slider') === null) {
					setCarousel02()
				}
			} else {
				if (document.querySelector('.js-cardCarousel02.slick-slider')) {
					$('.js-cardCarousel02').slick('unslick')
				}
			}
		}, false)
	})
}(jQuery))

window.addEventListener('DOMContentLoaded', function(){

	// MVレイアウト調整用
	var cardKeyVisualBg = document.querySelector('.cardKeyVisualWrap .bg')
	var setCardKeyVisualBg = function () {
		var windowW = window.innerWidth
		var positionX = (window.innerWidth - 1120) / 2
		cardKeyVisualBg.setAttribute('style', 'width: calc(100% - ' + positionX + 'px)')
	}

	if (window.innerWidth > 1279) {
		if (cardKeyVisualBg) {
			setCardKeyVisualBg()
		}
	} else {
		if (cardKeyVisualBg) {
			cardKeyVisualBg.removeAttribute('style')
		}
	}

	window.addEventListener('resize', function(e) {
		if (window.innerWidth > 1279) {
			if (cardKeyVisualBg) {
				setCardKeyVisualBg()
			}
		} else {
			if (cardKeyVisualBg) {
				cardKeyVisualBg.removeAttribute('style')
			}
		}
	}, false)

	// カード情報取得
	var getDB = function() {
		var dfd = $.Deferred()

		$.ajax({
			url: '/apply/cmn/js/card_db.txt',
			dataType: 'script'
		}).done(function(script){
			// data 整形
			for (var U = 0, R = data.length; R > U; U++) {
				data[U].initial = U
				data[U].img = '/apply/tmp/img/dummy_02.jpg'
			}
			dfd.resolve()
		})

		return dfd.promise()
	}

	// 比較履歴取得 ～ 初期表示
	var selectCard = []
	var getCompareCardHistory = function() {
		var dfd = $.Deferred()

		var selected = sessionStorage.getItem('_compareCard')
		if (selected !== null && selected.length !== 0) {
			selectCard = selected.split(',')
			selectCard = selectCard.filter(Boolean)
		}

		var path = location.pathname
		var initial = ''
		for (var i = 0, len = data.length; i < len; i++) {
			if (data[i].link.indexOf(path) > -1) {
				initial = data[i].initial
				break
			}
		}

		if (initial !== '') {
			// DB に登録がある場合
			if (selectCard.indexOf(String(initial)) > -1) {
				selectCard.splice(selectCard.indexOf(String(initial)), 1)
				selectCard.unshift(String(initial))
			} else {
//				if (selectCard.length > 3) {
//					selectCard.splice(0, 1)
//				}
				selectCard.unshift(String(initial))
//				if (selectCard.length > 4) {
//					selectCard.splice(4, 1)
//				}
			}
			// TODO: この時点では保存しない
			setSelectedCard()
		} else {
			// DB 登録外カード
			document.getElementById('compareCards').remove()
		}

		dfd.resolve()
		return dfd.promise()
	}

	// set 比較カード
	var compareCardItem = document.querySelectorAll('#compareCards .cardItem')
	var setSelectedCard = function() {
		for (var i = 0, len = selectCard.length; i < len; i++) {
			if (i > 4) break
			var item = compareCardItem[i]
			if (item.querySelector('.deleteCardChk').checked) {
				item.querySelector('.deleteCardChk').setAttribute('value', data[selectCard[i]].initial)
				item.querySelector('.deleteCardChk').checked = false
				item.querySelector('.cardName').textContent = data[selectCard[i]].name

				var img =  document.createElement('img')
				img.setAttribute('src', data[selectCard[i]].img)
				item.querySelector('.cardImg').appendChild(img)
			}
		}
	}

	// カード比較削除
	var deselectionCard = function(id) {
		for (var i = 0, len = compareCardItem.length; i < len; i++) {
			compareCardItem[i].querySelector('.deleteCardChk').checked = true
			compareCardItem[i].querySelector('.deleteCardChk').removeAttribute('value')
			if (compareCardItem[i].querySelector('img') !== null) {
				compareCardItem[i].querySelector('img').remove()
			}
		}
		setSelectedCard()
	}

	compareCardItemArr = [].slice.call(compareCardItem)
	for (var i = 0, len = compareCardItem.length; i < len; i++) {
		var item = compareCardItem[i]
		item.querySelector('.deleteCardChk').addEventListener('change', function(e) {
			var parent = e.target.parentNode.parentNode
			var index = compareCardItemArr.indexOf(parent)
			selectCard.splice(index, 1)

			deselectionCard(e.target.value)

			// 履歴保存
			console.log(selectCard)
			sessionStorage.setItem('_compareCard', selectCard)
		})
	}

	// 履歴保存
	var btnGoCompare = document.querySelectorAll('.btnGoCompare')
	for (var i = 0, len = btnGoCompare.length; i < len; i++) {
		btnGoCompare[i].addEventListener('click', function() {
			if (selectCard.length > 4) {
				selectCard.splice(4, 1)
			}
			sessionStorage.setItem('_compareCard', selectCard)
		})
	}

	getDB()
		.then(getCompareCardHistory)

}, false)

window.addEventListener('load', function(){
	// フッター位置調整
	var applyFixBlock = document.querySelector('.applyFixBlock')
	var footer = document.getElementById('footerArea')
	footer.setAttribute('style', 'margin-bottom:' + applyFixBlock.clientHeight + 'px')

}, false)
