/* Centralized Hostel Data */
// Grouped by Location: Amamoma, Kwaprow, Apewosika, Abura, Ola, North Campus

const locations = ["Amamoma", "Kwaprow", "Apewosika", "Abura", "Ola", "North Campus"];

const hostels = [
    // ==========================================
    // 📍 AMAMOMA
    // ==========================================
    {
        id: 1,
        name: "Mercy Hostel",
        location: "Amamoma",
        price: 4500,
        roomType: "4-in-a-room",
        description: "A secure and quiet environment perfect for studying, located just 5 minutes from the university gate.",
        images: [
            "img/Sagamar Inn.jpg",
            "img/Restroom 2.jpg"
        ],
        video: "",
        amenities: ["Wi-Fi", "Water", "Security", "Kitchen", "Wardrobe"],
        availability: "Available",
        manager: {
            name: "Demo Manager A",
            phone: "0240000001",
            whatsapp: "233240000001",
            email: "manager.a@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Mercy Hostel Ent",
            momoNumber: "0240000001"
        }
    },
    {
        id: 2,
        name: "Edi Bee Hostel",
        location: "Amamoma",
        price: 5200,
        roomType: "2-in-a-room",
        description: "Premium accommodation with spacious rooms and reliable electricity.",
        images: [
            "img/download.jpguu.jpg",
            "img/download (1).jpghj.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Generator", "Study table"],
        availability: "Available",
        manager: {
            name: "Demo Manager B",
            phone: "0240000002",
            whatsapp: "233240000002",
            email: "manager.b@example.com"
        },
        paymentDetails: {
            momoNetwork: "Vodafone Cash",
            momoName: "Edi Bee Rentals",
            momoNumber: "0200000002"
        }
    },

    {
        id: 1,
        name: "Mercy Hostel",
        location: "Amamoma",
        price: 4500,
        roomType: "4-in-a-room",
        description: "A secure and quiet environment perfect for studying, located just 5 minutes from the university gate.",
        images: [
            "img/Best Modern Girls’ Hostel in Greater Noida _ Anandam Hostel.jpg",
            "img/hf.jpg"
        ],
        video: "",
        amenities: ["Wi-Fi", "Water", "Security", "Kitchen", "Wardrobe"],
        availability: "Available",
        manager: {
            name: "Demo Manager A",
            phone: "0240000001",
            whatsapp: "233240000001",
            email: "manager.a@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Mercy Hostel Ent",
            momoNumber: "0240000001"
        }
    },
    {
        id: 2,
        name: "Edi Bee Hostel",
        location: "Amamoma",
        price: 5200,
        roomType: "2-in-a-room",
        description: "Premium accommodation with spacious rooms and reliable electricity.",
        images: [
            "img/Spark by Hilton Brandon in Brandon from $77.jpg",
            "img/Restroom 2.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Generator", "Study table"],
        availability: "Available",
        manager: {
            name: "Demo Manager B",
            phone: "0240000002",
            whatsapp: "233240000002",
            email: "manager.b@example.com"
        },
        paymentDetails: {
            momoNetwork: "Vodafone Cash",
            momoName: "Edi Bee Rentals",
            momoNumber: "0200000002"
        }
    },

    {
        id: 1,
        name: "Mercy Hostel",
        location: "Amamoma",
        price: 4500,
        roomType: "4-in-a-room",
        description: "A secure and quiet environment perfect for studying, located just 5 minutes from the university gate.",
        images: [
            "img/Restroom 2.jpg",
            "img/hf.jpg"
        ],
        video: "",
        amenities: ["Wi-Fi", "Water", "Security", "Kitchen", "Wardrobe"],
        availability: "Available",
        manager: {
            name: "Demo Manager A",
            phone: "0240000001",
            whatsapp: "233240000001",
            email: "manager.a@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Mercy Hostel Ent",
            momoNumber: "0240000001"
        }
    },
    {
        id: 2,
        name: "Edi Bee Hostel",
        location: "Amamoma",
        price: 5200,
        roomType: "2-in-a-room",
        description: "Premium accommodation with spacious rooms and reliable electricity.",
        images: [
            "img/download.jpghh.jpg",
            "img/download.jpgff.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Generator", "Study table"],
        availability: "Available",
        manager: {
            name: "Demo Manager B",
            phone: "0240000002",
            whatsapp: "233240000002",
            email: "manager.b@example.com"
        },
        paymentDetails: {
            momoNetwork: "Vodafone Cash",
            momoName: "Edi Bee Rentals",
            momoNumber: "0200000002"
        }
    },

    {
        id: 1,
        name: "Mercy Hostel",
        location: "Amamoma",
        price: 4500,
        roomType: "4-in-a-room",
        description: "A secure and quiet environment perfect for studying, located just 5 minutes from the university gate.",
        images: [
            "img/Spark by Hilton Brandon in Brandon from $77.jpg",
            "img/download.jpg"
        ],
        video: "",
        amenities: ["Wi-Fi", "Water", "Security", "Kitchen", "Wardrobe"],
        availability: "Available",
        manager: {
            name: "Demo Manager A",
            phone: "0240000001",
            whatsapp: "233240000001",
            email: "manager.a@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Mercy Hostel Ent",
            momoNumber: "0240000001"
        }
    },
    {
        id: 2,
        name: "Edi Bee Hostel",
        location: "Amamoma",
        price: 5200,
        roomType: "2-in-a-room",
        description: "Premium accommodation with spacious rooms and reliable electricity.",
        images: [
            "img/Best Modern Girls’ Hostel in Greater Noida _ Anandam Hostel (1).jpg",
            "img/Sagamar Inn.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Generator", "Study table"],
        availability: "Available",
        manager: {
            name: "Demo Manager B",
            phone: "0240000002",
            whatsapp: "233240000002",
            email: "manager.b@example.com"
        },
        paymentDetails: {
            momoNetwork: "Vodafone Cash",
            momoName: "Edi Bee Rentals",
            momoNumber: "0200000002"
        }
    },

    {
        id: 1,
        name: "Mercy Hostel",
        location: "Amamoma",
        price: 4500,
        roomType: "4-in-a-room",
        description: "A secure and quiet environment perfect for studying, located just 5 minutes from the university gate.",
        images: [
            "img/The Hosteller Jaipur, City Centre.jpg",
            "img/hf.jpg"
        ],
        video: "",
        amenities: ["Wi-Fi", "Water", "Security", "Kitchen", "Wardrobe"],
        availability: "Available",
        manager: {
            name: "Demo Manager A",
            phone: "0240000001",
            whatsapp: "233240000001",
            email: "manager.a@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Mercy Hostel Ent",
            momoNumber: "0240000001"
        }
    },
    {
        id: 2,
        name: "Edi Bee Hostel",
        location: "Amamoma",
        price: 5200,
        roomType: "2-in-a-room",
        description: "Premium accommodation with spacious rooms and reliable electricity.",
        images: [
            "img/HOTEL IDEAL 2.jpg",
            "img/Sagamar Inn.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Generator", "Study table"],
        availability: "Available",
        manager: {
            name: "Demo Manager B",
            phone: "0240000002",
            whatsapp: "233240000002",
            email: "manager.b@example.com"
        },
        paymentDetails: {
            momoNetwork: "Vodafone Cash",
            momoName: "Edi Bee Rentals",
            momoNumber: "0200000002"
        }
    },





    // ==========================================
    // 📍 KWAPROW
    // ==========================================
    {
        id: 3,
        name: "Comfort Hostel",
        location: "Kwaprow",
        price: 3800,
        roomType: "4-in-a-room",
        description: "Affordable and highly social hostel in the heart of Kwaprow.",
        images: [
            "img/download.jpguu.jpg",
            "img/download.jpghjj.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Balcony"],
        availability: "Available",
        manager: {
            name: "Demo Manager C",
            phone: "0240000003",
            whatsapp: "233240000003",
            email: "manager.c@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Comfort Accommodations",
            momoNumber: "0240000003"
        }
    },
    {
        id: 4,
        name: "Royal Palace Hostel",
        location: "Kwaprow",
        price: 4200,
        roomType: "2-in-a-room",
        description: "Modern living space with calm study surroundings in Kwaprow.",
        images: [
            "img/Sagamar Inn.jpg",
            "img/HOTEL IDEAL 2.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Wi-Fi"],
        availability: "Available",
        manager: {
            name: "Demo Manager D",
            phone: "0240000004",
            whatsapp: "233240000004",
            email: "manager.d@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Royal Palace",
            momoNumber: "0240000004"
        }
    },

    {
        id: 3,
        name: "Comfort Hostel",
        location: "Kwaprow",
        price: 3800,
        roomType: "4-in-a-room",
        description: "Affordable and highly social hostel in the heart of Kwaprow.",
        images: [
            "img/download.jpguu.jpg",
            "img/download.jpghjj.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Balcony"],
        availability: "Available",
        manager: {
            name: "Demo Manager C",
            phone: "0240000003",
            whatsapp: "233240000003",
            email: "manager.c@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Comfort Accommodations",
            momoNumber: "0240000003"
        }
    },
    {
        id: 4,
        name: "Royal Palace Hostel",
        location: "Kwaprow",
        price: 4200,
        roomType: "2-in-a-room",
        description: "Modern living space with calm study surroundings in Kwaprow.",
        images: [
            "img/Spark by Hilton Brandon in Brandon from $77.jpg",
        
        "img/hf.jpg"],
        video: "",
        amenities: ["Water", "Security", "Wi-Fi"],
        availability: "Available",
        manager: {
            name: "Demo Manager D",
            phone: "0240000004",
            whatsapp: "233240000004",
            email: "manager.d@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Royal Palace",
            momoNumber: "0240000004"
        }
    },

    {
        id: 3,
        name: "Comfort Hostel",
        location: "Kwaprow",
        price: 3800,
        roomType: "4-in-a-room",
        description: "Affordable and highly social hostel in the heart of Kwaprow.",
        images: [
            "img/download.jpguu.jpg",
            "img/Restroom 2.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Balcony"],
        availability: "Available",
        manager: {
            name: "Demo Manager C",
            phone: "0240000003",
            whatsapp: "233240000003",
            email: "manager.c@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Comfort Accommodations",
            momoNumber: "0240000003"
        }
    },
    {
        id: 4,
        name: "Royal Palace Hostel",
        location: "Kwaprow",
        price: 4200,
        roomType: "2-in-a-room",
        description: "Modern living space with calm study surroundings in Kwaprow.",
        images: [
            "img/HOSTEL CHIC.jpg",
             "img/Restroom 2.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Wi-Fi"],
        availability: "Available",
        manager: {
            name: "Demo Manager D",
            phone: "0240000004",
            whatsapp: "233240000004",
            email: "manager.d@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Royal Palace",
            momoNumber: "0240000004"
        }
    },



    // ==========================================
    // 📍 APEWOSIKA
    // ==========================================
    {
        id: 5,
        name: "Apewosika Haven",
        location: "Apewosika",
        price: 4000,
        roomType: "2-in-a-room",
        description: "Close to main campus lectures with tight security.",
        images: [
            "img/download.jpghh.jpg",
            "img/download.jpghjj.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Study Room"],
        availability: "Available",
        manager: {
            name: "Demo Manager E",
            phone: "0240000005",
            whatsapp: "233240000005",
            email: "manager.e@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Apewosika Haven",
            momoNumber: "0240000005"
        }
    },

     {
        id: 5,
        name: "Apewosika Haven",
        location: "Apewosika",
        price: 4000,
        roomType: "2-in-a-room",
        description: "Close to main campus lectures with tight security.",
        images: [
            "img/Best Modern Girls’ Hostel in Greater Noida _ Anandam Hostel.jpg",
            "img/download.jpghh.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Study Room"],
        availability: "Available",
        manager: {
            name: "Demo Manager E",
            phone: "0240000005",
            whatsapp: "233240000005",
            email: "manager.e@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Apewosika Haven",
            momoNumber: "0240000005"
        }
    },

     {
        id: 5,
        name: "Apewosika Haven",
        location: "Apewosika",
        price: 4000,
        roomType: "2-in-a-room",
        description: "Close to main campus lectures with tight security.",
        images: [
            "images/apewosika-haven-1.jpg",
            "img/download.jpgff.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Study Room"],
        availability: "Available",
        manager: {
            name: "Demo Manager E",
            phone: "0240000005",
            whatsapp: "233240000005",
            email: "manager.e@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Apewosika Haven",
            momoNumber: "0240000005"
        }
    },

     {
        id: 5,
        name: "Apewosika Haven",
        location: "Apewosika",
        price: 4000,
        roomType: "2-in-a-room",
        description: "Close to main campus lectures with tight security.",
        images: [
            "img/Restroom 2.jpg",
            "img/hf.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Study Room"],
        availability: "Available",
        manager: {
            name: "Demo Manager E",
            phone: "0240000005",
            whatsapp: "233240000005",
            email: "manager.e@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Apewosika Haven",
            momoNumber: "0240000005"
        }
    },

    // ==========================================
    // 📍 ABURA
    // ==========================================
    {
        id: 6,
        name: "Abura Residency",
        location: "Abura",
        price: 3500,
        roomType: "4-in-a-room",
        description: "Spacious compound with constant water supply.",
        images: [
            "img/HOSTEL CHIC.jpg",
            "img/HOSTEL CHIC.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Kitchen"],
        availability: "Available",
        manager: {
            name: "Demo Manager F",
            phone: "0240000006",
            whatsapp: "233240000006",
            email: "manager.f@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Abura Residency",
            momoNumber: "0240000006"
        }
    },

     {
        id: 6,
        name: "Abura Residency",
        location: "Abura",
        price: 3500,
        roomType: "4-in-a-room",
        description: "Spacious compound with constant water supply.",
        images: [
            "img/Sagamar Inn.jpg",
            "img/HOSTEL CHIC.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Kitchen"],
        availability: "Available",
        manager: {
            name: "Demo Manager F",
            phone: "0240000006",
            whatsapp: "233240000006",
            email: "manager.f@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Abura Residency",
            momoNumber: "0240000006"
        }
    },

     {
        id: 6,
        name: "Abura Residency",
        location: "Abura",
        price: 3500,
        roomType: "4-in-a-room",
        description: "Spacious compound with constant water supply.",
        images: [
            "img/Spark by Hilton Brandon in Brandon from $77.jpg",
            "img/hf.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Kitchen"],
        availability: "Available",
        manager: {
            name: "Demo Manager F",
            phone: "0240000006",
            whatsapp: "233240000006",
            email: "manager.f@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Abura Residency",
            momoNumber: "0240000006"
        }
    },

     {
        id: 6,
        name: "Abura Residency",
        location: "Abura",
        price: 3500,
        roomType: "4-in-a-room",
        description: "Spacious compound with constant water supply.",
        images: [
            "img/Working Women Hostel Chennai.jpg",
            "img/Restroom 2.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Kitchen"],
        availability: "Available",
        manager: {
            name: "Demo Manager F",
            phone: "0240000006",
            whatsapp: "233240000006",
            email: "manager.f@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Abura Residency",
            momoNumber: "0240000006"
        }
    },

     {
        id: 6,
        name: "Abura Residency",
        location: "Abura",
        price: 3500,
        roomType: "4-in-a-room",
        description: "Spacious compound with constant water supply.",
        images: [
            "img/HOTEL IDEAL 2.jpg",
            "img/Restroom 2.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Kitchen"],
        availability: "Available",
        manager: {
            name: "Demo Manager F",
            phone: "0240000006",
            whatsapp: "233240000006",
            email: "manager.f@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Abura Residency",
            momoNumber: "0240000006"
        }
    },

    // ==========================================
    // 📍 OLA
    // ==========================================
    {
        id: 7,
        name: "Ola Sunset Villa",
        location: "Ola",
        price: 4800,
        roomType: "2-in-a-room",
        description: "Quiet and serene atmosphere near the ocean side.",
        images: [
            "img/Restroom 2.jpg",
            "img/Spark by Hilton Brandon in Brandon from $77.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Balcony", "Wi-Fi"],
        availability: "Available",
        manager: {
            name: "Demo Manager G",
            phone: "0240000007",
            whatsapp: "233240000007",
            email: "manager.g@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Ola Sunset",
            momoNumber: "0240000007"
        }
    },

     {
        id: 7,
        name: "Ola Sunset Villa",
        location: "Ola",
        price: 4800,
        roomType: "2-in-a-room",
        description: "Quiet and serene atmosphere near the ocean side.",
        images: [
            "img/download.jpg",
            "img/Sagamar Inn.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Balcony", "Wi-Fi"],
        availability: "Available",
        manager: {
            name: "Demo Manager G",
            phone: "0240000007",
            whatsapp: "233240000007",
            email: "manager.g@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Ola Sunset",
            momoNumber: "0240000007"
        }
    },

     {
        id: 7,
        name: "Ola Sunset Villa",
        location: "Ola",
        price: 4800,
        roomType: "2-in-a-room",
        description: "Quiet and serene atmosphere near the ocean side.",
        images: [
            "img/Best Modern Girls’ Hostel in Greater Noida _ Anandam Hostel.jpg",
            "img/download.jpghjj.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Balcony", "Wi-Fi"],
        availability: "Available",
        manager: {
            name: "Demo Manager G",
            phone: "0240000007",
            whatsapp: "233240000007",
            email: "manager.g@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Ola Sunset",
            momoNumber: "0240000007"
        }
    },

     {
        id: 7,
        name: "Ola Sunset Villa",
        location: "Ola",
        price: 4800,
        roomType: "2-in-a-room",
        description: "Quiet and serene atmosphere near the ocean side.",
        images: [
            "img/hf.jpg",
            "img/Restroom 2.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Balcony", "Wi-Fi"],
        availability: "Available",
        manager: {
            name: "Demo Manager G",
            phone: "0240000007",
            whatsapp: "233240000007",
            email: "manager.g@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "Ola Sunset",
            momoNumber: "0240000007"
        }
    },

    // ==========================================
    // 📍 NORTH CAMPUS
    // ==========================================
    {
        id: 8,
        name: "North Gate Lodge",
        location: "North Campus",
        price: 5000,
        roomType: "2-in-a-room",
        description: "Direct access to science blocks and lecture theatres.",
        images: [
            "img/Sagamar Inn.jpg",
           "img/Spark by Hilton Brandon in Brandon from $77.jpg"
        ],
        video: "",
        amenities: ["Water", "Security", "Generator", "Wi-Fi"],
        availability: "Available",
        manager: {
            name: "Demo Manager H",
            phone: "0240000008",
            whatsapp: "233240000008",
            email: "manager.h@example.com"
        },
        paymentDetails: {
            momoNetwork: "MTN Mobile Money",
            momoName: "North Gate Lodge",
            momoNumber: "0240000008"
        }
    }

    
];

// Attach globally to window
window.hostels = hostels;
window.locations = locations;