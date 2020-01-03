export default function registerListeners(user) {

    const viewButtons = document.querySelectorAll('.viewButton');
    const updateButtons = document.querySelectorAll('.updateButton');
    const deleteButtons = document.querySelectorAll('.deleteButton');
    const postButtons = document.querySelectorAll('.postButton');

    for (let i = 0; i < postButtons.length; i++) {
        postButtons[i].addEventListener("click", function() {
            const userId = Number.parseInt(event.target.getAttribute("userId"));
            console.log(userId);

            user.getPostsByUserId(userId);

        });
    }


    for (let i = 0; i < viewButtons.length; i++) {
        viewButtons[i].addEventListener("click", function() {
            const userId = Number.parseInt(event.target.getAttribute("userId"));
            console.log(userId);

            user.getUserById(userId);
        });
    }

    for (let i = 0; i < updateButtons.length; i++) {
        updateButtons[i].addEventListener("click", function() {
            const userId = Number.parseInt(event.target.getAttribute("userId"));
            console.log(userId);

            user.setUpdateModalForUser(userId);

        });
    }

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function(event) {
            
            const userId = Number.parseInt(event.target.getAttribute("userId"));
            console.log(userId);

            user.setDeleteModalForUser(userId);
        
        });
    }

}


