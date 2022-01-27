const repositoryUser = require("../bd/repository/userCRUD");
const apiRiot = require("../lib/apiRiot");

contrlCad = {
  index: (req, res, next) => {
    res.render("cadastro", {
      title: "Cadastre-se",
      style: "stylesheet/cadastro.css",
    });
  },
  newCadastro: async ({ body }, res, next) => {
    let riotDates = await apiRiot.getSummuner(body);
    body.nickname = riotDates.id;
    body.favoriteChampion = await apiRiot.getChampions(riotDates.id);
    console.log(body);
    await repositoryUser.create(body);
    res.redirect("/");
  },
};

module.exports = contrlCad;
