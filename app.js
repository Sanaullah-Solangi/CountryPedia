var selectCountry = document.querySelector(".country");
var selectProvince = document.querySelector(".province");
selectCountry.innerHTML = `<option value="">SELECT COUNTRY</option>`;
selectProvince.innerHTML = `<option value="">SELECT PROVINCE</option>`;

var countries = {
  pakistan: {
    image: "./images/pakistan.webp",
    name: "Pakistan",
    capital: "Islamabad",
    officialLanguages: "Urdu, English",
    area: "881,640 sq km",
    continent: "Asia",
    borders: "India, China, Afghanistan, Iran",
    majorCities: "Karachi, Lahore, Islamabad, Faisalabad",
    majorRivers: "Indus, Jhelum, Chenab, Ravi, Sutlej",
    majorMountains: "K2, Nanga Parbat",
    majorReligions: "Islam",
    currency: "Pakistani Rupee (PKR)",
    governmentType: "Federal Parliamentary Republic",
    traditionalClothing: "Shalwar Kameez",
    festivals: "Eid-ul-Fitr, Eid-ul-Adha, Pakistan Day, Independence Day",
    nationalSports: "Field Hockey (National sport), Cricket",
    famousLandmarks:
      "Badshahi Mosque, Lahore Fort, Minar-e-Pakistan, Faisal Mosque",
    sindh: {
      image: "./images/karachi.webp",
      name: "Sindh",
      capital: "Karachi",
      area: "140,914 sq km",
      majorCities: "Karachi, Hyderabad, Sukkur, Larkana",
      majorRivers: "Indus",
      majorMountains: "Kirthar Range",
      majorIndustries: "Textiles, Agriculture, Fisheries, Ports and Shipping",
      majorCrops: "Rice, Wheat, Sugarcane, Cotton",
      languages: "Sindhi, Urdu, Punjabi, Pashto",
      traditionalClothing: "Ajrak, Sindhi Topi",
      festivals: "Sindh Cultural Day, Mela Chiraghan, Eid-ul-Fitr, Eid-ul-Adha",
      famousLandmarks: "Mohatta Palace, Makli Necropolis, Shah Jahan Mosque",
    },
    punjab: {
      image: "./images/punjab.webp",
      name: "Punjab",
      capital: "Lahore",
      area: "205,344 sq km",
      majorCities: "Lahore, Faisalabad, Rawalpindi, Multan",
      majorRivers: "Indus, Jhelum, Chenab, Ravi, Sutlej",
      majorMountains: "Salt Range",
      majorIndustries: "Textiles, Agriculture, Manufacturing, Services",
      majorCrops: "Wheat, Rice, Sugarcane, Cotton",
      languages: "Punjabi, Urdu, Saraiki, Pashto",
      traditionalClothing: "Shalwar Kameez, Pagri",
      festivals: "Basant, Eid-ul-Fitr, Eid-ul-Adha, Mela Chiraghan",
      famousLandmarks: "Badshahi Mosque, Lahore Fort, Minar-e-Pakistan",
    },
    kpk: {
      image: "./images/kpk.webp",
      name: "Khyber Pakhtunkhwa",
      capital: "Peshawar",
      area: "101,741 sq km",
      majorCities: "Peshawar, Mardan, Mingora, Abbottabad",
      majorRivers: "Kabul, Swat, Kunar",
      majorMountains: "Hindu Kush, Karakoram",
      majorIndustries: "Agriculture, Tourism, Mining, Manufacturing",
      majorCrops: "Wheat, Maize, Tobacco, Rice",
      languages: "Pashto, Urdu, Hindko",
      traditionalClothing: "Shalwar Kameez, Chitrali Cap",
      festivals: "Nowruz, Eid-ul-Fitr, Eid-ul-Adha, Jashn-e-Chitral",
      famousLandmarks: "Bala Hisar Fort, Swat Valley, Khyber Pass",
    },
    balochistan: {
      image: "./images/balochistan.jpg",
      name: "Balochistan",
      capital: "Quetta",
      area: "347,190 sq km",
      majorCities: "Quetta, Gwadar, Turbat, Khuzdar",
      majorRivers: "Dasht, Hingol",
      majorMountains: "Sulaiman Range, Kirthar Range",
      majorIndustries: "Mining, Agriculture, Fishing, Livestock",
      majorCrops: "Wheat, Barley, Cotton, Fruits",
      languages: "Balochi, Pashto, Brahui, Sindhi",
      traditionalClothing: "Balochi Dress",
      festivals: "Sibi Mela, Eid-ul-Fitr, Eid-ul-Adha, Baloch Culture Day",
      famousLandmarks:
        "Hingol National Park, Quaid-e-Azam Residency, Gwadar Port",
    },
  },
  india: {
    image: "./images/india.webp",
    name: "India",
    capital: "New Delhi",
    officialLanguages: "Hindi, English",
    area: "3,287,263 sq km",
    continent: "Asia",
    borders: "Pakistan, China, Nepal, Bhutan, Bangladesh, Myanmar",
    majorCities: "Mumbai, New Delhi, Bangalore, Chennai",
    majorRivers: "Ganges, Yamuna, Brahmaputra",
    majorMountains: "Himalayas",
    majorReligions: "Hinduism, Islam, Christianity, Sikhism",
    currency: "Indian Rupee (INR)",
    governmentType: "Federal Parliamentary Republic",
    traditionalClothing: "Sari, Dhoti, Kurta",
    festivals: "Diwali, Holi, Eid-ul-Fitr, Christmas",
    nationalSports: "Field Hockey (National sport), Cricket",
    famousLandmarks: "Taj Mahal, Red Fort, Qutub Minar, India Gate",
    maharashtra: {
      image: "./images/maharashtra.jpg",
      name: "Maharashtra",
      capital: "Mumbai",
      area: "307,713 sq km",
      majorCities: "Mumbai, Pune, Nagpur, Nashik",
      rivers: "Godavari, Krishna",
      majorMountains: "Western Ghats",
      majorIndustries: "Textiles, Manufacturing, IT, Film",
      majorCrops: "Sugarcane, Cotton, Soybean, Groundnut",
      languages: "Marathi, Hindi, English",
      traditionalClothing: "Nauvari Saree, Dhoti",
      festivals: "Ganesh Chaturthi, Diwali, Holi, Eid-ul-Fitr",
    },
    tamilNadu: {
      image: "./images/tamil.jpg",
      name: "Tamil Nadu",
      capital: "Chennai",
      area: "130,058 sq km",
      majorCities: "Chennai, Coimbatore, Madurai, Tiruchirappalli",
      rivers: "Kaveri, Vaigai",
      majorMountains: "Nilgiri Hills",
      majorIndustries: "Automotive, Textile, IT",
      majorCrops: "Rice, Sugarcane, Cotton, Groundnut",
      languages: "Tamil, English",
      traditionalClothing: "Sari, Veshti",
      festivals: "Pongal, Diwali, Tamil New Year",
    },
    uttarPradesh: {
      image: "./images/uttaPardeshjpg.jpg",
      name: "Uttar Pradesh",
      capital: "Lucknow",
      area: "243,286 sq km",
      majorCities: "Lucknow, Kanpur, Ghaziabad, Agra",
      rivers: "Ganges, Yamuna",
      majorMountains: "Shivalik Hills",
      majorIndustries: "Agriculture, Textiles, IT",
      majorCrops: "Wheat, Rice, Sugarcane",
      languages: "Hindi, Urdu, English",
      traditionalClothing: "Kurta Pajama, Sari",
      festivals: "Diwali, Holi, Eid-ul-Fitr, Dussehra",
    },
    kerala: {
      image: "./images/kerala.jpg",
      name: "Kerala",
      capital: "Thiruvananthapuram",
      area: "38,863 sq km",
      majorCities: "Thiruvananthapuram, Kochi, Kozhikode",
      rivers: "Periyar, Bharathapuzha",
      majorMountains: "Western Ghats",
      majorIndustries: "Tourism, Spices, IT",
      majorCrops: "Coconut, Tea, Coffee, Rubber",
      languages: "Malayalam, English",
      traditionalClothing: "Mundu, Sari",
      festivals: "Onam, Vishu, Diwali, Christmas",
    },
  },
  china: {
    image: "./images/china.webp",
    name: "China",
    capital: "Beijing",
    officialLanguages: "Mandarin",
    area: "9,596,961 sq km",
    continent: "Asia",
    borders:
      "India, Russia, Mongolia, Pakistan, Kazakhstan, North Korea, Kyrgyzstan, Tajikistan, Afghanistan, Vietnam, Laos, Myanmar, Bhutan, Nepal",
    majorCities: "Shanghai, Beijing, Shenzhen, Guangzhou",
    majorRivers: "Yangtze, Yellow River",
    majorMountains: "Himalayas",
    majorReligions: "Buddhism, Taoism, Islam, Christianity",
    currency: "Renminbi (CNY)",
    governmentType: "Communist State",
    traditionalClothing: "Hanfu, Cheongsam",
    festivals: "Chinese New Year, Mid-Autumn Festival, Dragon Boat Festival",
    nationalSports: "Table Tennis (National sport), Badminton",
    famousLandmarks:
      "Great Wall of China, Forbidden City, Terracotta Army, Summer Palace",
    guangdong: {
      image: "./images/guangdong.jpg",
      name: "Guangdong",
      capital: "Guangzhou",
      area: "179,800 sq km",
      majorCities: "Guangzhou, Shenzhen, Dongguan",
      rivers: "Pearl River",
      majorMountains: "Nanling Mountains",
      majorIndustries: "Manufacturing, Electronics, Textiles",
      majorCrops: "Rice, Sugarcane, Fruits",
      languages: "Cantonese, Mandarin",
      traditionalClothing: "Hanfu, Cheongsam",
      festivals: "Chinese New Year, Dragon Boat Festival",
    },
    sichuan: {
      image: "./images/sichuan.jpg",
      name: "Sichuan",
      capital: "Chengdu",
      area: "485,000 sq km",
      majorCities: "Chengdu, Zigong, Leshan",
      rivers: "Yangtze",
      majorMountains: "Daxue Mountains",
      majorIndustries: "Agriculture, Electronics, Machinery",
      majorCrops: "Rice, Wheat, Corn",
      languages: "Sichuanese, Mandarin",
      traditionalClothing: "Hanfu, Cheongsam",
      festivals: "Sichuan Lantern Festival, Chinese New Year",
    },
    shandong: {
      image: "./images/shandong.jpg",
      name: "Shandong",
      capital: "Jinan",
      area: "157,900 sq km",
      majorCities: "Jinan, Qingdao, Yantai",
      rivers: "Yellow River",
      majorMountains: "Mount Tai",
      majorIndustries: "Agriculture, Manufacturing, Fishing",
      majorCrops: "Wheat, Corn, Cotton",
      languages: "Mandarin",
      traditionalClothing: "Hanfu, Cheongsam",
      festivals: "Chinese New Year, Mid-Autumn Festival",
    },
    zhejiang: {
      image: "./images/zhejiang.jpg",
      name: "Zhejiang",
      capital: "Hangzhou",
      area: "101,800 sq km",
      majorCities: "Hangzhou, Ningbo, Wenzhou",
      rivers: "Qiantang River",
      majorMountains: "Mount Huang",
      majorIndustries: "Textiles, Electronics, Manufacturing",
      majorCrops: "Rice, Tea, Silk",
      languages: "Wu Chinese, Mandarin",
      traditionalClothing: "Hanfu, Cheongsam",
      festivals: "Dragon Boat Festival, Mid-Autumn Festival",
    },
  },
  Afghanistan: {
    image: "./images/Afghanistan.jpg",
    name: "Afghanistan",
    capital: "Kabul",
    officialLanguages: "Pashto, Dari",
    area: "652,230 sq km",
    continent: "Asia",
    borders: "Pakistan, Iran, Turkmenistan, Uzbekistan, Tajikistan, China",
    majorCities: "Kabul, Kandahar, Herat, Mazar-i-Sharif",
    majorRivers: "Amu Darya, Kabul River",
    majorMountains: "Hindu Kush",
    majorReligions: "Islam",
    currency: "Afghani (AFN)",
    governmentType: "Islamic Republic",
    traditionalClothing: "Perahan tunban, Chapan",
    festivals: "Eid-ul-Fitr, Eid-ul-Adha, Nowruz",
    nationalSports: "Buzkashi (National sport), Cricket",
    famousLandmarks: "Band-e Amir, Minaret of Jam, Blue Mosque",
    kabul: {
      image: "./images/kabul.jpg",
      name: "Kabul",
      capital: "Kabul",
      area: "4,462 sq km",
      majorCities: "Kabul",
      rivers: "Kabul River",
      majorMountains: "Hindu Kush",
      majorIndustries: "Agriculture, Manufacturing",
      majorCrops: "Wheat, Barley, Fruits",
      languages: "Pashto, Dari",
      traditionalClothing: "Perahan tunban, Chapan",
      festivals: "Eid-ul-Fitr, Eid-ul-Adha",
    },
    kandahar: {
      image: "./images/kandahar.jpg",
      name: "Kandahar",
      capital: "Kandahar",
      area: "54,022 sq km",
      majorCities: "Kandahar",
      rivers: "Arghandab River",
      majorMountains: "Hindu Kush",
      majorIndustries: "Agriculture, Trade",
      majorCrops: "Wheat, Fruits",
      languages: "Pashto, Dari",
      traditionalClothing: "Perahan tunban, Chapan",
      festivals: "Eid-ul-Fitr, Eid-ul-Adha",
    },
    herat: {
      image: "./images/herat.jpg",
      name: "Herat",
      capital: "Herat",
      area: "54,778 sq km",
      majorCities: "Herat",
      rivers: "Hari River",
      majorMountains: "Safed Koh",
      majorIndustries: "Agriculture, Trade",
      majorCrops: "Wheat, Barley, Fruits",
      languages: "Dari, Pashto",
      traditionalClothing: "Perahan tunban, Chapan",
      festivals: "Eid-ul-Fitr, Eid-ul-Adha",
    },
    balkh: {
      image: "./images/balkh.jpg",
      name: "Balkh",
      capital: "Mazar-i-Sharif",
      area: "16,840 sq km",
      majorCities: "Mazar-i-Sharif",
      rivers: "Balkh River",
      majorMountains: "Hindu Kush",
      majorIndustries: "Agriculture, Trade",
      majorCrops: "Wheat, Barley, Fruits",
      languages: "Dari, Pashto",
      traditionalClothing: "Perahan tunban, Chapan",
      festivals: "Eid-ul-Fitr, Eid-ul-Adha",
    },
  },
  Iran: {
    image: "./images/Iran.jpg",
    name: "Iran",
    capital: "Tehran",
    officialLanguages: "Persian",
    area: "1,648,195 sq km",
    continent: "Asia",
    borders:
      "Pakistan, Afghanistan, Turkmenistan, Azerbaijan, Armenia, Turkey, Iraq",
    majorCities: "Tehran, Mashhad, Isfahan, Karaj",
    majorRivers: "Karun, Zayandeh River",
    majorMountains: "Zagros, Alborz",
    majorReligions: "Islam",
    currency: "Iranian Rial (IRR)",
    governmentType: "Islamic Republic",
    traditionalClothing: "Chador, Persian Dress",
    festivals: "Nowruz, Eid-ul-Fitr, Eid-ul-Adha",
    nationalSports: "Wrestling (National sport), Soccer",
    famousLandmarks: "Persepolis, Azadi Tower, Naqsh-e Jahan Square",
    tehran: {
      image: "./images/tehran.jpg",
      name: "Tehran",
      capital: "Tehran",
      area: "18,814 sq km",
      majorCities: "Tehran",
      rivers: "Karaj River",
      majorMountains: "Alborz",
      majorIndustries: "Manufacturing, Services",
      majorCrops: "Wheat, Barley",
      languages: "Persian",
      traditionalClothing: "Chador, Persian Dress",
      festivals: "Nowruz, Eid-ul-Fitr",
    },
    fars: {
      image: "./images/fars.jpg",
      name: "Fars",
      capital: "Shiraz",
      area: "122,608 sq km",
      majorCities: "Shiraz",
      rivers: "Kor River",
      majorMountains: "Zagros",
      majorIndustries: "Agriculture, Manufacturing",
      majorCrops: "Wheat, Barley, Fruits",
      languages: "Persian",
      traditionalClothing: "Chador, Persian Dress",
      festivals: "Nowruz, Eid-ul-Fitr",
    },
    khorasan: {
      image: "./images/khorasan.jpg",
      name: "Khorasan",
      capital: "Mashhad",
      area: "151,193 sq km",
      majorCities: "Mashhad",
      rivers: "Atrak River",
      majorMountains: "Kopet Dag",
      majorIndustries: "Agriculture, Trade",
      majorCrops: "Wheat, Barley, Fruits",
      languages: "Persian",
      traditionalClothing: "Chador, Persian Dress",
      festivals: "Nowruz, Eid-ul-Fitr",
    },
    mazandaran: {
      image: "./images/mazandaran.jpg",
      name: "Mazandaran",
      capital: "Sari",
      area: "23,842 sq km",
      majorCities: "Sari, Babol, Amol",
      rivers: "Tajan River",
      majorMountains: "Alborz",
      majorIndustries: "Agriculture, Fishing",
      majorCrops: "Rice, Fruits",
      languages: "Persian",
      traditionalClothing: "Chador, Persian Dress",
      festivals: "Nowruz, Eid-ul-Fitr",
    },
  },
  UnitedStates: {
    image: "./images/UnitedStates.jpg",
    name: "United States",
    capital: "Washington, D.C.",
    officialLanguages: "English",
    area: "9,833,520 sq km",
    continent: "North America",
    borders: "Canada, Mexico",
    majorCities: "New York City, Los Angeles, Chicago, Houston",
    majorRivers: "Mississippi, Missouri, Colorado",
    majorMountains: "Rocky Mountains, Appalachian Mountains",
    majorReligions: "Christianity, Judaism, Islam, Buddhism",
    currency: "United States Dollar (USD)",
    governmentType: "Federal Presidential Constitutional Republic",
    traditionalClothing: "Jeans, T-shirts",
    festivals: "Thanksgiving, Christmas, Independence Day",
    nationalSports: "Baseball (National sport), American Football",
    famousLandmarks: "Statue of Liberty, Grand Canyon, Mount Rushmore",
    california: {
      image: "./images/california.jpg",
      name: "California",
      capital: "Sacramento",
      area: "423,970 sq km",
      majorCities: "Los Angeles, San Francisco, San Diego",
      rivers: "Sacramento River",
      majorMountains: "Sierra Nevada",
      majorIndustries: "Entertainment, Technology, Agriculture",
      majorCrops: "Grapes, Almonds, Lettuce",
      languages: "English, Spanish",
      traditionalClothing: "Jeans, T-shirts",
      festivals: "Coachella, Thanksgiving, Christmas",
    },
    texas: {
      image: "./images/texas.jpg",
      name: "Texas",
      capital: "Austin",
      area: "695,662 sq km",
      majorCities: "Houston, San Antonio, Dallas",
      rivers: "Rio Grande",
      majorMountains: "Guadalupe Mountains",
      majorIndustries: "Oil, Agriculture, Technology",
      majorCrops: "Cotton, Corn, Wheat",
      languages: "English, Spanish",
      traditionalClothing: "Cowboy Hats, Boots",
      festivals: "South by Southwest, Thanksgiving, Christmas",
    },
    florida: {
      image: "./images/florida.jpg",
      name: "Florida",
      capital: "Tallahassee",
      area: "170,312 sq km",
      majorCities: "Miami, Orlando, Tampa",
      rivers: "St. Johns River",
      majorMountains: "Doesn't Have",
      majorIndustries: "Tourism, Agriculture, Aerospace",
      majorCrops: "Oranges, Sugarcane, Tomatoes",
      languages: "English, Spanish",
      traditionalClothing: "Casual Beachwear",
      festivals: "Miami Carnival, Thanksgiving, Christmas",
    },
    newYork: {
      image: "./images/newYork.jpg",
      name: "New York",
      capital: "Albany",
      area: "141,300 sq km",
      majorCities: "New York City, Buffalo, Rochester",
      rivers: "Hudson River",
      majorMountains: "Adirondack Mountains",
      majorIndustries: "Finance, Media, Manufacturing",
      majorCrops: "Apples, Grapes, Corn",
      languages: "English, Spanish",
      traditionalClothing: "Business Attire, Casual Wear",
      festivals: "New Year's Eve in Times Square, Thanksgiving, Christmas",
    },
  },
  Turkey: {
    image: "./images/Turkey.jpg",
    name: "Turkey",
    capital: "Ankara",
    officialLanguages: "Turkish",
    area: "783,356 sq km",
    continent: "Europe, Asia",
    borders:
      "Greece, Bulgaria, Georgia, Armenia, Azerbaijan, Iran, Iraq, Syria",
    majorCities: "Istanbul, Ankara, Izmir, Bursa",
    majorRivers: "Euphrates, Tigris, Kızılırmak",
    majorMountains: "Mount Ararat, Taurus Mountains",
    majorReligions: "Islam",
    currency: "Turkish Lira (TRY)",
    governmentType: "Presidential Republic",
    traditionalClothing: "Kaftan, Şalvar",
    festivals: "Ramadan, Eid-ul-Fitr, Eid-ul-Adha",
    nationalSports: "Oil Wrestling (National sport), Soccer",
    famousLandmarks: "Hagia Sophia, Blue Mosque, Topkapi Palace",
    istanbul: {
      image: "./images/istanbul.jpg",

      name: "Istanbul",
      capital: "Doesn't Have",
      area: "5,343 sq km",
      majorCities: "Istanbul",
      rivers: "Bosporus",
      majorMountains: "Doesn't Have",
      majorIndustries: "Tourism, Trade",
      majorCrops: "Vegetables, Fruits",
      languages: "Turkish",
      traditionalClothing: "Kaftan, Şalvar",
      festivals: "Ramadan, Eid-ul-Fitr",
    },
    ankara: {
      image: "./images/ankara.jpg",

      name: "Ankara",
      capital: "Ankara",
      area: "25,706 sq km",
      majorCities: "Ankara",
      rivers: "Kızılırmak",
      majorMountains: "Elmadag",
      majorIndustries: "Government, Manufacturing",
      majorCrops: "Wheat, Barley",
      languages: "Turkish",
      traditionalClothing: "Kaftan, Şalvar",
      festivals: "Ramadan, Eid-ul-Fitr",
    },
    izmir: {
      image: "./images/izmir.jpg",
      name: "Izmir",
      capital: "Izmir",
      area: "12,007 sq km",
      majorCities: "Izmir",
      rivers: "Gediz River",
      majorMountains: "Bozdağ",
      majorIndustries: "Agriculture, Manufacturing",
      majorCrops: "Olives, Grapes",
      languages: "Turkish",
      traditionalClothing: "Kaftan, Şalvar",
      festivals: "Ramadan, Eid-ul-Fitr",
    },
    antalya: {
      image: "./images/antalya.jpg",
      name: "Antalya",
      capital: "Antalya",
      area: "20,177 sq km",
      majorCities: "Antalya",
      rivers: "Aksu River",
      majorMountains: "Taurus Mountains",
      majorIndustries: "Tourism, Agriculture",
      majorCrops: "Citrus Fruits, Cotton",
      languages: "Turkish",
      traditionalClothing: "Kaftan, Şalvar",
      festivals: "Ramadan, Eid-ul-Fitr",
    },
  },
  Brazil: {
    image: "./images/Brazil.jpg",
    name: "Brazil",
    capital: "Brasília",
    officialLanguages: "Portuguese",
    area: "8,515,767 sq km",
    continent: "South America",
    borders:
      "Argentina, Bolivia, Colombia, Guyana, Paraguay, Peru, Suriname, Uruguay, Venezuela",
    majorCities: "São Paulo, Rio de Janeiro, Brasília, Salvador",
    majorRivers: "Amazon, Paraná, São Francisco",
    majorMountains: "Serra do Mar, Serra da Mantiqueira",
    majorReligions: "Christianity",
    currency: "Brazilian Real (BRL)",
    governmentType: "Federal Presidential Republic",
    traditionalClothing: "Carnival Costumes, Gaucho",
    festivals: "Carnival, Festa Junina, Christmas",
    nationalSports: "Soccer (National sport), Volleyball",
    famousLandmarks: "Christ the Redeemer, Sugarloaf Mountain, Iguazu Falls",
    saoPaulo: {
      image: "./images/saoPaulo.jpg",
      name: "São Paulo",
      capital: "São Paulo",
      area: "248,222 sq km",
      majorCities: "São Paulo, Campinas, Santos",
      rivers: "Tietê River",
      majorMountains: "Serra do Mar",
      majorIndustries: "Manufacturing, Services",
      majorCrops: "Sugarcane, Coffee",
      languages: "Portuguese",
      traditionalClothing: "Gaucho",
      festivals: "Carnival, Festa Junina",
    },
    rioDeJaneiro: {
      image: "./images/rioDeJaneiro.jpg",
      name: "Rio de Janeiro",
      capital: "Rio de Janeiro",
      area: "43,696 sq km",
      majorCities: "Rio de Janeiro, Niterói, Petrópolis",
      rivers: "Paraíba do Sul",
      majorMountains: "Sugarloaf Mountain",
      majorIndustries: "Tourism, Oil, Services",
      majorCrops: "Coffee, Sugarcane",
      languages: "Portuguese",
      traditionalClothing: "Carnival Costumes",
      festivals: "Carnival, Festa Junina",
    },
    minasGerais: {
      image: "./images/minasGerais.jpg",
      name: "Minas Gerais",
      capital: "Belo Horizonte",
      area: "586,528 sq km",
      majorCities: "Belo Horizonte, Uberlândia, Contagem",
      rivers: "São Francisco River",
      majorMountains: "Serra da Mantiqueira",
      majorIndustries: "Mining, Agriculture",
      majorCrops: "Coffee, Soybean",
      languages: "Portuguese",
      traditionalClothing: "Gaucho",
      festivals: "Carnival, Festa Junina",
    },
    bahia: {
      image: "./images/bahia.jpg",
      name: "Bahia",
      capital: "Salvador",
      area: "564,733 sq km",
      majorCities: "Salvador, Feira de Santana, Vitória da Conquista",
      rivers: "São Francisco River",
      majorMountains: "Chapada Diamantina",
      majorIndustries: "Agriculture, Tourism",
      majorCrops: "Cocoa, Coffee",
      languages: "Portuguese",
      traditionalClothing: "Carnival Costumes",
      festivals: "Carnival, Festa Junina",
    },
  },
  australia: {
    image: "./images/australia.jpg",
    name: "Australia",
    capital: "Canberra",
    officialLanguages: "English",
    area: "7,692,024 sq km",
    continent: "Australia",
    borders: "Doesn't Have",
    majorCities: "Sydney, Melbourne, Brisbane, Perth",
    majorRivers: "Murray, Darling, Murrumbidgee",
    majorMountains: "Great Dividing Range",
    majorReligions: "Christianity, Islam, Buddhism, Hinduism",
    currency: "Australian Dollar (AUD)",
    governmentType: "Federal Parliamentary Constitutional Monarchy",
    traditionalClothing: "Akubra Hat, Driza-Bone",
    festivals: "Australia Day, ANZAC Day, Christmas",
    nationalSports: "Cricket (National sport), Australian Rules Football",
    famousLandmarks: "Sydney Opera House, Great Barrier Reef, Uluru",
    newSouthWales: {
      image: "./images/newSouthWales.webp",
      name: "New South Wales",
      capital: "Sydney",
      area: "809,444 sq km",
      majorCities: "Sydney, Newcastle, Wollongong",
      rivers: "Murray River",
      majorMountains: "Great Dividing Range",
      majorIndustries: "Services, Manufacturing",
      majorCrops: "Wheat, Barley",
      languages: "English",
      traditionalClothing: "Akubra Hat, Driza-Bone",
      festivals: "Australia Day, ANZAC Day",
    },
    victoria: {
      image: "./images/victoria.jpg",
      name: "Victoria",
      capital: "Melbourne",
      area: "237,629 sq km",
      majorCities: "Melbourne, Geelong, Ballarat",
      rivers: "Murray River",
      majorMountains: "Great Dividing Range",
      majorIndustries: "Services, Manufacturing",
      majorCrops: "Wheat, Barley",
      languages: "English",
      traditionalClothing: "Akubra Hat, Driza-Bone",
      festivals: "Australia Day, ANZAC Day",
    },
    queensland: {
      image: "./images/queensland.jpg",
      name: "Queensland",
      capital: "Brisbane",
      area: "1,852,642 sq km",
      majorCities: "Brisbane, Gold Coast, Cairns",
      rivers: "Brisbane River",
      majorMountains: "Great Dividing Range",
      majorIndustries: "Mining, Agriculture",
      majorCrops: "Sugarcane, Wheat",
      languages: "English",
      traditionalClothing: "Akubra Hat, Driza-Bone",
      festivals: "Australia Day, ANZAC Day",
    },
    westernAustralia: {
      image: "./images/westernAustralia.jpg",
      name: "Western Australia",
      capital: "Perth",
      area: "2,529,875 sq km",
      majorCities: "Perth, Fremantle, Bunbury",
      rivers: "Swan River",
      majorMountains: "Darling Range",
      majorIndustries: "Mining, Agriculture",
      majorCrops: "Wheat, Barley",
      languages: "English",
      traditionalClothing: "Akubra Hat, Driza-Bone",
      festivals: "Australia Day, ANZAC Day",
    },
  },
};

