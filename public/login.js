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








$(document).ready(function(){
    var submit = $('#submit');

    submit.click(function(e){
        e.preventDefault();
        var userName = $('#username').val();
        var email = $('#email').val();
        var passWord = $('#password').val();

        $.ajax({
            url: "http://localhost:3000/user",
            type: 'GET',
            error: function(){
                alert('error')
            },
            success: function(data){
                console.log('done');
                data.map(function(user){
                    console.log(user.username);
                    if(user.username === userName && user.email == email){
                        console.log('successful');
                        sessionStorage.setItem("user", user.id);
                        window.location.href = "collection.html";
                    } else {
                        console.log("not found");
                    }
                })
            }
        })
    })
});

// login by admin
$(document).ready(function(){
    var submit = $('#admin');

    submit.click(function(e){
        e.preventDefault();
        var userName = $('#username').val();
        var email = $('#email').val();
        var passWord = $('#password').val();

        $.ajax({
            url: "http://localhost:3000/user",
            type: 'GET',
            error: function(){
                alert('error')
            },
            success: function(data){
                console.log('done');
                data.map(function(user){
                    console.log(user.username);
                    if(user.username === userName && user.email == email){
                        console.log('successful');
                        sessionStorage.setItem("user", user.id);
                        window.location.href = "admin.html";
                    } else {
                        console.log("not found");
                    }
                })
            }
        })
    })
});
