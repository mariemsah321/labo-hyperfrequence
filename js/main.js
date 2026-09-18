// ============================================
// DONNÉES DES ÉQUIPEMENTS (15 équipements / 27 images)
// ============================================
const equipments = [
    {
        id: 'antenne-thuraya',
        title: 'Antenne THURAYA',
        category: 'antennes',
        categoryLabel: '📡 Antennes & Communications',
        images: ['images/antenne-thuraya.jpg'],
        description: "Antenne satellite pour communications mobiles via le système Thuraya (satellite géostationnaire), opérant en bande L (1,5-1,6 GHz). Composée d'un radôme protecteur abritant un réseau de patches rayonnants avec polarisation circulaire, intégrée à un amplificateur faible bruit (LNA) et connectée via un câble coaxial RF.",
        features: [
            "Liaison bidirectionnelle voix/données avec le satellite",
            "Diagramme de rayonnement hémisphérique (pas de pointage mécanique nécessaire)",
            "Polarisation circulaire pour compenser les variations d'orientation",
            "Adaptation d'impédance optimisée (mesurable via VSWR)"
        ],
        pedagogy: "Illustre les concepts d'adaptation d'impédance, de polarisation circulaire contre les évanouissements multitrajets, et le compromis gain/directivité pour les communications mobiles par satellite.",
        position: { x: -10, z: -8 },
        color: 0x0099cc
    },
    {
        id: 'antenne-parabolique',
        title: 'Antenne Parabolique Front-Feed',
        category: 'antennes',
        categoryLabel: '📡 Antennes & Communications',
        images: ['images/antenne-parabolique.jpg'],
        description: "Antenne parabolique de type 'front-feed' (à alimentation directe) de petite taille, conçue spécifiquement pour les études de rayonnement directif et les mesures de gain en laboratoire. Elle se compose d'un réflecteur parabolique métallique concave, d'un élément rayonnant primaire (feed) placé à son foyer et maintenu par un bras de support, ainsi que d'un connecteur RF (type SMA ou N) pour la liaison coaxiale.",
        features: [
            "Transformation d'une onde sphérique émise par le feed en une onde plane quasi-parallèle via la réflexion sur le réflecteur",
            "Génération d'un faisceau étroit et fortement directif dans l'axe de la parabole (en émission comme en réception)",
            "Gain élevé et directivité importante pour concentrer l'énergie électromagnétique",
            "Fonctionnement réciproque nécessitant un pointage précis vers la cible"
        ],
        pedagogy: "Illustre parfaitement les notions fondamentales de gain, directivité, angle d'ouverture (beamwidth) et efficacité d'ouverture. Elle permet d'expérimenter le compromis classique entre un gain élevé et une couverture angulaire réduite, de mettre en pratique le calcul du gain (lié au diamètre du réflecteur et à la longueur d'onde), et de comprendre le principe physique des liaisons point-à-point (faisceaux hertziens, liaisons satellite).",
        position: { x: -6, z: -8 },
        color: 0x0099cc
    },
    {
        id: 'antenne-biconique',
        title: 'Antenne Biconique',
        category: 'antennes',
        categoryLabel: '📡 Antennes & Communications',
        images: ['images/antenne-biconique.jpg'],
        description: "Antenne large bande classique utilisée pour les mesures HF et CEM (Compatibilité Électromagnétique). Elle se compose d'un mât central vertical autour duquel sont disposés symétriquement plusieurs éléments rayonnants rigides, formant deux cônes opposés par leur sommet. Un disque métallique au sommet agit comme un plan capacitif pour élargir la bande passante.",
        features: [
            "Impédance d'entrée relativement constante sur une très large plage de fréquences (de quelques dizaines à centaines de MHz)",
            "Rayonnement omnidirectionnel dans le plan horizontal (diagramme de rayonnement en forme de tore)",
            "Mesure et émission de champs électromagnétiques sans nécessité de réglage ou de repointage fréquentiel",
            "Structure robuste remplaçant avantageusement le dipôle filiforme classique pour les tests large bande"
        ],
        pedagogy: "Illustre parfaitement le compromis fondamental entre bande passante et directivité : l'élargissement de la structure rayonnante sacrifie le gain directif au profit d'une adaptation d'impédance stable sur une large plage de fréquences. Elle permet d'introduire les notions de rayonnement omnidirectionnel, de polarisation (généralement verticale) et de caractérisation expérimentale d'antenne.",
        position: { x: -2, z: -8 },
        color: 0x0099cc
    },
    {
        id: 'antenna-trainer',
        title: 'Antenna Trainer ED-3200',
        category: 'antennes',
        categoryLabel: ' Antennes & Communications',
        images: [
            'images/antenna-trainer-1.jpg',
            'images/antenna-trainer-2.jpg',
            'images/antenna-trainer-3.jpg'
        ],
        description: "Système pédagogique de laboratoire conçu pour l'enseignement et l'expérimentation des antennes et des communications RF. Il permet aux étudiants d'étudier les caractéristiques, le fonctionnement et les performances de différents types d'antennes dans les bandes 500 MHz, 2 GHz et 10 GHz. Le système comprend une unité principale de contrôle (ED-3200A), une unité d'antenne émettrice (ED-3200B), une unité d'antenne réceptrice (ED-3200C), plusieurs modules d'antennes interchangeables et un logiciel d'analyse.",
        features: [
            "Générateur RF intégré : 500 MHz, 2 GHz et 10 GHz",
            "Mécanisme de rotation 0°-360° avec pas de 1°, 5° ou 10°",
            "16 types d'antennes différentes (dipôle, Yagi, spirale, hélicoïdale, cornet, patch, etc.)",
            "Mesure du gain, efficacité, directivité, bande passante, polarisation",
            "Tracé des diagrammes de rayonnement et mesure de la largeur du faisceau (HPBW)",
            "Logiciel de visualisation graphique et simulation"
        ],
        pedagogy: "Plateforme pratique pour comprendre les principes fondamentaux de la propagation des ondes électromagnétiques, de la polarisation et des diagrammes de rayonnement des antennes. Permet de relier la théorie à la pratique à travers des expériences complètes : tracé de diagrammes, mesure de gain, étude de polarisation, comparaison entre types d'antennes, analyse des phénomènes d'interférence.",
        position: { x: 2, z: -8 },
        color: 0x0099cc
    },
    {
    id: 'coffre-antennes',
    title: 'Coffre Antennes ED-3200 (16 types)',
    category: 'antennes',
    categoryLabel: ' Antennes & Communications',
    images: [
        'images/antenna-trainer-coffre1.jpg',
        'images/antenna-trainer-coffre2.jpg'
    ],
    description: "Valise complète contenant les 16 types d'antennes interchangeables du système ED-3200, ainsi que les accessoires de fixation et de calibration. Le coffre comprend : dipôle demi-onde (½λ), monopôle quart d'onde (¼λ), dipôle replié, antenne Yagi, antennes boucle (loop) carrée/circulaire/diamant, antenne spirale, antenne hélicoïdale, antenne cornet, antenne patch micro-ruban, réseaux d'antennes planaires (rectangulaire, circulaire, monocouche) et plan de masse monopôle. Chaque antenne est soigneusement logée dans son emplacement en mousse protectrice.",
    features: [
        "16 types d'antennes différentes pour couvrir toutes les configurations classiques",
        "Antennes filaires : dipôle, monopôle, dipôle replié, Yagi",
        "Antennes boucle : carrée, circulaire, diamant",
        "Antennes large bande : spirale, hélicoïdale, cornet",
        "Antennes planaires : patch micro-ruban, réseaux rectangulaire/circulaire/monocouche",
        "Accessoires de fixation, câbles coaxiaux et outils de calibration inclus"
    ],
    pedagogy: "Support expérimental essentiel pour comparer directement les caractéristiques de rayonnement, le gain et la directivité de différents types d'antennes dans des conditions identiques. Permet aux étudiants de manipuler physiquement chaque antenne, de comprendre leurs architectures internes (patch, boucle, hélice, cornet) et de visualiser concrètement les compromis entre bande passante, directivité et encombrement. Favorise l'apprentissage par comparaison et l'expérimentation pratique.",
    position: { x: 6, z: -8 },
    color: 0x0099cc
    },
    {
        id: 'klystron',
        title: 'Klystron - Banc NVIS',
        category: 'sources',
        categoryLabel: '⚡ Sources RF & Hyperfréquences',
        images: [
            'images/klystron-banc.jpg',
            'images/klystron-detail.jpg',
            'images/klystron-power.jpg'
        ],
        description: "Tube électronique à cavité résonante unique utilisé comme oscillateur/amplificateur micro-ondes. Le banc expérimental comprend un canon à électrons, une cavité résonante, une électrode réflectrice (repeller), et un bloc d'alimentation NVIS 102 avec modulation (CW, AM, FM). Le signal est injecté dans un guide d'ondes rectangulaire avec atténuateur variable et antenne cornet.",
        features: [
            "Génération de signal micro-ondes cohérent",
            "Accord électronique par variation de la tension du repeller",
            "Modulation d'amplitude ou de fréquence possible",
            "Propagation guidée dans banc de guide d'ondes"
        ],
        pedagogy: "Démontre la conversion énergie continue → énergie RF par modulation de vitesse des électrons, l'accord mécanique/électronique des cavités résonantes, et fait le lien entre oscillateurs micro-ondes et systèmes émission-réception pratiques.",
        position: { x: -4, z: 0 },
        color: 0x7b2ff7
    },
    {
        id: 'gunn-pm7815',
        title: 'Alimentation et Modulateur Gunn (Philips PM 7815)',
        category: 'sources',
        categoryLabel: '⚡ Sources RF & Hyperfréquences',
        images: ['images/gunn-pm7815.jpg'],
        description: "Alimentation de laboratoire dédiée (modèle Philips PM 7815) conçue pour polariser et piloter un oscillateur à diode Gunn, une source classique de signaux hyperfréquences. L'appareil intègre un galvanomètre analogique pour le monitoring simultané de la tension (0-20 V) et du courant (0-1 A), un potentiomètre de réglage de la tension Gunn, un interrupteur d'activation de l'oscillateur, ainsi qu'un module de modulation intégré.",
        features: [
            "Fourniture d'une tension continue stable et réglable pour polariser la diode Gunn dans sa zone de résistance négative",
            "Génération d'oscillations hyperfréquences par effet Gunn (via semi-conducteur type Arséniure de Gallium)",
            "Modulation d'amplitude intégrée par impulsions carrées (créneaux) pour faciliter la détection du signal",
            "Contrôle précis et en temps réel du point de fonctionnement via l'affichage analogique tension/courant"
        ],
        pedagogy: "Illustre concrètement le principe de génération d'ondes hyperfréquences par effet Gunn, offrant une alternative aux tubes électroniques (comme le klystron). Il permet d'appréhender la polarisation des composants actifs à semi-conducteur, le contrôle rigoureux du point de fonctionnement, et les techniques de modulation élémentaires (tout-ou-rien) essentielles à la transmission d'information en hyperfréquences.",
        position: { x: 0, z: 0 },
        color: 0x7b2ff7
    },
    {
        id: 'analyseur-spectre',
        title: 'Analyseur de Spectre Agilent E4407B',
        category: 'mesure',
        categoryLabel: '📊 Instruments de Mesure',
        images: ['images/analyseur-spectre.jpg'],
        description: "Instrument de mesure couvrant 9 kHz à 26,5 GHz, permettant la visualisation et l'analyse des signaux RF/hyperfréquences dans le domaine fréquentiel. Interface complète avec sections dédiées (Frequency, Span, Amplitude, Measure, Marker) et connecteurs RF 50Ω (entrée/sortie/référence).",
        features: [
            "Visualisation du spectre (amplitude vs fréquence)",
            "Mesure automatique (recherche de pic, comptage de fréquence)",
            "Placement de curseurs de mesure précis",
            "Détection d'harmoniques, signaux parasites et distorsions",
            "Démodulateur audio intégré"
        ],
        pedagogy: "Outil de diagnostic essentiel pour vérifier la pureté spectrale, contrôler la conformité des signaux modulés, détecter les interférences, et relier la théorie du traitement du signal (Fourier, bruit, SNR) à l'observation concrète des signaux réels.",
        position: { x: 4, z: 0 },
        color: 0xff6b6b
    },
    {
        id: 'vna-siglent',
        title: 'Analyseur de Réseau Vectoriel Siglent SHN914A',
        category: 'mesure',
        categoryLabel: '📊 Instruments de Mesure',
        images: [
            'images/vna-siglent.jpg',
            'images/vna-siglent-ports.jpg'
        ],
        description: "VNA portable couvrant 30 kHz à 14 GHz, présenté en valise durcie avec écran tactile, clavier physique et ports RF multiples. Connectique complète incluant GPS, sorties Bias pour composants actifs, USB-C, Ethernet et alimentation 12V. Permet la caractérisation complète de composants RF via câbles coaxiaux.",
        features: [
            "Mesure des 4 paramètres S (S11, S21, S12, S22) avec amplitude ET phase",
            "Affichage diagramme de Smith",
            "Caractérisation d'antennes, filtres, amplificateurs, lignes de transmission",
            "Mesure d'adaptation d'impédance et VSWR",
            "Alimentation directe de composants actifs via Bias Out"
        ],
        pedagogy: "Instrument fondamental pour valider expérimentalement les notions de lignes de transmission, d'adaptation d'impédance et de comportement fréquentiel des circuits RF, tout en développant des compétences pratiques essentielles pour la conception et le dépannage de systèmes de télécommunication réels.",
        position: { x: 8, z: 0 },
        color: 0xff6b6b
    },
    {
        id: 'hp11758b',
        title: 'HP 11758B Digital Radio Test Set',
        category: 'mesure',
        categoryLabel: ' Instruments de Mesure',
        images: [
            'images/hp11758b-front.jpg',
            'images/hp11758b-back.jpg'
        ],
        description: "Appareil de test et de mesure conçu par Hewlett-Packard (HP) pour l'analyse et la maintenance des systèmes de radiocommunication numériques. Il permet de générer, mesurer et analyser des signaux RF sur une large plage de fréquences, approximativement de 300 kHz à 2,9 GHz (extensible jusqu'à 6,5 GHz ou 11,7 GHz selon les options).",
        features: [
            "Générateur RF (source de signal radiofréquence)",
            "Mesureur de puissance RF (Power Meter)",
            "Générateur à trois tons (3-Tone Source)",
            "Simulateur d'évanouissement multipath (Multipath Fading Simulator)",
            "Mesure de la puissance du signal, pertes de transmission, interférences, qualité du signal radio"
        ],
        pedagogy: "Permet de vérifier la qualité et les performances des liaisons radio numériques, notamment dans les systèmes de transmission micro-ondes et de télécommunications. Souvent utilisé avec d'autres instruments de mesure (analyseurs de spectre) pour effectuer des tests complets sur les systèmes de communication numérique.",
        position: { x: -4, z: 8 },
        color: 0xff6b6b
    },
    {
        id: 'kit-micro-ondes',
        title: 'Kit Pédagogique de Banc Micro-Ondes (Guide d\'ondes)',
        category: 'composants',
        categoryLabel: '🔧 Composants & Kits Pédagogiques',
        images: [
            'images/kit-micro-ondes.jpg',
            'images/kit-micro-ondes-actifs.jpg'
        ],
        description: "Valise complète regroupant l'ensemble des composants passifs et actifs nécessaires pour étudier expérimentalement la propagation et le traitement des signaux hyperfréquences en guide d'ondes. Elle comprend des antennes cornet, des sections de guides (rigides et flexibles), une ligne fendue (Slotted Line) avec sonde mobile, un atténuateur variable, un syntoniseur à vis (Slide Screw Tuner) et un coupleur directionnel. Le kit inclut également les éléments actifs : une alimentation pour oscillateur Gunn, un générateur 1 kHz pour la modulation, ainsi que divers accessoires de fixation et de calibration.",
        features: [
            "Génération et modulation (AM) d'un signal micro-ondes via la diode Gunn et le générateur 1 kHz",
            "Propagation guidée et rayonnement en espace libre via les antennes cornet",
            "Mesure précise de la distribution du champ, de la longueur d'onde guidée et du VSWR grâce à la ligne fendue",
            "Adaptation d'impédance ajustable via le syntoniseur à vis coulissante",
            "Échantillonnage et analyse bidirectionnelle du signal par le coupleur directionnel"
        ],
        pedagogy: "Support expérimental de référence pour illustrer concrètement les concepts théoriques des télécommunications HF. Il permet d'étudier la propagation guidée (modes, fréquence de coupure), les mesures d'adaptation d'impédance (VSWR, coefficient de réflexion), le fonctionnement des composants passifs (atténuateurs, coupleurs) et la chaîne complète émission-propagation-réception, faisant le lien direct entre la théorie des lignes de transmission et la pratique en laboratoire.",
        position: { x: 0, z: 8 },
        color: 0x00aa66
    },
    {
        id: 'attenuateur-palette',
        title: 'Atténuateur Rotatif à Palette (PM 7301X)',
        category: 'composants',
        categoryLabel: '🔧 Composants & Kits Pédagogiques',
        images: ['images/attenuateur-palette.jpg'],
        description: "Atténuateur variable de précision (modèle Philips PM 7301X) couvrant la bande X (8,2–12,4 GHz), compatible avec le guide d'ondes standard WR-90. Il se compose d'un tronçon de guide circulaire inséré entre deux transitions rectangulaire-circulaire, à l'intérieur duquel une palette résistive absorbante peut être orientée mécaniquement via un bouton moleté gradué. Une échelle de lecture en dB, visible sur le boîtier, indique directement le niveau d'atténuation appliqué.",
        features: [
            "Atténuation continue et précisément calibrée du signal micro-ondes traversant la ligne",
            "Variation du niveau d'atténuation selon la loi en cos² de l'angle de rotation de la palette",
            "Insertion sans désadaptation d'impédance ni réflexion significative",
            "Large plage dynamique pour l'étalonnage et le contrôle de niveau",
            "Protection des composants sensibles en aval contre la saturation"
        ],
        pedagogy: "Illustre concrètement le principe d'absorption d'énergie électromagnétique par un matériau résistif dans un guide d'ondes, ainsi que la relation physique entre l'orientation d'un élément absorbant et le niveau de champ transmis. Il permet d'appréhender l'importance du contrôle précis de puissance pour éviter la saturation des détecteurs, protéger les équipements, et réaliser des mesures comparatives fiables.",
        position: { x: 4, z: 8 },
        color: 0x00aa66
    },
    {
        id: 'connecteur-pn',
        title: 'Connecteur PN',
        category: 'connectique',
        categoryLabel: '🔌 Connectique RF',
        images: [
            'images/connecteur-pn-cable.jpg',
            'images/connecteur-pn-male.jpg'
        ],
        description: "Connecteur coaxial RF utilisé pour transmettre des signaux radiofréquences et micro-ondes avec de faibles pertes. Développé par Paul Neill dans les années 1940, il est doté d'un système de verrouillage à vis (threaded coupling) qui assure une connexion mécanique solide et fiable, même dans les environnements soumis aux vibrations. Conçu pour être résistant aux intempéries (weatherproof), adapté aux installations extérieures.",
        features: [
            "Impédance : 50 Ω (télécommunications) ou 75 Ω (télévision/broadcast)",
            "Fréquence max : 11 GHz (standard), jusqu'à 18 GHz (modèles de précision)",
            "Système de verrouillage à vis pour connexion robuste",
            "Résistant aux intempéries (weatherproof)",
            "Faible perte de signal et excellente adaptation d'impédance"
        ],
        pedagogy: "Largement utilisé dans les antennes RF, stations de base cellulaires, systèmes radar, communications satellites et équipements de mesure. Ses principaux avantages : faible perte de signal, excellente adaptation d'impédance, grande robustesse mécanique, bonne protection contre les perturbations électromagnétiques.",
        position: { x: -8, z: 8 },
        color: 0xff9933
    },
    {
        id: 'connecteur-bnc',
        title: 'Connecteur BNC (Bayonet Neill-Concelman)',
        category: 'connectique',
        categoryLabel: ' Connectique RF',
        images: [
            'images/connecteur-bnc-male.jpg',
            'images/connecteur-bnc-female.jpg'
        ],
        description: "Connecteur coaxial RF utilisé pour transmettre des signaux radiofréquences, vidéo et de mesure avec une bonne qualité de signal. Développé dans les années 1940, son nom signifie Bayonet Neill-Concelman, en référence à son système de verrouillage à baïonnette qui permet une connexion rapide par simple rotation d'un quart de tour.",
        features: [
            "Deux impédances : 50 Ω (RF, antennes, instruments) et 75 Ω (vidéo, CCTV, broadcast)",
            "Fréquence max : 4 GHz (certaines versions spéciales plus élevées)",
            "Connexion rapide par rotation d'un quart de tour (baïonnette)",
            "Bonne protection contre les interférences électromagnétiques",
            "Faible perte de signal, fiabilité et robustesse mécanique"
        ],
        pedagogy: "Largement utilisé dans les oscilloscopes, générateurs de signaux, analyseurs RF, caméras de surveillance (CCTV), équipements de télévision et radiodiffusion, laboratoires d'électronique et télécommunications. Avantages : connexion/déconnexion rapides, bonne protection EMI, faible perte, fiabilité.",
        position: { x: -4, z: 12 },
        color: 0xff9933
    },
    {
        id: 'connecteur-sma',
        title: 'Connecteur SMA (SubMiniature Version A)',
        category: 'connectique',
        categoryLabel: '🔌 Connectique RF',
        images: [
            'images/connecteur-sma-cable.jpg',
            'images/connecteur-sma-female.jpg'
        ],
        description: "Connecteur coaxial RF de petite taille utilisé pour transmettre des signaux radiofréquences et micro-ondes avec une très faible perte de signal. Développé dans les années 1960, il est devenu l'un des connecteurs les plus utilisés dans les systèmes RF et hyperfréquences. Il possède un système de fixation par filetage (vissage) qui garantit une connexion stable, précise et résistante aux vibrations.",
        features: [
            "Impédance caractéristique : 50 Ω",
            "Fréquence max : 18 GHz (certaines versions de précision dépassent 26 GHz)",
            "Système de fixation par filetage (vissage)",
            "Taille compacte, faible perte d'insertion",
            "Excellente qualité de transmission à haute fréquence"
        ],
        pedagogy: "Largement utilisé dans les antennes RF, systèmes Wi-Fi, équipements GPS, communications satellites, radars, instruments de mesure RF et micro-ondes, laboratoires de télécommunications. Comparé au BNC, le SMA supporte des fréquences beaucoup plus élevées mais nécessite un vissage manuel pour la connexion.",
        position: { x: 0, z: 12 },
        color: 0xff9933
    },
    {
        id: 'connecteur-jack',
        title: 'Connecteur Jack',
        category: 'connectique',
        categoryLabel: '🔌 Connectique Audio',
        images: [
            'images/connecteur-jack-femelle.jpg',
            'images/connecteur-jack-male.jpg'
        ],
        description: "Connecteur électrique principalement utilisé pour transmettre des signaux audio analogiques entre différents appareils électroniques. Il existe plusieurs tailles : 6,35 mm (Jack standard - amplificateurs, instruments de musique), 3,5 mm (Mini-Jack - ordinateurs, smartphones, casques), 2,5 mm (Micro-Jack - équipements portables).",
        features: [
            "Configurations : TS (mono), TRS (stéréo), TRRS (stéréo + micro)",
            "Transport de signal mono, stéréo, ou audio avec microphone intégré",
            "Simplicité d'utilisation, faible coût, grande compatibilité",
            "Connexion rapide sans outil"
        ],
        pedagogy: "Largement utilisé dans les casques, écouteurs, microphones, guitares électriques, amplificateurs audio, cartes son. Limites : non adapté aux fréquences RF et micro-ondes, plus sensible au bruit électrique que les connecteurs coaxiaux (BNC, SMA, N), peut s'user après de nombreuses insertions.",
        position: { x: 4, z: 12 },
        color: 0xff9933
    }
];

