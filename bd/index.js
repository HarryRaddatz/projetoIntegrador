(async () => {
  const database = require("./database.js"),
  User = require('./Models/User')
  await database.sync();

    User.create({
        email: "harry-kevin@hotmail.com",
        nomeCompleto: "Harry Kevin Raddatz",
        nickname: "Pseudo",
        dateBorn: 1999-19-02
    }).then(x => console.log("Usuario Criado.")).catch(err => {
        console.log(err.fields.PRIMARY.split('-'))
    })
})();
