;(function() {
	var $bar = $('.reading-progress-bar')
	if (!$bar.length) return //no progress bar found
	var supportsPassive = false
	try {
		var opts = Object.defineProperty({}, 'passive', {
			get: function() {
				supportsPassive = true
			}
		})
		window.addEventListener('test', $.noop, opts)
		window.removeEventListener('test', $.noop)
	} catch (e) {}
	var $w = $(window)
	var $d = $(document)
	$d.ready(function() {
		window.addEventListener(
			'scroll',
			function() {
				var wh = $w.height()
				var dh = $d.height()
				var st = $w.scrollTop()
				var percent = (st / (dh - wh)) * 100
				percent = percent > 100 ? 100 : percent < 0 ? 0 : percent
				$bar.css('width', percent + '%')
			},
			supportsPassive ? { passive: true } : false
		)
	})
})()
