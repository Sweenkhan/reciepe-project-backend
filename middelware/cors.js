 

  const setCorsHeaders = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://qreciepe.onrender.com");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  };

  export default setCorsHeaders;