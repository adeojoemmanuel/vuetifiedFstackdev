module.exports = {
  publicPath: "",
  devServer: {
    proxy: {
      "/api/v1": {
        target: "http://142.93.207.91/"
      }
    }
  }
};
