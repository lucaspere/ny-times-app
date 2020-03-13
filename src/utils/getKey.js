export const getKey = (uri) => {
   const idPost = uri.match(/([\w|\d]+)-([\w|\d]+)-([\w|\d]+)-([\w|\d]+)-([\w|\d]+)/g);

   return idPost.toString();
}