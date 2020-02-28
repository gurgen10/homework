import users from './user.json';


export default class UserService {

    getUsers = () => {
        return users.map(this._transformUser)
    }

    getUserById = (id) => {
       const localUser = users.filter(user => {
        return user.id === id;
       })

       return this._transformUser(localUser);
    }

    _transformUser = user => {
        return {
        id: user.id,
        firstName:  user.firstName,
        lastName:  user.lastName,
        email:  user.email,
        age:  user.age,
        gender:  user.gender,
        profileImage:  user.profileImage
        }
    }   
}
