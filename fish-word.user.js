// ==UserScript==
// @name           fish-word
// @namespace      cwchiu
// @include        http://apps.facebook.com/fishworld/select_gift_send.php
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==
var gift = [
	23, /* Tiered Elestos	*/
	8,	/* Starfish			*/
	10, /* Clam				*/
	17,	/* Green Gorgonian  */
	21  /* Green Coral      */
];
var gift_total = gift.length;


setInterval(  function(){
	var idx = Math.floor(Math.random()*(gift_total-1));
	var gift_elem = 10;//gift[idx];
	$.post('http://apps.facebook.com/fishworld/send_gift.php?process=1', {
		cmfs_typeahead_req_form_4aa86237b7e590054956952:	'zzzz',
		'ids[]':[	592279378],
		gift: gift_elem
	}, function(data){
			
		$.get('http://apps.facebook.com/fishworld/accept_gift.php?friend=592279378&r=401&gid_ref='+gift_elem+'&b=1', {},function(){
		
			$.get('http://apps.facebook.com/fishworld/index.php?accept_gift=1', {},function(){
				//alert(2);					
			});					
		});				
	});
}, 10000);

