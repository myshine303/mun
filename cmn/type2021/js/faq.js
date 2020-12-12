_setFaq = function(question) {
	var faqJson

	var readJson = function() {
		var dfd = $.Deferred()

		$.ajax({
			url: '/faq/js/faq.json',
			dataType: 'json'
		}).done(function(data){
			faqJson = data
			dfd.resolve()
		})

		return dfd.promise()
	}

	var setFaq = function() {
		var target = document.querySelector('.js-faqList')

		for (var i = 0, len = question.length; i < len; i++) {
			var questionText = ''
			var id = question[i].replace('/faq/detail/', '').replace('/index.html', '')
			for (var l = 0, len2 = faqJson.length; l < len2; l++) {
				if (faqJson[l].id === id) {
					questionText = faqJson[l].question
					break
				}
			}

			if (questionText !== '') {
				var elm = '<li class="faqListItem"><a href="' + question[i] + '"><span class="linkType01">' + questionText + '</span></li>'
				target.insertAdjacentHTML('beforeend', elm)
			}
		}
	}

	readJson()
		.then(setFaq)
}