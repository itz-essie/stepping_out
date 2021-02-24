// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM loaded! 🚀");

  const submitButton = document.getElementById("submit_button");
  const authorNameInput = document.getElementById("author_name");

  // Event listener for when the blog is submitted
  submitButton.addEventListener("submit", handleFormSubmit);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      author_name: authorNameInput.value.trim(),
      author_email: "gfghfgh",
      activity_category: "ghfg",
      activity_name: "gffh",
      activity_description: "gfgfg",
      rating: "gnhjgh",
      cost: "erer",
      city: "hbdfg",
      state_code: "gffg",
    };
    submitPost(newPost);
  };

  // Event handler for when a user submits a post
  const submitPost = (post) => {
    fetch("/newEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("Error:", error);
      });
  };
});
