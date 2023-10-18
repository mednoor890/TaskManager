const Auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(401).send('Unauthorized');
    }
  
    const encodedCredentials = authHeader.split(' ')[1];
    const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8');
    const [username, password] = decodedCredentials.split(':');
  
    //hardcoded username and password 
    if (username === 'user' && password === 'password') {
      next();  //user is authenticated proceed to the next middlewaere or route
    } else {
      res.status(401).send('Unauthorized');
    }
  }
  
  module.exports = Auth;
  