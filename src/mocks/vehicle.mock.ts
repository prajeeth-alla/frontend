export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  veh_listing_type: string;
}

export const VEHICLES_MOCK: Vehicle[] = [
  {
    "id": 1,
    "make": "Skoda",
    "model": "Grand Cherokee",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 2,
    "make": "Citroën",
    "model": "XC90",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 3,
    "make": "Maserati",
    "model": "Model 3",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 4,
    "make": "Cadillac",
    "model": "V90",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 5,
    "make": "Renault",
    "model": "V90",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 6,
    "make": "Citroën",
    "model": "1",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 7,
    "make": "Maruti",
    "model": "Charger",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 8,
    "make": "Maserati",
    "model": "Model 3",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 9,
    "make": "Nissan",
    "model": "Mustang",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 10,
    "make": "Bugatti",
    "model": "1",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 11,
    "make": "Volvo",
    "model": "Volt",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 12,
    "make": "Skoda",
    "model": "Model 3",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 13,
    "make": "Tata",
    "model": "Taurus",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 14,
    "make": "Vauxhall",
    "model": "PT Cruiser",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 15,
    "make": "Skoda",
    "model": "Challenger",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 16,
    "make": "Rivian",
    "model": "Cruze",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 17,
    "make": "Vauxhall",
    "model": "Malibu",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 18,
    "make": "Jaguar",
    "model": "Altima",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 19,
    "make": "Polestar",
    "model": "Fortwo",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 20,
    "make": "Mitsubishi",
    "model": "Challenger",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 21,
    "make": "BYD",
    "model": "Corvette",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 22,
    "make": "Bugatti",
    "model": "Wrangler",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 23,
    "make": "MG",
    "model": "Corvette",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 24,
    "make": "Mitsubishi",
    "model": "Corvette",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 25,
    "make": "Kia",
    "model": "Colorado",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 26,
    "make": "Maruti",
    "model": "Corvette",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 27,
    "make": "Mazda",
    "model": "F-150",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 28,
    "make": "Peugeot",
    "model": "Aventador",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 29,
    "make": "Bentley",
    "model": "Model Y",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 30,
    "make": "Bugatti",
    "model": "CTS",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 31,
    "make": "Lamborghini",
    "model": "Expedition",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 32,
    "make": "Tata",
    "model": "Model 3",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 33,
    "make": "Citroën",
    "model": "Fiesta",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 34,
    "make": "Bentley",
    "model": "A8",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 35,
    "make": "Mahindra & Mahindra",
    "model": "Alpine",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 36,
    "make": "Honda",
    "model": "Land Cruiser",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 37,
    "make": "Maserati",
    "model": "CTS",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 38,
    "make": "Jeep",
    "model": "911",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 39,
    "make": "Rivian",
    "model": "Silverado",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 40,
    "make": "Mini",
    "model": "Grand Cherokee",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 41,
    "make": "Audi",
    "model": "Grand Caravan",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 42,
    "make": "Peugeot",
    "model": "Model S",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 43,
    "make": "Skoda",
    "model": "Charger",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 44,
    "make": "Vauxhall",
    "model": "Prius",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 45,
    "make": "Volvo",
    "model": "Fortwo",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 46,
    "make": "Fiat",
    "model": "Civic",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 47,
    "make": "Jeep",
    "model": "Beetle",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 48,
    "make": "Honda",
    "model": "Corvette",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 49,
    "make": "Jeep",
    "model": "Spyder",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 50,
    "make": "Toyota",
    "model": "A8",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 51,
    "make": "Chevrolet",
    "model": "Model 3",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 52,
    "make": "Land Rover",
    "model": "CTS",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 53,
    "make": "MG",
    "model": "A4",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 54,
    "make": "NIO",
    "model": "Model S",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 55,
    "make": "Smart",
    "model": "Challenger",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 56,
    "make": "MG",
    "model": "Altima",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 57,
    "make": "Nissan",
    "model": "Spyder",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 58,
    "make": "Jeep",
    "model": "Alpine",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 59,
    "make": "Renault",
    "model": "Charger",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 60,
    "make": "Renault",
    "model": "Grand Caravan",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 61,
    "make": "Rolls Royce",
    "model": "Model X",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 62,
    "make": "Skoda",
    "model": "Corvette",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 63,
    "make": "Ferrari",
    "model": "Mustang",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 64,
    "make": "MG",
    "model": "Accord",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 65,
    "make": "Ford",
    "model": "Camry",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 66,
    "make": "Volkswagen",
    "model": "Silverado",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 67,
    "make": "Bugatti",
    "model": "LeBaron",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 68,
    "make": "Jaguar",
    "model": "Civic",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 69,
    "make": "Cadillac",
    "model": "CTS",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 70,
    "make": "Honda",
    "model": "CTS",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 71,
    "make": "MG",
    "model": "Grand Caravan",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 72,
    "make": "Tesla",
    "model": "El Camino",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 73,
    "make": "Tesla",
    "model": "Malibu",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 74,
    "make": "Lamborghini",
    "model": "CX-9",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 75,
    "make": "NIO",
    "model": "A4",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 76,
    "make": "Mercedes Benz",
    "model": "Golf",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 77,
    "make": "Chevrolet",
    "model": "XTS",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 78,
    "make": "Land Rover",
    "model": "Sentra",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 79,
    "make": "Suzuki",
    "model": "Impala",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 80,
    "make": "Smart",
    "model": "Model X",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 81,
    "make": "Mahindra & Mahindra",
    "model": "Fortwo",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 82,
    "make": "Citroën",
    "model": "ATS",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 83,
    "make": "Bentley",
    "model": "Altima",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 84,
    "make": "Mahindra & Mahindra",
    "model": "Aventador",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 85,
    "make": "Cadillac",
    "model": "A4",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 86,
    "make": "Polestar",
    "model": "XTS",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 87,
    "make": "BMW",
    "model": "Mercielago",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 88,
    "make": "Ford",
    "model": "Expedition",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 89,
    "make": "Peugeot",
    "model": "Mustang",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 90,
    "make": "Peugeot",
    "model": "V90",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 91,
    "make": "Toyota",
    "model": "Roadster",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 92,
    "make": "Ford",
    "model": "Model T",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 93,
    "make": "Mazda",
    "model": "1",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 94,
    "make": "Nissan",
    "model": "Beetle",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 95,
    "make": "Citroën",
    "model": "Countach",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 96,
    "make": "Maruti",
    "model": "Malibu",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 97,
    "make": "Vauxhall",
    "model": "Wrangler",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 98,
    "make": "Volkswagen",
    "model": "Impala",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 99,
    "make": "Tata",
    "model": "Malibu",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 100,
    "make": "BMW",
    "model": "ATS",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 101,
    "make": "BMW",
    "model": "Mercielago",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 102,
    "make": "Smart",
    "model": "Beetle",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 103,
    "make": "BMW",
    "model": "Camry",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 104,
    "make": "Toyota",
    "model": "Durango",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 105,
    "make": "Ferrari",
    "model": "Civic",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 106,
    "make": "Smart",
    "model": "Mustang",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 107,
    "make": "Audi",
    "model": "V90",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 108,
    "make": "Renault",
    "model": "Cruze",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 109,
    "make": "Rivian",
    "model": "Colorado",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 110,
    "make": "Aston Martin",
    "model": "Jetta",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 111,
    "make": "Renault",
    "model": "Model X",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 112,
    "make": "Nissan",
    "model": "Expedition",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 113,
    "make": "Rolls Royce",
    "model": "Fiesta",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 114,
    "make": "Skoda",
    "model": "Roadster",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 115,
    "make": "Rivian",
    "model": "Beetle",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 116,
    "make": "Chevrolet",
    "model": "Escalade",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 117,
    "make": "Hyundai",
    "model": "2",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 118,
    "make": "Mini",
    "model": "1",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 119,
    "make": "Honda",
    "model": "Escalade",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 120,
    "make": "Rivian",
    "model": "Silverado",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 121,
    "make": "Bentley",
    "model": "Fiesta",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 122,
    "make": "Ford",
    "model": "Model Y",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 123,
    "make": "Chevrolet",
    "model": "Durango",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 124,
    "make": "Jaguar",
    "model": "Alpine",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 125,
    "make": "Rolls Royce",
    "model": "Prius",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 126,
    "make": "NIO",
    "model": "Prius",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 127,
    "make": "Fiat",
    "model": "2",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 128,
    "make": "Land Rover",
    "model": "Volt",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 129,
    "make": "Smart",
    "model": "Aventador",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 130,
    "make": "Volvo",
    "model": "Taurus",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 131,
    "make": "Maruti",
    "model": "Fortwo",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 132,
    "make": "Cadillac",
    "model": "Corvette",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 133,
    "make": "Mazda",
    "model": "Explorer",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 134,
    "make": "Mitsubishi",
    "model": "Focus",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 135,
    "make": "Fiat",
    "model": "Model 3",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 136,
    "make": "Bugatti",
    "model": "Malibu",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 137,
    "make": "Nissan",
    "model": "F-150",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 138,
    "make": "Subaru",
    "model": "Element",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 139,
    "make": "Dodge",
    "model": "PT Cruiser",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 140,
    "make": "Subaru",
    "model": "ATS",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 141,
    "make": "Renault",
    "model": "Beetle",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 142,
    "make": "Tata",
    "model": "Challenger",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 143,
    "make": "Ferrari",
    "model": "Civic",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 144,
    "make": "Honda",
    "model": "Model Y",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 145,
    "make": "Mahindra & Mahindra",
    "model": "LeBaron",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 146,
    "make": "Smart",
    "model": "Model 3",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 147,
    "make": "Maruti",
    "model": "PT Cruiser",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 148,
    "make": "Mercedes Benz",
    "model": "Wrangler",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 149,
    "make": "Renault",
    "model": "Explorer",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 150,
    "make": "Maserati",
    "model": "Model X",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 151,
    "make": "Chrysler",
    "model": "XTS",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 152,
    "make": "Tata",
    "model": "Malibu",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 153,
    "make": "Bugatti",
    "model": "A8",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 154,
    "make": "MG",
    "model": "Focus",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 155,
    "make": "Chrysler",
    "model": "Alpine",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 156,
    "make": "Mahindra & Mahindra",
    "model": "Wrangler",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 157,
    "make": "Maruti",
    "model": "Escalade",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 158,
    "make": "NIO",
    "model": "Jetta",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 159,
    "make": "Mini",
    "model": "Alpine",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 160,
    "make": "Porsche",
    "model": "F-150",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 161,
    "make": "Land Rover",
    "model": "Mercielago",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 162,
    "make": "Smart",
    "model": "Spyder",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 163,
    "make": "Volvo",
    "model": "Escalade",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 164,
    "make": "Suzuki",
    "model": "Altima",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 165,
    "make": "Chrysler",
    "model": "PT Cruiser",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 166,
    "make": "Honda",
    "model": "2",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 167,
    "make": "Dodge",
    "model": "XC90",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 168,
    "make": "Chrysler",
    "model": "Prius",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 169,
    "make": "Tata",
    "model": "Mustang",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 170,
    "make": "Peugeot",
    "model": "911",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 171,
    "make": "Toyota",
    "model": "Roadster",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 172,
    "make": "Hyundai",
    "model": "Cruze",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 173,
    "make": "Toyota",
    "model": "Jetta",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 174,
    "make": "Maruti",
    "model": "Durango",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 175,
    "make": "Bugatti",
    "model": "A8",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 176,
    "make": "NIO",
    "model": "Grand Caravan",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 177,
    "make": "MG",
    "model": "Beetle",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 178,
    "make": "BYD",
    "model": "Challenger",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 179,
    "make": "Peugeot",
    "model": "Sentra",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 180,
    "make": "Jaguar",
    "model": "Wrangler",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 181,
    "make": "Fiat",
    "model": "F-150",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 182,
    "make": "Smart",
    "model": "Model S",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 183,
    "make": "Mitsubishi",
    "model": "Accord",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 184,
    "make": "Bugatti",
    "model": "Beetle",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 185,
    "make": "Bugatti",
    "model": "Explorer",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 186,
    "make": "Maserati",
    "model": "Challenger",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 187,
    "make": "Maruti",
    "model": "Volt",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 188,
    "make": "Fiat",
    "model": "Model S",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 189,
    "make": "Ferrari",
    "model": "911",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 190,
    "make": "Porsche",
    "model": "Aventador",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 191,
    "make": "Peugeot",
    "model": "Expedition",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 192,
    "make": "Mini",
    "model": "Malibu",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 193,
    "make": "Kia",
    "model": "Explorer",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 194,
    "make": "Land Rover",
    "model": "PT Cruiser",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 195,
    "make": "Toyota",
    "model": "Jetta",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 196,
    "make": "Maserati",
    "model": "1",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 197,
    "make": "Volvo",
    "model": "Accord",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 198,
    "make": "Mini",
    "model": "Model Y",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 199,
    "make": "Aston Martin",
    "model": "Charger",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 200,
    "make": "Bugatti",
    "model": "Impala",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 201,
    "make": "Dodge",
    "model": "F-150",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 202,
    "make": "Tata",
    "model": "Volt",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 203,
    "make": "BYD",
    "model": "Beetle",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 204,
    "make": "Renault",
    "model": "Durango",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 205,
    "make": "Chrysler",
    "model": "Cruze",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 206,
    "make": "Ferrari",
    "model": "Taurus",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 207,
    "make": "MG",
    "model": "Challenger",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 208,
    "make": "Honda",
    "model": "Camaro",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 209,
    "make": "Rolls Royce",
    "model": "Camry",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 210,
    "make": "Subaru",
    "model": "A8",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 211,
    "make": "Renault",
    "model": "Taurus",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 212,
    "make": "Mercedes Benz",
    "model": "Model Y",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 213,
    "make": "Chevrolet",
    "model": "Model 3",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 214,
    "make": "Audi",
    "model": "ATS",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 215,
    "make": "Chevrolet",
    "model": "Grand Cherokee",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 216,
    "make": "Bentley",
    "model": "Model S",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 217,
    "make": "Lamborghini",
    "model": "Prius",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 218,
    "make": "Renault",
    "model": "Corvette",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 219,
    "make": "Rivian",
    "model": "El Camino",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 220,
    "make": "Tata",
    "model": "F-150",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 221,
    "make": "Dodge",
    "model": "Alpine",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 222,
    "make": "Vauxhall",
    "model": "911",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 223,
    "make": "Mazda",
    "model": "Fiesta",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 224,
    "make": "Fiat",
    "model": "Civic",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 225,
    "make": "Mahindra & Mahindra",
    "model": "2",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 226,
    "make": "Rolls Royce",
    "model": "El Camino",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 227,
    "make": "Mazda",
    "model": "Camry",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 228,
    "make": "Mercedes Benz",
    "model": "Countach",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 229,
    "make": "Jaguar",
    "model": "Escalade",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 230,
    "make": "Maserati",
    "model": "Wrangler",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 231,
    "make": "Land Rover",
    "model": "XTS",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 232,
    "make": "Bentley",
    "model": "ATS",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 233,
    "make": "Polestar",
    "model": "Altima",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 234,
    "make": "Mahindra & Mahindra",
    "model": "Alpine",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 235,
    "make": "Kia",
    "model": "XC90",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 236,
    "make": "Renault",
    "model": "LeBaron",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 237,
    "make": "Toyota",
    "model": "Camaro",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 238,
    "make": "Land Rover",
    "model": "Land Cruiser",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 239,
    "make": "Subaru",
    "model": "XTS",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 240,
    "make": "Mercedes Benz",
    "model": "Grand Caravan",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 241,
    "make": "Mazda",
    "model": "Impala",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 242,
    "make": "Tesla",
    "model": "Charger",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 243,
    "make": "Nissan",
    "model": "Explorer",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 244,
    "make": "Polestar",
    "model": "Element",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 245,
    "make": "Mazda",
    "model": "XTS",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 246,
    "make": "Land Rover",
    "model": "Element",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 247,
    "make": "Volkswagen",
    "model": "Altima",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 248,
    "make": "Tesla",
    "model": "A8",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 249,
    "make": "NIO",
    "model": "Silverado",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 250,
    "make": "Polestar",
    "model": "Charger",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 251,
    "make": "Mini",
    "model": "Spyder",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 252,
    "make": "Maserati",
    "model": "Durango",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 253,
    "make": "Mini",
    "model": "A8",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 254,
    "make": "Audi",
    "model": "Sentra",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 255,
    "make": "Tesla",
    "model": "Roadster",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 256,
    "make": "Dodge",
    "model": "XC90",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 257,
    "make": "Audi",
    "model": "Impala",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 258,
    "make": "Renault",
    "model": "Prius",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 259,
    "make": "Polestar",
    "model": "Fortwo",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 260,
    "make": "Bugatti",
    "model": "Altima",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 261,
    "make": "MG",
    "model": "Impala",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 262,
    "make": "Mahindra & Mahindra",
    "model": "Expedition",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 263,
    "make": "Porsche",
    "model": "El Camino",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 264,
    "make": "Chrysler",
    "model": "Jetta",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 265,
    "make": "Porsche",
    "model": "Volt",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 266,
    "make": "Jeep",
    "model": "Model T",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 267,
    "make": "Mitsubishi",
    "model": "LeBaron",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 268,
    "make": "Smart",
    "model": "Grand Cherokee",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 269,
    "make": "Land Rover",
    "model": "Golf",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 270,
    "make": "Rivian",
    "model": "XTS",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 271,
    "make": "Jaguar",
    "model": "Fiesta",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 272,
    "make": "Fiat",
    "model": "A8",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 273,
    "make": "Citroën",
    "model": "2",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 274,
    "make": "Rivian",
    "model": "F-150",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 275,
    "make": "Tata",
    "model": "2",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 276,
    "make": "Rivian",
    "model": "Mercielago",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 277,
    "make": "Suzuki",
    "model": "CTS",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 278,
    "make": "Bugatti",
    "model": "Civic",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 279,
    "make": "Peugeot",
    "model": "Focus",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 280,
    "make": "Maserati",
    "model": "Beetle",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 281,
    "make": "NIO",
    "model": "Cruze",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 282,
    "make": "Tesla",
    "model": "Mercielago",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 283,
    "make": "Porsche",
    "model": "Accord",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 284,
    "make": "Mazda",
    "model": "Explorer",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 285,
    "make": "Citroën",
    "model": "Mercielago",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 286,
    "make": "Rivian",
    "model": "Golf",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 287,
    "make": "Volkswagen",
    "model": "PT Cruiser",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 288,
    "make": "Chrysler",
    "model": "Model X",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 289,
    "make": "Lamborghini",
    "model": "Silverado",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 290,
    "make": "BYD",
    "model": "XTS",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 291,
    "make": "Mahindra & Mahindra",
    "model": "Element",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 292,
    "make": "Renault",
    "model": "Beetle",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 293,
    "make": "Porsche",
    "model": "El Camino",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 294,
    "make": "Smart",
    "model": "Fiesta",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 295,
    "make": "Bentley",
    "model": "Element",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 296,
    "make": "Maserati",
    "model": "A8",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 297,
    "make": "Chevrolet",
    "model": "Silverado",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 298,
    "make": "Cadillac",
    "model": "Focus",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 299,
    "make": "Land Rover",
    "model": "Land Cruiser",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 300,
    "make": "Audi",
    "model": "Model T",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 301,
    "make": "BMW",
    "model": "911",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 302,
    "make": "Volkswagen",
    "model": "Expedition",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 303,
    "make": "Skoda",
    "model": "Volt",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 304,
    "make": "Mazda",
    "model": "Fortwo",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 305,
    "make": "Hyundai",
    "model": "Cruze",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 306,
    "make": "Citroën",
    "model": "Expedition",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 307,
    "make": "Citroën",
    "model": "Countach",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 308,
    "make": "BMW",
    "model": "Countach",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 309,
    "make": "Rolls Royce",
    "model": "Mercielago",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 310,
    "make": "Mahindra & Mahindra",
    "model": "Sentra",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 311,
    "make": "Honda",
    "model": "CTS",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 312,
    "make": "Mazda",
    "model": "CX-9",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 313,
    "make": "Kia",
    "model": "Malibu",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 314,
    "make": "Renault",
    "model": "Prius",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 315,
    "make": "Bugatti",
    "model": "Corvette",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 316,
    "make": "Tesla",
    "model": "Accord",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 317,
    "make": "Mazda",
    "model": "Fiesta",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 318,
    "make": "Hyundai",
    "model": "Golf",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 319,
    "make": "Jeep",
    "model": "Model Y",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 320,
    "make": "Toyota",
    "model": "Camaro",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 321,
    "make": "Ferrari",
    "model": "Camaro",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 322,
    "make": "Aston Martin",
    "model": "Ranchero",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 323,
    "make": "NIO",
    "model": "Ranchero",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 324,
    "make": "Skoda",
    "model": "PT Cruiser",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 325,
    "make": "Land Rover",
    "model": "Camaro",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 326,
    "make": "Kia",
    "model": "El Camino",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 327,
    "make": "Smart",
    "model": "Colorado",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 328,
    "make": "Porsche",
    "model": "Silverado",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 329,
    "make": "NIO",
    "model": "Fiesta",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 330,
    "make": "Land Rover",
    "model": "2",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 331,
    "make": "Bentley",
    "model": "Malibu",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 332,
    "make": "Dodge",
    "model": "Silverado",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 333,
    "make": "Ford",
    "model": "LeBaron",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 334,
    "make": "BYD",
    "model": "Focus",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 335,
    "make": "Kia",
    "model": "Volt",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 336,
    "make": "Lamborghini",
    "model": "Land Cruiser",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 337,
    "make": "Toyota",
    "model": "Silverado",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 338,
    "make": "Mini",
    "model": "Alpine",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 339,
    "make": "Maserati",
    "model": "Mustang",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 340,
    "make": "Vauxhall",
    "model": "El Camino",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 341,
    "make": "Volvo",
    "model": "Cruze",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 342,
    "make": "Maserati",
    "model": "Malibu",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 343,
    "make": "Aston Martin",
    "model": "Wrangler",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 344,
    "make": "Polestar",
    "model": "Altima",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 345,
    "make": "Suzuki",
    "model": "Alpine",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 346,
    "make": "Volvo",
    "model": "CX-9",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 347,
    "make": "Skoda",
    "model": "Altima",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 348,
    "make": "Rivian",
    "model": "XC90",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 349,
    "make": "Mitsubishi",
    "model": "Altima",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 350,
    "make": "Porsche",
    "model": "Altima",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 351,
    "make": "Mercedes Benz",
    "model": "Model X",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 352,
    "make": "Jeep",
    "model": "Roadster",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 353,
    "make": "Honda",
    "model": "Corvette",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 354,
    "make": "Mahindra & Mahindra",
    "model": "Prius",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 355,
    "make": "Tesla",
    "model": "Jetta",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 356,
    "make": "Renault",
    "model": "Land Cruiser",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 357,
    "make": "Maserati",
    "model": "XTS",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 358,
    "make": "Mercedes Benz",
    "model": "Accord",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 359,
    "make": "Chevrolet",
    "model": "Beetle",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 360,
    "make": "Toyota",
    "model": "Element",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 361,
    "make": "Dodge",
    "model": "A8",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 362,
    "make": "Mahindra & Mahindra",
    "model": "XTS",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 363,
    "make": "Peugeot",
    "model": "CX-9",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 364,
    "make": "Aston Martin",
    "model": "ATS",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 365,
    "make": "Cadillac",
    "model": "CTS",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 366,
    "make": "Fiat",
    "model": "Charger",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 367,
    "make": "Chevrolet",
    "model": "Camry",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 368,
    "make": "Aston Martin",
    "model": "Alpine",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 369,
    "make": "Fiat",
    "model": "Element",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 370,
    "make": "Vauxhall",
    "model": "Fiesta",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 371,
    "make": "Honda",
    "model": "Impala",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 372,
    "make": "Skoda",
    "model": "Golf",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 373,
    "make": "Hyundai",
    "model": "Accord",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 374,
    "make": "Jeep",
    "model": "Fortwo",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 375,
    "make": "Mitsubishi",
    "model": "Prius",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 376,
    "make": "Volkswagen",
    "model": "Charger",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 377,
    "make": "Dodge",
    "model": "Beetle",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 378,
    "make": "Citroën",
    "model": "Prius",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 379,
    "make": "Audi",
    "model": "Spyder",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 380,
    "make": "Aston Martin",
    "model": "Fiesta",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 381,
    "make": "Peugeot",
    "model": "Camry",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 382,
    "make": "Mazda",
    "model": "Corvette",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 383,
    "make": "Vauxhall",
    "model": "ATS",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 384,
    "make": "Volvo",
    "model": "Cruze",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 385,
    "make": "Lamborghini",
    "model": "Wrangler",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 386,
    "make": "Fiat",
    "model": "ATS",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 387,
    "make": "Aston Martin",
    "model": "LeBaron",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 388,
    "make": "Chrysler",
    "model": "Durango",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 389,
    "make": "Vauxhall",
    "model": "Model S",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 390,
    "make": "Lamborghini",
    "model": "PT Cruiser",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 391,
    "make": "Aston Martin",
    "model": "Model Y",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 392,
    "make": "Volvo",
    "model": "Charger",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 393,
    "make": "Vauxhall",
    "model": "Grand Cherokee",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 394,
    "make": "Kia",
    "model": "Roadster",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 395,
    "make": "Land Rover",
    "model": "Jetta",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 396,
    "make": "Volvo",
    "model": "Sentra",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 397,
    "make": "Porsche",
    "model": "Challenger",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 398,
    "make": "NIO",
    "model": "A4",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 399,
    "make": "Chrysler",
    "model": "Mercielago",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 400,
    "make": "Suzuki",
    "model": "Taurus",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 401,
    "make": "Mazda",
    "model": "El Camino",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 402,
    "make": "Vauxhall",
    "model": "Land Cruiser",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 403,
    "make": "Nissan",
    "model": "Golf",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 404,
    "make": "Ford",
    "model": "Durango",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 405,
    "make": "BMW",
    "model": "Countach",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 406,
    "make": "Volvo",
    "model": "Element",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 407,
    "make": "Skoda",
    "model": "CTS",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 408,
    "make": "Nissan",
    "model": "Colorado",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 409,
    "make": "Audi",
    "model": "XTS",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 410,
    "make": "Aston Martin",
    "model": "V90",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 411,
    "make": "Tesla",
    "model": "Fiesta",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 412,
    "make": "Toyota",
    "model": "Impala",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 413,
    "make": "Mini",
    "model": "Model S",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 414,
    "make": "Bentley",
    "model": "Cruze",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 415,
    "make": "Porsche",
    "model": "Durango",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 416,
    "make": "Chrysler",
    "model": "Alpine",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 417,
    "make": "Rivian",
    "model": "XC90",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 418,
    "make": "Renault",
    "model": "Prius",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 419,
    "make": "Chrysler",
    "model": "Spyder",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 420,
    "make": "Volvo",
    "model": "1",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 421,
    "make": "Audi",
    "model": "Cruze",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 422,
    "make": "Volkswagen",
    "model": "Model X",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 423,
    "make": "Mitsubishi",
    "model": "Corvette",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 424,
    "make": "BMW",
    "model": "Focus",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 425,
    "make": "Vauxhall",
    "model": "A4",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 426,
    "make": "Maserati",
    "model": "Sentra",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 427,
    "make": "MG",
    "model": "Model 3",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 428,
    "make": "Ferrari",
    "model": "Element",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 429,
    "make": "Mercedes Benz",
    "model": "Wrangler",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 430,
    "make": "Renault",
    "model": "Malibu",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 431,
    "make": "Rivian",
    "model": "Sentra",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 432,
    "make": "Citroën",
    "model": "Focus",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 433,
    "make": "Maruti",
    "model": "CX-9",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 434,
    "make": "Skoda",
    "model": "CTS",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 435,
    "make": "Nissan",
    "model": "ATS",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 436,
    "make": "MG",
    "model": "Model T",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 437,
    "make": "Audi",
    "model": "Model Y",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 438,
    "make": "Porsche",
    "model": "XC90",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 439,
    "make": "Fiat",
    "model": "LeBaron",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 440,
    "make": "Audi",
    "model": "CX-9",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 441,
    "make": "Lamborghini",
    "model": "Silverado",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 442,
    "make": "Dodge",
    "model": "Charger",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 443,
    "make": "Mini",
    "model": "Element",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 444,
    "make": "Tata",
    "model": "Altima",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 445,
    "make": "Mini",
    "model": "XTS",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 446,
    "make": "Jeep",
    "model": "Ranchero",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 447,
    "make": "Ford",
    "model": "1",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 448,
    "make": "Volkswagen",
    "model": "Explorer",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 449,
    "make": "Aston Martin",
    "model": "Mustang",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 450,
    "make": "Ferrari",
    "model": "Golf",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 451,
    "make": "Cadillac",
    "model": "A8",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 452,
    "make": "Jaguar",
    "model": "Land Cruiser",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 453,
    "make": "Bugatti",
    "model": "Prius",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 454,
    "make": "Jaguar",
    "model": "Expedition",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 455,
    "make": "Honda",
    "model": "911",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 456,
    "make": "Chevrolet",
    "model": "Model 3",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 457,
    "make": "Subaru",
    "model": "Mercielago",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 458,
    "make": "Chevrolet",
    "model": "F-150",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 459,
    "make": "Maruti",
    "model": "Charger",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 460,
    "make": "Porsche",
    "model": "Challenger",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 461,
    "make": "Polestar",
    "model": "Golf",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 462,
    "make": "Cadillac",
    "model": "Grand Caravan",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 463,
    "make": "Mini",
    "model": "Durango",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 464,
    "make": "Dodge",
    "model": "Camaro",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 465,
    "make": "Tesla",
    "model": "Altima",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 466,
    "make": "Tata",
    "model": "Altima",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 467,
    "make": "Rolls Royce",
    "model": "Mercielago",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 468,
    "make": "Dodge",
    "model": "Focus",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 469,
    "make": "Mazda",
    "model": "A4",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 470,
    "make": "Lamborghini",
    "model": "Element",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 471,
    "make": "Aston Martin",
    "model": "Civic",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 472,
    "make": "Volkswagen",
    "model": "Model X",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 473,
    "make": "Aston Martin",
    "model": "Malibu",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 474,
    "make": "Vauxhall",
    "model": "Fortwo",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 475,
    "make": "Tesla",
    "model": "Prius",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 476,
    "make": "Nissan",
    "model": "Spyder",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 477,
    "make": "Citroën",
    "model": "PT Cruiser",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 478,
    "make": "Cadillac",
    "model": "Mercielago",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 479,
    "make": "Mercedes Benz",
    "model": "Explorer",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 480,
    "make": "Kia",
    "model": "Silverado",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 481,
    "make": "Mercedes Benz",
    "model": "Silverado",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 482,
    "make": "Land Rover",
    "model": "Fortwo",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 483,
    "make": "Lamborghini",
    "model": "Roadster",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 484,
    "make": "Mercedes Benz",
    "model": "Volt",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 485,
    "make": "Chrysler",
    "model": "Cruze",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 486,
    "make": "Ford",
    "model": "Malibu",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 487,
    "make": "Cadillac",
    "model": "Land Cruiser",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 488,
    "make": "Subaru",
    "model": "Escalade",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 489,
    "make": "Skoda",
    "model": "Grand Cherokee",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 490,
    "make": "Subaru",
    "model": "CTS",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 491,
    "make": "BMW",
    "model": "Aventador",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 492,
    "make": "Subaru",
    "model": "Malibu",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 493,
    "make": "Hyundai",
    "model": "Colorado",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 494,
    "make": "Skoda",
    "model": "PT Cruiser",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 495,
    "make": "Lamborghini",
    "model": "Escalade",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 496,
    "make": "Bugatti",
    "model": "Mustang",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 497,
    "make": "BMW",
    "model": "Camaro",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 498,
    "make": "MG",
    "model": "Mercielago",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 499,
    "make": "Chrysler",
    "model": "Colorado",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 500,
    "make": "Fiat",
    "model": "Volt",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 501,
    "make": "Maruti",
    "model": "Mercielago",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 502,
    "make": "Rivian",
    "model": "ATS",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 503,
    "make": "BYD",
    "model": "Camry",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 504,
    "make": "Mini",
    "model": "XTS",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 505,
    "make": "Kia",
    "model": "CTS",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 506,
    "make": "Ferrari",
    "model": "Camry",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 507,
    "make": "Ferrari",
    "model": "Challenger",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 508,
    "make": "Chevrolet",
    "model": "Model 3",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 509,
    "make": "Nissan",
    "model": "Fiesta",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 510,
    "make": "Toyota",
    "model": "V90",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 511,
    "make": "Smart",
    "model": "Charger",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 512,
    "make": "Volvo",
    "model": "Grand Caravan",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 513,
    "make": "Mitsubishi",
    "model": "Malibu",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 514,
    "make": "Nissan",
    "model": "Countach",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 515,
    "make": "Maserati",
    "model": "Element",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 516,
    "make": "Mazda",
    "model": "Grand Cherokee",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 517,
    "make": "Tata",
    "model": "LeBaron",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 518,
    "make": "Jaguar",
    "model": "2",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 519,
    "make": "Bugatti",
    "model": "ATS",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 520,
    "make": "Kia",
    "model": "Impala",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 521,
    "make": "Renault",
    "model": "Silverado",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 522,
    "make": "Volvo",
    "model": "Taurus",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 523,
    "make": "Aston Martin",
    "model": "Taurus",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 524,
    "make": "BMW",
    "model": "Durango",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 525,
    "make": "Aston Martin",
    "model": "Escalade",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 526,
    "make": "Aston Martin",
    "model": "Roadster",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 527,
    "make": "Tesla",
    "model": "Altima",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 528,
    "make": "Tesla",
    "model": "Beetle",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 529,
    "make": "Jaguar",
    "model": "Mustang",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 530,
    "make": "Porsche",
    "model": "Expedition",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 531,
    "make": "Chevrolet",
    "model": "Silverado",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 532,
    "make": "Fiat",
    "model": "CX-9",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 533,
    "make": "Bentley",
    "model": "Element",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 534,
    "make": "Subaru",
    "model": "XTS",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 535,
    "make": "Volvo",
    "model": "2",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 536,
    "make": "Subaru",
    "model": "Volt",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 537,
    "make": "Mini",
    "model": "Explorer",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 538,
    "make": "Volvo",
    "model": "Jetta",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 539,
    "make": "Rolls Royce",
    "model": "Colorado",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 540,
    "make": "Jaguar",
    "model": "Jetta",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 541,
    "make": "Land Rover",
    "model": "Focus",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 542,
    "make": "Vauxhall",
    "model": "Jetta",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 543,
    "make": "Maserati",
    "model": "Accord",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 544,
    "make": "Volkswagen",
    "model": "Mustang",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 545,
    "make": "Nissan",
    "model": "Model S",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 546,
    "make": "Lamborghini",
    "model": "Model S",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 547,
    "make": "Nissan",
    "model": "Model S",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 548,
    "make": "MG",
    "model": "Aventador",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 549,
    "make": "Lamborghini",
    "model": "Spyder",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 550,
    "make": "Mazda",
    "model": "V90",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 551,
    "make": "BYD",
    "model": "Mercielago",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 552,
    "make": "Honda",
    "model": "Silverado",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 553,
    "make": "Maruti",
    "model": "Durango",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 554,
    "make": "Rolls Royce",
    "model": "Model Y",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 555,
    "make": "Audi",
    "model": "Expedition",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 556,
    "make": "MG",
    "model": "Expedition",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 557,
    "make": "Volvo",
    "model": "XC90",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 558,
    "make": "Subaru",
    "model": "Camaro",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 559,
    "make": "Cadillac",
    "model": "Prius",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 560,
    "make": "Ferrari",
    "model": "F-150",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 561,
    "make": "Nissan",
    "model": "Ranchero",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 562,
    "make": "Ferrari",
    "model": "Camaro",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 563,
    "make": "MG",
    "model": "Grand Cherokee",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 564,
    "make": "Mahindra & Mahindra",
    "model": "Accord",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 565,
    "make": "Smart",
    "model": "ATS",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 566,
    "make": "Mitsubishi",
    "model": "Taurus",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 567,
    "make": "Renault",
    "model": "XTS",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 568,
    "make": "Nissan",
    "model": "Charger",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 569,
    "make": "NIO",
    "model": "Model 3",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 570,
    "make": "Mahindra & Mahindra",
    "model": "Sentra",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 571,
    "make": "NIO",
    "model": "Accord",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 572,
    "make": "BMW",
    "model": "Malibu",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 573,
    "make": "Vauxhall",
    "model": "Altima",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 574,
    "make": "Ferrari",
    "model": "Altima",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 575,
    "make": "Toyota",
    "model": "Accord",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 576,
    "make": "Kia",
    "model": "Explorer",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 577,
    "make": "Mercedes Benz",
    "model": "V90",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 578,
    "make": "NIO",
    "model": "Prius",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 579,
    "make": "Bugatti",
    "model": "Focus",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 580,
    "make": "BYD",
    "model": "Fortwo",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 581,
    "make": "Mahindra & Mahindra",
    "model": "CX-9",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 582,
    "make": "Maserati",
    "model": "Focus",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 583,
    "make": "Land Rover",
    "model": "Prius",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 584,
    "make": "Nissan",
    "model": "El Camino",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 585,
    "make": "Volvo",
    "model": "CX-9",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 586,
    "make": "Citroën",
    "model": "Civic",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 587,
    "make": "Toyota",
    "model": "LeBaron",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 588,
    "make": "Tesla",
    "model": "Ranchero",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 589,
    "make": "Kia",
    "model": "Fortwo",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 590,
    "make": "BYD",
    "model": "Model 3",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 591,
    "make": "Rivian",
    "model": "911",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 592,
    "make": "Jaguar",
    "model": "LeBaron",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 593,
    "make": "Porsche",
    "model": "Aventador",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 594,
    "make": "Cadillac",
    "model": "Ranchero",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 595,
    "make": "Hyundai",
    "model": "Aventador",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 596,
    "make": "Land Rover",
    "model": "Fortwo",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 597,
    "make": "Rivian",
    "model": "Grand Caravan",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 598,
    "make": "Rolls Royce",
    "model": "Fortwo",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 599,
    "make": "Dodge",
    "model": "Model 3",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 600,
    "make": "BMW",
    "model": "Impala",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 601,
    "make": "Mahindra & Mahindra",
    "model": "Challenger",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 602,
    "make": "Mercedes Benz",
    "model": "Sentra",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 603,
    "make": "Ferrari",
    "model": "Expedition",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 604,
    "make": "Fiat",
    "model": "El Camino",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 605,
    "make": "Cadillac",
    "model": "Malibu",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 606,
    "make": "Tesla",
    "model": "Prius",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 607,
    "make": "Peugeot",
    "model": "Model Y",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 608,
    "make": "Mercedes Benz",
    "model": "1",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 609,
    "make": "Dodge",
    "model": "Ranchero",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 610,
    "make": "Aston Martin",
    "model": "Explorer",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 611,
    "make": "Ferrari",
    "model": "Countach",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 612,
    "make": "Mahindra & Mahindra",
    "model": "Focus",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 613,
    "make": "Nissan",
    "model": "Beetle",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 614,
    "make": "BYD",
    "model": "XC90",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 615,
    "make": "Fiat",
    "model": "Durango",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 616,
    "make": "Ford",
    "model": "1",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 617,
    "make": "Polestar",
    "model": "2",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 618,
    "make": "Nissan",
    "model": "CTS",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 619,
    "make": "Bugatti",
    "model": "F-150",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 620,
    "make": "Aston Martin",
    "model": "Spyder",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 621,
    "make": "Volvo",
    "model": "911",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 622,
    "make": "Mazda",
    "model": "LeBaron",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 623,
    "make": "Chrysler",
    "model": "1",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 624,
    "make": "Ford",
    "model": "Model X",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 625,
    "make": "Tesla",
    "model": "911",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 626,
    "make": "Suzuki",
    "model": "Model T",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 627,
    "make": "BYD",
    "model": "XC90",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 628,
    "make": "Volkswagen",
    "model": "XC90",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 629,
    "make": "Maserati",
    "model": "XTS",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 630,
    "make": "Smart",
    "model": "Charger",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 631,
    "make": "Smart",
    "model": "Altima",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 632,
    "make": "NIO",
    "model": "Sentra",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 633,
    "make": "Chevrolet",
    "model": "911",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 634,
    "make": "Mitsubishi",
    "model": "Grand Caravan",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 635,
    "make": "MG",
    "model": "Fiesta",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 636,
    "make": "Land Rover",
    "model": "Golf",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 637,
    "make": "Mercedes Benz",
    "model": "Mustang",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 638,
    "make": "Chevrolet",
    "model": "Focus",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 639,
    "make": "BYD",
    "model": "Beetle",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 640,
    "make": "Mercedes Benz",
    "model": "Mustang",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 641,
    "make": "Tesla",
    "model": "Ranchero",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 642,
    "make": "Kia",
    "model": "CX-9",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 643,
    "make": "Audi",
    "model": "Escalade",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 644,
    "make": "Polestar",
    "model": "Charger",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 645,
    "make": "Skoda",
    "model": "Model S",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 646,
    "make": "BYD",
    "model": "Volt",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 647,
    "make": "Chrysler",
    "model": "Aventador",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 648,
    "make": "Vauxhall",
    "model": "2",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 649,
    "make": "Chrysler",
    "model": "XC90",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 650,
    "make": "MG",
    "model": "XTS",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 651,
    "make": "Mitsubishi",
    "model": "A8",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 652,
    "make": "Aston Martin",
    "model": "Spyder",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 653,
    "make": "Volvo",
    "model": "Jetta",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 654,
    "make": "Citroën",
    "model": "Ranchero",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 655,
    "make": "Vauxhall",
    "model": "Colorado",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 656,
    "make": "Jeep",
    "model": "Sentra",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 657,
    "make": "Chevrolet",
    "model": "Charger",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 658,
    "make": "Chevrolet",
    "model": "Escalade",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 659,
    "make": "Tesla",
    "model": "Accord",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 660,
    "make": "Subaru",
    "model": "LeBaron",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 661,
    "make": "Bugatti",
    "model": "Escalade",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 662,
    "make": "Jaguar",
    "model": "Alpine",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 663,
    "make": "Volvo",
    "model": "PT Cruiser",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 664,
    "make": "BYD",
    "model": "A8",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 665,
    "make": "Smart",
    "model": "Roadster",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 666,
    "make": "Volkswagen",
    "model": "Mercielago",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 667,
    "make": "Chrysler",
    "model": "Mercielago",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 668,
    "make": "Hyundai",
    "model": "Accord",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 669,
    "make": "MG",
    "model": "Fiesta",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 670,
    "make": "Citroën",
    "model": "2",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 671,
    "make": "Bentley",
    "model": "XTS",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 672,
    "make": "Rivian",
    "model": "Prius",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 673,
    "make": "Skoda",
    "model": "Model T",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 674,
    "make": "Smart",
    "model": "Malibu",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 675,
    "make": "Bugatti",
    "model": "Sentra",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 676,
    "make": "Subaru",
    "model": "ATS",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 677,
    "make": "MG",
    "model": "PT Cruiser",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 678,
    "make": "Maruti",
    "model": "Model X",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 679,
    "make": "Nissan",
    "model": "Volt",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 680,
    "make": "Land Rover",
    "model": "Sentra",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 681,
    "make": "Fiat",
    "model": "Taurus",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 682,
    "make": "Audi",
    "model": "Malibu",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 683,
    "make": "Ferrari",
    "model": "CTS",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 684,
    "make": "Maserati",
    "model": "Fiesta",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 685,
    "make": "Kia",
    "model": "F-150",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 686,
    "make": "Mitsubishi",
    "model": "A4",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 687,
    "make": "Aston Martin",
    "model": "Camry",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 688,
    "make": "Polestar",
    "model": "Corvette",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 689,
    "make": "BYD",
    "model": "Countach",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 690,
    "make": "Mazda",
    "model": "Fiesta",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 691,
    "make": "Ford",
    "model": "XTS",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 692,
    "make": "Porsche",
    "model": "Jetta",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 693,
    "make": "Porsche",
    "model": "Focus",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 694,
    "make": "Bugatti",
    "model": "Model S",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 695,
    "make": "Peugeot",
    "model": "Countach",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 696,
    "make": "Cadillac",
    "model": "Jetta",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 697,
    "make": "Mitsubishi",
    "model": "Grand Caravan",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 698,
    "make": "Subaru",
    "model": "Expedition",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 699,
    "make": "Cadillac",
    "model": "Fortwo",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 700,
    "make": "Mercedes Benz",
    "model": "Challenger",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 701,
    "make": "Chevrolet",
    "model": "A8",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 702,
    "make": "Rolls Royce",
    "model": "XTS",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 703,
    "make": "Rolls Royce",
    "model": "Mustang",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 704,
    "make": "Peugeot",
    "model": "F-150",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 705,
    "make": "Maserati",
    "model": "CTS",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 706,
    "make": "NIO",
    "model": "Fiesta",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 707,
    "make": "Bugatti",
    "model": "Jetta",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 708,
    "make": "Nissan",
    "model": "Model T",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 709,
    "make": "Mitsubishi",
    "model": "El Camino",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 710,
    "make": "Rolls Royce",
    "model": "Durango",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 711,
    "make": "MG",
    "model": "CX-9",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 712,
    "make": "Lamborghini",
    "model": "Camaro",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 713,
    "make": "Chevrolet",
    "model": "2",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 714,
    "make": "Skoda",
    "model": "Element",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 715,
    "make": "Bentley",
    "model": "Model Y",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 716,
    "make": "Skoda",
    "model": "Camry",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 717,
    "make": "MG",
    "model": "Impala",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 718,
    "make": "Suzuki",
    "model": "Mustang",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 719,
    "make": "Skoda",
    "model": "Grand Cherokee",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 720,
    "make": "Rivian",
    "model": "Explorer",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 721,
    "make": "Porsche",
    "model": "Accord",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 722,
    "make": "Volvo",
    "model": "Fiesta",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 723,
    "make": "Chevrolet",
    "model": "Roadster",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 724,
    "make": "BYD",
    "model": "ATS",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 725,
    "make": "Subaru",
    "model": "Land Cruiser",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 726,
    "make": "Land Rover",
    "model": "Malibu",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 727,
    "make": "Smart",
    "model": "CX-9",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 728,
    "make": "Bugatti",
    "model": "Colorado",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 729,
    "make": "Bugatti",
    "model": "V90",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 730,
    "make": "Ford",
    "model": "Cruze",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 731,
    "make": "Suzuki",
    "model": "Cruze",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 732,
    "make": "Porsche",
    "model": "Golf",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 733,
    "make": "Volkswagen",
    "model": "2",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 734,
    "make": "Aston Martin",
    "model": "F-150",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 735,
    "make": "Bugatti",
    "model": "Model 3",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 736,
    "make": "Polestar",
    "model": "El Camino",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 737,
    "make": "Mazda",
    "model": "XTS",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 738,
    "make": "Mitsubishi",
    "model": "Colorado",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 739,
    "make": "Ford",
    "model": "Silverado",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 740,
    "make": "Skoda",
    "model": "F-150",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 741,
    "make": "Chevrolet",
    "model": "Mustang",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 742,
    "make": "Cadillac",
    "model": "Silverado",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 743,
    "make": "Peugeot",
    "model": "Altima",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 744,
    "make": "Lamborghini",
    "model": "Cruze",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 745,
    "make": "Polestar",
    "model": "Sentra",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 746,
    "make": "Vauxhall",
    "model": "Accord",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 747,
    "make": "Land Rover",
    "model": "Durango",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 748,
    "make": "BYD",
    "model": "Model X",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 749,
    "make": "Bugatti",
    "model": "LeBaron",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 750,
    "make": "Land Rover",
    "model": "Spyder",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 751,
    "make": "Chrysler",
    "model": "CTS",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 752,
    "make": "Volkswagen",
    "model": "Mercielago",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 753,
    "make": "Ford",
    "model": "Silverado",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 754,
    "make": "Mitsubishi",
    "model": "Escalade",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 755,
    "make": "Peugeot",
    "model": "Jetta",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 756,
    "make": "Jeep",
    "model": "Prius",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 757,
    "make": "Fiat",
    "model": "F-150",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 758,
    "make": "Nissan",
    "model": "V90",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 759,
    "make": "Mitsubishi",
    "model": "XTS",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 760,
    "make": "Land Rover",
    "model": "Volt",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 761,
    "make": "Chrysler",
    "model": "Land Cruiser",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 762,
    "make": "Ford",
    "model": "Model 3",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 763,
    "make": "Volkswagen",
    "model": "PT Cruiser",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 764,
    "make": "Lamborghini",
    "model": "Model 3",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 765,
    "make": "Porsche",
    "model": "1",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 766,
    "make": "BMW",
    "model": "Aventador",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 767,
    "make": "Dodge",
    "model": "Wrangler",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 768,
    "make": "Ford",
    "model": "Beetle",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 769,
    "make": "Audi",
    "model": "F-150",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 770,
    "make": "Audi",
    "model": "Countach",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 771,
    "make": "Jaguar",
    "model": "Escalade",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 772,
    "make": "Ferrari",
    "model": "2",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 773,
    "make": "Porsche",
    "model": "PT Cruiser",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 774,
    "make": "Maserati",
    "model": "Camry",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 775,
    "make": "Nissan",
    "model": "Durango",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 776,
    "make": "Citroën",
    "model": "Aventador",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 777,
    "make": "Mitsubishi",
    "model": "Alpine",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 778,
    "make": "Tata",
    "model": "Civic",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 779,
    "make": "BMW",
    "model": "Model S",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 780,
    "make": "Vauxhall",
    "model": "El Camino",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 781,
    "make": "Porsche",
    "model": "Civic",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 782,
    "make": "BMW",
    "model": "Model S",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 783,
    "make": "NIO",
    "model": "Focus",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 784,
    "make": "Porsche",
    "model": "Escalade",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 785,
    "make": "Land Rover",
    "model": "LeBaron",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 786,
    "make": "Nissan",
    "model": "Model S",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 787,
    "make": "Mazda",
    "model": "CX-9",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 788,
    "make": "Hyundai",
    "model": "A4",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 789,
    "make": "Chrysler",
    "model": "Corvette",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 790,
    "make": "Dodge",
    "model": "Aventador",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 791,
    "make": "Dodge",
    "model": "Cruze",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 792,
    "make": "Cadillac",
    "model": "V90",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 793,
    "make": "Toyota",
    "model": "Cruze",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 794,
    "make": "Ferrari",
    "model": "Wrangler",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 795,
    "make": "MG",
    "model": "Accord",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 796,
    "make": "BMW",
    "model": "Roadster",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 797,
    "make": "Mitsubishi",
    "model": "ATS",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 798,
    "make": "BMW",
    "model": "Wrangler",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 799,
    "make": "Polestar",
    "model": "Camaro",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 800,
    "make": "Subaru",
    "model": "Volt",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 801,
    "make": "Citroën",
    "model": "Accord",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 802,
    "make": "Peugeot",
    "model": "Countach",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 803,
    "make": "Smart",
    "model": "Prius",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 804,
    "make": "MG",
    "model": "CTS",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 805,
    "make": "Rolls Royce",
    "model": "Camaro",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 806,
    "make": "Rolls Royce",
    "model": "Model S",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 807,
    "make": "Vauxhall",
    "model": "Impala",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 808,
    "make": "Fiat",
    "model": "F-150",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 809,
    "make": "Rivian",
    "model": "Model 3",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 810,
    "make": "Honda",
    "model": "Escalade",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 811,
    "make": "Jaguar",
    "model": "Silverado",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 812,
    "make": "Nissan",
    "model": "Charger",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 813,
    "make": "Chrysler",
    "model": "ATS",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 814,
    "make": "Land Rover",
    "model": "Cruze",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 815,
    "make": "Volvo",
    "model": "Accord",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 816,
    "make": "Maserati",
    "model": "Malibu",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 817,
    "make": "Cadillac",
    "model": "2",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 818,
    "make": "Toyota",
    "model": "CTS",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 819,
    "make": "Smart",
    "model": "Altima",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 820,
    "make": "Rivian",
    "model": "911",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 821,
    "make": "Suzuki",
    "model": "Accord",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 822,
    "make": "Ferrari",
    "model": "Grand Cherokee",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 823,
    "make": "Renault",
    "model": "El Camino",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 824,
    "make": "BYD",
    "model": "CTS",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 825,
    "make": "Nissan",
    "model": "Challenger",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 826,
    "make": "Tata",
    "model": "Malibu",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 827,
    "make": "Ford",
    "model": "Sentra",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 828,
    "make": "Rivian",
    "model": "Impala",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 829,
    "make": "Smart",
    "model": "Corvette",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 830,
    "make": "Toyota",
    "model": "Ranchero",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 831,
    "make": "Aston Martin",
    "model": "Mustang",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 832,
    "make": "Ferrari",
    "model": "Jetta",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 833,
    "make": "Ford",
    "model": "CX-9",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 834,
    "make": "Smart",
    "model": "Altima",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 835,
    "make": "Nissan",
    "model": "Model 3",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 836,
    "make": "Porsche",
    "model": "Wrangler",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 837,
    "make": "Rolls Royce",
    "model": "Golf",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 838,
    "make": "Polestar",
    "model": "Spyder",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 839,
    "make": "Maruti",
    "model": "Challenger",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 840,
    "make": "Honda",
    "model": "Explorer",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 841,
    "make": "Volvo",
    "model": "Fortwo",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 842,
    "make": "Tata",
    "model": "Camry",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 843,
    "make": "Rolls Royce",
    "model": "Model Y",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 844,
    "make": "Tesla",
    "model": "Altima",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 845,
    "make": "Peugeot",
    "model": "F-150",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 846,
    "make": "Mercedes Benz",
    "model": "Corvette",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 847,
    "make": "Chrysler",
    "model": "Grand Caravan",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 848,
    "make": "Maruti",
    "model": "Fortwo",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 849,
    "make": "Kia",
    "model": "Challenger",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 850,
    "make": "Volvo",
    "model": "Sentra",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 851,
    "make": "Peugeot",
    "model": "Ranchero",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 852,
    "make": "Honda",
    "model": "911",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 853,
    "make": "Mercedes Benz",
    "model": "A4",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 854,
    "make": "Jaguar",
    "model": "Challenger",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 855,
    "make": "Peugeot",
    "model": "Durango",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 856,
    "make": "BMW",
    "model": "XTS",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 857,
    "make": "Lamborghini",
    "model": "CTS",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 858,
    "make": "Peugeot",
    "model": "Taurus",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 859,
    "make": "Vauxhall",
    "model": "XTS",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 860,
    "make": "Jeep",
    "model": "Fortwo",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 861,
    "make": "Porsche",
    "model": "Mustang",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 862,
    "make": "Polestar",
    "model": "CTS",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 863,
    "make": "Honda",
    "model": "Spyder",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 864,
    "make": "BYD",
    "model": "Silverado",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 865,
    "make": "Mitsubishi",
    "model": "F-150",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 866,
    "make": "Hyundai",
    "model": "Cruze",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 867,
    "make": "Suzuki",
    "model": "Fortwo",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 868,
    "make": "BMW",
    "model": "Grand Caravan",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 869,
    "make": "Mazda",
    "model": "Camry",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 870,
    "make": "Citroën",
    "model": "XTS",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 871,
    "make": "Lamborghini",
    "model": "Impala",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 872,
    "make": "Audi",
    "model": "Cruze",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 873,
    "make": "Maruti",
    "model": "Element",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 874,
    "make": "Porsche",
    "model": "Roadster",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 875,
    "make": "Smart",
    "model": "Model 3",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 876,
    "make": "Vauxhall",
    "model": "Prius",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 877,
    "make": "Subaru",
    "model": "Mustang",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 878,
    "make": "Renault",
    "model": "A4",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 879,
    "make": "Lamborghini",
    "model": "Cruze",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 880,
    "make": "Bentley",
    "model": "El Camino",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 881,
    "make": "Mazda",
    "model": "911",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 882,
    "make": "Chrysler",
    "model": "Fortwo",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 883,
    "make": "Cadillac",
    "model": "Altima",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 884,
    "make": "Mahindra & Mahindra",
    "model": "911",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 885,
    "make": "Polestar",
    "model": "Wrangler",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 886,
    "make": "Chrysler",
    "model": "PT Cruiser",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 887,
    "make": "Mahindra & Mahindra",
    "model": "Grand Cherokee",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 888,
    "make": "Volkswagen",
    "model": "V90",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 889,
    "make": "Maruti",
    "model": "Grand Caravan",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 890,
    "make": "Cadillac",
    "model": "Durango",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 891,
    "make": "Rolls Royce",
    "model": "Accord",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 892,
    "make": "Volvo",
    "model": "Model 3",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 893,
    "make": "Ferrari",
    "model": "Beetle",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 894,
    "make": "Bentley",
    "model": "A4",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 895,
    "make": "Maserati",
    "model": "Taurus",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 896,
    "make": "Lamborghini",
    "model": "XC90",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 897,
    "make": "Suzuki",
    "model": "Focus",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 898,
    "make": "Suzuki",
    "model": "Escalade",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 899,
    "make": "Jeep",
    "model": "Sentra",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 900,
    "make": "Smart",
    "model": "Sentra",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 901,
    "make": "Dodge",
    "model": "CX-9",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 902,
    "make": "Volvo",
    "model": "Focus",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 903,
    "make": "Vauxhall",
    "model": "Accord",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 904,
    "make": "Toyota",
    "model": "XC90",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 905,
    "make": "Volvo",
    "model": "Focus",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 906,
    "make": "Mercedes Benz",
    "model": "El Camino",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 907,
    "make": "Audi",
    "model": "V90",
    "year": 2017,
    "veh_listing_type": "Used"
  },
  {
    "id": 908,
    "make": "Smart",
    "model": "F-150",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 909,
    "make": "Rolls Royce",
    "model": "Expedition",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 910,
    "make": "BYD",
    "model": "Sentra",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 911,
    "make": "Land Rover",
    "model": "XC90",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 912,
    "make": "Fiat",
    "model": "F-150",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 913,
    "make": "Aston Martin",
    "model": "Mercielago",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 914,
    "make": "Bugatti",
    "model": "Taurus",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 915,
    "make": "Mercedes Benz",
    "model": "Mercielago",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 916,
    "make": "Cadillac",
    "model": "Taurus",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 917,
    "make": "BYD",
    "model": "Charger",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 918,
    "make": "BMW",
    "model": "Ranchero",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 919,
    "make": "Kia",
    "model": "Aventador",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 920,
    "make": "Citroën",
    "model": "Fortwo",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 921,
    "make": "Nissan",
    "model": "ATS",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 922,
    "make": "Mazda",
    "model": "911",
    "year": 2023,
    "veh_listing_type": "Used"
  },
  {
    "id": 923,
    "make": "Mahindra & Mahindra",
    "model": "Model S",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 924,
    "make": "Volvo",
    "model": "XTS",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 925,
    "make": "Jeep",
    "model": "Taurus",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 926,
    "make": "MG",
    "model": "Land Cruiser",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 927,
    "make": "Suzuki",
    "model": "A8",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 928,
    "make": "Skoda",
    "model": "Land Cruiser",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 929,
    "make": "Vauxhall",
    "model": "Roadster",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 930,
    "make": "Chevrolet",
    "model": "XTS",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 931,
    "make": "Renault",
    "model": "911",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 932,
    "make": "Smart",
    "model": "Model S",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 933,
    "make": "Suzuki",
    "model": "Aventador",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 934,
    "make": "Chevrolet",
    "model": "Charger",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 935,
    "make": "Tata",
    "model": "A4",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 936,
    "make": "Suzuki",
    "model": "Camry",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 937,
    "make": "Maserati",
    "model": "Expedition",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 938,
    "make": "Polestar",
    "model": "XC90",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 939,
    "make": "Mini",
    "model": "Model S",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 940,
    "make": "Tata",
    "model": "Fortwo",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 941,
    "make": "Aston Martin",
    "model": "Alpine",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 942,
    "make": "Mahindra & Mahindra",
    "model": "Sentra",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 943,
    "make": "Mazda",
    "model": "Beetle",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 944,
    "make": "Bentley",
    "model": "Escalade",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 945,
    "make": "Subaru",
    "model": "Challenger",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 946,
    "make": "Volvo",
    "model": "Cruze",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 947,
    "make": "Skoda",
    "model": "Model T",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 948,
    "make": "Rolls Royce",
    "model": "Challenger",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 949,
    "make": "Skoda",
    "model": "1",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 950,
    "make": "Cadillac",
    "model": "Roadster",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 951,
    "make": "Volvo",
    "model": "ATS",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 952,
    "make": "Renault",
    "model": "Beetle",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 953,
    "make": "Toyota",
    "model": "Wrangler",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 954,
    "make": "Aston Martin",
    "model": "Alpine",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 955,
    "make": "Kia",
    "model": "Jetta",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 956,
    "make": "Suzuki",
    "model": "CX-9",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 957,
    "make": "Jeep",
    "model": "Mustang",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 958,
    "make": "Mahindra & Mahindra",
    "model": "Expedition",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 959,
    "make": "Porsche",
    "model": "Fiesta",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 960,
    "make": "Peugeot",
    "model": "Element",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 961,
    "make": "Porsche",
    "model": "Colorado",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 962,
    "make": "Aston Martin",
    "model": "LeBaron",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 963,
    "make": "Suzuki",
    "model": "Civic",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 964,
    "make": "Suzuki",
    "model": "Camaro",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 965,
    "make": "Mitsubishi",
    "model": "XTS",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 966,
    "make": "BMW",
    "model": "Mercielago",
    "year": 2016,
    "veh_listing_type": "New"
  },
  {
    "id": 967,
    "make": "Chrysler",
    "model": "Jetta",
    "year": 2017,
    "veh_listing_type": "New"
  },
  {
    "id": 968,
    "make": "Volvo",
    "model": "Charger",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 969,
    "make": "Nissan",
    "model": "Countach",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 970,
    "make": "BMW",
    "model": "CTS",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 971,
    "make": "Lamborghini",
    "model": "Camry",
    "year": 2019,
    "veh_listing_type": "New"
  },
  {
    "id": 972,
    "make": "Mahindra & Mahindra",
    "model": "Alpine",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 973,
    "make": "Audi",
    "model": "Fortwo",
    "year": 2020,
    "veh_listing_type": "Used"
  },
  {
    "id": 974,
    "make": "Nissan",
    "model": "Countach",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 975,
    "make": "Aston Martin",
    "model": "Corvette",
    "year": 2020,
    "veh_listing_type": "New"
  },
  {
    "id": 976,
    "make": "Hyundai",
    "model": "Camaro",
    "year": 2024,
    "veh_listing_type": "Used"
  },
  {
    "id": 977,
    "make": "Maserati",
    "model": "Alpine",
    "year": 2021,
    "veh_listing_type": "New"
  },
  {
    "id": 978,
    "make": "Cadillac",
    "model": "Grand Caravan",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 979,
    "make": "Hyundai",
    "model": "F-150",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 980,
    "make": "Rolls Royce",
    "model": "Countach",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 981,
    "make": "Audi",
    "model": "Model S",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 982,
    "make": "Ford",
    "model": "CX-9",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 983,
    "make": "BMW",
    "model": "Alpine",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 984,
    "make": "Renault",
    "model": "XTS",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 985,
    "make": "Fiat",
    "model": "ATS",
    "year": 2022,
    "veh_listing_type": "New"
  },
  {
    "id": 986,
    "make": "Aston Martin",
    "model": "V90",
    "year": 2019,
    "veh_listing_type": "Used"
  },
  {
    "id": 987,
    "make": "BYD",
    "model": "Durango",
    "year": 2021,
    "veh_listing_type": "Used"
  },
  {
    "id": 988,
    "make": "Audi",
    "model": "XTS",
    "year": 2015,
    "veh_listing_type": "New"
  },
  {
    "id": 989,
    "make": "Maruti",
    "model": "Fortwo",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 990,
    "make": "Ferrari",
    "model": "Camry",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 991,
    "make": "Lamborghini",
    "model": "V90",
    "year": 2015,
    "veh_listing_type": "Used"
  },
  {
    "id": 992,
    "make": "Land Rover",
    "model": "Jetta",
    "year": 2016,
    "veh_listing_type": "Used"
  },
  {
    "id": 993,
    "make": "Chrysler",
    "model": "XTS",
    "year": 2018,
    "veh_listing_type": "New"
  },
  {
    "id": 994,
    "make": "Honda",
    "model": "Jetta",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 995,
    "make": "MG",
    "model": "Model T",
    "year": 2024,
    "veh_listing_type": "New"
  },
  {
    "id": 996,
    "make": "Ford",
    "model": "Volt",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 997,
    "make": "BMW",
    "model": "Taurus",
    "year": 2018,
    "veh_listing_type": "Used"
  },
  {
    "id": 998,
    "make": "Nissan",
    "model": "Focus",
    "year": 2022,
    "veh_listing_type": "Used"
  },
  {
    "id": 999,
    "make": "Maruti",
    "model": "XC90",
    "year": 2023,
    "veh_listing_type": "New"
  },
  {
    "id": 1000,
    "make": "Jaguar",
    "model": "Charger",
    "year": 2021,
    "veh_listing_type": "New"
  }
];
