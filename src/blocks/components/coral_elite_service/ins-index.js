var path = document.location.href;
var isChecked = $('input[type="radio"][name="iselite"][id="eliteagencies"]').is(':checked');
if (path.indexOf("coral_elite_service=1")!==-1 && !isChecked) {
    var iint = setInterval(() => {
        if ( !$('input[type="radio"][name="iselite"][id="eliteagencies"]').is(':checked') && $('input[type="radio"][name="iselite"][id="eliteagencies"]').length ){
            $('input[type="radio"][name="iselite"][id="eliteagencies"]').trigger('click');
        }
        else{
            clearInterval(iint);
        }

    }, 1000);
}