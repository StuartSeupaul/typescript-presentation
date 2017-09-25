class User {
    protected id: string;
    public status: string;
    constructor(id) {
        this.id = id;
    }
}

let users = new Array<User>();

function email(user: User) {
    return null;
}

function getUserByStatus(status: string): User[] {

    let filteredUsers = users.filter((user: User) => user.status === status);

    return filteredUsers ? filteredUsers : new Array<User>();
} 

let inactiveUsers: User[] = getUserByStatus("inactive");

if(inactiveUsers.length) {
    inactiveUsers.forEach(user => email(user));     
}