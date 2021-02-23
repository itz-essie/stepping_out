// handle event listener hear
// api call to route onclick of submit button


const submitButton = document.getElementById('');

 // Event listener for when the blog is submitted
 submitButton.addEventListener('submit', handleFormSubmit);

 // Event handler for when a user submits a post
 const submitPost = (post) => {
   fetch('/api/posts', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(post),
   })
     .then((response) => response.json())
     .then((data) => {
       console.log('Success in submitting post:', data);
       window.location.href = '/newEvent';
     })
     .catch((error) => {
       console.error('Error:', error);
     });
 };