// ============================================
// VARIABLES GLOBALES
// ============================================
let scene, camera, renderer;
let equipmentMeshes = [];
let currentEquipment = null;
let raycaster, mouse;
let animationId;
let hoveredObject = null;
let currentCategory = 'all';
let cameraAngle = 0;

// Variables pour le catalogue 3D
let carouselItems = [];
let carouselRotation = 0;
let carouselAutoRotate = true;
let carouselRadius = 500;

// ============================================
// INITIALISATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initCatalogue3D();
    initWelcomeScreen();
    initEventListeners();
});

// ============================================
// CATALOGUE 3D ROTATIF (demi-cylindre)
// ============================================
function initCatalogue3D() {
    const carousel = document.getElementById('carousel-3d');
    if (!carousel) return;
    
    const itemCount = equipments.length;
    const angleStep = 360 / itemCount;
    
    equipments.forEach((eq, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.dataset.index = index;
        
        // Image
        const img = document.createElement('img');
        img.src = eq.images[0];
        img.alt = eq.title;
        item.appendChild(img);
        
        // Titre
        const title = document.createElement('div');
        title.className = 'item-title';
        title.textContent = eq.title;
        item.appendChild(title);
        
        // Clic pour ouvrir le panneau
        item.addEventListener('click', () => {
            // Entrer dans le labo et ouvrir cet équipement
            enterLabAndOpen(eq);
        });
        
        carousel.appendChild(item);
        carouselItems.push({ element: item, angle: index * angleStep, equipment: eq });
    });
    
    updateCarousel();
    
    // Auto-rotation
    setInterval(() => {
        if (carouselAutoRotate) {
            carouselRotation += 0.3;
            updateCarousel();
        }
    }, 30);
}

