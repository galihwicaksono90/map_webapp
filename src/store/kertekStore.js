import giyantiIcon from "./img/kertek/giyanti.png";
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
          left: "50",
        },
      },
      popup: {
        position: {
          top: "50",
          left: "50",
        },
      },
      details: {
        address: "Jl giyanti 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "giyanti@dieng.com",
        twitter: "@giyanti-twitter",
        instagram: "@giyanti-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "market",
    },
  },
};

export default kertekStore;
