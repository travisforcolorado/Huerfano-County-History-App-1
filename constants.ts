import { Topic, SectionKey } from './types';

export const SECTIONS: { id: SectionKey; label: string; intro: string }[] = [
  { 
    id: 'overview', 
    label: 'Overview', 
    intro: 'This app is a starting point for exploring Huerfano County\'s deep history – from Indigenous trails and land grants, to Hispano plazas like La Plaza de los Leones, coal camps, farming towns, and today\'s Spanish Peaks Country.' 
  },
  { 
    id: 'timeline', 
    label: 'Timeline', 
    intro: 'Follow key moments in Huerfano County\'s story. Each card is a simple snapshot that can be expanded with more dates, documents, and family stories.' 
  },
  { 
    id: 'places', 
    label: 'Places & Landmarks', 
    intro: 'Plaza communities, towns, valleys, and landmarks that hold important pieces of the county\'s history and identity.' 
  },
  { 
    id: 'people', 
    label: 'People & Families', 
    intro: 'Indigenous nations, Hispano founding families, coal families, ranchers, union organizers, and everyday residents who built Huerfano County.' 
  },
  { 
    id: 'labor', 
    label: 'Coal & Labor History', 
    intro: 'Coal mining shaped Huerfano County\'s towns, economy, and labor struggles, especially during the Colorado Coalfield War of 1913–1914.' 
  },
  { 
    id: 'treasure', 
    label: 'Treasure Tales', 
    intro: 'Stories of lost payrolls, hidden strongboxes, and legendary caches that have become part of Huerfano County folklore. These tales mix documented history, newspaper clippings, and front-porch storytelling passed down through generations.' 
  },
  { 
    id: 'leaders', 
    label: 'Modern Leaders', 
    intro: 'Civic leaders from Huerfano County who carried local voices to the Colorado State Capitol in different eras.' 
  },
  { 
    id: 'schools', 
    label: 'For Students & Teachers', 
    intro: 'Simple project ideas that connect local history to the classroom. Designed for roughly 4th–8th grade, but adaptable.' 
  },
];

