const User = require("../Models/User");
module.exports = {
  create: async (obj) => {
    try {
      let { email, dateBorn, nomeCompleto, senha, nickname, favoriteChampion } =
        obj;
      return await User.create({
        email,
        nomeCompleto,
        dateBorn,
        senha,
        nickname,
        favoriteChampions1: favoriteChampion[0]?.championId ?? null,
        favoriteChampions2: favoriteChampion[1]?.championId ?? null,
        favoriteChampions3: favoriteChampion[2]?.championId ?? null,
        favoriteChampions4: favoriteChampion[3]?.championId ?? null,
        favoriteChampions5: favoriteChampion[4]?.championId ?? null,
      });
    } catch (e) {
      console.error(e);
    }
  },
  findByEmail: async (id) => {
    return await User.findAll({ where: { email: id } });
  },
  findByFavoriteChampion: async (champ) => {
    return await User.findAll({ where: { favoriteChampions: champ } });
  },
  uptade: async (id, filter) => {
    return await User.update(filter, { where: { email: id } });
  },
  delete: async (id) => {
    return await User.destroy({ where: { email: id } });
  },
};
