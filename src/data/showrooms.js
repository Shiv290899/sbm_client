export const SHOWROOMS = [
  {
    id: "chikkagollarahatti",
    name: "SRI BALAJI MOTORS - Chikkagollarahatti",
    phone: "9742192972",
    address:
      "#1, BELOW SBI BANK, OPP. TO SAI GARMENTS, NEAR NICE ROAD, MAGADI MAIN ROAD, CHIKKAGOLLARAHATTI, BANGLORE, KARNATAKA 560091",
    mapUrl:
      "https://maps.google.com/?q=%231+Below+SBI+Bank+Opp+Sai+Garments+Near+NICE+Road+Magadi+Main+Road+Chikkagollarahatti+Bengaluru+560091",
    isPrimary: true,
  },
  {
    id: "pattegarapalya",
    name: "SRI BALAJI MOTORS - Pattegarapalya",
    phone: "7760640485",
    address:
      "#45, 60 FEET ROAD, SRINIVASANAGARA, PATTEGARAPALYA MAIN ROAD, PATTEGARAPALYA, BANGLORE, KARNATAKA 560079",
    mapUrl:
      "https://maps.google.com/?q=%2345+60+Feet+Road+Srinivasanagara+Pattegarapalya+Main+Road+Pattegarapalya+Bangalore+560079",
  },
];

export const findShowroomById = (id) =>
  SHOWROOMS.find((item) => item.id === id);

export const PRIMARY_SHOWROOM =
  SHOWROOMS.find((item) => item.isPrimary) || SHOWROOMS[0];
