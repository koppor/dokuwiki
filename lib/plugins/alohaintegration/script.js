/* DOKUWIKI:include */

var ai_htmlParser = new DOMParser();
var ai_data = {};

jQuery(function() {
	Aloha.bind('aloha-editable-activated', function() {
		var url = window.location + "&do=edit&rev=0";
		jQuery.ajax({
			url: url,
			dataType: "html"
		}).done(function (result) {
			var htmlDoc = ai_htmlParser.parseFromString(result, "text/html");
			ai_data.sectok = jQuery(htmlDoc).find("input[name='sectok']").val();
			ai_data.changecheck = jQuery(htmlDoc).find("input[name='changecheck']").val();
			ai_data.date = jQuery(htmlDoc).find("input[name='date']").val();
		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		});
	});

	Aloha.bind('aloha-editable-deactivated', function() {
		ai_data.wikitext = jQuery("div.page").children().text();
		var url = window.location + "&do=edit&rev=0";
		
		ai_data.id = "start";
		ai_data.rev = 0;
		ai_data.prefix = ".";
		ai_data.suffix = "";
		ai_data.target = "section";
		ai_data["do[save]=Save"] = "";
		ai_data.summary = "";
		
		// jQuery sends data as form-encoded, which is also expected by DokuWiki.
		// Therefore, we directly pass ai_data as data
		jQuery.ajax({
			url: url,
			type: "POST",
			data: ai_data
		}).done(function (result) {
			console.log("success");
		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		});
	});
	
	Aloha.ready( function() {
		// Aloha.settings.ribbon = {enable: true};
		Aloha.jQuery("div.page").aloha();
	});
    jQuery("div.page").on("click", function(e) {
        var target = jQuery(e.target);

        if (target.is("a")) {
            // link clicked: follow link
            return true;
        }

        // quick hack: edit whole page
        var elementToEdit = jQuery(e.delegateTarget);
    });
});
