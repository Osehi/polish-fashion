/*$(document).ready(function(){
    const url = " http://localhost:3000/stylist";
    $('button').click(function(){
        $.ajax({
            url: url,
            type: "GET",
            success: function(result){
                console.log(result)
            },
            error: function(error){
                // console.log('Error ${error}')
            }
        })
    })
})
*/

// to ready all the designs
/*
$(document).ready(function(){

    var $collection = $('#collection');

    $.ajax({
        type: 'GET',
        url: ' http://localhost:3000/stylist',
        success: function(stylist){
            $.each(stylist, function(i, stylist){
                $collection.append('<li>designer: '+ stylist.designer +', style: '+ stylist.style +', size: '+ stylist.size +', color: '+ stylist.color +', fabric: '+ stylist.fabric +', cost: '+ stylist.cost +'</li>');
            });
        }
    });
});
*/

// to create a new design
/*
$(document).ready(function(){
    var $username = $('#username');
    var $email = $('#email');
    var $password = $('#password');


$('#submit').submit(function(e){
    e.preventDefault();
    var user = {
        username: $username.val(),
        email: $email.val(),
        password: $password.val()
    };

    $.ajax({
        type: 'POST',
        url: ' http://localhost:3000/user',
        data: user,
        success: function(newUser){
            $user.append('<li>username: '+ newUser.username +', email: '+ newUser.email +', password: '+ newUser.password +'</li>');
        },
        error: function(){
            alert('error saving order');
        }
    });
});
});
*/
// sign up form
$('#signup').click(function(e){
    e.preventDefault();

    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();

    var user = {username, email, password};
    console.log(user)
    var url = "http://localhost:3000/user";
    $.post(url, user).done(function(data){
        console.log(data);
        //$('#result').append(data);
        //document.write(data.toString())
    })
});

