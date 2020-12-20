var primaries = ['AK12', 'MP5K', 'Colt LMG', 'Intervention', 'M4A1', 'KSG-12', 'MK11', 'UMP45', 'G36K', 'G36C', 'MP7', 'AN-94', 'Remington 870', 
'Remington 700', 'SKS', 'M4', 'AS VAL', 'SCAR-L', 'M60', 'AUG A1', 'Beowulf ECR', 'M16A4', 'MAC10', 'P90', 'DBV12', 'G36', 'AUG HBAR', 'L22', 
'SCAR-H', 'M16A3', 'SCAR PDW', 'MG36', 'SL-8', 'AKU12', 'RPK12', 'Dragunov SVU', 'AUG A2', 'MP5', 'AWS', 'Groza-1', 'K2', 'L86 LSW', 'AK12BR', 'FAMAS F1', 
'VSS Vintorez', 'AK47', 'Colt SMG 633', 'AK12C', 'AUG A3', 'L2A3', 'RPK', 'L85A2', 'KS-23M', 'G3', 'MSG90', 'MP5SD', 'Honey Badger', 'Saiga-12', 'K1A', 
'HK416', 'BFG 50', 'MP10', 'HK21', 'SR-3M', 'Beowulf TCR', 'M3A1', 'SCAR HAMR', 'AK74', 'MP5/10', 'AG-3', 'Uzi', 'SA58 SPR', 'Groza-4', 
'AUG A3 Para', 'Stevens DB', 'AWM', 'TRG-42', 'K7', 'SCAR SSR', 'MC51SD', 'RPK74', 'Krinkov', 'FAL 50.63 Para', 'Mosin Nagant', 'PPSh-41', '1858 Carbine', 
'AKM', 'Henry 45-70', 'FAL Para Shorty', 'Kriss Vector', 'MG3KWS', 'AK103', 'Dragunov SVDS', 'AK105', 'PP-19 Bizon', 'FAL 50.00', 'MP40', 'TAR-21', 
'AA-12', 'Jury', 'X95 SMG', 'SPAS-12', 'Tommy Gun', 'Type 88', 'M231', 'KAC SRR', 'C7A2', 'X95R', 'K14', 'Hecate II', 'HK51B', 'M107', 'Steyr Scout', 'WA2000', 'G11K2']

var primaryRanks = [0, 0, 0, 0, 0, 1, 3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 24, 25, 27, 28, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 
41, 42, 42, 43, 44, 45, 46, 47, 49, 51, 52, 53, 54, 55, 56, 59, 59, 60, 62, 63, 63, 64, 65, 66, 67, 69, 70, 71, 72, 74, 74, 76, 77, 78, 79, 80, 81, 82, 84, 84, 85, 86, 88, 
88, 89, 91, 92, 93, 94, 96, 98, 100, 101, 103, 104, 105, 105, 107, 108, 111, 112, 114, 115, 120, 121, 122, 123, 125, 128, 130, 138, 150, 160, 170, 195, 200, 211]

var secondaries = ['M9', 'G17', 'MP412 REX', 'M1911', 'Desert Eagle L5', '93R', 'Mateba 6', 'M45A1', 'Serbu Shotgun', 'TEC-9', 'Five Seven', '1858 New Army', 
'ZIP 22', 'Micro Uzi', 'SFG 50', 'M79 Thumper', 'Redhawk 44', 'Sawed Off', 'Saiga-12U', 'Desert Eagle XIX', 'MP1911', 'Judge', 'Obrez', 'Executioner']

var secondaryRanks = [0, 0, 4, 8, 18, 26, 29, 34, 36, 50, 57, 58, 61, 68, 75, 79, 83, 90, 95, 102, 106, 113, 117, 137]

function randomise() {

    document.getElementById("resultImg").src = "";
    document.getElementById("resultImgSecondary").src = "";


    selectedCategory = document.getElementById('categories').selectedIndex;
    randomPrimary = Math.floor(Math.random() * (primaries.length - 0 + 1)) + 0;
    randomSecondary = Math.floor(Math.random() * (secondaries.length - 0 + 1)) + 0;
    maxrank = document.getElementById("maxrank").value;
    selectedPrimary = primaries[randomPrimary]
    selectedSecondary = secondaries[randomSecondary]
    primaryRank = primaryRanks[randomPrimary]
    secondaryRank = secondaryRanks[randomSecondary]
    if(maxrank < 1) {
        maxrank = 211
    }
    console.log(selectedCategory);

    if(selectedCategory == 1) {
        //secondaries
        console.log(secondaryRank, maxrank);
        if(secondaryRank < maxrank) {
            document.getElementById("result").innerHTML = secondaries[randomSecondary];
            document.getElementById("resultImg").src = "res/secondaries/" + secondaries[randomSecondary] + "_angled.webp";
        } else {
            randomise();
        }
    } else if(selectedCategory == 2) {
        //primary + secondary
        gunCategory = Math.random();
        if(gunCategory > 0.5) {
            console.log(secondaryRank, maxrank);
            if(secondaryRank < maxrank) {
                document.getElementById("result").innerHTML = secondaries[randomSecondary];
                document.getElementById("resultImg").src = "res/secondaries/" + secondaries[randomSecondary] + "_angled.webp";
            } else {
                randomise();
            }
        } else {
            console.log(primaryRank, maxrank);
            if(primaryRank < maxrank) {
                document.getElementById("result").innerHTML = primaries[randomPrimary];
                document.getElementById("resultImg").src = "res/" + primaries[randomPrimary].replaceAll("/", "-") + "_angled.webp";
            } else {
                randomise();
            }
        }
    } else if(selectedCategory == 3) {
        //primary & secondary
        console.log(primaryRank, maxrank);
        if(primaryRank < maxrank && secondaryRank < maxrank) {
            document.getElementById("result").innerHTML = primaries[randomPrimary] + " & " + secondaries[randomSecondary];
            document.getElementById("resultImg").src = "res/" + primaries[randomPrimary].replaceAll("/", "-") + "_angled.webp";
            document.getElementById("resultImgSecondary").src = "res/secondaries/" + secondaries[randomSecondary] + "_angled.webp";
        } else {
            randomise();
        }

    } else {
        //primaries
        console.log(primaryRank, maxrank);
        if(primaryRank < maxrank) {
            document.getElementById("result").innerHTML = primaries[randomPrimary];
            document.getElementById("resultImg").src = "res/" + primaries[randomPrimary].replaceAll("/", "-") + "_angled.webp";
        } else {
            randomise();
        }
    }
}

