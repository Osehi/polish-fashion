$(document).ready(function(){
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