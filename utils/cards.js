const cards = {
  whiteCards: [
    "Silence.",
    "The illusion of choice in a late-stage capitalist society.",
    "Many bats.",
    "Famine.",
    "Flesh-eating bacteria.",
    "Flying sex snakes.",
    "Not giving a shit about the Third World.",
    "Magnets.",
    "Shapeshifters.",
    "Seeing what happens when you lock people in a room with hungry seagulls.",
    "A crucifixion.",
    "Jennifer Lawrence.",
    "72 virgins.",
    "A live studio audience.",
    "A time travel paradox.",
    "Authentic Mexican cuisine.",
    "Doing crimes.",
    "Synergistic management solutions.",
    "Crippling debt.",
    "Daddy issues.",
    "Used panties.",
    "A fart so powerful that it wakes the giants from their thousand-year slumber.",
    "Former President George W. Bush.",
    "Full frontal nudity.",
    "Covering myself with Parmesan cheese and chili flakes because I am pizza.",
    "Laying an egg.",
    "Getting naked and watching Nickelodeon.",
    "Pretending to care.",
    "Having big dreams but no realistic way to achieve them.",
    "Seeing Grandma naked.",
    "Boogers.",
    "The inevitable heat death of the universe.",
    "The miracle of childbirth.",
    "The Rapture.",
    "Whipping it out.",
    "White privilege.",
    "Emerging from the sea and rampaging through Tokyo.",
    "The Hamburglar.",
    "AXE Body Spray.",
    "The Blood of Christ.",
    "Soft, kissy missionary sex.",
    "BATMAN!",
    "Agriculture.",
    "Barely making $25,000 a year.",
    "Natural selection.",
    "Coat hanger abortions.",
    "Sex with Patrick Stewart.",
    "My abusive boyfriend who really isn't so bad once you get to know him.",
    "Prescription pain killers.",
    "Swooping.",
    "Mansplaining.",
    "A homoerotic volleyball montage.",
    "Alexandria Ocasio-Cortez.",
    "PUtting things where they go.",
    "Fragile masculinity.",
    "All-you-can-eat shrimp for $8.99.",
    "An old guy who's almost dead.",
    "Kanye West.",
    "Hot cheese.",
    "Raptor attacks.",
    "Seven dead and three in critical condition.",
    "Smegma.",
    "Alcoholism.",
    "A middle-aged man on roller skates.",
    'Looking in the mirror, applying lipstick, and whispering "tonight, you will have sex with Tom Cruise."',
    "Bingeing and purging.",
    "An oversized lollipop.",
    "Self-loathing.",
    "Sitting on my face and telling me I'm garbage.",
    "Half-assed foreplay.",
    "The Holy Bible.",
    "German dungeon porn.",
    "Being on fire.",
    "Teenage pregnancy.",
    "Gandhi.",
    "Your weird brother.",
    "A Fleshlight(R).",
    "A pyramid of severed heads.",
    "An erection that lasts longer than four hours.",
    "A three-way with my wife and Shaquille O'Neal.",
    "The past.",
    "My genitals.",
    "An endless stream of diarrhea.",
    "Science.",
    "Not reciprocating oral sex.",
    "Flightless birds.",
    "A good sniff.",
    "50,000 volts straight to the nipples.",
    "A balanced breakfast.",
    "Dead birds everywhere.",
    "The arrival of pizza.",
    "Permanent Orgasm-Face Disorder.",
    "The cool, refreshing taste of Pepsi(R).",
    "Chemical weapons.",
    'Oprah.',
    'Wondering if it\'s possible to get some of that salsa to go.',
    'Bananas.',
    'Passive aggressive Post-it notes.',
    'Hillary Clinton\'s emails.',
    'Switching to Geico(R).',
    'Peeing a little bit.',
    'Wet dreams.',
    'The Jews.',
    'My cheating son-of-a-bitch husband.',
    'Powerful thighs.',
    'These hoes.',
    'The only gay person in a hundred miles.',
    'Having sex for the first time.',
    'Donald J. Trump.',
    'Kissing grandma on the forehead and turning off her life support.',
    'Sexual tension.',
    'An AR-15 assault rifle.',
    'My good bra.',
    'Punching a congressman in the face.',
    'Fancy Feast(R).',
    'Being rich.',
    'Sweet, sweet vengeance.',
    'Republicans.',
    'Sniffing and kissing my feet.',
    'A much younger woman.',
    'Poverty.',
    'Kamikaze pilots.',
    'Committing suicide.',
    'The homosexual agenda.',
    'A Mexican.',
    'A falcon with a cap on its head.',
    'Wizard music.',
    'The Kool-Aid Man.',
    'Juuling.',
    'Free samples.',
    'Hurting those closest to me.',
    'Doing the right thing.',
    'The Three-Fifths Compromise.',
    'Lactation.',
    'World peace.',
    'Shutting up so I can watch the game.',
    'Eating a hard boiled egg out of my husband\'s asshole.',
    'RoboCop.',
    'One titty hanging out.',
    'Justin Bieber.',
    'Oompa-Loompas.',
    'Inappropriate yodeling.',
    'Puberty.',
    'Ghosts.',
    '50 mg of Zoloft daily.',
    'Fucking my sister.',
    'Braiding three penises into a Twizzler.',
    'Vigorous jazz hands.',
    'Getting fingered.',
    'My Uber driver, Pavel.',
    'GoGurt(R).',
    'Police brutality.',
    'Filling my briefcase with business stuff.',
    'Preteens.',
    'My fat daughter.',
    'Rap music.',
    'Fading away into nothingness.',
    'Darth Vader.',
    'A sad handjob.',
    'Exactly what you\'d expect.',
    'Expecting a burp and vomiting on the floor.',
    'Adderall(R).',
    'The Red Hot Chili Peppers.',
    'Sideboob.',
    'An octopus giving seven handjobs and smoking a cigarette.',
    'My neck, my back, my pussy, and my crack.',
    'J.D. Power and his associates.',
    'Mouth herpes.',
    'Sperm whales.',
    'Women of color.',
    'Men discussing their feelings in an emotionally healthy way.',
    'Incest.',
    'Pac-Man uncontrollably guzzling cum.',
    'Casually suggesting a threesome.',
    'Running out of semen.',
    'God.',
    'The wonders of the Orient.',
    'Sexual peeing.',
    'Emotions.',
    'Licking things to claim them as your own.',
    'Jobs.',
    'The placenta.',
    'Spontaneous human combustion.',
    'The Bachelorette season finale.',
    'Throwing grapes at a man until he loses touch with reality.',
    'Establishing dominance.',
    'Finger painting.',
    'Old-people smell.',
    'Getting crushed by a vending machine.',
    'My inner demons.',
    'A Super Soaker(TM) full of cat pee.',
    'Aaron Burr.',
    'Cuddling.',
    'However much weed $20 can buy.',
    'Battlefield amputations.',
    'Spaghetti? Again?',
    'Ronald Reagan.',
    'A disappointing birthday party.',
    'Nachos for the table.',
    'Becoming a blueberry.',
    'A tiny horse.',
    'William Shatner.',
    'Selling crack to children.',
    'An M. Night Shyamalan plot twist.',
    'Brown people.',
    'Mutually assured destruction.',
    'Pedophiles.',
    'Yeast.',
    'How bad my daughter fucked up her dance recital.',
    'Rectangles.',
    'Catapults.',
    'Poor people.',
    'Only dating Asian women.',
    'The Hustle.',
    'The Force.',
    'How amazing it is to be on mushrooms.',
    'Judging everyone.',
    'Kourtney, Kim, Khloe, Kendall, and Kylie.',
    'Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.',
    'Some god damn peace and quiet.',
    'AIDS.',
    'Pictures of boobs.',
    'Strong female characters.',
    'Some foundation, mascara, and a touch of blush.',
    'Hospice care.',
    'Getting really high.',
    'The opioid epidemic.',
    'Penis envy.',
    'Gay conversion therapy.',
    'Ruth Bader Ginsberg brutally gaveling your penis.',
    'German Chancellor Angela Merkel.',
    'The KKK.',
    'A pangender octopus who roams the cosmos in search of love.',
    'Meth.',
    'Serfdom.',
    'Holding down a child and farting all over him.',
    'A Bop It(TM).',
    'A whole thing of butter.',
    'Still being a virgin.',
    'Solving problems with violence.',
    'Getting cummed on.',
    'Pixelated bukkake.',
    'A lifetime of sadness.',
    'Going an entire day without masturbating.',
    'Dick pics.',
    'Racism.',
    'Menstrual rage.',
    'Sunshine and rainbows.',
    'Radical Islamic terrorism.',
    'Huge biceps.',
    'My little boner.',
    'Dry heaving.',
    'A gossamer stream of jizz that catches the light as it arcs through the morning air.',
    'Executing a hostage every hour.',
    'The rhythms of Africa.',
    'Breaking out into song and dance.',
    'Leprosy.',
    'Gloryholes.',
    'Nipple blades.',
    'The heart of a child.',
    'Puppies!',
    'Fellowship in Christ.',
    'Little boy penises.',
    'Waking up half-naked in a Denny\'s parking lot.',
    'An older woman who knows her way around the penis.',
    'Getting drugs off the street and into my body.',
    'Daniel Radcliffe\'s delicious asshole.',
    'Active listening.',
    'Ethnic cleansing.',
    'Itchy pussy.',
    'Blowing my boyfriend so hard he shits.',
    'A fuck-ton of almonds.',
    'A salad for men that\'s made of metal.',
    'Waiting till marriage.',
    'Unfathomable stupidity.',
    'Shiny objects.',
    'The Devil himself.',
    'Autocannibalism.',
    'Erectile dysfunction.',
    'My collection of Japanese sex toys.',
    'The Pope.',
    'White people.',
    'Tentacle porn.',
    'My bright pink fuckhole.',
    'How far I can get my own penis up my butt.',
    'Having anuses for eyes.',
    'The penny whistle solo from \"My Heart Will Go On.\"',
    'Seppuku.',
    'Danny DeVito.',
    'The magic of live theatre.',
    'Throwing a virgin into a volcano.',
    'Dwayne \"The Rock\" Johnson.',
    'Accepting the way things are.',
    'NBA superstar LeBron James.',
    'Listening to her problems without trying to solve them.',
    'Therapy.',
    'Being fat and stupid.',
    'Pooping back and forth. Forever.',
    'Tearing up that ass like wrapping paper on Christmas morning.',
    'More elephant cock than I bargained for.',
    'A salty surprise.',
    'The South.',
    'The violation of our most basic human rights.',
    'Tap dancing like there\'s no tomorrow.',
    'Consensual sex.',
    'Telling a shitty story that goes nowhere.',
    'A good, strong gorilla.',
    'Seeing my father cry.',
    'Necrophelia.',
    'Being a woman.',
    'Getting into a pretty bad car accident.',
    'Bill Nye the Science Guy.',
    'Black people.',
    'The Boy Scouts of America.',
    'Lunchables(TM).',
    'Bitches.',
    'Some punk kid who stole my turkey sandwich.',
    'Heartwarming orphans.',
    'Spirit Airlines.',
    'Bubble butt bottom boys.',
    'A bowl of mayonnaise and human teeth.',
    'Fiery poops.',
    'Saying \"I love you.\"',
    'Inserting a mason jar into my anus.',
    'The true meaning of Christmas.',
    'Some of the best rappers in the game.',
    'Owning and operating a Chili\'s franchise.',
    'Estrogen.',
    'Girls.',
    'The Russians.',
    'A bleached asshole.',
    'Fucking the weatherman on live television.',
    'PTSD.',
    'Dark and mysterious forces beyond our control.',
    'Smallpox blankets.',
    'Masturbating.',
    'Hobos.',
    'Queefing.',
    'The guys from Queer Eye.',
    'Cardi B.',
    // PAGE 11
   ],
   blackCards: [
    { text: 'Hey Reddit! I\'m _____. Ask me anything.',  pick: 1 },
    { text: 'Introducing X-treme Baseball! It\'s like baseball, but with _____!', pick: 1 },
    { text: 'What is Batman\'s guilty pleasure?', pick: 1 },
    { text: 'TSA guidelines now prohibit _____ on airplanes.', pick: 1 },
    { text: 'Next from J.K. Rowling: Harry Potter and the Chamber of _____.', pick: 1 },
    { text: 'That\'s right, I killed _____. How, you ask? _____.', pick: 2 },
    { text: 'I\'m sorry Professor, but I couldn\'t complete my homework because of _____.', pick: 1 },
    { text: 'And the Academy Award for _____ goes to _____.', pick: 2 },
    { text: 'Dude, *do not* go in that bathroom. There\'s _____ in there.', pick: 1 },
    { text: 'How did I lose my virginity?', pick: 1 },
    { text: 'It\'s a pity that kids these days are all getting involved with _____.', pick: 1 },
    { text: 'Step 1: _____. Step 2: _____. Step 3: Profit.', pick: 2 },
    { text: '_____. Betcha can\'t have just one!', pick: 1 },
    { text: 'Kids, I don\'t need drugs to get high. I\'m high on _____.', pick: 1 },
    { text: 'For my next trick, I will pull _____ out of _____.', pick: 2 },
    { text: 'While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on _____.', pick: 1 },
    { text: 'In the Disney Channel Original Movie, Hannah Montana struggles with _____ for the first time.', pick: 1 },
    { text: 'What\'s my secret power?', pick: 1 },
    { text: 'I\'m going on a cleanse this week. Nothing but kale juice and _____.', pick: 1 },
    { text: '_____ + _____ = _____', pick: 3 },
    { text: 'When Pharaoh remained unmoved, Moses called down a plague of _____.', pick: 1 },
    { text: 'Just once, I\'d like to hear you say \"Thanks, Mom. Thanks for _____.\"', pick: 1 },
    { text: 'Daddy, why is mommy crying?', pick: 1 },
    { text: 'When I was tripping on acid, _____ turned into _____.', pick: 2 },
    { text: '50% of all marriages end in _____.', pick: 1 },
    { text: 'My fellow Americans: Before this decade is out, we *will* have _____ on the moon!', pick: 1 },
    { text: 'This season at Steppenwolf, Samuel Beckett\'s classic existential play: Waiting for _____.', pick: 1 },
    { text: 'Instead of coal, Santa now gives the bad children _____.', pick: 1 },
    { text: 'Life for American Indians was forever changed when the White Man introduced them to _____.', pick: 1 },
    { text: 'What\'s Teach For America using to inspire inner city students to succeed?', pick: 1 },
    { text: 'Maybe she\'s born with it. Maybe it\'s _____.', pick: 1 },
    { text: 'What is George W. Bush thinking about right now?', pick: 1 },
    { text: 'White people like _____.', pick: 1 },
    { text: '_____ is a slippery slope that leads to _____.', pick: 2 },
    { text: 'Why do I hurt all over?', pick: 1 },
    { text: 'A romantic, candle lit dinner would be incomplete without _____.', pick: 1 },
    { text: 'Just saw this upsetting video! Please retweet! #stop_____', pick: 1 },
    { text: 'Fun tip! When your man asks you to go down on him, try surprising him with _____ instead.', pick: 1 },
    { text: 'The class field trip was completely ruined by _____.', pick: 1 },
    { text: 'What\'s a girl\'s best friend?', pick: 1 },
    // PAGE 16
   ]
};

module.exports = cards;