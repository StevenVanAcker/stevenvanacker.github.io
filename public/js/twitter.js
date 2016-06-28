function makeTwitterCard(i, el) {
	var url = $(el).attr("href");
	var regex = /(https?:\/\/twitter\.com\/[a-zA-Z0-9_]+\/status\/([0-9]+)\/?)/;
	var idlist = url.match(regex);
	if(idlist) {
	    $.ajax({
		type: 'GET',
		dataType: 'jsonp',
		data: {},
		url: "https://api.twitter.com/1/statuses/oembed.json?id=" + idlist[2],
		success: function (msg) {
		    $(el).replaceWith(msg.html);
		}
	    });
	}
}

$( document ).ready(function() {
	$('a').each(makeTwitterCard);
});
