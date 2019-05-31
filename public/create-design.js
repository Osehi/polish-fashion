
// select the inputs
$('#create').submit(function(e){
    e.preventDefault();

    var designer = $('#designer').val();
    var style = $('#style').val();
    var size = $('#size').val();
    var color = $('#color').val();
    var fabric = $('#fabric').val();
    var cost = $('#cost').val();

    var stylist = {designer, style, size, color, fabric, cost};
    console.log(stylist)
    var url = "http://localhost:3000/stylist";
    $.post(url, stylist).done(function(data){
        console.log(data);
        //$('#result').append(data);
        //document.write(data.toString())
    })
});