export const districts = [
  { id: 1, name: "Ajmer" },
  { id: 2, name: "Alwar" },
  { id: 3, name: "Balotra" },
  { id: 4, name: "Banswara" },
  { id: 5, name: "Baran" },
  { id: 6, name: "Barmer" },
  { id: 7, name: "Beawar" },
  { id: 8, name: "Bharatpur" },
  { id: 9, name: "Bhilwara" },
  { id: 10, name: "Bikaner" },
  { id: 11, name: "Bundi" },
  { id: 12, name: "Chittorgarh" },
  { id: 13, name: "Churu" },
  { id: 14, name: "Dausa" },
  { id: 15, name: "Deeg" },
  { id: 16, name: "Dholpur" },
  { id: 17, name: "Didwana-Kuchaman" },
  { id: 18, name: "Dungarpur" },
  { id: 19, name: "Ganganagar" },
  { id: 20, name: "Hanumangarh" },
  { id: 21, name: "Jaipur" },
  { id: 22, name: "Jaisalmer" },
  { id: 23, name: "Jalore" },
  { id: 24, name: "Jhalawar" },
  { id: 25, name: "Jhunjhunu" },
  { id: 26, name: "Jodhpur" },
  { id: 27, name: "Karauli" },
  { id: 28, name: "Khairthal-Tijara" },
  { id: 29, name: "Kota" },
  { id: 30, name: "Kotputli-Behror" },
  { id: 31, name: "Nagaur" },
  { id: 32, name: "Pali" },
  { id: 33, name: "Phalodi" },
  { id: 34, name: "Pratapgarh" },
  { id: 35, name: "Rajsamand" },
  { id: 36, name: "Salumbar" },
  { id: 37, name: "Sawai Madhopur" },
  { id: 38, name: "Sikar" },
  { id: 39, name: "Sirohi" },
  { id: 40, name: "Tonk" },
  { id: 41, name: "Udaipur" }
];

export const getDistrictId = (districtName) => {
  const district = districts.find(d => d.name === districtName);
  return district ? district.id : 0;
};

export const getDistrictName = (districtId) => {
  const district = districts.find(d => d.id === districtId);
  return district ? district.name : '';
};