'use strict'
const users = [
   {
     'id' : 1,
     'name' : 'Elias',
     'email' : 'test@email.com',
     'passwd' : 'test',
   },
   {
     'id' : 2,
     'name' : 'Make',
     'email' : 'make@email.com',
     'passwd' : 'makensalis',
   }
]

const get_user = (id) => {
  const user = users.filter((usr) => {return usr.id === id});
  return user[0];
};

const get_user_login = (email) => {
  const user = users.filter((usr) => {return usr.email === email});
  return user[0];
}

module.exports = {
  users,
  get_user,
  get_user_login,
}
