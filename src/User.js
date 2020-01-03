import JsonPlaceHolder from './JsonPlaceHolder';
import Dom from './Dom';

export default class User {

    constructor() {
        this.api = new JsonPlaceHolder();
        this.dom = new Dom();
        this.users = [];
    }

    async getAllUsers() {
        if(this.users.length === 0) {
            console.log('object');
            const response = await this.api.getAllUsers();
            this.users = response;
            console.log(response);
        }
        console.log(this.users);
        for(let user of this.users) {
            console.log(user);
            this.dom.drawUserInTable(user);
        }
    }

    async deleteUserById(id) {
        id = Number.parseInt(id);

        const response = await this.api.deleteUserById(id);

        for(var i = 0; i < this.users.length; i++) {
            if(this.users[i].id === id) {
                this.users.splice(i, 1);
                break;
            }
        }
        this.dom.deleteUserFromTableById(id);
    }

    async createUser() {
        let maxId = 0;
        for(var i = 0; i < this.users.length; i++) {
            maxId = Math.max(maxId, this.users[i].id)
        } 
        const id = maxId + 1;
        const user = this.dom.getDataFromCreateUser();
        user.id = id;
        this.users.push(user);

        this.api.createUser(user);

        this.dom.drawUserInTable(user);
    }

    async getUserById(id) {
        id = Number.parseInt(id);
        const response = await this.api.getUserById(id);
        let user =  null;
        if(response.length === 0) {
            for(var i = 0; i < this.users.length; i++) {
                if(this.users[i].id === id) {
                    user = this.users[i]
                }
            }
        } else {
            user = response[0];

            //if user was updated on frontend we dont need server side data
            for(var i = 0; i < this.users.length; i++) {
                if(this.users[i].id === id) {
                    user.name = this.users[i].name;
                    user.username = this.users[i].username;
                    this.email = this.users[i].email;
                    this.phone = this.users[i].phone;
                    break;
                }
            }
        }

        this.dom.viewUser(user);
    }

    async setUpdateModalForUser(id) {
        id = Number.parseInt(id);

        const response = await this.api.getUserById(id);

        let user = null;
        if(response.length === 0) {
            for(var i = 0; i < this.users.length; i++) {
                if(this.users[i].id === id) {
                    user = this.users[i]
                }
            }
        } else {
            user = response[0];
        }
        this.dom.setUpdateModalForUser(user);
    }

    setDeleteModalForUser(id) {
        id = Number.parseInt(id);
        this.dom.setDeleteModalForUser(id);
    }

    async udpateUserByid(id) {
        id = Number.parseInt(id);

        const user = this.dom.getDataFromUdpateUser();
        const response = await this.api.updateUserById(id, user);
        user.id = id;
        for(var i = 0; i < this.users.length; i++) {
            if(this.users[i].id === id) {
                this.users[i].name = user.name;
                this.users[i].username = user.username;
                this.users[i].email = user.email;
                this.users[i].phone = user.phone;
                break;
            }
        }

        this.dom.editUser(id, user);
    }

    async getPostsByUserId(id) {
        const response = await this.api.getPostsByUserId(id);
        const posts = response;

        this.dom.clearPostsTable();

        for(var i = 0; i < posts.length; i++) {
            this.dom.drawPost(posts[i]);
        }
    }
}