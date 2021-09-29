var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { style: '../../public/assets/styles/loginNSing.css',
    title: 'Projeto Integrador',
    reviews: [{ img: 'images/default.jpg',
    profile: 'Lorem ipsum dolor sit amet',
    desc: 'Lorem ipsum dolor sit amet.'
  },
  { img: 'images/default.jpg',
    profile: 'Lorem ipsum dolor sit amet',
    desc: 'Lorem ipsum dolor sit amet.'
  },
  { img: 'images/default.jpg',
    profile: 'Lorem ipsum dolor sit amet',
    desc: 'Lorem ipsum dolor sit amet.'
  },
  { img: 'images/default.jpg',
    profile: 'Lorem ipsum dolor sit amet',
    desc: 'Lorem ipsum dolor sit amet.'
  }
]
});
});

module.exports = router;
