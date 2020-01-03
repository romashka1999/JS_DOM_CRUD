/************************************** JSON PLACEHOLDER **********************************/
export default class JsonPlaceHolder {

    constructor() {
        this.baseURL = `https://jsonplaceholder.typicode.com`;
    }

    /************************************************ ALL  DATA ********************************************/

    async getAllUsers() {

        try {
            const response = await fetch(`${this.baseURL}/users`, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            return response.json();
            
        } catch (error) {
            return error;
        }
    }


    // async getAllPosts(){
    //     try {
    //         const response = await this.axios.get(`/posts`);
    //         return response;
    //     } catch (error) {
    //         return error;
    //     }
    // }
    
    // async getAllTodos(){
    //     try {
    //         const response = await this.axios.get(`/todos`);
    //         return response;
    //     } catch (error) {
    //         return error;
    //     }
    // }

    // async getAllComments(){
    //     try {
    //         const response = await this.axios.get(`/comments`);
    //         return response;
    //     } catch (error) {
    //         return error;
    //     }
    // }
    // /*********************************************************************************************************************/



    /****************************************************** DATA BY ID ***************************************************/
    async getUserById(id){
        try {
            const response = await fetch(`${this.baseURL}/users?id=${id}`, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            return response.json();
            
        } catch (error) {
            return error;
        }
    }

    // async getPostById(id){
    //     try {
    //         const response = await this.axios.get(`/posts?id=${id}`);
    //         return response;
    //     } catch (error) {
    //         return error;
    //     }
    // }

    // async getTodoById(id){
    //     try {
    //         const response = await this.axios.get(`/todos?id=${id}`);
    //         return response;
    //     } catch (error) {
    //         return error;
    //     }
    // }

    // async getCommentById(id){
    //     try {
    //         const response = await this.axios.get(`/comments?id=${id}`);
    //         return response;
    //     } catch (error) {
    //         return error;
    //     }
    // }

    // /************************************************** DATA BY ANY UNIQUE IDENTIFIER  ****************************************************/   


    async getPostsByUserId(userId){

        try {
            const response = await fetch(`${this.baseURL}/posts?userId=${userId}`, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            return response.json();
            
        } catch (error) {
            return error;
        }
    }

    // async getCommentsByPostId(postId){
    //     try {
    //         const response = await this.axios.get(`/comments?postId=${postId}`);
    //         return response;
    //     } catch (error) {
    //         return error;
    //     }
    // }

    // async getTodosByUserId(userId){
    //     try {
    //         const response = await this.axios.get(`/todos?userId=${userId}`);
    //         return response;
    //     } catch (error) {
    //         return error;
    //     }
    // }


    // /*****************************************************************************************/

    async deleteUserById(id){
        try {
            const response = await fetch(`${this.baseURL}/users/${id}`, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            return response.json();
            
        } catch (error) {
            return error;
        }
    }

    async updateUserById(id, user){
        try {
            const response = await fetch(`${this.baseURL}/users/${id}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            return response.json();
            
        } catch (error) {
            return error;
        }
    }

    async createUser(user) {
        try {
            const response = await fetch(`${this.baseURL}/users`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            return response.json();
            
        } catch (error) {
            return error;
        }
    }

}

