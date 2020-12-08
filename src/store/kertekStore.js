import giyantiIcon from "./img/kertek/giyanti.png";
import kumandangIcon from "./img/kertek/kumandang.png";
import recoIcon from "./img/kertek/reco.png";
import sindoroIcon from "./img/kertek/sindoro.png";
import sumbingIcon from "./img/kertek/sumbing.png";
import wilayuIcon from "./img/kertek/wilayu.png";
import kertekMap from "./img/kertek/map_empty.png";

const kertekStore = {
  name: "kertek",
  mapImage: kertekMap,
  attractions: {
    giyanti: {
      name: "Pasar Tradisional Giyanti",
      name_short: "giyanti",
      description: {
        en:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
        in:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
      },
      icon: {
        image: giyantiIcon,
        position: {
          top: "50",
          left: "33",
        },
        scale: "2.7",
      },
      details: {
        address: "Jl giyanti 150  Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "giyanti@dieng.com",
        twitter: "@giyanti-twitter",
        instagram: "@giyanti-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "village",
    },
    kumandang: {
      name: "Pasar Tradisional Kumandang",
      name_short: "kumandang",
      description: {
        en:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
        in:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
      },
      icon: {
        image: kumandangIcon,
        position: {
          top: "51",
          left: "67",
        },
        scale: "2",
      },
      details: {
        address: "Jl kumandang 150  Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "kumandang@dieng.com",
        twitter: "@kumandang-twitter",
        instagram: "@kumandang-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "market",
    },
    sindoro: {
      name: "Gunung Sindoro",
      name_short: "sindoro",
      description: {
        en:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
        in:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
      },
      icon: {
        image: sindoroIcon,
        position: {
          top: "13",
          left: "35",
        },
        scale: "1",
      },
      details: {
        address: "Jl sindoro 150  Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "sindoro@dieng.com",
        twitter: "@sindoro-twitter",
        instagram: "@sindoro-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "mountain",
    },
    sumbing: {
      name: "GunungSumbing",
      name_short: "sumbing",
      description: {
        en:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
        in:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
      },
      icon: {
        image: sumbingIcon,
        position: {
          top: "15",
          left: "88",
        },
        scale: "1",
      },
      details: {
        address: "Jl sumbing 150  Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "sumbing@dieng.com",
        twitter: "@sumbing-twitter",
        instagram: "@sumbing-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "mountain",
    },
    reco: {
      name: "Reco",
      name_short: "reco",
      description: {
        en:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
        in:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
      },
      icon: {
        image: recoIcon,
        position: {
          top: "24",
          left: "51",
        },
        scale: "2.1",
      },
      details: {
        address: "Jl reco 150  Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "reco@dieng.com",
        twitter: "@reco-twitter",
        instagram: "@reco-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "coffee",
    },
    wilayu: {
      name: "Pasar Wilayu",
      name_short: "wilayu",
      description: {
        en:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
        in:
          "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
      },
      icon: {
        image: wilayuIcon,
        position: {
          top: "74",
          left: "23",
        },
        scale: "2",
      },
      details: {
        address: "Jl wilayu 150  Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "wilayu@dieng.com",
        twitter: "@wilayu-twitter",
        instagram: "@wilayu-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "market",
    },
  },
};

export default kertekStore;
