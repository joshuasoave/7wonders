const mongoose = require('mongoose')
const Wonders = require('../models/wonders.js')

const newWonders = [
  {
    name: 'Alhambra',
    location: `Granada, Spain`,
    year: '889 AD',
    description: 'Originally built as a fortress, Alhambra was converted into a palace by Sultan Yusuf of Granada. It later served as the site of Royal Court for Spanish Monarchs Ferdinand and Isabella.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/1920px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg
  },
  {
    name: 'Potola Palace',
    location: `Lhasa, Tibet`,
    year: '637 AD',
    description: 'The Potola Palace is considered a holy site and no buildings in the area are allowed to built taller than it. This site served as a winter palace for the Dhali Lama and is important to Tibetan Buddhism.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/%E5%B8%83%E8%BE%BE%E6%8B%89%E5%AE%AB.jpg/1920px-%E5%B8%83%E8%BE%BE%E6%8B%89%E5%AE%AB.jpg'
  },
  {
    name: 'Alcázar of Segovia',
    location: `Segovia, Spain`,
    year: '1155 AD',
    description: `This famous castle is said to be the inspiration for Cinderella's castle. It was orginially built as a military fortress, but also served as a royal palace and prison over the years.`,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Segovia_-_Alc%C3%A1zar_de_Segovia_22_2017-10-24.jpg/660px-Segovia_-_Alc%C3%A1zar_de_Segovia_22_2017-10-24.jpg'
  },
  {
    name: 'Sistine Chapel',
    location: `Vatican City`,
    year: '1483 AD',
    description: `The Sistine Chapel is famous for its iconic frescos painted by artists such as Michelangelo. Today, it serves as a papal conclave where cardinals elect the next pope.`,
    img: 'https://theromanguy.com/wp-content/uploads/Sistine-Chapel.jpg'
  },
  {
    name: 'Angkor Wat',
    location: `Siem Reap, Cambodia`,
    year: '12th Century AD',
    description: `Angkor Wat was originall built as a temple to the Hindu god Vishnu, but eventually served as a Buddhist temple. It was built by King Suryavarman II of the Khmer Empire.`,
    img: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg3MjM5Mjc1ODQ5/an-aerial-view-of-the-angkor-wat-temple-2.jpg'
  },
  {
    name: `Saint Basil's Cathedral`,
    location: `Moscow, Russia`,
    year: '1561',
    description: `This unique building is regarded as a cultural symbol of Russia. During the Soviet Union's secularization campaigns, the church was confiscated from the Russian Orthodox followers. Weekly services were restored in 1997.`,
    img: 'https://pradiz.com/wp-content/uploads/2018/09/nikolay-vorobyev-jaH3QF46gAY-unsplash.jpg'
  },
  {
    name: 'Moai',
    location: `Easter Island`,
    year: '1250-1500 AD',
    description: `Moai are stone figures carved by the Rapa Nui people to resemble human faces. They were carved in honor of diefied ancestors. The construction of these stone statues are a feat of engineering.`,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/AhuTongariki.JPG/660px-AhuTongariki.JPG'
  },
]
