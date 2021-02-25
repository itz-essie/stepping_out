// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM loaded! 🚀");

  const submitButton = document.getElementById("submit_button");
  const authorNameInput = document.getElementById("author_name");
  const authorEmailInput = document.getElementById("author_email");
  const activityCategoryInput = document.getElementById("activity_category");
  const activityNameInput = document.getElementById("activity_name");
  const activityDescriptionInput = document.getElementById("activity_description");
  const ratingInput = document.getElementById("rating");
  const costInput = document.getElementById("cost");
  const cityInput = document.getElementById("city");
  const stateInput = document.getElementById("state");
  const insiderInfoInput = document.getElementById("inputInsider");
  const photosInput = document.getElementById("inputPhotos");


  // Event listener for when the date idea is submitted
  submitButton.addEventListener("submit", handleFormSubmit);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      author_name: authorNameInput.value.trim(),
      author_email: authorEmailInput.value.trim(),
      activity_category: activityCategoryInput.value,
      activity_name: activityNameInput.value.trim(),
      activity_description: activityDescriptionInput.value.trim(),
      rating: ratingInput.value.trim(),
      cost: costInput.value.trim(),
      city: cityInput.value.trim(),
      state_code: stateInput.value,
      inputInsider: insiderInfoInput.value,
      inputPhotos: photosInput.value
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
