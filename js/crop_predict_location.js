
// State and District Options
var state_arr = new Array("Mombasa", "Kwale", "Kilifi", "Tana River", "Lamu", "Taita-Taveta", "Garissa", "Wajir", "Mandera", "Marsabit", "Isiolo", "Meru", "Tharaka-Nithi", "Embu", "Kitui", "Machakos", "Makueni", "Nyandarua", "Nyeri", "Kirinyaga", "Murang'a", "Kiambu", "Turkana", "West Pokot", "Samburu", "Trans-Nzoia", "Uasin Gishu", "Elgeyo-Marakwet", "Nandi", "Baringo", "Laikipia", "Nakuru", "Narok", "Kajiado", "Kericho", "Bomet", "Kakamega", "Vihiga", "Bungoma", "Busia", "Siaya", "Kisumu", "Homa Bay", "Migori", "Kisii", "Nyamira", "Nairobi");


var s_a = new Array();
s_a[0] = "";
s_a[1] = " CHANGAMWE | JOMVU | KISAUNI | LIKONI | MVITA (MOMBASA) | NYALI ";
s_a[2] = " KINANGO | KWALE | LUNGA LUNGA | MSAMBWENI ";
s_a[3] = " BAHARI (KILIFI) | GANZE | KALOLENI | KILIFI SOUTH | MAGARINI | MALINDI | RABAI ";
s_a[4] = " BURA (TANA NORTH) | TANA DELTA | TANA RIVER ";
s_a[5] = " LAMU EAST | LAMU WEST";
s_a[6] = " MWATATE | TAVETA | VOI | WUNDANYI (TAITA) ";
s_a[7] = " BALAMBALA | DADAAB | FAFI | GARISSA | HULUGHO | IJARA | LAGDERA ";
s_a[8] = " BUNA | ELDAS | HABASWEIN | TARBAJ | WAJIR EAST | WAJIR NORTH | WAJIR SOUTH | WAJIR WEST ";
s_a[9] = " BANISA | LAFEY | MANDERA CENTRAL | MANDERA EAST | MANDERA NORTH | MANDERA WEST ";
s_a[10] = " CHALBI | HORR NORTH | LOIYANGALANI | MARSABIT | MARSABIT SOUTH (LAISAMIS) | MOYALE | SOLOLO ";
s_a[11] = " GARBATULA | ISIOLO | MERTI ";
s_a[12] = " BUURI | IGEMBE CENTRAL | IGEMBE NORTH | IGEMBE SOUTH | IMENTI NORTH | IMENTI SOUTH | MERU CENTRAL | TIGANIA CENTRAL | TIGANIA EAST | TIGANIA WEST ";
s_a[13] = " MAARA | MERU SOUTH | THARAKA NORTH | THARAKA SOUTH ";
s_a[14] = " EMBU EAST | EMBU NORTH | EMBU WEST | MBEERE NORTH | MBEERE SOUTH ";
s_a[15] = " IKUTHA | KATULANI | KISASI | KITUI CENTRAL | KITUI WEST | KYUSO | LOWER YATTA | MATINYANI | MUMONI | MUTITO | MUTOMO | MWINGI CENTRAL | MWINGI EAST | MWINGI WEST /MIGWANI | NZAMBANI | TSEIKURU";
s_a[16] = " ATHI RIVER | KANGUNDO | KATHIANI | MACHAKOS | MASINGA | MATUNGULU | MWALA | YATTA ";
s_a[17] = " KATHONZWENI | KIBWEZI | KILUNGU | MAKINDU | MAKUENI | MBOONI EAST | MBOONI WEST | MUKAA | NZAUI ";
s_a[18] = " KINANGOP | KIPIPIRI | MIRANGINE | NYANDARUA CENTRAL | NYANDARUA NORTH | NYANDARUA SOUTH | NYANDARUA WEST ";
s_a[19] = " KIENI EAST | KIENI WEST | MATHIRA EAST | MATHIRA WEST | MUKURWE-INI | NYERI CENTRAL | NYERI SOUTH | TETU ";
s_a[20] = " KIRINYAGA CENTRAL | KIRINYAGA EAST | KIRINYAGA WEST | MWEA EAST | MWEA WEST ";
s_a[21] = " GATANGA | KAHURO | KANDARA | KANGEMA | KIGUMO | MATHIOYA | MURANG'A EAST | MURANG'A SOUTH ";
s_a[22] = " GATUNDU NORTH | GATUNDU SOUTH | GITHUNGURI | JUJA | KABETE | KIAMBAA | KIAMBU | KIKUYU | LARI | LIMURU | RUIRU | THIKA EAST | THIKA WEST ";
s_a[23] = " KIBISH | LOIMA | TURKANA CENTRAL | TURKANA EAST | TURKANA NORTH | TURKANA SOUTH | TURKANA WEST ";
s_a[24] = " KIPKOMO | POKOT CENTRAL | POKOT NORTH | POKOT SOUTH | WEST POKOT ";
s_a[25] = " SAMBURU CENTRAL | SAMBURU EAST | SAMBURU NORTH ";
s_a[26] = " ENDEBES | KIMININI | KWANZA | TRANS NZOIA EAST | TRANS NZOIA WEST ";
s_a[27] = " ELDORET EAST | ELDORET WEST | KESSES | MOIBEN | SOY | WARENG ";
s_a[28] = " KEIYO | KEIYO SOUTH | MARAKWET EAST | MARAKWET WEST ";
s_a[29] = " CHESUMEI | NANDI CENTRAL | NANDI EAST | NANDI NORTH | NANDI SOUTH | TINDERET ";
s_a[30] = " BARINGO CENTRAL | BARINGO NORTH | EAST POKOT | KOIBATEK | MARIGAT | MOGOTIO ";
s_a[31] = " LAIKIPIA CENTRAL | LAIKIPIA EAST | LAIKIPIA NORTH | LAIKIPIA WEST | NYAHURURU ";
s_a[32] = " GILGIL | KURESOI | KURESOI NORTH | MOLO | NAIVASHA | NAKURU EAST | NAKURU NORTH | NAKURU WEST | NJORO | RONGAI | SUBUKIA ";
s_a[33] = " NAROK EAST | NAROK NORTH | NAROK SOUTH | NAROK WEST | TRANS MARA EAST | TRANS MARA WEST ";
s_a[34] = " ISINYA | KAJIADO CENTRAL | KAJIADO NORTH | KAJIADO WEST | LOITOKITOK | MASHUURU ";
s_a[35] = " BELGUT | BURETI | KERICHO | KIPKELION | LONDIANI | SIGOWEI / SOIN ";
s_a[36] = " BOMET | BOMET EAST | CHEPALUNGU | KONOIN | SOTIK ";
s_a[37] = " BUTERE | KAKAMEGA CENTRAL | KAKAMEGA EAST | KAKAMEGA NORTH | KAKAMEGA SOUTH | KHWISERO | LIKUYANI | LUGARI | MATETE | MATUNGU | MUMIAS | MUMIAS EAST | NAVKHOLO ";
s_a[38] = " EMUHAYA | HAMISI | LUANDA | SABATIA | VIHIGA ";
s_a[39] = " BUMULA | BUNGOMA CENTRAL | BUNGOMA EAST | BUNGOMA NORTH | BUNGOMA SOUTH | BUNGOMA WEST | CHEPTAIS | KIMILILI | MT ELGON | WEBUYE WEST ";
s_a[40] = " BUNYALA | BUSIA | BUTULA | NAMBALE | SAMIA | TESO NORTH | TESO SOUTH ";
s_a[41] = " BONDO | GEM | RARIEDA | SIAYA | UGENYA | UGUNJA ";
s_a[42] = " KISUMU CENTRAL | KISUMU EAST | KISUMU WEST | MUHORONI | NYAKACH | NYANDO | SEME ";
s_a[43] = " HOMA BAY | MBITA | NDHIWA | RACHUONYO EAST | RACHUONYO NORTH | RACHUONYO SOUTH | RANGWE | SUBA ";
s_a[44] = " AWENDO | KURIA EAST | KURIA WEST | MIGORI | NYATIKE | RONGO | SUNA WEST | URIRI ";
s_a[45] = " GUCHA | GUCHA SOUTH | KENYENYA | KISII CENTRAL | KISII SOUTH | KITUTU CENTRAL | MARANI | MASABA SOUTH | NYAMACHE | SAMETA ";
s_a[46] = " BORABU | MANGA | MASABA NORTH | NYAMIRA NORTH | NYAMIRA SOUTH ";
s_a[47] = " DAGORETTI | EMBAKASI | KAMUKUNJI | KASARANI | KIBRA | LANGATA | MAKADARA | MATHARE | NJIRU | STAREHE | WESTLANDS ";