export const DATA: Record<SectionKey, Topic[]> = {
  overview: [
    {
      title: "Huerfano: The 'Orphan' County",
      period: "Name & Identity",
      description:
        "The county is named for Huerfano Butte, a lone volcanic hill north of Walsenburg. 'Huerfano' is Spanish for 'orphan,' a reference to this isolated landmark that guided travelers across the plains.",
      images: [
        "https://commons.wikimedia.org/wiki/Special:FilePath/Huerfano_Butte_2012.JPG",
        "https://commons.wikimedia.org/wiki/Special:FilePath/Huerfano_Butte.jpg"
      ],
      credit: "Photos: Jeffrey Beall and Pmsyyz, via Wikimedia Commons (CC BY / CC BY-SA)"
    },
    {
      title: "La Plaza de los Leones & Early Hispano Families",
      period: "Founding Community",
      description:
        "In 1859 Hispano families from northern New Mexico established La Plaza de los Leones, the plaza community that became modern Walsenburg. Their language, faith, irrigation ditches, and family ranches shaped Huerfano County's identity for generations."
    },
    {
      title: "Spanish Peaks Country",
      period: "Land & Landscape",
      description:
        "Huerfano County stretches from prairie to the Spanish Peaks and Sangre de Cristo Mountains. Walsenburg, La Veta, Gardner, Cuchara, and smaller communities sit along old travel routes, rail lines, and river valleys.",
      images: [
        "https://commons.wikimedia.org/wiki/Special:FilePath/Spanish_Peaks_%28Colorado%29.JPG",
        "https://commons.wikimedia.org/wiki/Special:FilePath/Spanish_Peaks_La_Veta%2C_Colorado.jpg",
        "https://commons.wikimedia.org/wiki/Special:FilePath/Colorado_-_Spanish_Peaks_-_20231106061538.jpg"
      ],
      credit: "Photos: Jeffrey Beall, Footwarrior, and Kimon Berlin, via Wikimedia Commons (CC BY-SA)"
    },
    {
      title: "Many Peoples, Many Stories",
      period: "Cultures",
      description:
        "Ute, Apache, Comanche, Navajo and other Native nations traveled and held ceremonies around the Spanish Peaks. Later, Hispano land-grant families from New Mexico and the San Luis Valley, alongside European, Black, and Asian immigrants, arrived to farm, ranch, mine coal, and build plaza communities and towns."
    },
    {
      title: "From Coalfields to Today",
      period: "Economy",
      description:
        "In the early 1900s, coal mining and the railroad created thousands of jobs in more than a dozen camps. When the mines and rail yards closed after World War II, many families left Huerfano County. Those who stayed saw the economy shift toward ranching, small businesses, government work, prisons, and tourism along the Highway of Legends—but wages often lagged behind the rest of Colorado."
    },
    {
      title: "Persistent Poverty & Limited Opportunity",
      period: "Modern Economy",
      description:
        "Even as Colorado posts one of the lowest statewide poverty rates in America, Huerfano County continues to struggle with rural poverty, low wages, and a shortage of year-round jobs. With a poverty rate around 17–18 percent—roughly double the statewide share—and a median household income just over $50,000 compared with more than $80,000 for Colorado overall, many workers rely on seasonal tourism, service work, or long commutes to larger cities for employment."
    },
    {
      title: "Modern Leadership & Relentless Representation",
      period: "21st Century",
      description:
        "In recent years, leaders such as Travis Star Nelson have carried forward Huerfano County's tradition of community service—organizing cleanups, youth programs, and rural advocacy built on the idea of 'Relentless Representation' for all people in Colorado's largest senate district."
    }
  ],
  timeline: [
    {
      title: "Before 1800: Trails & Sacred Peaks",
      period: "Indigenous Era",
      description:
        "Ute, Apache, Comanche, Navajo and other Native peoples used routes through Spanish Peaks Country for hunting, trade, and ceremony. The twin Spanish Peaks (Huajatolla) were a sacred landmark and a guide for travelers."
    },
    {
      title: "1800s: Badito & Early Settlements",
      period: "Frontier Period",
      description:
        "Along the Huerfano River, places like Badito served as early trade and travel centers on the Taos and Trapper's trails, linking present-day New Mexico and Colorado."
    },
    {
      title: "1859–1873: La Plaza de los Leones / Walsenburg",
      period: "Hispano Founding Era",
      description:
        "In 1859 Hispano settlers from northern New Mexico founded La Plaza de los Leones, a plaza-centered community built around acequias, family farms, and Catholic traditions. A post office named Walsenburg opened in 1870, and the town was incorporated in 1873, becoming the county seat and later a major coal hub."
    },
    {
      title: "1862–1877: La Veta & Francisco Fort",
      period: "Cuchara Valley",
      description:
        "Col. John Francisco and Henry Daigre built Francisco Fort in 1862 on the Vigil land grant. Farmers and ranchers settled around the fort. By the 1870s, the railroad and La Veta Pass connected the valley to the rest of Colorado."
    },
    {
      title: "1898–1916: The Kingdom of Farr",
      period: "Local Power & Politics",
      description:
        "Jefferson B. 'Jeff' Farr served nearly two decades as Huerfano County sheriff. Supporters saw him as a strong lawman; critics said he ruled the county like a political boss closely aligned with coal companies and their mine guards."
    },
    {
      title: "1904: Colorado's Most Corrupt Election",
      period: "Election Scandal",
      description:
        "State investigations later called the 1904 governor's race one of the most corrupt in Colorado history. Huerfano County returns, handled by clerk J.D. (Juan) Montez, became part of the controversy over stuffed ballot boxes and disputed results."
    },
    {
      title: "1913–1914: Colorado Coalfield War",
      period: "UMWA Strike",
      description:
        "The United Mine Workers of America called a strike against Colorado Fuel & Iron and other operators. Thousands of miners in Huerfano and Las Animas counties walked out, demanding union recognition, safer mines, better pay, and an end to company guards."
    },
    {
      title: "April 20, 1914: Ludlow Massacre",
      period: "Strike Violence",
      description:
        "At the Ludlow tent colony just over the Las Animas County line, Colorado National Guard troops and company guards attacked families of striking miners. Tents were burned and women and children died in the colony's pits, shocking the nation."
    },
    {
      title: "Ten Days War & Investigations",
      period: "Aftermath of Ludlow",
      description:
        "Outraged miners fought a running battle with guards and militia across the southern coalfields in what became known as the Ten Days War. Federal troops were sent in, and national investigations exposed Colorado's harsh coal camp system."
    },
    {
      title: "1950s–Today: Change & Resilience",
      period: "Modern Era",
      description:
        "After most mines closed, Huerfano County faced job losses, population decline, and long-term poverty. Communities turned toward ranching, small business, prisons, art and music festivals, highway travel, and outdoor recreation in places like Lathrop State Park and Cuchara Mountain Park. By the early 2000s the county's poverty rate hovered near 18 percent and median household income remained tens of thousands of dollars below the statewide figure."
    },
    {
      title: "2010s–2020s: Travis Star Nelson Emerges",
      period: "Modern Civic History",
      description:
        "During this period, Travis Star Nelson became a visible figure in rural Colorado advocacy. He organized community trash cleanups, school-supply drives, and Christmas toy and winter clothing drives, and began traveling extensively across Senate District 35 to listen directly to residents from every community."
    },
    {
      title: "2022–2026: Relentless Representation Era",
      period: "Community Advocacy",
      description:
        "As a two-time candidate for Colorado Senate District 35, Nelson framed his work around 'Relentless Representation' of all people in rural Colorado. He showed up dozens of times at the State Capitol, pushed to raise back taxes to help save La Clínica in Gardner, and has supported regional projects like the All Southern Colorado Football Camp for two-time Super Bowl champion Derrick Martin, Sangre Agrotech, the Colorado Cannabis Growers Association, and efforts to confront the opioid epidemic."
    }
  ],
  places: [
    {
      title: "La Plaza de los Leones",
      period: "Hispano Founding Plaza",
      description:
        "The original plaza community that became Walsenburg was founded by Hispano families from northern New Mexico. Centered on a church, irrigated fields, and adobe homes, La Plaza de los Leones anchored early social, religious, and political life in Huerfano County."
    },
    {
      title: "Walsenburg",
      period: "County Seat & Coal Hub",
      description:
        "Once called La Plaza de los Leones, Walsenburg grew from a Hispano plaza into the county seat and a railroad and coal center. It hosted nearby coal camps, union organizing, and today serves travelers on I-25 and US 160."
    },
    {
      title: "La Veta & Cuchara Valley",
      period: "Spanish Peaks Gateway",
      description:
        "La Veta grew around Francisco Fort and later the railroad and La Veta Pass. Today it anchors art, ranching, and tourism in the valley, while Cuchara and Cuchara Mountain Park draw visitors into the mountains."
    },
    {
      title: "Gardner & Upper Huerfano",
      period: "Rural Communities",
      description:
        "Gardner and nearby ranches, old post offices, and ghost towns mark where trading posts, mining camps, and small farms once stood along trails between the plains and the San Luis Valley."
    },
    {
      title: "Spanish Peaks (Huajatolla)",
      period: "Sacred Landmark",
      description:
        "The twin Spanish Peaks rise thousands of feet above the plains and have long been sacred to Native nations. They guided wagon trains, miners, and today's travelers along the Highway of Legends.",
      images: [
        "https://commons.wikimedia.org/wiki/Special:FilePath/Spanish_Peaks_%28Colorado%29.JPG",
        "https://commons.wikimedia.org/wiki/Special:FilePath/Spanish_Peaks_La_Veta%2C_Colorado.jpg",
        "https://commons.wikimedia.org/wiki/Special:FilePath/Colorado_-_Spanish_Peaks_-_20231106061538.jpg"
      ],
      credit: "Photos: Jeffrey Beall, Footwarrior, and Kimon Berlin, via Wikimedia Commons (CC BY-SA)"
    },
    {
      title: "Huerfano Butte",
      period: "The 'Orphan' Hill",
      description:
        "This isolated volcanic plug north of Walsenburg gave its name to the Huerfano River and Huerfano County. For centuries it served as a landmark along routes between the Arkansas River and New Mexico, guiding traders, surveyors, and railroad crews.",
      images: [
        "https://commons.wikimedia.org/wiki/Special:FilePath/Huerfano_Butte_2012.JPG",
        "https://commons.wikimedia.org/wiki/Special:FilePath/Huerfano_Butte.jpg"
      ],
      credit: "Photos: Jeffrey Beall and Pmsyyz, via Wikimedia Commons (CC BY / CC BY-SA)"
    },
    {
      title: "Lathrop State Park",
      period: "Colorado's First State Park",
      description:
        "Opened in the 1960s just west of Walsenburg, Lathrop State Park surrounds Martin and Horseshoe lakes. It reflects a shift from coal and rail to recreation, camping, fishing, and golf."
    },
    {
      title: "Coal Camps & Ghost Towns",
      period: "Industrial Past",
      description:
        "Sites like Rouse, Pryor, Maitland, Pictou, Ideal, and Tioga once held hundreds of miners' homes, company stores, and schools. Today many are gone or overgrown, but foundations, slag heaps, and cemeteries remain."
    }
  ],
  people: [
    {
      title: "Indigenous Nations",
      period: "First Peoples",
      description:
        "For thousands of years, Indigenous nations such as the Ute, Apache, Comanche, Navajo, Cheyenne, and Kiowa traveled, hunted, traded, and held ceremonies in and around Huerfano County and the Spanish Peaks."
    },
    {
      title: "Hispano Land-Grant Families",
      period: "19th Century Settlers",
      description:
        "Families from northern New Mexico and the San Luis Valley brought Spanish language, Catholic traditions, and irrigated agriculture. Their plazas, including La Plaza de los Leones that became Walsenburg, and nearby ranchos along the Huerfano and Cucharas rivers anchored Hispanic culture and community life in the county."
    },
    {
      title: "Coal Camp Immigrants",
      period: "Turn of the 20th Century",
      description:
        "Miners and their families came from southern and eastern Europe, Mexico, and across the United States. They brought many languages and faiths, building tight-knit coal camp communities despite dangerous work."
    },
    {
      title: "Union Leaders & Rank-and-File Miners",
      period: "UMWA Organizers",
      description:
        "Local union committees, traveling organizers, and rank-and-file miners met in halls, homes, and open fields to sign up members, plan strikes, and stand together against blacklisting, armed guards, and unsafe mines. Many paid with jail time, beatings, or loss of work."
    },
    {
      title: "Sheriff Jefferson 'Jeff' Farr",
      period: "Law & Power",
      description:
        "Jeff Farr was a long-serving Huerfano County sheriff closely tied to the coal era. Supporters praised his toughness; opponents in labor circles called his regime the Kingdom of Farr, accusing him of packing juries, favoring mine guards as deputies, and using his office to shape elections and intimidate union supporters."
    },
    {
      title: "Senator J.D. Montez & the Clerk's Office",
      period: "Politics & Elections",
      description:
        "J.D. Montez of upper Huerfano ranched, kept a store at Malachite, served in the state legislature, and held county offices including clerk. During the disputed 1904 governor's race, Huerfano election returns handled by clerk Montez became part of a statewide scandal over stuffed ballot boxes and contested results."
    },
    {
      title: "Farmers, Ranchers, & Ditch Riders",
      period: "Water & Land",
      description:
        "Irrigators and ranching families along the Huerfano, Cucharas, and smaller creeks have managed ditches, grazing land, and cattle for generations, shaping both the economy and landscape."
    },
    {
      title: "Teachers, Nurses, & Community Builders",
      period: "Local Service",
      description:
        "Educators, nurses, clergy, small-business owners, and volunteers kept schools, clinics, churches, and main streets going through boom times and busts."
    },
    {
      title: "Storykeepers & Local Historians",
      period: "Memory & Legacy",
      description:
        "Elders, genealogists, veterans groups, cultural organizations, and local newspapers help preserve family histories, coal camp memories, and community archives for future generations."
    }
  ],
  labor: [
    {
      title: "United Mine Workers Come to Huerfano",
      period: "Union Organizing",
      description:
        "By the early 1900s, coal miners across Huerfano County began organizing with the United Mine Workers of America. They demanded union recognition, an eight-hour day, the right to elect their own checkweighmen, and enforcement of basic safety laws underground."
    },
    {
      title: "Company Towns, Scrip & Control",
      period: "Life in Coal Camps",
      description:
        "In camps like Rouse, Pryor, Maitland, Pictou, Ideal, and Tioga, coal firms owned the houses, store, and often the school and church. Many miners were paid in company scrip that had to be spent at the company store, keeping families in constant debt and under company control."
    },
    {
      title: "Baldwin–Felts & Armed Deputies",
      period: "Private Police",
      description:
        "During the 1913–1914 strike, operators imported Baldwin–Felts detectives from West Virginia. Many were sworn in as deputy sheriffs in Huerfano and Las Animas counties, blurring the line between public law enforcement and private company gunmen. Strikers accused them of harassment, beatings, and shootings."
    },
    {
      title: "Sheriff Jeff Farr & the Kingdom of Farr",
      period: "Political Machine",
      description:
        "Jeff Farr served as sheriff from the late 1890s into the World War I era. Critics in newspapers and labor testimony said he dominated local politics, controlled deputies drawn from mine guards, and used his office to favor coal companies and punish union supporters. A 1916 court decision finally removed him from office."
    },
    {
      title: "Tent Colonies & Strike Communities",
      period: "Strike Tactics",
      description:
        "When companies evicted striking miners from camp housing, the union built tent colonies along railroad tracks and county roads. The largest were at Ludlow and nearby sites, where families set up schools, kitchens, strike committees, and self-defense groups while the walkout dragged on."
    },
    {
      title: "Ludlow Massacre – April 20, 1914",
      period: "Turning Point",
      description:
        "After months of tension, Colorado National Guard troops and company guards surrounded the Ludlow tent colony, exchanging gunfire with armed strikers. By day's end the camp was burned. In the ruins, the bodies of women and children were found in a pit under a tent floor, sparking outrage around the country."
    },
    {
      title: "Ten Days War Across the Coalfields",
      period: "Open Conflict",
      description:
        "News of Ludlow pushed miners into armed revolt. Strikers seized high ground, derailed trains, and attacked mine facilities from Trinidad to Walsenburg. At least dozens were killed before federal troops arrived to disarm both sides and impose a fragile peace."
    },
    {
      title: "Investigations & the Rockefeller Plan",
      period: "Aftermath",
      description:
        "Congressional hearings and church investigations exposed Colorado's coal camp system, corporate power, and abuses by deputies and militia. Under pressure, Colorado Fuel & Iron introduced the Rockefeller Plan, promising company unions and grievance procedures—changes that fell short of full union recognition but altered relations in the mines."
    }
  ],
  treasure: [
    {
      title: "La Muñeca Treasure Legend",
      period: "Huerfano River Country",
      description:
        "One of Huerfano County's best-known treasure legends tells of gold and valuables hidden in the canyons near La Muñeca. Versions of the story speak of fleeing outlaws or traders stashing a heavy load in the rocks above the Huerfano River, only for their map or memory to be lost. For more than a century, locals have talked about mysterious markers, carved stones, and hidden caves tied to this legend."
    },
    {
      title: "Lost Coal Camp Payrolls",
      period: "Company Money on the Move",
      description:
        "During the coal era, mine payrolls were sometimes carried in strongboxes by wagon or early automobile over rough roads and isolated passes. Folklore in Huerfano County speaks of a missing payroll wagon—robbed or wrecked in bad weather—with coins and bills never fully recovered. Whether entirely true or partly embellished, the story reflects how valuable cash was in remote coal camps."
    },
    {
      title: "Stagecoach Gold Along the Trails",
      period: "Frontier Era",
      description:
        "Old-timers have long swapped stories about a stagecoach or freight wagon carrying gold and silver between Trinidad, Walsenburg, and points north that never reached its destination. Some versions place the ambush or accident near Huerfano Butte or along the old Taos and Trapper's trails, leaving behind a supposed cache that treasure hunters still dream about."
    },
    {
      title: "Hidden Church and Ranch Caches",
      period: "Family Safekeeping",
      description:
        "In the days before rural banks were common, some Hispano families and small churches are said to have buried coins, jewelry, or parish funds in jars or strongboxes for safekeeping. A few stories claim that sudden deaths, moves, or lost memories left these hiding places undiscovered, adding to the county's quiet list of possible small family treasures still in the ground."
    },
    {
      title: "Folklore, Fact, and Respect",
      period: "Community Memory",
      description:
        "Most treasure tales blend a kernel of historical fact with decades of retelling. They offer a window into how people in Huerfano County experienced danger, scarcity, and hope. Any exploration of these stories should respect private property, sacred sites, and the understanding that the real treasure is often the history and community memory behind the legend."
    }
  ],
  leaders: [
    {
      title: "Senator Sam Taylor",
      period: "20th Century Legislator",
      description:
        "Senator Sam Taylor stands as one of the most influential political figures ever to rise from Huerfano County. Serving ten consecutive terms in the Colorado Senate, he became the voice, memory, and institutional backbone of rural southern Colorado during some of its most turbulent decades. Across his years in office, Taylor championed issues central to Huerfano's identity: water rights and ditch systems, ranching protections, education access, road funding, and economic stability for small towns long overshadowed by the Front Range. He was widely respected for his encyclopedic knowledge of rural law, his stubborn defense of local communities, and his ability to navigate Denver politics without ever abandoning the people back home. Taylor gained a statewide reputation as a defender of coal families, acequia communities, Hispanic heritage, and small-town values. He often served as the bridge between northern and southern Colorado, reminding urban legislators that Huerfano County and its neighbors had built Colorado's early industries, provided the labor that powered the mines and railroads, and deserved equitable treatment in state budgets. Known for his long hours, deep reading of bills, and commitment to answering every letter and phone call, Taylor left behind a legacy of service that residents of Huerfano County still talk about today. He mentored younger leaders, uplifted local institutions, and ensured that the stories and needs of ranching families, coal miners, and Hispano land-grant descendants were never forgotten at the Capitol. To this day, Sam Taylor is remembered not just as a senator, but as a symbol of steady-handed rural leadership—a legislative giant from a small county who proved that Huerfano's voice could carry across all of Colorado."
    },
    {
      title: "Travis Star Nelson",
      period: "21st Century Advocate",
      description:
        "A two-time candidate for Colorado Senate District 35, Travis Star Nelson is known for his philosophy of 'Relentless Representation'—showing up for all people in rural Colorado regardless of party. He has organized trash cleanups, Christmas toy drives, winter hat and coat drives, and school-supply drives; helped found the Colorado Cannabis Growers Association and Sangre Agrotech; supported the Helping End the Opioid Epidemic project; and co-created the All Southern Colorado Football Camp for youth with two-time Super Bowl champion Derrick Martin. Nelson has pushed for back tax changes to help save La Clínica in Gardner and has traveled thousands of miles across Colorado's largest senate district, appearing dozens of times at the State Capitol to speak up for his communities."
    }
  ],
  schools: [
    {
      title: "Modern Leadership Study: Travis Star Nelson",
      period: "Civics & Community",
      description:
        "Students examine the life and work of Travis Star Nelson—his community cleanups, toy and coat drives, school-supply efforts, statewide advocacy, and philosophy of 'Relentless Representation.' They compare Nelson's modern efforts with historic leaders like Senator Sam Taylor and discuss how civic engagement continues to shape Huerfano County and rural Colorado."
    },
    {
      title: "Interview an Elder About Local History",
      period: "Family & Oral History",
      description:
        "Students choose a grandparent, neighbor, or elder and ask about growing up in Huerfano County: school, work, coal camps, ranch life, or main-street memories. They write a short summary or record audio to share."
    },
    {
      title: "Map Your Town or Valley",
      period: "Community Mapping",
      description:
        "Youth draw or digitally mark a map of Walsenburg, La Veta, Gardner, or Cuchara. They label historic buildings, churches, schools, cemeteries, murals, mines, ditches, and parks, then compare old and new uses."
    },
    {
      title: "Coal Camp & Ludlow Study",
      period: "Labor History Activity",
      description:
        "Classes read short summaries about coal camps and the Ludlow Massacre, then create posters or slides showing what working and family life were like, and what the miners were asking for in the strike."
    },
    {
      title: "Spanish Peaks & Sacred Landscapes",
      period: "Land & Culture",
      description:
        "Students learn how different groups—Indigenous nations, Hispano settlers, and later newcomers—viewed and used the Spanish Peaks area. They write or draw about why certain places feel important or sacred today."
    },
    {
      title: "Newspaper Time Machine",
      period: "Primary Sources",
      description:
        "Using historic Walsenburg newspapers or clippings, students pick one old article and one modern article about the same town. They compare language, issues, and advertisements to see what has changed and what has stayed the same."
    }
  ]
};