function updateCarousel() {
    const itemCount = carouselItems.length;
    const angleStep = 360 / itemCount;
    
    carouselItems.forEach((item, index) => {
        const angle = item.angle + carouselRotation;
        const radian = (angle * Math.PI) / 180;
        
        // Position en demi-cylindre (seulement la moitié avant)
        const x = Math.sin(radian) * carouselRadius;
        const z = Math.cos(radian) * carouselRadius - carouselRadius;
        
        // Opacité basée sur la position Z (plus proche = plus visible)
        const opacity = Math.max(0.3, (z + carouselRadius) / (2 * carouselRadius));
        const scale = 0.6 + (opacity * 0.4);
        
        item.element.style.transform = `translateX(${x}px) translateZ(${z}px) scale(${scale})`;
        item.element.style.opacity = opacity;
        item.element.style.zIndex = Math.floor(opacity * 100);
    });
}

// ============================================
// ÉCRAN D'ACCUEIL
// ============================================
function initWelcomeScreen() {
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            openDoors();
        });
    }
}

function openDoors() {
    const doorAnimation = document.getElementById('door-animation');
    const welcomeScreen = document.getElementById('welcome-screen');
    
    // Afficher l'animation de porte
    doorAnimation.classList.remove('hidden');
    
    // Ouvrir les portes après un court délai
    setTimeout(() => {
        doorAnimation.classList.add('open');
    }, 100);
    
    // Cacher l'écran d'accueil et montrer la scène 3D
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
    }, 800);
    
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        document.getElementById('scene-container').style.display = 'block';
        init3DScene();
    }, 1500);
    
    // Cacher l'animation de porte
    setTimeout(() => {
        doorAnimation.classList.add('hidden');
    }, 2500);
}

