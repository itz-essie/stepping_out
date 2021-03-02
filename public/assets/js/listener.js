const inputState= document.getElementById("inputState");
let state="";

inputState.addEventListener("change", function(event) {
    state= event.target.value
    // $.ajax({
    //     method: "GET",
    //     url: `/stateselect/${event.target.value}`
    // })
    // .then(function(filteredEvent) {
        console.log("filteredEvent")
        window.location.href="/stateselect/" + state
    // })
})