import  jwt from 'jsonwebtoken';

const verifyJwt = (i) => {
    console.log("INFO VALUE ON SERVER POST",i);
    let t = i.tokenValue
    let infoUserId = i.userId
  try {
      console.log("on est là auth");
      //console.log(userId);

    const token = t; // récupère le token dans le header
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); // décrypte le token
    const userId = decodedToken.userId; // récupère l'id du token
    if (infoUserId !== userId) { // compare l'id du token avec l'id utilisateur
      throw 'Invalid user ID';
    } else {
     return true
    }
  } catch {
    return{
        message:"erreur jwt verify"
    }
  }
};

export default verifyJwt()