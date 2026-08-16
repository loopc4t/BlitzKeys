const sentences = [
  {
    question: "A friend of mine _____ birth to her son at home with the help of a nurse.",
    options: ["gave", "took", "went"],
    answer: "gave",
  },
  {
    question: "A number of the kids in my classroom come from _____ homes.",
    options: ["broken", "damaged", "hurt"],
    answer: "broken",
  },
  {
    question: "After a _____ divorce from his wife of 20 years, the actor married a woman young enough to be his daughter.",
    options: ["hostile", "cruel", "bitter"],
    answer: "bitter",
  },
  {
    question: "I see my _____ family once a year, during our annual family vacation.",
    options: ["excepted", "expanded", "extended"],
    answer: "extended",
  },
  {
    question: "I was raised in a very _____ family, in which everyone helped each other.",
    options: ["joyful", "loving", "tender"],
    answer: "loving",
  },
  {
    question: "I was _____ by my grandparents after my parents passed away.",
    options: ["created", "grown", "raised"],
    answer: "raised",
  },
  {
    question: "I'm on good _____ with all my former boyfriends.",
    options: ["friends", "relations", "terms"],
    answer: "terms",
  },
  {
    question: "John had a _____ childhood, growing up with happily married parents and three brothers.",
    options: ["carefree", "careful", "careless"],
    answer: "carefree",
  },
  {
    question: "Many women regret _____ an abortion years afterwards.",
    options: ["giving", "having", "taking"],
    answer: "having",
  },
  {
    question: "My aunt's going through a _____ divorce; she's paying a fortune in legal fees.",
    options: ["messy", "sloppy", "untidy"],
    answer: "messy",
  },
  {
    question: "My husband doesn't get along with a few of my family _____.",
    options: ["people", "individuals", "members"],
    answer: "members",
  },
  {
    question: "Although my salary is low, I get child _____ from my ex-husband.",
    options: ["assistance", "provision", "support"],
    answer: "support",
  },
  {
    question: "My sister _____ pregnant immediately after she got married.",
    options: ["got", "had", "made"],
    answer: "got",
  },
  {
    question: "My son is making a diagram of our family _____ for a school project.",
    options: ["roots", "tree", "web"],
    answer: "tree",
  },
  {
    question: "My wife is pregnant with twins. They're _____ in February.",
    options: ["come", "due", "here"],
    answer: "due",
  },
  {
    question: "Sally was granted sole _____ of the children from her first marriage.",
    options: ["custody", "guardian", "keeping"],
    answer: "custody",
  },
  {
    question: "Teenagers who had a _____ childhood often have behavior problems in school.",
    options: ["distressed", "troubled", "worsened"],
    answer: "troubled",
  },
  {
    question: "The celebrity wrote a book about his _____ family.",
    options: ["debilitated", "defective", "dysfunctional"],
    answer: "dysfunctional",
  },
  {
    question: "The divorce _____ awarded the wife $500,000.",
    options: ["contract", "reimbursement", "settlement"],
    answer: "settlement",
  },
  {
    question: "There are four people in my _____ family.",
    options: ["close", "immediate", "neighboring"],
    answer: "immediate",
  },
  {
    question: "They have three biological children and two _____ children.",
    options: ["adopted", "adoptive", "adopting"],
    answer: "adopted",
  },
  {
    question: "This moisturizer will give you a _____ complexion.",
    options: ["radiant", "striking", "trim"],
    answer: "radiant",
  },
  {
    question: "She has a _____ waist and wide hips.",
    options: ["slender", "muscular", "medium"],
    answer: "slender",
  },
  {
    question: "He bears a _____ resemblance to a good friend of mine.",
    options: ["striking", "curly", "deep-set"],
    answer: "striking",
  },
  {
    question: "I've never liked my _____ hair; I wish it was straight.",
    options: ["curly", "facial", "radiant"],
    answer: "curly",
  },
  {
    question: "His _____ eyes make him look very pensive.",
    options: ["deep-set", "slender", "muscular"],
    answer: "deep-set",
  },
  {
    question: "I love men with _____ hair - I think it's sexy.",
    options: ["facial", "medium", "trim"],
    answer: "facial",
  },
  {
    question: "Would you please _____ your hair? It looks like you've just gotten out of bed.",
    options: ["comb", "curly", "radiant"],
    answer: "comb",
  },
  {
    question: "He has a _____ build - he's not particularly strong, but not especially skinny either.",
    options: ["medium", "slender", "facial"],
    answer: "medium",
  },
  {
    question: "My soccer coach has very _____ legs.",
    options: ["muscular", "comb", "curly"],
    answer: "muscular",
  },
  {
    question: "A lot of successful entrepreneurs have not only a _____ imagination, but also the willingness to work hard.",
    options: ["bright", "lucid", "vivid"],
    answer: "vivid",
  },
  {
    question: "He really hurt my _____ when he called me an idiot.",
    options: ["emotions", "feelings", "senses"],
    answer: "feelings",
  },
  {
    question: "His superiority _____ makes him impossible to work with because he won't listen to suggestions.",
    options: ["belief", "complex", "tendency"],
    answer: "complex",
  },
  {
    question: "I had to _____ my pride and apologize to Janet for overreacting to her criticism.",
    options: ["chew", "eat", "swallow"],
    answer: "swallow",
  },
  {
    question: "I like to date men with a great _____ of humor.",
    options: ["feel", "touch", "sense"],
    answer: "sense",
  },
  {
    question: "In some cultures, it's considered very rude to _____ your mind.",
    options: ["say", "speak", "talk"],
    answer: "speak",
  },
  {
    question: "It's good to _____ others first, but not at the expense of your own well-being.",
    options: ["get", "put", "set"],
    answer: "put",
  },
  {
    question: "Most people who work as comedians have very _____ personalities.",
    options: ["outgoing", "tendency", "upcoming"],
    answer: "outgoing",
  },
  {
    question: "My brother is _____ shy, but I'm trying to encourage him to come out of his _____ .",
    options: ["painfully", "shell"], // Note: two blanks in original
    answer: "painfully", // Main answer for first blank
  },
  {
    question: "My daughter gets along with her classmates, but she has a competitive _____ when it comes to academics.",
    options: ["streak", "spot", "strip"],
    answer: "streak",
  },
  {
    question: "My husband forgives other people very easily; he's not one to _____ a grudge.",
    options: ["bear", "hurt", "swallow"],
    answer: "bear",
  },
  {
    question: "She would never cheat on her husband; she's _____ loyal to him.",
    options: ["angrily", "brutally", "fiercely"],
    answer: "fiercely",
  },
  {
    question: "The kids were suspended for playing a _____ on the teacher.",
    options: ["grudge", "streak", "prank"],
    answer: "prank",
  },
  {
    question: "Working with a therapist has helped me overcome my problems with _____ self-esteem.",
    options: ["deep", "low", "small"],
    answer: "low",
  },
  {
    question: "You need to develop a _____ skin; you can't let every little comment upset you.",
    options: ["fatter", "harder", "thicker"],
    answer: "thicker",
  },
  {
    question: "I was _____ surprised by the excellent customer service, it was a nice change from the awful experience I'd had at other companies.",
    options: ["deeply", "pleasantly", "significantly"],
    answer: "pleasantly",
  },
  {
    question: "I'm sorry I _____ my temper with you yesterday. It was a really stressful day at work.",
    options: ["forgot", "lost", "wrecked"],
    answer: "lost",
  },
  {
    question: "Instead of confronting his issues, he _____ up his emotions and tries to pretend everything's OK.",
    options: ["bottles", "guards", "rolls"],
    answer: "bottles",
  },
  {
    question: "It's normal to go through a _____ of emotions after the end of a long-term relationship.",
    options: ["helicopter", "roller coaster", "ocean wave"],
    answer: "roller coaster",
  },
  {
    question: "My mother was worried _____ when it passed midnight and my brother still hadn't come home.",
    options: ["bad", "ill", "sick"],
    answer: "sick",
  },
  {
    question: "The boss was _____ annoyed when the employees told him about the problems.",
    options: ["pleasantly", "sickly", "visibly"],
    answer: "visibly",
  },
  {
    question: "The fans were seething with _____ when the team lost the game in the last 5 minutes.",
    options: ["anger", "disappointment", "temper"],
    answer: "anger",
  },
  {
    question: "We're _____ sorry, but we won't be able to go to your graduation.",
    options: ["badly", "horribly", "terribly"],
    answer: "terribly",
  },
  {
    question: "We're _____ grateful for all the help you've given us in this project.",
    options: ["immensely", "blissfully", "largely"],
    answer: "immensely",
  },
  {
    question: "Her father paid the _____ payment on her apartment.",
    options: ["affordable", "down", "studio"],
    answer: "down",
  },
  {
    question: "I can't stand living with my parents; I need a place of my _____.",
    options: ["independent", "short-term", "own"],
    answer: "own",
  },
  {
    question: "I hope the apartment is _____, because I can't afford to buy appliances.",
    options: ["furnished", "decorated", "upscale"],
    answer: "furnished",
  },
  {
    question: "I was having so much fun during my semester abroad that I didn't feel _____ at all.",
    options: ["cramped", "housewarm", "homesick"],
    answer: "homesick",
  },
  {
    question: "It's a ten-_____ building with two elevators.",
    options: ["level", "room", "story"],
    answer: "story",
  },
  {
    question: "My bedroom window _____ the mountains.",
    options: ["overlooks", "oversees", "overviews"],
    answer: "overlooks",
  },
  {
    question: "My parents finished paying off their _____ after 25 years.",
    options: ["borrow", "budget", "mortgage"],
    answer: "mortgage",
  },
  {
    question: "This weekend I'm helping my cousin _____ into his new place.",
    options: ["change", "move", "turn"],
    answer: "move",
  },
  {
    question: "We're going to need a more _____ apartment now that we're going to have a baby.",
    options: ["spacious", "short-term", "widespread"],
    answer: "spacious",
  },
  {
    question: "We're _____ the bathroom, so you'll have to use the one on the second floor.",
    options: ["regenerating", "remodeling", "rejuvenating"],
    answer: "remodeling",
  },
  {
    question: "During the summer, our kids eat a lot of _____ food - popcorn, candy, ice cream, cookies, etc.",
    options: ["junk", "processed", "nourishing"],
    answer: "junk",
  },
  {
    question: "He got food _____ after eating some seafood from a street vendor.",
    options: ["poisoning", "moderation", "snack"],
    answer: "poisoning",
  },
  {
    question: "I buy _____ produce at the farmer's market.",
    options: ["fresh", "processed", "nourishing"],
    answer: "fresh",
  },
  {
    question: "I drink in _____; I don't like getting drunk.",
    options: ["moderation", "diet", "cuisine"],
    answer: "moderation",
  },
  {
    question: "I'm not a huge fan of Mexican _____. It's too spicy for me.",
    options: ["diet", "cuisine", "snack"],
    answer: "cuisine",
  },
  {
    question: "I've lost ten pounds so far while on this new _____.",
    options: ["diet", "helping", "junk"],
    answer: "diet",
  },
  {
    question: "Spinach is one of the most _____ vegetables - it's full of vitamins and minerals.",
    options: ["nourishing", "fresh", "processed"],
    answer: "nourishing",
  },
  {
    question: "That lasagna is delicious; I think I'll have another _____.",
    options: ["snack", "helping", "cuisine"],
    answer: "helping",
  },
  {
    question: "The food at this restaurant is all natural - they don't use any type of _____ food.",
    options: ["processed", "junk", "nourishing"],
    answer: "processed",
  },
  {
    question: "We stopped driving to grab a quick _____ at a roadside cafe.",
    options: ["snack", "helping", "diet"],
    answer: "snack",
  },
  {
    question: "A movie from an amateur filmmaker was _____ for three awards at an international film festival.",
    options: ["based", "nominated", "presented"],
    answer: "nominated",
  },
  {
    question: "Did you see the _____ for the new Star Wars movie? It looks like it'll be awesome!",
    options: ["trailer", "trilogy", "theater"],
    answer: "trailer",
  },
  {
    question: "The opening _____ of the movie is very violent.",
    options: ["chapter", "genre", "scene"],
    answer: "scene",
  },
  {
    question: "I didn't like the _____ of the movie; it just didn't seem believable.",
    options: ["close", "end", "finish"],
    answer: "end",
  },
  {
    question: "I enjoyed the book because I could really identify with the main _____.",
    options: ["character", "role", "star"],
    answer: "character",
  },
  {
    question: "It was a very moving film - and it was based on a _____ story.",
    options: ["factual", "real", "true"],
    answer: "true",
  },
  {
    question: "It's an enjoyable _____, written in a humorous and relatable style.",
    options: ["page", "read", "scene"],
    answer: "read",
  },
  {
    question: "Oh no! I lost a book that I _____ from the library.",
    options: ["borrowed", "loaned", "returned"],
    answer: "borrowed",
  },
  {
    question: "The documentary deals with a number of _____ topics.",
    options: ["controversial", "debatable", "polemic"],
    answer: "controversial",
  },
  {
    question: "The first movie was excellent, but the sequel got mediocre _____.",
    options: ["analyses", "critics", "reviews"],
    answer: "reviews",
  },
  {
    question: "The movie Jaws _____ Roy Scheider and Lorraine Gary.",
    options: ["hits", "shoots", "stars"],
    answer: "stars",
  },
  {
    question: "We couldn't get a ticket for _____ night - they were all sold out.",
    options: ["initial", "opening", "beginning"],
    answer: "opening",
  },
  {
    question: "I can't stand that song; I don't know why it's such a _____.",
    options: ["hit", "tune", "gig"],
    answer: "hit",
  },
  {
    question: "I like the song, but I don't understand the _____.",
    options: ["lyrics", "following", "debut"],
    answer: "lyrics",
  },
  {
    question: "I'm not really musically _____, but I practice the violin every day.",
    options: ["gifted", "upbeat", "off-key"],
    answer: "gifted",
  },
  {
    question: "It's such a catchy _____, I can't get it out of my head!",
    options: ["tune", "lyrics", "hit"],
    answer: "tune",
  },
  {
    question: "My cousin's band is going on _____ next summer; they've lined up shows in eleven different states.",
    options: ["tour", "gig", "following"],
    answer: "tour",
  },
  {
    question: "Someone in the choir was singing _____, and it sounded terrible.",
    options: ["off-key", "remixed", "strumming"],
    answer: "off-key",
  },
  {
    question: "The band's _____ album was a huge success.",
    options: ["hit", "upbeat", "debut"],
    answer: "debut",
  },
  {
    question: "The DJ played some _____ tracks at the wedding reception.",
    options: ["gifted", "off-key", "remixed"],
    answer: "remixed",
  },
  {
    question: "The singer has attracted quite a devoted _____ in Korea - her concerts there are always sold out.",
    options: ["following", "tour", "lyrics"],
    answer: "following",
  },
  {
    question: "The street musician sat on a park bench, _____ his guitar.",
    options: ["strumming", "remixed", "debut"],
    answer: "strumming",
  },
  {
    question: "This music is so slow it's putting me to sleep. Let's listen to something with a more _____ tempo.",
    options: ["upbeat", "gifted", "off-key"],
    answer: "upbeat",
  },
  {
    question: "We're going to play a _____ at the Jazz Club on Friday night.",
    options: ["gig", "tour", "hit"],
    answer: "gig",
  },
  {
    question: "Barbara has _____ a new world record, with 5 consecutive Olympic gold medals in judo.",
    options: ["made", "put", "set"],
    answer: "set",
  },
  {
    question: "Do you want to _____ hiking with us this weekend?",
    options: ["do", "go", "play"],
    answer: "go",
  },
  {
    question: "How long have you been _____ football?",
    options: ["doing", "going", "playing"],
    answer: "playing",
  },
  {
    question: "I _____ volleyball in college.",
    options: ["did", "played", "went"],
    answer: "played",
  },
  {
    question: "If a soccer game is _____, they do penalty kicks to determine the winner.",
    options: ["failed", "led", "tied"],
    answer: "tied",
  },
  {
    question: "Jeff and Diana _____ rock climbing in the mountains.",
    options: ["did", "played", "went"],
    answer: "went",
  },
  {
    question: "My son wants to _____ karate.",
    options: ["do", "go", "play"],
    answer: "do",
  },
  {
    question: "She's been _____ gymnastics since she was 5 years old.",
    options: ["doing", "going", "playing"],
    answer: "doing",
  },
  {
    question: "The baseball team was unable to make a _____ and lost the game 5-2.",
    options: ["comeback", "setback", "takeback"],
    answer: "comeback",
  },
  {
    question: "The biker from Australia currently has the _____, but the bikers from Russia and Peru are close behind.",
    options: ["best", "first", "lead"],
    answer: "lead",
  },
  {
    question: "The ice skater _____ from the competition due to a knee injury.",
    options: ["broke", "removed", "withdrew"],
    answer: "withdrew",
  },
  {
    question: "The runners were stretching before the _____ began.",
    options: ["match", "race", "test"],
    answer: "race",
  },
  {
    question: "Tim Randall has _____ a personal best with his time of 23.04 seconds.",
    options: ["achieved", "enhanced", "won"],
    answer: "achieved",
  },
  {
    question: "What was the final _____ of the baseball game?",
    options: ["place", "record", "score"],
    answer: "score",
  },
  {
    question: "After my computer was stolen, I was so glad I had _____ all my data on an external hard drive.",
    options: ["backed up", "locked up", "started up"],
    answer: "backed up",
  },
  {
    question: "Could I use your computer for a minute? I'd like to _____ my e-mail.",
    options: ["check", "look", "verify"],
    answer: "check",
  },
  {
    question: "Do I need to _____ a special program to be able to view this video?",
    options: ["attach", "implement", "install"],
    answer: "install",
  },
  {
    question: "I _____ you a CD of some of my favorite music.",
    options: ["burned", "locked", "scanned"],
    answer: "burned",
  },
  {
    question: "I can't check the event schedule online because the conference website seems to be _____.",
    options: ["off", "frozen", "down"],
    answer: "down",
  },
  {
    question: "If you want more space on your hard drive, you should _____ old files that you no longer need.",
    options: ["crash", "delete", "shut down"],
    answer: "delete",
  },
  {
    question: "I'm trying to _____ my account, but I can't remember the password.",
    options: ["log into", "start up", "reboot"],
    answer: "log into",
  },
  {
    question: "More and more people are _____ the web on their cell phones nowadays.",
    options: ["getting", "scanning", "surfing"],
    answer: "surfing",
  },
  {
    question: "My computer _____ when I have too many programs open at the same time.",
    options: ["down", "freezes", "infected"],
    answer: "freezes",
  },
  {
    question: "Never open attachments from people you don't know - they could _____ your computer with a virus.",
    options: ["disease", "infect", "lock up"],
    answer: "infect",
  },
  {
    question: "The boss wants everyone to _____ their computers before leaving work.",
    options: ["close", "shut down", "turn out"],
    answer: "shut down",
  },
  {
    question: "You forgot to _____ the file to your message.",
    options: ["add", "annex", "attach"],
    answer: "attach",
  },
  {
    question: "Christine has been a _____ school teacher for many years.",
    options: ["central", "medium", "middle"],
    answer: "middle",
  },
  {
    question: "Could you give me some _____ on my presentation? I'd like to know how to improve it.",
    options: ["degree", "concentration", "feedback"],
    answer: "feedback",
  },
  {
    question: "He's _____ to all the best universities in the country.",
    options: ["applying", "submitting", "trying"],
    answer: "applying",
  },
  {
    question: "I think I got every question on the exam wrong - I have no doubt that I _____.",
    options: ["dropped", "failed", "lost"],
    answer: "failed",
  },
  {
    question: "I'm _____ a course on Latin American politics.",
    options: ["having", "taking", "going"],
    answer: "taking",
  },
  {
    question: "My daughter's 12 - she's in sixth _____.",
    options: ["class", "grade", "level"],
    answer: "grade",
  },
  {
    question: "My father promised he'd buy me a car if I _____ good grades in my final year of high school.",
    options: ["got", "made", "took"],
    answer: "got",
  },
  {
    question: "No, my son hasn't chosen a _____ yet. He's debating between sociology and anthropology.",
    options: ["degree", "major", "series"],
    answer: "major",
  },
  {
    question: "She _____ from the University of California in 1999.",
    options: ["awarded", "formed", "graduated"],
    answer: "graduated",
  },
  {
    question: "The professor took ten points off my test because I _____ a few minutes late.",
    options: ["handed it in", "gave it up", "passed it"],
    answer: "handed it in",
  },
  {
    question: "The top five students in the class were _____ a scholarship to a local college.",
    options: ["awarded", "submitted", "withdrawn"],
    answer: "awarded",
  },
  {
    question: "This topic will be on the test - make sure to take detailed _____.",
    options: ["lectures", "notes", "writings"],
    answer: "notes",
  },
  {
    question: "I wasn't convinced by the article; I didn't think the author adequately _____ his claims.",
    options: ["helped", "provided", "supported"],
    answer: "supported",
  },
  {
    question: "In her book, Clara Jones aims to _____ the dominant theory using five main counter-arguments.",
    options: ["refute", "refuse", "revise"],
    answer: "refute",
  },
  {
    question: "Steve Jobs' leadership was a _____ factor in Apple's success.",
    options: ["brief", "key", "perfect"],
    answer: "key",
  },
  {
    question: "The first _____ of his report was full of factual errors.",
    options: ["case", "draft", "try"],
    answer: "draft",
  },
  {
    question: "The reasons for the war fall into two main _____: political reasons and economic reasons.",
    options: ["categories", "summaries", "theories"],
    answer: "categories",
  },
  {
    question: "The trajectory of the country after 1930 is a _____ illustration of Smith's theory in action.",
    options: ["clear", "obvious", "main"],
    answer: "clear",
  },
  {
    question: "These thought-provoking poems _____ questions about what it means to love unconditionally.",
    options: ["draw", "make", "raise"],
    answer: "raise",
  },
  {
    question: "This essay _____ parallels between the main character in the novel and the author's life.",
    options: ["draws", "goes", "proves"],
    answer: "draws",
  },
  {
    question: "This paragraph has nothing to do with any of your main _____, you should get rid of it.",
    options: ["cases", "outlines", "points"],
    answer: "points",
  },
  {
    question: "We'd like to _____ several issues in today's meeting.",
    options: ["carry out", "fall into", "touch on"],
    answer: "touch on",
  },
  {
    question: "I lent Bill $20; he says he'll _____ me back next week.",
    options: ["pay", "spend"],
    answer: "pay",
  },
  {
    question: "Excuse me, it's none of your business how much money I _____.",
    options: ["get", "make"],
    answer: "make",
  },
  {
    question: "Greenpeace _____ five million dollars to help preserve the Atlantic rainforest.",
    options: ["raised", "rose"],
    answer: "raised",
  },
  {
    question: "How much of my income should I _____?",
    options: ["inherit", "invest"],
    answer: "invest",
  },
  {
    question: "I can't believe I _____ $10 on a calculator that doesn't even work!",
    options: ["ruined", "wasted"],
    answer: "wasted",
  },
  {
    question: "I didn't have enough savings to pay my college tuition, so I had to _____ a student loan.",
    options: ["pick", "take out"],
    answer: "take out",
  },
  {
    question: "Sometimes your employer can pay your salary by _____ a deposit directly in your bank account.",
    options: ["doing", "making"],
    answer: "making",
  },
  {
    question: "I really admire rich people who _____ a large portion of their wealth to charity.",
    options: ["donate", "sponsor"],
    answer: "donate",
  },
  {
    question: "I try not to eat out at restaurants too often; I'm trying to _____ money.",
    options: ["keep", "save"],
    answer: "save",
  },
  {
    question: "Let's _____ money here at the airport so that we can get a taxi to the hotel.",
    options: ["exchange", "replace"],
    answer: "exchange",
  },
  {
    question: "My son _____ $50 for taking care of the neighbor's dogs over the weekend.",
    options: ["earned", "won"],
    answer: "earned",
  },
  {
    question: "We need to _____ a budget so that we don't end up spending more than we earn.",
    options: ["give", "make"],
    answer: "make",
  },
  {
    question: "Are you _____ any bags today?",
    options: ["adding", "bumping", "checking"],
    answer: "checking",
  },
  {
    question: "Hello, I need to change the dates of my hotel _____.",
    options: ["district", "layover", "reservation"],
    answer: "reservation",
  },
  {
    question: "I always try to get a window _____ on long flights.",
    options: ["chair", "seat", "spot"],
    answer: "seat",
  },
  {
    question: "I won't be in the office next week - I'll be on a business _____.",
    options: ["flight", "travel", "trip"],
    answer: "trip",
  },
  {
    question: "On their honeymoon, Will and Cassie spent a week at a _____ hotel.",
    options: ["five-star", "ten-point", "gold-star"],
    answer: "five-star",
  },
  {
    question: "Sorry, sir, but your _____ bag is too heavy.",
    options: ["bring-in", "carry-on", "take-up"],
    answer: "carry-on",
  },
  {
    question: "The gate number is printed on your _____ pass.",
    options: ["boarding", "checking", "entering"],
    answer: "boarding",
  },
  {
    question: "The rooms of the hotel were nice, but the fitness center was rather _____.",
    options: ["dingy", "red-light", "one-star"],
    answer: "dingy",
  },
  {
    question: "The _____ is offering a great deal on a 5-day package in Miami.",
    options: ["travel agency", "organization", "department"],
    answer: "travel agency",
  },
  {
    question: "We felt sick on the plane because the flight was really _____.",
    options: ["bumpy", "seedy", "messy"],
    answer: "bumpy",
  },
  {
    question: "You should _____ your flight now, before prices go up.",
    options: ["book", "make", "set"],
    answer: "book",
  },
  {
    question: "Don't bother going to the village - it's not _____ the trip, there's really nothing to see.",
    options: ["merit", "worth", "value"],
    answer: "worth",
  },
  {
    question: "From our window, we had an unobstructed _____ of the castle up on the mountain.",
    options: ["look", "sight", "view"],
    answer: "view",
  },
  {
    question: "If you want more privacy, there's a _____ beach an hour's drive outside the city.",
    options: ["winding", "secluded", "unobstructed"],
    answer: "secluded",
  },
  {
    question: "Moving from New York City to a small farm in the midwest was quite a dramatic change of _____.",
    options: ["face", "scenery", "view"],
    answer: "scenery",
  },
  {
    question: "The all-day _____ trip leaves at 7 AM every morning and takes you to 5 different islands.",
    options: ["boat", "ship", "sailor"],
    answer: "boat",
  },
  {
    question: "The hikers tried to find the trail through the _____ forest.",
    options: ["dense", "heavy", "jagged"],
    answer: "dense",
  },
  {
    question: "The stream is quite _____ - the water only comes up to your ankles.",
    options: ["lush", "gentle", "shallow"],
    answer: "shallow",
  },
  {
    question: "This mountain _____ extends north to Canada.",
    options: ["range", "span", "scenery"],
    answer: "range",
  },
  {
    question: "We went bird-watching in the _____ preserve.",
    options: ["countryside", "fauna", "wildlife"],
    answer: "wildlife",
  },
  {
    question: "You can't get there by car; you have to take the _____.",
    options: ["footpath", "footroad", "footstreet"],
    answer: "footpath",
  },
  {
    question: "After being _____ from prison, Jim found it hard to get a job.",
    options: ["evacuated", "left", "released"],
    answer: "released",
  },
  {
    question: "Although everyone believes she's guilty, the evidence was too _____ for a conviction.",
    options: ["appealed", "inconclusive", "refutable"],
    answer: "inconclusive",
  },
  {
    question: "Due to his links to terrorist groups, Mr. Smith represents a _____ to society.",
    options: ["threat", "battle", "death"],
    answer: "threat",
  },
  {
    question: "He was declared innocent by a _____ jury.",
    options: ["unanimous", "universal", "uniform"],
    answer: "unanimous",
  },
  {
    question: "I couldn't believe what a light _____ she got - a mere 30 days in jail!",
    options: ["conviction", "sentence", "threat"],
    answer: "sentence",
  },
  {
    question: "I don't support the death _____ - I think everyone deserves a chance to change.",
    options: ["pain", "penalty", "punishment"],
    answer: "penalty",
  },
  {
    question: "Patty and her ex-husband are involved in a prolonged _____ battle over the ownership of their house.",
    options: ["lawful", "legal", "trial"],
    answer: "legal",
  },
  {
    question: "Ron will stand _____ for an assault charge after hitting his girlfriend.",
    options: ["court", "jury", "trial"],
    answer: "trial",
  },
  {
    question: "The banking executive was _____ with fraud.",
    options: ["charged", "stood", "upheld"],
    answer: "charged",
  },
  {
    question: "The U.S. government just _____ a new law about immigration.",
    options: ["hung", "passed", "served"],
    answer: "passed",
  },
  {
    question: "There was _____ evidence that the doctor had falsified the records.",
    options: ["concrete", "enforced", "harsh"],
    answer: "concrete",
  },
  {
    question: "They haven't yet reached a _____ in the kidnapping case.",
    options: ["court", "parole", "verdict"],
    answer: "verdict",
  },
  {
    question: "He worked on fixing the computer for two _____ hours before giving up and calling tech support.",
    options: ["compact", "solid", "tight"],
    answer: "solid",
  },
  {
    question: "He's always in a _____; he never has time to chat.",
    options: ["press", "quick", "rush"],
    answer: "rush",
  },
  {
    question: "I have a _____ schedule this semester - classes from Monday to Friday, 7 AM to 7 PM!",
    options: ["consuming", "grueling", "ungodly"],
    answer: "grueling",
  },
  {
    question: "I _____ the assignment to the last minute and then stayed up all night to write it.",
    options: ["left", "spent", "took"],
    answer: "left",
  },
  {
    question: "In my _____ time, I like to read.",
    options: ["rush", "spare", "stick"],
    answer: "spare",
  },
  {
    question: "Organizing all these files is very _____; I wish I had someone to help me.",
    options: ["time-consuming", "pressing", "falling"],
    answer: "time-consuming",
  },
  {
    question: "Sarah _____ her hours as she entered her eighth month of pregnancy.",
    options: ["cut back on", "got ahead with", "stuck to"],
    answer: "cut back on",
  },
  {
    question: "She's a fitness nut; she _____ ten hours a week at the gym.",
    options: ["passes", "runs", "spends"],
    answer: "spends",
  },
  {
    question: "_____ as much time as you need to review this information - we don't need a response right away.",
    options: ["Leave", "Take", "Waste"],
    answer: "Take",
  },
  {
    question: "The _____ of time my daughter spends on her cell phone is unbelievable.",
    options: ["amount", "quantity", "portion"],
    answer: "amount",
  },
  {
    question: "The company is offering training in time _____ to improve the efficiency of its staff.",
    options: ["administration", "commitment", "management"],
    answer: "management",
  },
  {
    question: "There is a strict _____ for the delivery of this shipment - it must arrive by January 1.",
    options: ["deadline", "limit", "period"],
    answer: "deadline",
  },
  {
    question: "There's a slowdown on highway I-84 due to _____ traffic.",
    options: ["rush hour", "time", "span"],
    answer: "rush hour",
  },
  {
    question: "We've _____ on our English lessons; the class is on Lesson 10 but we're on Lesson 6.",
    options: ["fallen back", "fallen before", "fallen behind"],
    answer: "fallen behind",
  },
  {
    question: "You need to schedule your dentist appointment two weeks in _____.",
    options: ["advance", "ahead", "forward"],
    answer: "advance",
  },
  {
    question: "A _____ noise woke me up from my nap.",
    options: ["high", "loud", "strong"],
    answer: "loud",
  },
  {
    question: "His cell phone makes an _____ noise every time he gets a text message.",
    options: ["angering", "annoying", "incessant"],
    answer: "annoying",
  },
  {
    question: "I could tell Dan was still mad, as he glared at me in _____ silence.",
    options: ["stony", "strange", "stunned"],
    answer: "stony",
  },
  {
    question: "I wasn't able to relax on the beach because some teenagers had a stereo with music _____.",
    options: ["blaring", "crashing", "deafening"],
    answer: "blaring",
  },
  {
    question: "It was _____ silent inside the old, abandoned house.",
    options: ["extremely", "hardly", "perfectly"],
    answer: "perfectly",
  },
  {
    question: "It's _____ quiet in that classroom - are the students taking a test?",
    options: ["eerily", "oddly", "sullen"],
    answer: "eerily",
  },
  {
    question: "My neighbor's dogs start _____ whenever someone walks past their house.",
    options: ["barking", "chirping", "whistling"],
    answer: "barking",
  },
  {
    question: "She sang a lullaby _____ to help put the baby to sleep.",
    options: ["lightly", "muffled", "softly"],
    answer: "softly",
  },
  {
    question: "The _____ noise in the office makes it difficult to concentrate.",
    options: ["complete", "constant", "long"],
    answer: "constant",
  },
  {
    question: "The conversation on their first date was full of _____ silence.",
    options: ["awkward", "ominous", "uncharacteristic"],
    answer: "awkward",
  },
  {
    question: "She learned Russian _____ the age of 45.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "at",
  },
  {
    question: "The book was written _____ Mark Twain.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "by",
  },
  {
    question: "I’ll show you the picture _____ the palace.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "of",
  },
  {
    question: "We can only get to the camp _____ foot.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "on",
  },
  {
    question: "He reminds me _____ his old history teacher.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "of",
  },
  {
    question: "What are you talking _____ ?",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "about",
  },
  {
    question: "_____ the end of next year we will have made over $100,000.",
    options: ["About", "At", "By", "For", "From", "In", "Of", "On", "To", "With"],
    answer: "By",
  },
  {
    question: "She always gets up early _____ the morning and goes to bed late at night.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "in",
  },
  {
    question: "I went to work _____ Tuesday but I didn’t go on Friday.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "on",
  },
  {
    question: "You’ll have to wait. He’ll be with you _____ a minute.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "in",
  },
  {
    question: "Philip waited _____ her at the movie theatre.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "for",
  },
  {
    question: "He started learning English _____ 2005.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "in",
  },
  {
    question: "You have to pay _____ the tickets on the day you order them.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "for",
  },
  {
    question: "We are very proud _____ this company.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "of",
  },
  {
    question: "It’s very kind _____ you to help us.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "of",
  },
  {
    question: "The old man suffered _____ a heart attack.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "from",
  },
  {
    question: "Please write _____ pencil.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "in",
  },
  {
    question: "It’s _____ time you told him the truth.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "about",
  },
  {
    question: "The manager didn’t take part _____ the discussion.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "in",
  },
  {
    question: "He‘s very good _____ telling jokes.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "at",
  },
  {
    question: "I’ll see you _____ the conference.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "at",
  },
  {
    question: "We sat down _____ the grass and ate our lunch.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "on",
  },
  {
    question: "My parents got married _____ the 1970s.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "in",
  },
  {
    question: "There’s a good restaurant _____ the end of the street.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "at",
  },
  {
    question: "We usually have turkey _____ Thanksgiving.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "on",
  },
  {
    question: "I would like to travel _____ Italy next summer.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "to",
  },
  {
    question: "I took a plane _____ Munich to Rome.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "from",
  },
  {
    question: "I’d like to speak _____ the manager please.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "to",
  },
  {
    question: "I don’t usually feel tired _____ the morning.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "in",
  },
  {
    question: "My mother is abroad so my dad is taking care _____ us at the moment.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "of",
  },
  {
    question: "Sonja gets _____ the seven o’clock bus in the morning.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "on",
  },
  {
    question: "She always looks _____ herself in the mirror.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "at",
  },
  {
    question: "I met Donna _____ a party on Friday night.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "at",
  },
  {
    question: "My friend always borrows money _____ me.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "from",
  },
  {
    question: "Daria’s books are lying _____ the floor.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "on",
  },
  {
    question: "He arrived at the school building just _____ time.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "in",
  },
  {
    question: "The audience threw tomatoes _____ him.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "at",
  },
  {
    question: "Passengers are not allowed to use cell phones _____ airplanes.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "on",
  },
  {
    question: "He is responsible _____ what he does.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "for",
  },
  {
    question: "I’m sorry _____ the job you didn’t get.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "about",
  },
  {
    question: "I’m very bad _____ mathematics.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "at",
  },
  {
    question: "He is always _____ time.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "on",
  },
  {
    question: "How many people are _____ your team?",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "on",
  },
  {
    question: "A university is where you study _____ a degree.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "for",
  },
  {
    question: "Her next birthday will be _____ a Sunday.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "on",
  },
  {
    question: "The new factory is expected to go online _____ May.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "in",
  },
  {
    question: "Many of us eat _____ fork and spoon.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "with",
  },
  {
    question: "We have been searching _____ a web designer for a few weeks now.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "for",
  },
  {
    question: "The TV is _____ the corner of the room.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "in",
  },
  {
    question: "It depends _____ the weather.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "on",
  },
  {
    question: "He might turn _____ a frog.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "into",
  },
  {
    question: "He felt bad _____ no reason at all.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "for",
  },
  {
    question: "I have been living here _____ ten years.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "for",
  },
  {
    question: "Have you been _____ the cinema recently?",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "to",
  },
  {
    question: "I happened to meet an old friend _____ town.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "in",
  },
  {
    question: "It was _____ yesterday’s newspapers.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "in",
  },
  {
    question: "He is very fond _____ good food.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "of",
  },
  {
    question: "He married _____ the age of 28.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "at",
  },
  {
    question: "I bought many things _____ my stay in New York.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "during",
  },
  {
    question: "I want to post this letter _____ a friend.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "to",
  },
  {
    question: "I’m going _____ Glasgow on Monday.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "to",
  },
  {
    question: "John has got a very strange taste _____ clothes.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "in",
  },
  {
    question: "Mum sat _____ the back of the car.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "in",
  },
  {
    question: "I’m interested _____ basketball but I’m not very good at playing it.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "in",
  },
  {
    question: "My parents met _____ the war, in 1943.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "during",
  },
  {
    question: "I didn’t have enough money _____ pay for the meal.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "to",
  },
  {
    question: "It was _____ the radio yesterday morning.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "on",
  },
  {
    question: "Jane goes to the office early _____ Tuesdays.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "on",
  },
  {
    question: "I saw him sometime _____ June.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "in",
  },
  {
    question: "Meet me _____ the station.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "at",
  },
  {
    question: "The lights are moving _____ us.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "towards",
  },
  {
    question: "My country is famous _____ great musicians.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "for",
  },
  {
    question: "Who is that girl over there _____ the red dress?",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "in",
  },
  {
    question: "Turn right _____ the end of the street and then it will be right in front of you.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "at",
  },
  {
    question: "She lives _____ the third floor.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "on",
  },
  {
    question: "Mr. Brown will be _____ you in a moment.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "with",
  },
  {
    question: "I have to apologize _____ being late.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "for",
  },
  {
    question: "She tried to prevent the children _____ jumping into the water.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "from",
  },
  {
    question: "Sometimes I go _____ bus.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "by",
  },
  {
    question: "Thank you _____ coming to visit us.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "for",
  },
  {
    question: "The boys met _____ the corner of the street.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "at",
  },
  {
    question: "The smallest room is located _____ the left of the hall.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "on",
  },
  {
    question: "We entered the building _____ entrance number 3.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "through",
  },
  {
    question: "There was a dark spot _____ the ceiling.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "on",
  },
  {
    question: "We arrived just _____ time to see the Queen.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "in",
  },
  {
    question: "We have to be at the airport _____ 6 p.m.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "by",
  },
  {
    question: "We ran _____ the doctor on our way to the bookshop.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "into",
  },
  {
    question: "She was _____ university when she heard about the death of her father.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "Let's go _____ a walk. The weather is so great!",
    options: ["at", "by", "for", "in", "on"],
    answer: "for",
  },
  {
    question: "The train was travelling _____ a speed of over 150 km an hour.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "She got _____ the bus at Oxford Street and got off five stops later.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "Despite the bad weather all trains are running _____ time.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "Bats are mammals that are highly active _____ night.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "This village isn't even _____ the map. It's so small.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "We usually go to dance class _____ Mondays.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "_____ nightfall over 10 inches of snow had fallen.",
    options: ["at", "by", "for", "in", "on"],
    answer: "by",
  },
  {
    question: "Doctors hope that the spread of the virus will slow down _____ the summer.",
    options: ["at", "by", "for", "in", "on"],
    answer: "in",
  },
  {
    question: "Dad always reads his daughter bedtime stories _____ the evening.",
    options: ["at", "by", "for", "in", "on"],
    answer: "in",
  },
  {
    question: "Let's meet _____ noon. We can have lunch and sort things out.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "The cat was playing with a ball _____ the corner of Michael's room.",
    options: ["at", "by", "for", "in", "on"],
    answer: "in",
  },
  {
    question: "She has been a member of the committee _____ 6 years.",
    options: ["at", "by", "for", "in", "on"],
    answer: "for",
  },
  {
    question: "What are we having _____ dinner today?",
    options: ["at", "by", "for", "in", "on"],
    answer: "for",
  },
  {
    question: "_____ average, the unemployment rate has been going up 1 per cent a year.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "Take a seat. I'll be with you _____ a minute.",
    options: ["at", "by", "for", "in", "on"],
    answer: "in",
  },
  {
    question: "We decided to meet _____ the station.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "The boss would like to have the report _____ the end of the day at the latest.",
    options: ["at", "by", "for", "in", "on"],
    answer: "by",
  },
  {
    question: "She was _____ university when she heard about the death of her father.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "We usually go on holidays _____ plane but this year we are going to Italy by car.",
    options: ["at", "by", "for", "in", "on"],
    answer: "by",
  },
  {
    question: "Let's go _____ a walk. The weather is so great!",
    options: ["at", "by", "for", "in", "on"],
    answer: "for",
  },
  {
    question: "The train was travelling _____ a speed of over 150 km an hour.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "She got _____ the bus at Oxford Street and got off five stops later.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "Despite the bad weather all trains are running _____ time.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "Bats are mammals that are highly active _____ night.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "This village isn't even _____ the map. It's so small.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "We usually go to dance class _____ Mondays.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "_____ nightfall over 10 inches of snow had fallen.",
    options: ["at", "by", "for", "in", "on"],
    answer: "by",
  },
  {
    question: "Doctors hope that the spread of the virus will slow down _____ the summer.",
    options: ["at", "by", "for", "in", "on"],
    answer: "in",
  },
  {
    question: "Dad always reads his daughter bedtime stories _____ the evening.",
    options: ["at", "by", "for", "in", "on"],
    answer: "in",
  },
  {
    question: "Let's meet _____ noon. We can have lunch and sort things out.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "The cat was playing with a ball _____ the corner of Michael's room.",
    options: ["at", "by", "for", "in", "on"],
    answer: "in",
  },
  {
    question: "She has been a member of the committee _____ 6 years.",
    options: ["at", "by", "for", "in", "on"],
    answer: "for",
  },
  {
    question: "What are we having _____ dinner today?",
    options: ["at", "by", "for", "in", "on"],
    answer: "for",
  },
  {
    question: "_____ average, the unemployment rate has been going up 1 per cent a year.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "Take a seat. I'll be with you _____ a minute.",
    options: ["at", "by", "for", "in", "on"],
    answer: "in",
  },
  {
    question: "We decided to meet _____ the station.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "The boss would like to have the report _____ the end of the day at the latest.",
    options: ["at", "by", "for", "in", "on"],
    answer: "by",
  },
  {
    question: "I liked him _____ first, but then he started being bossy and arrogant.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "_____ conclusion, the report told us to follow the guidelines.",
    options: ["at", "by", "for", "in", "on"],
    answer: "in",
  },
  {
    question: "We went to the stadium _____ bus.",
    options: ["at", "by", "for", "in", "on"],
    answer: "by",
  },
  {
    question: "The nurse was _____ duty from 6 in the morning until midnight.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "_____ your left you can see one of the biggest libraries in the world.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "When his wife died, he put up the house _____ sale.",
    options: ["at", "by", "for", "in", "on"],
    answer: "for",
  },
  {
    question: "My sister travelled to the Far East _____ the first time in her life.",
    options: ["at", "by", "for", "in", "on"],
    answer: "for",
  },
  {
    question: "_____ theory it was a good method, but we did not know if it would work in practice.",
    options: ["at", "by", "for", "in", "on"],
    answer: "in",
  },
  {
    question: "We had to learn all the poems _____ heart.",
    options: ["at", "by", "for", "in", "on"],
    answer: "by",
  },
  {
    question: "I filled out the wrong application _____ mistake.",
    options: ["at", "by", "for", "in", "on"],
    answer: "by",
  },
  {
    question: "He's _____ a diet so don't offer him any sweets.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "_____ any case, the police have to catch the criminal before he causes any more harm.",
    options: ["at", "by", "for", "in", "on"],
    answer: "in",
  },
  {
    question: "The black Porsche was driving _____ a speed of over 100 m.p.h.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "After the attack they found themselves _____ war with the enemy.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "We must try to avoid deaths and casualties _____ all costs.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "John is _____ university and comes home every two or three months.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "Why don't you go with your mother _____ a change?",
    options: ["at", "by", "for", "in", "on"],
    answer: "for",
  },
  {
    question: "She had to travel to New York _____ business.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "The paintings are _____ loan to the Guggenheim museum.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "She can't sleep _____ night and always needs to take some pills.",
    options: ["at", "by", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "_____ all means, we must try to bring all the parties together and work out a solution.",
    options: ["at", "by", "for", "in", "on"],
    answer: "by",
  },
  {
    question: "The children get _____ trouble all the time.",
    options: ["at", "by", "for", "in", "on"],
    answer: "in",
  },
  {
    question: "I didn't want to break the vase _____ purpose. It just slipped out of my hand.",
    options: ["at", "by", "for", "in", "on"],
    answer: "on",
  },
  {
    question: "Do you, _____ chance, have a phone charger with you?",
    options: ["at", "by", "for", "in", "on"],
    answer: "by",
  },
  {
    question: "Could I have a word with you _____ private?",
    options: ["at", "by", "for", "in", "on"],
    answer: "in",
  },
  {
    question: "A _____ percentage of the human body is made up of water.",
    options: ["big", "large"],
    answer: "large",
  },
  {
    question: "Choosing whether or not to have children is a _____ decision.",
    options: ["big", "large"],
    answer: "big",
  },
  {
    question: "I'll have a hamburger and a _____ milkshake.",
    options: ["big", "large"],
    answer: "large",
  },
  {
    question: "My wedding ring has tiny _____ diamonds embedded in it.",
    options: ["little", "small"],
    answer: "little",
  },
  {
    question: "The _____ challenge in losing weight is changing your eating habits.",
    options: ["biggest", "largest"],
    answer: "biggest",
  },
  {
    question: "The number of people buying CDs is getting _____ every year as MP3s become more popular.",
    options: ["littler", "smaller"],
    answer: "smaller",
  },
  {
    question: "The police have released _____ information about the case.",
    options: ["little", "small"],
    answer: "little",
  },
  {
    question: "There was a _____ mistake in the report; we'll have to print a revised copy.",
    options: ["big", "large"],
    answer: "big",
  },
  {
    question: "These jeans are too _____ for me.",
    options: ["little", "small"],
    answer: "small",
  },
  {
    question: "This foundation provides grants for _____ businesses in developing countries.",
    options: ["little", "small"],
    answer: "small",
  },
  {
    question: "This new policy will affect a _____ number of our employees.",
    options: ["big", "large"],
    answer: "large",
  },
  {
    question: "We had a lovely _____ picnic by the lake.",
    options: ["little", "small"],
    answer: "little",
  },
  {
    question: "I can't stand the _____ odor of smoke in that bar.",
    options: ["extensive", "pervasive", "prevalent"],
    answer: "pervasive",
  },
  {
    question: "I love the _____ smell of my grandmother's chicken soup.",
    options: ["familiar", "pungent", "revolting"],
    answer: "familiar",
  },
  {
    question: "I sensed the _____ smell of frying onions.",
    options: ["differential", "distinctive", "distinguished"],
    answer: "distinctive",
  },
  {
    question: "She breathed in the _____ fragrance of the forest.",
    options: ["earthy", "metallic", "putrid"],
    answer: "earthy",
  },
  {
    question: "Something in the fridge smells _____ - like rotting meat.",
    options: ["damp", "rancid", "stink"],
    answer: "rancid",
  },
  {
    question: "The bathroom smells so _____ right after it's been cleaned!",
    options: ["fresh", "frisky", "foul"],
    answer: "fresh",
  },
  {
    question: "The smell of vomit _____ in the hospital room.",
    options: ["continued", "lasted", "lingered"],
    answer: "lingered",
  },
  {
    question: "There was a _____ smell of alcohol on his breath.",
    options: ["faint", "small", "mild"],
    answer: "faint",
  },
  {
    question: "This wine has a light fruity _____.",
    options: ["aroma", "odor", "stench"],
    answer: "aroma",
  },
  {
    question: "Your sweaty gym clothes smell _____.",
    options: ["faint", "nasty", "spicy"],
    answer: "nasty",
  },
  {
    question: "As the concert _____ to a close, the lead singer thanked the fans for their support.",
    options: ["drew", "took", "went"],
    answer: "drew",
  },
  {
    question: "I like moving to a new city because you can make a _____ start.",
    options: ["fresh", "pure", "nice"],
    answer: "fresh",
  },
  {
    question: "It rained continuously for the first three days we were in Miami - a bit of a _____ start to our vacation.",
    options: ["deadly", "disappointing", "disbelieving"],
    answer: "disappointing",
  },
  {
    question: "It's a very _____ start to his career.",
    options: ["complimentary", "excellent", "promising"],
    answer: "promising",
  },
  {
    question: "Our kids are sad that their summer vacation is _____ to an end.",
    options: ["being", "coming", "running"],
    answer: "coming",
  },
  {
    question: "The artist put the _____ touches on her painting.",
    options: ["completing", "finishing", "finalizing"],
    answer: "finishing",
  },
  {
    question: "The back injury put a _____ end to his tennis career.",
    options: ["direct", "rushed", "sudden"],
    answer: "sudden",
  },
  {
    question: "The famous athlete talked about his _____ beginnings on his town's local basketball team.",
    options: ["humble", "lowly", "simple"],
    answer: "humble",
  },
  {
    question: "The negotiations got off to a _____ start, as neither side was willing to even consider the other's proposal.",
    options: ["scary", "shaky", "steady"],
    answer: "shaky",
  },
  {
    question: "There seems to be no end in _____ to the country's political conflicts.",
    options: ["sight", "view", "watch"],
    answer: "sight",
  },
  {
    question: "As time went on, the boy changed _____ a man.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "into",
  },
  {
    question: "She works at night and sleeps _____ the day.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "during",
  },
  {
    question: "He is very arrogant and always looks _____ at us.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "down",
  },
  {
    question: "We went _____ the stairs to get our gym clothes.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "up",
  },
  {
    question: "She couldn't talk to me because she was _____ a hurry.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "in",
  },
  {
    question: "He was so tired that he slept the whole night _____.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "through",
  },
  {
    question: "You can't drive over that bridge because it is _____ repair at the moment.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "under",
  },
  {
    question: "We shared the money we received _____ us.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "between",
  },
  {
    question: "She was able to solve the difficult math test _____ ease.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "with",
  },
  {
    question: "She prefers volleyball _____ basketball.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "to",
  },
  {
    question: "You can't leave _____ any money.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "without",
  },
  {
    question: "Teachers have gone _____ strike in the past.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "on",
  },
  {
    question: "It took _____ an hour for the technicians to restore electricity.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "over",
  },
  {
    question: "_____ now on you will report to me whenever something happens.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "from",
  },
  {
    question: "He will remain in the office _____ a successor is found.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "until",
  },
  {
    question: "The boy was very clever _____ his age.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "for",
  },
  {
    question: "You must hand in your thesis _____ next week, at the latest.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "by",
  },
  {
    question: "Do you speak any other languages _____ English?",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "besides",
  },
  {
    question: "The boy walked _____ the field to the house.",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "across",
  },
  {
    question: "Keep _____ the grass!",
    options: ["across", "besides", "between", "by", "down", "during", "for", "from", "in", "into", "off", "on", "over", "through", "to", "under", "until", "up", "with", "without"],
    answer: "off",
  },
  {
    question: "I almost never agree _____ him, but this time we shared the same opinion.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "with",
  },
  {
    question: "He subscribed _____ the weekly magazine.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "to",
  },
  {
    question: "She blamed the incident _____ my carelessness.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "on",
  },
  {
    question: "The convict escaped _____ a high security prison.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "from",
  },
  {
    question: "The young woman smiled _____ me and I smiled back.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "at",
  },
  {
    question: "Students are protesting _____ increasing tuition fees at universities.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "against",
  },
  {
    question: "Small children believe _____ Father Christmas or Santa Claus.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "in",
  },
  {
    question: "After the accident the ambulance took him to the hospital where he fell _____ a coma.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "into",
  },
  {
    question: "Catharine's parents disapproved _____ her marriage to the wealthy banker.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "of",
  },
  {
    question: "Rugby is often associated _____ being a brutal sport.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "with",
  },
  {
    question: "She cares _____ her mother a lot and always comes to visit her.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "for",
  },
  {
    question: "After graduating he applied _____ a job at a local book shop.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "for",
  },
  {
    question: "She insisted _____ taking me out to dinner on my birthday.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "on",
  },
  {
    question: "I always shop _____ my Christmas presents during the summer holidays.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "for",
  },
  {
    question: "After studying at university, she developed _____ a great scientist.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "into",
  },
  {
    question: "He invested all his money _____ real estate.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "in",
  },
  {
    question: "The dog barked _____ the delivery man when he came through the gate.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "at",
  },
  {
    question: "Dad always tries to protect me _____ bad influences.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "from",
  },
  {
    question: "We must sympathize _____ those who have lost relatives in the conflict.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "with",
  },
  {
    question: "The drug addict died _____ an overdose of heroin.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "of",
  },
  {
    question: "In August 1945 the Japanese surrendered _____ the Americans.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "to",
  },
  {
    question: "It took him a long time to recover _____ the accident he had last year.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "from",
  },
  {
    question: "My neighbour complained _____ the noise on the streets.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "about",
  },
  {
    question: "The farmers in the region hoped _____ rain because the drought was destroying all the crops.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "for",
  },
  {
    question: "She gazed _____ me in astonishment.",
    options: ["about", "against", "at", "for", "from", "in", "into", "of", "on", "to", "with"],
    answer: "at",
  },
  {
    question: "The police prevented the protesters _____ entering the building.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "from",
  },
  {
    question: "Could you please take your feet _____ the table?",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "off",
  },
  {
    question: "According _____ the latest report, the virus is spreading very quickly.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "to",
  },
  {
    question: "About a third of the Netherlands is _____ sea level.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "below",
  },
  {
    question: "The cat jumped _____ the wall into my neighbour's garden.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "over",
  },
  {
    question: "I have been living _____ my parents for a long time.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "with",
  },
  {
    question: "Today, scientists know that there is no water _____ the moon.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "on",
  },
  {
    question: "The school is _____ the post office.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "near",
  },
  {
    question: "The match has been cancelled because _____ the bad weather.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "of",
  },
  {
    question: "We have been _____ a lot lately.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "through",
  },
  {
    question: "He ran _____ the hill until he was out of breath.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "up",
  },
  {
    question: "It's not _____ any map I've seen.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "on",
  },
  {
    question: "There is a police car _____ us.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "behind",
  },
  {
    question: "I have just read an interesting book _____ JFK's assassination.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "about",
  },
  {
    question: "He worked _____ the day and most of the evening.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "throughout",
  },
  {
    question: "Gun powder was invented _____ the Chinese.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "by",
  },
  {
    question: "Everyone was at the meeting, except _____ Jane.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "for",
  },
  {
    question: "The dog ran _____ the road and hid _____ the tree.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "across",
  },
  {
    question: "We walked _____ the beach for at least a mile.",
    options: ["about", "across", "along", "behind", "below", "by", "for", "from", "near", "of", "off", "on", "over", "through", "throughout", "to", "under", "up", "with"],
    answer: "along",
  },
  {
    question: "Those trousers went _____ fashion many years ago.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "out of",
  },
  {
    question: "We heard about the natural disaster _____ the news.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "on",
  },
  {
    question: "I was _____ the impression that we didn't want to offend him.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "under",
  },
  {
    question: "Unemployment is _____ the increase in many European countries.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "on",
  },
  {
    question: "I don't know _____ certain, but I think she's on leave at the moment.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "for",
  },
  {
    question: "We had to start _____ scratch.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "from",
  },
  {
    question: "I ran _____ my old teacher the other day.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "into",
  },
  {
    question: "The unexpected success of the company took us _____ surprise.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "by",
  },
  {
    question: "All trains leaving from platform 4 are _____ time.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "on",
  },
  {
    question: "_____ my opinion, she must be the greatest athlete of all times.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "in",
  },
  {
    question: "There is a big ceremony being held _____ honour of the killed soldiers.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "in",
  },
  {
    question: "I must have done it _____ mistake.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "by",
  },
  {
    question: "She waved me good-bye until our car was _____ sight.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "out of",
  },
  {
    question: "They are all _____ age.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "under",
  },
  {
    question: "He told us _____ brief what he wanted to do.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "in",
  },
  {
    question: "Jack has gone to New York _____ business.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "on",
  },
  {
    question: "Why don't you take a break _____ a change.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "for",
  },
  {
    question: "We have to be there _____ ten at the latest.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "by",
  },
  {
    question: "They had to translate the document from English _____ Spanish.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "into",
  },
  {
    question: "Smoking in public places is _____ the law in many countries.",
    options: ["against", "at", "behind", "below", "by", "down", "from", "in", "off", "on", "with"],
    answer: "against",
  },
  {
    question: "The boss looked _____ on him arrogantly.",
    options: ["against", "at", "behind", "below", "by", "down", "from", "in", "off", "on", "with"],
    answer: "down",
  },
  {
    question: "Many products sold at the market have been carefully manufactured _____ hand.",
    options: ["against", "at", "behind", "below", "by", "down", "from", "in", "off", "on", "with"],
    answer: "by",
  },
  {
    question: "Many of the trains leaving London are currently running _____ schedule.",
    options: ["against", "at", "behind", "below", "by", "down", "from", "in", "off", "on", "with"],
    answer: "behind",
  },
  {
    question: "We were terrified _____ fear when we saw what had happened.",
    options: ["against", "at", "behind", "below", "by", "down", "from", "in", "off", "on", "with"],
    answer: "with",
  },
  {
    question: "They must live _____ the father's small pension.",
    options: ["against", "at", "behind", "below", "by", "down", "from", "in", "off", "on", "with"],
    answer: "on",
  },
  {
    question: "Many species in the Amazon rain forest are _____ risk of becoming extinct.",
    options: ["against", "at", "behind", "below", "by", "down", "from", "in", "off", "on", "with"],
    answer: "at",
  },
  {
    question: "A large part of the Netherlands lies _____ sea level.",
    options: ["against", "at", "behind", "below", "by", "down", "from", "in", "off", "on", "with"],
    answer: "below",
  },
  {
    question: "My sister has been suffering _____ a nervous breakdown over the past few weeks.",
    options: ["against", "at", "behind", "below", "by", "down", "from", "in", "off", "on", "with"],
    answer: "from",
  },
  {
    question: "The journalist asked the politician a few things _____ the record.",
    options: ["against", "at", "behind", "below", "by", "down", "from", "in", "off", "on", "with"],
    answer: "off",
  },
  {
    question: "Strawberries are not _____ season at the moment.",
    options: ["against", "at", "behind", "below", "by", "down", "from", "in", "off", "on", "with"],
    answer: "in",
  },
  {
    question: "There are no doctors _____ duty right now.",
    options: ["against", "at", "behind", "below", "by", "down", "from", "in", "off", "on", "with"],
    answer: "on",
  },
  {
    question: "There are a few islands just miles _____ the coast.",
    options: ["against", "at", "behind", "below", "by", "down", "from", "in", "off", "on", "with"],
    answer: "off",
  },
  {
    question: "If global warming continues _____ the present rate sea levels will rise very quickly.",
    options: ["against", "at", "behind", "below", "by", "down", "from", "in", "off", "on", "with"],
    answer: "at",
  },
  {
    question: "He felt nothing but hatred _____ the person who attacked him.",
    options: ["for", "of", "to"],
    answer: "for",
  },
  {
    question: "There are many advantages _____ speaking foreign languages.",
    options: ["of", "in", "to"],
    answer: "of",
  },
  {
    question: "I have a lot _____ respect for the teachers I had at school.",
    options: ["of", "in", "with"],
    answer: "of",
  },
  {
    question: "I have a lot of respect for the teachers I had _____ school.",
    options: ["at", "in", "on"],
    answer: "at",
  },
  {
    question: "I’d like to do a course _____ computer programming.",
    options: ["in", "on", "of"],
    answer: "in",
  },
  {
    question: "He was _____ trial for having murdered his wife.",
    options: ["on", "at", "in"],
    answer: "on",
  },
  {
    question: "He was on trial _____ having murdered his wife.",
    options: ["for", "of", "with"],
    answer: "for",
  },
  {
    question: "We went to see an exhibition _____ Egyptian history.",
    options: ["of", "on", "about"],
    answer: "of",
  },
  {
    question: "I had an argument _____ my boss yesterday.",
    options: ["with", "to", "against"],
    answer: "with",
  },
  {
    question: "He took away my bag _____ force.",
    options: ["by", "with", "in"],
    answer: "by",
  },
  {
    question: "Her fear _____ flying made travelling very difficult for her.",
    options: ["of", "from", "about"],
    answer: "of",
  },
  {
    question: "Her fear of flying made travelling very difficult _____ her.",
    options: ["for", "to", "with"],
    answer: "for",
  },
  {
    question: "My dad had difficulty _____ making himself understood.",
    options: ["in", "with", "at"],
    answer: "in",
  },
  {
    question: "I’ve got a meeting _____ John this afternoon.",
    options: ["with", "to", "for"],
    answer: "with",
  },
  {
    question: "_____ the time I arrived, the train had already left.",
    options: ["By", "At", "In"],
    answer: "By",
  },
  {
    question: "If you’re _____ doubt, please call the ambulance.",
    options: ["in", "at", "on"],
    answer: "in",
  },
  {
    question: "We had access _____ the internet in all the hotels we stayed at.",
    options: ["to", "of", "for"],
    answer: "to",
  },
  {
    question: "We had access to the internet in all the hotels we stayed _____.",
    options: ["at", "in", "on"],
    answer: "at",
  },
  {
    question: "We took part _____ the activities that the school offered.",
    options: ["in", "at", "on"],
    answer: "in",
  },
  {
    question: "Suits will never be _____ of fashion.",
    options: ["out", "off", "away"],
    answer: "out",
  },
  {
    question: "She’s _____ leave until the end of the month.",
    options: ["on", "at", "in"],
    answer: "on",
  },
  {
    question: "The two countries were _____ peace with each other.",
    options: ["at", "in", "on"],
    answer: "at",
  },
  {
    question: "You have absolutely no reason to talk _____ me like that.",
    options: ["to", "with", "at"],
    answer: "to",
  },
  {
    question: "We’d like to have a room _____ a view of the sea.",
    options: ["with", "of", "for"],
    answer: "with",
  },
  {
    question: "The fire was now _____ of control.",
    options: ["out", "off", "beyond"],
    answer: "out",
  },
  {
    question: "She was able to describe the accident _____ detail.",
    options: ["in", "with", "at"],
    answer: "in",
  },
  {
    question: "The trousers are _____ sale at the moment.",
    options: ["on", "in", "at"],
    answer: "on",
  },
  {
    question: "It sounds great _____ theory, but will your plan work?",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "I learned to drive _____ the age of 18.",
    options: ["at", "in", "on"],
    answer: "at",
  },
  {
    question: "Vic made a _____ attempt to apologize.",
    options: ["how come", "pathetic", "hoax"],
    answer: "pathetic",
  },
  {
    question: "The two friends went _____ the movies by themselves.",
    options: ["at", "for", "to"],
    answer: "to",
  },
  {
    question: "During the summer I stayed _____ my grandparents.",
    options: ["by", "at", "with"],
    answer: "with",
  },
  {
    question: "I’ll wait for you _____ the bus stop.",
    options: ["on", "in", "at"],
    answer: "at",
  },
  {
    question: "The milk is _____ the refrigerator next to the orange juice.",
    options: ["on", "at", "in"],
    answer: "in",
  },
  {
    question: "She came and sat _____ her husband.",
    options: ["around", "beside", "between"],
    answer: "beside",
  },
  {
    question: "_____ we saw the television show about bears, we drove to the zoo.",
    options: ["Before", "After", "Around"],
    answer: "After",
  },
  {
    question: "_____ the day, the rain came through the window.",
    options: ["After", "Around", "Throughout"],
    answer: "Throughout",
  },
  {
    question: "The phone rang _____ the middle of the night.",
    options: ["on", "at", "in"],
    answer: "in",
  },
  {
    question: "Some boys were crawling _____ under the car.",
    options: ["by", "down", "around"],
    answer: "around",
  },
  {
    question: "His notebook fell _____ the floor.",
    options: ["down", "on", "to"],
    answer: "on",
  },
  {
    question: "The plane flew _____ the clouds.",
    options: ["between", "above", "around"],
    answer: "above",
  },
  {
    question: "Peter doesn’t go to work _____ Fridays.",
    options: ["at", "in", "on"],
    answer: "on",
  },
  {
    question: "Open your book _____ page 9.",
    options: ["on", "at", "to"],
    answer: "at",
  },
  {
    question: "Can you see a yellow house _____ the left?",
    options: ["at", "on", "in"],
    answer: "on",
  },
  {
    question: "All the latest computers will be shown _____ the exhibition.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "He came to see how I was getting _____.",
    options: ["around", "on", "by"],
    answer: "on",
  },
  {
    question: "I am very interested _____ documentaries on TV.",
    options: ["on", "about", "in"],
    answer: "in",
  },
  {
    question: "I am surprised _____ how much money they want to pay him.",
    options: ["by", "at", "with"],
    answer: "at",
  },
  {
    question: "Nobody in the family has heard _____ the accident.",
    options: ["of", "about", "from"],
    answer: "about",
  },
  {
    question: "She comes _____ a poor family.",
    options: ["from", "with", "of"],
    answer: "from",
  },
  {
    question: "I am quite good _____ art.",
    options: ["with", "at", "in"],
    answer: "at",
  },
  {
    question: "Jack came rushing _____ the stairs.",
    options: ["up", "down", "by"],
    answer: "down",
  },
  {
    question: "Turn right _____ the next traffic lights.",
    options: ["around", "at", "by"],
    answer: "at",
  },
  {
    question: "Her mother is looking forward _____ going to Australia.",
    options: ["to", "for", "about"],
    answer: "to",
  },
  {
    question: "The film is based _____ a novel by John Grisham.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "John is totally obsessed _____ football. He thinks of nothing else.",
    options: ["about", "on", "with"],
    answer: "with",
  },
  {
    question: "I prefer coffee _____ tea.",
    options: ["from", "to", "with"],
    answer: "to",
  },
  {
    question: "Let’s divide this money _____ us.",
    options: ["between", "with", "among"],
    answer: "between",
  },
  {
    question: "I like travelling _____ boat in summer.",
    options: ["on", "by", "with"],
    answer: "by",
  },
  {
    question: "When I was younger I was always afraid _____ going to the dentist.",
    options: ["from", "about", "of"],
    answer: "of",
  },
  {
    question: "Mary’s in the kitchen looking _____ her car keys.",
    options: ["after", "at", "for"],
    answer: "for",
  },
  {
    question: "Are you really happy _____ your life here?",
    options: ["with", "about", "at"],
    answer: "with",
  },
  {
    question: "He was quite pleased _____ the results.",
    options: ["by", "at", "with"],
    answer: "with",
  },
  {
    question: "This is a painting _____ an unknown artist.",
    options: ["by", "of", "from"],
    answer: "by",
  },
  {
    question: "I am proud _____ being a teacher.",
    options: ["about", "of", "with"],
    answer: "of",
  },
  {
    question: "Don’t worry _____ it. Everything will be fine.",
    options: ["about", "for", "with"],
    answer: "about",
  },
  {
    question: "My father tells us fascinating stories _____ his years in the navy.",
    options: ["about", "from", "of"],
    answer: "about",
  },
  {
    question: "Did you call attention _____ their mistake?",
    options: ["to", "for", "on"],
    answer: "to",
  },
  {
    question: "_____ the headmaster, both boys were involved in the fight.",
    options: ["According", "According to", "After"],
    answer: "According to",
  },
  {
    question: "Except _____ that one, all the sentences were easy.",
    options: ["for", "of", "from"],
    answer: "for",
  },
  {
    question: "Be careful. They will lose faith _____ you.",
    options: ["in", "on", "with"],
    answer: "in",
  },
  {
    question: "The girls worked _____ their lessons for half an hour.",
    options: ["on", "at", "with"],
    answer: "on",
  },
  {
    question: "He depends _____ his sister for help.",
    options: ["on", "in", "with"],
    answer: "on",
  },
  {
    question: "Miss Wilson is very fond _____ French food.",
    options: ["about", "with", "of"],
    answer: "of",
  },
  {
    question: "There were _____ a thousand people at the concert.",
    options: ["over", "above", "about"],
    answer: "over",
  },
  {
    question: "You must be _____ 18 in order to see the film.",
    options: ["over", "above", "after"],
    answer: "over",
  },
  {
    question: "We are travelling _____ the road.",
    options: ["down", "along", "by"],
    answer: "along",
  },
  {
    question: "He is suffering _____ an unknown illness.",
    options: ["from", "with", "of"],
    answer: "from",
  },
  {
    question: "I listened to the game _____ the radio.",
    options: ["on", "in", "by"],
    answer: "on",
  },
  {
    question: "How are you getting _____ at school?",
    options: ["on", "by", "along"],
    answer: "on",
  },
  {
    question: "Don’t be impatient _____ us. We are trying!",
    options: ["with", "about", "for"],
    answer: "with",
  },
  {
    question: "Could I speak _____ Tom please?",
    options: ["to", "with", "for"],
    answer: "to",
  },
  {
    question: "We didn’t see the whole performance because we left _____ the last act.",
    options: ["before", "after", "during"],
    answer: "before",
  },
  {
    question: "There were some beautiful pictures _____ the walls.",
    options: ["on", "in", "above"],
    answer: "on",
  },
  {
    question: "_____ there we moved to City Hall.",
    options: ["From", "After", "By"],
    answer: "From",
  },
  {
    question: "Pessimism is bad _____ your health.",
    options: ["for", "to", "with"],
    answer: "for",
  },
  {
    question: "He asked his mother _____ money.",
    options: ["for", "from", "about"],
    answer: "for",
  },
  {
    question: "I bought many things _____ my stay in New York.",
    options: ["during", "for", "after"],
    answer: "during",
  },
  {
    question: "My country is famous _____ historical sights.",
    options: ["for", "of", "with"],
    answer: "for",
  },
  {
    question: "I’m not _____ a hurry. I can wait.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "Have you ever been _____ the theatre?",
    options: ["to", "at", "in"],
    answer: "to",
  },
  {
    question: "We arrived at the airport in _____ for the plane.",
    options: ["time", "on", "at"],
    answer: "time",
  },
  {
    question: "The resort lies about 1,500 meters _____ sea level.",
    options: ["above", "over", "at"],
    answer: "above",
  },
  {
    question: "His hands are _____ his face.",
    options: ["over", "behind", "in front of"],
    answer: "in front of",
  },
  {
    question: "There’s a chair _____ my desk.",
    options: ["in front of", "behind", "beside"],
    answer: "in front of",
  },
  {
    question: "The thief jumped _____ the window.",
    options: ["out of", "over", "down"],
    answer: "out of",
  },
  {
    question: "Both of my neighbors can take care _____ the cat while you are gone.",
    options: ["of", "for", "with"],
    answer: "of",
  },
  {
    question: "I rarely think _____ the weather.",
    options: ["about", "of", "on"],
    answer: "about",
  },
  {
    question: "They were always arguing _____ silly things.",
    options: ["about", "over", "with"],
    answer: "about",
  },
  {
    question: "My house is _____ the end of the road.",
    options: ["at", "in", "on"],
    answer: "at",
  },
  {
    question: "The article was _____ yesterday’s papers.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "The classroom is _____ the fourth floor.",
    options: ["on", "in", "at"],
    answer: "on",
  },
  {
    question: "I applied _____ a few jobs last week, but nobody wrote back.",
    options: ["for", "to", "about"],
    answer: "for",
  },
  {
    question: "He wants two seats _____ the concert on Friday night.",
    options: ["for", "at", "to"],
    answer: "for",
  },
  {
    question: "He started his training _____ November.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "Whom did they vote _____ ?",
    options: ["for", "to", "with"],
    answer: "for",
  },
  {
    question: "The bus stopped _____ the corner of High Street and Congress Avenue.",
    options: ["at", "on", "in"],
    answer: "at",
  },
  {
    question: "I love listening _____ classical music.",
    options: ["to", "for", "at"],
    answer: "to",
  },
  {
    question: "He is _____ Dallas, Texas but he was born in California.",
    options: ["from", "in", "at"],
    answer: "from",
  },
  {
    question: "She goes _____ church every Sunday.",
    options: ["to", "at", "in"],
    answer: "to",
  },
  {
    question: "We need to leave _____ work at once or else we’ll miss the bus.",
    options: ["for", "to", "at"],
    answer: "for",
  },
  {
    question: "I asked the policeman _____ some information.",
    options: ["for", "about", "to"],
    answer: "for",
  },
  {
    question: "The great player hit the ball _____ the net.",
    options: ["over", "above", "out of"],
    answer: "over",
  },
  {
    question: "Can you find our holiday beach _____ the map?",
    options: ["on", "in", "at"],
    answer: "on",
  },
  {
    question: "Please turn _____ the volume of the radio. I’m getting deaf.",
    options: ["down", "up", "over"],
    answer: "down",
  },
  {
    question: "He started composing his own symphonies _____.",
    options: ["at the age of 9", "at the latest", "by far"],
    answer: "at the age of 9",
  },
  {
    question: "I'm not _____ today, so please don't try to joke around with me.",
    options: ["on leave", "in a good mood", "out of stock"],
    answer: "in a good mood",
  },
  {
    question: "Has anyone _____ found my red fountain pen? I lost it yesterday.",
    options: ["by surprise", "at times", "by chance"],
    answer: "by chance",
  },
  {
    question: "Shorter skirts were _____ a few years ago but they aren't anymore today.",
    options: ["on fire", "out of stock", "in fashion"],
    answer: "in fashion",
  },
  {
    question: "Mom told me I had to be home _____ midnight.",
    options: ["at short notice", "at the latest", "in no time"],
    answer: "at the latest",
  },
  {
    question: "He was questioned _____, surrounded by cameras and reporters, so don't believe everything he says.",
    options: ["in public", "in detail", "under stress"],
    answer: "in public",
  },
  {
    question: "By the time someone got to the scene of the accident, the car was _____.",
    options: ["under repair", "on fire", "out of stock"],
    answer: "on fire",
  },
  {
    question: "I tried to convince her to take part in the course, but all my efforts were _____.",
    options: ["at times", "in vain", "by far"],
    answer: "in vain",
  },
  {
    question: "_____, I don't think we should hire too many new workers.",
    options: ["In conclusion", "By nature", "In detail"],
    answer: "In conclusion",
  },
  {
    question: "The headmaster cancelled the meeting _____ because he had to be somewhere else.",
    options: ["at the latest", "by surprise", "at short notice"],
    answer: "at short notice",
  },
  {
    question: "Mission Impossible is _____ the best thriller I have ever seen.",
    options: ["by far", "in no time", "at the age of 9"],
    answer: "by far",
  },
  {
    question: "I'm sorry but this item is _____. We'll try to get it by next month.",
    options: ["under repair", "on leave", "out of stock"],
    answer: "out of stock",
  },
  {
    question: "He is _____ until the end of the year, so I'm afraid he won't be available for the planning stages.",
    options: ["on leave", "under stress", "in a good mood"],
    answer: "on leave",
  },
  {
    question: "The main bridge of the city is still _____, so you'll have to find another route across the river.",
    options: ["on fire", "under repair", "out of stock"],
    answer: "under repair",
  },
  {
    question: "The question took him _____, so he was struggling to find the right answer.",
    options: ["by surprise", "by chance", "at short notice"],
    answer: "by surprise",
  },
  {
    question: "Politicians sometimes make statements _____ that they later regret.",
    options: ["in detail", "in public", "in conclusion"],
    answer: "in public",
  },
  {
    question: "If you study really hard, your English will improve _____.",
    options: ["in no time", "by far", "in vain"],
    answer: "in no time",
  },
  {
    question: "The new girl is shy _____, so you'll have to give her some time to open up.",
    options: ["by nature", "at times", "under stress"],
    answer: "by nature",
  },
  {
    question: "I wrote out the instructions _____ so she would know exactly what to do.",
    options: ["in public", "in conclusion", "in detail"],
    answer: "in detail",
  },
  {
    question: "_____, I feel like leaving this country and moving somewhere else.",
    options: ["At times", "By far", "In a good mood"],
    answer: "At times",
  },
  {
    question: "Because of the stormy weather many trains in the region are running _____.",
    options: ["on alert", "out of breath", "behind schedule"],
    answer: "behind schedule",
  },
  {
    question: "We were told by the travel agent to book _____ because the hotel is very popular among tourists.",
    options: ["in theory", "in advance", "in demand"],
    answer: "in advance",
  },
  {
    question: "I wanted to go to Spain over the extended weekend, but _____, I think I'll stay at home.",
    options: ["on second thoughts", "with the naked eye", "on and off"],
    answer: "on second thoughts",
  },
  {
    question: "The young woman was _____ for possessing a substantial amount of drugs.",
    options: ["under fire", "at risk", "under arrest"],
    answer: "under arrest",
  },
  {
    question: "They used to have _____ relationship, but at the moment they're seeing each other quite often.",
    options: ["out of shape", "behind schedule", "on and off"],
    answer: "on and off",
  },
  {
    question: "You can only see a few planets _____. To see the others, you need a telescope.",
    options: ["between the lines", "on display", "with the naked eye"],
    answer: "with the naked eye",
  },
  {
    question: "His plan seemed very good _____, but it didn't work out the way we wanted it to.",
    options: ["on second thoughts", "in theory", "in the long run"],
    answer: "in theory",
  },
  {
    question: "The President put troops and military advisers in the region _____, as a conflict seemed to be imminent.",
    options: ["behind schedule", "on alert", "under fire"],
    answer: "on alert",
  },
  {
    question: "Many tropical plants and animals are _____ of becoming extinct over the next few decades.",
    options: ["in demand", "at risk", "out of shape"],
    answer: "at risk",
  },
  {
    question: "If you read _____ you will clearly see what he means.",
    options: ["with the naked eye", "between the lines", "on and off"],
    answer: "between the lines",
  },
  {
    question: "I can't compete with you at the moment because I'm completely _____ and need a few practice sessions.",
    options: ["under arrest", "out of breath", "out of shape"],
    answer: "out of shape",
  },
  {
    question: "Rembrandt's paintings were _____ at the national museum.",
    options: ["on alert", "on display", "in demand"],
    answer: "on display",
  },
  {
    question: "Electric bikes are currently _____ and manufacturers cannot keep up with production.",
    options: ["behind schedule", "in demand", "in theory"],
    answer: "in demand",
  },
  {
    question: "She ran so quickly she was completely _____ when she arrived.",
    options: ["at risk", "out of breath", "on second thoughts"],
    answer: "out of breath",
  },
  {
    question: "The lieutenant's soldiers were _____, so he had to withdraw from the front lines.",
    options: ["under fire", "under arrest", "on alert"],
    answer: "under fire",
  },
  {
    question: "It will take some time but, _____, all schools will be equipped with modern technology.",
    options: ["in theory", "between the lines", "in the long run"],
    answer: "in the long run",
  },
  {
    question: "The negotiator was looking for a way to physically _____ the two rival delegations together at the same table.",
    options: ["draw", "get", "bring"],
    answer: "bring",
  },
  {
    question: "He came into the room quietly so that he wouldn't _____ attention.",
    options: ["catch", "do", "draw"],
    answer: "draw",
  },
  {
    question: "The politician promised to _____ change to his community if he was elected.",
    options: ["do", "bring", "get"],
    answer: "bring",
  },
  {
    question: "While mum was preparing meals, I helped her and _____ the laundry.",
    options: ["got", "did", "drew"],
    answer: "did",
  },
  {
    question: "The actors _____ the ideas of the director to life.",
    options: ["drew", "brought", "caught"],
    answer: "brought",
  },
  {
    question: "We have to _____ some more research before we can publish the results.",
    options: ["do", "bring", "get"],
    answer: "do",
  },
  {
    question: "I'm sorry. I didn't _____ your name. Could you tell me again?",
    options: ["draw", "catch", "do"],
    answer: "catch",
  },
  {
    question: "The mafia boss had his associates do everything for him, so he didn't have to _____ his hands dirty.",
    options: ["get", "bring", "catch"],
    answer: "get",
  },
  {
    question: "I was sitting too close to the fire, so my newspaper _____ fire.",
    options: ["caught", "drew", "did"],
    answer: "caught",
  },
  {
    question: "_____ your duty and arrest those two muggers.",
    options: ["Do", "Get", "Bring"],
    answer: "Do",
  },
  {
    question: "The journalists revealed some exciting details and _____ the crimes of the company to light.",
    options: ["brought", "caught", "drew"],
    answer: "brought",
  },
  {
    question: "Even though I am an adult I still _____ a kick out of putting toys together.",
    options: ["get", "bring", "do"],
    answer: "get",
  },
  {
    question: "You can't behave like that. You must _____ a line between your private and professional life.",
    options: ["draw", "catch", "get"],
    answer: "draw",
  },
  {
    question: "You must wear something warmer or else you'll _____ a cold.",
    options: ["catch", "do", "draw"],
    answer: "catch",
  },
  {
    question: "The four-leaf clover I got from my girlfriend _____ me luck at the test.",
    options: ["brought", "did", "got"],
    answer: "brought",
  },
  {
    question: "When the robber tried to escape from the bank the police were already waiting and _____ him red-handed.",
    options: ["caught", "drew", "brought"],
    answer: "caught",
  },
  {
    question: "If you don't start learning more, you'll _____ badly in the test next week.",
    options: ["do", "bring", "get"],
    answer: "do",
  },
  {
    question: "Arguing like this will _____ us nowhere. We must start from the beginning.",
    options: ["get", "draw", "bring"],
    answer: "get",
  },
  {
    question: "The burglars _____ the house and stole all the jewels.",
    options: ["ran into", "send for", "broke into"],
    answer: "broke into",
  },
  {
    question: "There must be something wrong with your mobile phone. I can't _____ you.",
    options: ["put up with", "get through to", "keep up"],
    answer: "get through to",
  },
  {
    question: "I _____ an old acquaintance of mine at the airport. I hadn't seen her in years.",
    options: ["turned down", "ran into", "slowed down"],
    answer: "ran into",
  },
  {
    question: "I told her to _____, otherwise she would crash into the car up front.",
    options: ["grow up", "slow down", "work out"],
    answer: "slow down",
  },
  {
    question: "What do the letters WHO _____?",
    options: ["cross out", "take after", "stand for"],
    answer: "stand for",
  },
  {
    question: "We usually _____ at our favourite restaurant once a month.",
    options: ["break into", "make up for", "eat out"],
    answer: "eat out",
  },
  {
    question: "Please _____ the names you don't want on the list.",
    options: ["turn down", "cross out", "let in on"],
    answer: "cross out",
  },
  {
    question: "My teacher told me to stop being so childish and start _____.",
    options: ["send for", "keep up", "grow up"],
    answer: "grow up",
  },
  {
    question: "The pilot was able to _____ the delay caused at the airport.",
    options: ["put up with", "make up for", "get through to"],
    answer: "make up for",
  },
  {
    question: "Jack _____ his father. He even walks in the same way.",
    options: ["takes after", "runs into", "stands for"],
    answer: "takes after",
  },
  {
    question: "My boss told me to _____ the good work.",
    options: ["eat out", "slow down", "keep up"],
    answer: "keep up",
  },
  {
    question: "I cannot _____ your bad behaviour anymore. I'm calling your parents.",
    options: ["cross out", "turn down", "put up with"],
    answer: "put up with",
  },
  {
    question: "I hope everything _____ for you in your new job.",
    options: ["breaks into", "works out", "grows up"],
    answer: "works out",
  },
  {
    question: "I _____ the manager's offer of a 10 percent raise. I demanded more.",
    options: ["got through to", "made up for", "turned down"],
    answer: "turned down",
  },
  {
    question: "We had to _____ the doctor because his condition was deteriorating.",
    options: ["send for", "take after", "stand for"],
    answer: "send for",
  },
  {
    question: "You shouldn't leave the children alone for so long or they'll _____ something bad.",
    options: ["pick on", "keep back", "get up to"],
    answer: "get up to",
  },
  {
    question: "Could you _____ a minute while I get something to write with?",
    options: ["burst in", "hang on", "come out"],
    answer: "hang on",
  },
  {
    question: "It took the firefighters almost an hour to _____ the fire.",
    options: ["give up", "break off", "put out"],
    answer: "put out",
  },
  {
    question: "Being a primary school teacher _____ a lot of nerves and patience.",
    options: ["goes with", "calls for", "looks into"],
    answer: "calls for",
  },
  {
    question: "All the employees had to _____ a form given to them by the personnel manager.",
    options: ["make out", "drop off", "fill in"],
    answer: "fill in",
  },
  {
    question: "Although he answered most of my questions, I had the feeling he was _____ something.",
    options: ["picking on", "getting up to", "keeping back"],
    answer: "keeping back",
  },
  {
    question: "The older boys always _____ the younger ones at the school playground. It's so disgusting.",
    options: ["hang on", "burst in", "pick on"],
    answer: "pick on",
  },
  {
    question: "My doctor advised me to _____ smoking.",
    options: ["break off", "look into", "give up"],
    answer: "give up",
  },
  {
    question: "The bright blue scarf _____ your new dress perfectly.",
    options: ["calls for", "comes out", "goes with"],
    answer: "goes with",
  },
  {
    question: "The investigator told me he would _____ the matter.",
    options: ["make out", "fill in", "look into"],
    answer: "look into",
  },
  {
    question: "The sun has just _____, so I expect the rest of the afternoon will be quite warm.",
    options: ["drop off", "burst in", "come out"],
    answer: "come out",
  },
  {
    question: "The prosecutor _____ an expert on DNA analysis.",
    options: ["picked on", "brought in", "kept back"],
    answer: "brought in",
  },
  {
    question: "John and Marjorie have decided to _____ after being together for five years.",
    options: ["hang on", "break off", "give up"],
    answer: "break off",
  },
  {
    question: "The man _____ the room without knocking and told us about the accident that had just happened.",
    options: ["come out", "burst in", "get up to"],
    answer: "burst in",
  },
  {
    question: "It's difficult to _____ the licence plate number of the car over there. It's so far away.",
    options: ["put out", "go with", "make out"],
    answer: "make out",
  },
  {
    question: "Is that the truth or did you just _____ such a story?",
    options: ["find out", "hold back", "make up"],
    answer: "make up",
  },
  {
    question: "Jack couldn't _____ his anger and started shouting at everyone.",
    options: ["turn off", "die down", "hold back"],
    answer: "hold back",
  },
  {
    question: "The teacher wasn't paying attention, so he _____ an old trick I had played on him.",
    options: ["came up against", "fell for", "drew up"],
    answer: "fell for",
  },
  {
    question: "My parents always let me _____ until after midnight. It's very generous of them.",
    options: ["take off", "get by", "stay out"],
    answer: "stay out",
  },
  {
    question: "The noise _____ after the politician appeared in the middle of the crowd.",
    options: ["worked out", "went through", "died down"],
    answer: "died down",
  },
  {
    question: "The player didn't _____ my expectations so I substituted him.",
    options: ["come up against", "stay out", "live up to"],
    answer: "live up to",
  },
  {
    question: "Please _____ the lights when you leave.",
    options: ["make up", "hold back", "turn off"],
    answer: "turn off",
  },
  {
    question: "A black limousine _____ near the Capitol and the President got out.",
    options: ["died down", "took off", "drew up"],
    answer: "drew up",
  },
  {
    question: "The manager had his lawyers _____ the new contract together with him so it would be ready for signing.",
    options: ["found out", "gone through", "drawn up"],
    answer: "drawn up",
  },
  {
    question: "John _____ that his wife had been cheating on him and filed for divorce.",
    options: ["fell for", "came up against", "found out"],
    answer: "found out",
  },
  {
    question: "The company _____ some financial difficulties and had to close some of its factories.",
    options: ["lived up to", "stayed out", "came up against"],
    answer: "came up against",
  },
  {
    question: "Normally, planes _____ on time, but today there are delays due to the foggy weather.",
    options: ["draw up", "die down", "take off"],
    answer: "take off",
  },
  {
    question: "They don't have much money, but in most months they can _____.",
    options: ["make up", "go through", "get by"],
    answer: "get by",
  },
  {
    question: "My little brother keeps clicking his pen nonstop. It really _____.",
    options: ["gets on my nerves", "does the trick", "shoots the breeze"],
    answer: "gets on my nerves",
  },
  {
    question: "_____! I'm trying to study and you've been playing loud music for an hour.",
    options: ["Cut that out", "You've got to be kidding me", "No skin off my nose"],
    answer: "Cut that out",
  },
  {
    question: "The way she chews gum so loudly _____ me crazy.",
    options: ["drives", "gets", "makes"],
    answer: "drives",
  },
  {
    question: "It's bad manners to _____ your soup in public.",
    options: ["slurp", "shoot", "cut"],
    answer: "slurp",
  },
  {
    question: "You've never been on an airplane before? _____!",
    options: ["You've got to be kidding me", "Cut that out", "No skin off my nose"],
    answer: "You've got to be kidding me",
  },
  {
    question: "We spent the afternoon on the porch just _____ and drinking iced tea.",
    options: ["shooting the breeze", "getting on each other's nerves", "slurping soup"],
    answer: "shooting the breeze",
  },
  {
    question: "I _____ the way he always leaves dirty dishes in the sink.",
    options: ["can't stand", "don't mind", "shoot the breeze with"],
    answer: "can't stand",
  },
  {
    question: "If you don't want to come with us, it's _____.",
    options: ["no skin off my nose", "getting on my nerves", "driving me crazy"],
    answer: "no skin off my nose",
  },
  {
    question: "After months of holding everything inside, she finally released all her _____ emotions.",
    options: ["pent-up", "crazy", "slurped"],
    answer: "pent-up",
  },
  {
    question: "Living with three roommates sometimes _____ because we all have very different habits.",
    options: ["drives me crazy", "no skin off my nose", "shoots the breeze"],
    answer: "drives me crazy",
  },
  {
    question: "Their living room feels empty because they have very little _____.",
    options: ["nightstand", "furniture", "headboard"],
    answer: "furniture",
  },
  {
    question: "This old lock is a bit rusty, but I think a little oil will _____.",
    options: ["match", "be a hand-me-down", "do the trick"],
    answer: "do the trick",
  },
  {
    question: "That blue shirt doesn't _____ your black pants at all.",
    options: ["replace", "match", "fit"],
    answer: "match",
  },
  {
    question: "We're expecting eight guests, so we need two more _____.",
    options: ["dressers", "dining chairs", "nightstands"],
    answer: "dining chairs",
  },
  {
    question: "The _____ was big enough for our whole family to eat together comfortably.",
    options: ["nightstand", "dining table", "dresser"],
    answer: "dining table",
  },
  {
    question: "Most of my clothes are _____ from my older sister.",
    options: ["headboards", "hand-me-downs", "furniture"],
    answer: "hand-me-downs",
  },
  {
    question: "I keep my folded T-shirts and sweaters in my _____.",
    options: ["dresser", "nightstand", "dining table"],
    answer: "dresser",
  },
  {
    question: "Before going to sleep, I always put my phone and glasses on the _____.",
    options: ["dresser", "nightstand", "dining chair"],
    answer: "nightstand",
  },
  {
    question: "The bed looks much nicer now that we've added a wooden _____.",
    options: ["nightstand", "dresser", "headboard"],
    answer: "headboard",
  },
  {
    question: "They bought a new _____ set with a table and six matching chairs.",
    options: ["living room", "bedroom", "dining"],
    answer: "dining",
  },
  {
    question: "On weekends, many families go to the _____ to spread a blanket on the grass, have a picnic, and let the kids run around.",
    options: ["trail", "park", "playground"],
    answer: "park",
  },
  {
    question: "I arrived at the airport too early, so I walked around the shops to _____.",
    options: ["come across", "kill some time", "slack off"],
    answer: "kill some time",
  },
  {
    question: "We followed the _____ through the forest all the way to the waterfall.",
    options: ["scenery", "playground", "trail"],
    answer: "trail",
  },
  {
    question: "The mountain _____ was absolutely breathtaking at sunrise.",
    options: ["spot", "shade", "scenery"],
    answer: "scenery",
  },
  {
    question: "While hiking, we _____ an old abandoned cabin in the woods.",
    options: ["did the trick", "came across", "killed some time"],
    answer: "came across",
  },
  {
    question: "There's a big oak _____ in the middle of the park that provides plenty of shade.",
    options: ["tree", "trail", "grass"],
    answer: "tree",
  },
  {
    question: "The children were running and rolling around on the green _____.",
    options: ["headboard", "grass", "shade"],
    answer: "grass",
  },
  {
    question: "It was very hot, so we sat under a large tree in the _____.",
    options: ["spot", "scenery", "shade"],
    answer: "shade",
  },
  {
    question: "This is my favorite _____ in the park because it's quiet and has a beautiful view.",
    options: ["spot", "playground", "trail"],
    answer: "spot",
  },
  {
    question: "The kids spent the whole afternoon at the _____ climbing and going down the slides.",
    options: ["nightstand", "playground", "trail"],
    answer: "playground",
  },
  {
    question: "_____ we go camping in the mountains, but not very often.",
    options: ["No skin off my nose", "Every so often", "Cut that out"],
    answer: "Every so often",
  },
  {
    question: "In the United States, most students go to _____ after elementary school.",
    options: ["junior high", "playground", "nightstand"],
    answer: "junior high",
  },
  {
    question: "I need to buy some art _____ for my daughter's project.",
    options: ["furniture", "scenery", "supplies"],
    answer: "supplies",
  },
  {
    question: "My _____ is so heavy today because it's full of textbooks.",
    options: ["folder", "backpack", "highlighter"],
    answer: "backpack",
  },
  {
    question: "Please put the worksheets in your _____ and fasten them with the rings.",
    options: ["three-ring binder", "eraser", "calculator"],
    answer: "three-ring binder",
  },
  {
    question: "Can I borrow a _____? I need to write down this phone number.",
    options: ["construction paper", "pen", "crayon"],
    answer: "pen",
  },
  {
    question: "The children used colorful _____ to draw pictures of their families.",
    options: ["crayons", "trail", "index cards"],
    answer: "crayons",
  },
  {
    question: "The students made paper flowers using colorful _____.",
    options: ["headboard", "construction paper", "ruled paper"],
    answer: "construction paper",
  },
  {
    question: "I prefer using a _____ because I can erase my mistakes.",
    options: ["highlighter", "pen", "pencil"],
    answer: "pencil",
  },
  {
    question: "I wrote the wrong answer in pencil. I need an _____.",
    options: ["eraser", "backpack", "glue"],
    answer: "eraser",
  },
  {
    question: "Use a _____ to mark the important dates in the text.",
    options: ["calculator", "highlighter", "folder"],
    answer: "highlighter",
  },
  {
    question: "I only write on _____ paper because it helps me keep my handwriting straight.",
    options: ["construction", "hand-me-down", "ruled"],
    answer: "ruled",
  },
  {
    question: "She filled an entire _____ with notes during the semester.",
    options: ["notebook", "trail", "dresser"],
    answer: "notebook",
  },
  {
    question: "He wrote key points on _____ to help him remember his speech.",
    options: ["headboards", "index cards", "dining chairs"],
    answer: "index cards",
  },
  {
    question: "You can use a _____ to solve difficult math problems.",
    options: ["glue", "crayon", "calculator"],
    answer: "calculator",
  },
  {
    question: "The doctor prescribed a new _____ for my allergies.",
    options: ["pharmacy", "medication", "label"],
    answer: "medication",
  },
  {
    question: "I have to stop by the _____ to pick up my prescription.",
    options: ["dresser", "playground", "pharmacy"],
    answer: "pharmacy",
  },
  {
    question: "Always read the entire _____ on the bottle carefully before taking any medicine, including the dosage instructions.",
    options: ["warning", "cap", "label"],
    answer: "label",
  },
  {
    question: "The _____ in this medicine are what help reduce the pain.",
    options: ["active ingredients", "supplies", "hand-me-downs"],
    answer: "active ingredients",
  },
  {
    question: "The package has a clear _____ about possible side effects.",
    options: ["dosage", "warning", "seal"],
    answer: "warning",
  },
  {
    question: "She had a serious _____ after eating peanuts.",
    options: ["drowsiness", "allergic reaction", "scenery"],
    answer: "allergic reaction",
  },
  {
    question: "Don't forget to remove the _____ before opening the new bottle of medicine.",
    options: ["folder", "seal", "cap"],
    answer: "seal",
  },
  {
    question: "Make sure you put the _____ back on the bottle tightly.",
    options: ["trail", "cap", "eraser"],
    answer: "cap",
  },
  {
    question: "I always take an umbrella, just _____.",
    options: ["to shoot the breeze", "to be on the safe side", "to kill some time"],
    answer: "to be on the safe side",
  },
  {
    question: "The bottle says the _____ is two pills every six hours.",
    options: ["supervision", "scenery", "dosage"],
    answer: "dosage",
  },
  {
    question: "Do not _____ the recommended dose of this medication.",
    options: ["slurp", "exceed", "match"],
    answer: "exceed",
  },
  {
    question: "This medicine requires a _____ from your doctor.",
    options: ["prescription", "headboard", "backpack"],
    answer: "prescription",
  },
  {
    question: "One common side effect of this medicine is _____, so you might feel too sleepy to drive safely after taking it.",
    options: ["autonomy", "drowsiness", "dizziness"],
    answer: "drowsiness",
  },
  {
    question: "She suddenly felt _____ and had to sit down for a moment.",
    options: ["creative", "pent-up", "dizzy"],
    answer: "dizzy",
  },
  {
    question: "Drinking alcohol can _____ your ability to drive safely.",
    options: ["match", "impair", "exceed"],
    answer: "impair",
  },
  {
    question: "These pills come in a _____ bottle to help keep children safe.",
    options: ["ruled", "childproof", "self-directed"],
    answer: "childproof",
  },
  {
    question: "When the project became too big, she decided to _____ some of the work to her team members.",
    options: ["delegate", "redo", "ended up"],
    answer: "delegate",
  },
  {
    question: "He is a real _____. He wants to make every decision himself.",
    options: ["timesaver", "control freak", "explicit instruction"],
    answer: "control freak",
  },
  {
    question: "After trying many different careers, she _____ becoming a graphic designer.",
    options: ["delegated", "assigned", "ended up"],
    answer: "ended up",
  },
  {
    question: "The report contained so many mistakes that I had to _____ it from the beginning.",
    options: ["redo", "assign", "delegate"],
    answer: "redo",
  },
  {
    question: "Using keyboard shortcuts is a real _____.",
    options: ["worth the trouble", "timesaver", "control freak"],
    answer: "timesaver",
  },
  {
    question: "Waiting in line for four hours wasn't _____.",
    options: ["explicit", "delegate", "worth the trouble"],
    answer: "worth the trouble",
  },
  {
    question: "The teacher will _____ each student a different topic for the presentation.",
    options: ["redo", "assign", "end up"],
    answer: "assign",
  },
  {
    question: "Please be _____ when giving safety instructions.",
    options: ["worth the trouble", "explicit", "a timesaver"],
    answer: "explicit",
  },
  {
    question: "She refuses to _____ important responsibilities because she doesn't trust anyone else.",
    options: ["delegate", "redo", "end up"],
    answer: "delegate",
  },
  {
    question: "He studied engineering, but _____ becoming a chef.",
    options: ["assigned", "redid", "ended up"],
    answer: "ended up",
  },
  {
    question: "Buying a dishwasher was a real _____ for our family.",
    options: ["control freak", "timesaver", "explicit rule"],
    answer: "timesaver",
  },
  {
    question: "The manager will _____ the new employees to different departments.",
    options: ["delegate", "redo", "assign"],
    answer: "assign",
  },
  {
    question: "The contract is very _____. Every condition is clearly explained.",
    options: ["worth the trouble", "a control freak", "explicit"],
    answer: "explicit",
  },
  {
    question: "Fixing the old car took weeks, but it was _____. It still runs perfectly today.",
    options: ["worth the trouble", "a timesaver", "explicit"],
    answer: "worth the trouble",
  },
  {
    question: "The manager asked for _____ results, specific numbers she could track over time, to see if the new training program was working.",
    options: ["periodic", "measurable", "progress"],
    answer: "measurable",
  },
  {
    question: "Our main _____ is to increase sales by 30% this year.",
    options: ["progress report", "goal", "track"],
    answer: "goal",
  },
  {
    question: "I don't want to _____ my team, so I will finish the report on time.",
    options: ["report back", "let them down", "get results"],
    answer: "let them down",
  },
  {
    question: "Please _____ to the boss at the end of the week with your updates.",
    options: ["report back", "let down", "get results"],
    answer: "report back",
  },
  {
    question: "The company tests its equipment _____ to make sure everything is safe.",
    options: ["measurably", "periodically", "on the right track"],
    answer: "periodically",
  },
  {
    question: "If we follow the plan carefully, we should _____ within six months.",
    options: ["let down", "get results", "report back"],
    answer: "get results",
  },
  {
    question: "The team submitted a _____ after the first three months of the project.",
    options: ["goal", "progress report", "measurable result"],
    answer: "progress report",
  },
  {
    question: "Even though the project isn't finished, I think we are _____.",
    options: ["letting down", "on the right track", "periodically"],
    answer: "on the right track",
  },
  {
    question: "It's important to have a clear _____ before you start working on a big project.",
    options: ["progress report", "goal", "measurable"],
    answer: "goal",
  },
  {
    question: "She checks her email _____ throughout the day, usually every two hours.",
    options: ["measurably", "periodically", "on the right track"],
    answer: "periodically",
  },
  {
    question: "The coach was disappointed because some players _____ the team in the final game.",
    options: ["got results", "let down", "reported back"],
    answer: "let down",
  },
  {
    question: "We need to _____ soon, or the project might be canceled.",
    options: ["submit a progress report", "get results", "let down"],
    answer: "get results",
  },
  {
    question: "Every month the supervisor asks for a short _____ on our work.",
    options: ["goal", "progress report", "track"],
    answer: "progress report",
  },
  {
    question: "I prefer a _____ computer because it has a bigger screen and is easier to upgrade.",
    options: ["desktop", "laptop", "monitor"],
    answer: "desktop",
  },
  {
    question: "Most students bring a _____ to class because it's easy to carry.",
    options: ["desktop", "monitor", "laptop"],
    answer: "laptop",
  },
  {
    question: "This tool is very _____. You can use it for cooking, gardening, and home repairs.",
    options: ["cramped", "spare", "versatile"],
    answer: "versatile",
  },
  {
    question: "The _____ on my laptop is cracked, so I can barely see anything.",
    options: ["battery", "keyboard", "screen"],
    answer: "screen",
  },
  {
    question: "My new _____ is much larger than my old one.",
    options: ["monitor", "connector", "keyboard"],
    answer: "monitor",
  },
  {
    question: "This laptop doesn't have the right _____. I need an adapter to connect the monitor.",
    options: ["battery", "connector", "speaker"],
    answer: "connector",
  },
  {
    question: "There are too many _____ under my desk. I need to organize them.",
    options: ["cables", "speakers", "batteries"],
    answer: "cables",
  },
  {
    question: "I bought a _____ to raise my monitor to eye level.",
    options: ["power cord", "spare battery", "monitor stand"],
    answer: "monitor stand",
  },
  {
    question: "You can _____ your monitor by putting it on a stand.",
    options: ["hook up", "elevate", "plug in"],
    answer: "elevate",
  },
  {
    question: "The _____ aren't working, so I can't hear any sound.",
    options: ["speakers", "connectors", "keyboards"],
    answer: "speakers",
  },
  {
    question: "My laptop _____ is almost empty.",
    options: ["battery", "screen", "cable"],
    answer: "battery",
  },
  {
    question: "It's smart to keep a _____ tire in your car.",
    options: ["versatile", "cramped", "spare"],
    answer: "spare",
  },
  {
    question: "I forgot my laptop _____ at home, so I can't charge it.",
    options: ["keyboard", "monitor", "power cord"],
    answer: "power cord",
  },
  {
    question: "My _____ stopped working, so I have to use the on-screen keyboard.",
    options: ["keyboard", "speaker", "screen"],
    answer: "keyboard",
  },
  {
    question: "The office feels _____ because there isn't enough space between the desks.",
    options: ["spare", "versatile", "cramped"],
    answer: "cramped",
  },
  {
    question: "I found a great _____ where people from my country living abroad share advice.",
    options: ["avatar", "forum", "profile"],
    answer: "forum",
  },
  {
    question: "She uses the _____ 'SunnyDaze87' instead of her real name when chatting online.",
    options: ["screen name", "thread", "profile"],
    answer: "screen name",
  },
  {
    question: "I usually _____ photos of my travels on Instagram every weekend.",
    options: ["lurk", "flame", "post"],
    answer: "post",
  },
  {
    question: "This _____ about the best hiking trails has over 200 replies.",
    options: ["FAQ", "avatar", "thread"],
    answer: "thread",
  },
  {
    question: "When visiting a new country, it's often safer to _____ and not draw attention to yourself.",
    options: ["keep a low profile", "upload everything", "flame strangers"],
    answer: "keep a low profile",
  },
  {
    question: "Please complete your _____ with a photo and a short description.",
    options: ["screen name", "profile", "avatar"],
    answer: "profile",
  },
  {
    question: "I chose a cartoon character as my _____.",
    options: ["thread", "avatar", "forum"],
    answer: "avatar",
  },
  {
    question: "Can you _____ these documents to the website?",
    options: ["quote", "upload", "lurk"],
    answer: "upload",
  },
  {
    question: "Before contacting support, check the _____ section first.",
    options: ["thread", "FAQs", "profiles"],
    answer: "FAQs",
  },
  {
    question: "Several users started _____ him after his rude comment.",
    options: ["quoting", "flaming", "replying to"],
    answer: "flaming",
  },
  {
    question: "In response to her post, I wrote a _____ explaining why I disagreed.",
    options: ["reply", "thread", "avatar"],
    answer: "reply",
  },
  {
    question: "Please don't write in _____. It looks like you're shouting.",
    options: ["profiles", "threads", "ALL CAPS"],
    answer: "ALL CAPS",
  },
  {
    question: "When she found out he lied to her, she really _____.",
    options: ["started a thread", "kept a low profile", "let him have it"],
    answer: "let him have it",
  },
  {
    question: "In his essay, he decided to _____ a famous line from Martin Luther King Jr.",
    options: ["quote", "flame", "upload"],
    answer: "quote",
  },
  {
    question: "The newspaper took his words _____.",
    options: ["in alphabetical order", "out of context", "by surprise"],
    answer: "out of context",
  },
  {
    question: "In the job interview, they asked me how I would handle a _____ situation where I had to fire a close friend.",
    options: ["desperate", "hypothetical", "pathetic"],
    answer: "hypothetical",
  },
  {
    question: "Can I have your _____? I'd like to call you sometime.",
    options: ["address", "email", "number"],
    answer: "number",
  },
  {
    question: "You promised to come to the party and then didn't show up. _____?",
    options: ["What gives?", "What's up?", "So what?"],
    answer: "What gives?",
  },
  {
    question: "Whether we go camping this weekend _____ on the weather.",
    options: ["depends", "hits it off", "gets up the nerve"],
    answer: "depends",
  },
  {
    question: "They _____ right away and have been close friends ever since.",
    options: ["hit it off", "played hard to get", "got up the nerve"],
    answer: "hit it off",
  },
  {
    question: "There was instant _____ between them the moment they locked eyes across the room.",
    options: ["friendship", "chemistry", "agreement"],
    answer: "chemistry",
  },
  {
    question: "She has _____ of friends on social media.",
    options: ["a ton", "hide nor hair", "chemistry"],
    answer: "a ton",
  },
  {
    question: "I haven't seen hide nor hair _____ Maria since she moved away.",
    options: ["from", "of", "with"],
    answer: "of",
  },
  {
    question: "His excuse for missing the deadline was really _____. Nobody believed it.",
    options: ["desperate", "pathetic", "hypothetical"],
    answer: "pathetic",
  },
  {
    question: "He is _____ a new job because he hates his current boss.",
    options: ["interested in", "desperate for", "responsible for"],
    answer: "desperate for",
  },
  {
    question: "It took me weeks to _____ to ask her out.",
    options: ["hit it off", "get up the nerve", "depend on"],
    answer: "get up the nerve",
  },
  {
    question: "She likes him but is _____ so he'll keep trying to impress her.",
    options: ["playing hard to get", "not that into him", "out of context"],
    answer: "playing hard to get",
  },
  {
    question: "I've gone on a few dates with him, but I'm not that _____ him.",
    options: ["desperate for", "into", "similar to"],
    answer: "into",
  },
  {
    question: "Hello, _____ Mr. Thompson, please?",
    options: ["Speaking", "Field calls", "May I speak to"],
    answer: "May I speak to",
  },
  {
    question: "Yes, this is she. _____.",
    options: ["Speaking", "May I speak to", "Hold, please"],
    answer: "Speaking",
  },
  {
    question: "Who should I email directly if I have questions about the conference registration?",
    options: ["contact person", "administrative assistant", "staff"],
    answer: "contact person",
  },
  {
    question: "The _____ answers phones, schedules meetings, and prepares documents.",
    options: ["qualification", "contact person", "administrative assistant"],
    answer: "administrative assistant",
  },
  {
    question: "My boss is very busy, so I usually _____ for him in the morning.",
    options: ["hire", "field calls", "spell things out"],
    answer: "field calls",
  },
  {
    question: "The company plans to _____ three new engineers next month.",
    options: ["hire", "emphasize", "field calls"],
    answer: "hire",
  },
  {
    question: "Read the _____ carefully to learn what the position involves.",
    options: ["resume", "cover letter", "job description"],
    answer: "job description",
  },
  {
    question: "I think she'd be a _____ for the marketing manager position.",
    options: ["qualification", "good fit", "initiative"],
    answer: "good fit",
  },
  {
    question: "One important _____ for this job is experience with project management.",
    options: ["qualification", "resume", "cover letter"],
    answer: "qualification",
  },
  {
    question: "The instructions _____ exactly which documents you need to submit.",
    options: ["hire", "spell out", "emphasize"],
    answer: "spell out",
  },
  {
    question: "Don't forget to send a _____ with your resume.",
    options: ["cover letter", "job description", "vote of confidence"],
    answer: "cover letter",
  },
  {
    question: "She manages a _____ of 25 employees.",
    options: ["initiative", "resume", "staff"],
    answer: "staff",
  },
  {
    question: "The teacher _____ the importance of practicing every day.",
    options: ["emphasized", "fielded calls", "spelled out"],
    answer: "emphasized",
  },
  {
    question: "Please email your _____ before Friday.",
    options: ["staff", "resume", "initiative"],
    answer: "resume",
  },
  {
    question: "I appreciate you taking the _____ to solve the problem yourself.",
    options: ["initiative", "qualification", "vote of confidence"],
    answer: "initiative",
  },
  {
    question: "Promoting her to project leader was a real _____.",
    options: ["job description", "cover letter", "vote of confidence"],
    answer: "vote of confidence",
  },
  {
    question: "She wants to _____ for the lead role in the school musical.",
    options: ["duke it out", "audition", "get it over with"],
    answer: "audition",
  },
  {
    question: "I hate going to the dentist, so let's just _____ and make the appointment today.",
    options: ["get it over with", "show our chops", "audition"],
    answer: "get it over with",
  },
  {
    question: "Her performance was absolutely _____. She didn't make a single mistake.",
    options: ["rudimentary", "flawless", "pathetic"],
    answer: "flawless",
  },
  {
    question: "Music is her greatest _____. She practices the piano for hours every day.",
    options: ["flair", "passion", "stalemate"],
    answer: "passion",
  },
  {
    question: "He is a piano _____ who has performed with major orchestras around the world.",
    options: ["teacher", "virtuoso", "student"],
    answer: "virtuoso",
  },
  {
    question: "The students only have a _____ understanding of French, so they still need basic lessons.",
    options: ["flawless", "rudimentary", "advanced"],
    answer: "rudimentary",
  },
  {
    question: "She always dresses with a lot of _____, favoring bold colors and unexpected accessories.",
    options: ["flair", "plainness", "confidence"],
    answer: "flair",
  },
  {
    question: "The chef really showed his cooking _____ with that incredible meal.",
    options: ["chops", "recipe", "passion"],
    answer: "chops",
  },
  {
    question: "The young painter shows remarkable _____ in the way she uses color and composition.",
    options: ["artistry", "experience", "rudimentary skills"],
    answer: "artistry",
  },
  {
    question: "You can't _____ him for trying his best, even if the result wasn't perfect.",
    options: ["fault", "audition", "flatter"],
    answer: "fault",
  },
  {
    question: "After years of practice, she has achieved complete _____ of the violin.",
    options: ["expressiveness", "mastery", "flair"],
    answer: "mastery",
  },
  {
    question: "Her singing has so much _____ that the audience was deeply moved.",
    options: ["stalemate", "expressiveness", "mastery"],
    answer: "expressiveness",
  },
  {
    question: "After arguing for hours, they reached a _____ and couldn't agree on anything.",
    options: ["virtuoso", "stalemate", "compromise"],
    answer: "stalemate",
  },
  {
    question: "The two brothers started to _____ over who would get the last piece of cake.",
    options: ["get it over with", "duke it out", "audition"],
    answer: "duke it out",
  },
  {
    question: "As the headliner, her name is at the top of the _____ posted outside the theater.",
    options: ["bill", "invoice", "list"],
    answer: "bill",
  },
  {
    question: "She earns _____ because she's one of the company's top lawyers.",
    options: ["the big bucks", "a flair", "a passion"],
    answer: "the big bucks",
  },
  {
    question: "I was very _____ when she said she loved my painting.",
    options: ["flattered", "flawless", "pathetic"],
    answer: "flattered",
  },
  {
    question: "How did you _____ such a creative idea for the party?",
    options: ["mind your own business", "come up with", "wait and see"],
    answer: "come up with",
  },
  {
    question: "_____, I've lived in this city for over thirty years, so I know it very well.",
    options: ["No comment", "Let me tell you", "Wait and see"],
    answer: "Let me tell you",
  },
  {
    question: "Stop acting like a child; it's time you started behaving like a _____.",
    options: ["pipsqueak", "grown-up", "adult"],
    answer: "grown-up",
  },
  {
    question: "Stop calling her a _____. She may be small, but she's very smart.",
    options: ["grown-up", "pipsqueak", "genius"],
    answer: "pipsqueak",
  },
  {
    question: "I told him to _____ and stop asking about my private life.",
    options: ["mind his own business", "come up with excuses", "wait and see"],
    answer: "mind his own business",
  },
  {
    question: "When the reporter asked about the scandal, the politician replied, '_____.'",
    options: ["Let me tell you", "No comment", "We'll wait and see"],
    answer: "No comment",
  },
  {
    question: "This information is _____ and only authorized employees may access it.",
    options: ["personal", "confidential", "private"],
    answer: "confidential",
  },
  {
    question: "He said he's leaving the company for _____ reasons that he'd rather not discuss.",
    options: ["confidential", "personal", "financial"],
    answer: "personal",
  },
  {
    question: "After a long, noisy week at work, I just want some _____ at home, no phone calls, no noise.",
    options: ["peace and quiet", "rest and relaxation", "free time"],
    answer: "peace and quiet",
  },
  {
    question: "_____ 'but Mom' me! You still have to finish your homework.",
    options: ["Don't", "Never", "Stop"],
    answer: "Don't",
  },
  {
    question: "We don't know yet if the trip is possible. We'll have to _____.",
    options: ["mind our own business", "wait and see", "come up with a plan"],
    answer: "wait and see",
  },
  {
    question: "The restaurant is _____ milk, so we can't order a latte today.",
    options: ["out of", "full of", "low on"],
    answer: "out of",
  },
  {
    question: "Could you please _____ me the salt? It's right there next to you.",
    options: ["bring", "hand", "give"],
    answer: "hand",
  },
  {
    question: "I'm craving something salty and crunchy. Let's buy a bag of _____.",
    options: ["French fries", "potato chips", "pretzels"],
    answer: "potato chips",
  },
  {
    question: "Do you want a _____ with cheese and bacon?",
    options: ["pizza", "burger", "sandwich"],
    answer: "burger",
  },
  {
    question: "Most kids love dipping their _____ in ketchup.",
    options: ["popcorn", "French fries", "onion rings"],
    answer: "French fries",
  },
  {
    question: "We made _____ and watched a movie last night.",
    options: ["pizza", "popcorn", "nachos"],
    answer: "popcorn",
  },
  {
    question: "Eating too much greasy, processed _____ is bad for your health.",
    options: ["fast food", "junk food", "dessert"],
    answer: "junk food",
  },
  {
    question: "The doctor told her to _____ because she needs to lose weight.",
    options: ["stuff her face", "watch what she eats", "eat whatever she wants"],
    answer: "watch what she eats",
  },
  {
    question: "He _____ at the buffet and now he feels sick.",
    options: ["stuffed his face", "ate lightly", "skipped dinner"],
    answer: "stuffed his face",
  },
  {
    question: "It's a family _____ to have pancakes every Sunday morning.",
    options: ["duty", "tradition", "routine"],
    answer: "tradition",
  },
  {
    question: "She bought a _____ with almonds and chocolate.",
    options: ["soda", "candy bar", "cookie"],
    answer: "candy bar",
  },
  {
    question: "The volunteers went _____ to collect donations for the charity.",
    options: ["door-to-door", "house by house", "around town"],
    answer: "door-to-door",
  },
  {
    question: "As the eldest child, it is my _____ to take care of my younger siblings while my parents are at work.",
    options: ["hobby", "duty", "habit"],
    answer: "duty",
  },
  {
    question: "I'll have a cheeseburger and a large _____, please.",
    options: ["pizza", "soda", "milkshake"],
    answer: "soda",
  },
  {
    question: "We ordered a large _____ with extra cheese and pepperoni.",
    options: ["burger", "pizza", "sandwich"],
    answer: "pizza",
  },
  {
    question: "This suitcase is heavy to drag through the airport. I wish I had brought my rolling _____ instead.",
    options: ["carry-on", "roller bag", "backpack"],
    answer: "roller bag",
  },
  {
    question: "The snacks are in _____ 9, next to the drinks.",
    options: ["aisle", "overhead bin", "row"],
    answer: "aisle",
  },
  {
    question: "Please put your small bag in the _____ above your seat.",
    options: ["overhead bin", "legroom", "seat pocket"],
    answer: "overhead bin",
  },
  {
    question: "We need to find a place to _____ our winter clothes during the summer.",
    options: ["store", "pack", "move"],
    answer: "store",
  },
  {
    question: "I only brought a small _____ that fits under the seat, so I don't have to wait at baggage claim.",
    options: ["roller bag", "carry-on", "backpack"],
    answer: "carry-on",
  },
  {
    question: "The seats are very close together, so the plane feels quite _____.",
    options: ["comfortable", "cramped", "spacious"],
    answer: "cramped",
  },
  {
    question: "I like sitting in the emergency exit row because there is more _____.",
    options: ["bulkhead", "legroom", "aisle"],
    answer: "legroom",
  },
  {
    question: "Passengers in the _____ must be willing to help in an emergency.",
    options: ["bulkhead", "emergency exit row", "overhead bin"],
    answer: "emergency exit row",
  },
  {
    question: "You can _____ your seat if you want to sleep during the flight.",
    options: ["store", "recline", "check"],
    answer: "recline",
  },
  {
    question: "The first row is behind the _____ at the front of the cabin.",
    options: ["aisle", "carry-on", "bulkhead"],
    answer: "bulkhead",
  },
  {
    question: "He _____ about the bad food on the plane, but he still ate everything.",
    options: ["grumbled", "praised", "laughed"],
    answer: "grumbled",
  },
  {
    question: "We're late! Let's _____ or we'll miss the train.",
    options: ["get moving", "slow down", "sit back"],
    answer: "get moving",
  },
  {
    question: "She _____ the last window seat before anyone else could book it.",
    options: ["stored", "snagged", "grumbled"],
    answer: "snagged",
  },
  {
    question: "Your suitcase is too big to bring on the plane. You'll have to _____.",
    options: ["store it", "unwind", "check your bag"],
    answer: "check your bag",
  },
  {
    question: "After the long trip, we just want to go home and _____.",
    options: ["grumble", "unwind", "recline"],
    answer: "unwind",
  },
  {
    question: "I have a dentist appointment next week for my annual _____, where the dentist examines my teeth and checks for cavities.",
    options: ["cleaning", "check-up", "root canal"],
    answer: "check-up",
  },
  {
    question: "The hygienist recommended a professional teeth _____ every six months to remove plaque and tartar buildup.",
    options: ["filling", "cleaning", "check-up"],
    answer: "cleaning",
  },
  {
    question: "My _____ are coming in, and they're causing a lot of pain.",
    options: ["molars", "wisdom teeth", "canines"],
    answer: "wisdom teeth",
  },
  {
    question: "He had to get a _____ because the tooth was badly infected.",
    options: ["cavity", "root canal", "filling"],
    answer: "root canal",
  },
  {
    question: "During the root canal, the dentist removed the damaged _____.",
    options: ["nerve", "plaque", "tartar"],
    answer: "nerve",
  },
  {
    question: "If you eat too much sugar, you might get a _____ in your tooth.",
    options: ["cavity", "filling", "crack"],
    answer: "cavity",
  },
  {
    question: "You use your _____ to chew and grind food.",
    options: ["wisdom teeth", "molars", "incisors"],
    answer: "molars",
  },
  {
    question: "Since it was only a minor cavity, the dentist put a small _____ in the hole after removing the decay.",
    options: ["root canal", "filling", "crown"],
    answer: "filling",
  },
  {
    question: "She has tooth _____ and can't eat ice cream because it hurts.",
    options: ["buildup", "sensitivity", "decay"],
    answer: "sensitivity",
  },
  {
    question: "You should brush your teeth and massage your _____ gently every day.",
    options: ["nerves", "gums", "roots"],
    answer: "gums",
  },
  {
    question: "The dentist said my gums are starting to _____.",
    options: ["recede", "bleed", "swell"],
    answer: "recede",
  },
  {
    question: "The infection reached the _____ of the tooth.",
    options: ["cavity", "root", "crown"],
    answer: "root",
  },
  {
    question: "Use _____ every day to clean between your teeth.",
    options: ["mouthwash", "dental floss", "toothpaste"],
    answer: "dental floss",
  },
  {
    question: "The _____ cleaned my teeth before the dentist examined them.",
    options: ["dental hygienist", "assistant", "receptionist"],
    answer: "dental hygienist",
  },
  {
    question: "Remember to _____ your teeth at least twice a day.",
    options: ["floss", "brush", "rinse"],
    answer: "brush",
  },
  {
    question: "There is a lot of _____ on your teeth because you haven't brushed well.",
    options: ["buildup", "swelling", "staining"],
    answer: "buildup",
  },
  {
    question: "Brush your teeth regularly to remove _____.",
    options: ["tartar", "plaque", "food poisoning"],
    answer: "plaque",
  },
  {
    question: "The dentist had to remove all her teeth and fit her with _____.",
    options: ["fillings", "dentures", "braces"],
    answer: "dentures",
  },
  {
    question: "She's a _____ at this job, so please be patient with her.",
    options: ["veteran", "newbie", "old hand"],
    answer: "newbie",
  },
  {
    question: "He's still _____, so he needs more training and guidance.",
    options: ["wet behind the ears", "experienced", "an old hand"],
    answer: "wet behind the ears",
  },
  {
    question: "Marcus is a _____ teacher with over 25 years of experience.",
    options: ["novice", "veteran", "recruit"],
    answer: "veteran",
  },
  {
    question: "She has a lot of specialized _____ in marketing and digital advertising, having studied it in depth.",
    options: ["money", "expertise", "knowledge"],
    answer: "expertise",
  },
  {
    question: "She's finally working and living alone. She's learning to _____.",
    options: ["stand on her own two feet", "prop herself up", "take things with a grain of salt"],
    answer: "stand on her own two feet",
  },
  {
    question: "As a _____, I made a lot of mistakes when I first started playing chess.",
    options: ["veteran", "novice", "expert"],
    answer: "novice",
  },
  {
    question: "Trust and communication are the _____ of a good relationship.",
    options: ["cornerstone", "reward", "result"],
    answer: "cornerstone",
  },
  {
    question: "Driving too fast on icy roads is very _____.",
    options: ["cautious", "reckless", "inept"],
    answer: "reckless",
  },
  {
    question: "She is very _____ at learning new languages quickly.",
    options: ["inept", "adept", "experienced"],
    answer: "adept",
  },
  {
    question: "He is completely _____ when it comes to fixing computers.",
    options: ["adept", "inept", "meticulous"],
    answer: "inept",
  },
  {
    question: "The company hired 15 new _____ this year.",
    options: ["old hands", "recruits", "clients"],
    answer: "recruits",
  },
  {
    question: "Our regular teacher is sick today, so we have a _____.",
    options: ["assistant", "substitute", "principal"],
    answer: "substitute",
  },
  {
    question: "The class is going on a _____ to the science museum next week.",
    options: ["vacation", "field trip", "tour"],
    answer: "field trip",
  },
  {
    question: "Before we start the game, let's review the _____.",
    options: ["guest list", "ground rules", "schedule"],
    answer: "ground rules",
  },
  {
    question: "Let's _____ the instructions one more time before you begin.",
    options: ["get through", "go over", "write down"],
    answer: "go over",
  },
  {
    question: "Find a _____ and discuss the questions together.",
    options: ["teacher", "partner", "stranger"],
    answer: "partner",
  },
  {
    question: "Young children should _____ when crossing the street.",
    options: ["let their guard down", "hold hands", "run ahead"],
    answer: "hold hands",
  },
  {
    question: "I just need to _____ this project, and then I can relax.",
    options: ["get through", "go over", "put off"],
    answer: "get through",
  },
  {
    question: "Never talk to a _____ without telling your parents first.",
    options: ["partner", "stranger", "neighbor"],
    answer: "stranger",
  },
  {
    question: "In this safety video, children learn how to stay safe from online and real-life _____.",
    options: ["teachers", "predators", "substitutes"],
    answer: "predators",
  },
  {
    question: "Don't let anyone _____ you into getting into their car.",
    options: ["lure", "abduct", "accost"],
    answer: "lure",
  },
  {
    question: "The police warned parents about people who might try to grab and take children away.",
    options: ["lure", "abduct", "approach"],
    answer: "abduct",
  },
  {
    question: "She was winning easily, but then she _____ and lost the match.",
    options: ["let her guard down", "gave up", "improved her game"],
    answer: "let her guard down",
  },
  {
    question: "He _____ the meeting to take an important phone call.",
    options: ["stepped away from", "waylaid", "accosted"],
    answer: "stepped away from",
  },
  {
    question: "You need your parents' _____ to go on the school trip.",
    options: ["permission", "opinion", "signature"],
    answer: "permission",
  },
  {
    question: "The man was _____ by two strangers asking for money late at night.",
    options: ["waylaid", "accosted", "lured"],
    answer: "accosted",
  },
  {
    question: "She was _____ by a friend who stopped her to chat on her way home.",
    options: ["abducted", "waylaid", "accosted"],
    answer: "waylaid",
  },
  {
    question: "Most fifth _____ enjoy playing outside during recess.",
    options: ["substitutes", "graders", "teachers"],
    answer: "graders",
  },
  {
    question: "He _____ all his friends, asking them to lend him money for his new phone.",
    options: ["spotted", "hit up", "called"],
    answer: "hit up",
  },
  {
    question: "Can you _____ me $10 until next week? I forgot my wallet.",
    options: ["hit up", "spot", "owe"],
    answer: "spot",
  },
  {
    question: "Becoming a famous actor in Hollywood is just a _____ for most people.",
    options: ["goal", "pipe dream", "plan"],
    answer: "pipe dream",
  },
  {
    question: "Her _____ is amazing. She donates time and money to many causes.",
    options: ["patience", "generosity", "charity work"],
    answer: "generosity",
  },
  {
    question: "After selling their company, they've been _____.",
    options: ["rolling in it", "struggling financially", "living paycheck to paycheck"],
    answer: "rolling in it",
  },
  {
    question: "I really don't want to _____ my old car, but I need the money.",
    options: ["part with", "wash", "give away"],
    answer: "part with",
  },
  {
    question: "She donates large amounts of money _____.",
    options: ["only when asked", "without giving it a second thought", "after thinking about it for weeks"],
    answer: "without giving it a second thought",
  },
  {
    question: "Raising twins while working full time means you've really _____.",
    options: ["got your work cut out for you", "got it made", "had an easy time"],
    answer: "got your work cut out for you",
  },
  {
    question: "My uncle is a real _____. He never buys anything unless it's on sale.",
    options: ["big-hearted", "penny-pincher", "shopaholic"],
    answer: "penny-pincher",
  },
  {
    question: "He's too _____ to even buy coffee for his friends.",
    options: ["stingy", "big-hearted", "charitable"],
    answer: "stingy",
  },
  {
    question: "She's very _____. She always helps people in need.",
    options: ["stingy", "big-hearted", "careless"],
    answer: "big-hearted",
  },
  {
    question: "The company is very _____ and donates to many local charities.",
    options: ["stingy", "charitable", "profitable"],
    answer: "charitable",
  },
  {
    question: "I'm trying to save money, but _____, I'll join you for dinner.",
    options: ["what the heck", "no way", "never mind"],
    answer: "what the heck",
  },
  {
    question: "This $50 will help _____ until I get paid next week.",
    options: ["tide me over", "pay my bills forever", "make me rich"],
    answer: "tide me over",
  },
  {
    question: "I always treat myself to a nice dinner on _____, since that's when my paycheck lands in my account.",
    options: ["payday", "vacation", "weekends"],
    answer: "payday",
  },
  {
    question: "An extra battery always _____ when traveling.",
    options: ["comes in handy", "gets in the way", "runs out"],
    answer: "comes in handy",
  },
  {
    question: "He won a lot of money at the casino, and not wanting to risk losing it, decided to _____ .",
    options: ["keep betting", "borrow more money", "quit while he was ahead"],
    answer: "quit while he was ahead",
  },
  {
    question: "They always sleep with the curtains _____ so no one can see inside.",
    options: ["peeking", "disclosed", "drawn"],
    answer: "drawn",
  },
  {
    question: "She closed the door because she wanted some _____ .",
    options: ["anonymity", "attention", "privacy"],
    answer: "privacy",
  },
  {
    question: "The police caught a _____ looking into the neighbor’s windows.",
    options: ["hermit", "paranoid", "peeping Tom"],
    answer: "peeping Tom",
  },
  {
    question: "The children tried to _____ at their Christmas presents before the morning.",
    options: ["invade", "peek", "disclose"],
    answer: "peek",
  },
  {
    question: "She _____ offered to help clean up after the party.",
    options: ["paranoid", "voluntarily", "on guard"],
    answer: "voluntarily",
  },
  {
    question: "Reading someone’s private messages is an _____ of their privacy.",
    options: ["invasion", "anonymity", "seclusion"],
    answer: "invasion",
  },
  {
    question: "He enjoys the _____ of online forums where no one knows his real name.",
    options: ["privacy", "hermit", "anonymity"],
    answer: "anonymity",
  },
  {
    question: "When walking alone at night, it’s important to _____ .",
    options: ["breathe a word", "rest assured", "be on guard"],
    answer: "be on guard",
  },
  {
    question: "The information is shared only on a _____ .",
    options: ["need-to-know basis", "pipe dream", "rest assured"],
    answer: "need-to-know basis",
  },
  {
    question: "He’s so _____ that he thinks everyone is trying to follow him.",
    options: ["big-hearted", "paranoid", "stingy"],
    answer: "paranoid",
  },
  {
    question: "The other team is really _____ win this championship.",
    options: ["getting", "disclosing", "out to"],
    answer: "out to",
  },
  {
    question: "They’re planning to _____ the leader of the rival group.",
    options: ["get", "peek", "lure"],
    answer: "get",
  },
  {
    question: "The company refused to _____ any details about the new product.",
    options: ["invade", "disclose", "part with"],
    answer: "disclose",
  },
  {
    question: "She spent the weekend in complete _____ in a mountain cabin.",
    options: ["anonymity", "seclusion", "chaos"],
    answer: "seclusion",
  },
  {
    question: "He lives like a _____ and rarely leaves his house.",
    options: ["peeping Tom", "hermit", "paranoid"],
    answer: "hermit",
  },
  {
    question: "_____, everything is under control and we will finish on time.",
    options: ["Rest assured", "Breathe a word", "Get someone"],
    answer: "Rest assured",
  },
    {
    question: "The comedian's joke was so _____ that half of it was about how hard it is to write good jokes.",
    options: ["meta", "satire", "parody"],
    answer: "meta",
  },
  {
    question: "The latest balance patch shook up the _____, so players are testing new strategies instead of relying on the old favorites.",
    options: ["meta", "criteria", "standard"],
    answer: "meta",
  },
  {
    question: "The interview got a little _____ when the host started asking the journalist questions about journalism itself.",
    options: ["meta", "domestic", "municipal"],
    answer: "meta",
  },
  {
    question: "It felt oddly _____ to write an essay about procrastination while procrastinating on writing it.",
    options: ["domestic", "municipal", "meta"],
    answer: "meta",
  },
  {
    question: "Don’t _____ about the surprise party or it won’t be a surprise.",
    options: ["get through", "breathe a word", "let your guard down"],
    answer: "breathe a word",
  },
  {
    question: "He let his temper _____ when the other driver cut him off.",
    options: ["get the best of him", "freak out", "lose control"],
    answer: "get the best of him",
  },
  
  {
    question: "She completely _____ when she saw the spider in the bathroom.",
    options: ["rectified the situation", "freaked out", "calmed down"],
    answer: "freaked out",
  },
  {
    question: "We need to find a way to _____ the mistake before it's too late.",
    options: ["ignore", "rectify", "repeat"],
    answer: "rectify",
  },
  {
    question: "I shouldn't have invested in that company, but _____. At the time, none of the warning signs seemed obvious at all.",
    options: ["hindsight is 20/20", "you live and learn", "that's life"],
    answer: "hindsight is 20/20",
  },
  {
    question: "Stop acting like a _____. You're annoying everyone.",
    options: ["twerp", "genius", "professional"],
    answer: "twerp",
  },
  {
    question: "The meeting was just a _____ to make the boss look good.",
    options: ["celebration", "dog and pony show", "discussion"],
    answer: "dog and pony show",
  },
  {
    question: "He tried to _____ the bad news so she wouldn't be too upset.",
    options: ["sugarcoat", "exaggerate", "hide"],
    answer: "sugarcoat",
  },
  {
    question: "I have no _____ to your plan except the timing.",
    options: ["repercussion", "objection", "solution"],
    answer: "objection",
  },
  {
    question: "They wouldn't _____ during the discussion, so we couldn't reach an agreement.",
    options: ["give an inch", "take notes", "change the subject"],
    answer: "give an inch",
  },
  {
    question: "He doesn't like horror movies. _____, he went with his friends.",
    options: ["In retrospect", "Nevertheless", "As a result"],
    answer: "Nevertheless",
  },
  {
    question: "If you make that decision, there will be serious _____.",
    options: ["objections", "repercussions", "benefits"],
    answer: "repercussions",
  },
  {
    question: "She prefers taking a long bath instead of a quick _____.",
    options: ["shower", "swim", "rinse"],
    answer: "shower",
  },
  {
    question: "Let me _____ for a minute so the water can get hot.",
    options: ["run the water", "turn off the faucet", "scrub the sink"],
    answer: "run the water",
  },
  {
    question: "The floor is all wet because the _____ has a hole in it.",
    options: ["showerhead", "bathtub", "shower curtain"],
    answer: "shower curtain",
  },
  {
    question: "We installed a new _____ that has different spray settings.",
    options: ["faucet", "stopper", "showerhead"],
    answer: "showerhead",
  },
  {
    question: "Rub the soap until you make a nice _____.",
    options: ["rinse", "soak", "lather"],
    answer: "lather",
  },
  {
    question: "I had to _____ the pan for ten minutes to remove the burnt food.",
    options: ["rinse off", "scrub", "wipe"],
    answer: "scrub",
  },
  {
    question: "After playing in the mud, the kids were dirty _____.",
    options: ["from head to toe", "inside and out", "all over the yard"],
    answer: "from head to toe",
  },
  {
    question: "Make sure you _____ all the soap before you get out of the shower.",
    options: ["lather up", "dry off", "rinse off"],
    answer: "rinse off",
  },
  {
    question: "Always wash your hands with _____ and water.",
    options: ["bubble bath", "shampoo", "soap"],
    answer: "soap",
  },
  {
    question: "After swimming, she used a big towel to _____.",
    options: ["soak", "rinse off", "towel off"],
    answer: "towel off",
  },
  {
    question: "Let the dirty dishes _____ in hot water before washing them.",
    options: ["scrub", "soak", "dry"],
    answer: "soak",
  },
  {
    question: "Put the _____ in the drain so the sink fills with water.",
    options: ["faucet", "stopper", "drainpipe"],
    answer: "stopper",
  },
  {
    question: "She filled the _____ with hot water and took a relaxing bath.",
    options: ["sink", "bathtub", "shower"],
    answer: "bathtub",
  },
  {
    question: "Turn on the _____ to get hot water for your shower.",
    options: ["stopper", "faucet", "drain"],
    answer: "faucet",
  },
  {
    question: "She loves taking a _____ with lots of bubbles after a long day.",
    options: ["bubble bath", "quick shower", "cold rinse"],
    answer: "bubble bath",
  },
  {
    question: "We cleaned _____ of the house before the guests arrived.",
    options: ["from head to toe", "every nook and cranny", "little by little"],
    answer: "every nook and cranny",
  },
  {
    question: "The purple hair wasn't really the look she was _____.",
    options: ["going for", "trying on", "looking at"],
    answer: "going for",
  },
  {
    question: "They wouldn't _____ during the discussion, so we couldn't reach an agreement.",
    options: ["give an inch", "take notes", "change the subject"],
    answer: "give an inch",
  },
  {
    question: "He doesn't like horror movies. _____, he went with his friends.",
    options: ["In retrospect", "Nevertheless", "As a result"],
    answer: "Nevertheless",
  },
  {
    question: "If you make that decision, there will be serious _____.",
    options: ["objections", "repercussions", "benefits"],
    answer: "repercussions",
  },
  {
    question: "She prefers taking a long bath instead of a quick _____.",
    options: ["shower", "swim", "rinse"],
    answer: "shower",
  },
  {
    question: "Let me _____ for a minute so the water can get hot.",
    options: ["run the water", "turn off the faucet", "scrub the sink"],
    answer: "run the water",
  },
  {
    question: "The floor is all wet because the _____ has a hole in it.",
    options: ["showerhead", "shower curtain", "bathtub"],
    answer: "shower curtain",
  },
  {
    question: "We installed a new _____ that has different spray settings.",
    options: ["faucet", "showerhead", "stopper"],
    answer: "showerhead",
  },
  {
    question: "Rub the soap until you make a nice _____.",
    options: ["lather", "rinse", "soak"],
    answer: "lather",
  },
  {
    question: "I had to _____ the pan for ten minutes to remove the burnt food.",
    options: ["rinse off", "scrub", "wipe"],
    answer: "scrub",
  },
  {
    question: "After playing in the mud, the kids were dirty _____.",
    options: ["from head to toe", "inside and out", "all over the yard"],
    answer: "from head to toe",
  },
  {
    question: "Make sure you _____ all the soap before you get out of the shower.",
    options: ["lather up", "rinse off", "dry off"],
    answer: "rinse off",
  },
  {
    question: "Always wash your hands with _____ and water.",
    options: ["bubble bath", "soap", "shampoo"],
    answer: "soap",
  },
  {
    question: "After swimming, she used a big towel to _____.",
    options: ["soak", "towel off", "rinse off"],
    answer: "towel off",
  },
  {
    question: "Let the dirty dishes _____ in hot water before washing them.",
    options: ["scrub", "soak", "dry"],
    answer: "soak",
  },
  {
    question: "Put the _____ in the drain so the sink fills with water.",
    options: ["faucet", "stopper", "drainpipe"],
    answer: "stopper",
  },
  {
    question: "She filled the _____ with hot water and took a relaxing bath.",
    options: ["sink", "bathtub", "shower"],
    answer: "bathtub",
  },
  {
    question: "Turn on the _____ to get hot water for your shower.",
    options: ["stopper", "faucet", "drain"],
    answer: "faucet",
  },
  {
    question: "She loves taking a _____ with lots of bubbles after a long day.",
    options: ["quick shower", "cold rinse", "bubble bath"],
    answer: "bubble bath",
  },
  {
    question: "We cleaned _____ of the house before the guests arrived.",
    options: ["from head to toe", "every nook and cranny", "little by little"],
    answer: "every nook and cranny",
  },
  {
    question: "The purple hair wasn't really the look she was _____.",
    options: ["going for", "trying on", "looking at"],
    answer: "going for",
  },
  {
    question: "Stop _____ and just tell me what happened.",
    options: ["speaking your mind", "beating around the bush", "changing your tune"],
    answer: "beating around the bush",
  },
  {
    question: "He had to _____ to finish the report before the deadline.",
    options: ["call it a day", "burn the midnight oil", "take it easy"],
    answer: "burn the midnight oil",
  },
  {
    question: "After the argument, they decided to _____ and start fresh.",
    options: ["bury the hatchet", "hold a grudge", "rub it in"],
    answer: "bury the hatchet",
  },
  {
    question: "I can't believe you _____ of the deal like that.",
    options: ["kept your word", "went back", "backed out"],
    answer: "backed out",
  },
  {
    question: "She always _____ before making a big decision.",
    options: ["sleeps on it", "jumps the gun", "wings it"],
    answer: "sleeps on it",
  },
  {
    question: "He tends to _____ when he's nervous, talking about anything but the real issue.",
    options: ["ramble on", "cut to the chase", "hold his tongue"],
    answer: "ramble on",
  },
  {
    question: "Wipe down the _____ after you finish brushing your teeth.",
    options: ["bathtub", "sink", "showerhead"],
    answer: "sink",
  },
  {
    question: "The _____ was clogged, so the water wouldn't drain.",
    options: ["faucet", "drain", "stopper"],
    answer: "drain",
  },
  {
    question: "He forgot to _____ the towel, so it stayed damp and started to smell.",
    options: ["hang up", "fold up", "soak"],
    answer: "hang up",
  },
  {
    question: "Use this brush to _____ the grout between the tiles.",
    options: ["scrub", "rinse", "polish"],
    answer: "scrub",
  },
  {
    question: "The mirror was so _____ from the steam that I couldn't see myself.",
    options: ["cracked", "fogged up", "spotless"],
    answer: "fogged up",
  },
  {
    question: "Don't forget to _____ the tub before you take a bath.",
    options: ["rinse out", "fill up", "dry off"],
    answer: "rinse out",
  },
  {
    question: "He keeps his razor and toothbrush on the _____ next to the sink.",
    options: ["shelf", "drain", "curtain rod"],
    answer: "shelf",
  },
  {
    question: "The plumber replaced the old _____ because it kept dripping.",
    options: ["stopper", "faucet", "mat"],
    answer: "faucet",
  },
  {
    question: "Chop the onions _____ so they cook evenly.",
    options: ["finely", "roughly", "loosely"],
    answer: "finely",
  },
  {
    question: "Let the soup _____ on low heat for an hour.",
    options: ["boil over", "scorch", "simmer"],
    answer: "simmer",
  },
  {
    question: "She always _____ the pan before adding the oil.",
    options: ["cools", "washes", "heats up"],
    answer: "heats up",
  },
  {
    question: "The bread came out perfectly _____ on the outside.",
    options: ["soggy", "golden brown", "burnt"],
    answer: "golden brown",
  },
  {
    question: "He _____ the dishes before putting them in the dishwasher.",
    options: ["soaks", "scrubs", "rinses off"],
    answer: "rinses off",
  },
  {
    question: "After the intense workout, they were all _____ and drenched in sweat, trying to catch their breath.",
    options: ["shivering", "stretching", "panting"],
    answer: "panting",
  },
  {
    question: "The abandoned house was _____, with its walls cracked and its windows shattered.",
    options: ["freshly painted", "hollowed out", "fully furnished"],
    answer: "hollowed out",
  },
  {
    question: "His voice sounded _____ after singing for hours at the concert, but he didn't mind.",
    options: ["smooth", "scratchy", "clear"],
    answer: "scratchy",
  },
  {
    question: "The _____ startup was quickly gaining attention for its innovative approach to technology.",
    options: ["struggling", "burgeoning", "outdated"],
    answer: "burgeoning",
  },
  {
    question: "The attic was full of _____, from old books to broken furniture and forgotten keepsakes.",
    options: ["odds and ends", "hopes and dreams", "nooks and crannies"],
    answer: "odds and ends",
  },
  {
    question: "She _____ her resignation letter after years of working at the company, ready for a new chapter in her life.",
    options: ["tendered", "withdrew", "postponed"],
    answer: "tendered",
  },
  {
    question: "They were like _____, briefly crossing paths without ever really connecting.",
    options: ["two peas in a pod", "ships passing in the night", "birds of a feather"],
    answer: "ships passing in the night",
  },
  {
    question: "His _____ attitude toward the deadline surprised everyone, as he seemed completely unconcerned about the pressure.",
    options: ["anxious", "meticulous", "insouciant"],
    answer: "insouciant",
  },
  {
    question: "The spring had _____ early this year, with flowers blooming and trees beginning to bud weeks ahead of schedule.",
    options: ["sprung", "faded", "stalled"],
    answer: "sprung",
  },
  {
    question: "He spent the whole afternoon _____, waiting for the meeting to start without anything productive to do.",
    options: ["killing time", "getting ahead", "cutting corners"],
    answer: "killing time",
  },
  {
    question: "I decided to _____ my grandmother to check in on her and spend some time together.",
    options: ["call on", "put off", "wait on"],
    answer: "call on",
  },
  {
    question: "His _____ response left everyone at the table feeling awkward, as he didn't bother with pleasantries.",
    options: ["curt", "warm", "long-winded"],
    answer: "curt",
  },
  {
    question: "Her _____ compliments made him feel proud of his work, and he appreciated her kind words.",
    options: ["backhanded", "effusive", "reluctant"],
    answer: "effusive",
  },
  {
    question: "The company _____ its new programmers dry by overworking them with long hours and little compensation.",
    options: ["sucks", "lets", "sets"],
    answer: "sucks",
  },
  {
    question: "She _____ the paper in frustration, tossing it into the recycling bin after a failed attempt.",
    options: ["smoothed out", "folded neatly", "scrunched up"],
    answer: "scrunched up",
  },
  {
    question: "They were meeting _____, sneaking around to keep their relationship a secret from their friends.",
    options: ["out in the open", "on the fence", "on the sly"],
    answer: "on the sly",
  },
  {
    question: "The artist spent hours _____ the details of the landscape, ensuring every shadow and highlight was perfect.",
    options: ["rendering", "erasing", "sketching loosely"],
    answer: "rendering",
  },
  {
    question: "After a long day of skiing, they sat down to enjoy a warm _____ of schnapps, downing it in one gulp to relax their muscles.",
    options: ["shot", "sip", "splash"],
    answer: "shot",
  },
  {
    question: "_____, this was the best concert I've ever attended!",
    options: ["You can say that again", "It goes without saying", "That remains to be seen"],
    answer: "You can say that again",
  },
  {
    question: "He had always been _____ to his boss, never questioning any of the orders given to him.",
    options: ["indifferent", "subservient", "hostile"],
    answer: "subservient",
  },
  {
    question: "The idea of a flying car that runs on water seemed utterly _____, yet people were still excited about it.",
    options: ["practical", "ludicrous", "predictable"],
    answer: "ludicrous",
  },
  {
    question: "He _____ during the meeting, hoping someone would recognize his efforts.",
    options: ["kept a low profile", "held his tongue", "fished for compliments"],
    answer: "fished for compliments",
  },
  {
    question: "She decided to _____ some cinnamon on the pancakes, adding a warm, spicy touch to the dish.",
    options: ["drizzle", "smear", "sprinkle"],
    answer: "sprinkle",
  },
  {
    question: "They joked that they had a _____ on them, as everything that could go wrong seemed to happen.",
    options: ["jinx", "knack", "streak"],
    answer: "jinx",
  },
  {
    question: "With too many _____, she was feeling overwhelmed by all the projects she had to juggle.",
    options: ["fish to fry", "irons in the fire", "eggs in one basket"],
    answer: "irons in the fire",
  },
  {
    question: "The athlete _____ off the field after injuring his ankle during the game.",
    options: ["hobbled", "sprinted", "strolled"],
    answer: "hobbled",
  },
  {
    question: "The _____ signs of stress were evident on his face, his clenched jaw and tense shoulders.",
    options: ["subtle", "faint", "telltale"],
    answer: "telltale",
  },
  {
    question: "The crowd was _____ as the final seconds of the game ticked down to a dramatic finish.",
    options: ["at a loss", "on the fence", "in a frenzy"],
    answer: "in a frenzy",
  },
  {
    question: "By _____ a supportive environment at work, the manager ensured her team stayed motivated and productive.",
    options: ["avoiding", "dismissing", "fostering"],
    answer: "fostering",
  },
  {
    question: "She was _____ to overthinking, which often caused her to feel anxious about situations that were out of her control.",
    options: ["opposed", "prone", "immune"],
    answer: "prone",
  },
  {
    question: "Let's _____ and come up with a solution to this problem before the deadline.",
    options: ["put our heads together", "throw in the towel", "let the chips fall"],
    answer: "put our heads together",
  },
  {
    question: "He felt a _____ in his heart as he said goodbye to his childhood home.",
    options: ["wrench", "flutter", "spark"],
    answer: "wrench",
  },
  {
    question: "The hike was _____ difficult, with steep slopes and scorching heat making every step a challenge.",
    options: ["mildly", "hellishly", "somewhat"],
    answer: "hellishly",
  },
  {
    question: "The constant delays were _____ in this project, and we learned to expect them.",
    options: ["out of the blue", "par for the course", "a stretch"],
    answer: "par for the course",
  },
  {
    question: "She was quick to _____ not taking the job offer when she saw how well her friend was doing in that role.",
    options: ["regret", "celebrate", "forget"],
    answer: "regret",
  },
  {
    question: "He was _____ interest in the conversation, pretending to listen while his mind wandered.",
    options: ["feigning", "showing", "losing"],
    answer: "feigning",
  },
  {
    question: "As a _____, he often found himself at odds with the mainstream beliefs of his community.",
    options: ["heretic", "diplomat", "mediator"],
    answer: "heretic",
  },
  {
    question: "I had an _____ that something was wrong when I saw the look on her face, but I didn't ask.",
    options: ["inkling", "excuse", "agenda"],
    answer: "inkling",
  },
  {
    question: "There are always _____ in the car, offering unsolicited advice on how to drive.",
    options: ["designated drivers", "copilots", "backseat drivers"],
    answer: "backseat drivers",
  },
  {
    question: "The company was _____ for policy changes that would benefit their industry and increase profits.",
    options: ["campaigning", "voting", "lobbying"],
    answer: "lobbying",
  },
  {
    question: "Her speech was full of _____ and energy, inspiring the audience to take action and make a difference.",
    options: ["doubt", "pep", "silence"],
    answer: "pep",
  },
  {
    question: "They tried to _____ the wood in two, but the axe kept bouncing off the tough bark.",
    options: ["sand", "bend", "split"],
    answer: "split",
  },
  {
    question: "The bullies _____ him after school, but he didn't let it affect his self-confidence.",
    options: ["cheered up", "backed off", "roughed up"],
    answer: "roughed up",
  },
  {
    question: "The _____ occurred when the government's attempt to control the rat population led to more rats being bred for rewards.",
    options: ["domino effect", "placebo effect", "cobra effect"],
    answer: "cobra effect",
  },
  {
    question: "The naughty child couldn't resist _____ cookies from the jar when no one was looking.",
    options: ["sharing", "baking", "sneaking"],
    answer: "sneaking",
  },
  {
    question: "As a _____, he always worried that every small cough or headache was a sign of something serious.",
    options: ["pessimist", "hypochondriac", "skeptic"],
    answer: "hypochondriac",
  },
  {
    question: "She was _____ in her research, spending long hours in the library to ensure every detail was correct.",
    options: ["careless", "hesitant", "assiduous"],
    answer: "assiduous",
  },
  {
    question: "He was _____ with all the work he was taking on, but he refused to slow down.",
    options: ["taking it easy", "running himself ragged", "cutting corners"],
    answer: "running himself ragged",
  },
  {
    question: "The meeting started off _____ when the presenter's slides weren't ready on time.",
    options: ["with a bang", "on a high note", "on the wrong foot"],
    answer: "on the wrong foot",
  },
  {
    question: "After spending years in the city, she found herself _____ for the mountains and their serene beauty.",
    options: ["settling", "pining", "preparing"],
    answer: "pining",
  },
  {
    question: "The kids were excited, their minds _____ with ideas for the school project they were about to start.",
    options: ["resting", "wandering", "buzzing"],
    answer: "buzzing",
  },
  {
    question: "He felt like a total _____ at the party, unsure of what to say or how to fit in with the crowd.",
    options: ["star", "dweeb", "host"],
    answer: "dweeb",
  },
  {
    question: "She was _____ when her colleague was promoted to the position she had been hoping for.",
    options: ["over the moon", "green with envy", "on cloud nine"],
    answer: "green with envy",
  },
  {
    question: "His voice hit an unusually high pitch when he tried to sing in _____ during karaoke night.",
    options: ["harmony", "falsetto", "rhythm"],
    answer: "falsetto",
  },
  {
    question: "After the holiday feast, there was a _____ of food left over, enough to last for days.",
    options: ["shortage", "sample", "surfeit"],
    answer: "surfeit",
  },
  {
    question: "The town's reputation was tarnished by the _____ of corruption that had festered for years.",
    options: ["fountain", "cesspool", "wave"],
    answer: "cesspool",
  },
  {
    question: "The lawyer tried to _____ the credibility of the witness, but her testimony held strong.",
    options: ["confirm", "praise", "impugn"],
    answer: "impugn",
  },
  {
    question: "Despite the challenges, they managed to _____ and complete the project on time.",
    options: ["let it go", "pull it off", "put it off"],
    answer: "pull it off",
  },
  {
    question: "The speaker used visuals to _____ his main points, ensuring the audience understood the key message.",
    options: ["gloss over", "brush aside", "hammer home"],
    answer: "hammer home",
  },
  {
    question: "The enemy finally _____ after days of intense negotiation, agreeing to the peace terms.",
    options: ["retaliated", "negotiated", "capitulated"],
    answer: "capitulated",
  },
  {
    question: "Don't take it seriously; I was just _____ you with that outrageous story.",
    options: ["letting down", "putting on", "showing up"],
    answer: "putting on",
  },
  {
    question: "The teacher had to _____ the student's attitude in class, reminding him to be more respectful to his peers.",
    options: ["look into", "crack down on", "give in to"],
    answer: "crack down on",
  },
  {
    question: "The bounty hunter was hired to _____ the fugitive, who had been on the run for months.",
    options: ["hunt down", "look after", "back up"],
    answer: "hunt down",
  },
  {
    question: "They decided to _____ someone else outside their relationship, which caused a lot of tension and heartbreak.",
    options: ["check in with", "mess around with", "look out for"],
    answer: "mess around with",
  },
  {
    question: "I had to _____ the sunlight with the curtains because it was too bright to work in the room.",
    options: ["block out", "let in", "brighten up"],
    answer: "block out",
  },
  {
    question: "The police were _____ about the illegal operation, leading to a successful raid on the warehouse.",
    options: ["backed up", "tipped off", "called off"],
    answer: "tipped off",
  },
  {
    question: "She tried to _____ her tears during the meeting, but it was hard to control her emotions.",
    options: ["hold back", "let out", "give up"],
    answer: "hold back",
  },
  {
    question: "We spent the afternoon _____ fruits from the garden by freezing them so we could enjoy them later in the year.",
    options: ["putting up", "giving away", "throwing out"],
    answer: "putting up",
  },
  {
    question: "I quickly _____ my coffee before heading to the next meeting, knowing I didn't have much time.",
    options: ["drank up", "poured out", "warmed up"],
    answer: "drank up",
  },
  {
    question: "After weeks of brainstorming, we finally _____ a brilliant idea for our new marketing campaign.",
    options: ["backed off", "hit on", "gave up"],
    answer: "hit on",
  },
  {
    question: "I had to _____ my comment after realizing I had misunderstood the situation and hurt her feelings.",
    options: ["take back", "bring up", "pass on"],
    answer: "take back",
  },
  {
    question: "He accidentally _____ his coffee cup while reaching for the phone, spilling it all over the papers.",
    options: ["picked up", "knocked over", "set down"],
    answer: "knocked over",
  },
  {
    question: "They were _____ in the park, completely oblivious to the people walking by.",
    options: ["making out", "hanging out", "looking around"],
    answer: "making out",
  },
  {
    question: "Let me _____ the main points from today's meeting so we can all be on the same page moving forward.",
    options: ["bring up", "leave out", "sum up"],
    answer: "sum up",
  },
  {
    question: "We need to _____ a new marketing strategy if we want to stay ahead of the competition.",
    options: ["come up with", "do away with", "catch up on"],
    answer: "come up with",
  },
  {
    question: "I _____ right on time this morning, eager to start the day's tasks.",
    options: ["clocked in", "showed off", "checked out"],
    answer: "clocked in",
  },
  {
    question: "She decided to _____ for the casual Friday event, ditching her usual work attire for something more relaxed.",
    options: ["dress up", "dress down", "dress out"],
    answer: "dress down",
  },
  {
    question: "Make sure to _____ your computer at the end of the day to save energy and extend its lifespan.",
    options: ["log in", "power off", "back up"],
    answer: "power off",
  },
  {
    question: "I was so nervous about the final exam, but I managed to _____ it with a decent grade.",
    options: ["put off", "get through", "give up on"],
    answer: "get through",
  },
  {
    question: "After weeks of hard work, he was promoted and finally _____ a higher position within the company.",
    options: ["backed down from", "settled for", "moved up to"],
    answer: "moved up to",
  },
  {
    question: "The program _____ right before I saved my document, and I had to restart the computer.",
    options: ["cleared out", "shut down", "froze up"],
    answer: "froze up",
  },
  {
    question: "_____ for cars while crossing the street, especially when it's raining or foggy.",
    options: ["Look up", "Check in", "Watch out"],
    answer: "Watch out",
  },
  {
    question: "My manager has been _____ me about missing deadlines, even though I've been working overtime.",
    options: ["catching up with", "riding", "backing off from"],
    answer: "riding",
  },
  {
    question: "The prisoner managed to _____ the facility, but the authorities were quick to launch a manhunt.",
    options: ["check out of", "break out of", "settle into"],
    answer: "break out of",
  },
  {
    question: "I had to _____ the important points from the meeting so I wouldn't forget any details later.",
    options: ["jot down", "look over", "cross out"],
    answer: "jot down",
  },
  {
    question: "We were planning to _____ for the weekend, but the weather forecast didn't look promising.",
    options: ["settle down", "get away", "check in"],
    answer: "get away",
  },
  {
    question: "I had to _____ some lotion after being out in the sun for too long to soothe my skin.",
    options: ["wipe off", "rub in", "peel off"],
    answer: "rub in",
  },
  {
    question: "We _____ on our road trip early in the morning, hoping to reach our destination by sunset.",
    options: ["wrapped up", "held off", "started out"],
    answer: "started out",
  },
  {
    question: "She just _____ the criticism, confident that she was doing the right thing.",
    options: ["dwelled on", "shrugged off", "gave in to"],
    answer: "shrugged off",
  },
  {
    question: "We finally decided to _____ after months of planning, and it felt great to settle into our new home.",
    options: ["break up", "move in together", "move out"],
    answer: "move in together",
  },
  {
    question: "I was able to _____ a quick dinner with just a few ingredients I had in the fridge, no recipe required.",
    options: ["clean out", "put away", "rustle up"],
    answer: "rustle up",
  },
  {
    question: "After working long hours for weeks, I started to _____ and knew I needed to take a break.",
    options: ["cool off", "wind up", "burn out"],
    answer: "burn out",
  },
  {
    question: "The smell of fresh cookies always _____ memories of when I was a child visiting my grandmother's house.",
    options: ["gives away", "brings back", "puts off"],
    answer: "brings back",
  },
  {
    question: "The children _____ their favorite scenes from the movie, laughing and having a great time.",
    options: ["left out", "figured out", "acted out"],
    answer: "acted out",
  },
  {
    question: "The loud noise from the fireworks _____ the birds, causing them to scatter into the sky.",
    options: ["frightened away", "called in", "settled down"],
    answer: "frightened away",
  },
  {
    question: "The constant reminders from the advertisements really _____ from buying the product, as it felt too pushy.",
    options: ["turned me off", "won me over", "signed me up"],
    answer: "turned me off",
  },
  {
    question: "She _____ her old friend while in town, and they caught up over coffee in a cozy cafe.",
    options: ["backed off from", "called on", "checked out"],
    answer: "called on",
  },
  {
    question: "The new CEO is expected to _____ the company next month, bringing a fresh vision for the future.",
    options: ["step down from", "look after", "take over"],
    answer: "take over",
  },
  {
    question: "He managed to _____ the right crowd at work, quickly climbing the corporate ladder.",
    options: ["stay away from", "get in with", "back away from"],
    answer: "get in with",
  },
  {
    question: "After a while, I started to _____ moving to the city. It just didn't feel like the right place anymore.",
    options: ["warm up to", "cool on", "settle into"],
    answer: "cool on",
  },
  {
    question: "I didn't expect to _____ finding that rare book at the flea market, but I was thrilled when I did.",
    options: ["luck into", "give up on", "hold off on"],
    answer: "luck into",
  },
  {
    question: "She started to _____ him at the party, clearly making her intentions known, but he wasn't interested.",
    options: ["back away from", "look past", "throw herself at"],
    answer: "throw herself at",
  },
  {
    question: "I didn't study much for the exam, but somehow I managed to _____ and pass.",
    options: ["scrape by", "ace it", "fall behind"],
    answer: "scrape by",
  },
  {
    question: "I had to _____ to another meeting right after lunch, leaving no time to chat with my colleagues.",
    options: ["settle in", "catch up", "rush off"],
    answer: "rush off",
  },
  {
    question: "She just _____ the criticism, confident that she was doing the right thing.",
    options: ["dwelled on", "gave in to", "shrugged off"],
    answer: "shrugged off",
  },
  {
    question: "We finally decided to _____ after months of planning, and it felt great to settle into our new home.",
    options: ["break up", "move in together", "move out"],
    answer: "move in together",
  },
  {
    question: "I was able to _____ a quick dinner with just a few ingredients I had in the fridge, no recipe required.",
    options: ["clean out", "put away", "rustle up"],
    answer: "rustle up",
  },
  {
    question: "After working long hours for weeks, I started to _____ and knew I needed to take a break.",
    options: ["cool off", "burn out", "wind up"],
    answer: "burn out",
  },
  {
    question: "The smell of fresh cookies always _____ memories of when I was a child visiting my grandmother's house.",
    options: ["gives away", "puts off", "brings back"],
    answer: "brings back",
  },
  {
    question: "The children _____ their favorite scenes from the movie, laughing and having a great time.",
    options: ["left out", "acted out", "figured out"],
    answer: "acted out",
  },
  {
    question: "The loud noise from the fireworks _____ the birds, causing them to scatter into the sky.",
    options: ["called in", "settled down", "frightened away"],
    answer: "frightened away",
  },
  {
    question: "The constant reminders from the advertisements really _____ from buying the product, as it felt too pushy.",
    options: ["won me over", "signed me up", "turned me off"],
    answer: "turned me off",
  },
  {
    question: "She _____ her old friend while in town, and they caught up over coffee in a cozy cafe.",
    options: ["backed off from", "checked out", "called on"],
    answer: "called on",
  },
  {
    question: "The new CEO is expected to _____ the company next month, bringing a fresh vision for the future.",
    options: ["step down from", "look after", "take over"],
    answer: "take over",
  },
  {
    question: "He managed to _____ the right crowd at work, quickly climbing the corporate ladder.",
    options: ["get in with", "stay away from", "back away from"],
    answer: "get in with",
  },
  {
    question: "After a while, I started to _____ moving to the city. It just didn't feel like the right place anymore.",
    options: ["warm up to", "cool on", "settle into"],
    answer: "cool on",
  },
  {
    question: "I didn't expect to _____ finding that rare book at the flea market, but I was thrilled when I did.",
    options: ["give up on", "hold off on", "luck into"],
    answer: "luck into",
  },
  {
    question: "She started to _____ him at the party, clearly making her intentions known, but he wasn't interested.",
    options: ["back away from", "throw herself at", "look past"],
    answer: "throw herself at",
  },
  {
    question: "I didn't study much for the exam, but somehow I managed to _____ and pass.",
    options: ["ace it", "scrape by", "fall behind"],
    answer: "scrape by",
  },
  {
    question: "I had to _____ to another meeting right after lunch, leaving no time to chat with my colleagues.",
    options: ["settle in", "rush off", "catch up"],
    answer: "rush off",
  },
  {
    question: "I finally got around to _____ my garage after putting it off for weeks. It was a huge task but felt great once it was done.",
    options: ["locking up", "cleaning out", "checking on"],
    answer: "cleaning out",
  },
  {
    question: "When I heard a strange noise in the night, I _____ in bed, trying to figure out what it was.",
    options: ["dozed off", "sat up", "settled down"],
    answer: "sat up",
  },
  {
    question: "I've always believed in the power of hard work and persistence, and I try to _____ that in others too.",
    options: ["instill", "dismiss", "excuse"],
    answer: "instill",
  },
  {
    question: "He had to _____ the piece of paper to reveal the hidden message on the other side.",
    options: ["fold up", "turn over", "tear off"],
    answer: "turn over",
  },
  {
    question: "It was easy to _____ the city using public transport, so we didn't need to worry about driving.",
    options: ["get around", "look over", "settle into"],
    answer: "get around",
  },
  {
    question: "All the efforts and hard work _____ a successful launch, and the company saw a significant increase in sales.",
    options: ["backed off from", "added up to", "cut down on"],
    answer: "added up to",
  },
  {
    question: "The news about the new project quickly _____, and everyone at the office was talking about it.",
    options: ["got around", "died down", "held up"],
    answer: "got around",
  },
  {
    question: "He managed to _____ the deal and secure a share of the profits without much effort.",
    options: ["back out of", "cut in on", "pass up on"],
    answer: "cut in on",
  },
  {
    question: "She decided to _____ at the party, not wanting to join the conversation about politics.",
    options: ["hang back", "speak up", "join in"],
    answer: "hang back",
  },
  {
    question: "After a long day at work, I couldn't wait to _____ and head home to relax.",
    options: ["check in", "get off", "hold on"],
    answer: "get off",
  },
  {
    question: "I know I missed your birthday, but I'll _____ by taking you out for a nice dinner next week.",
    options: ["make up for it", "call it off", "look into it"],
    answer: "make up for it",
  },
  {
    question: "The teacher _____ the students after school for talking too much during class, making them miss their buses.",
    options: ["sent off", "kept in", "let out"],
    answer: "kept in",
  },
  {
    question: "After all the hard work, I _____ with a promotion, something I never expected when I first started the job.",
    options: ["backed off", "held off", "ended up"],
    answer: "ended up",
  },
  {
    question: "We decided to _____ to the beach after the meeting, ready for a little relaxation after a hectic week.",
    options: ["head off", "settle down", "hold back"],
    answer: "head off",
  },
  {
    question: "It's hard to _____ my performance against others because each situation is so different, but I try to focus on my personal progress.",
    options: ["give up", "measure", "hand over"],
    answer: "measure",
  },
  {
    question: "During our vacation, we tried to _____ every moment of relaxation before heading back to work.",
    options: ["spin out", "cut off", "wrap up"],
    answer: "spin out",
  },
  {
    question: "I felt a bit queasy after the rollercoaster ride, but I managed to _____ the food I had just eaten.",
    options: ["keep down", "throw out", "pass up"],
    answer: "keep down",
  },
  {
    question: "She went to the store to _____ a new jacket, wanting to see if it fit well before deciding whether to buy it.",
    options: ["put away", "try on", "give back"],
    answer: "try on",
  },
  {
    question: "After hearing I was sick, my friend called to _____, making sure I was feeling better and offering help.",
    options: ["check on me", "back me up", "call me out"],
    answer: "check on me",
  },
  {
    question: "I decided to _____ and check on my friend, who had just moved into a new apartment and seemed a little lonely.",
    options: ["hold off", "run in", "back away"],
    answer: "run in",
  },
  {
    question: "At the party, he couldn't help but _____ his new car, excited to share it with everyone and get their reactions.",
    options: ["show off", "put away", "give up"],
    answer: "show off",
  },
  {
    question: "The children were having a great time _____ the old cardboard boxes, turning them into a makeshift fort in the living room.",
    options: ["breaking down", "giving away", "putting off"],
    answer: "breaking down",
  },
  {
    question: "We decided to _____ late to watch the meteor shower, finding a perfect spot on the rooftop with clear skies.",
    options: ["stay up", "settle down", "call it off"],
    answer: "stay up",
  },
  {
    question: "All that time, she'd been _____ him on.",
    options: ["leading", "walking", "backing"],
    answer: "leading",
  },
  {
    question: "The map _____ the emergency exits clearly in case of an unexpected evacuation.",
    options: ["hid", "marked", "guessed"],
    answer: "marked",
  },
  {
    question: "Thanks to the kind stranger, she found her missing wallet before _____ the bus.",
    options: ["delaying", "catching", "skipping"],
    answer: "catching",
  },
  {
    question: "The debate got heated as opinions _____, but everyone stayed respectful.",
    options: ["agreed", "clashed", "settled"],
    answer: "clashed",
  },
  {
    question: "The drone _____ over the field, capturing breathtaking views of the sprawling landscape.",
    options: ["buzzed", "crawled", "sank"],
    answer: "buzzed",
  },
  {
    question: "A cozy café was _____ near the library, offering a quiet escape for readers.",
    options: ["blocked", "tucked", "spread"],
    answer: "tucked",
  },
  {
    question: "The ball rolled into the neighbor's yard, sending the kids _____ to retrieve it.",
    options: ["scrambling", "resting", "wandering"],
    answer: "scrambling",
  },
  {
    question: "The painting hung _____ on the wall, drawing curious glances from visitors.",
    options: ["neatly", "crookedly", "smoothly"],
    answer: "crookedly",
  },
  {
    question: "A strange noise _____ in the hallway, making everyone pause for a moment.",
    options: ["faded", "echoed", "settled"],
    answer: "echoed",
  },
  {
    question: "She _____ down at her phone, realizing she'd missed several important messages.",
    options: ["glanced", "reached", "pushed"],
    answer: "glanced",
  },
  {
    question: "The balloon floated up into the sky, _____ among the clouds above.",
    options: ["landing", "disappearing", "bursting"],
    answer: "disappearing",
  },
  {
    question: "He waited at the bus stop, _____ slightly in the cool morning air.",
    options: ["shivering", "sweating", "stretching"],
    answer: "shivering",
  },
  {
    question: "The lid _____ off the jar unexpectedly, spilling sugar all over the counter.",
    options: ["popped", "slid", "melted"],
    answer: "popped",
  },
  {
    question: "It had been raining _____ since the early morning, flooding the garden path.",
    options: ["nonstop", "occasionally", "briefly"],
    answer: "nonstop",
  },
  {
    question: "In addition to the usual snacks, she _____ homemade cookies to share with the group.",
    options: ["brought", "returned", "skipped"],
    answer: "brought",
  },
  {
    question: "The fire extinguisher was placed near the exit in case of emergencies, ensuring everyone's _____.",
    options: ["comfort", "safety", "entertainment"],
    answer: "safety",
  },
  {
    question: "Thanks to her quick thinking, the spilled drink was cleaned up before it _____ the carpet.",
    options: ["matched", "stained", "covered"],
    answer: "stained",
  },
  {
    question: "The project was challenging, especially in terms of managing time and _____ deadlines.",
    options: ["meeting", "ignoring", "counting"],
    answer: "meeting",
  },
  {
    question: "The plane flew over the mountains, offering a breathtaking view of snow-capped peaks _____.",
    options: ["above", "below", "beside"],
    answer: "below",
  },
  {
    question: "A small coffee shop _____ near the train station became a favorite spot for commuters.",
    options: ["nestled", "collapsed", "wandered"],
    answer: "nestled",
  },
  {
    question: "The puppy darted into the garden, chasing after a butterfly fluttering just out of _____.",
    options: ["danger", "reach", "mind"],
    answer: "reach",
  },
  {
    question: "She wrote a heartfelt letter about her childhood memories, _____ it with a smile.",
    options: ["sealing", "erasing", "folding away"],
    answer: "sealing",
  },
  {
    question: "The stars twinkled brightly above the quiet countryside, _____ up the vast night sky.",
    options: ["lighting", "clouding", "dimming"],
    answer: "lighting",
  },
  {
    question: "The ferry glided across the calm lake, leaving a gentle ripple in its _____.",
    options: ["cabin", "wake", "shadow"],
    answer: "wake",
  },
  {
    question: "A stack of magazines sat on the coffee table, some slightly _____ from frequent reading.",
    options: ["dog-eared", "sealed shut", "untouched"],
    answer: "dog-eared",
  },
  {
    question: "The kitten hid in the basket of laundry, peeking out curiously at the _____ room.",
    options: ["empty", "bustling", "silent"],
    answer: "bustling",
  },
  {
    question: "The team gathered at the starting line, ready to _____ the big race.",
    options: ["wrap up", "call off", "kick off"],
    answer: "kick off",
  },
  {
    question: "He brushed the dust off the old mirror, revealing a faint _____ of himself.",
    options: ["shadow", "outline", "reflection"],
    answer: "reflection",
  },
  {
    question: "The candle flickered out during the storm, plunging the room into an eerie _____.",
    options: ["glow", "warmth", "silence"],
    answer: "silence",
  },
  {
    question: "The path wound through the forest, leading to a clearing bathed in golden _____.",
    options: ["fog", "shade", "sunlight"],
    answer: "sunlight",
  },
  {
    question: "Raindrops slid down the windowpane, creating tiny rivers as they _____ to the sill.",
    options: ["froze", "zigzagged", "climbed"],
    answer: "zigzagged",
  },
  {
    question: "A ladder leaned up against the side of the house, waiting to be used for _____.",
    options: ["decoration", "storage", "repairs"],
    answer: "repairs",
  },
  {
    question: "The secret stash of chocolates was hidden behind the stack of books on the _____.",
    options: ["porch", "sink", "shelf"],
    answer: "shelf",
  },
  {
    question: "The cottage was far from the bustling city, nestled peacefully in the rolling _____.",
    options: ["hills", "traffic", "streets"],
    answer: "hills",
  },
  {
    question: "In addition to the flowers, she brought a handwritten note to _____ her friend's day.",
    options: ["brighten", "shorten", "confuse"],
    answer: "brighten",
  },
  {
    question: "A kite flew high above the park, its bright colors vivid against the clear blue _____.",
    options: ["ground", "sky", "field"],
    answer: "sky",
  },
  {
    question: "They strolled across the cobblestone bridge, pausing to _____ the view of the river below.",
    options: ["block", "measure", "admire"],
    answer: "admire",
  },
  {
    question: "The keys were left on the counter, right next to the stack of _____ mail.",
    options: ["sorted", "unopened", "shredded"],
    answer: "unopened",
  },
  {
    question: "The kids huddled in the tent, listening to the rain _____ softly against the fabric.",
    options: ["pattering", "roaring", "freezing"],
    answer: "pattering",
  },
  {
    question: "The group waited at the entrance to the museum, chatting _____ about what they would see inside.",
    options: ["quietly", "excitedly", "nervously"],
    answer: "excitedly",
  },
  {
    question: "She dusted off the old record player, hoping it still _____ after years of sitting untouched.",
    options: ["worked", "sold", "shined"],
    answer: "worked",
  },
  {
    question: "The lights flickered out suddenly, leaving the room in complete _____ for a moment.",
    options: ["silence", "darkness", "chaos"],
    answer: "darkness",
  },
  {
    question: "The road stretched far beyond the horizon, _____ into the rolling hills ahead.",
    options: ["climbing", "bending", "disappearing"],
    answer: "disappearing",
  },
  {
    question: "Leaves swirled down the street, carried by the crisp autumn wind through the _____.",
    options: ["basement", "neighborhood", "attic"],
    answer: "neighborhood",
  },
  {
    question: "A line of ants marched up the wall, disappearing into a crack near the _____.",
    options: ["ceiling", "floor", "doorway"],
    answer: "ceiling",
  },
  {
    question: "He found a forgotten toy behind the couch while cleaning, triggering a wave of _____.",
    options: ["anger", "nostalgia", "confusion"],
    answer: "nostalgia",
  },
  {
    question: "The restaurant was located far from the city center, but it was worth the drive for the _____.",
    options: ["parking", "noise", "food"],
    answer: "food",
  },
  {
    question: "He found an old photograph tucked inside the pages of a novel, bringing back a flood of _____.",
    options: ["memories", "excuses", "plans"],
    answer: "memories",
  },
  {
    question: "The suitcase sat unpacked on the bed, a reminder of the weekend trip they'd just _____ from.",
    options: ["escaped", "returned", "vanished"],
    answer: "returned",
  },
  {
    question: "A bird perched on the windowsill, pecking curiously at its _____ in the glass.",
    options: ["shadow", "reflection", "outline"],
    answer: "reflection",
  },
  {
    question: "The smell of freshly baked cookies _____ out of the kitchen, drawing everyone into the room.",
    options: ["wafted", "leaked", "dripped"],
    answer: "wafted",
  },
  {
    question: "Her scarf got caught on a hook by the door, making her laugh as she struggled to _____ it.",
    options: ["untangle", "sew", "fold"],
    answer: "untangle",
  },
  {
    question: "The train pulled into the station on time, the sound of brakes _____ echoing through the platform.",
    options: ["humming", "screeching", "whistling softly"],
    answer: "screeching",
  },
  {
    question: "Water dripped steadily from the faucet in the bathroom, creating a soft rhythm in the _____.",
    options: ["stillness", "chaos", "traffic"],
    answer: "stillness",
  },
  {
    question: "A balloon floated aimlessly across the park, carried by the gentle breeze over the picnic _____.",
    options: ["fences", "tables", "hills"],
    answer: "tables",
  },
  {
    question: "The sign about the upcoming event was taped to the bulletin board, catching everyone's _____.",
    options: ["money", "trust", "attention"],
    answer: "attention",
  },
  {
    question: "The voice assistant in my phone has _____ trying to understand my accent and just googles random things now.",
    options: ["kept on", "started", "given up"],
    answer: "given up",
  },
  {
    question: "I spend more time _____ a movie to watch than actually watching movies these days.",
    options: ["finishing", "picking", "reviewing"],
    answer: "picking",
  },
  {
    question: "Every time someone brings up her crush, she _____ like a turtle hiding in its shell.",
    options: ["lights up", "opens up", "clams up"],
    answer: "clams up",
  },
  {
    question: "The kids were _____ in the meadow, chasing butterflies and laughing without a care in the world.",
    options: ["trudging", "hiding", "frolicking"],
    answer: "frolicking",
  },
  {
    question: "After a bit of friendly _____ about his haircut, he finally admitted he'd cut it himself.",
    options: ["advice", "ribbing", "praise"],
    answer: "ribbing",
  },
  {
    question: "They decided to try the _____ at dance class, even though they kept stepping on each other's toes.",
    options: ["sprint", "handstand", "foxtrot"],
    answer: "foxtrot",
  },
  {
    question: "The market had all manner of _____, from handmade crafts to freshly baked bread and exotic spices.",
    options: ["customers", "receipts", "stalls"],
    answer: "stalls",
  },
  {
    question: "We had to _____ the river to get to the other side, and the cold water nearly froze our legs off.",
    options: ["sail across", "dive under", "wade through"],
    answer: "wade through",
  },
  {
    question: "She really _____ playing pranks on her coworkers, nothing mean, just harmless fun.",
    options: ["feels guilty about", "gives up on", "gets a kick out of"],
    answer: "gets a kick out of",
  },
  {
    question: "The train was _____ this morning, and I could barely squeeze into the car without losing my bag.",
    options: ["half-empty", "running late", "jam-packed"],
    answer: "jam-packed",
  },
  {
    question: "The snake _____ across the trail, making everyone jump back with a mix of fear and fascination.",
    options: ["hopped", "stomped", "slithered"],
    answer: "slithered",
  },
  {
    question: "The boat ride was so choppy that half the passengers looked like they were ready to _____ their lunch overboard.",
    options: ["pack", "save", "toss"],
    answer: "toss",
  },
  {
    question: "They offered a flat rate for all-you-can-eat tacos, and let's just say we _____.",
    options: ["lost track of time", "ran out of napkins", "got our money's worth"],
    answer: "got our money's worth",
  },
  {
    question: "The trail had such a steep _____ that we had to stop halfway up just to catch our breath.",
    options: ["curve", "shortcut", "incline"],
    answer: "incline",
  },
  {
    question: "Every time I try to fold a fitted sheet, I end up with what looks like a fabric origami _____.",
    options: ["gone terribly wrong", "done to perfection", "left unfinished"],
    answer: "gone terribly wrong",
  },
  {
    question: "My smart TV is probably _____ me for binge watching the same show for the fourth time this month.",
    options: ["rewarding", "judging", "ignoring"],
    answer: "judging",
  },
  {
    question: "I keep telling myself I'll start running tomorrow, but tomorrow has _____ into a very flexible concept.",
    options: ["faded", "broken", "turned"],
    answer: "turned",
  },
  {
    question: "The amount of tabs I have open in my browser is starting to look like a _____.",
    options: ["morse code message", "shopping list", "grocery receipt"],
    answer: "morse code message",
  },
  {
    question: "My succulent just died and I am honestly impressed because those things are supposed to be _____ to kill.",
    options: ["easy", "dangerous", "impossible"],
    answer: "impossible",
  },
  {
    question: "Trying to eat healthy but the pizza place across the street knows my order _____.",
    options: ["by chance", "by accident", "by heart"],
    answer: "by heart",
  },
  {
    question: "I organized my desktop files into neat folders yesterday and somehow they are already _____ everywhere again.",
    options: ["scattered", "stacked", "labeled"],
    answer: "scattered",
  },
  {
    question: "The laundry basket is giving me _____ every time I walk past it without doing the washing.",
    options: ["friendly waves", "disappointed looks", "a standing ovation"],
    answer: "disappointed looks",
  },
  {
    question: "My cooking skills have evolved from burning toast to successfully making pasta without _____ the smoke alarm.",
    options: ["turning off", "fixing", "setting off"],
    answer: "setting off",
  },
  {
    question: "Every Sunday I write a to do list for the week and by Monday evening it has turned into a _____ list.",
    options: ["wishful thinking", "grocery shopping", "well organized"],
    answer: "wishful thinking",
  },
  {
    question: "The barista at my local coffee shop probably thinks I live there considering how often I show up for my _____.",
    options: ["grocery run", "caffeine fix", "morning jog"],
    answer: "caffeine fix",
  },
  {
    question: "My camera roll is basically just pictures of food I meant to post but never _____ editing.",
    options: ["gave up on", "finished with", "got around to"],
    answer: "got around to",
  },
  {
    question: "Sometimes I wonder if my WiFi router is secretly _____ against me when it stops working during important calls.",
    options: ["plotting", "teaming up", "working"],
    answer: "plotting",
  },
  {
    question: "I have perfected the _____ of making it look like I am paying attention in virtual meetings while actually online shopping.",
    options: ["chore", "art", "risk"],
    answer: "art",
  },
  {
    question: "My attempt at urban gardening has turned my balcony into what looks like a plant _____.",
    options: ["paradise", "factory", "hospital"],
    answer: "hospital",
  },
  {
    question: "The relationship between me and my reusable water bottle is more _____ than any dating relationship I have had.",
    options: ["committed", "distant", "casual"],
    answer: "committed",
  },
  {
    question: "I keep reorganizing my workspace thinking it will make me more _____ but really I just like moving things around.",
    options: ["relaxed", "productive", "creative"],
    answer: "productive",
  },
  {
    question: "My online shopping cart is basically a collection of things I want but will probably never actually _____.",
    options: ["need", "use", "buy"],
    answer: "buy",
  },
  {
    question: "Her _____ is so full that she can barely fit anything else inside.",
    options: ["garage", "closet", "kitchen"],
    answer: "closet",
  },
  {
    question: "I need to buy a whole new _____ for my new job because most of my clothes are too casual.",
    options: ["house", "wardrobe", "furniture"],
    answer: "wardrobe",
  },
  {
    question: "She spent almost an hour at the store _____ out the perfect dress for her sister's wedding.",
    options: ["washing", "picking", "cleaning"],
    answer: "picking",
  },
  {
    question: "The knees of his favorite jeans are completely _____, but he refuses to throw them away.",
    options: ["wet", "frayed", "expensive"],
    answer: "frayed",
  },
  {
    question: "The old photograph had _____ over the years and was now only a pale version of its original colors.",
    options: ["dirty", "ripped", "faded"],
    answer: "faded",
  },
  {
    question: "There's a big _____ in my shirt sleeve. I must have caught it on something sharp.",
    options: ["button", "rip", "stain"],
    answer: "rip",
  },
  {
    question: "I spilled coffee on my white blouse, and now there's a big brown _____ that won't come out.",
    options: ["zipper", "stain", "rip"],
    answer: "stain",
  },
  {
    question: "The _____ on my jacket is broken, so I can't zip it up.",
    options: ["size", "color", "zipper"],
    answer: "zipper",
  },
  {
    question: "The drawer is _____, and I can't open it no matter how hard I pull.",
    options: ["heavy", "stuck", "empty"],
    answer: "stuck",
  },
  {
    question: "The leather on these shoes is badly _____ after years of everyday use.",
    options: ["cold", "scuffed", "wet"],
    answer: "scuffed",
  },
  {
    question: "These shoes are so old that the _____ are completely smooth, and I keep slipping.",
    options: ["buckles", "soles", "laces"],
    answer: "soles",
  },
  {
    question: "My winter coat is really _____. I've had it for ten years, and it's starting to show its age.",
    options: ["heavy", "new", "worn"],
    answer: "worn",
  },
  {
    question: "We were completely out of clean clothes, so we had to wash everything by hand. _____ call for desperate measures.",
    options: ["Quiet days", "Desperate times", "Happy moments"],
    answer: "Desperate times",
  },
  {
    question: "I can't meet your friends looking like this. I need to change into something more _____ first.",
    options: ["comfortable", "presentable", "colorful"],
    answer: "presentable",
  },
  {
    question: "The dress looked absolutely _____. There wasn't a single wrinkle or flaw anywhere.",
    options: ["cheap", "colorful", "flawless"],
    answer: "flawless",
  },
  {
    question: "After working for a big company for ten years, he finally decided to _____ and start his own business.",
    options: ["take a break", "take a rest", "take the leap"],
    answer: "take the leap",
  },
  {
    question: "I downloaded a _____ to make all my business letters look professional and consistent.",
    options: ["folder", "picture", "template"],
    answer: "template",
  },
  {
    question: "We _____ our new kitchen with special lighting and different handles on the cabinets.",
    options: ["painted", "customized", "cleaned"],
    answer: "customized",
  },
  {
    question: "Her writing has a distinct southern _____ that makes you feel like you're in a small town in Georgia.",
    options: ["color", "flavor", "sound"],
    answer: "flavor",
  },
  {
    question: "The company plans to _____ its new product next month with a big advertising campaign.",
    options: ["finish", "sell", "launch"],
    answer: "launch",
  },
  {
    question: "Did you read my latest _____ on the blog? I wrote about my trip to Japan.",
    options: ["letter", "email", "post"],
    answer: "post",
  },
  {
    question: "Please _____ the report with the latest sales numbers before tomorrow's meeting.",
    options: ["print", "update", "read"],
    answer: "update",
  },
  {
    question: "The new game became very popular. It really _____ with young people.",
    options: ["gave up", "caught on", "slowed down"],
    answer: "caught on",
  },
  {
    question: "The _____ is full of opinions about the new movie that came out last week.",
    options: ["television", "blogosphere", "newspaper"],
    answer: "blogosphere",
  },
  {
    question: "His cover letter was mostly _____. He explained why he was the best person for the job.",
    options: ["complaints", "jokes", "self-promotion"],
    answer: "self-promotion",
  },
  {
    question: "I used a _____ to find information about hotels in Rome.",
    options: ["dictionary", "search engine", "calculator"],
    answer: "search engine",
  },
  {
    question: "Many bloggers try to _____ with other websites to attract more visitors.",
    options: ["write stories", "share photos", "swap links"],
    answer: "swap links",
  },
  {
    question: "Her website gets over 5,000 _____ every day from people all over the world.",
    options: ["friends", "hits", "emails"],
    answer: "hits",
  },
  {
    question: "When his coach told him he had real talent, he _____ and started practicing every day.",
    options: ["laughed at it", "forgot about it", "took it to heart"],
    answer: "took it to heart",
  },
  {
    question: "I read the blog post and left a _____ saying how much I enjoyed it.",
    options: ["picture", "comment", "question"],
    answer: "comment",
  },
  {
    question: "The President _____ three new judges to the Supreme Court last month.",
    options: ["interviewed", "appointed", "elected"],
    answer: "appointed",
  },
  {
    question: "When the manager retires next year, who do you think will _____ her?",
    options: ["fire", "help", "succeed"],
    answer: "succeed",
  },
  {
    question: "They need someone to _____ the position while the regular employee is on maternity leave.",
    options: ["create", "fill", "leave"],
    answer: "fill",
  },
  {
    question: "There are five strong _____ for the job, but we can only hire one.",
    options: ["customers", "candidates", "students"],
    answer: "candidates",
  },
  {
    question: "The decision has to be approved by the _____ before we can move forward.",
    options: ["new employees", "higher-ups", "customers"],
    answer: "higher-ups",
  },
  {
    question: "The company carefully _____ all job applicants before inviting them for interviews.",
    options: ["ignores", "vets", "meets"],
    answer: "vets",
  },
  {
    question: "She has a few _____ in her closet from mistakes she made years ago.",
    options: ["clothes", "skeletons", "secrets"],
    answer: "skeletons",
  },
  {
    question: "I'm sorry, but I'm not _____ to discuss the details of the contract.",
    options: ["at work", "at liberty", "at home"],
    answer: "at liberty",
  },
  {
    question: "Only people in the president's _____ knew about the major changes coming to the company.",
    options: ["office", "family", "inner circle"],
    answer: "inner circle",
  },
  {
    question: "The boss has become very _____ with the new intern lately.",
    options: ["strict", "buddy-buddy", "polite"],
    answer: "buddy-buddy",
  },
  {
    question: "Three different candidates are still _____ for the manager position.",
    options: ["under payment", "under consideration", "under training"],
    answer: "under consideration",
  },
  {
    question: "She got promoted after only six months. _____!",
    options: ["That's normal", "That's huge", "That's small"],
    answer: "That's huge",
  },
  {
    question: "Mr. Thompson will serve as the _____ director until they find a permanent replacement.",
    options: ["retired", "interim", "new"],
    answer: "interim",
  },
  {
    question: "He has the _____ because his uncle is the head of the department.",
    options: ["difficult path", "inside track", "outside chance"],
    answer: "inside track",
  },
  {
    question: "The company is keeping its new product plans _____ until the official announcement.",
    options: ["in the open", "under wraps", "on the table"],
    answer: "under wraps",
  },
  {
    question: "Can you pass me the _____? I want to change the channel.",
    options: ["phone", "remote", "book"],
    answer: "remote",
  },
  {
    question: "_____ turning down the music? I'm trying to study.",
    options: ["Can you help", "Do you mind", "Are you happy"],
    answer: "Do you mind",
  },
  {
    question: "Our team made it to the national _____. We're so excited!",
    options: ["party", "playoffs", "practice"],
    answer: "playoffs",
  },
  {
    question: "I'm _____ the home team tonight. I hope they win!",
    options: ["waiting for", "rooting for", "angry at"],
    answer: "rooting for",
  },
  {
    question: "No one expected them to win. They were the clear _____ in the match.",
    options: ["favorite", "champion", "underdog"],
    answer: "underdog",
  },
  {
    question: "The team was _____ after winning the championship game.",
    options: ["sad", "victorious", "tired"],
    answer: "victorious",
  },
  {
    question: "Our team really _____ last night. The final score was 8 to 1.",
    options: ["got lucky", "got pounded", "got better"],
    answer: "got pounded",
  },
  {
    question: "Who do you think will be the next world _____ in boxing?",
    options: ["coach", "champion", "player"],
    answer: "champion",
  },
  {
    question: "Please let me work _____ for a while. I need to finish this report.",
    options: ["with friends", "in peace", "with music"],
    answer: "in peace",
  },
  {
    question: "The basketball _____ starts in October and ends in June.",
    options: ["team", "season", "game"],
    answer: "season",
  },
  {
    question: "He's always so _____ when he's hungry. It's better not to talk to him then.",
    options: ["quiet", "testy", "happy"],
    answer: "testy",
  },
  {
    question: "Which team are you _____ in the final?",
    options: ["ignoring", "backing", "fighting"],
    answer: "backing",
  },
  {
    question: "The employees are all _____ because there are rumors about layoffs.",
    options: ["running late", "running scared", "running fast"],
    answer: "running scared",
  },
  {
    question: "She studied hard but _____ during the exam because she was too nervous.",
    options: ["relaxed", "choked", "succeeded"],
    answer: "choked",
  },
  {
    question: "The little boy almost _____ when he swallowed a large piece of candy.",
    options: ["got excited", "got choked", "got tired"],
    answer: "got choked",
  },
  {
    question: "She took a _____ class to learn how to protect herself if she is ever attacked.",
    options: ["self-defense", "swimming", "cooking"],
    answer: "self-defense",
  },
  {
    question: "Before the game started, the players were _____ the opposing team.",
    options: ["cheering", "ignoring", "sizing up"],
    answer: "sizing up",
  },
  {
    question: "The small dog looks scary, but he's actually completely _____.",
    options: ["dangerous", "harmless", "angry"],
    answer: "harmless",
  },
  {
    question: "The man was arrested for making _____ phone calls to his ex-wife.",
    options: ["short", "friendly", "threatening"],
    answer: "threatening",
  },
  {
    question: "After they ran out of bullets, the two men were forced into _____.",
    options: ["hand-to-hand combat", "knife", "gun"],
    answer: "hand-to-hand combat",
  },
  {
    question: "When the dog attacked, the man tried to _____ himself with a stick.",
    options: ["feed", "defend", "run"],
    answer: "defend",
  },
  {
    question: "Karate is a popular _____ that teaches people how to fight without weapons.",
    options: ["game", "sport", "martial art"],
    answer: "martial art",
  },
  {
    question: "The bigger boy tried to _____ the smaller boy after school.",
    options: ["beat up", "play with", "help"],
    answer: "beat up",
  },
  {
    question: "We need to _____ the problem directly instead of avoiding it.",
    options: ["forget", "confront", "ignore"],
    answer: "confront",
  },
  {
    question: "The players are really _____ for tomorrow's championship game.",
    options: ["tired", "bored", "pumped up"],
    answer: "pumped up",
  },
  {
    question: "When I saw the car accident, a rush of _____ made my heart race.",
    options: ["food", "adrenaline", "water"],
    answer: "adrenaline",
  },
  {
    question: "The teacher tried to _____ the argument between the two students.",
    options: ["start", "join", "defuse"],
    answer: "defuse",
  },
  {
    question: "Some customers complained that the salesman was _____ them with too many phone calls.",
    options: ["harassing", "helping", "paying"],
    answer: "harassing",
  },
  {
    question: "We've got a lot to finish today. Let's _____ on this report.",
    options: ["go home", "take a break", "do some damage"],
    answer: "do some damage",
  },
  {
    question: "You need the right _____ if you want to succeed in this difficult job.",
    options: ["car", "mindset", "shoes"],
    answer: "mindset",
  },
  {
    question: "Could you please give me _____ to your house? I don't know the area well.",
    options: ["money", "directions", "advice"],
    answer: "directions",
  },
  {
    question: "The address is 245 Oak Street. The nearest _____ is Pine Avenue.",
    options: ["building", "highway", "cross street"],
    answer: "cross street",
  },
  {
    question: "Take the highway and get off at _____ 47.",
    options: ["entrance", "stop", "exit"],
    answer: "exit",
  },
  {
    question: "We're _____ north on the highway toward the mountains.",
    options: ["parking", "stopping", "heading"],
    answer: "heading",
  },
  {
    question: "The house is just past the big _____ in the road.",
    options: ["hill", "bridge", "bend"],
    answer: "bend",
  },
  {
    question: "At the fork in the road, _____ left toward the lake.",
    options: ["speed", "veer", "stop"],
    answer: "veer",
  },
  {
    question: "This is a _____. We'll have to turn around.",
    options: ["highway", "dead end", "main road"],
    answer: "dead end",
  },
  {
    question: "Be careful. This is a _____ street, so you can only drive in one direction.",
    options: ["two-way", "wide", "one-way"],
    answer: "one-way",
  },
  {
    question: "We have to stop because the _____ is red.",
    options: ["road", "sign", "light"],
    answer: "light",
  },
  {
    question: "It's very difficult to find _____ parking downtown on weekends.",
    options: ["garage", "street", "reserved"],
    answer: "street",
  },
  {
    question: "The restaurant offers _____ parking, so someone will park your car for you.",
    options: ["cheap", "valet", "free"],
    answer: "valet",
  },
  {
    question: "The store will _____ your parking ticket if you buy something.",
    options: ["sell", "ignore", "validate"],
    answer: "validate",
  },
  {
    question: "I need to put more money in the parking _____ or I'll get a ticket.",
    options: ["meter", "light", "sign"],
    answer: "meter",
  },
  {
    question: "The main street is very busy. Let's try looking for parking on a _____ instead.",
    options: ["bridge", "highway", "side street"],
    answer: "side street",
  },
  {
    question: "There was no parking, so I had to _____ the block a few times.",
    options: ["cross", "stop", "circle"],
    answer: "circle",
  },
  {
    question: "Life is short. We should try to _____ as much as possible.",
    options: ["work harder", "get the most out of life", "save more money"],
    answer: "get the most out of life",
  },
  {
    question: "She wants to _____ by traveling, trying new things, and taking risks.",
    options: ["live safely", "live quietly", "live life to its fullest"],
    answer: "live life to its fullest",
  },
  {
    question: "Wearing baggy pants was a popular _____ in the 1990s, but it didn't last long.",
    options: ["fad", "rule", "tradition"],
    answer: "fad",
  },
  {
    question: "After his heart attack, he completely changed his _____ and started exercising and eating healthier.",
    options: ["house", "car", "lifestyle"],
    answer: "lifestyle",
  },
  {
    question: "Teaching young children is very _____ for her. She loves her job.",
    options: ["easy", "boring", "fulfilling"],
    answer: "fulfilling",
  },
  {
    question: "Most children _____ when they only want to eat pizza and nothing else.",
    options: ["go to school", "go through a phase", "go to bed"],
    answer: "go through a phase",
  },
  {
    question: "Instead of worrying about tomorrow, try to _____ and enjoy today.",
    options: ["live in the moment", "remember everything", "plan everything"],
    answer: "live in the moment",
  },
  {
    question: "Her constant _____ makes everyone around her feel unhappy.",
    options: ["energy", "negativity", "kindness"],
    answer: "negativity",
  },
  {
    question: "I really _____ all your help during this difficult time.",
    options: ["forget", "appreciate", "ignore"],
    answer: "appreciate",
  },
  {
    question: "She comes from a religious family and is a _____ Christian.",
    options: ["studying", "practicing", "reading"],
    answer: "practicing",
  },
  {
    question: "Practicing _____ each morning helps me stay calm and focused during a busy day.",
    options: ["coffee", "music", "mindfulness"],
    answer: "mindfulness",
  },
  {
    question: "The mother tried to _____ her crying child by holding him gently.",
    options: ["excite", "scare", "calm"],
    answer: "calm",
  },
  {
    question: "She starts every morning with ten minutes of _____ to clear her mind.",
    options: ["laundry", "meditation", "eating"],
    answer: "meditation",
  },
  {
    question: "Stop _____ the past. It's keeping you from moving forward.",
    options: ["laughing at", "talking about", "dwelling on"],
    answer: "dwelling on",
  },
  {
    question: "I always read _____ before buying a new phone.",
    options: ["advertisements", "consumer reviews", "prices"],
    answer: "consumer reviews",
  },
  {
    question: "He received offers from three different companies and is now _____ his options.",
    options: ["accepting", "ignoring", "weighing"],
    answer: "weighing",
  },
  {
    question: "Don't decide yet. You should _____ your options open for a while.",
    options: ["forget", "close", "keep"],
    answer: "keep",
  },
  {
    question: "I can't _____ my mind. Should I take the job or go back to school?",
    options: ["change", "lose", "make up"],
    answer: "make up",
  },
  {
    question: "If you need any help, please don't _____ to ask.",
    options: ["hesitate", "forget", "try"],
    answer: "hesitate",
  },
  {
    question: "This phone comes in several color _____.",
    options: ["prices", "options", "problems"],
    answer: "options",
  },
  {
    question: "_____ speaking, it's better to save the money than to buy a new car right now.",
    options: ["Loudly", "Logically", "Quickly"],
    answer: "Logically",
  },
  {
    question: "The scientists performed a careful _____ of the data before publishing their findings.",
    options: ["story", "analysis", "photo"],
    answer: "analysis",
  },
  {
    question: "Once you choose a university, you'll have to _____ that decision for the next four years.",
    options: ["fight with", "play with", "live with"],
    answer: "live with",
  },
  {
    question: "His past mistakes continue to _____ him many years later.",
    options: ["help", "entertain", "haunt"],
    answer: "haunt",
  },
  {
    question: "The heavy snow has _____ the city's transportation system.",
    options: ["started", "crippled", "improved"],
    answer: "crippled",
  },
  {
    question: "Her _____ is making it difficult for the team to move forward with the project.",
    options: ["experience", "speed", "indecision"],
    answer: "indecision",
  },
  {
    question: "Stop _____ and just give me your final answer.",
    options: ["stalling", "helping", "running"],
    answer: "stalling",
  },
  {
    question: "I bought my new laptop at a big _____ store downtown.",
    options: ["grocery", "electronics", "clothing"],
    answer: "electronics",
  },
  {
    question: "I don't think you'll _____ quitting your job. It was the right decision.",
    options: ["remember", "enjoy", "regret"],
    answer: "regret",
  },
  {
    question: "His joke didn't _____ very well with the audience. No one laughed.",
    options: ["look", "go over", "sound"],
    answer: "go over",
  },
  {
    question: "The new movie was a complete _____. Almost no one went to see it.",
    options: ["success", "hit", "flop"],
    answer: "flop",
  },
  {
    question: "I completely _____ my presentation. I was so nervous that I forgot everything.",
    options: ["bombed", "prepared", "enjoyed"],
    answer: "bombed",
  },
  {
    question: "This year's conference felt like a _____ of last year's. They covered almost all the same topics.",
    options: ["surprise", "retread", "improvement"],
    answer: "retread",
  },
  {
    question: "Are you tired after the long trip? Not in the _____. I feel great!",
    options: ["morning", "evening", "least"],
    answer: "least",
  },
  {
    question: "His criticism was too _____. He should have been more polite.",
    options: ["kind", "harsh", "quiet"],
    answer: "harsh",
  },
  {
    question: "Business has been _____ this year. We're losing a lot of money.",
    options: ["normal", "excellent", "dismal"],
    answer: "dismal",
  },
  {
    question: "She was very _____ when she told him his work needed improvement.",
    options: ["tactful", "angry", "loud"],
    answer: "tactful",
  },
  {
    question: "When you consider everything, her decision really _____ cost and location.",
    options: ["starts with", "ends with", "boils down to"],
    answer: "boils down to",
  },
  {
    question: "It's _____ to see a grown man crying over a lost video game.",
    options: ["exciting", "pathetic", "normal"],
    answer: "pathetic",
  },
  {
    question: "The kids were _____ when they saw the presents.",
    options: ["sitting quietly", "jumping up and down", "feeling tired"],
    answer: "jumping up and down",
  },
  {
    question: "If you keep practicing every day, you're _____ improve.",
    options: ["too lazy to", "bound to", "afraid to"],
    answer: "bound to",
  },
  {
    question: "My parents were against the idea at first, but they're finally starting to _____.",
    options: ["move away", "come around", "get angry"],
    answer: "come around",
  },
  {
    question: "I need to _____ my essay before I submit it. There are still many mistakes.",
    options: ["copy", "rework", "throw away"],
    answer: "rework",
  },
  {
    question: "Why is that woman _____ at us? Do we know her?",
    options: ["smiling", "staring", "talking"],
    answer: "staring",
  },
  {
    question: "She had a big _____ on her teacher when she was in middle school.",
    options: ["fight", "crush", "problem"],
    answer: "crush",
  },
  {
    question: "He _____ for Maria the moment he saw her and proposed after only six months.",
    options: ["became friends", "fell head over heels", "felt sorry"],
    answer: "fell head over heels",
  },
  {
    question: "It was _____ when we met. We both knew immediately that we wanted to be together.",
    options: ["just friendship", "a bad idea", "love at first sight"],
    answer: "love at first sight",
  },
  {
    question: "You could see the _____ fly when they started talking at the party.",
    options: ["sparks", "words", "problems"],
    answer: "sparks",
  },
  {
    question: "I can't believe I _____ the exit. Now we have to drive ten more miles.",
    options: ["missed", "took", "saw"],
    answer: "missed",
  },
  {
    question: "Her face turned red with a deep _____ when he complimented her dress.",
    options: ["tear", "blush", "smile"],
    answer: "blush",
  },
  {
    question: "He had a big _____ on his face when he received his exam results.",
    options: ["cry", "grin", "frown"],
    answer: "grin",
  },
  {
    question: "They have great _____. You can tell they really enjoy being together.",
    options: ["arguments", "chemistry", "problems"],
    answer: "chemistry",
  },
  {
    question: "She kept _____ at him during the meeting, but he didn't notice.",
    options: ["laughing", "shouting", "stealing glances"],
    answer: "stealing glances",
  },
  {
    question: "Don't worry. The monster under your bed is just a _____ of your imagination.",
    options: ["picture", "photo", "figment"],
    answer: "figment",
  },
  {
    question: "I'm very _____ him, but I'm not sure if he feels the same way.",
    options: ["afraid of", "attracted to", "angry at"],
    answer: "attracted to",
  },
  {
    question: "Don't answer for me. I can _____ for myself.",
    options: ["speak", "cook", "sing"],
    answer: "speak",
  },
  {
    question: "The old building is so _____. The walls are cracked and the roof leaks.",
    options: ["beautiful", "decrepit", "modern"],
    answer: "decrepit",
  },
  {
    question: "In the _____ of his life, he was a famous actor and traveled all over the world.",
    options: ["beginning", "end", "prime"],
    answer: "prime",
  },
  {
    question: "Now that he's retired, many people in _____ start thinking more about their health.",
    options: ["childhood", "adolescence", "middle age"],
    answer: "middle age",
  },
  {
    question: "Traveling abroad gave her a new _____ on her own culture.",
    options: ["job", "perspective", "house"],
    answer: "perspective",
  },
  {
    question: "Most of the players on the team are still _____. Only a few are over 30.",
    options: ["old men", "spring chickens", "grandparents"],
    answer: "spring chickens",
  },
  {
    question: "Many teenagers experience _____ as they try to figure out who they are.",
    options: ["peace", "angst", "happiness"],
    answer: "angst",
  },
  {
    question: "As he got older, he became more _____ and stopped doing childish things.",
    options: ["mature", "lazy", "noisy"],
    answer: "mature",
  },
  {
    question: "Many young people feel _____ about their appearance during puberty.",
    options: ["confidence", "strength", "insecure"],
    answer: "insecure",
  },
  {
    question: "There is a lot of _____ about the future of the company.",
    options: ["certainty", "money", "uncertainty"],
    answer: "uncertainty",
  },
  {
    question: "He felt a lot of _____ when he had to speak in front of the whole class.",
    options: ["joy", "awkwardness", "confidence"],
    answer: "awkwardness",
  },
  {
    question: "_____ fashion changes very quickly and is often influenced by social media.",
    options: ["Baby", "Teenage", "Elderly"],
    answer: "Teenage",
  },
  {
    question: "Listening to old songs makes me feel _____ for my childhood.",
    options: ["bored", "nostalgic", "angry"],
    answer: "nostalgic",
  },
  {
    question: "Children gradually lose some of their _____ as they grow up.",
    options: ["strength", "innocence", "money"],
    answer: "innocence",
  },
  {
    question: "_____ is an exciting but dangerous sport that requires a lot of courage.",
    options: ["Reading", "Cooking", "Skydiving"],
    answer: "Skydiving",
  },
  {
    question: "I hope I live a long life before I finally _____.",
    options: ["go to sleep", "eat dinner", "kick the bucket"],
    answer: "kick the bucket",
  },
  {
    question: "It's rude to _____ women like that. Stop staring at them.",
    options: ["talk to", "ogle", "help"],
    answer: "ogle",
  },
  {
    question: "The new bridge is being built by over fifty _____.",
    options: ["teachers", "doctors", "construction workers"],
    answer: "construction workers",
  },
  {
    question: "She is a _____ of a successful businesswoman who started from nothing.",
    options: ["prime example", "small example", "bad example"],
    answer: "prime example",
  },
  {
    question: "His father taught him that true _____ includes being kind and responsible.",
    options: ["friendship", "manhood", "childhood"],
    answer: "manhood",
  },
  {
    question: "Even though I exercise, I still have _____ arms that I don't like.",
    options: ["strong", "flabby", "thin"],
    answer: "flabby",
  },
  {
    question: "If you eat too much junk food, you'll end up with a big _____.",
    options: ["back", "gut", "head"],
    answer: "gut",
  },
  {
    question: "A _____ of young men were standing outside the gym.",
    options: ["pair", "single", "bunch"],
    answer: "bunch",
  },
  {
    question: "Some advertisements _____ women by showing them only as objects of desire.",
    options: ["respect", "objectify", "ignore"],
    answer: "objectify",
  },
  {
    question: "He's been working out hard to get a _____ .",
    options: ["big belly", "six-pack", "long legs"],
    answer: "six-pack",
  },
  {
    question: "Look at those _____. He must lift a lot of weights!",
    options: ["shoes", "guns", "legs"],
    answer: "guns",
  },
  {
    question: "Athletes usually have very _____ bodies with almost no extra fat.",
    options: ["heavy", "soft", "lean"],
    answer: "lean",
  },
  {
    question: "Some people think cleaning bathrooms is a _____ job, but it's necessary.",
    options: ["demeaning", "easy", "fun"],
    answer: "demeaning",
  },
  {
    question: "_____ the whole team, I want to congratulate you on your victory.",
    options: ["In front of", "Because of", "On behalf of"],
    answer: "On behalf of",
  },
  {
    question: "She was deeply _____ when he made fun of her accent.",
    options: ["excited", "offended", "happy"],
    answer: "offended",
  },
  {
    question: "I usually go to bed _____ 11 p.m.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "My grandmother was born _____ 1945.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "We're meeting _____ Saturday afternoon.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "The store opens _____ 8 o'clock every day.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "I was born _____ the winter.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "Her wedding is _____ June 12th.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "I'll call you _____ the morning.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "The train leaves _____ noon.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "We celebrate Christmas _____ December.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "I have a dentist appointment _____ 3:30.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "She was born _____ a Tuesday.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "The shop is closed _____ Sundays.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "He was elected president _____ 2020.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "The library is open _____ the weekends.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "I always feel tired _____ the end of a long day.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "My cousin is getting married _____ the spring.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "The bakery closes _____ 6 p.m. sharp.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "We always visit our grandparents _____ New Year's Day.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "The meeting starts _____ 9:15 sharp.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "My birthday is _____ March.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "We're having a party _____ Friday night.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "The store closes _____ midnight during the holidays.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "The company was founded _____ 1998.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "Her flight lands _____ July 4th.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "I take a walk _____ the evening.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "The show begins _____ 7 p.m.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "Most schools start a new term _____ September.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "I always clean the house _____ Saturdays.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "The bridge was built _____ the 1800s.",
    options: ["on", "at", "in"],
    answer: "in",
  },
  {
    question: "He wakes up _____ dawn every morning.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "Their anniversary falls _____ October 3rd.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "The team practices _____ the afternoon.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "The restaurant is fully booked _____ New Year's Eve.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "The concert ends _____ 11 o'clock.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "She graduated from college _____ 2015.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "We usually eat dinner _____ 6:30.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "The museum is closed _____ Mondays.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "The plane departs _____ the beginning of the month.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "Let's not beat around the _____; just tell me what happened.",
    options: ["tree", "shrub", "bush"],
    answer: "bush",
  },
  {
    question: "He hit the nail right on the _____ with that comment.",
    options: ["head", "top", "nose"],
    answer: "head",
  },
  {
    question: "I've been feeling a little under the _____ lately.",
    options: ["rain", "weather", "sky"],
    answer: "weather",
  },
  {
    question: "That new car cost me an arm and a _____.",
    options: ["foot", "hand", "leg"],
    answer: "leg",
  },
  {
    question: "Good luck on your exam tomorrow. Break a _____!",
    options: ["hand", "leg", "arm"],
    answer: "leg",
  },
  {
    question: "She accidentally let the cat out of the _____ about the surprise party.",
    options: ["house", "bag", "box"],
    answer: "bag",
  },
  {
    question: "Relax, it's not rocket _____; anyone can learn it.",
    options: ["physics", "science", "math"],
    answer: "science",
  },
  {
    question: "You're barking up the wrong _____ if you think I did it.",
    options: ["bush", "path", "tree"],
    answer: "tree",
  },
  {
    question: "There's no point crying over spilled _____ now.",
    options: ["water", "juice", "milk"],
    answer: "milk",
  },
  {
    question: "Ever since she got the promotion, she's been on cloud _____.",
    options: ["seven", "ten", "nine"],
    answer: "nine",
  },
  {
    question: "Don't worry about the test, it'll be a piece of _____.",
    options: ["bread", "cake", "pie"],
    answer: "cake",
  },
  {
    question: "The old man finally kicked the _____ at age 95.",
    options: ["can", "bucket", "pail"],
    answer: "bucket",
  },
  {
    question: "Go ahead. I'm all _____! Tell me everything.",
    options: ["hands", "ears", "eyes"],
    answer: "ears",
  },
  {
    question: "We've made good progress today; let's call it a _____.",
    options: ["deal", "day", "night"],
    answer: "day",
  },
  {
    question: "The delay was annoying, but it was the last _____ when they lost my luggage.",
    options: ["straw", "stick", "feather"],
    answer: "straw",
  },
  {
    question: "He's had a chip on his _____ ever since he got passed over for the job.",
    options: ["back", "shoulder", "arm"],
    answer: "shoulder",
  },
  {
    question: "You should take what he says with a grain of _____.",
    options: ["sand", "salt", "sugar"],
    answer: "salt",
  },
  {
    question: "She finally spilled the _____ about their secret engagement.",
    options: ["tea", "peas", "beans"],
    answer: "beans",
  },
  {
    question: "I'm going to hit the _____ early tonight; I'm exhausted.",
    options: ["hay", "pillow", "bed"],
    answer: "hay",
  },
  {
    question: "Stop beating a dead _____; the decision has already been made.",
    options: ["dog", "horse", "mule"],
    answer: "horse",
  },
  {
    question: "Could you please _____ down the volume? It's too loud.",
    options: ["bring", "turn", "put"],
    answer: "turn",
  },
  {
    question: "I need to _____ up early tomorrow for my flight.",
    options: ["lift", "wake", "raise"],
    answer: "wake",
  },
  {
    question: "She decided to _____ up smoking after her doctor's warning.",
    options: ["take", "give", "let"],
    answer: "give",
  },
  {
    question: "Can you _____ out this form before your appointment?",
    options: ["fit", "fill", "fix"],
    answer: "fill",
  },
  {
    question: "They had to _____ off the meeting due to bad weather.",
    options: ["phone", "call", "ring"],
    answer: "call",
  },
  {
    question: "He's trying to _____ up with new ideas for the project.",
    options: ["get", "go", "come"],
    answer: "come",
  },
  {
    question: "Please _____ out the lights before you leave the office.",
    options: ["shut", "close", "turn"],
    answer: "turn",
  },
  {
    question: "I can't _____ up with all this noise anymore.",
    options: ["stand", "put", "keep"],
    answer: "put",
  },
  {
    question: "We need to _____ down the budget for next quarter.",
    options: ["slice", "cut", "chop"],
    answer: "cut",
  },
  {
    question: "She had to _____ up her job to take care of her mother.",
    options: ["throw", "give", "let"],
    answer: "give",
  },
  {
    question: "The plane is about to _____ off; please fasten your seatbelt.",
    options: ["take", "fly", "lift"],
    answer: "take",
  },
  {
    question: "I ran into an old friend and we _____ up talking for hours.",
    options: ["finished", "closed", "ended"],
    answer: "ended",
  },
  {
    question: "Let's _____ over the report before we submit it.",
    options: ["view", "look", "watch"],
    answer: "look",
  },
  {
    question: "He was late, so he had to _____ up on his homework over the weekend.",
    options: ["reach", "grab", "catch"],
    answer: "catch",
  },
  {
    question: "Don't _____ up on your dreams just because it's difficult.",
    options: ["put", "give", "let"],
    answer: "give",
  },
  {
    question: "The kids love to _____ around in the backyard after school.",
    options: ["run", "walk", "jog"],
    answer: "run",
  },
  {
    question: "I need to _____ up my resume before applying for jobs.",
    options: ["set", "update", "put"],
    answer: "update",
  },
  {
    question: "The company plans to _____ off 200 employees next month.",
    options: ["lay", "cut", "put"],
    answer: "lay",
  },
  {
    question: "Please _____ down your seatbelt before we take off.",
    options: ["lock", "buckle", "tie"],
    answer: "buckle",
  },
  {
    question: "She's going to _____ up her own business next year.",
    options: ["build", "set", "make"],
    answer: "set",
  },
  {
    question: "He's been dragging his feet on signing the contract for weeks now.",
    options: ["dragging his feet", "hitting the ground running", "jumping the gun"],
    answer: "dragging his feet",
  },
  {
    question: "I know it's a tough situation, but let's not _____ and just focus on solving it.",
    options: ["cross that bridge", "cry over spilled milk", "throw in the towel"],
    answer: "cry over spilled milk",
  },
  {
    question: "She really _____ when she found out she got the promotion.",
    options: ["bit her tongue", "hit the roof", "jumped for joy"],
    answer: "jumped for joy",
  },
  {
    question: "Don't worry about the small typo, it's not going to _____.",
    options: ["cost an arm and a leg", "make or break the deal", "come back to haunt you"],
    answer: "make or break the deal",
  },
  {
    question: "He always seems to _____ whenever there's free food at the office.",
    options: ["keep his cards close to his chest", "read between the lines", "come out of the woodwork"],
    answer: "come out of the woodwork",
  },
  {
    question: "After the layoffs were announced, everyone was walking on _____ around the office.",
    options: ["thin ice", "eggshells", "cloud nine"],
    answer: "eggshells",
  },
  {
    question: "I'm not going to _____ about it, the presentation was a disaster.",
    options: ["beat around the bush", "let the cat out of the bag", "spill the beans"],
    answer: "beat around the bush",
  },
  {
    question: "She's been under the weather all week, but she's finally starting to _____.",
    options: ["turn the corner", "bite the bullet", "call it quits"],
    answer: "turn the corner",
  },
  {
    question: "He put his foot in his mouth when he brought up her ex at dinner.",
    options: ["put his foot in his mouth", "kept his nose clean", "played it by ear"],
    answer: "put his foot in his mouth",
  },
  {
    question: "We need to _____ before the client arrives, the office is a mess.",
    options: ["clean up our act", "let sleeping dogs lie", "burn our bridges"],
    answer: "clean up our act",
  },
  {
    question: "When the security footage surfaced, he realized _____ and confessed to everything.",
    options: ["the coast was clear", "the ball was in his court", "the gig was up"],
    answer: "the gig was up",
  },
  {
    question: "She managed to _____ quite a bit of debt after years of careless spending.",
    options: ["shake off", "rack up", "cut down"],
    answer: "rack up",
  },
  {
    question: "Investing all his savings in a single stock turned out to be pure _____.",
    options: ["prudence", "diligence", "folly"],
    answer: "folly",
  },
  {
    question: "After years of practice, she is now _____ in classical piano technique.",
    options: ["well-versed", "curious about", "fond of"],
    answer: "well-versed",
  },
  {
    question: "The plot of the novel is so _____ with subplots that it's hard to keep track of every character.",
    options: ["filled", "intertwined", "crowded"],
    answer: "intertwined",
  },
  {
    question: "He patted his pockets frantically at the front door, realizing he'd _____ his keys inside the house.",
    options: ["hidden", "left", "locked"],
    answer: "left",
  },
  {
    question: "She pulled over to the side of the road and rolled down her window to ask a passerby for _____.",
    options: ["permission", "directions", "opinions"],
    answer: "directions",
  },
  {
    question: "As the car came to a stop, he unbuckled his seatbelt and _____ the vehicle.",
    options: ["got out of", "pulled over", "boarded"],
    answer: "got out of",
  },
  {
    question: "Halfway to the airport, she suddenly remembered she'd _____ her passport on the kitchen counter.",
    options: ["packed", "found", "forgotten"],
    answer: "forgotten",
  },
  {
    question: "The waiter approached the table and asked if they were ready to _____ their order.",
    options: ["cancel", "place", "return"],
    answer: "place",
  },
  {
    question: "After hearing the good news, she felt completely _____.",
    options: ["resentful", "overjoyed", "indifferent"],
    answer: "overjoyed",
  },
  {
    question: "He tried to hide his _____ when his coworker took credit for his idea.",
    options: ["relief", "resentment", "enthusiasm"],
    answer: "resentment",
  },
  {
    question: "Waiting for her medical test results made her feel very _____.",
    options: ["grateful", "content", "anxious"],
    answer: "anxious",
  },
  {
    question: "He felt a wave of _____ wash over him when he saw his family after the long trip.",
    options: ["envy", "relief", "irritation"],
    answer: "relief",
  },
  {
    question: "She couldn't help feeling _____ of her sister's brand-new sports car.",
    options: ["nostalgic", "envious", "sympathetic"],
    answer: "envious",
  },
  {
    question: "Looking at old family photos always makes him feel _____ about his childhood.",
    options: ["frustrated", "indifferent", "nostalgic"],
    answer: "nostalgic",
  },
  {
    question: "The constant noise from the construction site left her feeling _____.",
    options: ["hopeful", "irritated", "grateful"],
    answer: "irritated",
  },
  {
    question: "After months of setbacks, the first signs of progress made him feel _____.",
    options: ["ashamed", "bitter", "hopeful"],
    answer: "hopeful",
  },
  {
    question: "She felt _____ after forgetting her best friend's birthday.",
    options: ["content", "ashamed", "relieved"],
    answer: "ashamed",
  },
  {
    question: "Despite losing the championship, the team remained _____ about next season.",
    options: ["bitter", "optimistic", "envious"],
    answer: "optimistic",
  },
  {
    question: "A: I can't parallel park this car!\nB: Just turn the wheel a little more. _____ You did it!",
    options: ["Definitely!", "There you go!", "There you are!"],
    answer: "There you go!",
  },
  {
    question: "_____! I've been looking for you all over the building.",
    options: ["Exactly!", "There you are!", "There you go!"],
    answer: "There you are!",
  },
  {
    question: "Organizers _____ that around 10,000 runners took part in the marathon, though the exact number wasn't counted.",
    options: ["assure", "estimate", "determine"],
    answer: "estimate",
  },
  {
    question: "The lab ran several tests to _____ the exact cause of the engine failure.",
    options: ["insure", "determine", "estimate"],
    answer: "determine",
  },
  {
    question: "I got a huge _____ on my head after walking into the low doorway.",
    options: ["shadow", "bump", "dip"],
    answer: "bump",
  },
  {
    question: "The road had a sudden _____ in it, and the car bounced hard when we drove over it.",
    options: ["shade", "dip", "bump"],
    answer: "dip",
  },
  {
    question: "The two candidates spent more time _____ each other than actually discussing policy.",
    options: ["estimating", "shading", "mudslinging"],
    answer: "mudslinging",
  },
  {
    question: "It was so hot that we moved our chairs into the _____ under the big tree.",
    options: ["dip", "shade", "shadow"],
    answer: "shade",
  },
  {
    question: "As the sun set, his _____ stretched across the pavement.",
    options: ["bump", "shadow", "shade"],
    answer: "shadow",
  },
  {
    question: "The manager _____ the clients that the delayed shipment would arrive by Friday, to calm their worries.",
    options: ["insured", "assured", "ensured"],
    answer: "assured",
  },
  {
    question: "Please double-check the guest list to _____ that everyone has a seat at the dinner.",
    options: ["assure", "insure", "ensure"],
    answer: "ensure",
  },
  {
    question: "You have to _____ your car before you're legally allowed to drive it in most states.",
    options: ["ensure", "assure", "insure"],
    answer: "insure",
  },
  {
    question: "I'll _____ be at the airport to pick you up, no matter how late your flight lands.",
    options: ["there you go", "exactly", "definitely"],
    answer: "definitely",
  },
  {
    question: "A: I wanted a laptop that was lightweight and had a big screen.\nB: This one is _____ what you're describing.",
    options: ["determine", "exactly", "definitely"],
    answer: "exactly",
  },
  {
    question: "At the festival, dancers wore the _____ clothing of their home country.",
    options: ["common sense", "pulpit", "native"],
    answer: "native",
  },
  {
    question: "The company is hiring new employees at a fast _____.",
    options: ["choir loft", "sermon", "rate"],
    answer: "rate",
  },
  {
    question: "A: We should really recycle more at this company.\nB: You're _____. Everyone in this room already recycles at home.",
    options: ["in the shade", "preaching to the choir", "estimating"],
    answer: "preaching to the choir",
  },
  {
    question: "The priest's _____ this Sunday was about forgiveness.",
    options: ["rate", "sermon", "pulpit"],
    answer: "sermon",
  },
  {
    question: "The musicians set up their instruments in the _____ above the main hall.",
    options: ["native", "pulpit", "choir loft"],
    answer: "choir loft",
  },
  {
    question: "The visiting speaker stepped up to the _____ to address the congregation.",
    options: ["sermon", "choir loft", "pulpit"],
    answer: "pulpit",
  },
  {
    question: "You don't need a manual for this; Just use your _____ and you'll figure it out.",
    options: ["native clothing", "common sense", "rate"],
    answer: "common sense",
  },
  {
    question: "Telling a room full of environmentalists to recycle more is basically _____.",
    options: ["common sense", "preaching to the choir", "a sermon"],
    answer: "preaching to the choir",
  },
  {
    question: "The birth _____ in that country has dropped steadily over the past decade.",
    options: ["sermon", "pulpit", "rate"],
    answer: "rate",
  },
  {
    question: "Even without formal training, she handled the emergency using nothing but _____.",
    options: ["a choir loft", "common sense", "a sermon"],
    answer: "common sense",
  },
  {
    question: "The school reduced its _____ from 35 to 25 students so teachers could give more attention to each child.",
    options: ["arena", "class size", "military base"],
    answer: "class size",
  },
  {
    question: "I didn't count exactly, but I'd say _____ 200 people showed up to the event.",
    options: ["vast majority", "roughly", "as a matter of fact"],
    answer: "roughly",
  },
  {
    question: "A: This restaurant is a bit expensive.\nB: _____, it's the most expensive place in town.",
    options: ["Vast majority", "As a matter of fact", "Roughly"],
    answer: "As a matter of fact",
  },
  {
    question: "A _____ of the employees voted in favor of the new schedule.",
    options: ["military base", "vast majority", "class size"],
    answer: "vast majority",
  },
  {
    question: "He grew up in a _____ where gunshots were a common sound at night.",
    options: ["military base", "ghetto", "arena"],
    answer: "ghetto",
  },
  {
    question: "The crowd inside the _____ roared as the home team scored the winning goal.",
    options: ["class size", "arena", "ghetto"],
    answer: "arena",
  },
  {
    question: "You'll need special clearance to enter the _____ where the soldiers are stationed.",
    options: ["ghetto", "military base", "arena"],
    answer: "military base",
  },
  {
    question: "The university plans to increase _____ next semester, meaning more students per lecture hall.",
    options: ["roughly", "class size", "vast majority"],
    answer: "class size",
  },
  {
    question: "There were _____ 80 guests at the wedding, though nobody counted precisely.",
    options: ["vast majority", "roughly", "as a matter of fact"],
    answer: "roughly",
  },
  {
    question: "It took her almost ten years to _____ her student loans after graduating from law school.",
    options: ["all but", "pay back", "cut off"],
    answer: "pay back",
  },
  {
    question: "_____ one student passed the final exam.",
    options: ["Don't be a", "All but", "Cut off"],
    answer: "All but",
  },
  {
    question: "The chef's _____ is a slow-braised short rib that takes two days to prepare.",
    options: ["student loan", "specialty", "moonshine"],
    answer: "specialty",
  },
  {
    question: "He was so rude in the meeting that he kept _____ other people mid-sentence.",
    options: ["all but", "cutting off", "paying back"],
    answer: "cutting off",
  },
  {
    question: "_____ jerk and just apologize to her already.",
    options: ["Pay back a", "Don't be a", "Cut off a"],
    answer: "Don't be a",
  },
  {
    question: "During _____, many people still found ways to drink alcohol illegally.",
    options: ["Appalachia", "Prohibition", "moonshine"],
    answer: "Prohibition",
  },
  {
    question: "His grandfather used to make _____ in the mountains and sell it secretly at night.",
    options: ["specialty", "moonshine", "student loans"],
    answer: "moonshine",
  },
  {
    question: "They spent the summer hiking through _____, staying in small mountain towns along the way.",
    options: ["Prohibition", "Appalachia", "specialty"],
    answer: "Appalachia",
  },
  {
    question: "I borrowed $20 from Jake yesterday, so I need to _____ him tomorrow.",
    options: ["cut off", "all but", "pay back"],
    answer: "pay back",
  },
  {
    question: "The driver _____ me so suddenly on the highway that I had to slam on the brakes.",
    options: ["paid back", "cut off", "all but"],
    answer: "cut off",
  },
  {
    question: "The scammer used _____, pretending to be a bank employee, to trick her into giving out her account number.",
    options: ["a parody", "pretexting", "satire"],
    answer: "pretexting",
  },
  {
    question: "Even though sales were down, the CEO decided to _____ and stick with the original strategy.",
    options: ["pretext", "stay the course", "mock"],
    answer: "stay the course",
  },
  {
    question: "The kids started _____ their teacher's accent, which made him really upset.",
    options: ["pretexting", "staying the course", "mocking"],
    answer: "mocking",
  },
  {
    question: "The magazine's political cartoons are a great example of _____, using humor to criticize the government.",
    options: ["a political pundit", "satire", "pretexting"],
    answer: "satire",
  },
  {
    question: "The comedy show did a _____ of the famous movie, exaggerating all its most dramatic scenes.",
    options: ["satire", "pretext", "parody"],
    answer: "parody",
  },
  {
    question: "Every election season, the news brings in the same _____ to analyze and debate the candidates' policies.",
    options: ["satire", "political pundits", "parodies"],
    answer: "political pundits",
  },
  {
    question: "Despite the criticism, the team decided to _____ rather than change their approach.",
    options: ["parody", "mock", "stay the course"],
    answer: "stay the course",
  },
  {
    question: "The attacker used _____ by pretending to be an IT technician and asking employees for their passwords.",
    options: ["satire", "a parody", "pretexting"],
    answer: "pretexting",
  },
  {
    question: "The students wrote a _____ of the national anthem for the talent show, changing the words to make it funny.",
    options: ["pretext", "parody", "pundit"],
    answer: "parody",
  },
  {
    question: "It's cruel to _____ someone's accent just to get a laugh from your friends.",
    options: ["satirize", "mock", "stay the course"],
    answer: "mock",
  },
  {
    question: "Nobody wanted to sit near him at the party because he's such a _____.",
    options: ["pundit", "loudmouth", "hue"],
    answer: "loudmouth",
  },
  {
    question: "The company's first-quarter sales were amazing. _____, this year could be their best yet.",
    options: ["To attribute", "If that's anything to go by", "The die is cast"],
    answer: "If that's anything to go by",
  },
  {
    question: "As the sun began to set, the sky took on a beautiful orange _____.",
    options: ["contribution", "hue", "color"],
    answer: "hue",
  },
  {
    question: "What _____ is your new car? I can't tell if it's navy or black.",
    options: ["color", "attribute", "hue"],
    answer: "color",
  },
  {
    question: "Each team member was asked to _____ at least one idea during the brainstorming session.",
    options: ["cast", "attribute", "contribute"],
    answer: "contribute",
  },
  {
    question: "She _____ her success to years of early mornings and hard work.",
    options: ["contributed", "cast", "attributed"],
    answer: "attributed",
  },
  {
    question: "Once you signed the contract, _____. There's no backing out now.",
    options: ["the die is cast", "you contributed", "if that's anything to go by"],
    answer: "the die is cast",
  },
  {
    question: "The artist carefully chose a different _____ of blue for each section of the painting.",
    options: ["loudmouth", "contribution", "hue"],
    answer: "hue",
  },
  {
    question: "The scientist _____ the discovery to her research partner, giving him full credit.",
    options: ["colored", "contributed", "attributed"],
    answer: "attributed",
  },
  {
    question: "He's known as the office _____, always interrupting meetings with loud opinions nobody asked for.",
    options: ["attribute", "loudmouth", "hue"],
    answer: "loudmouth",
  },
  {
    question: "The store offered to let us pay for the couch in four monthly ____ instead of all at once.",
    options: ["installments", "criteria", "chores"],
    answer: "installments",
  },
  {
    question: "After finishing her degree, she decided to _____ marketing instead of law.",
    options: ["call it quits", "want for", "go into"],
    answer: "go into",
  },
  {
    question: "The community program had to shut down early because of a _____.",
    options: ["standard", "criteria", "lack of funding"],
    answer: "lack of funding",
  },
  {
    question: "He sneezes constantly every spring because of his _____ to pollen.",
    options: ["installments", "chores", "allergies"],
    answer: "allergies",
  },
  {
    question: "It's already midnight. Are you really _____ going out now?",
    options: ["in business", "want for", "up for"],
    answer: "up for",
  },
  {
    question: "The kids grabbed their gloves and bats, eager to _____ before dinner.",
    options: ["call it quits", "play ball", "go into"],
    answer: "play ball",
  },
  {
    question: "Taking out the trash was always my least favorite _____ growing up.",
    options: ["criteria", "chore", "installment"],
    answer: "chore",
  },
  {
    question: "I need to do the _____ this weekend. I don't have a single clean shirt left.",
    options: ["installments", "laundry", "chores"],
    answer: "laundry",
  },
  {
    question: "How much do they _____ that old motorcycle in the garage?",
    options: ["call it quits", "want for", "go into"],
    answer: "want for",
  },
  {
    question: "Once the contracts were signed and the office was set up, _____.",
    options: ["we were up for it", "we were in business", "we called it quits"],
    answer: "we were in business",
  },
  {
    question: "He always said he'd support the plan, but _____, he backed out at the last minute.",
    options: ["if that's anything to go by", "when push came to shove", "throughout"],
    answer: "when push came to shove",
  },
  {
    question: "To choose the winner, the judges used strict _____ such as originality and craftsmanship.",
    options: ["installments", "criteria", "standards"],
    answer: "criteria",
  },
  {
    question: "The hotel's service didn't meet the _____ we expected for the price we paid.",
    options: ["chore", "standards", "criteria"],
    answer: "standards",
  },
  {
    question: "She kept a positive attitude _____ the entire difficult negotiation.",
    options: ["throughout", "into", "up for"],
    answer: "throughout",
  },
  {
    question: "After months of trying to fix the old car, they finally decided to _____ and buy a new one.",
    options: ["go into", "call it quits", "play ball"],
    answer: "call it quits",
  },
  {
    question: "The _____ to the Constitution explains the document's main purposes and principles.",
    options: ["posterity", "preamble", "founder"],
    answer: "preamble",
  },
  {
    question: "Steve Jobs was one of the _____ of Apple.",
    options: ["liberties", "unions", "founders"],
    answer: "founders",
  },
  {
    question: "The new tax law will _____ starting next January.",
    options: ["be established", "be in effect", "be on display"],
    answer: "be in effect",
  },
  {
    question: "The ancient artifacts are currently _____ at the history museum.",
    options: ["domestic", "in effect", "on display"],
    answer: "on display",
  },
  {
    question: "The composer decided to _____ the old poem, turning it into a beautiful song.",
    options: ["set it to music", "put it on display", "establish it"],
    answer: "set it to music",
  },
  {
    question: "After the war, the separate states formed a _____ under one central government.",
    options: ["preamble", "union", "welfare"],
    answer: "union",
  },
  {
    question: "The court system exists to ensure _____ for all citizens, regardless of wealth.",
    options: ["tranquility", "posterity", "justice"],
    answer: "justice",
  },
  {
    question: "The senator's speech focused mostly on _____ issues like healthcare and education, rather than foreign policy.",
    options: ["posterity", "domestic", "justice"],
    answer: "domestic",
  },
  {
    question: "After years in the busy city, she moved to the countryside searching for _____.",
    options: ["liberty", "tranquility", "welfare"],
    answer: "tranquility",
  },
  {
    question: "The organization's mission is to protect the _____ of children in low-income families.",
    options: ["posterity", "welfare", "tranquility"],
    answer: "welfare",
  },
  {
    question: "Citizens of this country enjoy the _____ to speak freely without fear of punishment.",
    options: ["welfare", "domestic", "liberty"],
    answer: "liberty",
  },
  {
    question: "We should protect these old forests for _____, so future generations can enjoy them too.",
    options: ["tranquility", "posterity", "welfare"],
    answer: "posterity",
  },
  {
    question: "The university was _____ over 150 years ago by a group of local scholars.",
    options: ["on display", "set to music", "established"],
    answer: "established",
  },
  {
    question: "_____ you mind if I opened the window? It's a bit warm in here.",
    options: ["Shall", "Will", "Would"],
    answer: "Would",
  },
  {
    question: "Members of that religious group were _____ for decades because of their beliefs.",
    options: ["persecuted", "enrolled", "deferred"],
    answer: "persecuted",
  },
  {
    question: "Every Sunday, the family walks to the local _____ to worship together.",
    options: ["interior", "canyon", "temple"],
    answer: "temple",
  },
  {
    question: "The hikers stood at the edge of the _____, looking down at the river far below.",
    options: ["canyon", "admissions", "temple"],
    answer: "canyon",
  },
  {
    question: "This small town is _____ one of the oldest universities in the country.",
    options: ["enrolled in", "home to", "due to"],
    answer: "home to",
  },
  {
    question: "The university's _____ office reviews thousands of applications every year.",
    options: ["interior", "admissions", "canyon"],
    answer: "admissions",
  },
  {
    question: "It took a few days at the new job for her to _____ the way everyone worked together.",
    options: ["want out", "be home to", "get a feel for"],
    answer: "get a feel for",
  },
  {
    question: "Your application is _____ by midnight on Friday, so don't wait too long to submit it.",
    options: ["due", "enrolled", "deferred"],
    answer: "due",
  },
  {
    question: "She dreamed of attending a _____ like Harvard or Stanford.",
    options: ["top-tier school", "temple", "back-up school"],
    answer: "top-tier school",
  },
  {
    question: "He applied to a few _____ in case he didn't get into his first choice.",
    options: ["top-tier schools", "canyons", "back-up schools"],
    answer: "back-up schools",
  },
  {
    question: "After being accepted, she plans to _____ in the fall semester.",
    options: ["defer", "enroll", "persecute"],
    answer: "enroll",
  },
  {
    question: "He requested _____ so he could take a gap year before starting college.",
    options: ["back-up school", "top-tier school", "deferred admission"],
    answer: "deferred admission",
  },
  {
    question: "The _____ of the house was recently renovated, though the outside still looks old.",
    options: ["interior", "temple", "canyon"],
    answer: "interior",
  },
  {
    question: "The trip got cancelled because of the storm. _____ our weekend plans.",
    options: ["So much for", "Due to", "Home to"],
    answer: "So much for",
  },
  {
    question: "After a week of the extra workload, he told his boss he _____.",
    options: ["was due", "wanted out", "got a feel for it"],
    answer: "wanted out",
  },
  {
    question: "Some of the world's richest business _____ own newspapers, television networks, and movie studios.",
    options: ["publishers", "magnates", "populations"],
    answer: "magnates",
  },
  {
    question: "After years of writing, she finally found a _____ willing to print her novel.",
    options: ["influence", "publisher", "magnate"],
    answer: "publisher",
  },
  {
    question: "The new recycling program is a _____ law, so it only applies within the city limits.",
    options: ["municipal", "circulation", "domestic"],
    answer: "municipal",
  },
  {
    question: "The investigation revealed years of _____ among city officials who accepted bribes.",
    options: ["influence", "corruption", "circulation"],
    answer: "corruption",
  },
  {
    question: "The magazine's _____ dropped sharply after they raised the subscription price.",
    options: ["publisher", "population", "circulation"],
    answer: "circulation",
  },
  {
    question: "That tabloid is known for _____, printing shocking headlines that often turn out to be exaggerated or false.",
    options: ["yellow journalism", "corruption", "municipal reporting"],
    answer: "yellow journalism",
  },
  {
    question: "As a senior advisor, she has a lot of _____ over the president's decisions.",
    options: ["circulation", "influence", "population"],
    answer: "influence",
  },
  {
    question: "The city's _____ has doubled in the last twenty years due to new job opportunities.",
    options: ["corruption", "population", "circulation"],
    answer: "population",
  },
  {
    question: "Because so few people signed up, the gym decided to _____ two of its group classes.",
    options: ["put into", "left at that", "drop"],
    answer: "drop",
  },
  {
    question: "As a kid, she had to _____ the entire poem for her class recital.",
    options: ["learn by heart", "put into", "leave it at that"],
    answer: "learn by heart",
  },
  {
    question: "We disagreed about the plan, but neither of us wanted to argue further, so we just _____.",
    options: ["learned it by heart", "left it at that", "dropped it into"],
    answer: "left it at that",
  },
  {
    question: "He always tries to _____ everyone, even if it means changing his own plans.",
    options: ["please", "remember", "remind"],
    answer: "please",
  },
  {
    question: "I always forget my sister's birthday, so please _____ me a few days before.",
    options: ["remember", "remind", "please"],
    answer: "remind",
  },
  {
    question: "I still _____ the smell of my grandmother's kitchen, even though it's been years since she passed away.",
    options: ["learn by heart", "remind", "remember"],
    answer: "remember",
  },
  {
    question: "The mail carrier left a _____ on the porch, too big to fit through the mailbox slot.",
    options: ["receipt", "invitation", "parcel"],
    answer: "parcel",
  },
  {
    question: "Scrolling through everyone's vacation photos gave her a serious case of _____ she couldn't shake all weekend.",
    options: ["FOMO", "nostalgia", "boredom"],
    answer: "FOMO",
  },
  {
    question: "Running into his future business partner at a random coffee shop was pure _____.",
    options: ["habit", "serendipity", "obligation"],
    answer: "serendipity",
  },
  {
    question: "After months of negotiations, the _____ was a modest pay raise and a longer lunch break.",
    options: ["outset", "upshot of it all", "gist"],
    answer: "upshot of it all",
  },
  {
    question: "Every morning, the street vendor would _____ fake watches to tourists near the station.",
    options: ["hawk", "browse", "haggle"],
    answer: "hawk",
  },
  {
    question: "She skipped the party but spent the whole night refreshing her phone, gripped by _____ over what she might be missing.",
    options: ["boredom", "FOMO", "nostalgia"],
    answer: "FOMO",
  },
  {
    question: "The delivery service charges extra for any _____ over 20 kilograms.",
    options: ["parcel", "receipt", "invitation"],
    answer: "parcel",
  },
  {
    question: "The reviewer called the restaurant \"the finest dining experience known to man,\" clearly written _____ about a place that only serves hot dogs.",
    options: ["tongue in cheek", "word for word", "off the cuff"],
    answer: "tongue in cheek",
  },
  {
    question: "He said it was \"the best meal he'd ever had,\" but the way he raised an eyebrow made it clear he meant it _____.",
    options: ["in earnest", "off the record", "tongue in cheek"],
    answer: "tongue in cheek",
  },
  {
    question: "When his old friend switched to the rival team overnight, he shouted, \"You dirty _____!\"",
    options: ["fox", "rat", "wolf"],
    answer: "rat",
  },
  {
    question: "She was so _____ that she handed over her savings to a caller claiming to be from the bank.",
    options: ["cautious", "gullible", "generous"],
    answer: "gullible",
  },
  {
    question: "He got so _____ about the reunion that he could barely sit still on the flight home.",
    options: ["held back", "worked up", "let down"],
    answer: "worked up",
  },
  {
    question: "A new car right now is well _____ my means, so I'll keep driving the old one.",
    options: ["below", "beyond", "within"],
    answer: "beyond",
  },
  {
    question: "I was just _____ Karl's leg when I told him Marissa wanted to go out with him.",
    options: ["shaking", "pulling", "kicking"],
    answer: "pulling",
  },
  {
    question: "Go ahead and _____ of me all you want, I'm still wearing these shoes.",
    options: ["keep track", "make fun", "take care"],
    answer: "make fun",
  },
  {
    question: "I hope you won't _____ playing the piano just because of one bad performance.",
    options: ["look into", "give up", "carry on"],
    answer: "give up",
  },
  {
    question: "She went to _____ to avoid running into him, even changing her daily route to work.",
    options: ["limits", "extremes", "measures"],
    answer: "extremes",
  },
  {
    question: "He was _____ doubt the worst reporter the paper had ever hired.",
    options: ["under", "without", "against"],
    answer: "without",
  },
  {
    question: "That his own son could have done something so horrible is a _____.",
    options: ["walk in the park", "hard pill to swallow", "piece of cake"],
    answer: "hard pill to swallow",
  },
  {
    question: "Without much upkeep over the years, the old barn had become badly _____.",
    options: ["newly built", "run down", "well kept"],
    answer: "run down",
  },
  {
    question: "She turned to painting after the _____ of her long relationship.",
    options: ["makeup", "break-up", "buildup"],
    answer: "break-up",
  },
  {
    question: "He drove like a maniac, and we had one _____ after another.",
    options: ["wild guess", "near miss", "long shot"],
    answer: "near miss",
  },
  {
    question: "Don't bother with it now. _____ for a day or two before deciding.",
    options: ["Call it quits", "Let it ride", "Wrap it up"],
    answer: "Let it ride",
  },
  {
    question: "Keep it down, boys! Mother is _____ to put up with our arguing tonight.",
    options: ["in good spirits", "in no mood", "high and dry"],
    answer: "in no mood",
  },
  {
    question: "She's a very _____ child who's always forgetting her homework and leaving her backpack at school.",
    options: ["quick-witted", "absent-minded", "even-tempered"],
    answer: "absent-minded",
  },
  {
    question: "Jane told Bill he was dull. _____, she said he was unfriendly too.",
    options: ["As opposed to that", "On top of that", "In spite of that"],
    answer: "On top of that",
  },
  {
    question: "If there's a breach of the safety regulations, you're supposed to _____ right away.",
    options: ["take turns", "take action", "take chances"],
    answer: "take action",
  },
  {
    question: "She does all the housework herself. Nobody else ever _____ to help her out.",
    options: ["makes ends meet", "lifts a finger", "turns a blind eye"],
    answer: "lifts a finger",
  },
  {
    question: "_____! If my parents find out about this, they will go absolutely mad!",
    options: ["Never mind", "Oh no", "No problem"],
    answer: "Oh no",
  },
  {
    question: "When the man died under strange circumstances, investigators were called in and soon _____.",
    options: ["beat around the bush", "smelled a rat", "jumped to conclusions"],
    answer: "smelled a rat",
  },
  {
    question: "The sight of Joe eating raw fish is enough to _____.",
    options: ["cross my mind", "turn my stomach", "break my heart"],
    answer: "turn my stomach",
  },
  {
    question: "She'll manage very well if you just _____.",
    options: ["keep her company", "leave her alone", "help her out"],
    answer: "leave her alone",
  },
  {
    question: "To everyone's complete surprise, within minutes the ship _____.",
    options: ["went down in flames", "vanished into thin air", "ran out of steam"],
    answer: "vanished into thin air",
  },
  {
    question: "Steve's putting on a smile. I bet he's _____.",
    options: ["over the moon", "up to something", "down in the dumps"],
    answer: "up to something",
  },
  {
    question: "The burglar _____ the house without making a sound.",
    options: ["barged into", "sneaked into", "broke into"],
    answer: "sneaked into",
  },
  {
    question: "The lecture was so boring that many students _____.",
    options: ["showed up", "sneaked out", "spoke up"],
    answer: "sneaked out",
  },
  {
    question: "We still meet for lunch _____, but not as often as we used to.",
    options: ["day in and day out", "every now and then", "once and for all"],
    answer: "every now and then",
  },
  {
    question: "She knew they had meant it kindly, but it had hurt _____.",
    options: ["at the same time", "all the same", "once and for all"],
    answer: "all the same",
  },
  {
    question: "What an arrogant, _____ man, she thought.",
    options: ["level-headed", "big-headed", "warm-hearted"],
    answer: "big-headed",
  },
  {
    question: "They don't make a _____ out of minor irritations.",
    options: ["fresh start", "big deal", "clean sweep"],
    answer: "big deal",
  },
  {
    question: "\"I'll give you an allowance,\" he said. \"No big _____,\" she thought, unimpressed.",
    options: ["surprise", "deal", "chance"],
    answer: "deal",
  },
  {
    question: "To get that kind of job or promotion you would have to _____ someone's palm.",
    options: ["shake", "grease", "read"],
    answer: "grease",
  },
  {
    question: "Good for her! She took advantage of a _____ in the tax law.",
    options: ["verdict", "loophole", "clause"],
    answer: "loophole",
  },
  {
    question: "I acted like it was _____, when really it was breaking my heart.",
    options: ["second nature", "no big deal", "a close call"],
    answer: "no big deal",
  },
  {
    question: "Boss: I need someone to pick up my wife when she arrives from the airport.\nEmployee: _____.",
    options: ["Suit yourself", "Leave it to me", "Bear with me"],
    answer: "Leave it to me",
  },
  {
    question: "Why is your face all bruised? _____ you were in the middle of a fight.",
    options: ["I doubt", "I bet", "I wonder"],
    answer: "I bet",
  },
  {
    question: "One day I'll want to _____ and have a family.",
    options: ["move on", "settle down", "branch out"],
    answer: "settle down",
  },
  {
    question: "_____! It can't be as bad as all that.",
    options: ["Watch out", "Cheer up", "Hang on"],
    answer: "Cheer up",
  },
  {
    question: "I can't _____ about where to take my vacation.",
    options: ["change my tune", "keep an open mind", "make up my mind"],
    answer: "make up my mind",
  },
  {
    question: "I am trying to _____ to make this event a success.",
    options: ["think out of the box", "play it by ear", "read between the lines"],
    answer: "think out of the box",
  },
  {
    question: "I really hope this promotion _____ because it sounds fascinating.",
    options: ["slips my mind", "comes my way", "goes without saying"],
    answer: "comes my way",
  },
  {
    question: "Things are _____ for families across the country as the economy continues to rebound.",
    options: ["up in the air", "looking up", "hanging by a thread"],
    answer: "looking up",
  },
  {
    question: "I don't _____ going if no one else wants to.",
    options: ["care", "mind", "bother"],
    answer: "mind",
  },
  {
    question: "_____, it was she who approached me about the deal, not the other way around.",
    options: ["In the meantime", "For the record", "As a rule"],
    answer: "For the record",
  },
  {
    question: "Taking time out to get fit will _____ in the long run.",
    options: ["cut corners", "pay dividends", "raise the bar"],
    answer: "pay dividends",
  },
  {
    question: "Don't think that learning Dutch or any other language will be _____.",
    options: ["a close call", "a breeze", "a long shot"],
    answer: "a breeze",
  },
  {
    question: "I'm usually _____ when addressing a large crowd of people.",
    options: ["up in arms", "on the fence", "ill at ease"],
    answer: "ill at ease",
  },
  {
    question: "An experienced detective was _____ the case.",
    options: ["committed to", "referred to", "assigned to"],
    answer: "assigned to",
  },
  {
    question: "Never mind me! I am _____ having my sleep interrupted.",
    options: ["capable of", "used to", "fond of"],
    answer: "used to",
  },
  {
    question: "Henry _____, but the board still denied his proposal.",
    options: ["called it a day", "gave it his best shot", "let it slide"],
    answer: "gave it his best shot",
  },
  {
    question: "A previous divorce can make you _____ about getting married again.",
    options: ["think twice", "make peace", "change your mind"],
    answer: "think twice",
  },
  {
    question: "_____ my client, I would like to remind you of your obligations in this matter.",
    options: ["In spite of", "In light of", "On behalf of"],
    answer: "On behalf of",
  },
  {
    question: "You can _____ him to give you a reasonable bill for your services.",
    options: ["settle for", "cash in on", "bank on"],
    answer: "bank on",
  },
  {
    question: "If you cancel now you'll _____ all my arrangements.",
    options: ["hold up", "mess up", "wrap up"],
    answer: "mess up",
  },
  {
    question: "The teacher asked the students to _____ short dialogues by themselves.",
    options: ["make up", "brush up", "look up"],
    answer: "make up",
  },
  {
    question: "He leans over backwards to _____ for what he has lost.",
    options: ["make up", "own up", "give up"],
    answer: "make up",
  },
  {
    question: "Road accident victims _____ almost a quarter of the hospital's patients.",
    options: ["look after", "make up", "stand for"],
    answer: "make up",
  },
  {
    question: "We often quarrel, but we always _____ soon after.",
    options: ["give up", "make up", "act up"],
    answer: "make up",
  },
  {
    question: "It's all very well having a joke, but sometimes you _____.",
    options: ["go without saying", "go too far", "go the extra mile"],
    answer: "go too far",
  },
  {
    question: "Do you _____ coming up with ideas? If so, we would love to hear from you.",
    options: ["have a say in", "have a knack for", "have a hunch about"],
    answer: "have a knack for",
  },
  {
    question: "Guys play basketball, goof off, gamble, _____, argue, and ignore their women.",
    options: ["show up", "drop by", "hang out"],
    answer: "hang out",
  },
  {
    question: "I'm afraid I'll be _____ tomorrow at ten, so let's meet another time.",
    options: ["held back", "tied up", "worn out"],
    answer: "tied up",
  },
  {
    question: "Even the most _____ doctors can forget to suggest routine tests.",
    options: ["absent-minded", "well-intentioned", "experienced"],
    answer: "well-intentioned",
  },
  {
    question: "We will be _____ that a quick thaw is on its way.",
    options: ["keeping a straight face", "keeping our fingers crossed", "keeping an open mind"],
    answer: "keeping our fingers crossed",
  },
  {
    question: "I stay away from that old house on the corner. It gives me _____!",
    options: ["the runaround", "the creeps", "the cold shoulder"],
    answer: "the creeps",
  },
  {
    question: "That movie really _____ me. I didn't expect it to be so good!",
    options: ["let down", "wore out", "knocked out"],
    answer: "knocked out",
  },
  {
    question: "You will _____ at the party in your new dress.",
    options: ["make a point", "make a hit", "make a scene"],
    answer: "make a hit",
  },
  {
    question: "Mom can't wait for the flowers to bloom and _____ our yard.",
    options: ["brighten up", "clean up", "fix up"],
    answer: "brighten up",
  },
  {
    question: "I meant to pick up the tickets, but it just _____.",
    options: ["slipped my mind", "changed my mind", "crossed my mind"],
    answer: "slipped my mind",
  },
  {
    question: "The code of conduct required that he strike back or _____.",
    options: ["take the blame", "back down", "lose face"],
    answer: "lose face",
  },
  {
    question: "Fresh evidence has recently _____ that suggests he didn't commit the murder.",
    options: ["come to terms", "come to light", "come into play"],
    answer: "come to light",
  },
  {
    question: "When we took the test, Tom _____ and started early.",
    options: ["made a run for it", "jumped the gun", "beat around the bush"],
    answer: "jumped the gun",
  },
  {
    question: "We're advising all our investors to _____ till the market improves.",
    options: ["hang back", "sit tight", "stand by"],
    answer: "sit tight",
  },
  {
    question: "He got the promotion just because he was _____ to the higher-ups.",
    options: ["a go-getter", "a bootlicker", "a wallflower"],
    answer: "a bootlicker",
  },
  {
    question: "It is only natural for youngsters to _____ the excitement of driving a fast car.",
    options: ["dread", "crave", "resent"],
    answer: "crave",
  },
  {
    question: "His meeting with the Holtzes seemed to have refreshed Alvin and _____.",
    options: ["changed his tune", "cleared his head", "opened his eyes"],
    answer: "cleared his head",
  },
  {
    question: "This brother lived _____, and his wife popped in and out all the time.",
    options: ["downtown", "next door", "close by"],
    answer: "next door",
  },
  {
    question: "They were hounded _____ by the press, with no privacy at all.",
    options: ["through thick and thin", "once and for all", "day and night"],
    answer: "day and night",
  },
  {
    question: "He has compiled a record _____ in its wretchedness.",
    options: ["second to none", "few and far between", "larger than life"],
    answer: "second to none",
  },
  {
    question: "There are women who have silver hair _____.",
    options: ["to spare", "to speak of", "to die for"],
    answer: "to die for",
  },
  {
    question: "Freddie was _____ a glass of water. He was so thirsty.",
    options: ["keen on", "dying for", "fed up with"],
    answer: "dying for",
  },
  {
    question: "An old friend _____ me the day before yesterday.",
    options: ["ran into", "called on", "checked in on"],
    answer: "called on",
  },
  {
    question: "_____ hamburgers, I am as hungry as a hawk.",
    options: ["Speaking of", "Along with", "As opposed to"],
    answer: "Speaking of",
  },
  {
    question: "_____ going to the theater tonight?",
    options: ["How come", "How about", "What do you say to"],
    answer: "What do you say to",
  },
  {
    question: "Members of the public would _____ to become part owners of the corporation.",
    options: ["take a rain check", "run out of luck", "jump at the chance"],
    answer: "jump at the chance",
  },
  {
    question: "There's something odd about him, but I can't quite _____.",
    options: ["get to the bottom of it", "wrap my head around it", "put my finger on it"],
    answer: "put my finger on it",
  },
  {
    question: "The researchers and institutions in this network are _____.",
    options: ["few and far between", "a dime a dozen", "the cream of the crop"],
    answer: "the cream of the crop",
  },
  {
    question: "We've got the best _____ in the country working on this problem.",
    options: ["eye", "hand", "brain"],
    answer: "brain",
  },
  {
    question: "He tried to _____ with people he knew to avoid being called up.",
    options: ["foot the bill", "call the shots", "pull strings"],
    answer: "pull strings",
  },
  {
    question: "This country prides itself on letting people _____, relying on no one else's work but their own.",
    options: ["call it quits", "toe the line", "make their own way"],
    answer: "make their own way",
  },
  {
    question: "I'm convinced there is something _____ going on.",
    options: ["far-fetched", "run-down", "fishy"],
    answer: "fishy",
  },
  {
    question: "I've far better things to do than _____ arguing with you.",
    options: ["bite my tongue", "waste my breath", "hold my tongue"],
    answer: "waste my breath",
  },
  {
    question: "I'd like to help you, but my _____.",
    options: ["hands are tied", "feet are cold", "back is turned"],
    answer: "hands are tied",
  },
  {
    question: "I'm too tired to _____ any nonsense tonight.",
    options: ["look down on", "get away with", "put up with"],
    answer: "put up with",
  },
  {
    question: "Learn the saying! You can't _____.",
    options: ["have your cake and eat it too", "judge a book by its cover", "count your chickens before they hatch"],
    answer: "judge a book by its cover",
  },
  {
    question: "She doesn't care about other people's feelings. She's _____.",
    options: ["beside herself", "not herself", "full of herself"],
    answer: "full of herself",
  },
  {
    question: "Do not _____, my dear friends, but leave room for God's wrath.",
    options: ["make amends", "take revenge", "hold a grudge"],
    answer: "take revenge",
  },
  {
    question: "He put me down in front of my own employees. He won't _____ it!",
    options: ["get away with", "come up with", "live to regret"],
    answer: "get away with",
  },
  {
    question: "I felt I was _____ myself, wearing such a silly costume in broad daylight.",
    options: ["getting the better of", "making a laughingstock of", "keeping an eye on"],
    answer: "making a laughingstock of",
  },
  {
    question: "After she insulted me, all I thought about was how I could _____ with her.",
    options: ["settle down", "make peace", "get even"],
    answer: "get even",
  },
  {
    question: "You may not like her, but _____ she's a good teacher.",
    options: ["all in all", "for that matter", "fair is fair"],
    answer: "fair is fair",
  },
  {
    question: "I don't mean to _____, but the fact is you're the one who is left out.",
    options: ["pick on you", "hurt your feelings", "get on your nerves"],
    answer: "hurt your feelings",
  },
  {
    question: "Keith: We must continue our discussion of the Wilson project.\nSally: _____!",
    options: ["That's more like it", "Here we go again", "So far so good"],
    answer: "Here we go again",
  },
  {
    question: "Regulators _____ those infractions, and thousands of consumers suffered for it.",
    options: ["gave the green light to", "turned a blind eye to", "kept a close eye on"],
    answer: "turned a blind eye to",
  },
  {
    question: "Sam is as _____ as ever as he contends with unrequited feelings.",
    options: ["carefree", "grumpy", "outgoing"],
    answer: "grumpy",
  },
  {
    question: "It rained, it snowed, and, _____, our flight was canceled.",
    options: ["all things considered", "to crown it all", "for the record"],
    answer: "to crown it all",
  },
  {
    question: "Everything in her wardrobe must be hopelessly _____.",
    options: ["out of the question", "out of the ordinary", "out of date"],
    answer: "out of date",
  },
  {
    question: "David lit up many gatherings with his _____ forthright comments.",
    options: ["typically", "barely", "hardly"],
    answer: "typically",
  },
  {
    question: "It's the worst cover-up I have ever seen. You're _____.",
    options: ["reading between the lines", "falsifying the facts", "bending the rules"],
    answer: "falsifying the facts",
  },
  {
    question: "Whenever we're going to a party, it _____ for my wife to get ready.",
    options: ["takes a hint", "takes ages", "takes a toll"],
    answer: "takes ages",
  },
  {
    question: "He was incapable of leading a bowling team, _____ a country.",
    options: ["not to be confused with", "let alone", "as opposed to"],
    answer: "let alone",
  },
  {
    question: "I hear Sarah is _____ with sales from her latest novel.",
    options: ["making ends meet", "making a scene", "making a bundle"],
    answer: "making a bundle",
  },
  {
    question: "If I'm inside for three days _____, I go crazy.",
    options: ["in a row", "at a time", "on end"],
    answer: "in a row",
  },
  {
    question: "His _____ girlfriend refuses to get engaged without a ring and diamond earrings to match.",
    options: ["high-maintenance", "easygoing", "down-to-earth"],
    answer: "high-maintenance",
  },
  {
    question: "It's unfair to _____ other people's misfortunes.",
    options: ["get the hang of", "take advantage of", "make the most of"],
    answer: "take advantage of",
  },
  {
    question: "Wow, that performance was _____!",
    options: ["out of line", "out of this world", "out of the blue"],
    answer: "out of this world",
  },
  {
    question: "You think Tom stole your watch? Impossible! He has _____.",
    options: ["a thick skin", "a heart of gold", "a chip on his shoulder"],
    answer: "a heart of gold",
  },
  {
    question: "I wanted to have the new car, but Sally _____.",
    options: ["beat me to the punch", "let me off the hook", "gave me the benefit of the doubt"],
    answer: "beat me to the punch",
  },
  {
    question: "Steve dropped out of school and _____ as a car dealer.",
    options: ["went into business", "made a name for himself", "turned over a new leaf"],
    answer: "went into business",
  },
  {
    question: "Enough humiliation already! Someone has got to stand up and say _____.",
    options: ["so much for that", "that's enough", "enough is enough"],
    answer: "enough is enough",
  },
  {
    question: "They're only proposing the law to _____ important issues.",
    options: ["shed light on", "divert attention from", "get to grips with"],
    answer: "divert attention from",
  },
  {
    question: "The younger generation is very _____ get an education.",
    options: ["keen to", "bound to", "quick to"],
    answer: "keen to",
  },
  {
    question: "You burned your arm on purpose! Stop _____.",
    options: ["playing along", "playing it safe", "playing the victim"],
    answer: "playing the victim",
  },
  {
    question: "People would suspect a _____ if public hearings aren't held.",
    options: ["showdown", "cover-up", "close call"],
    answer: "cover-up",
  },
  {
    question: "The candidate has been accused of using _____ during the debate to undermine the credibility of his opponent.",
    options: ["smoke and mirrors", "give and take", "tooth and nail"],
    answer: "smoke and mirrors",
  },
  {
    question: "Don't think you can fool me with that old ruse. _____, you know.",
    options: ["I have half a mind to leave", "I wasn't born yesterday", "I don't have all day"],
    answer: "I wasn't born yesterday",
  },
  {
    question: "Mom is now calling me every hour, and I'm sure you _____. What exactly did you tell her?",
    options: ["have the upper hand", "have a finger in the pie", "have a bone to pick"],
    answer: "have a finger in the pie",
  },
  {
    question: "The world's destiny is being dictated by leaders who _____.",
    options: ["cannot make heads or tails of it", "cannot see the forest for the trees", "cannot see farther than the end of their nose"],
    answer: "cannot see farther than the end of their nose",
  },
  {
    question: "You want to be known as a _____ who gets the job done well.",
    options: ["go-getter", "wallflower", "know-it-all"],
    answer: "go-getter",
  },
  {
    question: "Don't worry about the dent. It's _____.",
    options: ["not out of the woods", "not the end of the world", "not my cup of tea"],
    answer: "not the end of the world",
  },
  {
    question: "It's amazing what people will do to _____ paying taxes.",
    options: ["keep up with", "get out of", "come down with"],
    answer: "get out of",
  },
  {
    question: "Oh man! I can't lift up my head. I'm completely _____.",
    options: ["stuck", "torn", "beat"],
    answer: "beat",
  },
  {
    question: "It's _____ that they must sell their house before they can buy another.",
    options: ["as plain as day", "as clear as mud", "as easy as pie"],
    answer: "as plain as day",
  },
  {
    question: "The only reason she stays late at work is to receive _____ from her boss!",
    options: ["a pat on the back", "the cold shoulder", "the short end of the stick"],
    answer: "a pat on the back",
  },
  {
    question: "Thank you for your generous donation. I'm sure it will _____ for the families who need it most.",
    options: ["go a long way", "go down in history", "go without saying"],
    answer: "go a long way",
  },
  {
    question: "We were two moms _____, both exhausted from sleepless nights with our newborns, and able to make each other feel better.",
    options: ["in the same boat", "on the same page", "at the same time"],
    answer: "in the same boat",
  },
  {
    question: "Obviously, you've been _____. Why did you give him five thousand francs?",
    options: ["put on hold", "taken for a ride", "given the benefit of the doubt"],
    answer: "taken for a ride",
  },
  {
    question: "We hope we can _____ your continued cooperation and support.",
    options: ["look down on", "keep tabs on", "count on"],
    answer: "count on",
  },
  {
    question: "I just lay in the sun for a week and did nothing. It was _____.",
    options: ["heaven", "a dog's life", "no picnic"],
    answer: "heaven",
  },
  {
    question: "Tom always _____, so if he promised to help you move, then he'll be here.",
    options: ["gets cold feet", "keeps his word", "has a change of heart"],
    answer: "keeps his word",
  },
  {
    question: "I had a great childhood and _____ those days very fondly.",
    options: ["look forward to", "look back on", "look down on"],
    answer: "look back on",
  },
  {
    question: "Their marriage _____ when she found out about her husband's affair.",
    options: ["fell through", "fell flat", "fell apart"],
    answer: "fell apart",
  },
  {
    question: "The watch parts _____ and jumbled up.",
    options: ["fell apart", "fell through", "fell out"],
    answer: "fell apart",
  },
  {
    question: "The old lady will _____ if she still gets no news from her son.",
    options: ["go a long way", "go nuts", "go without saying"],
    answer: "go nuts",
  },
  {
    question: "Don't _____ about our arrangements. At least for a couple of days.",
    options: ["let on", "let down", "let up"],
    answer: "let on",
  },
  {
    question: "Poor Mike! He's been leading _____ since his wife left him.",
    options: ["a charmed life", "a dog's life", "a double life"],
    answer: "a dog's life",
  },
  {
    question: "_____ makes you a liar.",
    options: ["Giving one's word", "Going back on one's word", "Keeping one's word"],
    answer: "Going back on one's word",
  },
  {
    question: "This job is _____; the pay is good but my boss is a real Simon Legree.",
    options: ["a walk in the park", "no bed of roses", "a piece of cake"],
    answer: "no bed of roses",
  },
  {
    question: "She put me on hold with nothing but elevator music, and I ended up _____ for ten minutes.",
    options: ["holding my breath", "biting my nails", "twiddling my thumbs"],
    answer: "twiddling my thumbs",
  },
  {
    question: "I'm going to _____ for you and present your idea to the boss.",
    options: ["watch my step", "stick my neck out", "keep an eye out"],
    answer: "stick my neck out",
  },
  {
    question: "Find yourself a _____ university, preferably one with room to spare.",
    options: ["hand-me-down", "top-notch", "run-of-the-mill"],
    answer: "top-notch",
  },
  {
    question: "The government is trying to _____ its commitment to reduce pollution.",
    options: ["look into", "back out of", "catch up on"],
    answer: "back out of",
  },
  {
    question: "Giving him such a powerful car when he's only just learned to drive is _____.",
    options: ["a leap of faith", "asking for trouble", "a close call"],
    answer: "asking for trouble",
  },
  {
    question: "The trash really _____; why don't you take it out?",
    options: ["piles up", "stinks", "drags on"],
    answer: "stinks",
  },
  {
    question: "_____, but you have stated everything exactly backwards.",
    options: ["I couldn't care less", "I beg to differ", "I dare say"],
    answer: "I beg to differ",
  },
  {
    question: "Orders slowed, causing sales to _____ dramatically.",
    options: ["fall behind", "fall short", "fall off"],
    answer: "fall off",
  },
  {
    question: "I've done all I can for him, and now I'm _____ him.",
    options: ["washing my hands of", "keeping tabs on", "turning my back on"],
    answer: "washing my hands of",
  },
  {
    question: "I can't give you any more pocket money, Alice. _____, you know.",
    options: ["Money doesn't grow on trees", "Every penny counts", "A penny saved is a penny earned"],
    answer: "Money doesn't grow on trees",
  },
  {
    question: "It's time you quit that _____ job and find a more rewarding one.",
    options: ["dead-end", "run-down", "hands-on"],
    answer: "dead-end",
  },
  {
    question: "The storm _____ the phones all around the country.",
    options: ["knocked down", "knocked out", "knocked off"],
    answer: "knocked out",
  },
  {
    question: "Those sleeping pills _____ for ten hours.",
    options: ["let me down", "knocked me out", "wore me out"],
    answer: "knocked me out",
  },
  {
    question: "The response to my work has absolutely _____.",
    options: ["worn me out", "let me down", "knocked me out"],
    answer: "knocked me out",
  },
  {
    question: "Mark my words! We'll _____ from the first round.",
    options: ["knock them down", "knock them out", "knock them off"],
    answer: "knock them out",
  },
  {
    question: "Don't _____. The battery's dead.",
    options: ["wear yourself out", "push yourself too hard", "knock yourself out"],
    answer: "knock yourself out",
  },
  {
    question: "Thomas is a computer _____. He works nonstop for hours and hours!",
    options: ["wallflower", "junkie", "go-getter"],
    answer: "junkie",
  },
  {
    question: "My mind was filled with _____ thoughts of death.",
    options: ["half-baked", "morbid", "far-fetched"],
    answer: "morbid",
  },
  {
    question: "He's amazingly cheerful considering all he's had to _____.",
    options: ["go through", "go along with", "go without"],
    answer: "go through",
  },
  {
    question: "_____ is that the relevant economic context is not Europe but globalization.",
    options: ["The benefit of the doubt", "The heart of the matter", "The long and short of it"],
    answer: "The heart of the matter",
  },
  {
    question: "Peter was a shameless _____ with all the girls in school.",
    options: ["show-off", "know-it-all", "flirt"],
    answer: "flirt",
  },
  {
    question: "He felt appalled by the whole idea of marriage, so we _____.",
    options: ["fell apart", "broke up", "fell through"],
    answer: "broke up",
  },
  {
    question: "He turned the whole house _____ looking for his checkbook.",
    options: ["upside down", "back to front", "inside out"],
    answer: "upside down",
  },
  {
    question: "That kitten _____ a human baby.",
    options: ["acts like", "looks like", "sounds like"],
    answer: "sounds like",
  },
  {
    question: "He earned good money being beaten _____ as a prize fighter.",
    options: ["tooth and nail", "black and blue", "hand and foot"],
    answer: "black and blue",
  },
  {
    question: "She and her brother are _____. They both tell lies all the time.",
    options: ["cut from the same cloth", "in the same boat", "on the same page"],
    answer: "cut from the same cloth",
  },
  {
    question: "The point is they were _____ for daring to complain.",
    options: ["shown the ropes", "given a run for their money", "taught a lesson"],
    answer: "taught a lesson",
  },
  {
    question: "When the teacher saw the two boys shove each other, she came running over to try to _____.",
    options: ["call off the fight", "break up the fight", "settle the score"],
    answer: "break up the fight",
  },
  {
    question: "The movie theater _____ that guy for sneaking food inside.",
    options: ["let go of", "kicked out", "threw out"],
    answer: "kicked out",
  },
  {
    question: "Don't _____; your writing is really excellent!",
    options: ["beat yourself up", "sell yourself short", "kid yourself"],
    answer: "sell yourself short",
  },
  {
    question: "He and I dated for a while, but it _____.",
    options: ["fell behind", "went nowhere", "fell short"],
    answer: "went nowhere",
  },
  {
    question: "I didn't do it. I swear to that with a _____.",
    options: ["straight face", "level head", "clear conscience"],
    answer: "clear conscience",
  },
  {
    question: "My children always _____ about who made the mess in the house.",
    options: ["go around in circles", "go on and on", "go back and forth"],
    answer: "go around in circles",
  },
  {
    question: "She is still so young. It is sad to see her being so caught up in the _____.",
    options: ["rough patch", "rat race", "wild goose chase"],
    answer: "rat race",
  },
  {
    question: "You don't have to _____ by accepting the job in Alaska during winter.",
    options: ["jump through hoops", "go out on a limb", "bite off more than you can chew"],
    answer: "bite off more than you can chew",
  },
  {
    question: "The thought of working for a faceless corporation really _____.",
    options: ["throws me off", "gets me down", "wears me out"],
    answer: "gets me down",
  },
  {
    question: "In the absence of adequate data, the surveyors are just _____, making no real progress.",
    options: ["going around in circles", "going through the motions", "going back and forth"],
    answer: "going around in circles",
  },
  {
    question: "Children, recess is over, so _____ and take your seats, please.",
    options: ["settle down", "shape up", "simmer down"],
    answer: "simmer down",
  },
  {
    question: "I'm going to put my feet up and _____ this afternoon.",
    options: ["let my hair down", "take it easy", "call it a day"],
    answer: "take it easy",
  },
  {
    question: "You should not _____ by success or get disappointed by failure.",
    options: ["get carried away", "get the upper hand", "get cold feet"],
    answer: "get carried away",
  },
  {
    question: "The art of Early American furniture painters is _____ studying.",
    options: ["well worth", "worth its weight in gold", "worth its salt"],
    answer: "well worth",
  },
  {
    question: "Right now, her condition is stable. We promise to _____ as she improves.",
    options: ["keep you in the loop", "keep you company", "keep you posted"],
    answer: "keep you posted",
  },
  {
    question: "I'll _____ once I get settled in at school.",
    options: ["drop you a line", "give you a ring", "keep you posted"],
    answer: "drop you a line",
  },
  {
    question: "Sports stars earn _____ for pushing everything from shoes to soft drinks.",
    options: ["big bucks", "their fair share", "a run for their money"],
    answer: "big bucks",
  },
  {
    question: "We'll have to cost this carefully, but as _____ I'd say it'll be about two million dollars.",
    options: ["a rough patch", "a close call", "a ballpark figure"],
    answer: "a ballpark figure",
  },
  {
    question: "_____ a few years, they are contemporaries.",
    options: ["Give or take", "Come what may", "More or less"],
    answer: "Give or take",
  },
  {
    question: "Oh! I can't afford this now. I don't _____ enough money _____.",
    options: ["have / in store", "have / on me", "have / on hand"],
    answer: "have / on me",
  },
  {
    question: "How did you back out of the weekend arrangement without asking me first? You're really brilliant at putting me _____!",
    options: ["on thin ice", "in an awkward position", "on the spot"],
    answer: "in an awkward position",
  },
  {
    question: "He's seven times as quick and he's only 20 years old. _____!",
    options: ["give me a hand", "give me a break", "give me a shot"],
    answer: "give me a break",
  },
  {
    question: "I'm sorry I didn't call you back sooner. It totally _____.",
    options: ["slipped my mind", "blew my mind", "crossed my mind"],
    answer: "slipped my mind",
  },
  {
    question: "It's a lot of information to absorb _____.",
    options: ["once in a while", "once and for all", "all at once"],
    answer: "all at once",
  },
  {
    question: "_____, I know of two people who are coming, but I'm pretty sure more said they'd be here.",
    options: ["As far as I know", "Off the top of my head", "Now that I think of it"],
    answer: "Off the top of my head",
  },
  {
    question: "I can't quote the exact statistics for you _____. They're in this report.",
    options: ["at the drop of a hat", "off the top of my head", "at a moment's notice"],
    answer: "off the top of my head",
  },
  {
    question: "Wait, _____ a little. What did you say that phone number was?",
    options: ["back up", "slow down", "hold on"],
    answer: "back up",
  },
  {
    question: "It does make sense to _____ my French before I go to Paris.",
    options: ["brush up on", "keep up with", "catch up on"],
    answer: "brush up on",
  },
  {
    "question": "I don't mean to _____, but this pasta sauce I made is quite delicious!",
    "options": ["twiddle my thumbs", "blow my own horn", "wear my heart on my sleeve"],
    "answer": "blow my own horn"
  },
  {
    "question": "The silent treatment isn't helping the situation between you two, so just _____ already!",
    "options": ["clear the air", "break the ice", "call it quits"],
    "answer": "clear the air"
  },
  {
    "question": "As time passed, and with his gentle reassurance, she finally _____ to me about her past.",
    "options": ["caught on", "came around", "opened up"],
    "answer": "opened up"
  },
  {
    "question": "Starting your own business is really tough. I had to _____.",
    "options": ["learn it the hard way", "get the hang of it", "call it a day"],
    "answer": "learn it the hard way"
  },
  {
    "question": "After the horrible events of the last week, we are all _____.",
    "options": ["on the fence", "on edge", "on the ball"],
    "answer": "on edge"
  },
  {
    "question": "Standing in those massive holiday lines completely _____. I need to sit down.",
    "options": ["throws me off", "gets me down", "wipes me out"],
    "answer": "wipes me out"
  },
  {
    "question": "Those who do not know history are _____ repeat it.",
    "options": ["bound to", "doomed to", "meant to"],
    "answer": "doomed to"
  },
  {
    "question": "Don't _____. It was just a minor misunderstanding, not the end of the world.",
    "options": ["make a mountain out of a molehill", "beat a dead horse", "cry over spilled milk"],
    "answer": "make a mountain out of a molehill"
  },
  {
    "question": "I didn't observe anything _____ about her behavior that day.",
    "options": ["out of the blue", "out of the ordinary", "out of hand"],
    "answer": "out of the ordinary"
  },
  {
    "question": "An old friend might well be able to _____ to her and help her see reason.",
    "options": ["get through", "get over", "get around"],
    "answer": "get through"
  },
  {
    "question": "Be sure to _____ if anything changes between now and then.",
    "options": ["think it over", "take it easy", "keep me posted"],
    "answer": "keep me posted"
  },
  {
    "question": "I haven't talked to her in years, so I wouldn't know how to _____ anymore.",
    "options": ["get along with her", "get hold of her", "get over her"],
    "answer": "get hold of her"
  },
  {
    "question": "Sorry, the vending machine is _____. You'll have to go across the street to get a snack.",
    "options": ["out of order", "out of stock", "out of reach"],
    "answer": "out of order"
  },
  {
    question: "Sam was obviously _____ in love with his new bride, and Martha was clearly content.",
    options: ["fed up", "at his wit's end", "head over heels"],
    answer: "head over heels",
  },
  {
    question: "I don't mean to _____, but this pasta sauce I made is quite delicious!",
    options: ["twiddle my thumbs", "blow my own horn", "wear my heart on my sleeve"],
    answer: "blow my own horn",
  },
  {
    question: "The silent treatment isn't helping the situation between you two, so just _____ already!",
    options: ["clear the air", "break the ice", "call it quits"],
    answer: "clear the air",
  },
  {
    question: "As time passed, and with his gentle reassurance, she finally _____ to me about her past.",
    options: ["caught on", "came around", "opened up"],
    answer: "opened up",
  },
  {
    question: "Starting your own business is really tough. I had to _____.",
    options: ["learn it the hard way", "get the hang of it", "call it a day"],
    answer: "learn it the hard way",
  },
  {
    question: "After the horrible events of the last week, we are all _____.",
    options: ["on the fence", "on edge", "on the ball"],
    answer: "on edge",
  },
  {
    question: "Standing in those massive holiday lines completely _____. I need to sit down.",
    options: ["throws me off", "gets me down", "wipes me out"],
    answer: "wipes me out",
  },
  {
    question: "Those who do not know history are _____ repeat it.",
    options: ["bound to", "doomed to", "meant to"],
    answer: "doomed to",
  },
  {
    question: "Don't _____. It was just a minor misunderstanding, not the end of the world.",
    options: ["make a mountain out of a molehill", "beat a dead horse", "cry over spilled milk"],
    answer: "make a mountain out of a molehill",
  },
  {
    question: "I didn't observe anything _____ about her behavior that day.",
    options: ["out of the blue", "out of the ordinary", "out of hand"],
    answer: "out of the ordinary",
  },
  {
    question: "An old friend might well be able to _____ to her and help her see reason.",
    options: ["get through", "get over", "get around"],
    answer: "get through",
  },
  {
    question: "Be sure to _____ if anything changes between now and then.",
    options: ["think it over", "take it easy", "keep me posted"],
    answer: "keep me posted",
  },
  {
    question: "I haven't talked to her in years, so I wouldn't know how to _____ anymore.",
    options: ["get along with her", "get hold of her", "get over her"],
    answer: "get hold of her",
  },
  {
    question: "Sorry, the vending machine is _____. You'll have to go across the street to get a snack.",
    options: ["out of order", "out of stock", "out of reach"],
    answer: "out of order",
  },
  {
    question: "Sam was obviously _____ in love with his new bride, and Martha was clearly content.",
    options: ["over the moon", "on cloud nine", "head over heels"],
    answer: "head over heels",
  },
  {
    question: "He was fastidious in his preparation for _____.",
    options: ["the big picture", "the big day", "the big leagues"],
    answer: "the big day",
  },
  {
    question: "Unless you get through to Steve by phone, just _____. He will catch up later on.",
    options: ["leave him a message", "give him a ring", "drop him a line"],
    answer: "leave him a message",
  },
  {
    question: "You've _____ wrong; I know he seems gruff, but he's a total sweetheart.",
    options: ["got me", "got him", "got us"],
    answer: "got him",
  },
  {
    question: "You shouldn't be eating that burger as long as you're trying to _____.",
    options: ["lose your appetite", "watch your step", "lose weight"],
    answer: "lose weight",
  },
  {
    question: "Let's slow down for heaven's sake! _____.",
    options: ["My head is spinning", "I've lost my train of thought", "I'm at my wit's end"],
    answer: "My head is spinning",
  },
  {
    question: "My doctor put me _____ of nothing but fruits, vegetables, and nuts.",
    options: ["on a schedule", "on a diet", "on a budget"],
    answer: "on a diet",
  },
  {
    question: "Hearing the gruesome details of the murder made me _____.",
    options: ["lose my nerve", "lose my train of thought", "lose my appetite"],
    answer: "lose my appetite",
  },
  {
    question: "She wondered why the _____ Miranda was going along with what Adam wanted.",
    options: ["strong-willed", "even-tempered", "level-headed"],
    answer: "strong-willed",
  },
  {
    question: "Let's get the ball rolling, boys; _____ with making excuses!",
    options: ["no wonder", "enough already", "so much for"],
    answer: "enough already",
  },
  {
    question: "How on earth could she stay there? The place _____ like a sewer!",
    options: ["stunk", "reeks of trouble", "smells fishy"],
    answer: "stunk",
  },
  {
    question: 'Bob: "Well, I have to confess that I made a mess of the event." Luna: "_____"',
    options: ["Don't beat yourself up!", "Way to go!", "That's the spirit!"],
    answer: "Don't beat yourself up!",
  },
  {
    question: "Bob often tries to _____ between meetings.",
    options: ["grab a bite", "catch some z's", "take five"],
    answer: "grab a bite",
  },
  {
    question: "On second thought, I see that by doing this we might be _____ another failure.",
    options: ["in on", "in over", "in for"],
    answer: "in for",
  },
  {
    question: "The wood was so _____ you could put your finger through it.",
    options: ["worn", "rotten", "frail"],
    answer: "rotten",
  },
  {
    question: "I used to _____ in the evening when my parents were on night shifts.",
    options: ["eat out", "grab a bite", "dine in"],
    answer: "eat out",
  },
  {
    question: "You can _____ that we will do everything we can to get your money back.",
    options: ["bet your life", "take it easy", "rest assured"],
    answer: "rest assured",
  },
  {
    question: "Police believe the items are a major _____ in the six-week-old inquiry.",
    options: ["breakthrough", "cover-up", "setback"],
    answer: "breakthrough",
  },
  {
    question: 'A: "I will be the one in charge for the last quarter." B: "_____"',
    options: ["Big deal!", "Good for you!", "Way to go!"],
    answer: "Big deal!",
  },
  {
    question: "Many analysts warned that an economic crash was _____, but none of the world's governments paid any mind.",
    options: ["on the horizon", "out of the blue", "in the cards"],
    answer: "on the horizon",
  },
  {
    question: "This firm has _____ since the new management took over.",
    options: ["gone to the dogs", "gone through the motions", "lost its touch"],
    answer: "gone to the dogs",
  },
  {
    question: "The proposal to build a golf course next to the airport is still _____.",
    options: ["on the fence", "in the works", "up in the air"],
    answer: "up in the air",
  },
  {
    question: "We've finally started having a bit of a _____ with our latest products.",
    options: ["winning streak", "run for our money", "leg up"],
    answer: "winning streak",
  },
  {
    question: "Don't be angry. I will _____ for damage to your car.",
    options: ["pay through the nose", "foot the bill", "take the hit"],
    answer: "foot the bill",
  },
  {
    question: "I know we have a lot to discuss, but _____; has anyone heard back from the printer?",
    options: ["first things first", "all things considered", "for what it's worth"],
    answer: "first things first",
  },
  {
    question: "This scientist has _____ a new theory in his research field.",
    options: ["put up with", "put forth", "put off"],
    answer: "put forth",
  },
  {
    question: "The lobbyists don't seem to be doing anything to stop this tax bill. They're _____.",
    options: ["fiddling while Rome burns", "beating around the bush", "dragging their feet"],
    answer: "fiddling while Rome burns",
  },
  {
    question: "You are not in charge of the universe; you are _____ yourself.",
    options: ["in tune with", "in touch with", "in charge of"],
    answer: "in charge of",
  },
  {
    question: "When you're _____ and need to look stylish, black will always save the day.",
    options: ["worn out", "at a loss", "pressed for time"],
    answer: "pressed for time",
  },
  {
    question: "The mountaineers _____ their base camp at the foot of the mountain.",
    options: ["set up", "set off", "set out"],
    answer: "set up",
  },
  {
    question: "The doctor will be here soon. _____, try and relax.",
    options: ["In the meantime", "Once and for all", "By and large"],
    answer: "In the meantime",
  },
  {
    question: "Jen's going to have to _____ if she wants to get her story in tomorrow's newspaper; It's almost time to send it to the publisher!",
    options: ["take your time", "race against time", "kill some time"],
    answer: "race against time",
  },
  {
    question: "_____, I've worked as a journalist for six years. I know this stuff inside out.",
    options: ["For your information", "As far as it goes", "As luck would have it"],
    answer: "For your information",
  },
  {
    question: "The world is being _____ by the string of multimedia technologies coming down the pike.",
    options: ["turned inside out", "turned around", "turned upside down"],
    answer: "turned upside down",
  },
  {
    question: "My car broke down again, but maybe it was _____; I've been wasting too much time driving around anyway.",
    options: ["a stroke of luck", "a blessing in disguise", "a close call"],
    answer: "a blessing in disguise",
  },
  {
    question: "_____, the level of retail sales fell in January.",
    options: ["As far as it goes", "For what it's worth", "Contrary to expectations"],
    answer: "Contrary to expectations",
  },
  {
    question: "But his character remained serene and _____ in dignity.",
    options: ["unshaken", "unspoken", "unheard-of"],
    answer: "unshaken",
  },
  {
    question: "I was curious to _____ what she had said.",
    options: ["get across", "find out", "look into"],
    answer: "find out",
  },
  {
    question: "He's trying to _____ various strands of radical philosophic thought.",
    options: ["get through", "sort out", "bring together"],
    answer: "bring together",
  },
  {
    question: "When I'm going through a hard time, I try to remind myself that _____.",
    options: ["every cloud has a silver lining", "it's a blessing in disguise", "it's now or never"],
    answer: "every cloud has a silver lining",
  },
  {
    question: "You need to _____ and focus on winning today's game.",
    options: ["get over it", "get on with it", "get through it"],
    answer: "get over it",
  },
  {
    question: "He's been wrong several times before, so I don't put much stock in what he says _____.",
    options: ["any longer than that", "anymore", "once and for all"],
    answer: "anymore",
  },
  {
    question: "I could never be a doctor or nurse; I just _____ the sight of blood.",
    options: ["can't stand", "can't shake", "can't handle"],
    answer: "can't stand",
  },
  {
    question: "I had no idea what they were arguing about! The discussion was _____.",
    options: ["beside the point", "out of the ordinary", "over my head"],
    answer: "over my head",
  },
  {
    question: "If you want to _____, feel free to now. That would make you feel better.",
    options: ["throw up", "pass out", "act up"],
    answer: "throw up",
  },
  {
    question: "Bob was being considered for the promotion, but he _____ when he came in late to work each day this week.",
    options: ["let it slide", "blew it", "called it quits"],
    answer: "blew it",
  },
  {
    question: "Draw up a seat and _____. I would like to have a word with you.",
    options: ["get out of here", "get on with it", "get over here"],
    answer: "get over here",
  },
  {
    question: "No one knows how many underage children _____ to work in those sweatshops every single day.",
    options: ["cut class", "call it a day", "clock in"],
    answer: "clock in",
  },
  {
    question: "She _____ on her rival with allegations of corruption.",
    options: ["turned the tables", "turned the page", "turned the tide"],
    answer: "turned the tables",
  },
  {
    question: "Whether you had insurance is _____; the accident is your fault.",
    options: ["out of the question", "beside the point", "off the hook"],
    answer: "beside the point",
  },
  {
    question: "Parents are not supposed to _____ in their children's quarrels.",
    options: ["take sides", "take a stand", "take the blame"],
    answer: "take sides",
  },
  {
    question: "Companies just want to make sure their employees aren't _____.",
    options: ["acting up", "slacking off", "losing ground"],
    answer: "slacking off",
  },
  {
    question: "Quit _____ and work on your book report already, Scotty!",
    options: ["messing around", "fooling with it", "holding out"],
    answer: "messing around",
  },
  {
    question: "I was _____ when I didn't get the thing I had been waiting for for a long time.",
    options: ["feeling down", "feeling beat", "feeling torn"],
    answer: "feeling down",
  },
  {
    question: "She had been _____ him for three years before they got married.",
    options: ["hanging out with", "getting along with", "going out with"],
    answer: "going out with",
  },
  {
    question: "The local city council has _____ by imposing this steep new income tax on residents.",
    options: ["overstepped its bounds", "bitten off more than it can chew", "fallen short"],
    answer: "overstepped its bounds",
  },
  {
    question: "Don't try to _____ that nonsense! I know it isn't so.",
    options: ["sell me", "pull on me", "feed me"],
    answer: "feed me",
  },
  {
    question: "He finally _____ and gave up his plans to quit his job and become an artist.",
    options: ["came to his senses", "had a change of heart", "got cold feet"],
    answer: "came to his senses",
  },
  {
    question: "That song is so darn catchy; I can't _____!",
    options: ["get it out of my head", "get over it", "shake it off"],
    answer: "get it out of my head",
  },
  {
    question: "Ooh, I'm really scared of you! I'm _____. You frighten me so!",
    options: ["biting my nails", "at my wit's end", "shaking in my little boots"],
    answer: "shaking in my little boots",
  },
  {
    question: "The storm ruined the corn crop and _____ everyone in the county.",
    options: ["wiped out", "knocked out", "wore out"],
    answer: "wiped out",
  },
  {
    question: "Sarah's a very sensitive kid, so don't _____ her.",
    options: ["mess with", "mess around with", "fool around with"],
    answer: "mess with",
  },
  {
    question: "Would you like me to try to _____ between you and your parents?",
    options: ["smooth things over", "shake things up", "bring things up"],
    answer: "smooth things over",
  },
  {
    question: "I know he's bothersome, but don't let him _____.",
    options: ["get under your skin", "get your hopes up", "get a grip"],
    answer: "get under your skin",
  },
  {
    question: "It _____ that it'll be colder in January than it is in November.",
    options: ["remains to be seen", "stands to reason", "comes to light"],
    answer: "stands to reason",
  },
  {
    question: "Why does Kerry always _____ by saying the wrong thing?",
    options: ["step on her own toes", "put her foot in her mouth", "shoot herself in the foot"],
    answer: "put her foot in her mouth",
  },
  {
    question: "David complained that his older sister was always _____.",
    options: ["showing off to him", "bossing him around", "picking on him"],
    answer: "bossing him around",
  },
  {
    question: "The council has announced its intention to _____ on parking offenses.",
    options: ["clamp on", "close in", "crack down"],
    answer: "crack down",
  },
  {
    question: "He _____ because he invited me in front of his mom and I didn't want to go.",
    options: ["put me on the spot", "gave me a hand", "let me slide"],
    answer: "put me on the spot",
  },
  {
    question: "How dare you call the station behind my back? I've _____ you. Get out!",
    options: ["had a bone to pick with", "had it up to here with", "had it in for"],
    answer: "had it up to here with",
  },
  {
    question: "It took her a while to _____ living alone after the divorce.",
    options: ["adjust to", "get around to", "warm up to"],
    answer: "adjust to",
  },
  {
    question: "It's a completely desolate area. There are no people there _____.",
    options: ["for what it's worth", "in the true sense of the word", "as far as it goes"],
    answer: "in the true sense of the word",
  },
  {
    question: "Kids are bound to end up _____ if their parents are too easy-going.",
    options: ["spoiled", "grounded", "sheltered"],
    answer: "spoiled",
  },
  {
    question: "Her pleas for mercy _____; the judge gave her the maximum sentence.",
    options: ["fell flat", "fell through the cracks", "fell on deaf ears"],
    answer: "fell on deaf ears",
  },
  {
    question: "You've found the problem, Sid! You _____!",
    options: ["hit the jackpot", "hit the nail on the head", "hit the road"],
    answer: "hit the nail on the head",
  },
  {
    question: "I can't stop singing this one verse _____ in my head.",
    options: ["over and over again", "once and for all", "through and through"],
    answer: "over and over again",
  },
  {
    question: "_____ George over there. That dude knows how to dress!",
    options: ["Get the hang of", "Get a rise out of", "Get a load of"],
    answer: "Get a load of",
  },
  {
    question: "Jane may look like she doesn't understand you, but she's really extremely bright. _____.",
    options: ["Appearances are deceiving", "It goes without saying", "That's beside the point"],
    answer: "Appearances are deceiving",
  },
  {
    question: "One seller admits she _____ tricking people.",
    options: ["gets carried away with", "gets a kick out of", "gets the hang of"],
    answer: "gets a kick out of",
  },
  {
    question: "Everyone was frightened to death as the car _____.",
    options: ["went into reverse", "went downhill", "went out of control"],
    answer: "went out of control",
  },
  {
    question: "Here's a book that will have you _____.",
    options: ["in stitches", "in a bind", "in the loop"],
    answer: "in stitches",
  },
  {
    question: "I don't think he will _____ your requests if you keep pestering him.",
    options: ["give up on", "give in to", "give way to"],
    answer: "give in to",
  },
  {
    question: "Do you get very nostalgic about _____?",
    options: ["the writing on the wall", "the big picture", "the good old days"],
    answer: "the good old days",
  },
  {
    question: "The police have so far failed to _____ the attacker.",
    options: ["track down", "keep tabs on", "look into"],
    answer: "track down",
  },
  {
    question: "Others may _____ life on a more even keel but they do not feel entitled to it.",
    options: ["settle for", "yearn for", "make do with"],
    answer: "yearn for",
  },
  {
    question: "I've lived in the US for 10 years, so I've somewhat _____ with British politics.",
    options: ["lost touch", "lost my train of thought", "lost the plot"],
    answer: "lost touch",
  },
  {
    question: "The newest styles _____ the clothes of the Seventies.",
    options: ["keep up with", "catch up on", "hark back to"],
    answer: "hark back to",
  },
  {
    question: "She is constantly _____, running around, pushing other kids, and throwing toys.",
    options: ["on the edge", "on the go", "on the ball"],
    answer: "on the go",
  },
  {
    question: "Ken doesn't want to be _____ to any one woman.",
    options: ["held back", "worn out", "tied down"],
    answer: "tied down",
  },
  {
    question: "They _____ their members by issuing a quarterly newsletter.",
    options: ["keep in touch with", "get through to", "catch up with"],
    answer: "keep in touch with",
  },
  {
    question: "The western cowboys usually went to town on Saturdays to _____.",
    options: ["live it up", "call it a day", "hold their horses"],
    answer: "live it up",
  },
  {
    question: "I completely by chance _____ my old college roommate at the airport.",
    options: ["ran into", "ran over", "ran through"],
    answer: "ran into",
  },
  {
    question: "I can't _____ his constant complaining any longer.",
    options: ["put off", "put up with", "put down"],
    answer: "put up with",
  },
  {
    question: "She has always _____ her older sister, admiring her courage and kindness.",
    options: ["looked down on", "looked forward to", "looked up to"],
    answer: "looked up to",
  },
  {
    question: "He finally managed to _____ the loss of his job and started a new business.",
    options: ["get away with", "get on with", "get over"],
    answer: "get over",
  },
  {
    question: "Their plans to open a new restaurant _____ when the investor withdrew funding.",
    options: ["fell behind", "fell out", "fell through"],
    answer: "fell through",
  },
  {
    question: "The new policy is expected to _____ significant changes in how the company operates.",
    options: ["bring back", "bring up", "bring about"],
    answer: "bring about",
  },
  {
    question: "She recently _____ painting as a way to relax after work.",
    options: ["taken over", "taken after", "taken up"],
    answer: "taken up",
  },
  {
    question: "I think I'm _____ a cold; my throat has been sore all day.",
    options: ["coming up with", "coming across", "coming down with"],
    answer: "coming down with",
  },
  {
    question: "Please _____ a moment while I check the details.",
    options: ["hold off", "hold up", "hold on"],
    answer: "hold on",
  },
  {
    question: "He decided to _____ the job offer because the salary was too low.",
    options: ["turn up", "turn into", "turn down"],
    answer: "turn down",
  },
  {
    question: "If you're _____, go see an inspiring movie or go to the theater.",
    options: ["on a roll", "in a rut", "in a fix"],
    answer: "in a rut",
  },
  {
    question: "Turn to your dictionary when you _____ difficult words.",
    options: ["come up with", "come along", "come across"],
    answer: "come across",
  },
  {
    question: "Being there gave me a chance to _____ with some old friends.",
    options: ["touch base", "keep tabs on", "hit it off"],
    answer: "touch base",
  },
  {
    question: "Simran is looking for a loyal friend, not _____.",
    options: ["a shoulder to cry on", "a fair-weather friend", "a kindred spirit"],
    answer: "a fair-weather friend",
  },
  {
    question: "She is a very _____ person, not at all attracted by the glamour world.",
    options: ["down-to-earth", "larger-than-life", "starry-eyed"],
    answer: "down-to-earth",
  },
  {
    question: "I had to leave; I didn't really _____ with the new manager.",
    options: ["hit it off", "check in", "square off"],
    answer: "hit it off",
  },
  {
    question: "I was still working _____ as a waitress to support myself.",
    options: ["on and off", "day in, day out", "little by little"],
    answer: "on and off",
  },
  {
    question: "History suggests several steady, reliable ways to become _____ or even wealthy.",
    options: ["hard up", "well-off", "down and out"],
    answer: "well-off",
  },
  {
    question: "They rather _____ anyone who couldn't speak French.",
    options: ["turn a blind eye to", "keep tabs on", "look down their nose at"],
    answer: "look down their nose at",
  },
  {
    question: "His doctor advised him to _____ alcohol.",
    options: ["steer clear of", "keep an eye on", "brush up on"],
    answer: "steer clear of",
  },
  {
    question: "Just _____ I was saying to Bob that I'd love to travel to France.",
    options: ["one of these days", "day after day", "the other day"],
    answer: "the other day",
  },
  {
    question: "I thought she really liked me, but the next day she gave me _____.",
    options: ["the cold shoulder", "a piece of her mind", "the benefit of the doubt"],
    answer: "the cold shoulder",
  },
  {
    question: "Please _____ what happened last night.",
    options: ["count on", "fill me in on", "cash in on"],
    answer: "fill me in on",
  },
  {
    question: "She gave him a sweet smile, totally _____ with the look of dislike in her eyes.",
    options: ["in tune", "on par", "at odds"],
    answer: "at odds",
  },
  {
    question: "Dad's _____. He'll let me do anything I want.",
    options: ["a pushover", "a hard nut to crack", "a tough cookie"],
    answer: "a pushover",
  },
  {
    question: "Though they work as a team, they often don't _____ on most issues.",
    options: ["see eye to eye", "keep in step", "take turns"],
    answer: "see eye to eye",
  },
  {
    question: "You've got to _____. Stop being such a mama's boy.",
    options: ["feel sorry for yourself", "keep to yourself", "stand up for yourself"],
    answer: "stand up for yourself",
  },
  {
    question: "I can't stand the way your mother _____ like that and tells you what to do!",
    options: ["turns a blind eye to you", "leads you around by the nose", "takes it out on you"],
    answer: "leads you around by the nose",
  },
  {
    question: "The electricity company is really _____. We've got a week to pay before our supply is cut off!",
    options: ["putting the screws on us", "giving us a hand", "cutting us some slack"],
    answer: "putting the screws on us",
  },
  {
    question: "Her parents want her to go to college, but she _____ and insists on trying to become an actress.",
    options: ["has her head in the clouds", "has second thoughts", "has a mind of her own"],
    answer: "has a mind of her own",
  },
  {
    question: "The magazine claims that almost half of Britain's women _____ their partners.",
    options: ["cheat on", "check in on", "look out for"],
    answer: "cheat on",
  },
  {
    question: "His business is _____ because of his poor marketing policies.",
    options: ["on the mend", "on the ball", "on the rocks"],
    answer: "on the rocks",
  },
{
    question: "I am sure he will be gratified to learn that we are _____, since we've always had a similar way of thinking about things.",
    options: ["on the same page", "in the same boat", "on the same wavelength"],
    answer: "on the same wavelength",
  },
  {
    question: "Throwing a baby shower is a great way to celebrate that you _____.",
    options: ["have your hands full", "have a bun in the oven", "have a lot on your plate"],
    answer: "have a bun in the oven",
  },
  {
    question: "He thought he might be having a heart attack, but his chest pains were just _____.",
    options: ["a false alarm", "a close call", "a wake-up call"],
    answer: "a false alarm",
  },
  {
    question: "I'm sure he didn't mean anything by that comment; Don't _____ too much.",
    options: ["blow it off", "blow it up", "blow it over"],
    answer: "blow it up",
  },
  {
    question: "His hypothesis has been _____ since the beginning, so I'm not surprised that he couldn't prove it in the lab.",
    options: ["on shaky ground", "out of bounds", "up in the air"],
    answer: "on shaky ground",
  },
  {
    question: "When they _____, she flung herself into her work to try to forget him.",
    options: ["fell out", "grew apart", "split up"],
    answer: "split up",
  },
  {
    question: "The party _____ in a court case usually pays the other party's legal costs.",
    options: ["in question", "at stake", "at fault"],
    answer: "at fault",
  },
  {
    question: "The Leader of the House should _____ next week for this urgent matter to be discussed.",
    options: ["buy time", "make time", "kill time"],
    answer: "make time",
  },
  {
    question: "We talk about reducing our costs, but it's _____.",
    options: ["no sooner said than done", "as good as done", "easier said than done"],
    answer: "easier said than done",
  },
  {
    question: "The plan's completely ruined, so we'll have to start _____.",
    options: ["from scratch", "from the top", "out of nowhere"],
    answer: "from scratch",
  },
  {
    question: "He _____ and booked a seat for me even before I had confirmed that I was coming.",
    options: ["jumped the queue", "jumped at the chance", "jumped the gun"],
    answer: "jumped the gun",
  },
  {
    question: "He _____ completely when his wife left him over his drinking habit.",
    options: ["lost his head", "lost his touch", "lost his nerve"],
    answer: "lost his head",
  },
  {
    question: "He has _____ when he's working on a project; He thinks of nothing else.",
    options: ["a mind of his own", "a lot on his mind", "a one-track mind"],
    answer: "a one-track mind",
  },
  {
    question: "I'm sorry that things ended this way. _____?",
    options: ["No hard feelings", "No strings attached", "No offense taken"],
    answer: "No hard feelings",
  },
  {
    question: "We should be in when you arrive, but _____, the neighbors have a spare key and will let you into the house.",
    options: ["if all else fails", "if duty calls", "if time permits"],
    answer: "if all else fails",
  },
  {
    question: "Sarah always goes out of her way to help everyone she can; She really _____.",
    options: ["wears her heart on her sleeve", "has her heart in the right place", "has a heart of gold"],
    answer: "has a heart of gold",
  },
  {
    question: "She's been _____ the phone with her sister for over an hour.",
    options: ["at", "on", "to"],
    answer: "on",
  },
  {
    question: "He arrived _____ the airport two hours before his flight.",
    options: ["at", "in", "for"],
    answer: "at",
  },
  {
    question: "The company is _____ the verge of signing a major new contract.",
    options: ["at", "in", "on"],
    answer: "on",
  },
  {
    question: "I'm not very good _____ remembering people's names.",
    options: ["for", "to", "at"],
    answer: "at",
  },
  {
    question: "They've lived _____ the same house for over twenty years.",
    options: ["in", "at", "on"],
    answer: "in",
  },
  {
    question: "She apologized _____ arriving late to the meeting.",
    options: ["to", "for", "at"],
    answer: "for",
  },
  {
    question: "He's married _____ a woman he met while studying abroad.",
    options: ["with", "to", "for"],
    answer: "to",
  },
  {
    question: "We're really looking forward _____ the weekend.",
    options: ["for", "at", "to"],
    answer: "to",
  },
  {
    question: "The meeting has been rescheduled _____ Friday afternoon.",
    options: ["for", "at", "on"],
    answer: "for",
  },
  {
    question: "He's been _____ trouble with his boss ever since he missed that deadline.",
    options: ["on", "at", "in"],
    answer: "in",
  },
  {
    question: "I'm really interested _____ learning more about ancient history.",
    options: ["at", "on", "in"],
    answer: "in",
  },
  {
    question: "She was born _____ a small village in the mountains.",
    options: ["at", "in", "on"],
    answer: "in",
  },
  {
    question: "He's responsible _____ managing the entire sales team.",
    options: ["for", "to", "at"],
    answer: "for",
  },
  {
    question: "The book is dedicated _____ his late grandmother.",
    options: ["to", "for", "at"],
    answer: "to",
  },
  {
    question: "Please knock _____ the door before you enter.",
    options: ["on", "for", "in"],
    answer: "on",
  },
  {
    question: "She's quite skilled _____ solving complex problems under pressure.",
    options: ["to", "at", "for"],
    answer: "at",
  },
  {
    question: "We should arrive _____ time for the opening ceremony.",
    options: ["in", "by", "at"],
    answer: "in",
  },
  {
    question: "He was praised _____ his outstanding contribution to the project.",
    options: ["to", "at", "for"],
    answer: "for",
  },
  {
    question: "The children were waiting _____ line for the bus to arrive.",
    options: ["with", "at", "in"],
    answer: "in",
  },
  {
    question: "I'd like to exchange this shirt _____ a larger size.",
    options: ["with", "for", "to"],
    answer: "for",
  },
  {
    question: "Did you hear that new track? That's straight _____. I've had it on repeat all day.",
    options: ["sus", "fire", "cap"],
    answer: "fire",
  },
  {
    question: "I heard you went on a date with Sarah. _____, what happened?",
    options: ["you slayed that", "bet", "spill the tea"],
    answer: "spill the tea",
  },
  {
    question: "_____, this is the best pizza I've had in my entire life.",
    options: ["No cap", "She ghosted me", "I'm beat"],
    answer: "No cap",
  },
  {
    question: "Why is Jake suddenly being so nice? He's _____.",
    options: ["beat", "ghosted", "sus"],
    answer: "sus",
  },
  {
    question: "I worked a 12 hour shift today. I'm _____, man.",
    options: ["beat", "sus", "cap"],
    answer: "beat",
  },
  {
    question: "_____ I actually like this math class, I just don't tell anyone.",
    options: ["Lowkey", "No cap", "Bet"],
    answer: "Lowkey",
  },
  {
    question: "Wanna grab food later? _____.",
    options: ["Cap", "Ghosted", "Bet"],
    answer: "Bet",
  },
  {
    question: "Your makeup looks incredible. _____!",
    options: ["that's cap", "you slayed that", "she ghosted me"],
    answer: "you slayed that",
  },
  {
    question: "We were texting every day and then she just _____.",
    options: ["ghosted me", "spilled the tea", "slayed that"],
    answer: "ghosted me",
  },
  {
    question: "He said he knows celebrities. That's _____.",
    options: ["fire", "beat", "cap"],
    answer: "cap",
  },
  {
    question: "She blocked me on everything. I'm _____ right now.",
    options: ["mid", "down bad", "bussin"],
    answer: "down bad",
  },
  {
    question: "She is the best singer alive, _____.",
    options: ["sheesh", "yeet", "periodt"],
    answer: "periodt",
  },
  {
    question: "He asked her out so smoothly. That dude has mad _____.",
    options: ["rizz", "vibe check", "facts"],
    answer: "rizz",
  },
  {
    question: "These tacos are _____. I need another plate.",
    options: ["mid", "big yikes", "bussin"],
    answer: "bussin",
  },
  {
    question: "Watch me _____ this ball across the field.",
    options: ["yeet", "rizz", "vibe check"],
    answer: "yeet",
  },
  {
    question: "The movie was _____. I expected better.",
    options: ["bussin", "sheesh", "mid"],
    answer: "mid",
  },
  {
    question: "He tripped in front of everyone. _____.",
    options: ["Facts", "Periodt", "Big yikes"],
    answer: "Big yikes",
  },
  {
    question: "_____, how are you doing today?",
    options: ["Vibe check", "Down bad", "Big yikes"],
    answer: "Vibe check",
  },
  {
    question: "_____, look at that outfit, it looks expensive.",
    options: ["Sheesh", "Mid", "Periodt"],
    answer: "Sheesh",
  },
  {
    question: "Pineapple belongs on pizza. _____.",
    options: ["Rizz", "Yeet", "Facts"],
    answer: "Facts",
  },
  {
    question: "The math test was a _____. I finished it in ten minutes.",
    options: ["piece of cake", "blue moon", "nail on the head"],
    answer: "piece of cake",
  },
  {
    question: "You will do great on stage tonight. _____!",
    options: ["Break a leg", "Beat around the bush", "Spill the beans"],
    answer: "Break a leg",
  },
  {
    question: "You _____ when you said the project would take longer than expected.",
    options: ["hit the nail on the head", "let the cat out of the bag", "cost an arm and a leg"],
    answer: "hit the nail on the head",
  },
  {
    question: "That new phone _____. I cannot afford it.",
    options: ["costs an arm and a leg", "is under the weather", "is a piece of cake"],
    answer: "costs an arm and a leg",
  },
  {
    question: "I am _____ today, so I will stay home from work.",
    options: ["under the weather", "barking up the wrong tree", "once in a blue moon"],
    answer: "under the weather",
  },
  {
    question: "Please do not _____ about the surprise party. Keep it a secret.",
    options: ["spill the beans", "beat around the bush", "hit the nail on the head"],
    answer: "spill the beans",
  },
  {
    question: "She accidentally _____ and told everyone about the promotion before it was announced.",
    options: ["let the cat out of the bag", "spilled the beans", "cost an arm and a leg"],
    answer: "let the cat out of the bag",
  },
  {
    question: "If you think I took your book, you are _____. I never even saw it.",
    options: ["barking up the wrong tree", "under the weather", "beating around the bush"],
    answer: "barking up the wrong tree",
  },
  {
    question: "Stop _____ and tell me what really happened.",
    options: ["beating around the bush", "letting the cat out of the bag", "hitting the nail on the head"],
    answer: "beating around the bush",
  },
  {
    question: "I eat fast food _____. Maybe once or twice a year.",
    options: ["once in a blue moon", "under the weather", "a piece of cake"],
    answer: "once in a blue moon",
  },
  {
    question: "Could you fill out the form before you submit it? I want to make sure everything is correct.",
    options: ["fill out", "cross out", "sort out"],
    answer: "fill out",
  },
  {
    question: "The teacher asked the students to _____ their homework by Friday.",
    options: ["hand over", "hand out", "hand in"],
    answer: "hand in",
  },
  {
    question: "I need to _____ early tomorrow to catch my flight.",
    options: ["stand up", "get up", "show up"],
    answer: "get up",
  },
  {
    question: "The meeting was _____ because half the team was sick.",
    options: ["called up", "called out", "called off"],
    answer: "called off",
  },
  {
    question: "She decided to _____ smoking after her doctor's warning.",
    options: ["give away", "give up", "give in"],
    answer: "give up",
  },
  {
    question: "Please _____ your shoes before you walk into the house.",
    options: ["take off", "take away", "take back"],
    answer: "take off",
  },
  {
    question: "The company plans to _____ fifty new employees next quarter.",
    options: ["take over", "take up", "take on"],
    answer: "take on",
  },
  {
    question: "He tends to _____ whenever things don't go his way.",
    options: ["freak out", "burn out", "space out"],
    answer: "freak out",
  },
  {
    question: "We had to _____ the trip because of the storm warning.",
    options: ["put up", "put off", "put down"],
    answer: "put off",
  },
  {
    question: "She climbed _____ the ladder to clean the gutters.",
    options: ["into", "up", "down"],
    answer: "up",
  },
  {
    question: "He jumped _____ the pool without a moment's hesitation.",
    options: ["out", "onto", "into"],
    answer: "into",
  },
  {
    question: "Please switch _____ the lights before you leave the office.",
    options: ["down", "into", "off"],
    answer: "off",
  },
  {
    question: "The plane took _____ right on schedule despite the storm.",
    options: ["up", "off", "out"],
    answer: "off",
  },
  {
    question: "She jotted _____ a quick note before rushing out the door.",
    options: ["out", "down", "up"],
    answer: "down",
  },
  {
    question: "He turned _____ the job offer without a second thought.",
    options: ["off", "out", "down"],
    answer: "down",
  },
  {
    question: "They set _____ a small bakery in the neighborhood last year.",
    options: ["out", "up", "off"],
    answer: "up",
  },
  {
    question: "The alarm went _____ at midnight, waking the entire building.",
    options: ["on", "off", "out"],
    answer: "off",
  },
  {
    question: "Please fill _____ the blanks in this worksheet.",
    options: ["up", "in", "on"],
    answer: "in",
  },
  {
    question: "He broke _____ the abandoned house late at night.",
    options: ["onto", "out", "into"],
    answer: "into",
  },
  {
    question: "The committee is looking _____ several complaints about the new policy.",
    options: ["up", "on", "into"],
    answer: "into",
  },
  {
    question: "She jumped _____ the stage and grabbed the microphone.",
    options: ["into", "up", "onto"],
    answer: "onto",
  },
  {
    question: "Please check _____ at the front desk before going to your room.",
    options: ["out", "up", "in"],
    answer: "in",
  },
  {
    question: "He spread the flour _____ the counter to knead the dough.",
    options: ["into", "in", "onto"],
    answer: "onto",
  },
  {
    question: "He is _____ of town this week for a business trip.",
    options: ["off", "on", "out"],
    answer: "out",
  },
  {
    question: "The company is rolling _____ a new product line next month.",
    options: ["up", "off", "out"],
    answer: "out",
  },
  {
    question: "Could you turn _____ the TV? I want to watch the news.",
    options: ["into", "on", "up"],
    answer: "on",
  },
  {
    question: "Speak _____! I can't hear you from back here.",
    options: ["out", "on", "up"],
    answer: "up",
  },
  {
    question: "Please calm _____ before you say something you'll regret.",
    options: ["out", "off", "down"],
    answer: "down",
  },
  {
    question: "He's been _____ a diet for two months and has lost ten pounds.",
    options: ["in", "into", "on"],
    answer: "on",
  },
  {
    question: "She's been _____ edge all week waiting for her exam results.",
    options: ["through", "at", "on"],
    answer: "on",
  },
  {
    question: "He walked _____ the room without saying a word to anyone.",
    options: ["through", "against", "between"],
    answer: "through",
  },
  {
    question: "The cat is hiding _____ the couch again.",
    options: ["behind", "between", "along"],
    answer: "behind",
  },
  {
    question: "She's furious _____ him for missing the meeting without notice.",
    options: ["with", "for", "at"],
    answer: "with",
  },
  {
    question: "The decision was made _____ the whole family, not just the parents.",
    options: ["among", "between", "along"],
    answer: "among",
  },
  {
    question: "We had to choose _____ the red car and the blue one.",
    options: ["among", "between", "through"],
    answer: "between",
  },
  {
    question: "He leaned his bike _____ the wall while he ran inside.",
    options: ["against", "along", "under"],
    answer: "against",
  },
  {
    question: "They walked _____ the river for hours, enjoying the scenery.",
    options: ["along", "against", "behind"],
    answer: "along",
  },
  {
    question: "The negotiations broke down _____ disagreements over pricing.",
    options: ["for", "over", "by"],
    answer: "over",
  },
  {
    question: "She's worried _____ her son's grades this semester.",
    options: ["about", "for", "with"],
    answer: "about",
  },
  {
    question: "This gift is _____ you, as a thank-you for your help.",
    options: ["from", "for", "with"],
    answer: "for",
  },
  {
    question: "The package finally arrived _____ three weeks of delays.",
    options: ["after", "by", "from"],
    answer: "after",
  },
  {
    question: "He's been working _____ that same company since he graduated.",
    options: ["with", "for", "by"],
    answer: "for",
  },
  {
    question: "The novel was written _____ a famous author from the 1800s.",
    options: ["from", "with", "by"],
    answer: "by",
  },
  {
    question: "She ran _____ her old classmate at the grocery store yesterday.",
    options: ["across", "along", "against"],
    answer: "across",
  },
  {
    question: "The kids were playing _____ the old oak tree in the yard.",
    options: ["around", "along", "through"],
    answer: "around",
  },
  {
    question: "He hid the keys _____ the doormat so I could get in.",
    options: ["between", "under", "behind"],
    answer: "under",
  },
  {
    question: "The report needs to be finished _____ Friday at the latest.",
    options: ["until", "since", "by"],
    answer: "by",
  },
  {
    question: "She stood _____ her sister and her cousin in the photo.",
    options: ["between", "among", "against"],
    answer: "between",
  },
  {
    question: "He's determined to succeed, no matter what obstacles stand _____ him.",
    options: ["through", "against", "behind"],
    answer: "against",
  },
  {
    question: "He got down on one knee and _____ to his girlfriend at sunset.",
    options: ["suggested", "proposed", "offered"],
    answer: "proposed",
  },
  {
    question: "After the ceremony, the newlyweds flew off for their _____ in Bali.",
    options: ["vacation", "retreat", "honeymoon"],
    answer: "honeymoon",
  },
  {
    question: "They've been happily _____ for over twenty years now.",
    options: ["married", "wedded", "spoused"],
    answer: "married",
  },
  {
    question: "They dated for two years before finally deciding to move in _____.",
    options: ["jointly", "together", "mutually"],
    answer: "together",
  },
  {
    question: "My older brother is very _____ of me; he always wants to know where I am.",
    options: ["defensive", "guarded", "protective"],
    answer: "protective",
  },
  {
    question: "Sibling _____ is common between kids close in age.",
    options: ["rivalry", "competition", "jealousy"],
    answer: "rivalry",
  },
  {
    question: "After the funeral, the brothers finally _____ their differences and made peace.",
    options: ["solved", "settled", "fixed"],
    answer: "settled",
  },
  {
    question: "After years of arguing, my parents' marriage finally fell _____.",
    options: ["aside", "away", "apart"],
    answer: "apart",
  },
  {
    question: "My grandmother is the _____ of the family; everyone comes to her for advice and guidance.",
    options: ["matriarch", "patriarch", "elder"],
    answer: "matriarch",
  },
  {
    question: "He's the _____ sheep of the family. Nobody talks about what he did.",
    options: ["dark", "black", "bad"],
    answer: "black",
  },
  {
    question: "She's the _____ image of her mother; they could be twins.",
    options: ["exact", "perfect", "spitting"],
    answer: "spitting",
  },
  {
    question: "It's amazing how much he _____ after his father; they even have the same laugh.",
    options: ["takes", "looks", "follows"],
    answer: "takes",
  },
  {
    question: "Height tends to _____ in families; tall parents often have tall kids.",
    options: ["pass", "run", "flow"],
    answer: "run",
  },
  {
    question: "My uncle is a _____ parent; he raised my cousins all by himself after the divorce.",
    options: ["solo", "alone", "single"],
    answer: "single",
  },
  {
    question: "The company gives new parents twelve weeks of paid _____ leave.",
    options: ["parent", "parental", "parents'"],
    answer: "parental",
  },
  {
    question: "Due to the storm, they had no choice but to _____ the wedding to the following weekend.",
    options: ["cancel", "postpone", "forget"],
    answer: "postpone",
  },
  {
    question: "After the divorce was finalized, she reverted to her _____ name.",
    options: ["single", "original", "maiden"],
    answer: "maiden",
  },
  {
    question: "My cousin found out she's _____ during a routine doctor's visit.",
    options: ["waiting", "hoping", "expecting"],
    answer: "expecting",
  },
  {
    question: "The baby arrived three weeks _____.",
    options: ["early", "premature", "soon"],
    answer: "early",
  },
  {
    question: "It's a small world — turns out my new boss is actually my second _____ once removed.",
    options: ["relative", "cousin", "nephew"],
    answer: "cousin",
  },
  {
    question: "The train was _____ through the tunnel at breakneck speed.",
    options: ["hurtling", "sprinting", "hurling"],
    answer: "hurtling",
  },
  {
    question: "He lived in a _____ apartment with peeling paint and a leaking roof.",
    options: ["spacious", "tidy", "squalid"],
    answer: "squalid",
  },
  {
    question: "The car came _____ around the corner, nearly hitting a parked truck.",
    options: ["careening", "curving", "circling"],
    answer: "careening",
  },
  {
    question: "They found an old _____ barn at the edge of the property, ready to collapse.",
    options: ["sturdy", "spacious", "ramshackle"],
    answer: "ramshackle",
  },
  {
    question: "The tourists wandered past _____ buildings that hadn't been touched in decades.",
    options: ["pristine", "dilapidated", "modern"],
    answer: "dilapidated",
  },
  {
    question: "The detective followed the suspect into a _____ bar in the worst part of town.",
    options: ["seedy", "upscale", "trendy"],
    answer: "seedy",
  },
  {
    question: "His hands were _____ from working on the car engine all afternoon.",
    options: ["groomed", "glossy", "grimy"],
    answer: "grimy",
  },
  {
    question: "The company was _____ on the edge of bankruptcy after years of losses.",
    options: ["standing", "teetering", "resting"],
    answer: "teetering",
  },
  {
    question: "A truck came _____ down the highway, swerving between lanes.",
    options: ["strolling", "barreling", "wandering"],
    answer: "barreling",
  },
  {
    question: "The car suddenly _____ off the road and into a ditch.",
    options: ["strolled", "marched", "veered"],
    answer: "veered",
  },
  {
    question: "The old castle walls were _____, with stones falling away year after year.",
    options: ["gleaming", "crumbling", "polished"],
    answer: "crumbling",
  },
  {
    question: "The wound had been left untreated and was starting to _____.",
    options: ["fester", "flourish", "freshen"],
    answer: "fester",
  },
  {
    question: "The milk had gone _____ after sitting out in the heat all day.",
    options: ["fragrant", "fresh", "rancid"],
    answer: "rancid",
  },
  {
    question: "The pond water was _____ and full of algae, so you couldn't see the bottom.",
    options: ["clear", "murky", "transparent"],
    answer: "murky",
  },
  {
    question: "An _____ old man shuffled slowly down the sidewalk, leaning on his cane.",
    options: ["decrepit", "robust", "athletic"],
    answer: "decrepit",
  },
  {
    question: "He wore a _____ coat that had clearly seen better days.",
    options: ["plush", "new", "threadbare"],
    answer: "threadbare",
  },
  {
    question: "She arrived at the meeting looking _____, her hair a mess and her shirt untucked.",
    options: ["polished", "disheveled", "groomed"],
    answer: "disheveled",
  },
  {
    question: "He noticed a shadowy figure _____ near the entrance of the building.",
    options: ["lurking", "dancing", "singing"],
    answer: "lurking",
  },
  {
    question: "A stray cat was _____ around the alley, searching for scraps of food.",
    options: ["napping", "bathing", "prowling"],
    answer: "prowling",
  },
  {
    question: "The boy was caught _____ around the back of the store, clearly up to no good.",
    options: ["skulking", "singing", "skipping"],
    answer: "skulking",
  },
  {
    question: "At the box office, we had no choice but to _____ nearly $200 each for the tickets.",
    options: ["save up", "shell out", "cut back"],
    answer: "shell out",
  },
  {
    question: "Because the deadline was so tight, the contractor decided to _____, using cheaper materials than promised.",
    options: ["cut corners", "go the extra mile", "take it slow"],
    answer: "cut corners",
  },
  {
    question: "After the long shift, all he wanted to do was _____ and sleep for ten hours.",
    options: ["hit the sack", "hit the road", "hit the books"],
    answer: "hit the sack",
  },
  {
    question: "She promised not to tell anyone about the surprise party, but she accidentally _____ to her sister.",
    options: ["kept quiet", "played along", "spilled the beans"],
    answer: "spilled the beans",
  },
  {
    question: "With the exam tomorrow morning, she had no choice but to _____ and review her notes until 3 a.m.",
    options: ["burn the midnight oil", "call it a night", "sleep in"],
    answer: "burn the midnight oil",
  },
  {
    question: "The car repair was going to be expensive, but he finally decided to _____ and pay for it.",
    options: ["put it off", "back out", "bite the bullet"],
    answer: "bite the bullet",
  },
  {
    question: "When the funding fell through, the whole project was _____, and they had to start planning from scratch.",
    options: ["ahead of schedule", "back to square one", "set in stone"],
    answer: "back to square one",
  },
  {
    question: "By 6 p.m. the workers were exhausted, so the foreman told everyone to _____ and go home.",
    options: ["call it a day", "pick up the pace", "push through"],
    answer: "call it a day",
  },
  {
    question: "Right before the wedding ceremony, the groom suddenly _____ and almost didn't show up.",
    options: ["jumped for joy", "took charge", "got cold feet"],
    answer: "got cold feet",
  },
  {
    question: "After failing the test three times, he finally decided to _____ and drop the course.",
    options: ["push forward", "throw in the towel", "double down"],
    answer: "throw in the towel",
  },
  {
    question: "The negotiations had stalled for weeks, but both sides finally agreed to _____ and split the difference.",
    options: ["dig in", "meet halfway", "walk away"],
    answer: "meet halfway",
  },
  {
    question: "He had spent all his savings on the trip, so for the rest of the month he had to _____.",
    options: ["live it up", "splurge", "tighten his belt"],
    answer: "tighten his belt",
  },
  {
    question: "The rumor spread so fast that by lunchtime, the whole office had _____.",
    options: ["gotten wind of it", "kept it under wraps", "turned a blind eye"],
    answer: "gotten wind of it",
  },
  {
    question: "The manager was furious about the missed deadline and made it clear she wanted someone to _____.",
    options: ["take the blame", "get the credit", "lend a hand"],
    answer: "take the blame",
  },
  {
    question: "The two brothers hadn't spoken in years, but at their mother's funeral they finally decided to _____.",
    options: ["bury the hatchet", "hold a grudge", "rub it in"],
    answer: "bury the hatchet",
  },
  {
    question: "The witness kept changing her story, so the detective suspected she was trying to _____.",
    options: ["come clean", "cover her tracks", "own up"],
    answer: "cover her tracks",
  },
  {
    question: "The startup was losing money every month, and investors worried it would soon _____.",
    options: ["take off", "go under", "break even"],
    answer: "go under",
  },
  {
    question: "He'd been putting off the visit to the dentist for months, but the pain finally forced him to _____.",
    options: ["let it slide", "brush it off", "face the music"],
    answer: "face the music",
  },
  {
    question: "The team was down by twenty points at halftime, but the coach refused to _____ and kept encouraging them.",
    options: ["rally the troops", "give up", "call it quits"],
    answer: "give up",
  },
  {
    question: "She had rehearsed the speech so many times that when she finally gave it, she _____.",
    options: ["choked", "winged it", "nailed it"],
    answer: "nailed it",
  },
  {
    question: "Ever since the business deal fell through, there's been _____ between the two former partners.",
    options: ["common ground", "bad blood", "good chemistry"],
    answer: "bad blood",
  },
  {
    question: "She wanted to say something during the meeting, but decided to _____ until she had more information.",
    options: ["speak up", "hold back", "jump in"],
    answer: "hold back",
  },
  {
    question: "His accusation turned out to be completely _____, none of the evidence supported it.",
    options: ["on point", "spot on", "off base"],
    answer: "off base",
  },
  {
    question: "Surviving the earthquake was a _____ that she still has nightmares about years later.",
    options: ["pleasant surprise", "harrowing experience", "minor inconvenience"],
    answer: "harrowing experience",
  },
  {
    question: "In the old cartoons, the hero always had a loyal _____ who followed him on every adventure.",
    options: ["rival", "stranger", "sidekick"],
    answer: "sidekick",
  },
  {
    question: "The toddler was so _____ that she refused every suggestion and insisted on doing things her own way.",
    options: ["easygoing", "headstrong", "shy"],
    answer: "headstrong",
  },
  {
    question: "The contractor was clearly _____ the materials, the walls were already cracking after just one month.",
    options: ["skimping on", "investing in", "doubling down on"],
    answer: "skimping on",
  },
  {
    question: "His constant bragging during the interview was _____, and the panel decided not to hire him.",
    options: ["impressive", "reassuring", "off-putting"],
    answer: "off-putting",
  },
  {
    question: "The defense attorney objected, accusing the prosecutor of trying to _____ by suggesting the answer in her question.",
    options: ["cross-examine", "call a recess", "lead the witness"],
    answer: "lead the witness",
  },
  {
    question: "His mother was so _____ that he couldn't make a single decision without her checking in every hour.",
    options: ["smothering", "supportive", "distant"],
    answer: "smothering",
  },
  {
    question: "The witness's story kept changing, so the jury started to _____ his credibility.",
    options: ["question", "reinforce", "overlook"],
    answer: "question",
  },
  {
    question: "After three rounds of layoffs, morale at the office had really _____.",
    options: ["taken a hit", "picked up", "leveled off"],
    answer: "taken a hit",
  },
  {
    question: "The senator refused to answer directly and kept trying to _____ every question the reporters asked.",
    options: ["welcome", "clarify", "dodge"],
    answer: "dodge",
  },
  {
    question: "Once the rumor got out, there was no way to _____ it, everyone in the building knew by noon.",
    options: ["spread", "confirm", "contain"],
    answer: "contain",
  },
  {
    question: "The new intern was eager to impress, so she volunteered to _____ the extra shifts nobody else wanted.",
    options: ["turn down", "sleep through", "take on"],
    answer: "take on",
  },
  {
    question: "He'd been warned twice already, so when it happened a third time, his boss decided to _____.",
    options: ["give him a raise", "let him go", "promote him"],
    answer: "let him go",
  },
  {
    question: "The evidence was so overwhelming that the defense had no real option but to _____.",
    options: ["push for trial", "demand a jury", "settle"],
    answer: "settle",
  },
  {
    question: "The city council kept delaying the vote, so frustrated residents decided to _____ at the next meeting.",
    options: ["stay quiet", "back down", "speak out"],
    answer: "speak out",
  },
  {
    question: "Sales had been dropping for months, so the company finally decided to _____ the failing product line.",
    options: ["expand", "relaunch", "discontinue"],
    answer: "discontinue",
  },
  {
    question: "He'd missed the last two payments, and the bank warned they would _____ if he missed another.",
    options: ["lower the interest rate", "repossess the car", "extend the loan"],
    answer: "repossess the car",
  }
  
  

];
