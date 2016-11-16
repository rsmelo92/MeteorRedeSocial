Template.posts.events({
	"submit form": function(e, template){
		e.preventDefault();

		var textarea = template.find("textarea");
		Posts.publish({message:textarea.value});
		textarea.value = "";
		return
	},
});