function enterLabAndOpen(equipment) {
    carouselAutoRotate = false;
    openDoors();
    
    // Attendre que la scène 3D soit initialisée puis ouvrir le panneau
    setTimeout(() => {
        if (equipment) {
            openInfoPanel(equipment);
        }
    }, 2000);
}

// ============================================
// EVENT LISTENERS
// ============================================
function initEventListeners() {
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            document.getElementById('scene-container').style.display = 'none';
            document.getElementById('welcome-screen').style.display = 'flex';
            setTimeout(() => {
                document.getElementById('welcome-screen').classList.remove('hidden');
                carouselAutoRotate = true;
            }, 50);
        });
    }

    const closePanel = document.getElementById('close-panel');
    if (closePanel) {
        closePanel.addEventListener('click', closeInfoPanel);
    }

    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            filterEquipments();
        });
    });

    document.querySelectorAll('.map-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            const target = e.target.dataset.target;
            const eq = equipments.find(eq => eq.id === target);
            if (eq) openInfoPanel(eq);
        });
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            document.getElementById(`tab-${e.target.dataset.tab}`).classList.add('active');
        });
    });

    const prevBtn = document.getElementById('prev-equipment');
    const nextBtn = document.getElementById('next-equipment');
    if (prevBtn) prevBtn.addEventListener('click', () => navigateEquipment(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigateEquipment(1));

    // Contrôles du carrousel
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');
    if (carouselPrev) {
        carouselPrev.addEventListener('click', () => {
            carouselAutoRotate = false;
            carouselRotation -= 360 / equipments.length;
            updateCarousel();
        });
    }
    if (carouselNext) {
        carouselNext.addEventListener('click', () => {
            carouselAutoRotate = false;
            carouselRotation += 360 / equipments.length;
            updateCarousel();
        });
    }

    window.addEventListener('resize', onWindowResize);
}

