var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('loginNSing', { style: '../../public/assets/styles/loginNSing.css',
    title: 'Projeto Integrador',
    img: 'images/default.jpg',
    profile: 'Lorem ipsum dolor sit amet',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus venenatis leo, id ultricies augue tristique non. Morbi aliquet arcu ante, non pretium nulla sodales eu. Donec vitae erat justo. Nunc ut fringilla tellus. Donec sed nunc ac mi lacinia porta non eget nunc. Donec at laoreet mi, ac porttitor magna. Nam ex magna, semper sed porta nec, efficitur et felis. Etiam varius, ligula et bibendum viverra, felis felis hendrerit lectus, congue interdum massa mi sed leo. Etiam malesuada, felis quis posuere vulputate, nunc ligula lobortis elit, id finibus elit libero molestie libero. Nulla dictum convallis justo, at feugiat est sodales in. Quisque condimentum euismod massa, nec pharetra turpis. Nullam eu dui ut justo commodo cursus et sit amet dolor. Quisque elementum pharetra ex at sollicitudin. Proin nec venenatis dui. Donec sapien massa, vestibulum ut consequat ac, auctor non turpis. Pellentesque convallis nulla quis nulla pharetra, sit amet consectetur felis lobortis.'
   });
});

module.exports = router;
