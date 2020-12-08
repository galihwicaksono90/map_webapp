import mangliIcon from "./img/dieng/mangli.png";
import kaliangetIcon from "./img/dieng/kalianget.png";
import sendangsariIcon from "./img/dieng/sendangsari.png";
import lengkongIcon from "./img/dieng/lengkong.png";
import kejajarIcon from "./img/dieng/tambiKejajar.png";
import bukitCintaIcon from "./img/dieng/bukitCinta.png";
import serojaIcon from "./img/dieng/puncakSeroja.png";
import dptIcon from "./img/dieng/dpt.png";
import sikunirIcon from "./img/dieng/sikunir.png";
import patakBantengIcon from "./img/dieng/patakBanteng.png";
import menjerIcon from "./img/dieng/telagaMenjer.png";
import campursariIcon from "./img/dieng/campursari.png";
import gunungPrauIcon from "./img/dieng/gunungPrau.png";
import curugSikarimIcon from "./img/dieng/curugSikarim.png";
import candiDiengIcon from "./img/dieng/candiDieng.png";
import diengMap from "./img/dieng/map_empty.png";

const diengStore = {
  name: "dieng",
  mapImage: diengMap,
  attractions: {
    mangli: {
      name: "Gelanggang Renang Mangli",
      name_short: "mangli",
      description: {
        en:
          "This swimming pool was presented by aqua, a famous mineral water   factories as a gift and tribute to the people of wonosobo.  This arena has a national standard size and can be used to held  swimming competition.",
        in:
          "Gelanggang Renang Mangli merupakan pemandian alam dengan air yang melimpah ruah dan sangat jernih. Kata Mangli sendiri berasal dari kata “ Semang “ dan “ Ngili “  yang diambil dari kalimat “ Arep Adus bae semang Ngili “ ( Mau mandi saja harus kelembah mata air ) yang diucapkan dengan sendau gurau oleh Ki Tunteng ( tokoh yang sangat disegani pada masa itu). Mangli terletak di Kelurahan Kejiwan 1 km dari sebelah barat kota Wonosobo Gelanggang ini memiliki ukuran standar nasional dan bisa digunakan untuk per",
      },
      icon: {
        image: mangliIcon,
        position: {
          top: "73",
          left: "15",
        },
        scale: "1",
      },
      details: {
        address: "Jl Mangli 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "mangli@dieng.com",
        twitter: "@mangli-twitter",
        instagram: "@mangli-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "pool",
    },
    kalianget: {
      name: "Pemandian Air Panas Kalianget",
      name_short: "kalianget",
      description: {
        en:
          "Kalianget hot spring bath is located 3 km  north of Wonosobo city centre. This tourist attraction is a natural hot spring bath with high sulfur content wich can cure skin diseases. The concept of the swimming pool is resemble as that of Japanese hot springs. The facilities of this resort is include football fields, tennis courts, swimming pools, fisheries, and playgrounds",
        in:
          "Merupakan pemandian air panas alami. Komposi- si airnya mengandung sulphur (belerang) dalam kadar cukup tinggi yang berkhasiat menyembuhkan berbagai penyakit kulit. onsep kolamnya menyerupai taman kungkum nuansa sauna di Jepang. Tak hanya taman kungkum, pemandian Kalianget juga memiliki waterpark dengan air yang sangat jernih dan segar. Kawasan tersebut berada 3 km di sebelah utara kota Wonosobo dan dilengkapi berbagai fasilitas, seper- ti stadion sepak bola, lapangan tenis, kolam renang, ",
      },
      icon: {
        image: kaliangetIcon,
        position: {
          top: "70",
          left: "42",
        },
        scale: "1.3",
      },
      details: {
        address: "Jl Kalianget 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "Kalianget@dieng.com",
        twitter: "@Kalianget-twitter",
        instagram: "@Kalianget-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "bath",
    },
    sendangsari: {
      name: "Desa Wisata Sendangsari",
      name_short: "sendangsari",
      description: {
        en:
          "Sendangsari  village or known as dewi Sri village, is one of the tourism village located on Garung Dis- trict. The village on the west side of Sindoro Mountain has the charm of rural nature. Dewi sri Village also has a rich diversity in culture such as lengger dance, kuda lumping, lengger angklung, liong naga, bar- aongsai,and rudat (javanese martial art). It often visited by sudents to learn about farming (planting and  harvesting rice,). Here Tourists will also be over- whelmed with River tubing,  adventurous water games ",
        in:
          "Desa wisata sendangsari atau dikenal dengan nama Dewi Sri, adalah salah satu desa yang terletak di jalan dieng KM 7 Kecamatan Garung. Desa yang ter- letak di sebelah barat gunung sindoro memiliki pes- ona alam pedesaan. selain memiliki alam yang indah, dewi sri juga memiliki keanekaragaman budaya yang melimpah, antara lain, tari lengger, kuda lumping, lengger angklung, liong naga, barongsai, rudat(silat jawa). Dewi Sri juga memiliki wisata unggulan, yaitu wisata edukasi yang sering dikunjungi oleh siswa dari sekolah-sekolah dalam kota maupun luar kota untuk belajar bercocok tanam (tanam padi, panen, dan ta- nam selada air). Setelah itu, wisatawan dimanjakan dengan permainan air yaitu river tubing yang menelusri",
      },
      icon: {
        image: sendangsariIcon,
        position: {
          top: "78",
          left: "77",
        },
        scale: "1.5",
      },
      details: {
        address: "Jl Sendangsari 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "Sendangsari@dieng.com",
        twitter: "@Sendangsari-twitter",
        instagram: "@Sendangsari-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "river",
    },
    lengkong: {
      name: "Paralayang Lengkong",
      name_short: "lengkong",
      description: {
        en:
          "Tourist attraction  in Lengkong Tourist Village of Mojotengah District is paragliding. Every year there is a national paragliding competition held here. Visitors only have to pay 350,000 rupiah and a pro- fessional paraglider will  accompany you to fly. In ad- dition visitors can also see beautiful scenery and feel ",
        in:
          "Wisata minat khusus yang dikembangkan di Desa Wisata Lengkong Kecamatan Mojotengah memiliki potensi untuk kegiatan Paralayang. Pada bulan September biasa diselenggarakan Kejuaraan Paralayang dengan skala nasional yang digelar secara rutin setiap tahunnya. Wisata minat kusus ini banyak sekali peminatnya selain untuk menguji adrenalin wistawan juga menikmati pemandangan alam yang sangat indah dan udaranya sejuk di bukit Kekep desa Lengkong. Bagi andang yang ingin merasakan ter- bang di udara Wonosobo anda bisa membayar Rp 350.000,- untuk sekali terbang bersama atlit tandem ",
      },
      icon: {
        image: lengkongIcon,
        position: {
          top: "50",
          left: "86",
        },
        scale: "1",
      },
      details: {
        address: "Jl Lengkong 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "Lengkong@dieng.com",
        twitter: "@Lengkong-twitter",
        instagram: "@Lengkong-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "paragliding",
    },
    kejajar: {
      name: "Tambi Kejajar",
      name_short: "kejajar",
      description: {
        en:
          "The Sindoro foothills have a large tea platation at an altitude of 1200 meters to over 2000 meters above sea level. The air temperature of this area is about 15 to 24 degrees celcius. Tambi tourism is located on the tambi complex with tea plantation and tea factories, cottege tourism, as well as outward bound facilities.",
        in:
          "Terhampar luas di lereng Gunung Sindoro, dengan ketinggian lebih dari 1200-2000 m di atas  permu- kaan laut. Suhu udara antara 15-24 derajat celcius. Agro wisata Tambi terletak di perkebunan Tambi dengan kebun dan pabrik teh, pondok wisata, kolam pemancingan, lapangan tenis, taman bermain, serta sarana outward bound management. T he Sindoro foothills have a large tea platation at an altitude of 1200 meters to over 2000 meters above sea level. The air temperature of this area is about 15 to 24 degrees celcius. Tambi tourism is located on the tambi complex with tea plantation and tea factories, cottege tourism, as well as outward bound facilities.",
      },
      icon: {
        image: kejajarIcon,
        position: {
          top: "39",
          left: "84",
        },
        scale: "1.4",
      },
      details: {
        address: "Jl Kejajar 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "Kejajar@dieng.com",
        twitter: "@Kejajar-twitter",
        instagram: "@Kejajar-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "forest",
    },
    bukitCinta: {
      name: "Bukit Cinta Maron",
      name_short: "bukitCinta",
      description: {
        en:
          " The cinta hills of the Seroja Valley offer beautiful scenery. The Seroja Valley is located above Lake Menjer and has a very natural and beautiful view. Visi- tors can see the scenery of Menjer Lake from the top of the hill. The cinta hills of this Seroja Valley are located about 12 km from the city centre of Wonosobo. Visitors can take a selfie with the background Menjer Lake, Sindoro Mountain and Kembang Mountain. In this place there is a heart-shaped photo spot made of bamboo. Visitors also can set up tents near the cinta  ",
        in:
          " Bukit cinta lembah seroja menawarkan pemandangan yang indah. Bukit Seroja yang lokasinya berada tepat di atas Telaga Menjer, mempunyai pesona alam yang begitu luar biasa. Seperti di wisata Bukit Sikunir, wisatawan juga dapat melihat indahnya sunrise keluar di atas Telaga Menjer. Lokasi bukit cinta lembah se- roja ini tepatnya berada di Desa maron, Kecamatan, Garung, Kabupaten Wonosobo. dan hanya berjarak kurang lebih 12 km dari Wonosobo kota. Wisatawan dapat berfoto selfie dengan latar belakang telaga men- jer gunung sindoro serta gunung kembang. Terdapat juga spot berbentuk love yang dibangun diatas pohon. Tak  hanya menyediakan pemandangan alam yang tampak cantik, wisatawan juga bisa mendirikan  tenda / camping ground di sekitar puncak bukit cinta lembah seroja. Dengan begitu Anda bisa menikmati peman- dangan matahari tenggelam (sunset) atau indahnya  ",
      },
      icon: {
        image: bukitCintaIcon,
        position: {
          top: "43",
          left: "44",
        },
        scale: "0.7",
      },
      details: {
        address: "Jl  150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "@dieng.com",
        twitter: "@-twitter",
        instagram: "@-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "mountain",
    },
    seroja: {
      name: "Lembah Seroja",
      name_short: "seroja",
      description: {
        en:
          "The Seroja hills on the border of Maron and Tlogo villages, just above Lake Menjer. From the hills of Seroja, you can see the scenery of Menjer Lake, Sin- doro Mountain and Kembang Mountain. T he shade of trees and the green atmosphere allow visitors to rest their hearts, eyes and mind. If the weather is good, visitors can also see the scenery of Wonosobo County from the Soraja hills. Sunrise and sunset will be better to be seen from  the Seroja hills. ",
        in:
          "Lembah Seroja yang berlokasi di perbatasan Desa Maron dan Desa Tlogo, tepatnya di area perbukitan Telaga Menjer. Lembah Seroja menawarkan keinda- han panorama alam yang mempesona. Lukisan hidup yang berlatar lanskap Telaga Menjer, Gunung Sindoro, dan Gunung Kembang akan membuat Anda terkesima dan jatuh cinta. Nuansa hijau yang asri dan teduh ini bisa memanjakan mata, hati, dan pikiran Anda. Kalau datang ke sini saat kondisi cuaca sedang bagus, pe- mandangan Kota Wonosobo akan terlihat jelas dari bukit ini. Dan bagi kalian yang suka berburu sunrise atau sunset juga pasti akan senang kalau ke sani. Se- bab, panorama matahari terbit dan terbenam akan se- makin indah ketika dilihat dari lembah Seroja. S",
      },
      icon: {
        image: serojaIcon,
        position: {
          top: "49",
          left: "62",
        },
        scale: "0.8",
      },
      details: {
        address: "Jl Seroja 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "Seroja@dieng.com",
        twitter: "@Seroja-twitter",
        instagram: "@Seroja-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "hill",
    },
    dpt: {
      name: "Dieng Plateau Theater",
      name_short: "dpt",
      description: {
        en:
          "Dieng Plateau Theather is a must visited place when come to dieng plateu. This place will give in- formation about dieng plateu at a glace. In room with 100 person capacity,  visitors will be presented with movie about Dieng Plateu from the history, geography conditition, culture, etc. Watching 23 minutes movie, visitors will  know about dieng plateu and people who lived in this area. Dieng plateu Theather operate from ",
        in:
          "Inilah tempat yang seharusnya menjadi tujuan perta- ma ketika tiba di Dataran Tinggi Dieng, Dieng Plateau Theater. Tempat yang diresmikan oleh Presiden Susilo Bambang Yudhoyono pada 9 April 2006 ini memberi- kan pengetahuan mengenai Dataran Tinggi Dieng. Se- tiap pengunjung akan dibawa masuk ke dalam sebuah ruang yang mampu menampung sekitar 100 orang. Di dalam ruang ini, pengunjung akan menyaksikan sebuah film tentang Dataran Tinggi Dieng, mulai dari sejarah, kondisi geografis, budaya, serta hal-hal lain. Selama 23 menit durasi film, pengunjung akan dike- nalkan pada Dataran Tinggi Dieng dan masyarakat yang bermukim di kawasan ini. Sehingga, ketika akan berkeliling menikmati pesona alam Dataran Tinggi Dieng serta mengunjungi tempat-tempat wisata yang ada di kawasan ini, pengunjung sudah memiliki bekal pengetahuan. Pengalaman berkunjung yang dilakukan pun akan menjadi lebih berkesan.Dieng Plateau The- ater beroperasi dari jam 07.00 WIB hingga sekitar jam ",
      },
      icon: {
        image: dptIcon,
        position: {
          top: "29",
          left: "53",
        },
        scale: "1.3",
      },
      details: {
        address: "Jl DPT 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "DPT@dieng.com",
        twitter: "@DPT-twitter",
        instagram: "@DPT-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "movies",
    },
    sikunir: {
      name: "Sunrise Sikunir Desa Sembungan",
      name_short: "sikunir",
      description: {
        en:
          "Sikunir hill is one of main atrractions of dieng. In this site, a a breathtaking view of sunrise, known phenomenally as golden sunrise can be seen. From the top of sikunir, tourists can watch five top of mountains in a row from a distance or Houses of the villagers and Cebong Lake  shrouded in haze beautifully. T he beauty of nature and its cool air combined with the kindness and warmth of the will make an unfor- getable journey. In Sembungan Village, there is also Sikarim Waterfalls which lies under the village. This waterfall has 24 metres height with Sikunir Hill as the ",
        in:
          "Bukit Sikunir adalah salah satu obyek wisata anda- lan Dataran Tinggi Dieng. Indahnya view sunrise dari Puncak Sikunir yang dikenal dengan Golden Sun- rise Sikunir yang fenomenal. Rumah-rumah penduduk dan Telaga Cebong yang diselimuti kabut tipis terlihat indah dari Puncak Sikunir. Ditambah keramahan dan kehangatan penduduk desa yang akan membuat wisa- tawan betah berwisata ke Sikunir. Di desa sembungan juga terpadat air terjun sikarim yang terletak di bawah Desa Sembungan. Air Terjun Sikarim memiliki keting- gian 24 meter dengan  latar belakang bukit Sikunir yang  menjulang dan banyak ditumbuhi  perdu  dan  ",
      },
      icon: {
        image: sikunirIcon,
        position: {
          top: "34",
          left: "20",
        },
        scale: "0.9",
      },
      details: {
        address: "Jl Sukunir 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "Sukunir@dieng.com",
        twitter: "@Sukunir-twitter",
        instagram: "@Sukunir-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "mountain",
    },
    patakBanteng: {
      name: "Puncak Sikunir via Patak Banteng",
      name_short: "patakBanteng",
      description: {
        en:
          "The Village of Campursari is located in the Kejajar Sub district in the western part of Bismo Mountain. Some of the tourist resorts in Campursari are the Ko- pen Hill, Tirta terapi Spa, Sikrasak Waterfall, Silamp- or Waterfall, Sijleber Waterfall, Sikuwung Waterfall, Sigrinjing Waterfall, and Bismo Mountain. T here are also beautiful sunrises in Bismo Mountain and the scenery of Wonosobo County from the top of Bismo mountains. Visitors can see some mountains, such as Sindoro Mountain, sumbing Mountain, and ",
        in:
          "Gunung Prau terletak di kawasan dataran tinggi Di- eng, Kabupaten Wonosobo, Desa Patakbanteng dengan ketinggian 2.565 Mpdl. Dengan jalur pen- dakian yang relatif mudah dan cukup jelas bagi para pendaki serta view yang istimewa menjadikan Gunung Prau menjadi gunung favorit bagi para pendaki saat ini. Untuk mendaki Puncak Gunung Prau, pendaki hanya membutuhkan sekitar 3-4 jam trekking. Dari puncak Gunung Prau pendaki dapat menikmati pemandangan serba cantik di antaranya hamparan keindahan bukit teletubbies dan bunga yang sangat menawan. Tak ha- nya itu, kita juga dapat menyaksikan keindahan jaja- ran Gunung Sumbing, Sindoro, Merapi, Merbabu, dan Slamet. Puncak Gunung Prau sering dijadikan tempat untuk hunting spot Golden Sunrise yang terbukti spek- takuler.Gunung Prau dapat menjadi destinasi utama kalian untuk menikmati keindahan alam dari keting- gian. Pendaki akan dibuat jatuh hati melihat Telaga Warna Dieng dari ketinggian, hamparan bunga dan ",
      },
      icon: {
        image: patakBantengIcon,
        position: {
          top: "12",
          left: "53",
        },
        scale: "1.2",
      },
      details: {
        address: "Jl PatakBanteng 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "PatakBanteng@dieng.com",
        twitter: "@PatakBanteng-twitter",
        instagram: "@PatakBanteng-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "mountain",
    },
    menjer: {
      name: "Telaga Menjer",
      name_short: "menjer",
      description: {
        en:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
        in:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl. ",
      },
      icon: {
        image: menjerIcon,
        position: {
          top: "56",
          left: "43",
        },
        scale: "1.9",
      },
      details: {
        address: "Jl Menjer 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "Menjer@dieng.com",
        twitter: "@Menjer-twitter",
        instagram: "@Menjer-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "lake",
    },
    campursari: {
      name: "Desa Wisata Campursari",
      name_short: "campursari",
      description: {
        en:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
        in:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl. ",
      },
      icon: {
        image: campursariIcon,
        position: {
          top: "12",
          left: "17",
        },
        scale: "2",
      },
      details: {
        address: "Jl Campursari 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "campursari@dieng.com",
        twitter: "@campursari-twitter",
        instagram: "@campursari-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "village",
    },
    gunungPrau: {
      name: "Gunung Prau",
      name_short: "gunungPrau",
      description: {
        en:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
        in:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl. ",
      },
      icon: {
        image: gunungPrauIcon,
        position: {
          top: "8",
          left: "81",
        },
        scale: "1.2",
      },
      details: {
        address: "jl Gunung Prau 150 asdf wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "Gunung Prau@dieng.com",
        twitter: "@Gunung Prau-twitter",
        instagram: "@Gunung Prau-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "mountain",
    },
    curugSikarim: {
      name: "Curug Sikarim",
      name_short: "curugSikarim",
      description: {
        en:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
        in:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl. ",
      },
      icon: {
        image: curugSikarimIcon,
        position: {
          top: "52",
          left: "19",
        },
        scale: "1.8",
      },
      details: {
        address: "Jl Sikarim 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "Sikarim@dieng.com",
        twitter: "@Sikarim-twitter",
        instagram: "@Sikarim-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "waterfall",
    },
    candi: {
      name: "Candi Dieng",
      name_short: "candi",
      description: {
        en:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
        in:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl. ",
      },
      icon: {
        image: candiDiengIcon,
        position: {
          top: "24",
          left: "37",
        },
        scale: "1.3",
      },
      details: {
        address: "Jl Candi Dieng 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "Candi Dieng@dieng.com",
        twitter: "@Candi Dieng-twitter",
        instagram: "@Candi Dieng-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "temple",
    },
  },
};

export default diengStore;
