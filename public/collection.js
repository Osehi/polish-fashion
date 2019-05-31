/*$(document).ready(function(){
    const url = " http://localhost:3000/stylist";
    $('#view').click(function(){
        $.get(url, function(i, stylist){})
        console.log(stylist);
    })
});
*/

// to view all styles
$('#view').click(function(){
    $.ajax({
        method:'GET',
        url: 'http://localhost:3000/stylist',
        dataType: 'json'
    }).done(function(data){
        console.log(data);
        $.map(data, function(stylist, i){
            $('#result').append('<li>designer: '+ stylist.designer +', style: '+ stylist.style +', size: '+ stylist.size +', color: '+ stylist.color +', fabric: '+ stylist.fabric +', cost: '+ stylist.cost +'</li>');
        });
    })
});