let userDetails = [];

const displayUser = () => {
    return userDetails;
}

const postUsers = (user) => {
    userDetails.push(user);
};

const deleteUser = (name) => {
    const afterUserDelete = userDetails.filter((user) => user.name != name);

userDetails=afterUserDelete;
};

const displayUserBasedEmail = (email) => {
    const afterEmailFiterUser = userDetails.filter((user) => user.email == email);

    return afterEmailFiterUser;

}
//edit name based on email
const updateName = (name, email) => {
    const foundUser = userDetails.filter((user) => user.email == email);
    if (foundUser.length == 1) {
        foundUser[0].name = name;
    } else {
        console.log("email not found")
    }
    console.log(foundUser);

}




module.exports = { displayUser, postUsers, deleteUser, displayUserBasedEmail, updateName };

