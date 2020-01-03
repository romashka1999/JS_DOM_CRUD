export default class Dom {

    constructor() {}

    clearPostsTable() {
        document.getElementById('postsBody').innerHTML = '';
    }

    drawPost(post) {
        const postsBody = document.getElementById('postsBody');

        const tr =  document.createElement('tr');

        function createTdElement(text) {
            const td = document.createElement('td');
            const textNode = document.createTextNode(text);
            td.appendChild(textNode);
            tr.appendChild(td);
        }

        createTdElement(post.id);
        createTdElement(post.title);
        createTdElement(post.body);

        postsBody.appendChild(tr);
    }

    editUser(id, user) {
        console.log(user, 'aq');
        const attr = id + 'tr';
        const editedUser = document.getElementById(attr);
        console.log(editedUser);
        editedUser.firstChild.nextSibling.innerText = user.name;
        editedUser.firstChild.nextSibling.nextSibling.innerText = user.username;
    }

    setDeleteModalForUser(id) {
        const buttonDeleteUser = document.getElementById('buttonDeleteUser');
        buttonDeleteUser.setAttribute('userId', id);
    }

    setUpdateModalForUser(user) {
        const idUpdate = document.getElementById('idUpdate');
        const nameUpdate = document.getElementById('nameUpdate');
        const usernameUpdate = document.getElementById('usernameUpdate');
        const emailUpdate = document.getElementById('emailUpdate');
        const phoneUpdate = document.getElementById('phoneUpdate');

        const buttonUpdateUser = document.getElementById('buttonUpdateUser');
        buttonUpdateUser.setAttribute('userId', user.id);

        idUpdate.innerText = user.id;
        nameUpdate.value = user.name;
        usernameUpdate.value = user.username;
        emailUpdate.value = user.email;
        phoneUpdate.value = user.phone;
    }

    getDataFromUdpateUser() {
        const nameUpdateVal = document.getElementById('nameUpdate').value;
        const usernameUpdateVal = document.getElementById('usernameUpdate').value;
        const emailUpdateVal = document.getElementById('emailUpdate').value;
        const phoneUpdateVal = document.getElementById('phoneUpdate').value;

        return {
            name: nameUpdateVal,
            username: usernameUpdateVal,
            email: emailUpdateVal,
            phone: phoneUpdateVal
        }
    }

    getDataFromCreateUser() {
        const nameCreateVal = document.getElementById('nameCreate').value;
        const usernameCreateVal = document.getElementById('usernameCreate').value;
        const emailCreateVal = document.getElementById('emailCreate').value;
        const phoneCreateVal = document.getElementById('phoneCreate').value;

        return  {
            name: nameCreateVal,
            username: usernameCreateVal,
            email: emailCreateVal,
            phone: phoneCreateVal
        }

    }

    deleteUserFromTableById(id) {
        const attr = id + 'tr';
        const deletedRow = document.getElementById(attr);
        console.log(deletedRow);
        deletedRow.parentNode.removeChild(deletedRow);
    }

    viewUser(user) {
        const idView = document.getElementById('idView');
        const nameView = document.getElementById('nameView');
        const usernameView = document.getElementById('usernameView');
        const emailView = document.getElementById('emailView');
        const phoneView = document.getElementById('phoneView');

        idView.innerText = user.id;
        nameView.innerText = user.name;
        usernameView.innerText = user.username;
        emailView.innerText = user.email;
        phoneView.innerText = user.phone;
    }
    
    drawUserInTable(user) {
        const tbody = document.getElementById('tbody');

        const tr =  document.createElement('tr');
        const attr = user.id + 'tr';
        tr.setAttribute('id', attr);

        function createTdElement(text) {
            const td = document.createElement('td');
            const textNode = document.createTextNode(text);
            td.appendChild(textNode);
            tr.appendChild(td);
        }

        createTdElement(user.id);
        createTdElement(user.name);
        createTdElement(user.username);

        //actioon buttons
        const tdButtons = document.createElement('td');

        const viewButton = document.createElement('button');
        const updateButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        const postButton = document.createElement('button');

        viewButton.classList.add('btn', 'btn-sm', 'btn-primary', 'viewButton');
        updateButton.classList.add('btn', 'btn-sm', 'btn-info', 'updateButton');
        deleteButton.classList.add('btn', 'btn-sm', 'btn-danger', 'deleteButton');
        postButton.classList.add('btn', 'btn-sm', 'btn-info', 'postButton');

        const textNodeV = document.createTextNode('View');
        const textNodeU = document.createTextNode('Update');
        const textNodeD = document.createTextNode('Delete');
        const textNodeP = document.createTextNode('Posts');


        viewButton.appendChild(textNodeV);
        updateButton.appendChild(textNodeU);
        deleteButton.appendChild(textNodeD);
        postButton.appendChild(textNodeP);

        viewButton.style.marginLeft = "5px";
        updateButton.style.marginLeft = "5px";
        deleteButton.style.marginLeft = "5px";
        postButton.style.marginLeft = "5px";

        postButton.setAttribute('data-toggle', 'modal');
        postButton.setAttribute('data-target', '#postModal');
        postButton.setAttribute('userId', user.id);

        viewButton.setAttribute('data-toggle', 'modal');
        viewButton.setAttribute('data-target', '#viewModal');
        viewButton.setAttribute('userId', user.id);


        updateButton.setAttribute('data-toggle', 'modal');
        updateButton.setAttribute('data-target', '#updateModal');
        updateButton.setAttribute('userId', user.id);

        deleteButton.setAttribute('data-toggle', 'modal');
        deleteButton.setAttribute('data-target', '#deleteModal');
        deleteButton.setAttribute('userId', user.id);

        tdButtons.appendChild(viewButton);
        tdButtons.appendChild(updateButton);
        tdButtons.appendChild(deleteButton);
        tdButtons.appendChild(postButton);

        tr.appendChild(tdButtons);

        tbody.appendChild(tr);
    }
}