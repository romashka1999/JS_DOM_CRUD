import registerListeners from './helpers/registerListeners';
import User from './User';
const user = new User();

window.onload = async () => {
    await user.getAllUsers();

    registerListeners(user);

    document.getElementById('buttonUpdateUser').addEventListener('click', function(event) {
        const userId = Number.parseInt(event.target.getAttribute("userId"));
        user.udpateUserByid(userId)

    });

    document.getElementById('buttonDeleteUser').addEventListener('click', function(event) {
        const userId = Number.parseInt(event.target.getAttribute("userId"));

        user.deleteUserById(userId);
    });

    
    document.getElementById('buttonCreateUser').addEventListener('click', async function() {
        user.createUser(user);
        registerListeners(user);
    });
    

}











