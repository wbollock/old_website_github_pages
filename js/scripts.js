// made by Will Bollock
// jquery function: credit https://jsfiddle.net/7Lfv0jqL/
$('#mode').change(function(){   
    
    if ($(this).prop('checked'))
    {
        $('body').addClass('dark-mode');
    }
    else
    {
        $('body').removeClass('dark-mode');
    }
    
});
// display last modified date
var lm = document.lastModified;
document.getElementById("lastModified").innerHTML = lm;