// ============================================
// SCÈNE 3D
// ============================================
function init3DScene() {
    const canvas = document.getElementById('lab-canvas');

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xd4eaf7);
    scene.fog = new THREE.Fog(0xd4eaf7, 25, 60);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 12, 20);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Lumières
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(10, 20, 10);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    scene.add(mainLight);

    // Lumières colorées par catégorie
    const categoryColors = {
        antennes: 0x0099cc,
        sources: 0x7b2ff7,
        mesure: 0xff6b6b,
        composants: 0x00aa66,
        connectique: 0xff9933
    };

    Object.entries(categoryColors).forEach(([cat, color]) => {
        const light = new THREE.PointLight(color, 0.6, 25);
        light.position.set(0, 8, 0);
        scene.add(light);
    });

    createFloor();
    createWalls();
    createEquipments();
    createMinimap();

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('click', onMouseClick);

    animate();
}

function createFloor() {
    const floorGeometry = new THREE.PlaneGeometry(40, 40);
    const floorMaterial = new THREE.MeshStandardMaterial({
        color: 0xc8e0f0,
        roughness: 0.6,
        metalness: 0.1
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const gridHelper = new THREE.GridHelper(40, 40, 0x0099cc, 0xa0c8e0);
    gridHelper.position.y = 0.01;
    scene.add(gridHelper);
}

function createWalls() {
    const wallMaterial = new THREE.MeshStandardMaterial({
        color: 0xe8f0f8,
        roughness: 0.9,
        transparent: true,
        opacity: 0.6
    });

    const backWall = new THREE.Mesh(new THREE.BoxGeometry(40, 10, 0.5), wallMaterial);
    backWall.position.set(0, 5, -20);
    scene.add(backWall);

    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.5, 10, 40), wallMaterial);
    leftWall.position.set(-20, 5, 0);
    scene.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.5, 10, 40), wallMaterial);
    rightWall.position.set(20, 5, 0);
    scene.add(rightWall);
}

