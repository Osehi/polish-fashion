// to view database
$('#view1').click(function(){
    $.ajax({
        method:'GET',
        url: 'http://localhost:3000/stylist',
        dataType: 'json'
    }).done(function(data){
        console.log(data);
        $.map(data, function(stylist, i){
            $('#database').append('<li>designer: '+ stylist.designer +', style: '+ stylist.style +', size: '+ stylist.size +', color: '+ stylist.color +', fabric: '+ stylist.fabric +', cost: '+ stylist.cost +'</li>');
        });
    })
});

// to view users
$('#view2').click(function(){
    $.ajax({
        method:'GET',
        url: 'http://localhost:3000/user',
        dataType: 'json'
    }).done(function(data){
        console.log(data);
        $.map(data, function(user, i){
            $('#users').append('<li>username: '+ user.username +', email: '+ user.email +', password: '+ user.password +'</li>');
        });
    })
});

