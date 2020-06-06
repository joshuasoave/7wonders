const Original7 = require('../models/og7.js')
const mongoose = require('mongoose')

const sevenWonders = [
  {
    name: 'Petra',
    location: `Ma'an, Jordan`,
    year: '5th Century BC',
    description: 'Petra is a stunning city carved into red sandstone rock of the surrounding mountains. This area served as a commercial hub for trade caravans form all across the region.',
    img: 'https://whc.unesco.org/uploads/thumbs/site_0326_0004-500-333-20151104133419.jpg'
  },
  {
    name: 'Taj Mahal',
    location: `Agra, Uttar Pradesh, India`,
    year: '1634 AD',
    description: 'A Mausoleum built by emperor Shah Jahan for his favorite wife Mumtaz Mahal. The Taj Mahal is a masterpiece of symmetry and instantly recognizable with its domed structures.',
    img: 'https://discovery.sndimg.com/content/dam/images/discovery/fullset/2020/2/21/Getty%20Images.jpg.rend.hgtvcom.406.406.suffix/1582329409187.jpeg'
  },
  {
    name: 'Colosseum',
    location: `Rome, Italy`,
    year: '80 AD',
    description: 'At the time of its construction, the Colosseum was considered the largest ampitheatre ever built. It was used for gladiator contests and public spectacles of the Roman Empire.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg'
  },
  {
    name: 'Christ The Redeemer',
    location: `Rio de Janeiro, Brazil`,
    year: '1931 AD',
    description: `At almost 100 ft high, this state of Jesus Christ towers over the city of Rio De Janeiro. This symbolic statue is considered to be one of Rio de Janeiro's most recognizable landmarks`,
    img: 'https://www.wonders-of-the-world.net/Christ-the-Redeemer/images/Vignettes/Statue/Christ-redempteur-V.jpg'
  },
  {
    name: 'Great Wall of China',
    location: `China`,
    year: '700 BC',
    description: `The Great Wall of China refers to a collection of fortifiaction systems. While the earliest section was built in 700 BC, the most recognizable sections were built from 1368-1644 AD.`,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1920px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg'
  },
  {
    name: 'Chichen Itza',
    location: `Yucatán, Mexico`,
    year: '600 AD',
    description: `Chichen Itza was one of the most populous Mayan cities. The most recognizable building is the Temple of Kukulcan. It was built to honor the great feathered serpent diety.`,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chichen_Itza_%283326547826%29.jpg/500px-Chichen_Itza_%283326547826%29.jpg'
  },
  {
    name: 'Machu Pichu',
    location: `Cuzco, Peru`,
    year: '1450',
    description: `Machu Pichu is a famous Incan monument thought to be have been built for emperor Pachacuti. The Inca managed a great feat of engineering by building terrace farms on the side of the mountain.`,
    img: 'https://i.guim.co.uk/img/media/b56952349419f749667d43f38b4d05e2980821a2/0_176_6016_3611/master/6016.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=d1d59c0c9b0e70e1da5989902cf5f01c'
  },
]

module.exports = sevenWonders
