const inputState= document.getElementById("inputState");
let state="";
const fileUpload = document.getElementById("photoInput");
const fileName = document.getElementById("currentFileName");

// inputState.addEventListener("change", function(event) {
//     state= event.target.value
//     // $.ajax({
//     //     method: "GET",
//     //     url: `/stateselect/${event.target.value}`
//     // })
//     // .then(function(filteredEvent) {
//         console.log("filteredEvent")
//         window.location.href="/stateselect/" + state
//     // })
// })

fileUpload.addEventListener("change", function(){
    let newFileUploadArr = fileUpload.files;
    if (newFileUploadArr.length > 0){
        fileName.innerText = newFileUploadArr[0].name;
    } else {
        fileName.innerText = "Choose File";
    }
});