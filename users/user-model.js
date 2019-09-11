// responsible for dealing w data access
const db = require("../data/db-config"); 

module.exports = {
  findUserPOsts
};

function findUserPosts(id) {
  // select * from posts as p
  // join users as u on u.id = p.user_id
  // where u.id = 123
  return db("users as u") // reember to return the call db() here
    .join("posts as p", "u.id", "p.user_id")
    .where({ user_id: id })
    .then(posts => {
      //   res.status(200).json(posts);
      return posts;
    });
  // .catch(error => res.send(error)); you can ignore this bc you are catching the error
  // back in user router

  // coping this from user router last one
}
