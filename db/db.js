const mongoose = require("mongoose");

const URL = "mongodb+srv://registration:registration@cluster0.sd2bhdx.mongodb.net/?retryWrites=true&w=majority"

const connectdatabase = () => {
  mongoose.connect(URL, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })

    .then((data) => {
      console.log(
        "\x1b[35m%s\x1b[0m",
        `mongodb connected with server: ${data.connection.host}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectdatabase();