var crops = [
    'Tea',
    'Coffee',
    'Maize',
    'Wheat',
    'Beans',
    'Peas',
    'Sorghum',
    'Millet',
    'Potatoes',
    'Cassava',
    'Bananas',
    'Mangoes',
    'Avocados',
    'Pineapples',
    'Tomatoes'
];
var seasons = [
    'January - March',
    'April - June',
    'July - September',
    'October - December',
    'whole year'
];
var cropSeasons = {
    'Tea': ['January - March', 'April - June'],
    'Coffee': ['July - September', 'October - December'],
    'Maize': ['whole year'],
    'Wheat': ['January - March', 'April - June'],
    'Beans': ['July - September', 'October - December'],
    'Peas': ['whole year'],
    'Sorghum': ['January - March', 'April - June'],
    'Millet': ['July - September', 'October - December'],
    'Potatoes': ['whole year'],
    'Cassava': ['January - March', 'April - June'],
    'Bananas': ['July - September', 'October - December'],
    'Mangoes': ['whole year'],
    'Avocados': ['January - March', 'April - June'],
    'Pineapples': ['July - September', 'October - December'],
    'Tomatoes': ['whole year']
}


function print_state(state_id) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var option_str = document.getElementById(state_id);
    option_str.length = 0;
    option_str.options[0] = new Option('Select State', '');
    option_str.selectedIndex = 0;
    for (var i = 0; i < state_arr.length; i++) {
        option_str.options[option_str.length] = new Option(state_arr[i], state_arr[i]);
    }
}

