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
    question: "At his mother's funeral, he was so _____ with emotion that he couldn't finish his speech.",
    options: ["incapacitated", "overwhelmed", "seething"],
    answer: "overwhelmed",
  },
  {
    question: "I was _____ surprised by the excellent customer service - that company really cares about its customers.",
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
    question: "What are you talking _____?",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
    answer: "about",
  },
  {
    question: "_____ the end of next year we will have made over $100,000.",
    options: ["about", "at", "by", "for", "from", "in", "of", "on", "to", "with"],
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
    question: "Is it true that your mother died _____ cancer.",
    options: ["across", "at", "by", "during", "for", "from", "in", "into", "of", "on", "through", "to", "towards", "with"],
    answer: "of",
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
    question: "My mother is suffering _____ cancer.",
    options: ["by", "for", "from", "in", "into", "on", "out of", "under"],
    answer: "from",
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
    question: "We arrived at the airport in _____ time for the plane.",
    options: ["time", "on", "at"],
    answer: "time",
  },
  {
    question: "My grandfather died _____ cancer.",
    options: ["of", "from", "with"],
    answer: "of",
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
    question: "I'm not _____ today, so please leave me alone.",
    options: ["under stress", "in a good mood", "on leave"],
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
    question: "He was questioned _____ so don't believe everything he says.",
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
    options: ["out of shape", "on and off", "behind schedule"],
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
    question: "The negotiator was looking for a way to _____ the two sides together.",
    options: ["draw", "get", "bring"],
    answer: "bring",
  },
  {
    question: "He came into the room quietly so that he wouldn’t _____ attention.",
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
    question: "I’m sorry. I didn’t _____ your name. Could you tell me again?",
    options: ["draw", "catch", "do"],
    answer: "catch",
  },
  {
    question: "The mafia boss had his associates do everything for him, so he didn’t have to _____ his hands dirty.",
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
    question: "You can’t behave like that. You must _____ a line between your private and professional life.",
    options: ["draw", "catch", "get"],
    answer: "draw",
  },
  {
    question: "You must wear something warmer or else you’ll _____ a cold.",
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
    question: "If you don’t start learning more, you’ll _____ badly in the test next week.",
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
    question: "The manager had _____ the new documents with his lawyers before making a decision.",
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

];
