import {v4 as uuidv4 } from 'uuid';
let users = []
export const getUsers = (req , res) => {
    res.send(users);
}
export const createUser = (req , res) => {
    const user_from_post = req.body;
    users.push({... user_from_post , id: uuidv4()});
    console.log(users);

    res.send(`User with name ${user_from_post.firstName} added to the database`);
}
export const searchUser = (req , res)=>{
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
}
export const deleteUser = (req , res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with ${id} Deleted`);
}

export const updateUser = (req , res)=>{
    const {id} = req.params;
    const {firstName , lastName , age} = req.body;

    const userToBeUpdated = users.find((user) => user.id == id);
    if(firstName) {userToBeUpdated.firstName = firstName};
    if(lastName) {userToBeUpdated.lastName = lastName};
    if(age) {userToBeUpdated.age = age};
    res.send(`User with ${id} updated`);

}