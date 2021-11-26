module.exports = {
  // if the app is supposed to run on Github Pages in a subfolder, use the following config:1
  publicPath: process.env.NODE_ENV === "production" ? "/townsquare/" : "/"
  //publicPath: process.env.NODE_ENV === "production" ? "/" : "/"
};
