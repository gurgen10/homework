import users from './user.json';


export default class UserService {

    getUsers = () => {
        return users.map(this._transformUser)
    }

    getUserById = (id) => {
        id = parseInt(id)
       const localUser = users.filter(user => {
        return user.id === id;
       })[0];

       return this._transformUser(localUser);
    }

    _transformUser = user => {
        if(user) {
            return {
                id: user.id,
                firstName:  user.firstName,
                lastName:  user.lastName,
                age:  user.age,
                gender:  user.gender,
                profileImage:  user.profileImage
                }
        }
        return null;
        
    }   
}
