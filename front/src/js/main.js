

// when the user clicks the button
document.querySelector('button.tagit').addEventListener("click", function() {

	// send the tag to the server
let enteredTag =	document.querySelector('[name=tag]').value
	console.log('got tag from input:', enteredTag);


	let url = 'http://localhost:1337/tag';

	axios.post(url, {
	    tag: enteredTag
	  })
	.then(function (response) {
	   	console.log(response);
	  })
	.catch(function (error) {
	   	console.log(error);
	  });

})



