window.addEventListener('DOMContentLoaded', function(){
/*------------------------------------------------------*/
/**
* class名 linkButtonImg のボタンを書き換える
*/

/**
* @type {String} カード申し込みリンク単一パターン
*/
const applyBtnHref = 'https://www2.cr.mufg.jp/net/nyukai/mufg/entry.html?trcd=3001020640001101900000082&amp;tkcd=9998&amp;segment=24&amp;brand=3'


/**
* @type {Array} Adobe Analytics 計測値
*/
const bid=['apply_amexgold_0001','apply_amexgold_0002','apply_amexgold_0003']

/*------------------------------------------------------*/

	var applyBtn = document.querySelectorAll('.linkButtonImg')

	// 別ディレクトリ_req.js 参照していないかチェック
	var script = document.querySelectorAll('script')
	var path = location.pathname
	var dir = path.substring(0, path.lastIndexOf('/')) + '/'
	for (var i = 0, len = script.length; i < len; i++) {
		if (script[i].getAttribute('src').indexOf('_req.js') > -1) {
			var src = script[i].getAttribute('src').replace(/_req.js.*/, '_req.js').replace(/\/js.*_req.js/, '/')
			if (dir !== src) {
				for (var i = 0, len = applyBtn.length; i < len; i++) {
					applyBtn[i].remove()
				}
				return false
			}
			break
		}
	}

	if (applyBtn.length && (typeof applyBtnHref !== 'undefined' || typeof linkParam !== 'undefined')) {

		if (typeof applyBtnHref === 'string' || typeof linkParam === 'string') {
			// a リンク単一の場合
			var href = typeof linkParam === 'string' ? linkParam : applyBtnHref
			for (var i = 0, len = applyBtn.length; i < len; i++) {
				// リンク書き換え
				applyBtn[i].setAttribute('href', href)
			}
		}

		if (typeof linkParam === 'object' && linkParam.links) {
			// a リンク複数の場合
			for (var i = 0, len = linkParam.links.length; i < len; i++) {
				var target = document.querySelectorAll('.' + linkParam.links[i].class)
				var href = linkParam.links[i].href
				for (var j = 0, len = target.length; j < len; j++) {
					// リンク書き換え
					target[j].setAttribute('href', href)
				}
			}

		} else if (typeof linkParam === 'object' && linkParam.form) {
			// form の場合
			for (var i = 0, len = applyBtn.length; i < len; i++) {
				var form = document.createElement('form')
				form.setAttribute('action', linkParam.form.action)
				form.setAttribute('method', linkParam.form.method)
				for (var j in linkParam.form.param) {
					if (j) {
						var input = document.createElement('input')
						input.setAttribute('type', 'hidden')
						input.setAttribute('name', j)
						input.setAttribute('value', linkParam.form.param[j])
						form.appendChild(input)
					}
				}

				// ボタン
				var text = applyBtn[i].textContent
				if (text.length > 0) {
					// テキストタイプ
					var className = applyBtn[i].className
					var button = document.createElement('button')
					button.setAttribute('type', 'submit')
					button.setAttribute('class', className)
					button.textContent = text
					form.appendChild(button)
				} else {
					// 画像タイプ
					var img = applyBtn[i].querySelector('img')
					var input = document.createElement('input')
					input.setAttribute('type', 'image');
					input.setAttribute('name', 'imageField')
					input.setAttribute('class', 'linkButtonImg')
					input.setAttribute('src', img.getAttribute('src'))
					input.setAttribute('alt', img.getAttribute('alt'))
					form.appendChild(input)
				}

				// form の設置
				applyBtn[i].parentNode.insertBefore(form, applyBtn[i].nextElementSibling)

				// 元のボタン削除
				applyBtn[i].remove()
			}
			// 再取得
			applyBtn = document.querySelectorAll('.linkButtonImg')
		}
	}

	// Adobe Analytics 計測用
	if (typeof bid !== 'undefined' && typeof sc_intcmp !== 'undefined') {
		var elements = [].slice.call(applyBtn)
		for (var i = 0, len = applyBtn.length; i < len; i++) {
			applyBtn[i].addEventListener('click', function(e) {
				// index を取得
				var index = elements.indexOf(e.target)
				if (index === -1) {
					index = elements.indexOf(e.currentTarget)
				}

				// 計測
				sc_intcmp(bid[index])
			})
		}
	}
})