
"use strict";
function scroll_to_class(element_class, removed_height) {
	var scroll_to = $(element_class).offset().top - removed_height;
	if($(window).scrollTop() != scroll_to) {
		$('.form-wizard').stop().animate({scrollTop: scroll_to}, 0);
	}
}

function bar_progress(progress_line_object, direction) {
	var number_of_steps = progress_line_object.data('number-of-steps');
	var now_value = progress_line_object.data('now-value');
	var new_value = 0;
	if(direction == 'right') {
		new_value = now_value + ( 100 / number_of_steps );
	}
	else if(direction == 'left') {
		new_value = now_value - ( 100 / number_of_steps );
	}
	progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

jQuery(document).ready(function() {
    
    /*
        Form
    */
    $('.form-wizard fieldset:first').fadeIn('slow');
    
    $('.form-wizard .required').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
    $('.form-wizard .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
    	var progress_line = $(this).parents('.form-wizard').find('.form-wizard-progress-line');
    	
    	// fields validation
    	parent_fieldset.find('.required').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	// fields validation
    	
    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
    			// change icons
    			current_active_step.removeClass('active').addClass('activated').next().addClass('active');
    			// progress bar
    			bar_progress(progress_line, 'right');
    			// show next step
	    		$(this).next().fadeIn();
	    		// scroll window to beginning of the form
    			scroll_to_class( $('.form-wizard'), 20 );
	    	});
    	}
    	
    });
    
    // previous step
    $('.form-wizard .btn-previous').on('click', function() {
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
    	var progress_line = $(this).parents('.form-wizard').find('.form-wizard-progress-line');
    	
    	$(this).parents('fieldset').fadeOut(400, function() {
    		// change icons
    		current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
    		// progress bar
    		bar_progress(progress_line, 'left');
    		// show previous step
    		$(this).prev().fadeIn();
    		// scroll window to beginning of the form
			scroll_to_class( $('.form-wizard'), 20 );
    	});
    });
    
    // submit
    $('.form-wizard').on('submit', function(e) {
    	
    	// fields validation
    	$(this).find('.required').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	// fields validation
    	
    });
    
    
});





// image uploader scripts 

var $dropzone = $('.image_picker'),
    $droptarget = $('.drop_target'),
    $dropinput = $('#inputFile'),
    $dropimg = $('.image_preview'),
    $remover = $('[data-action="remove_current_image"]');

$dropzone.on('dragover', function() {
  $droptarget.addClass('dropping');
  return false;
});

$dropzone.on('dragend dragleave', function() {
  $droptarget.removeClass('dropping');
  return false;
});

$dropzone.on('drop', function(e) {
  $droptarget.removeClass('dropping');
  $droptarget.addClass('dropped');
  $remover.removeClass('disabled');
  e.preventDefault();
  
  var file = e.originalEvent.dataTransfer.files[0],
      reader = new FileReader();

  reader.onload = function(event) {
    $dropimg.css('background-image', 'url(' + event.target.result + ')');
  };
  
  console.log(file);
  reader.readAsDataURL(file);

  return false;
});

$dropinput.change(function(e) {
  $droptarget.addClass('dropped');
  $remover.removeClass('disabled');
  $('.image_title input').val('');
  
  var file = $dropinput.get(0).files[0],
      reader = new FileReader();
  
  reader.onload = function(event) {
    $dropimg.css('background-image', 'url(' + event.target.result + ')');
  }
  
  reader.readAsDataURL(file);
});

$remover.on('click', function() {
  $dropimg.css('background-image', '');
  $droptarget.removeClass('dropped');
  $remover.addClass('disabled');
  $('.image_title input').val('');
});

$('.image_title input').blur(function() {
  if ($(this).val() != '') {
    $droptarget.removeClass('dropped');
  }
});

// image uploader scripts


// State and District Options
var state_arr = new Array( "Mombasa", "Kwale", "Kilifi", "Tana River", "Lamu", "Taita-Taveta", "Garissa", "Wajir", "Mandera", "Marsabit", "Isiolo", "Meru", "Tharaka-Nithi", "Embu", "Kitui", "Machakos", "Makueni", "Nyandarua", "Nyeri", "Kirinyaga", "Murang'a", "Kiambu", "Turkana", "West Pokot", "Samburu", "Trans-Nzoia", "Uasin Gishu", "Elgeyo-Marakwet", "Nandi", "Baringo", "Laikipia", "Nakuru", "Narok", "Kajiado", "Kericho", "Bomet", "Kakamega", "Vihiga", "Bungoma", "Busia", "Siaya", "Kisumu", "Homa Bay", "Migori", "Kisii", "Nyamira", "Nairobi");


