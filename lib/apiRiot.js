const { default: axios } = require("axios")

module.exports = {
    getSummuner: async({nickname}) =>{
        const entity = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${process.env.API_KEY}`)
        return entity.data
    },
    getChampions: async(id) =>{
        const entity = await axios.get(`https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`,{
            headers:{"X-Riot-Token": process.env.API_KEY,
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8" }
        })
        let {data} = entity
        const result = data.map(({championId}) => {return  {championId}})
        return result.slice(0,5)
    }
}