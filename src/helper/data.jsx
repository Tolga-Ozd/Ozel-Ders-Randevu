export const appointmentData = [
  {
    id: 1,
    patient: "Ahmet Selim",
    day: new Date().toISOString().slice(0, 10),
    tamamlandı: true,
    teacher: "Öğr. Barış Özel",
  },
  {
    id: 2,
    patient: "Esra Uçar",
    day: new Date().toISOString().slice(0, 10),
    tamamlandı: false,
    teacher: "Öğr.Ayşe Güler",
  },
  {
    id: 3,
    patient: "Yasin Üzel",
    day: new Date().toISOString().slice(0, 10),
    tamamlandı: true,
    teacher: "Öğr.Kutay Altan",
  },

]

export const doctorData = [
  {
    id: 1,
    name: "Barış Özel",
    dep: "Matematik",
    img: "./img/öğ01.jpg",
  },
  {
    id: 2,
    name: "Yeşil Kale",
    dep: "İngilizce",
    img: "./img/öğ2.jpg",
  },
  {
    id: 3,
    name: "Leyla Solmaz",
    dep: "Türkçe",
    img: "./img/öğ3.jpg",
  },
  {
    id: 4,
    name: "Gizem Yalçın",
    dep: "Fen Bilgisi",
    img: "./img/öğ4.jpg",
  },
  {
    id: 5,
    name: "Derin Gezer",
    dep: "Fen Bilgisi",
    img: "./img/öğ5.jpg",
  },
  {
    id: 6,
    name: "Ayşe Güler",
    dep: "İngilizce",
    img: "./img/öğ6.jpg",
  },
  {
    id: 7,
    name: "Halil Vural",
    dep: "Matematik",
    img: "./img/öğ7.jpg",
  },
  {
    id: 8,
    name: "Kutay Altan",
    dep: "Sosyal Bilimler",
    img: "./img/öğ8.jpg",
  },
]