var s_a = new Array();
s_a[0]="";
s_a[1]=" CHANGAMWE | JOMVU | KISAUNI | LIKONI | MVITA (MOMBASA) | NYALI ";
s_a[2]=" KINANGO | KWALE | LUNGA LUNGA | MSAMBWENI ";
s_a[3]=" BAHARI (KILIFI) | GANZE | KALOLENI | KILIFI SOUTH | MAGARINI | MALINDI | RABAI ";
s_a[4]=" BURA (TANA NORTH) | TANA DELTA | TANA RIVER ";
s_a[5]=" LAMU EAST | LAMU WEST";
s_a[6]=" MWATATE | TAVETA | VOI | WUNDANYI (TAITA) ";
s_a[7]=" BALAMBALA | DADAAB | FAFI | GARISSA | HULUGHO | IJARA | LAGDERA ";
s_a[8]=" BUNA | ELDAS | HABASWEIN | TARBAJ | WAJIR EAST | WAJIR NORTH | WAJIR SOUTH | WAJIR WEST ";
s_a[9]=" BANISA | LAFEY | MANDERA CENTRAL | MANDERA EAST | MANDERA NORTH | MANDERA WEST ";
s_a[10]=" CHALBI | HORR NORTH | LOIYANGALANI | MARSABIT | MARSABIT SOUTH (LAISAMIS) | MOYALE | SOLOLO ";
s_a[11]=" GARBATULA | ISIOLO | MERTI ";
s_a[12]=" BUURI | IGEMBE CENTRAL | IGEMBE NORTH | IGEMBE SOUTH | IMENTI NORTH | IMENTI SOUTH | MERU CENTRAL | TIGANIA CENTRAL | TIGANIA EAST | TIGANIA WEST ";
s_a[13]=" MAARA | MERU SOUTH | THARAKA NORTH | THARAKA SOUTH ";
s_a[14]=" EMBU EAST | EMBU NORTH | EMBU WEST | MBEERE NORTH | MBEERE SOUTH ";
s_a[15]=" IKUTHA | KATULANI | KISASI | KITUI CENTRAL | KITUI WEST | KYUSO | LOWER YATTA | MATINYANI | MUMONI | MUTITO | MUTOMO | MWINGI CENTRAL | MWINGI EAST | MWINGI WEST /MIGWANI | NZAMBANI | TSEIKURU";
s_a[16]=" ATHI RIVER | KANGUNDO | KATHIANI | MACHAKOS | MASINGA | MATUNGULU | MWALA | YATTA ";
s_a[17]=" KATHONZWENI | KIBWEZI | KILUNGU | MAKINDU | MAKUENI | MBOONI EAST | MBOONI WEST | MUKAA | NZAUI ";
s_a[18]=" KINANGOP | KIPIPIRI | MIRANGINE | NYANDARUA CENTRAL | NYANDARUA NORTH | NYANDARUA SOUTH | NYANDARUA WEST ";
s_a[19]=" KIENI EAST | KIENI WEST | MATHIRA EAST | MATHIRA WEST | MUKURWE-INI | NYERI CENTRAL | NYERI SOUTH | TETU ";
s_a[20]=" KIRINYAGA CENTRAL | KIRINYAGA EAST | KIRINYAGA WEST | MWEA EAST | MWEA WEST ";
s_a[21]=" GATANGA | KAHURO | KANDARA | KANGEMA | KIGUMO | MATHIOYA | MURANG'A EAST | MURANG'A SOUTH ";
s_a[22]=" GATUNDU NORTH | GATUNDU SOUTH | GITHUNGURI | JUJA | KABETE | KIAMBAA | KIAMBU | KIKUYU | LARI | LIMURU | RUIRU | THIKA EAST | THIKA WEST ";
s_a[23]=" KIBISH | LOIMA | TURKANA CENTRAL | TURKANA EAST | TURKANA NORTH | TURKANA SOUTH | TURKANA WEST ";
s_a[24]=" KIPKOMO | POKOT CENTRAL | POKOT NORTH | POKOT SOUTH | WEST POKOT ";
s_a[25]=" SAMBURU CENTRAL | SAMBURU EAST | SAMBURU NORTH ";
s_a[26]=" ENDEBES | KIMININI | KWANZA | TRANS NZOIA EAST | TRANS NZOIA WEST ";
s_a[27]=" ELDORET EAST | ELDORET WEST | KESSES | MOIBEN | SOY | WARENG ";
s_a[28]=" KEIYO | KEIYO SOUTH | MARAKWET EAST | MARAKWET WEST ";
s_a[29]=" CHESUMEI | NANDI CENTRAL | NANDI EAST | NANDI NORTH | NANDI SOUTH | TINDERET ";
s_a[30]=" BARINGO CENTRAL | BARINGO NORTH | EAST POKOT | KOIBATEK | MARIGAT | MOGOTIO ";
s_a[31]=" LAIKIPIA CENTRAL | LAIKIPIA EAST | LAIKIPIA NORTH | LAIKIPIA WEST | NYAHURURU ";
s_a[32]=" GILGIL | KURESOI | KURESOI NORTH | MOLO | NAIVASHA | NAKURU EAST | NAKURU NORTH | NAKURU WEST | NJORO | RONGAI | SUBUKIA ";
s_a[33]=" NAROK EAST | NAROK NORTH | NAROK SOUTH | NAROK WEST | TRANS MARA EAST | TRANS MARA WEST ";
s_a[34]=" ISINYA | KAJIADO CENTRAL | KAJIADO NORTH | KAJIADO WEST | LOITOKITOK | MASHUURU ";
s_a[35]=" BELGUT | BURETI | KERICHO | KIPKELION | LONDIANI | SIGOWEI / SOIN ";
s_a[36]=" BOMET | BOMET EAST | CHEPALUNGU | KONOIN | SOTIK ";
s_a[37]=" BUTERE | KAKAMEGA CENTRAL | KAKAMEGA EAST | KAKAMEGA NORTH | KAKAMEGA SOUTH | KHWISERO | LIKUYANI | LUGARI | MATETE | MATUNGU | MUMIAS | MUMIAS EAST | NAVKHOLO ";
s_a[38]=" EMUHAYA | HAMISI | LUANDA | SABATIA | VIHIGA ";
s_a[39]=" BUMULA | BUNGOMA CENTRAL | BUNGOMA EAST | BUNGOMA NORTH | BUNGOMA SOUTH | BUNGOMA WEST | CHEPTAIS | KIMILILI | MT ELGON | WEBUYE WEST ";
s_a[40]=" BUNYALA | BUSIA | BUTULA | NAMBALE | SAMIA | TESO NORTH | TESO SOUTH ";
s_a[41]=" BONDO | GEM | RARIEDA | SIAYA | UGENYA | UGUNJA ";
s_a[42]=" KISUMU CENTRAL | KISUMU EAST | KISUMU WEST | MUHORONI | NYAKACH | NYANDO | SEME ";
s_a[43]=" HOMA BAY | MBITA | NDHIWA | RACHUONYO EAST | RACHUONYO NORTH | RACHUONYO SOUTH | RANGWE | SUBA ";
s_a[44]=" AWENDO | KURIA EAST | KURIA WEST | MIGORI | NYATIKE | RONGO | SUNA WEST | URIRI ";
s_a[45]=" GUCHA | GUCHA SOUTH | KENYENYA | KISII CENTRAL | KISII SOUTH | KITUTU CENTRAL | MARANI | MASABA SOUTH | NYAMACHE | SAMETA ";
s_a[46]=" BORABU | MANGA | MASABA NORTH | NYAMIRA NORTH | NYAMIRA SOUTH ";
s_a[47]=" DAGORETTI | EMBAKASI | KAMUKUNJI | KASARANI | KIBRA | LANGATA | MAKADARA | MATHARE | NJIRU | STAREHE | WESTLANDS ";

function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}

 
//Click Add button in html
$(document).ready(function(){
	$( ".add-row" ).click(function(){
	   var $clone = $( "ul.personal-details" ).first().clone();
	   $clone.append( "<button type='button' class='remove-row'>-</button>" );
	   $clone.insertBefore( ".add-row" );
	});
   
	$( ".form-style-9" ).on("click", ".remove-row", function(){
	   $(this).parent().remove();
	});
 });