function print_city(city_id, city_index) {
    var option_str = document.getElementById(city_id);
    option_str.length = 0;
    option_str.options[0] = new Option('Select District', '');
    option_str.selectedIndex = 0;
    var city_arr = s_a[city_index].split("|");
    for (var i = 0; i < city_arr.length; i++) {
        option_str.options[option_str.length] = new Option(city_arr[i], city_arr[i]);
    }
}

// generate random crops for each district
var cropsByDistrict = [];

for (var i = 0; i < s_a.length; i++) {
    var numCrops = Math.floor(Math.random() * 5) + 2; // Random number between 1-5

    var districtCrops = [];
    for (var j = 0; j < numCrops; j++) {
        var cropIndex = Math.floor(Math.random() * crops.length);
        var crop = crops[cropIndex];
        var seasons = cropSeasons[crop];
        var season = seasons[Math.floor(Math.random() * seasons.length)];
        districtCrops.push(crop + ' (' + season + ')');
    }
    var spliDistricts = s_a[i].split(" | ");
    for (var k = 0; k < spliDistricts.length; k++) {
        cropsByDistrict[spliDistricts[k]] = districtCrops;
    }
}
console.log(cropsByDistrict);
// test
function findCropByDistrictAndSeason(district, season) {
    const crops = cropsByDistrict[district];
    if (!crops) {
        return "District not found";
    }

    const matchingCrops = crops.filter((crop) => crop.includes(season));
    if (matchingCrops.length === 0) {
        return "No crops found for the district and season";
    }

    return matchingCrops;
}

console.log(findCropByDistrictAndSeason("JOMVU", "whole year"));