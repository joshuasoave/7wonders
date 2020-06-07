const mongoose = require('mongoose')
const Wonders = require('../models/wonders.js')

const newWonders = [
  {
    name: 'Alhambra',
    location: `Granada, Spain`,
    year: '889 AD',
    description: 'Originally built as a fortress, Alhambra was converted into a palace by Sultan Yusuf of Granada. It later served as the site of Royal Court for Spanish Monarchs Ferdinand and Isabella.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/1920px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg'
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
    year: '1155',
    description: `This famous castle is said to be the inspiration for Cinderella's castle. It was orginially built as a military fortress, but also served as a royal palace and prison over the years.`,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Segovia_-_Alc%C3%A1zar_de_Segovia_22_2017-10-24.jpg/660px-Segovia_-_Alc%C3%A1zar_de_Segovia_22_2017-10-24.jpg'
  },
  {
    name: 'Sistine Chapel',
    location: `Vatican City`,
    year: '1483',
    description: `The Sistine Chapel is famous for its iconic frescos painted by artists such as Michelangelo. Today, it serves as a papal conclave where cardinals elect the next pope.`,
    img: 'https://theromanguy.com/wp-content/uploads/Sistine-Chapel.jpg'
  },
  {
    name: 'Angkor Wat',
    location: `Siem Reap, Cambodia`,
    year: '12th Century',
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
  {
    name: 'Eiffel Tower',
    location: `Paris, France`,
    year: '1889',
    description: `The Eiffel Tower is globally synonymous with Paris, France. It is named after its engineer Gustave Eiffel. He built it as an entrance to the 1889 World's Fair.`,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg'
  },
  {
    name: 'The Statue of Liberty',
    location: `New York City, USA`,
    year: '1886',
    description: 'The Statue of Liberty was a copper statue gifted to the United States by the people of France. The statue was built in France and shipped overseas to be built on Liberty Island.',
    img: 'https://cdn.mos.cms.futurecdn.net/XsbvTN6PRi6PZtgEGvRsiE.jpg'
  },
  {
    name: 'Big Ben',
    location: `London, England`,
    year: '1859',
    description: `Originally named Clock Tower, the official name of this famous stricking clock was changed to Elizabeth Tower in 2012. The tower's design was done in the Gothic Revival style.`,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg/1200px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg'
  },
  {
    name: 'Sydney Opera House',
    location: `Sydney, Australia`,
    year: '1959',
    description: `The Sydney Opera House is a performing arts center for ballet and opera. Its structure is said to resemble shells. It is one of the most popular tourist attractions in Australia.`,
    img: 'https://www.sydneyoperahouse.com/content/dam/soh/digital/hero/1600x1067.jpg'
  },
  {
    name: 'Golden Gate Bridge',
    location: `San Francisco, California`,
    year: '1937',
    description: `At the time of its construction, The Golden Gate Bridge was both the longest and tallest suspension bridge in the world. It serves as a link between San Francisco and Marin County which could previously only be traversed by ferry.`,
    img: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1MTc3MjE0MzExMDgxNTQ1/topic-golden-gate-bridge-gettyimages-177770941.jpg'
  },
  {
    name: `Kōtoku-in`,
    location: `Kamakura, Japan`,
    year: '1252 AD',
    description: `Kōtoku-in is a famous Buddhist temple built in Japan. It is renowned for its bronze statue The Great Buddha of Kamakura. The statue is hollow and visitors can view the inside.`,
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/07/JP-kamakura-daibutsu-2.jpg'
  },
  {
    name: 'Mahadobhi Temple',
    location: `Bodhgaya, India`,
    year: '5th - 6th Century AD',
    description: `The first temple was built by Emperor Asoka in the 3rd centry BC. The temple has been destroyed and reconstructed many times over the years. This temple is a pilgrimage site for Hindus and Buddhists. It contains a descendant of the tree Buddha sat under to achieve Enlightenment. `,
    img: 'https://www.tourmyindia.com/heritage/images/mahabodhi-bodhgaya1.jpg'
  },
  {
    name: 'Mont-Saint-Michel',
    location: `Normandy, France`,
    year: '11th Century',
    description: 'Mont-Saint-Michel is a town surrounding an abbey built on a tidal island. The abbey itself receives over 1 million visitors a year. It was originally a defensible fortress that used the tides to its advantage.',
    img: 'https://static.toiimg.com/photo/msid-70828120,width-96,height-65.cms'
  },
  {
    name: 'Sultan Ahmed Mosque',
    location: `Istanbul, Turkey`,
    year: '1616',
    description: `Also known as the Blue Mosque, it contains Ahmed I's tomb. The mosque has five domes, six minarets, and eight secondary domes. The interior is lined with 20,000 handmade ceramic tiles.`,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/P1020390.JPG/1920px-P1020390.JPG'
  },
  {
    name: 'Plaza de Mayo',
    location: `Buenos Aires, Argentina`,
    year: '1884',
    description: `This famous city square contrains cultural icons such as the May Pyramid, Casa Rosada, and Buenos Aires Metropolitan Cathedral. It is a site of political significance and has served as the scene for historic events in Argentine history.`,
    img: 'https://static.toiimg.com/photo/44859937/.jpg'
  },
  {
    name: 'Neuschwanstein Castle',
    location: `Bavaria, Germany`,
    year: '1886',
    description: `The castle was intended as a home for King Ludwig II before he died. Due to its secluded location, it survived much of the destruction that Germany faced in World War II. `,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/1920px-Schloss_Neuschwanstein_2013.jpg'
  }
]

module.exports = newWonders
