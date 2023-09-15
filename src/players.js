const defaultPlayers = [
  {
    Name: "Justin Jefferson",
    Team: "MIN",
    Position: "WR",
  },
  {
    Name: "Cooper Kupp",
    Team: "LAR",
    Position: "WR",
  },
  {
    Name: "Ja'Marr Chase",
    Team: "CIN",
    Position: "WR",
  },
  {
    Name: "Christian McCaffrey",
    Team: "SF",
    Position: "RB",
  },
  {
    Name: "Austin Ekeler",
    Team: "LAC",
    Position: "RB",
  },
  {
    Name: "A.J. Brown",
    Team: "PHI",
    Position: "WR",
  },
  {
    Name: "Davante Adams",
    Team: "LV",
    Position: "WR",
  },
  {
    Name: "Nick Chubb",
    Team: "CLE",
    Position: "RB",
  },
  {
    Name: "Saquon Barkley",
    Team: "NYG",
    Position: "RB",
  },
  {
    Name: "Travis Kelce",
    Team: "KC",
    Position: "TE",
  },
  {
    Name: "Tyreek Hill",
    Team: "MIA",
    Position: "WR",
  },
  {
    Name: "Stefon Diggs",
    Team: "BUF",
    Position: "WR",
  },
  {
    Name: "Tony Pollard",
    Team: "DAL",
    Position: "RB",
  },
  {
    Name: "Bijan Robinson",
    Team: "ATL",
    Position: "RB",
  },
  {
    Name: "Josh Jacobs",
    Team: "LV",
    Position: "RB",
  },
  {
    Name: "Jalen Hurts",
    Team: "PHI",
    Position: "QB",
  },
  {
    Name: "Garrett Wilson",
    Team: "NYJ",
    Position: "WR",
  },
  {
    Name: "Derrick Henry",
    Team: "TEN",
    Position: "RB",
  },
  {
    Name: "CeeDee Lamb",
    Team: "DAL",
    Position: "WR",
  },
  {
    Name: "Amon-Ra St. Brown",
    Team: "DET",
    Position: "WR",
  },
  {
    Name: "Josh Allen",
    Team: "BUF",
    Position: "QB",
  },
  {
    Name: "Lamar Jackson",
    Team: "BAL",
    Position: "QB",
  },
  {
    Name: "Patrick Mahomes",
    Team: "KC",
    Position: "QB",
  },
  {
    Name: "Mark Andrews",
    Team: "BAL",
    Position: "TE",
  },
  {
    Name: "Rhamondre Stevenson",
    Team: "NE",
    Position: "RB",
  },
  {
    Name: "Calvin Ridley",
    Team: "JAX",
    Position: "WR",
  },
  {
    Name: "DeVonta Smith",
    Team: "PHI",
    Position: "WR",
  },
  {
    Name: "Tee Higgins",
    Team: "CIN",
    Position: "WR",
  },
  {
    Name: "Amari Cooper",
    Team: "CLE",
    Position: "WR",
  },
  {
    Name: "Mike Williams",
    Team: "LAC",
    Position: "WR",
  },
  {
    Name: "Chris Olave",
    Team: "NO",
    Position: "WR",
  },
  {
    Name: "Jaylen Waddle",
    Team: "MIA",
    Position: "WR",
  },
  {
    Name: "DK Metcalf",
    Team: "SEA",
    Position: "WR",
  },
  {
    Name: "Deebo Samuel",
    Team: "SF",
    Position: "WR",
  },
  {
    Name: "Keenan Allen",
    Team: "LAC",
    Position: "WR",
  },
  {
    Name: "Joe Burrow",
    Team: "CIN",
    Position: "QB",
  },
  {
    Name: "Joe Mixon",
    Team: "CIN",
    Position: "RB",
  },
  {
    Name: "Dameon Pierce",
    Team: "HOU",
    Position: "RB",
  },
  {
    Name: "Justin Herbert",
    Team: "LAC",
    Position: "QB",
  },
  {
    Name: "Justin Fields",
    Team: "CHI",
    Position: "QB",
  },
  {
    Name: "Kenneth Walker",
    Team: "SEA",
    Position: "RB",
  },
  {
    Name: "Travis Etienne",
    Team: "JAX",
    Position: "RB",
  },
  {
    Name: "Jahmyr Gibbs",
    Team: "DET",
    Position: "RB",
  },
  {
    Name: "Drake London",
    Team: "ATL",
    Position: "WR",
  },
  {
    Name: "Diontae Johnson",
    Team: "PIT",
    Position: "WR",
  },
  {
    Name: "DJ Moore",
    Team: "CHI",
    Position: "WR",
  },
  {
    Name: "Miles Sanders",
    Team: "CAR",
    Position: "RB",
  },
  {
    Name: "Breece Hall",
    Team: "NYJ",
    Position: "RB",
  },
  {
    Name: "Alexander Mattison",
    Team: "MIN",
    Position: "RB",
  },
  {
    Name: "David Montgomery",
    Team: "DET",
    Position: "RB",
  },
  {
    Name: "Najee Harris",
    Team: "PIT",
    Position: "RB",
  },
  {
    Name: "T.J. Hockenson",
    Team: "MIN",
    Position: "TE",
  },
  {
    Name: "Christian Watson",
    Team: "GB",
    Position: "WR",
  },
  {
    Name: "DeAndre Hopkins",
    Team: "TEN",
    Position: "WR",
  },
  {
    Name: "Chris Godwin",
    Team: "TB",
    Position: "WR",
  },
  {
    Name: "Marquise Brown",
    Team: "ARI",
    Position: "WR",
  },
  {
    Name: "Gabe Davis",
    Team: "BUF",
    Position: "WR",
  },
  {
    Name: "Brandon Aiyuk",
    Team: "SF",
    Position: "WR",
  },
  {
    Name: "Tyler Lockett",
    Team: "SEA",
    Position: "WR",
  },
  {
    Name: "Darren Waller",
    Team: "NYG",
    Position: "TE",
  },
  {
    Name: "George Kittle",
    Team: "SF",
    Position: "TE",
  },
  {
    Name: "Jonathan Taylor",
    Team: "IND",
    Position: "RB",
  },
  {
    Name: "Aaron Jones",
    Team: "GB",
    Position: "RB",
  },
  {
    Name: "George Pickens",
    Team: "PIT",
    Position: "WR",
  },
  {
    Name: "Jordan Addison",
    Team: "MIN",
    Position: "WR",
  },
  {
    Name: "Christian Kirk",
    Team: "JAX",
    Position: "WR",
  },
  {
    Name: "Jahan Dotson",
    Team: "WAS",
    Position: "WR",
  },
  {
    Name: "Terry McLaurin",
    Team: "WAS",
    Position: "WR",
  },
  {
    Name: "Mike Evans",
    Team: "TB",
    Position: "WR",
  },
  {
    Name: "Jerry Jeudy",
    Team: "DEN",
    Position: "WR",
  },
  {
    Name: "Michael Pittman",
    Team: "IND",
    Position: "WR",
  },
  {
    Name: "James Conner",
    Team: "ARI",
    Position: "RB",
  },
  {
    Name: "Dalvin Cook",
    Team: "NYJ",
    Position: "RB",
  },
  {
    Name: "Cam Akers",
    Team: "LAR",
    Position: "RB",
  },
  {
    Name: "Trevor Lawrence",
    Team: "JAX",
    Position: "QB",
  },
  {
    Name: "Deshaun Watson",
    Team: "CLE",
    Position: "QB",
  },
  {
    Name: "Brandin Cooks",
    Team: "DAL",
    Position: "WR",
  },
  {
    Name: "Jaxon Smith-Njigba",
    Team: "SEA",
    Position: "WR",
  },
  {
    Name: "Courtland Sutton",
    Team: "DEN",
    Position: "WR",
  },
  {
    Name: "Anthony Richardson",
    Team: "IND",
    Position: "QB",
  },
  {
    Name: "Kyle Pitts",
    Team: "ATL",
    Position: "TE",
  },
  {
    Name: "Isiah Pacheco",
    Team: "KC",
    Position: "RB",
  },
  {
    Name: "D'Andre Swift",
    Team: "PHI",
    Position: "RB",
  },
  {
    Name: "Alvin Kamara",
    Team: "NO",
    Position: "RB",
  },
  {
    Name: "J.K. Dobbins",
    Team: "BAL",
    Position: "RB",
  },
  {
    Name: "James Cook",
    Team: "BUF",
    Position: "RB",
  },
  {
    Name: "Javonte Williams",
    Team: "DEN",
    Position: "RB",
  },
  {
    Name: "Daniel Jones",
    Team: "NYG",
    Position: "QB",
  },
  {
    Name: "Dallas Goedert",
    Team: "PHI",
    Position: "TE",
  },
  {
    Name: "JuJu Smith-Schuster",
    Team: "NE",
    Position: "WR",
  },
  {
    Name: "Rashod Bateman",
    Team: "BAL",
    Position: "WR",
  },
  {
    Name: "Treylon Burks",
    Team: "TEN",
    Position: "WR",
  },
  {
    Name: "David Njoku",
    Team: "CLE",
    Position: "TE",
  },
  {
    Name: "Zach Charbonnet",
    Team: "SEA",
    Position: "RB",
  },
  {
    Name: "Brian Robinson",
    Team: "WAS",
    Position: "RB",
  },
  {
    Name: "Rachaad White",
    Team: "TB",
    Position: "RB",
  },
  {
    Name: "Khalil Herbert",
    Team: "CHI",
    Position: "RB",
  },
  {
    Name: "Dak Prescott",
    Team: "DAL",
    Position: "QB",
  },
  {
    Name: "Geno Smith",
    Team: "SEA",
    Position: "QB",
  },
  {
    Name: "Kirk Cousins",
    Team: "MIN",
    Position: "QB",
  },
  {
    Name: "Michael Thomas",
    Team: "NO",
    Position: "WR",
  },
  {
    Name: "Odell Beckham",
    Team: "BAL",
    Position: "WR",
  },
  {
    Name: "Zay Flowers",
    Team: "BAL",
    Position: "WR",
  },
  {
    Name: "Kadarius Toney",
    Team: "KC",
    Position: "WR",
  },
  {
    Name: "Elijah Moore",
    Team: "CLE",
    Position: "WR",
  },
  {
    Name: "Pat Freiermuth",
    Team: "PIT",
    Position: "TE",
  },
  {
    Name: "Evan Engram",
    Team: "JAX",
    Position: "TE",
  },
  {
    Name: "Jeff Wilson",
    Team: "MIA",
    Position: "RB",
  },
  {
    Name: "Jaylen Warren",
    Team: "PIT",
    Position: "RB",
  },
  {
    Name: "AJ Dillon",
    Team: "GB",
    Position: "RB",
  },
  {
    Name: "Rashaad Penny",
    Team: "PHI",
    Position: "RB",
  },
  {
    Name: "Antonio Gibson",
    Team: "WAS",
    Position: "RB",
  },
  {
    Name: "Zay Jones",
    Team: "JAX",
    Position: "WR",
  },
  {
    Name: "Tyler Boyd",
    Team: "CIN",
    Position: "WR",
  },
  {
    Name: "Aaron Rodgers",
    Team: "NYJ",
    Position: "QB",
  },
  {
    Name: "Tua Tagovailoa",
    Team: "MIA",
    Position: "QB",
  },
  {
    Name: "Tyler Higbee",
    Team: "LAR",
    Position: "TE",
  },
  {
    Name: "Dalton Kincaid",
    Team: "BUF",
    Position: "TE",
  },
  {
    Name: "Nico Collins",
    Team: "HOU",
    Position: "WR",
  },
  {
    Name: "Van Jefferson",
    Team: "LAR",
    Position: "WR",
  },
  {
    Name: "Allen Lazard",
    Team: "NYJ",
    Position: "WR",
  },
  {
    Name: "Romeo Doubs",
    Team: "GB",
    Position: "WR",
  },
  {
    Name: "Quentin Johnston",
    Team: "LAC",
    Position: "WR",
  },
  {
    Name: "Damien Harris",
    Team: "BUF",
    Position: "RB",
  },
  {
    Name: "Raheem Mostert",
    Team: "MIA",
    Position: "RB",
  },
  {
    Name: "Samaje Perine",
    Team: "DEN",
    Position: "RB",
  },
  {
    Name: "Elijah Mitchell",
    Team: "SF",
    Position: "RB",
  },
  {
    Name: "Tyler Allgeier",
    Team: "ATL",
    Position: "RB",
  },
  {
    Name: "Tank Bigsby",
    Team: "JAX",
    Position: "RB",
  },
  {
    Name: "DeVante Parker",
    Team: "NE",
    Position: "WR",
  },
  {
    Name: "Skyy Moore",
    Team: "KC",
    Position: "WR",
  },
  {
    Name: "Jamaal Williams",
    Team: "NO",
    Position: "RB",
  },
  {
    Name: "Ezekiel Elliott",
    Team: "NE",
    Position: "RB",
  },
  {
    Name: "Luke Musgrave",
    Team: "GB",
    Position: "TE",
  },
  {
    Name: "Jake Ferguson",
    Team: "DAL",
    Position: "TE",
  },
  {
    Name: "Juwan Johnson",
    Team: "NO",
    Position: "TE",
  },
  {
    Name: "Dalton Schultz",
    Team: "HOU",
    Position: "TE",
  },
  {
    Name: "Jakobi Meyers",
    Team: "LV",
    Position: "WR",
  },
  {
    Name: "Isaiah Hodgins",
    Team: "NYG",
    Position: "WR",
  },
  {
    Name: "Donovan Peoples-Jones",
    Team: "CLE",
    Position: "WR",
  },
  {
    Name: "Jonathan Mingo",
    Team: "CAR",
    Position: "WR",
  },
  {
    Name: "Marquez Valdes-Scantling",
    Team: "KC",
    Position: "WR",
  },
  {
    Name: "Matthew Stafford",
    Team: "LAR",
    Position: "QB",
  },
  {
    Name: "Jared Goff",
    Team: "DET",
    Position: "QB",
  },
  {
    Name: "Kenny Pickett",
    Team: "PIT",
    Position: "QB",
  },
  {
    Name: "Brock Purdy",
    Team: "SF",
    Position: "QB",
  },
  {
    Name: "Adam Thielen",
    Team: "CAR",
    Position: "WR",
  },
  {
    Name: "Darius Slayton",
    Team: "NYG",
    Position: "WR",
  },
  {
    Name: "Marvin Mims",
    Team: "DEN",
    Position: "WR",
  },
  {
    Name: "Tyjae Spears",
    Team: "TEN",
    Position: "RB",
  },
  {
    Name: "Roschon Johnson",
    Team: "CHI",
    Position: "RB",
  },
  {
    Name: "Ty Chandler",
    Team: "MIN",
    Position: "RB",
  },
  {
    Name: "Kenneth Gainwell",
    Team: "PHI",
    Position: "RB",
  },
  {
    Name: "Clyde Edwards-Helaire",
    Team: "KC",
    Position: "RB",
  },
  {
    Name: "Tyler Conklin",
    Team: "NYJ",
    Position: "TE",
  },
  {
    Name: "Hunter Henry",
    Team: "NE",
    Position: "TE",
  },
  {
    Name: "Gerald Everett",
    Team: "LAC",
    Position: "TE",
  },
  {
    Name: "Sam LaPorta",
    Team: "DET",
    Position: "TE",
  },
  {
    Name: "Chigoziem Okonkwo",
    Team: "TEN",
    Position: "TE",
  },
  {
    Name: "Cole Kmet",
    Team: "CHI",
    Position: "TE",
  },
  {
    Name: "Derek Carr",
    Team: "NO",
    Position: "QB",
  },
  {
    Name: "Michael Gallup",
    Team: "DAL",
    Position: "WR",
  },
  {
    Name: "DJ Chark",
    Team: "CAR",
    Position: "WR",
  },
  {
    Name: "Jameson Williams",
    Team: "DET",
    Position: "WR",
  },
  {
    Name: "Curtis Samuel",
    Team: "WAS",
    Position: "WR",
  },
  {
    Name: "Rondale Moore",
    Team: "ARI",
    Position: "WR",
  },
  {
    Name: "Chuba Hubbard",
    Team: "CAR",
    Position: "RB",
  },
  {
    Name: "Zamir White",
    Team: "LV",
    Position: "RB",
  },
  {
    Name: "Devin Singletary",
    Team: "HOU",
    Position: "RB",
  },
  {
    Name: "Jerick McKinnon",
    Team: "KC",
    Position: "RB",
  },
  {
    Name: "D'Onta Foreman",
    Team: "CHI",
    Position: "RB",
  },
  {
    Name: "Russell Wilson",
    Team: "DEN",
    Position: "QB",
  },
  {
    Name: "Mac Jones",
    Team: "NE",
    Position: "QB",
  },
  {
    Name: "Jordan Love",
    Team: "GB",
    Position: "QB",
  },
  {
    Name: "Alec Pierce",
    Team: "IND",
    Position: "WR",
  },
  {
    Name: "Darnell Mooney",
    Team: "CHI",
    Position: "WR",
  },
  {
    Name: "Chase Claypool",
    Team: "CHI",
    Position: "WR",
  },
  {
    Name: "Jayden Reed",
    Team: "GB",
    Position: "WR",
  },
  {
    Name: "Hunter Renfrow",
    Team: "LV",
    Position: "WR",
  },
  {
    Name: "Rashee Rice",
    Team: "KC",
    Position: "WR",
  },
  {
    Name: "Dawson Knox",
    Team: "BUF",
    Position: "TE",
  },
  {
    Name: "Hayden Hurst",
    Team: "CAR",
    Position: "TE",
  },
  {
    Name: "C.J. Stroud",
    Team: "HOU",
    Position: "QB",
  },
  {
    Name: "Bryce Young",
    Team: "CAR",
    Position: "QB",
  },
  {
    Name: "Ryan Tannehill",
    Team: "TEN",
    Position: "QB",
  },
  {
    Name: "Sam Howell",
    Team: "WAS",
    Position: "QB",
  },
  {
    Name: "Desmond Ridder",
    Team: "ATL",
    Position: "QB",
  },
  {
    Name: "Kyler Murray",
    Team: "ARI",
    Position: "QB",
  },
  {
    Name: "Greg Dulcich",
    Team: "DEN",
    Position: "TE",
  },
  {
    Name: "Michael Mayer",
    Team: "LV",
    Position: "TE",
  },
  {
    Name: "Jerome Ford",
    Team: "CLE",
    Position: "RB",
  },
  {
    Name: "Gus Edwards",
    Team: "BAL",
    Position: "RB",
  },
  {
    Name: "Josh Reynolds",
    Team: "DET",
    Position: "WR",
  },
  {
    Name: "Jalin Hyatt",
    Team: "NYG",
    Position: "WR",
  },
  {
    Name: "K.J. Osborn",
    Team: "MIN",
    Position: "WR",
  },
  {
    Name: "Robert Woods",
    Team: "HOU",
    Position: "WR",
  },
  {
    Name: "Rashid Shaheed",
    Team: "NO",
    Position: "WR",
  },
  {
    Name: "Deonte Harty",
    Team: "BUF",
    Position: "WR",
  },
  {
    Name: "Keaontay Ingram",
    Team: "ARI",
    Position: "RB",
  },
  {
    Name: "Joshua Kelley",
    Team: "LAC",
    Position: "RB",
  },
  {
    Name: "Kendre Miller",
    Team: "NO",
    Position: "RB",
  },
  {
    Name: "Matt Breida",
    Team: "NYG",
    Position: "RB",
  },
  {
    Name: "Rico Dowdle",
    Team: "DAL",
    Position: "RB",
  },
  {
    Name: "Kyren Williams",
    Team: "LAR",
    Position: "RB",
  },
  {
    Name: "Devon Achane",
    Team: "MIA",
    Position: "RB",
  },
  {
    Name: "Jimmy Garoppolo",
    Team: "LV",
    Position: "QB",
  },
  {
    Name: "Mack Hollins",
    Team: "ATL",
    Position: "WR",
  },
  {
    Name: "Mecole Hardman",
    Team: "NYJ",
    Position: "WR",
  },
  {
    Name: "Allen Robinson",
    Team: "PIT",
    Position: "WR",
  },
  {
    Name: "Joshua Palmer",
    Team: "LAC",
    Position: "WR",
  },
  {
    Name: "Kendrick Bourne",
    Team: "NE",
    Position: "WR",
  },
  {
    Name: "Cade Otton",
    Team: "TB",
    Position: "TE",
  },
  {
    Name: "Irv Smith",
    Team: "CIN",
    Position: "TE",
  },
  {
    Name: "Taysom Hill",
    Team: "NO",
    Position: "TE",
  },
  {
    Name: "Richie James",
    Team: "KC",
    Position: "WR",
  },
  {
    Name: "Michael Wilson",
    Team: "ARI",
    Position: "WR",
  },
  {
    Name: "Randall Cobb",
    Team: "NYJ",
    Position: "WR",
  },
  {
    Name: "Baker Mayfield",
    Team: "TB",
    Position: "QB",
  },
  {
    Name: "Trayveon Williams",
    Team: "CIN",
    Position: "RB",
  },
  {
    Name: "Zack Moss",
    Team: "IND",
    Position: "RB",
  },
  {
    Name: "Jordan Mason",
    Team: "SF",
    Position: "RB",
  },
  {
    Name: "Isaiah Spiller",
    Team: "LAC",
    Position: "RB",
  },
  {
    Name: "Latavius Murray",
    Team: "BUF",
    Position: "RB",
  },
  {
    Name: "Justice Hill",
    Team: "BAL",
    Position: "RB",
  },
  {
    Name: "Chris Evans",
    Team: "CIN",
    Position: "RB",
  },
  {
    Name: "Cole Turner",
    Team: "WAS",
    Position: "TE",
  },
  {
    Name: "Mike Gesicki",
    Team: "NE",
    Position: "TE",
  },
  {
    Name: "Trey McBride",
    Team: "ARI",
    Position: "TE",
  },
  {
    Name: "Isaiah Likely",
    Team: "BAL",
    Position: "TE",
  },
  {
    Name: "Noah Gray",
    Team: "KC",
    Position: "TE",
  },
  {
    Name: "Noah Fant",
    Team: "SEA",
    Position: "TE",
  },
  {
    Name: "Jelani Woods",
    Team: "IND",
    Position: "TE",
  },
  {
    Name: "Zach Ertz",
    Team: "ARI",
    Position: "TE",
  },
  {
    Name: "Justyn Ross",
    Team: "KC",
    Position: "WR",
  },
  {
    Name: "Parris Campbell",
    Team: "NYG",
    Position: "WR",
  },
  {
    Name: "Trey Palmer",
    Team: "TB",
    Position: "WR",
  },
  {
    Name: "Tutu Atwell",
    Team: "LAR",
    Position: "WR",
  },
  {
    Name: "Marvin Jones",
    Team: "DET",
    Position: "WR",
  },
  {
    Name: "Kalif Raymond",
    Team: "DET",
    Position: "WR",
  },
  {
    Name: "Quez Watkins",
    Team: "PHI",
    Position: "WR",
  },
  {
    Name: "Tank Dell",
    Team: "HOU",
    Position: "WR",
  },
  {
    Name: "John Metchie",
    Team: "HOU",
    Position: "WR",
  },
  {
    Name: "Ke'Shawn Vaughn",
    Team: "TB",
    Position: "RB",
  },
  {
    Name: "Cordarrelle Patterson",
    Team: "ATL",
    Position: "RB",
  },
  {
    Name: "JaMycal Hasty",
    Team: "JAX",
    Position: "RB",
  },
  {
    Name: "Evan Hull",
    Team: "IND",
    Position: "RB",
  },
  {
    Name: "Malik Davis",
    Team: "DAL",
    Position: "RB",
  },
  {
    Name: "Jauan Jennings",
    Team: "SF",
    Position: "WR",
  },
  {
    Name: "Puka Nacua",
    Team: "LAR",
    Position: "WR",
  },
  {
    Name: "Tyquan Thornton",
    Team: "NE",
    Position: "WR",
  },
  {
    Name: "Cedric Tillman",
    Team: "CLE",
    Position: "WR",
  },
];

export default defaultPlayers;