function createEquipments() {
    equipments.forEach((eq, index) => {
        const group = new THREE.Group();
        group.position.set(eq.position.x, 0, eq.position.z);

        // Base/podium (cercle blanc)
        const baseGeometry = new THREE.CylinderGeometry(1.2, 1.5, 0.3, 32);
        const baseMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.3,
            roughness: 0.4
        });
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        base.position.y = 0.15;
        base.castShadow = true;
        base.receiveShadow = true;
        group.add(base);

        // Anneau lumineux coloré
        const ringGeometry = new THREE.TorusGeometry(1.3, 0.05, 16, 100);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: eq.color,
            transparent: true,
            opacity: 0.8
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 0.31;
        group.add(ring);

        // ️ CARTE PHOTO de l'équipement
        const photoSize = 1.8;
        const photoGeometry = new THREE.PlaneGeometry(photoSize, photoSize);
        
        const textureLoader = new THREE.TextureLoader();
        const photoTexture = textureLoader.load(eq.images[0]);
        photoTexture.minFilter = THREE.LinearFilter;
        
        const photoMaterial = new THREE.MeshBasicMaterial({
            map: photoTexture,
            transparent: true,
            side: THREE.DoubleSide
        });
        const photoPlane = new THREE.Mesh(photoGeometry, photoMaterial);
        photoPlane.position.y = 1.5;
        photoPlane.castShadow = true;
        group.add(photoPlane);

        // Cadre autour de la photo
        const frameGeometry = new THREE.PlaneGeometry(photoSize + 0.15, photoSize + 0.15);
        const frameMaterial = new THREE.MeshBasicMaterial({
            color: eq.color,
            transparent: true,
            opacity: 0.9,
            side: THREE.DoubleSide
        });
        const frame = new THREE.Mesh(frameGeometry, frameMaterial);
        frame.position.y = 1.5;
        frame.position.z = -0.01;
        group.add(frame);

        // 🏷️ LABEL avec le nom (au-dessus de la photo)
        const labelSprite = createTextSprite(eq.title, eq.color);
        labelSprite.position.y = 2.8;
        group.add(labelSprite);

        // Halo lumineux au-dessus
        const haloGeometry = new THREE.SphereGeometry(0.2, 16, 16);
        const haloMaterial = new THREE.MeshBasicMaterial({
            color: eq.color,
            transparent: true,
            opacity: 0.6
        });
        const halo = new THREE.Mesh(haloGeometry, haloMaterial);
        halo.position.y = 3.5;
        group.add(halo);

        // Données utilisateur pour interaction
        photoPlane.userData = { equipment: eq, isEquipment: true };
        frame.userData = { equipment: eq, isEquipment: true };
        group.userData = { equipment: eq, isEquipment: true };

        scene.add(group);
        equipmentMeshes.push({ group, shape: photoPlane, data: eq });
    });
}

