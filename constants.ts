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
        "Huerfano County takes its name from Huerfano Butte, a solitary volcanic plug rising from the prairie north of Walsenburg. 'Huerfano' is Spanish for 'orphan,' a poetic reference to this isolated geological feature that stands apart from the nearby mountains. For centuries, the Butte served as a critical navigational landmark for Indigenous peoples, Spanish explorers, and later American traders on the Trapper's Trail between the Arkansas River and Taos. Today, the name reflects not just the landscape, but a fierce independent spirit in a county that has often followed its own path distinct from the rest of Colorado.",
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
        "Long before it was Walsenburg, the county seat was known as La Plaza de los Leones. Established in 1859 by Don Miguel Antonio Leon and a group of Hispano families from northern New Mexico, the settlement was built in the traditional plaza style—homes constructed wall-to-wall around a central courtyard for defense and community gathering. These early settlers brought with them the acequia system of irrigation, a distinct dialect of Spanish, and a deep Catholic faith. Their legacy remains visible today in the adobe architecture, the intricate network of ditches that still water the fields, and the descendants who continue to ranch and lead the community."
    },
    {
      title: "Spanish Peaks Country",
      period: "Land & Landscape",
      description:
        "The geography of Huerfano County is defined by the dramatic rise of the Spanish Peaks (Huajatolla) from the high plains. These twin igneous mountains, formed by magma pushing up through sedimentary rock, are geological marvels and ecological islands. The county spans diverse ecosystems: from the sagebrush steppe and piñon-juniper woodlands of the lower elevations to the subalpine forests and alpine tundra of the Sangre de Cristo range. This landscape has dictated the human history of the region, channeling trade routes along the river valleys and providing the coal deposits that would later drive the industrial boom.",
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
        "Huerfano County has always been a crossroads of cultures. For millennia, it was the hunting ground and ceremonial site for the Ute (Nuche), Jicarilla Apache, Comanche, and other Indigenous nations. The 19th century brought Hispano settlers expanding north from New Mexico, followed by Anglo-American ranchers and merchants. The coal boom of the late 1800s turned the county into a 'League of Nations,' drawing thousands of immigrants from Italy, Greece, Slovenia, Austria, Japan, Mexico, and beyond. This rich cultural tapestry is woven into the family names, food, festivals, and traditions that define Huerfano County today."
    },
    {
      title: "From Coalfields to Today",
      period: "Economy",
      description:
        "The discovery of vast coal reserves transformed Huerfano County from a quiet ranching frontier into an industrial powerhouse. By the early 1900s, the county was dotted with company towns and crisscrossed by railroads carrying the 'black diamond' fuel to steel mills and cities. However, the decline of coal after World War II brought a painful economic contraction. Mines closed, rails were pulled up, and the population plummeted. In the decades since, the county has reinvented itself multiple times—turning to tourism, the arts, retirement communities, and government services—while retaining a gritty resilience born of its boom-and-bust past."
    },
    {
      title: "Persistent Poverty & Limited Opportunity",
      period: "Modern Economy",
      description:
        "Despite its natural beauty and rich history, Huerfano County faces significant modern economic challenges. While Colorado as a whole has prospered, the county has often been left behind. Poverty rates hover around 17–18 percent—nearly double the state average—and median household incomes lag significantly behind urban corridors. The loss of industrial jobs has left a gap that seasonal tourism and service work struggle to fill. Many residents face long commutes to Pueblo or Trinidad for stable employment, highlighting the ongoing need for sustainable local economic development and infrastructure investment."
    },
    {
      title: "Modern Leadership & Relentless Representation",
      period: "21st Century",
      description:
        "In the face of these challenges, a new generation of leadership has emerged, focused on community empowerment and direct action. Figures like Travis Star Nelson have championed a model of 'Relentless Representation,' emphasizing that rural communities deserve the same attention and resources as the Front Range. This approach combines grassroots organizing—such as community cleanups and supply drives—with vocal advocacy at the state level, ensuring that the unique voice of Huerfano County is heard in the halls of power in Denver."
    }
  ],
  timeline: [
    {
      title: "Before 1800: Trails & Sacred Peaks",
      period: "Indigenous Era",
      description:
        "Long before European maps were drawn, the Spanish Peaks (Huajatolla) stood as sacred sentinels for the Ute, Apache, Comanche, and other tribes. The area was a vital corridor for hunting bison and a spiritual center for rain-gathering ceremonies. Ancient trails crisscrossed the region, linking the plains to the mountain passes—routes that would later be followed by Spanish explorers, fur trappers, and modern highways."
    },
    {
      title: "1819–1821: The Borderlands",
      period: "Frontier Period",
      description:
        "Under the Adams-Onís Treaty of 1819, the Arkansas River became the international boundary between the United States and Spain (later Mexico). Huerfano County lay in this borderland zone, a place of tension and trade. The Santa Fe Trail's mountain branch and the Trapper's Trail brought commerce through the region, with early outposts like Badito serving as crucial stops for weary travelers crossing the Sangre de Cristo Pass."
    },
    {
      title: "1859–1873: La Plaza de los Leones / Walsenburg",
      period: "Hispano Founding Era",
      description:
        "In 1859, the Leon family led a migration of settlers from New Mexico to the Cucharas River valley, establishing La Plaza de los Leones. It was a self-sufficient agricultural community rooted in Hispano traditions. In 1870, a German merchant named Fred Walsen opened a trading post and became a civic leader. The town was renamed Walsenburg in his honor and incorporated in 1873, marking the shift from a plaza community to a commercial hub and county seat."
    },
    {
      title: "1862–1877: La Veta & Francisco Fort",
      period: "Cuchara Valley",
      description:
        "Colonel John Francisco and Henry Daigre established Francisco Fort in 1862 on the Vigil Land Grant, creating a secure outpost that attracted farmers and ranchers to the lush Cuchara Valley. The adobe fort served as the center of the community until the arrival of the Denver & Rio Grande Railroad in 1876. The town of La Veta was platted the same year, becoming a key shipping point for lumber, livestock, and coal."
    },
    {
      title: "1898–1916: The Kingdom of Farr",
      period: "Local Power & Politics",
      description:
        "For nearly twenty years, Sheriff Jefferson 'Jeff' Farr held Huerfano County in an iron grip. Known as the 'King of Huerfano,' Farr built a powerful political machine closely allied with the major coal companies. He controlled elections, appointed mine guards as deputies, and used his authority to suppress union activity. His reign is a study in the rough-and-tumble, often corrupt, politics of the frontier industrial era."
    },
    {
      title: "1904: Colorado's Most Corrupt Election",
      period: "Election Scandal",
      description:
        "The 1904 gubernatorial election in Colorado is infamous for its fraud, and Huerfano County was at the center of the storm. County Clerk J.D. (Juan) Montez and the Farr machine were accused of stuffing ballot boxes and manipulating returns to ensure victory for their favored candidates. The resulting investigation and legal battles exposed the depth of political corruption in the coalfields."
    },
    {
      title: "1913–1914: Colorado Coalfield War",
      period: "UMWA Strike",
      description:
        "In September 1913, thousands of miners in southern Colorado walked off the job in a strike called by the United Mine Workers of America. They demanded union recognition, fair weights for their coal, safety enforcement, and freedom from the tyranny of the company town system. The strike paralyzed the industry and led to a brutal standoff between miners living in tent colonies and the company-backed militia."
    },
    {
      title: "April 20, 1914: Ludlow Massacre",
      period: "Strike Violence",
      description:
        "The conflict reached a tragic climax at the Ludlow tent colony, just south of the Huerfano County line. On April 20, 1914, a day-long gun battle erupted between strikers and the Colorado National Guard. The militia ultimately torched the colony. The next morning, the bodies of two women and eleven children were discovered suffocated in a pit beneath a burning tent. The massacre shocked the world and remains a defining moment in American labor history."
    },
    {
      title: "Ten Days War & Investigations",
      period: "Aftermath of Ludlow",
      description:
        "News of the massacre triggered an armed uprising known as the Ten Days War. Enraged miners attacked mines and destroyed property across Huerfano and Las Animas counties. The violence only ended with the arrival of federal troops. Subsequent investigations, including the U.S. Commission on Industrial Relations, laid bare the harsh conditions of the coal camps and led to significant, albeit gradual, labor reforms."
    },
    {
      title: "1950s–Today: Change & Resilience",
      period: "Modern Era",
      description:
        "The post-WWII era brought the twilight of the coal industry. As mines shuttered, Huerfano County faced a difficult transition. The population shrank, and the economy shifted towards ranching, small-scale tourism, and government employment. Lathrop State Park, opened in 1962, symbolized the new focus on recreation. Despite economic hardships, the community endured, preserving its unique heritage while adapting to a changing world."
    },
    {
      title: "2010s–2020s: Travis Star Nelson Emerges",
      period: "Modern Civic History",
      description:
        "In the 21st century, new leaders arose to address old challenges. Travis Star Nelson became a prominent voice for rural advocacy, launching initiatives to clean up public lands, support local schools, and provide essential supplies to families in need. His work highlighted the power of individual action in strengthening community bonds and filling the gaps left by economic struggle."
    },
    {
      title: "2022–2026: Relentless Representation Era",
      period: "Community Advocacy",
      description:
        "Running for the Colorado Senate, Nelson crystallized his philosophy into 'Relentless Representation.' This era has been marked by a push for greater visibility for Huerfano County in state politics. Efforts include fighting for rural healthcare funding (like La Clínica in Gardner), supporting agricultural innovation, and fostering youth programs like the All Southern Colorado Football Camp. It represents a renewed determination to secure a prosperous future for the county."
    }
  ],
  places: [
    {
      title: "La Plaza de los Leones",
      period: "Hispano Founding Plaza",
      description:
        "The seed from which Walsenburg grew, La Plaza de los Leones was a testament to the communal spirit of its Hispano founders. Built for mutual protection and cooperation, the plaza centered on the San Juan Bautista Church (later St. Mary's). Life revolved around the agricultural calendar, the maintenance of the acequias, and religious festivals. While the physical plaza has been absorbed by the modern town, its cultural footprint remains the foundation of the community."
    },
    {
      title: "Walsenburg",
      period: "County Seat & Coal Hub",
      description:
        "Walsenburg is a town of layers. Beneath its modern surface lies the original Hispano plaza, overlaid by the grid of a booming coal town. In its heyday, it was a bustle of activity, with hotels, saloons, and opera houses catering to a diverse population of miners and merchants. Today, as the county seat, it serves as the commercial and political heart of the region, a gateway to the Spanish Peaks, and a living museum of the county's complex history."
    },
    {
      title: "La Veta & Cuchara Valley",
      period: "Spanish Peaks Gateway",
      description:
        "Nestled at the foot of the Spanish Peaks, La Veta has evolved from a fort and rail depot into a vibrant arts and ranching community. The Cuchara Valley, with its lush hay meadows and stunning vistas, has long been a retreat for those seeking beauty and solitude. The village of Cuchara, further up the valley, began as a summer resort and continues to draw visitors to its mountain charm and the nearby ski slopes of the past."
    },
    {
      title: "Gardner & Upper Huerfano",
      period: "Rural Communities",
      description:
        "The Upper Huerfano Valley is a landscape of wide-open spaces and deep history. Gardner, once a bustling trade center on the stagecoach line, anchors a community of ranchers and farmers. The area is dotted with the remnants of homesteads, old post offices like Malachite and Redwing, and the memories of a time when this valley was a primary thoroughfare for travel into the San Luis Valley."
    },
    {
      title: "Spanish Peaks (Huajatolla)",
      period: "Sacred Landmark",
      description:
        "Dominating the horizon, the Spanish Peaks are more than just mountains; they are a spiritual presence. Known to the Ute as Huajatolla ('Breasts of the Earth'), they were believed to be the source of all life and rain. Geologically, they are famous for their radiating dikes—great walls of rock that extend for miles. They have guided travelers for centuries and remain a symbol of the enduring power of the natural world in Huerfano County.",
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
        "Rising 6,150 feet, Huerfano Butte is a geological oddity and a historical beacon. This volcanic plug, eroded over millions of years, stands alone in the Huerfano River valley. It was a favorite campsite for Indigenous groups and a designated landmark on 19th-century maps. Its isolation gave the county its name and serves as a fitting metaphor for the unique, independent character of the region.",
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
        "Lathrop State Park holds the distinction of being Colorado's very first state park, established in 1962. It represented a major investment in the county's potential as a recreation destination. With Martin and Horseshoe Lakes offering fishing, boating, and camping, and a golf course with panoramic mountain views, Lathrop remains a crown jewel of the local community and a draw for visitors statewide."
    },
    {
      title: "Coal Camps & Ghost Towns",
      period: "Industrial Past",
      description:
        "The hills and canyons of Huerfano County are haunted by the ghosts of the coal era. Towns like Rouse, Pryor, Maitland, Pictou, Ideal, Cameron, and Ravenwood were once thriving communities with thousands of residents. Today, they are largely gone—reduced to concrete foundations, rusting machinery, and silent cemeteries. These sites stand as solemn monuments to the labor, life, and often tragedy that defined the coal mining age."
    }
  ],
  people: [
    {
      title: "Indigenous Nations",
      period: "First Peoples",
      description:
        "The history of Huerfano County begins with the Indigenous nations. The Ute (Nuche), specifically the Capote and Muache bands, considered this land home. The Jicarilla Apache, Comanche, Kiowa, and Arapaho also utilized the rich hunting grounds and camped in the shelter of the peaks. Their knowledge of the land, the trails, and the plants laid the groundwork for all human habitation that followed. Despite displacement, their spiritual connection to Huajatolla remains unbroken."
    },
    {
      title: "Hispano Land-Grant Families",
      period: "19th Century Settlers",
      description:
        "The Hispano settlers who arrived in the mid-19th century were not just immigrants; they were expanding a culture that had been rooted in the Southwest for centuries. Coming from the San Luis Valley and New Mexico, they brought a communal system of land and water management. Families like the Leons, Atencios, and Archuletas built the plazas, dug the acequias, and established a 'querencia'—a deep, almost spiritual love of place—that continues to define the local culture."
    },
    {
      title: "Coal Camp Immigrants",
      period: "Turn of the 20th Century",
      description:
        "The coal mines were a magnet for the world. To break strikes and lower wages, companies recruited labor from across the globe. Huerfano County became a melting pot where Italian stone masons, Greek philosophers, Slavic laborers, Japanese farmers, and Mexican miners lived side by side. In the camps, despite segregation efforts by companies, these groups forged a shared working-class identity, sharing food, music, and eventually, a union cause."
    },
    {
      title: "Union Leaders & Rank-and-File Miners",
      period: "UMWA Organizers",
      description:
        "The labor movement in Huerfano County was built on the courage of ordinary men and women. Local leaders like Louis Tikas (killed at Ludlow) and the legendary Mother Jones (who was imprisoned in the Walsenburg courthouse cellar) inspired the miners. But it was the rank-and-file—the men who laid down their picks and the women who marched in the streets—who bore the brunt of the struggle for dignity and fair treatment."
    },
    {
      title: "Sheriff Jefferson 'Jeff' Farr",
      period: "Law & Power",
      description:
        "Jeff Farr is perhaps the most controversial figure in county history. A rancher turned lawman, he served as sheriff for decades, building a political machine that rivaled any big-city boss. To his supporters, he was a stabilizer who brought order to a rough frontier. To his detractors, he was a tyrant who turned the sheriff's office into a private army for the coal companies. His eventual ouster by the Colorado Supreme Court marked the end of an era."
    },
    {
      title: "Senator J.D. Montez & the Clerk's Office",
      period: "Politics & Elections",
      description:
        "J.D. (Juan) Montez represents the complex role of Hispano leaders in early Colorado politics. A rancher and merchant from Malachite, he rose to the state legislature and the county clerk's office. His involvement in the 1904 election scandal highlights the difficult position of local leaders navigating the corrupt machinery of the time, balancing community interests with political survival in a Anglo-dominated system."
    },
    {
      title: "Farmers, Ranchers, & Ditch Riders",
      period: "Water & Land",
      description:
        "The backbone of Huerfano County has always been agriculture. For generations, families have raised cattle, sheep, and hay in the high valleys. The 'mayordomos' (ditch riders) who manage the acequias hold a position of respect and vital importance, ensuring the fair distribution of the precious water that makes life possible in this arid land. Their work is a daily practice of community cooperation and stewardship."
    },
    {
      title: "Teachers, Nurses, & Community Builders",
      period: "Local Service",
      description:
        "Behind the headlines of strikes and politics are the quiet heroes who built the community. The nuns who established St. Mary's Hospital and schools, the country doctors who traveled miles to deliver babies, the teachers who taught English to immigrant children in one-room schoolhouses—these women and men wove the social fabric that held the county together through hard times and good."
    },
    {
      title: "Storykeepers & Local Historians",
      period: "Memory & Legacy",
      description:
        "History in Huerfano County is alive thanks to the storykeepers. From the Huerfano County Historical Society to the Francisco Fort Museum, and the countless families who preserve old photos and oral histories, these guardians of memory ensure that the sacrifices and triumphs of the past are not forgotten. They remind us that every crumbling adobe wall and rusted mine cart has a story to tell."
    }
  ],
  labor: [
    {
      title: "United Mine Workers Come to Huerfano",
      period: "Union Organizing",
      description:
        "The arrival of the United Mine Workers of America (UMWA) in the southern coalfields offered hope to thousands of miners living in feudal conditions. Organizers faced beatings, jail, and blacklisting to spread the union message. They sought not just better wages, but fundamental American rights: the right to shop where they pleased, to live in open towns, and to be free from the arbitrary rule of company guards."
    },
    {
      title: "Company Towns, Scrip & Control",
      period: "Life in Coal Camps",
      description:
        "The coal camp was a total institution. The company owned the house, the land, the store, the saloon, and the church. Miners were often paid in 'scrip'—company currency valid only at the company store, where prices were inflated. This system of debt peonage kept families trapped. Fences and armed guards ensured that 'agitators' were kept out and miners were kept in, creating a closed world of corporate control."
    },
    {
      title: "Baldwin–Felts & Armed Deputies",
      period: "Private Police",
      description:
        "To enforce their will, coal operators hired the Baldwin-Felts Detective Agency, notorious for their brutal strike-breaking tactics in West Virginia. These agents were often deputized by Sheriff Farr, giving them the badge of the law to cover their private violence. They drove the 'Death Special,' an improvised armored car with a machine gun, to terrorize striker colonies, escalating the conflict into open warfare."
    },
    {
      title: "Sheriff Jeff Farr & the Kingdom of Farr",
      period: "Political Machine",
      description:
        "The 'Kingdom of Farr' was the political arm of the coal operators. Sheriff Jeff Farr used his control over the jury system and election machinery to protect company interests. Union organizers were jailed on vagrancy charges, while company gunmen went free after assaults. This corruption of the legal system convinced miners that they could not find justice in the courts, pushing them towards armed resistance."
    },
    {
      title: "Tent Colonies & Strike Communities",
      period: "Strike Tactics",
      description:
        "Evicted from their company homes in the winter of 1913, striking families moved into tent colonies established by the union on leased land. These colonies, like Ludlow, became functioning cities with their own security, medical care, and entertainment. They were a powerful demonstration of solidarity, proving that the diverse immigrant groups could unite and survive outside the company's control."
    },
    {
      title: "Ludlow Massacre – April 20, 1914",
      period: "Turning Point",
      description:
        "The Ludlow Massacre was the horrific culmination of the strike. On April 20, 1914, while the colony was celebrating Greek Easter, a firefight broke out. The National Guard, armed with machine guns, raked the tents. As the sun set, the soldiers swept into the camp, looting and burning. The discovery of the suffocated women and children in the 'Black Hole' of Ludlow exposed the savagery of the industrial conflict to the nation."
    },
    {
      title: "Ten Days War Across the Coalfields",
      period: "Open Conflict",
      description:
        "Grief turned to rage. For ten days following Ludlow, the southern coalfields were a war zone. Miners, many veterans of European wars, organized into military units. They attacked mine guards, blew up mine shafts, and seized control of the countryside. The 'Ten Days War' was a genuine insurrection, demonstrating the desperate lengths to which the workers had been pushed."
    },
    {
      title: "Investigations & the Rockefeller Plan",
      period: "Aftermath",
      description:
        "The violence forced the federal government to intervene and brought John D. Rockefeller Jr., the owner of the mines, before Congress. In an attempt to salvage his reputation and undercut the UMWA, he introduced the 'Rockefeller Plan'—a system of employee representation. While it was a 'company union,' it marked the first time operators admitted their workers had a right to a voice, setting the stage for future labor gains."
    }
  ],
  treasure: [
    {
      title: "La Muñeca Treasure Legend",
      period: "Huerfano River Country",
      description:
        "The legend of La Muñeca Canyon is one of the most enduring mysteries of the Southwest. Tales tell of a group of outlaws (or perhaps French traders) who, fleeing pursuit, buried a fortune in gold bullion in a cave high in the canyon walls. They marked the spot with a doll-like rock formation or a carving. Despite countless expeditions and maps surfacing over the decades, the treasure remains hidden, guarded by the rugged terrain and the ghosts of the past."
    },
    {
      title: "Lost Coal Camp Payrolls",
      period: "Company Money on the Move",
      description:
        "In the cash economy of the early 1900s, mine payrolls were tempting targets. Stories persist of a payroll wagon, laden with gold and silver coins destined for a camp like Pictou or Rouse, that vanished in a blizzard or was waylaid by bandits. Some say the loot was buried in a panic near a distinct rock or arroyo, waiting for a retrieval that never happened. Every few years, a rusted strongbox part is found, reigniting the search."
    },
    {
      title: "Stagecoach Gold Along the Trails",
      period: "Frontier Era",
      description:
        "The stage routes through Huerfano County were lifelines of commerce—and magnets for highwaymen. Legends abound of stagecoaches carrying shipments from the mines or banks being held up near Badito or the Butte. In one famous tale, robbers, fearing capture by a posse, hastily buried their haul near a distinctively shaped tree or rock, only to be killed before they could return. The gold is said to still lie beneath the sagebrush."
    },
    {
      title: "Hidden Church and Ranch Caches",
      period: "Family Safekeeping",
      description:
        "Before banks were trusted or accessible, the earth was the safest vault. Many Hispano families and early ranchers buried their savings—gold coins, family jewelry, land deeds—in jars or metal boxes near their homes or in the walls of adobe churches. As elders passed away without sharing the secret locations, or as families were forced to move, these small personal treasures were left behind, becoming part of the quiet folklore of the land."
    },
    {
      title: "Folklore, Fact, and Respect",
      period: "Community Memory",
      description:
        "These treasure tales are more than just stories of greed; they are a record of the county's history of danger, wealth, and loss. They reflect the uncertainty of life on the frontier and in the camps. While they spark the imagination, they also demand respect. Many of the supposed sites are on private land or hold cultural significance. The true treasure of Huerfano County lies in these stories themselves and the rich heritage they preserve."
    }
  ],
  leaders: [
    {
      title: "Senator Sam Taylor",
      period: "20th Century Legislator",
      description:
        "Senator Sam Taylor was a titan of Colorado politics and a devoted son of Huerfano County. Serving ten consecutive terms in the State Senate, he became the 'Dean of the Senate,' wielding immense influence on behalf of rural Colorado. Taylor was a master of the legislative process, fighting tirelessly for water rights, school funding, and infrastructure for the southern counties. He was known for his accessibility—any constituent could call him—and his fierce defense of the 'little guy.' His legacy is written in the laws that protect rural communities and in the memories of those he helped personally. He proved that a leader from a small county could shape the destiny of the entire state."
    },
    {
      title: "Travis Star Nelson",
      period: "21st Century Advocate",
      description:
        "Carrying the torch of community service into the new millennium, Travis Star Nelson has redefined what it means to be a local leader. As a two-time candidate for Senate District 35, he championed the concept of 'Relentless Representation.' His work goes far beyond the campaign trail; he is a hands-on organizer of community cleanups, holiday drives for children, and support networks for the vulnerable. Nelson has been a vocal advocate for the agricultural sector, supporting the Colorado Cannabis Growers Association and Sangre Agrotech, and has worked to combat the opioid crisis. His leadership style is rooted in presence—showing up, listening, and acting to build a stronger, more resilient Huerfano County."
    }
  ],
  schools: [
    {
      title: "Modern Leadership Study: Travis Star Nelson",
      period: "Civics & Community",
      description:
        "In this module, students explore the concept of civic duty through the lens of Travis Star Nelson's work. They will examine his 'Relentless Representation' philosophy and his grassroots initiatives. Students will discuss what it means to be a leader in their own community: Is it holding office? Is it organizing a cleanup? Is it helping a neighbor? They will be challenged to design their own community service project inspired by Nelson's example."
    },
    {
      title: "Interview an Elder About Local History",
      period: "Family & Oral History",
      description:
        "History lives in memory. Students will become oral historians by interviewing a grandparent, neighbor, or community elder. They will prepare questions about daily life in the past—school, games, work, food, and changes they have seen. By recording and sharing these stories, students will help preserve the living history of Huerfano County and bridge the generational gap."
    },
    {
      title: "Map Your Town or Valley",
      period: "Community Mapping",
      description:
        "Geography is destiny. Students will create detailed maps of their town or valley (Walsenburg, La Veta, Gardner). They will identify and label historic landmarks, old acequias, mining sites, and modern community hubs. This activity encourages them to look closely at their environment and understand how the physical landscape has shaped the human history of their home."
    },
    {
      title: "Coal Camp & Ludlow Study",
      period: "Labor History Activity",
      description:
        "This unit dives into the gritty history of the coal wars. Students will study the layout of a coal camp, the economics of scrip, and the events of the 1913-14 strike. They will analyze primary sources—photos, letters, newspaper clippings—to understand the perspectives of the miners, the families, and the company operators, culminating in a project about the significance of the Ludlow Massacre."
    },
    {
      title: "Spanish Peaks & Sacred Landscapes",
      period: "Land & Culture",
      description:
        "The Spanish Peaks are a focal point for diverse cultures. Students will research the significance of Huajatolla to Indigenous peoples, the legends of the Spanish explorers, and the geological formation of the dikes. They will express their own connection to the landscape through art or writing, exploring why certain places hold power and meaning for human beings."
    },
    {
      title: "Newspaper Time Machine",
      period: "Primary Sources",
      description:
        "Using the archives of the Huerfano World or other local papers, students will travel back in time. They will select an event from the past and compare how it was reported then versus how we might see it today. They will look at advertisements, obituaries, and social columns to reconstruct a day in the life of a Huerfano County resident from 1900, 1950, or 1980."
    }
  ]
};