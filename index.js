// var res = require('./server.js')


$(document).ready(function(){

$("#submit-res").on("click", function(event) {
    event.preventDefault();

    var newRes = {
        customerName: $("#inputName").val(),
        phoneNumber: $("#inputPhone").val(),
        customerEmail: $("#inputEmail").val(),
        resName: $("#inputResName").val()
    };

    // Question: What does this code do??
    $.post("/api/new", newRes)
        .done(function(data) {
            console.log(data);
            console.log("res added");
            window.location.href='/view';
            // $.get("/api/tables", function(data) {
            //     JSON.parse(data);
            //     for (var i = 0; i < data.length; i++) {
            //         var resDiv = $("<div>");
            //         resDiv.addClass("reservation");
            //         resDiv.attr("data-resName", data[i].resName);

            //         resDiv.append('<h3>' + i + '</h3>');
            //         resDiv.append('<h3>' + data[i].resName + '</h3>');

            //         $("#currentRes").append(resDiv);

            //     }
            // });
            // $.get("/api/waitlist", function(data) {
            //     JSON.parse(data);
            //     for (var i = 0; i < data.length; i++) {
            //         var resDiv = $("<div>");
            //         resDiv.addClass("reservation");
            //         resDiv.attr("data-resName", data[i].resName);

            //         resDiv.append('<h3>' + i + '</h3>');
            //         resDiv.append('<h3>' + data[i].resName + '</h3>');
 
            //         $("#waitlist").append(resDiv);

            //     }


            // });

        });
});

// $("#view-tables").on("click", function(event) {
//     event.preventDefault();
// debugger;
    $.get("/api/tables", function(data) {
                // data = JSON.parse(data);
                console.log(data)
                for (var i = 0; i < data.length; i++) {
                    var resDiv = $("<div>");
                    resDiv.addClass("reservation");
                    resDiv.attr("data-resName", data[i].resName);
                    var resHeader = $('<h3>');
                    resHeader.append(`<span class="label label-primary">${i + 1}</span>`);
                    resHeader.append(` | ${data[i].resName}`);
                    resDiv.append(resHeader);

                    $("#currentRes").append(resDiv);

                }
            });
            $.get("/api/waitlist", function(data) {
            	console.log(data)
            	if (data.length == 0){
            		$('#waitlist').css('display', 'none')
            	}
                for (var i = 0; i < data.length; i++) {
                    var resDiv = $("<div>");
                    resDiv.addClass("reservation");
                    resDiv.attr("data-resName", data[i].resName);
                    var resHeader = $('<h3>');
                    resHeader.append(`<span class="label label-primary">${i + 1}</span>`);
                    resHeader.append(` | ${data[i].resName}`);
                    resDiv.append(resHeader);

                    $("#waitlist").append(resDiv);

                }


            });
// });

});