for (var country in countries) {
  selectCountry.innerHTML += `
   <option value="${country}">${country.toUpperCase()}</option>`;
}
function changeCountry() {
  selectProvince.innerHTML = "";
  selectProvince.innerHTML = `<option value="">SELECT PROVINCE</option>`;
  var selectedCountry = selectCountry.value;
  for (var province in countries[selectedCountry]) {
    if (typeof countries[selectedCountry][province] === "object") {
      selectProvince.innerHTML += `<option value="${province}">${province.toUpperCase()}</option>`;
    }
  }
}

function filterDetailts() {
  var selectedCountry = selectCountry.value;
  var selectedProvince = selectProvince.value;
  var displayContainer = document.querySelector(".displayContainer");
  if (selectedCountry && selectedProvince) {
    displayContainer.innerHTML = `
  <div class="detailsCard grid grid-two-cols" style="height:100%;">
  <div class="cardImg w-100" style="height:100% !important;">
      <img
        class="w-100 h-100"
        src="${countries[selectedCountry][selectedProvince].image}"
        alt="karahi wallpaper"
      />
    </div>
  <div class="cardContent">
    <h1 class="provinceName txt-center">${
      countries[selectedCountry][selectedProvince].name || "Doesn't Have"
    } </h1>
    <h2 class="capital txt-center">Capital:${
      countries[selectedCountry][selectedProvince].capital || "Doesn't Have"
    } </h2>
    <p class="area"><strong>Area:</strong>${
      countries[selectedCountry][selectedProvince].area || "Doesn't Have"
    } </p>
    <p class="majorCities"><strong>Major Cities:</strong>${
      countries[selectedCountry][selectedProvince].majorCities || "Doesn't Have"
    } </p>
    <p class="majorRivers"><strong>Major Rivers:</strong>${
      countries[selectedCountry][selectedProvince].majorRivers || "Doesn't Have"
    } </p>
    <p class="majorMountains"><strong>Major Mountains:</strong>${
      countries[selectedCountry][selectedProvince].majorMountains ||
      "Doesn't Have"
    } </p>
    <p class="majorIndustries"><strong>Major Industries:</strong>${
      countries[selectedCountry][selectedProvince].majorIndustries ||
      "Doesn't Have"
    } </p>
    <p class="majorCrops"><strong>Major Crops:</strong>${
      countries[selectedCountry][selectedProvince].majorCrops || "Doesn't Have"
    } </p>
    <p class="languages"><strong>Languages:</strong>${
      countries[selectedCountry][selectedProvince].languages || "Doesn't Have"
    } </p>
    <p class="traditionalClothing"><strong>Traditional Clothing:</strong>${
      countries[selectedCountry][selectedProvince].traditionalClothing ||
      "Doesn't Have"
    } </p>
    <p class="festivals"><strong>Festivals:</strong>${
      countries[selectedCountry][selectedProvince].festivals || "Doesn't Have"
    } </p>
    <p class="famousLandmarks"><strong>Famous Landmarks:</strong>${
      countries[selectedCountry][selectedProvince].famousLandmarks ||
      "Doesn't Have"
    } </p>
</div>
</div>
`;
  } else if (selectedCountry && !selectedProvince) {
    for (var details in countries[selectedCountry]) {
      if (typeof countries[selectedCountry][details] != "object") {
        displayContainer.innerHTML = `
        <div class="detailsCard grid grid-two-cols" style="flex:1 1 100%; height:100%">
        <div class="cardImg w-100" style="height:100% !important;">
            <img
              class="w-100 h-100"
              src="${countries[selectedCountry].image}"
              alt="karahi wallpaper"
            />
          </div>
        <div class="cardContent d-flex dir-col jc-start">
    <h1 class="countryName txt-center">${countries[selectedCountry].name}</h1>
    <h2 class="capital txt-center">Capital: ${countries[selectedCountry].capital}</h2>
    <p class="area"><strong>Area:</strong> ${countries[selectedCountry].area}</p>
    <p class="continent"><strong>Continent:</strong> ${countries[selectedCountry].continent}</p>
    <p class="borders"><strong>Borders:</strong> ${countries[selectedCountry].borders}</p>
    <p class="majorCities"><strong>Major Cities:</strong> ${countries[selectedCountry].majorCities}</p>
    <p class="majorRivers"><strong>Major Rivers:</strong> ${countries[selectedCountry].majorRivers}</p>
    <p class="majorMountains"><strong>Major Mountains:</strong> ${countries[selectedCountry].majorMountains}</p>
    <p class="majorReligions"><strong>Major Religions:</strong> ${countries[selectedCountry].majorReligions}</p>
    <p class="currency"><strong>Currency:</strong> ${countries[selectedCountry].currency}</p>
    <p class="governmentType"><strong>Government Type:</strong> ${countries[selectedCountry].governmentType}</p>
    <p class="traditionalClothing"><strong>Traditional Clothing:</strong> ${countries[selectedCountry].traditionalClothing}</p>
    <p class="festivals"><strong>Festivals:</strong> ${countries[selectedCountry].festivals}</p>
    <p class="nationalSports"><strong>National Sports:</strong> ${countries[selectedCountry].nationalSports}</p>
    <p class="famousLandmarks"><strong>Famous Landmarks:</strong> ${countries[selectedCountry].famousLandmarks}</p>

      </div>
      </div>
      `;
      }
      if (typeof countries[selectedCountry][details] == "object") {
        displayContainer.innerHTML += `
        <div class="detailsCard grid" style="height:100%;">
        <div class="cardImg w-100 h-100">
            <img
              class="w-100 h-100"
              src="${countries[selectedCountry][details].image}"
              alt="karahi wallpaper"
            />
          </div>
        <div class="cardContent">
          <h1 class="provinceName txt-center">${
            countries[selectedCountry][details].name || "Doesn't Have"
          } </h1>
          <h2 class="capital txt-center">Capital:${
            countries[selectedCountry][details].capital || "Doesn't Have"
          } </h2>
          <p class="area"><strong>Area:</strong>${
            countries[selectedCountry][details].area || "Doesn't Have"
          } </p>
          <p class="majorCities"><strong>Major Cities:</strong>${
            countries[selectedCountry][details].majorCities || "Doesn't Have"
          } </p>
          <p class="majorRivers"><strong>Major Rivers:</strong>${
            countries[selectedCountry][details].majorRivers || "Doesn't Have"
          } </p>
          <p class="majorMountains"><strong>Major Mountains:</strong>${
            countries[selectedCountry][details].majorMountains || "Doesn't Have"
          } </p>
          <p class="majorIndustries"><strong>Major Industries:</strong>${
            countries[selectedCountry][details].majorIndustries ||
            "Doesn't Have"
          } </p>
          <p class="majorCrops"><strong>Major Crops:</strong>${
            countries[selectedCountry][details].majorCrops || "Doesn't Have"
          } </p>
          <p class="languages"><strong>Languages:</strong>${
            countries[selectedCountry][details].languages || "Doesn't Have"
          } </p>
          <p class="traditionalClothing"><strong>Traditional Clothing:</strong>${
            countries[selectedCountry][details].traditionalClothing ||
            "Doesn't Have"
          } </p>
          <p class="festivals"><strong>Festivals:</strong>${
            countries[selectedCountry][details].festivals || "Doesn't Have"
          } </p>
          <p class="famousLandmarks"><strong>Famous Landmarks:</strong>${
            countries[selectedCountry][details].famousLandmarks ||
            "Doesn't Have"
          } </p>
      </div>
      </div>
      `;
      }
    }
  } else {
    Swal.fire({
      title: "Please!",
      text: "At Least Select A Country!",
      icon: "warning",
    });
  }
}
