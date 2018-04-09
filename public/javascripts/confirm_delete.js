// Confirmation for when user tries to delete
var deleteButton = document.getElementById("delete_button");

  deleteButton.forEach(function(button){

    button.addEventListener("click", function(ev){
// Show a confirm dialog
        var okToDelete = confirm("Are you sure you want to delete?");
//If user presses no, prevent the form submit
        if (!okToDelete) {
//Prevent the click event propagating
          ev.preventDefault();
        }
    })
});