function createTextSprite(text, color) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.fillRect(0, 0, 512, 128);

    const hexColor = `#${color.toString(16).padStart(6, '0')}`;
    ctx.strokeStyle = hexColor;
    ctx.lineWidth = 6;
    ctx.strokeRect(3, 3, 506, 122);

    ctx.fillStyle = '#006699';
    ctx.font = 'bold 34px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const displayText = text.length > 30 ? text.substring(0, 27) + '...' : text;
    ctx.fillText(displayText, 256, 64);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(3, 0.75, 1);
    return sprite;
}

function createMinimap() {
    const minimapContent = document.getElementById('minimap-content');
    if (!minimapContent) return;
    minimapContent.innerHTML = '';
    
    equipments.forEach((eq, index) => {
        const dot = document.createElement('div');
        dot.className = 'map-dot';
        dot.dataset.target = eq.id;
        dot.textContent = eq.title.substring(0, 2).toUpperCase();
        dot.style.backgroundColor = `#${eq.color.toString(16).padStart(6, '0')}`;
        
        const x = ((eq.position.x + 12) / 24) * 100;
        const z = ((eq.position.z + 15) / 30) * 100;
        dot.style.left = `${x}%`;
        dot.style.top = `${z}%`;
        
        dot.addEventListener('click', () => openInfoPanel(eq));
        minimapContent.appendChild(dot);
    });
}

