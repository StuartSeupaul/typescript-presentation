function getUserByStatus(status) {
    return users.find(user => user.status === status);
}

let inactiveUsers = getUserByStatus("inactive");

if(inactiveUsers.length > 0) {
    inactiveUsers.forEach(user => email(user)); 
}