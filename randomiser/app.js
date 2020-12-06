var primaries = ['AK12', 'MP5K', 'Colt LMG', 'Intervention', 'M4A1', 'KSG-12', 'MK11', 'UMP45', 'G36K', 'G36C', 'MP7', 'AN-94', 'Remington 870', 
'Remington 700', 'SKS', 'M4', 'AS VAL', 'SCAR-L', 'M60', 'AUG A1', 'Beowulf ECR', 'M16A4', 'MAC10', 'P90', 'DBV12', 'G36', 'AUG HBAR', 'L22', 
'SCAR-H', 'M16A3', 'SCAR PDW', 'MG36', 'SL-8', 'AKU12', 'RPK12', 'Dragunov SVU', 'AUG A2', 'MP5', 'AWS', 'Groza-1', 'L86 LSW', 'AK12BR', 'FAMAS F1', 
'VSS Vintorez', 'AK47', 'Colt SMG 633', 'AK12C', 'AUG A3', 'L2A3', 'RPK', 'L85A2', 'KS-23M', 'G3', 'MSG90', 'MP5SD', 'Honey Badger', 'Saiga-12', 
'HK416', 'BFG 50', 'MP10', 'HK21', 'SR-3M', 'Beowulf TCR', 'M3A1', 'SCAR HAMR', 'AK74', 'MP5/10', 'AG-3', 'Uzi', 'SA58 SPR', 'Groza-4', 
'AUG A3 Para', 'Stevens DB', 'AWM', 'TRG-42', 'SCAR SSR', 'MC51SD', 'RPK74', 'Krinkov', 'FAL 50.63 Para', 'Mosin Nagant', 'PPSh-41', '1858 Carbine', 
'AKM', 'Henry 45-70', 'FAL Para Shorty', 'Kriss Vector', 'MG3KWS', 'AK103', 'Dragunov SVDS', 'AK105', 'PP-19 Bizon', 'FAL 50.00', 'MP40', 'TAR-21', 
'AA-12', 'Jury', 'X95 SMG', 'SPAS-12', 'Tommy Gun', 'Type 88', 'M231', 'KAC SSR', 'C7A2', 'X95R', 'Hecate II', 'HK51B', 'M107', 'Steyr Scout', 'WA2000', 'G11K2']
var primaryRanks = []
var secondaries = []
var secondaryRanks = []
var selectedCategory = 0

function randomise() {
    selectedCategory = document.getElementById('categories').selectedIndex;
    if(selectedCategory == 1) {
        console.log("Secondaries");
        //case 2
    } else if(selectedCategory == 2) {
        console.log("Primary + Secondary");
        //case 3
    } else if(selectedCategory == 3) {
        console.log("Primary & Secondary");
        //case 4
    } else {
        console.log("Primaries");
        var randomnumber = Math.floor(Math.random() * (primaries.length - 0 + 1)) + 0;
        document.getElementById("result").innerHTML = primaries[randomnumber];
        //case 1
    }
}