// ============================================
// INTERACTION
// ============================================
function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    let found = null;
    for (let intersect of intersects) {
        if (intersect.object.userData.isEquipment) {
            found = intersect.object;
            break;
        }
    }

    if (found !== hoveredObject) {
        if (hoveredObject) {
            hoveredObject.scale.set(1, 1, 1);
            document.body.style.cursor = 'default';
        }
        hoveredObject = found;
        if (hoveredObject) {
            hoveredObject.scale.set(1.15, 1.15, 1.15);
            document.body.style.cursor = 'pointer';
        }
    }
}

function onMouseClick(event) {
    if (hoveredObject) {
        openInfoPanel(hoveredObject.userData.equipment);
    }
}

function openInfoPanel(equipment) {
    currentEquipment = equipment;
    const panel = document.getElementById('info-panel');
    if (!panel) return;
    
    document.getElementById('panel-category').textContent = equipment.categoryLabel;
    document.getElementById('panel-title').textContent = equipment.title;
    document.getElementById('panel-description').textContent = equipment.description;
    document.getElementById('panel-pedagogy').textContent = equipment.pedagogy;

    const featuresList = document.getElementById('panel-features');
    featuresList.innerHTML = '';
    equipment.features.forEach(f => {
        const li = document.createElement('li');
        li.textContent = f;
        featuresList.appendChild(li);
    });

    const mainImage = document.getElementById('panel-main-image');
    const thumbsContainer = document.getElementById('panel-thumbs');
    thumbsContainer.innerHTML = '';

    if (equipment.images.length > 0) {
        mainImage.src = equipment.images[0];
        equipment.images.forEach((img, idx) => {
            const thumb = document.createElement('img');
            thumb.src = img;
            thumb.alt = `Vue ${idx + 1}`;
            if (idx === 0) thumb.classList.add('active');
            thumb.addEventListener('click', () => {
                mainImage.src = img;
                document.querySelectorAll('.gallery-thumbs img').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
            thumbsContainer.appendChild(thumb);
        });
    }

    document.querySelectorAll('.tab-btn').forEach((b, i) => {
        b.classList.toggle('active', i === 0);
    });
    document.querySelectorAll('.tab-content').forEach((c, i) => {
        c.classList.toggle('active', i === 0);
    });

    panel.classList.remove('hidden');
    setTimeout(() => panel.classList.add('visible'), 10);
}

function closeInfoPanel() {
    const panel = document.getElementById('info-panel');
    if (!panel) return;
    panel.classList.remove('visible');
    setTimeout(() => panel.classList.add('hidden'), 500);
    currentEquipment = null;
}

function navigateEquipment(direction) {
    if (!currentEquipment) return;
    const currentIndex = equipments.findIndex(eq => eq.id === currentEquipment.id);
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = equipments.length - 1;
    if (newIndex >= equipments.length) newIndex = 0;
    openInfoPanel(equipments[newIndex]);
}

function filterEquipments() {
    equipmentMeshes.forEach(({ group, data }) => {
        const visible = currentCategory === 'all' || data.category === currentCategory;
        group.visible = visible;
    });
}

// ============================================
// ANIMATION
// ============================================
function animate() {
    animationId = requestAnimationFrame(animate);

    const time = Date.now() * 0.001;
    cameraAngle += 0.001;

    equipmentMeshes.forEach(({ group, shape }, index) => {
        group.rotation.y = Math.sin(time * 0.5 + index) * 0.1;
        
        const halo = group.children.find(c => c.geometry && c.geometry.type === 'SphereGeometry' && c.material.opacity === 0.6);
        if (halo) {
            halo.position.y = 3.5 + Math.sin(time * 2 + index) * 0.2;
            halo.material.opacity = 0.4 + Math.sin(time * 3 + index) * 0.2;
        }

        const ring = group.children.find(c => c.geometry && c.geometry.type === 'TorusGeometry');
        if (ring) {
            ring.rotation.z = time * 0.5;
        }
    });

    const radius = 22;
    camera.position.x = Math.sin(cameraAngle) * radius * 0.3;
    camera.position.z = 20 + Math.cos(cameraAngle) * 3;
    camera.lookAt(0, 1, 2);

    renderer.render(scene, camera);
}

function onWindowResize() {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}