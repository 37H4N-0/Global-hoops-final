// MASTER PERFORMANCE ARCHIVE (100 BASKETBALL SHOE DATABASE ARRAY)
const shoeDatabase = [
    // --- NIKE KOBE LINE (1-15) ---
    { id: 1, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO 'REVERSE GRINCH'", price: 190, type: "SIGNATURE", tech: "ZOOM TURBO FOREFOOT + CUSHLON FOAM + MICRO-HERRINGBONE", date: "2023-12-15", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80" },
    { id: 2, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 8 PROTRO 'HALO'", price: 180, type: "SIGNATURE", tech: "REACT DROP-IN MIDSOLE + ENGINEERED MESH UPPER", date: "2023-08-23", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 3, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 4 PROTRO 'GIRL DAD'", price: 190, type: "SIGNATURE", tech: "HEEL ZOOM AIR + PHYLON DECK + PREMIUM SUEDE SHELL", date: "2024-06-07", img: "https://images.unsplash.com/photo-1514989940723-e8e5163ccbe8?w=500&q=80" },
    { id: 4, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 5 PROTRO 'BRUCE LEE'", price: 180, type: "SIGNATURE", tech: "ZOOM TURBO + CUSHLON FOAM + REINFORCED COUNTER", date: "2020-11-24", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80" },
    { id: 5, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO 'GRINCH'", price: 180, type: "SIGNATURE", tech: "FOREFOOT ZOOM TURBO + POLYURETHANE ISLAND SCALES", date: "2020-12-24", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80" },
    { id: 6, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO 'MAMBACITA'", price: 190, type: "SIGNATURE", tech: "ZOOM TURBO + CUSHLON FOAM + SNAKESKIN TEXTURED UPPER", date: "2022-05-01", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80" },
    { id: 7, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 8 PROTRO 'COURT PURPLE'", price: 180, type: "SIGNATURE", tech: "REACT drop-in core + full engineered mesh chassis", date: "2024-02-08", img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80" },
    { id: 8, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 4 PROTRO 'PHILLY'", price: 190, type: "SIGNATURE", tech: "FLYWIRE CABLES + HEEL ZOOM AIR + PHYLON MIDSOLE", date: "2024-04-13", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80" },
    { id: 9, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 5 PROTRO 'EYBL'", price: 180, type: "SIGNATURE", tech: "ZOOM TURBO + COMPSIT MATRIX LABS + DEEP GRIP", date: "2020-08-29", img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80" },
    { id: 10, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 8 PROTRO 'VENICE BEACH'", price: 180, type: "SIGNATURE", tech: "DROP IN FULL REACT CORE + TRACTION GRID FLANGES", date: "2024-04-13", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80" },
    { id: 11, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 4 PROTRO 'MAMBACITA'", price: 180, type: "SIGNATURE", tech: "HEEL ZOOM AIR + GINGHAM TRIBUTE TEXTILES + PHYLON", date: "2023-05-01", img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&q=80" },
    { id: 12, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO 'ALL-STAR'", price: 180, type: "SIGNATURE", tech: "ZOOM TURBO FOREFOOT + MICRO-HERRINGBONE HARDWOOD SPLIT", date: "2021-03-08", img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500&q=80" },
    { id: 13, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 5 PROTRO 'CHAOS'", price: 180, type: "SIGNATURE", tech: "UPGRADED ZOOM STROBEL DECK + CHASSIS TORSION CONTROLLER", date: "2020-01-03", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80" },
    { id: 14, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 4 PROTRO 'UNDEFEATED'", price: 180, type: "SIGNATURE", tech: "PATENT LEATHER CAPS + HEEL COMPRESSION ZOOM ASSEMBLY", date: "2019-08-24", img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500&q=80" },
    { id: 15, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO 'DEL SOL'", price: 180, type: "SIGNATURE", tech: "POLYURETHANE SCALES + SPEED MATRIX DOCKING FLAPS", date: "2021-06-03", img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&q=80" },

    // --- NIKE LEBRON LINE (16-28) ---
    { id: 16, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21 'AKOYA'", price: 200, type: "SIGNATURE", tech: "ZOOM TURBO FOREFOOT + 13MM HEEL ZOOM AIR + CUSHLON 2.0", date: "2023-09-28", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80" },
    { id: 17, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 22 'CROWN JEWEL'", price: 200, type: "SIGNATURE", tech: "MIDSOLE CUSHLON CELL + SPEED COMPRESSION UNITS", date: "2025-11-20", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80" },
    { id: 18, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21 'QUEEN CONCH'", price: 200, type: "SIGNATURE", tech: "PERFORATED ZONAL QUILTED UPPER + FULL-LENGTH CUSHLON CORE", date: "2024-02-08", img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80" },
    { id: 19, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 20 'TRINITY'", price: 200, type: "SIGNATURE", tech: "FOREFOOT ZOOM TURBO + HEEL MAX AIR 180 CHASSIS PACK", date: "2022-10-24", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80" },
    { id: 20, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21 'CONCHIOLIN'", price: 200, type: "SIGNATURE", tech: "CUSHLON 2.0 ENGINE + TOUGH MATRIX INTERNAL STRAP CABLE", date: "2023-12-19", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 21, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 20 'ASW'", price: 200, type: "SIGNATURE", tech: "SPHERE LINER APPARATUS + CARBON FIBER SHANK ELEMENT", date: "2023-02-16", img: "https://images.unsplash.com/photo-1514989940723-e8e5163ccbe8?w=500&q=80" },
    { id: 22, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21 'DRAGON PEARL'", price: 200, type: "SIGNATURE", tech: "360 DEGREES WIRE FRAME ZONAL PACKING + ZOOM STROBEL DECK", date: "2024-05-01", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80" },
    { id: 23, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON NXXT GEN 'AMPLIFIED'", price: 160, type: "SIGNATURE", tech: "FOREFOOT ZOOM TURBO + OPEN MESH ARMED EXOSKELETON", date: "2023-03-05", img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80" },
    { id: 24, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 20 'DEBUT'", price: 200, type: "SIGNATURE", tech: "AIR STROBEL LINING + REINFORCED HEEL STABILITY FLAPS", date: "2022-12-12", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80" },
    { id: 25, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21 'BLUE DIVER'", price: 200, type: "SIGNATURE", tech: "HYDRO-TACTILE LEATHER PACKING + FOREFOOT ZOOM TURBO STRUTS", date: "2024-03-15", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80" },
    { id: 26, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 18 'REFLECTIONS'", price: 200, type: "SIGNATURE", tech: "FULL LENGTH MAX AIR COUPLING + INTERTWINED ZOOM POD ENGINE", date: "2020-09-21", img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&q=80" },
    { id: 27, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON NXXT GEN 'GLITCH'", price: 160, type: "SIGNATURE", tech: "PHYLON SUPPORT FRAMEWAYS + CHASSIS DIRECTIONAL TREAD", date: "2023-06-18", img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500&q=80" },
    { id: 28, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 19 'SPACE JAM'", price: 200, type: "SIGNATURE", tech: "360 DEGREE DUAL MAX AIR SEED CHASSIS + TPU SHIELD", date: "2021-12-18", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80" },

    // --- NIKE KD LINE (29-38) ---
    { id: 29, brand: "NIKE", line: "KD SERIES", name: "KD 17 'SUNRISE'", price: 150, type: "SIGNATURE", tech: "FOREFOOT ZOOM AIR STROBEL + TPU SUPPORT ENVELOPE CAGE", date: "2024-05-17", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80" },
    { id: 30, brand: "NIKE", line: "KD SERIES", name: "KD 16 'AUNT PEARL'", price: 160, type: "SIGNATURE", tech: "HEEL AIR SOLE + FOREFOOT ZOOM AIR + AIR STROBEL LAYER", date: "2023-10-27", img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&q=80" },
    { id: 31, brand: "NIKE", line: "KD SERIES", name: "KD 17 'BREGMAN PROMO'", price: 160, type: "SIGNATURE", tech: "UPGRADED TPU LATERAL FLANGES + FOREFOOT AIR STROBEL WRAP", date: "2024-07-12", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 32, brand: "NIKE", line: "KD SERIES", name: "KD 15 'PRODUCER SERIES'", price: 150, type: "SIGNATURE", tech: "FULL ZOOM STROBEL DECK + CUSHLON CORES + SIDE COUNTERS", date: "2022-07-22", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80" },
    { id: 33, brand: "NIKE", line: "KD SERIES", name: "KD 16 'BARKA'", price: 160, type: "SIGNATURE", tech: "AIR STROBEL INNER MATRIX + SIDE THERMOPLASTIC RADIAL GEAR", date: "2023-11-15", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80" },
    { id: 34, brand: "NIKE", line: "KD SERIES", name: "KD 14 'KYACHU'", price: 150, type: "SIGNATURE", tech: "MIDFOOT GRIP COWL OVERLAY STRAP + ZOOM STROBEL INTERIOR", date: "2021-04-14", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80" },
    { id: 35, brand: "NIKE", line: "KD SERIES", name: "KD 17 'METALLIC GOLD'", price: 150, type: "SIGNATURE", tech: "CUSHLON MATRIX COMPONENT VENTS + REINFORCED STROBEL PACK", date: "2024-08-01", img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80" },
    { id: 36, brand: "NIKE", line: "KD SERIES", name: "KD 15 'AUNT PEARL'", price: 150, type: "SIGNATURE", tech: "FULL LENGTH ZOOM DECK STRUTS + MESH VENTILATOR ENGINES", date: "2022-11-18", img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&q=80" },
    { id: 37, brand: "NIKE", line: "KD SERIES", name: "KD 16 'EASY MONEY'", price: 160, type: "SIGNATURE", tech: "ZOOM FORWARD DRIVE UNITS + MIDFOOT SHANK PLATES TORSION", date: "2023-09-08", img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80" },
    { id: 38, brand: "NIKE", line: "KD SERIES", name: "KD 14 'SURREALISM'", price: 150, type: "SIGNATURE", tech: "CROSS PANEL RETENTION STRAP SYSTEM + PHYLON DECK ASSEMBLIES", date: "2021-07-10", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80" },

    // --- NIKE JA & SABRINA & BOOK LINES (39-50) ---
    { id: 39, brand: "NIKE", line: "JA SERIES", name: "JA 1 'HUNGER'", price: 110, type: "SIGNATURE", tech: "FOREFOOT ZOOM AIR + PHYLON ENGINE + SIDEWALL STABILIZERS", date: "2023-05-25", img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80" },
    { id: 40, brand: "NIKE", line: "JA SERIES", name: "JA 2 'NIGHTMARE'", price: 120, type: "SIGNATURE", tech: "RE-ENGINEERED COMPRESSION ZOOM + DYNAMIC LOCK PANEL", date: "2024-10-25", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80" },
    { id: 41, brand: "NIKE", line: "JA SERIES", name: "JA 1 'SCRAPBOOK'", price: 110, type: "SIGNATURE", tech: "PHYLON CUSHION BED + DEEP HERRINGBONE HARDWOOD OUTSOLE", date: "2023-11-03", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80" },
    { id: 42, brand: "NIKE", line: "JA SERIES", name: "JA 1 'CHINESE NEW YEAR'", price: 120, type: "SIGNATURE", tech: "ZOOM COMPRESSION RADIAL + EMBOSSED SIDE WALL COUNTER FRAMES", date: "2024-01-22", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 43, brand: "NIKE", line: "SABRINA SERIES", name: "SABRINA 1 'IONIC'", price: 130, type: "SIGNATURE", tech: "TOP-LOADED FOREFOOT ZOOM AIR + FULL REACT FOAM MIDSOLE", date: "2023-09-01", img: "https://images.unsplash.com/photo-1514989940723-e8e5163ccbe8?w=500&q=80" },
    { id: 44, brand: "NIKE", line: "SABRINA SERIES", name: "SABRINA 2 'COURT VISION'", price: 130, type: "SIGNATURE", tech: "CUSHLON 3.0 COMPOUND + HIGH-VELOCITY FOREFOOT ZOOM UNIT", date: "2024-06-28", img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80" },
    { id: 45, brand: "NIKE", line: "SABRINA SERIES", name: "SABRINA 1 'SPARK'", price: 130, type: "SIGNATURE", tech: "REACT CORE FOAM + EMBEDDED FOREFOOT ZOOM TRACK PLUGS", date: "2023-11-12", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80" },
    { id: 46, brand: "NIKE", line: "SABRINA SERIES", name: "SABRINA 2 'CONDUIT'", price: 130, type: "SIGNATURE", tech: "CUSHLON 3.0 SYSTEM + ULTRALIGHT ZONAL VENT CORES", date: "2024-09-05", img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&q=80" },
    { id: 47, brand: "NIKE", line: "BOOK SERIES", name: "BOOK 1 'MIRAGE'", price: 140, type: "SIGNATURE", tech: "HEEL ZOOM AIR CHASSIS + CUSHLON FLUID COMPONENT LAYER", date: "2024-02-17", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80" },
    { id: 48, brand: "NIKE", line: "BOOK SERIES", name: "BOOK 1 'HIKE'", price: 150, type: "SIGNATURE", tech: "SNAKESKIN TEXTURED REINFORCEMENT + RESPONSIVE HEEL SEED", date: "2024-04-06", img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&q=80" },
    { id: 49, brand: "NIKE", line: "BOOK SERIES", name: "BOOK 1 'HAVEN'", price: 140, type: "SIGNATURE", tech: "HEEL ZOOM UNIT + CANVAS WEAVE SHIELDS + PHYLON DECKS", date: "2024-04-06", img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500&q=80" },
    { id: 50, brand: "NIKE", line: "BOOK SERIES", name: "BOOK 1 'RATTLESNAKE'", price: 140, type: "SIGNATURE", tech: "CUSHLON CHASSIS SEEDS + SIDEWALL TPU ANTI TORQUE TABS", date: "2024-05-11", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80" },

    // --- JORDAN BRAND SIGNATURES (51-65) ---
    { id: 51, brand: "JORDAN BRAND", line: "TATUM SERIES", name: "TATUM 2 'VORTEX'", price: 125, type: "SIGNATURE", tech: "FULL-LENGTH AIR STROBEL + STRUCTURAL EXOSKELETON CORE", date: "2024-04-04", img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&q=80" },
    { id: 52, brand: "JORDAN BRAND", line: "TATUM SERIES", name: "TATUM 3 'ZERO DEGREE'", price: 125, type: "SIGNATURE", tech: "FLIGHT FRAME STRUCTURAL SHELL + ENHANCED COMFORT FOAM APPARATUS", date: "2024-10-10", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80" },
    { id: 53, brand: "JORDAN BRAND", line: "TATUM SERIES", name: "TATUM 1 'ZOO'", price: 120, type: "SIGNATURE", tech: "LIGHTWEIGHT FOAM GROUND FRAMEWAY + EMBEDDED FOREFOOT ZOOM POD", date: "2023-04-07", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80" },
    { id: 54, brand: "JORDAN BRAND", line: "TATUM SERIES", name: "TATUM 2 'LEGACY'", price: 125, type: "SIGNATURE", tech: "POD-BASED TPU OUTSOLE CASING + DOCKING STROBEL SHIELDS", date: "2024-03-05", img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500&q=80" },
    { id: 55, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "LUKA 2 'NEBULA'", price: 130, type: "SIGNATURE", tech: "FORMULA 23 FOAM + CUSHIONED EVA CRADLE + ISO-PLATE WALLS", date: "2023-07-11", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80" },
    { id: 56, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "LUKA 3 'MATADOR'", price: 130, type: "SIGNATURE", tech: "ISO-PLATE SEGMENT COUPLING + COMPLETE FORMULA 23 CORE", date: "2025-09-15", img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500&q=80" },
    { id: 57, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "LUKA 1 'BREED'", price: 110, type: "SIGNATURE", tech: "FORMULA 23 CUSHION MATRIX + FLIGHTWIRE LATERAL ANCHORS", date: "2022-09-03", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80" },
    { id: 58, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "LUKA 2 'LAKE BLED'", price: 130, type: "SIGNATURE", tech: "ISO PLATE TPU WRAPS + REINFORCED STYLISH UPPER MATS", date: "2023-09-14", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 59, brand: "JORDAN BRAND", line: "ZION SERIES", name: "ZION 3 'MUD, SWEAT, TEARS'", price: 140, type: "SIGNATURE", tech: "FORMULA 23 DROP-IN + FOREFOOT ZOOM AIR CHASSIS ASSEMBLY", date: "2023-12-01", img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&q=80" },
    { id: 60, brand: "JORDAN BRAND", line: "ZION SERIES", name: "ZION 2 'VODOO'", price: 120, type: "SIGNATURE", tech: "HEEL STROBEL STRUT CARRIERS + FOREFOOT ZOOM AIR ENGINE UNITS", date: "2022-06-22", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80" },
    { id: 61, brand: "JORDAN BRAND", line: "ZION SERIES", name: "ZION 3 'SADIE'", price: 140, type: "SIGNATURE", tech: "DROP IN COMPRESSION BASE FRAMEWAY + GRIP MULTI DIRECTION", date: "2024-02-20", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80" },
    { id: 62, brand: "JORDAN BRAND", line: "AIR JORDAN SE", name: "AIR JORDAN 38 'FIBA'", price: 200, type: "SIGNATURE", tech: "X-PLATE TORSION FRAMEWORK + FULL PACK ZOOM AIR STROBEL", date: "2023-09-07", img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&q=80" },
    { id: 63, brand: "JORDAN BRAND", line: "AIR JORDAN SE", name: "AIR JORDAN 39 'SOL'", price: 200, type: "SIGNATURE", tech: "FULL LENGTH ZOOM STROBEL + CORE COMPLETE INJECTED ZOOM FOAM", date: "2024-07-23", img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80" },
    { id: 64, brand: "JORDAN BRAND", line: "AIR JORDAN SE", name: "AIR JORDAN 37 'SATRE'", price: 185, type: "SIGNATURE", tech: "FORMULA 23 HEEL FOAMS + DUAL STRATIFIED FOREFOOT ZOOM PODS", date: "2022-09-15", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80" },
    { id: 65, brand: "JORDAN BRAND", line: "AIR JORDAN SE", name: "AIR JORDAN 36 'PSYCHIC'", price: 185, type: "SIGNATURE", tech: "JAQUARD WEAVE EXOSKELETONS + STRATIFIED ZOOM STROBEL PAD", date: "2021-09-16", img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80" },

    // --- ADIDAS SIGNATURES (66-78) ---
    { id: 66, brand: "ADIDAS", line: "AE SERIES", name: "AE 1 'VELOCITY BLUE'", price: 120, type: "SIGNATURE", tech: "JET BOOST RUNTIME CELLS + STABILIZING TPU PARABOLIC HULL", date: "2024-03-15", img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&q=80" },
    { id: 67, brand: "ADIDAS", line: "AE SERIES", name: "AE 1 LOW 'MURAL'", price: 110, type: "SIGNATURE", tech: "LOW-TOP LIGHTSTRIKE + INTEGRATED TPU AIR VENTILATION FLAPS", date: "2024-08-15", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80" },
    { id: 68, brand: "ADIDAS", line: "AE SERIES", name: "AE 1 'BEST OF ADI'", price: 120, type: "SIGNATURE", tech: "BOOST MATRIX + HERRINGBONE TREAD FOR OVERSIZED LATERAL CUTS", date: "2024-01-25", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80" },
    { id: 69, brand: "ADIDAS", line: "AE SERIES", name: "AE 1 LOW 'ASCENT'", price: 110, type: "SIGNATURE", tech: "JETBOOST INTERIOR BED + VENTILATED LATERAL CELL MESHES", date: "2024-07-20", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80" },
    { id: 70, brand: "ADIDAS", line: "HARDEN SERIES", name: "HARDEN VOL. 8 'PIONEER'", price: 160, type: "SIGNATURE", tech: "FULL INTERNAL BOOTIE STRUTS + HIGH-DENSITY SIDE WALLS", date: "2024-02-23", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 71, brand: "ADIDAS", line: "HARDEN SERIES", name: "HARDEN VOL. 8 'FLAMINGO'", price: 160, type: "SIGNATURE", tech: "JETBOOST FOAM + HIGH-WALL EVA STABILIZATION WINGS", date: "2024-04-15", img: "https://images.unsplash.com/photo-1514989940723-e8e5163ccbe8?w=500&q=80" },
    { id: 72, brand: "ADIDAS", line: "HARDEN SERIES", name: "HARDEN VOL. 7 'CREW ORANGE'", price: 160, type: "SIGNATURE", tech: "LIGHTSTRIKE FOAM + JETBOOST HEEL SYSTEM INTEGRATED UNIT", date: "2023-03-02", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80" },
    { id: 73, brand: "ADIDAS", line: "DON ISSUE SERIES", name: "DON ISSUE 6 'CAMP FIRE'", price: 120, type: "SIGNATURE", tech: "LIGHTSTRIKE PRO ENERGY CONVERSION + INTERNAL HEEL ANCHOR HARNESS", date: "2024-07-05", img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80" },
    { id: 74, brand: "ADIDAS", line: "DON ISSUE SERIES", name: "DON ISSUE 5 'BLUE SPHINX'", price: 120, type: "SIGNATURE", tech: "LIGHTSTRIKE ENGINES + TORSION PERIMETER STABILIZATION BARS", date: "2023-10-15", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80" },
    { id: 75, brand: "ADIDAS", line: "DAME SERIES", name: "DAME 8 EXTPLY 'OAC'", price: 130, type: "SIGNATURE", tech: "BOUNCE PRO CHASSIS ASSEMBLIES + WRAPPED HARDWOOD TIRES", date: "2023-09-01", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80" },
    { id: 76, brand: "ADIDAS", line: "DAME SERIES", name: "DAME 9 'PURPLE GLOW'", price: 120, type: "SIGNATURE", tech: "COMPLETE LIGHTSTRIKE PRO LINING STRUTS + COMFORT SHIELDS", date: "2024-10-01", img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&q=80" },
    { id: 77, brand: "ADIDAS", line: "TRAE YOUNG LINE", name: "TRAE YOUNG 3 'ASW'", price: 140, type: "SIGNATURE", tech: "COMPOSITE PARAMETRIC OUTSOLES + COMPRESSED SEED LAYERS", date: "2023-11-01", img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500&q=80" },
    { id: 78, brand: "ADIDAS", line: "TRAE YOUNG LINE", name: "TRAE 2 'CORE BLACK'", price: 130, type: "SIGNATURE", tech: "SCAGULATED SOCK PACK SEAMLESS + HEEL BOOST ACCELERATORS", date: "2022-10-01", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80" },

    // --- PUMA SIGNATURE LINES (79-85) ---
    { id: 79, brand: "PUMA", line: "MB SERIES", name: "MB.03 'LAFRANCE'", price: 125, type: "SIGNATURE", tech: "NITRO INFUSED FOAM RUNTIME + SLIME-WRAP HIGH TRACTION RADIAL", date: "2023-11-17", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80" },
    { id: 80, brand: "PUMA", line: "STEWIE SERIES", name: "STEWIE 3 'DAWN'", price: 120, type: "SIGNATURE", tech: "DUAL-DENSITY NITRO NITROGEN FLUID LAYER + REINFORCED TPU COWL", date: "2024-05-14", img: "https://images.unsplash.com/photo-1514989940723-e8e5163ccbe8?w=500&q=80" },
    { id: 81, brand: "PUMA", line: "MB SERIES", name: "MB.01 'RED BLAST'", price: 125, type: "SIGNATURE", tech: "NITRO FOAM POD PLUGS + HIGH STRATIFIED FABRIC COLLARS", date: "2021-12-16", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80" },
    { id: 82, brand: "PUMA", line: "MB SERIES", name: "MB.02 'SUPERNOVA'", price: 130, type: "SIGNATURE", tech: "INJECTED NITROGEN COMPOSITIONS + COMPOSITE GRIP WHEELS", date: "2022-10-21", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 83, brand: "PUMA", line: "SCOOT SERIES", name: "SCOOT ZER0 'GEORGIA PEACH'", price: 100, type: "SIGNATURE", tech: "PROFOAM LITE FOAM CORES + HIGH ABRASION STABILIZATION RIM", date: "2023-12-15", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80" },
    { id: 84, brand: "PUMA", line: "SCOOT SERIES", name: "SCOOT ZER0 'OREO'", price: 100, type: "SIGNATURE", tech: "PROFOAM REBOUND DRIVES + EXTENDED REAR REINFORCERS", date: "2024-04-02", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80" },
    { id: 85, brand: "PUMA", line: "RISE CORE", name: "ALL-PRO NITRO 'LIME'", price: 130, type: "SIGNATURE", tech: "FULL LENGTH NITROGEN BED DECK + TRADITIONAL RADIAL CARVERS", date: "2023-08-01", img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&q=80" },

    // --- NICHE INTERNATIONAL BOUTIQUE BRANDS (86-93) ---
    { id: 86, brand: "LI-NING", line: "WAY OF WADE", name: "WAY OF WADE 10 'MINT'", price: 225, type: "NICHE INTERNATIONAL", tech: "BOOM GAS INFUSED NITROGEN INTERIOR + CARBON PLATE DECK", date: "2022-07-15", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80" },
    { id: 87, brand: "ANTA", line: "KAI SERIES", name: "KAI 1 'ARTIST ON COURT'", price: 125, type: "NICHE INTERNATIONAL", tech: "NITROEDGE RESPONSIVE FOAM SEED FILL + MIDFOOT SHANK TORSION", date: "2024-03-06", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80" },
    { id: 88, brand: "LI-NING", line: "WAY OF WADE", name: "WAY OF WADE 11 'GOLD'", price: 230, type: "NICHE INTERNATIONAL", tech: "UPGRADED PEBA BOOM FLUID DOCKS + WRAPPED TORSION ARCHWAYS", date: "2024-09-20", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80" },
    { id: 89, brand: "LI-NING", line: "WAY OF WADE", name: "WADE ALL CITY 12 'SUNSHINE'", price: 140, type: "NICHE INTERNATIONAL", tech: "FOREFOOT BOOM CORE PAD + WRAPPED SIDEWALL POLYURETHANE CAPS", date: "2024-01-15", img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80" },
    { id: 90, brand: "361 DEGREES", line: "DVD SERIES", name: "DVD 2 'SPACETIME'", price: 100, type: "NICHE INTERNATIONAL", tech: "ENERGIZED SYSTEM CORES + MULTI ZONE TRADITIONAL TRACK SHIELD", date: "2023-11-05", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80" },
    { id: 91, brand: "RIGORER", line: "AR SERIES", name: "AR 1 'ICE CREAM'", price: 110, type: "NICHE INTERNATIONAL", tech: "PEBA NITROGEN FOAM PADS + ANTI-ROLL VERTICAL TPU BOUNDARIES", date: "2023-08-11", img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&q=80" },
    { id: 92, brand: "ANTA", line: "KT SERIES", name: "KT 9 'GOLDEN EMPIRE'", price: 150, type: "NICHE INTERNATIONAL", tech: "SMART ABSORPTION TRANSFER LAYER + FULL LENTH CARBON SPINE", date: "2023-10-12", img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500&q=80" },
    { id: 93, brand: "361 DEGREES", line: "BIG 3 CORE", name: "BIG 3 5.0 QUICK 'MINT'", price: 110, type: "NICHE INTERNATIONAL", tech: "QU!KFOAM STABILIZED COMPRESSION SYSTEM + RADIAL EDGE CUTS", date: "2024-05-18", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80" },

    // --- BUDGET & TEAM PLAYS (94-96) ---
    { id: 94, brand: "NIKE", line: "GT SERIES", name: "GT CUT ACADEMY 'WHITE ICE'", price: 95, type: "BUDGET / TEAM", tech: "FOREFOOT COMPRESSION ZOOM CELL + DUAL RENEW FOAM ELEMENTS", date: "2024-01-05", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80" },
    { id: 95, brand: "NIKE", line: "GIANNIS LINE", name: "GIANNIS IMMORTALITY 3 'NIGERIA'", price: 85, type: "BUDGET / TEAM", tech: "CURVED DECK SEED BASES + MIDFOOT INTEGRATED TENSION HARNESS", date: "2023-07-20", img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&q=80" },
    { id: 96, brand: "ADIDAS", line: "TEAM PROFILE", name: "DAME EXTPLY 2.0 'GREEN'", price: 90, type: "BUDGET / TEAM", tech: "BOUNCE SHOCK ABSORB MATRIX + FULL COMFORT STRATIFIED KNITS", date: "2022-06-01", img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80" },

    // --- FUTURE CALENDAR TIMELINES (97-100) ---
    { id: 97, brand: "ADIDAS", line: "AE SERIES", name: "ADIDAS AE 2 'FANGED RED'", price: 130, type: "SIGNATURE", tech: "METATARSAL BOUNCE INLAYS + MONO-MESH EXOSKELETAL FRAME", date: "2026-06-12", img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&q=80" },
    { id: 98, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 9 ELITE LOW PROTRO 'WNBA GOLD'", price: 210, type: "SIGNATURE", tech: "CARBON BOUND TORSIONAL FRAMEWAY + FLEXIBLE PLUSH FLYKNIT", date: "2026-07-08", img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80" },
    { id: 99, brand: "NIKE", line: "A'JA SIGNATURE", name: "NIKE A'TWO 'PREMIERE INAUGURAL'", price: 140, type: "SIGNATURE", tech: "FULL RUNTIME REACT PLUGS + LATERAL ANTI-ROLL FRAME GRIP", date: "2026-08-15", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80" },
    { id: 100, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "JORDAN LUKA 4 'VICTORY'", price: 140, type: "SIGNATURE", tech: "QUAD-DENSITY CORE ASSEMBLED CHASSIS + MULTI-STAGE ISO-PLATE", date: "2026-09-01", img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80" }
];

// INTERFACE APPLICATION MANAGEMENT STATE
let locker = JSON.parse(localStorage.getItem('ghLocker')) || [];
let compareList = [];
let currentFilter = "ALL";
let visibleItemsCount = 8; // Performance optimization buffer cap for screen loads
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80";

// METRIC TICK SYSTEM TIME TRACKER
function runSystemClock() {
    setInterval(() => {
        const timeStr = new Date().toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const clockEl = document.getElementById('system-clock');
        if(clockEl) clockEl.innerText = timeStr;
    }, 1000);
}

function getSystemDateString() {
    return new Date().toISOString().split('T')[0];
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
    window.scrollTo(0,0);
    
    if(pageId === 'collection') { resetAndRenderArchive(); }
    if(pageId === 'calendar') renderCalendar();
    if(pageId === 'locker') renderLocker();
}

function createCard(shoe) {
    const isFav = locker.includes(shoe.id);
    const isComp = compareList.includes(shoe.id);

    const card = document.createElement('div');
    card.className = 'shoe-card';
    card.onclick = () => openModal(shoe);
    card.innerHTML = `
        <div class="image-container">
            <button class="fav-btn ${isFav?'active':''}" onclick="toggleLocker(${shoe.id},event)">${isFav?'♥':'♡'}</button>
            <button class="comp-btn ${isComp?'active':''}" onclick="toggleCompare(${shoe.id},event)">VS</button>
            <img src="${shoe.img}" loading="lazy" onerror="this.src='${DEFAULT_IMAGE}'" alt="Asset">
        </div>
        <p style="color:var(--accent); font-weight:900; font-size:0.6rem; margin-top:12px; letter-spacing:1px;">${shoe.brand} // ${shoe.type}</p>
        <div class="shoe-name" style="font-weight:900; font-size:0.85rem; line-height:1.2;">${shoe.name}</div>
    `;
    return card;
}

// RENDERING PIPELINE FOR THE ARCHIVE (THROTTLED AT 8 PER PAGE LOAD)
function resetAndRenderArchive() {
    visibleItemsCount = 8; 
    renderArchive();
}

function renderArchive() {
    const grid = document.getElementById('archive-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (!grid) return;
    
    const query = document.getElementById('search-bar').value.toLowerCase();
    const todayStr = getSystemDateString();
    
    let controls = document.querySelector('.filter-subnav');
    if (!controls) {
        controls = document.createElement('div');
        controls.className = 'filter-subnav';
        controls.style.cssText = "padding: 15px 5%; display:flex; gap:10px; flex-wrap:wrap; background:var(--grey-light);";
        controls.innerHTML = `
            <button onclick="setArchiveFilter('ALL')" class="filter-tier-btn">ALL TIERS</button>
            <button onclick="setArchiveFilter('SIGNATURE')" class="filter-tier-btn">SIGNATURE</button>
            <button onclick="setArchiveFilter('BUDGET / TEAM')" class="filter-tier-btn">TEAM & BUDGET</button>
            <button onclick="setArchiveFilter('NICHE INTERNATIONAL')" class="filter-tier-btn">NICHE & INT</button>
        `;
        document.getElementById('main-header').appendChild(controls);
    }

    const releasedShoes = shoeDatabase.filter(shoe => shoe.date <= todayStr);
    const matches = releasedShoes.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(query) || s.brand.toLowerCase().includes(query) || s.line.toLowerCase().includes(query);
        const matchesCategory = (currentFilter === "ALL" || s.type === currentFilter);
        return matchesSearch && matchesCategory;
    });

    grid.innerHTML = '';
    const sliceToDisplay = matches.slice(0, visibleItemsCount);
    sliceToDisplay.forEach(s => grid.appendChild(createCard(s)));

    if (loadMoreBtn) {
        loadMoreBtn.style.display = (visibleItemsCount >= matches.length) ? 'none' : 'block';
    }

    if(matches.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:50px; opacity:0.5; font-weight:900;">NO RELEASES RECOVERED.</div>';
    }
}

function loadMoreShoes() {
    visibleItemsCount += 8; 
    renderArchive();
}

function setArchiveFilter(tier) {
    currentFilter = tier;
    resetAndRenderArchive();
}

// FUTURE SCHEDULE LOOK-AHEAD CALENDAR
function renderCalendar() {
    const list = document.getElementById('calendar-list');
    if (!list) return;
    list.innerHTML = '';
    const todayStr = getSystemDateString();

    const upcomingDrops = shoeDatabase.filter(shoe => shoe.date > todayStr)
                                      .sort((a,b) => new Date(a.date) - new Date(b.date));
    
    if(upcomingDrops.length === 0) {
        list.innerHTML = '<div style="text-align:center; padding:100px 0; opacity:0.5; font-weight:900;">NO FUTURE TRACKED ENTRIES IN PIPELINE.</div>';
        return;
    }

    upcomingDrops.forEach(shoe => {
        const dateParts = shoe.date.split('-');
        const item = document.createElement('div');
        item.className = 'calendar-item';
        item.innerHTML = `
            <div class="calendar-date">${dateParts[2]}<br><span style="font-size:0.7rem; color:var(--black)">MON ${dateParts[1]}</span></div>
            <img src="${shoe.img}" width="130" onerror="this.src='${DEFAULT_IMAGE}'" style="max-height:90px; object-fit:contain;">
            <div style="flex-grow:1;">
                <span style="font-size:0.6rem; background:var(--black); color:white; padding:3px 6px; font-weight:900;">${shoe.type}</span>
                <div style="font-weight:900; font-size:1.1rem; margin-top:5px;">${shoe.name}</div>
                <div style="color:var(--accent); font-weight:900; font-size:0.8rem;">${shoe.brand} // MIDSOLE TRACKING PROFILE</div>
            </div>
            <button class="explore-btn" style="border-color:var(--black); color:var(--black); margin-left:auto; font-size:0.7rem; padding:8px 16px;" onclick="openModalById(${shoe.id})">SPECS</button>
        `;
        list.appendChild(item);
    });
}

function renderLocker() {
    const grid = document.getElementById('locker-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const saved = shoeDatabase.filter(s => locker.includes(s.id));
    saved.length ? saved.forEach(s => grid.appendChild(createCard(s))) : grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; opacity:0.5; padding:100px 0; font-weight:900;">YOUR STORAGE COMPARTMENT IS VACANT.</div>';
}

function initHero() {
    if(shoeDatabase.length === 0) return;
    const releasedShoes = shoeDatabase.filter(s => s.date <= getSystemDateString());
    const shoe = releasedShoes.length ? releasedShoes[0] : shoeDatabase[0];
    
    document.getElementById('featured-hero').innerHTML = `
        <div class="hero-content">
            <div class="hero-text">
                <h3>DAILY MATRIX SPOTLIGHT</h3>
                <h2>${shoe.name}</h2>
                <button class="explore-btn" onclick="showPage('collection')">EXPLORE REPOSITORY</button>
            </div>
            <div class="hero-img"><img src="${shoe.img}" onerror="this.src='${DEFAULT_IMAGE}'"></div>
        </div>
    `;
}

function toggleLocker(id, e) {
    e.stopPropagation();
    const idx = locker.indexOf(id);
    idx > -1 ? locker.splice(idx, 1) : locker.push(id);
    localStorage.setItem('ghLocker', JSON.stringify(locker));
    document.getElementById('locker-count').innerText = locker.length;
    if (document.getElementById('page-collection').classList.contains('active')) renderArchive();
    if (document.getElementById('page-locker').classList.contains('active')) renderLocker();
}

function toggleCompare(id, e) {
    e.stopPropagation();
    const idx = compareList.indexOf(id);
    if (idx > -1) compareList.splice(idx, 1);
    else if (compareList.length < 2) compareList.push(id);
    updateCompareTray();
    if (document.getElementById('page-collection').classList.contains('active')) renderArchive();
}

function updateCompareTray() {
    const tray = document.getElementById('compare-tray');
    const slots = document.getElementById('compare-slots');
    tray.classList.toggle('active', compareList.length > 0);
    slots.innerHTML = compareList.map(id => {
        const s = shoeDatabase.find(x => x.id === id);
        return `<div class="slot-img"><img src="${s?.img || DEFAULT_IMAGE}" onerror="this.src='${DEFAULT_IMAGE}'"></div>`;
    }).join('');
}

function openCompareModal() {
    if(compareList.length < 2) return;
    const [s1, s2] = compareList.map(id => shoeDatabase.find(x => x.id === id));
    
    document.getElementById('compare-results').innerHTML = [s1, s2].map(s => `
        <div class="compare-col">
            <img src="${s.img}" onerror="this.src='${DEFAULT_IMAGE}'">
            <h2 style="font-size:1.5rem; font-weight:900; margin:20px 0 10px;">${s.name}</h2>
            <p style="border-top:1px solid var(--border); padding-top:15px;"><strong>LINEAGE:</strong> ${s.brand} // ${s.line}</p>
            <p style="border-top:1px solid var(--border); padding-top:15px;"><strong>TECH DECK:</strong> ${s.tech}</p>
            <p style="border-top:1px solid var(--border); padding-top:15px; font-size:1.3rem; font-weight:900; color:var(--accent);">MSRP: $${s.price}</p>
        </div>
    `).join('');
    document.getElementById('compare-modal').style.display = 'block';
}

function openModal(shoe) {
    document.getElementById('modal-body').innerHTML = `
        <div style="background:var(--grey-light); padding:20px; text-align:center;"><img src="${shoe.img}" style="width:100%; max-width:320px; object-fit:contain;" onerror="this.src='${DEFAULT_IMAGE}'"></div>
        <div>
            <p style="color:var(--accent); font-weight:900; margin:0;">${shoe.brand} // ${shoe.line}</p>
            <h2 style="font-size:2.2rem; margin:10px 0; font-weight:900; line-height:1.1;">${shoe.name}</h2>
            <p style="text-transform:none; opacity:0.8; line-height:1.5;">${shoe.tech}</p>
            <div style="display:flex; gap:30px; margin:20px 0;">
                <div><small style="opacity:0.5; font-size:0.65rem;">LOG DATE</small><div style="font-weight:900;">${shoe.date}</div></div>
                <div><small style="opacity:0.5; font-size:0.65rem;">EST VALUE</small><div style="font-weight:900; color:var(--accent);">$${shoe.price}</div></div>
            </div>
            <button class="explore-btn" style="background:var(--black); color:var(--white); width:100%; border:none; padding:15px;" onclick="closeModal()">RETURN</button>
        </div>
    `;
    document.getElementById('modal').style.display = 'block';
}

function openModalById(id) { openModal(shoeDatabase.find(x => x.id === id)); }
function closeModal() { document.getElementById('modal').style.display = 'none'; }
function closeCompareModal() { document.getElementById('compare-modal').style.display = 'none'; }
function clearCompare() { compareList = []; updateCompareTray(); renderArchive(); }

document.getElementById('theme-toggle').onclick = () => {
    document.body.classList.toggle('dark-theme');
    document.getElementById('theme-toggle').innerText = document.body.classList.contains('dark-theme') ? 'LIGHT' : 'DARK';
};

// COLD START RUN ENGINE
initHero();
runSystemClock();
document.getElementById('locker-count').innerText = locker.length;
