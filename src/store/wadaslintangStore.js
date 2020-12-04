import bendunganIcon from "./img/wadaslintang/bendungan.png";
import kumejingIcon from "./img/wadaslintang/kumejing.png";
import lancarIcon from "./img/wadaslintang/kumejing.png";
import lubangSewuIcon from "./img/wadaslintang/lubangSewu.png";
import panerusanIcon from "./img/wadaslintang/panerusan.png";
import sumberejoIcon from "./img/wadaslintang/sumberejo.png";
import sumogedeIcon from "./img/wadaslintang/sumogede.png";
import wadaslintangMap from "./img/wadaslintang/map-empty.png";

const wadaslintangStore = {
  name: "wadaslintang",
  mapImage: wadaslintangMap,
  attractions: {
    bendungan: {
      name: "Bendungan Wadaslintang",
      description: {
        en:
          "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.  Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.  Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit. ",
        in:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.",
      },
      icon: {
        image: bendunganIcon,
        position: {
          top: "70",
          left: "30",
        },
      },
      popup: {
        position: {
          top: "75",
          left: "20",
        },
      },
      details: {
        address: "Jl bendungan 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "bendungan@dieng.com",
        twitter: "@bendungan-twitter",
        instagram: "@bendungan-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "dam",
    },
    kumejing: {
      name: "Banana Boat dan Warung Apung Kumejing",
      description: {
        en:
          "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.  Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.  Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit. ",
        in:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.",
      },
      icon: {
        image: kumejingIcon,
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
        address: "Jl kumejing 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "kumejing@dieng.com",
        twitter: "@kumejing-twitter",
        instagram: "@kumejing-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "food",
    },
    lancar: {
      name: "Lancar",
      description: {
        en:
          "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.  Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.  Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit. ",
        in:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.",
      },
      icon: {
        image: lancarIcon,
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
        address: "Jl lancar 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "lancar@dieng.com",
        twitter: "@lancar-twitter",
        instagram: "@lancar-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "garden",
    },
    lubangSewu: {
      name: "Lubang Sewu Desa Erorejo",
      description: {
        en:
          "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.  Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.  Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit. ",
        in:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.",
      },
      icon: {
        image: lubangSewuIcon,
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
        address: "Jl Lubang Sewu 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "Lubang Sewu@dieng.com",
        twitter: "@Lubang Sewu-twitter",
        instagram: "@Lubang Sewu-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "canyon",
    },
    panerusan: {
      name: "Bukit Sikrikil Desa Panerusan",
      description: {
        en:
          "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.  Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.  Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit. ",
        in:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.",
      },
      icon: {
        image: panerusanIcon,
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
        address: "Jl Panerusan Sewu 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "Panerusan Sewu@dieng.com",
        twitter: "@Panerusan Sewu-twitter",
        instagram: "@Panerusan Sewu-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "canyon",
    },
    sumberejo: {
      name: "Sumberejo",
      description: {
        en:
          "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.  Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.  Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit. ",
        in:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.",
      },
      icon: {
        image: sumberejoIcon,
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
        address: "Jl Sumberejo Sewu 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "Sumberejo Sewu@dieng.com",
        twitter: "@Sumberejo Sewu-twitter",
        instagram: "@Sumberejo Sewu-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "food",
    },
    sumogede: {
      name: "Bukit Siloreng Sumogede",
      description: {
        en:
          "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.  Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.  Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit. ",
        in:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.",
      },
      icon: {
        image: sumogedeIcon,
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
        address: "Jl Sumogede Sewu 150 asdf Wonosobo",
        openHour: "08.00 - 20.00",
        phone: "0812-1234-1234",
        email: "Sumogede Sewu@dieng.com",
        twitter: "@Sumogede Sewu-twitter",
        instagram: "@Sumogede Sewu-insta",
        gmaps: "https://goo.gl/maps/jCjrN1zS5b8qcPnf8",
      },
      term: "forest",
    },
  },
};

export default wadaslintangStore;
