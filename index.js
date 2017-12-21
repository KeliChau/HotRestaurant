// var res = require('./server.js')



$("#submit-res").on("click", function(event) {
    event.preventDefault();

    var newRes = {
        name: $("#inputName").val().trim(),
        phone: $("#inputPhone").val().trim(),
        email: $("#inputEmail").val().trim(),
        uniqueID: $("#uniqueID").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/new", newRes)
        .done(function(data) {
            console.log(data);
            alert("Reservation");

            $.get("/api/tables", function(data) {
                JSON.parse(data);
                for (var i = 0; i < data.length; i++) {
                    var wellSection = $("<div>");
                    wellSection.addClass("reservation");
                    wellSection.attr("data-uniqueID", data[i].uniqueID);

                    wellSection.append('<h3>' + i + '</h3>');
                    wellSection.append('<h3>' + data[i].uniqueID + '</h3>');

                    $("#currentRes").append(wellSection);

                }
            });
            $.get("/api/waitlist", function(data) {
                JSON.parse(data);
                for (var i = 0; i < data.length; i++) {
                    var wellSection = $("<div>");
                    wellSection.addClass("reservation");
                    wellSection.attr("data-uniqueID", data[i].uniqueID);

                    wellSection.append('<h3>' + i + '</h3>');
                    wellSection.append('<h3>' + data[i].uniqueID + '</h3>');
 
                    $("#waitlist").append(wellSection);

                }


            });

        });
});

$("#view-tables").on("click", function(event) {
    event.preventDefault();

    $.get("/api/tables", function(data) {
                JSON.parse(data);
                for (var i = 0; i < data.length; i++) {
                    var wellSection = $("<div>");
                    wellSection.addClass("reservation");
                    wellSection.attr("data-uniqueID", data[i].uniqueID);

                    wellSection.append('<h3>' + i + '</h3>');
                    wellSection.append('<h3>' + data[i].uniqueID + '</h3>');

                    $("#currentRes").append(wellSection);

                }
            });
            $.get("/api/waitlist", function(data) {
                JSON.parse(data);
                for (var i = 0; i < data.length; i++) {
                    var wellSection = $("<div>");
                    wellSection.addClass("reservation");
                    wellSection.attr("data-uniqueID", data[i].uniqueID);

                    wellSection.append('<h3>' + i + '</h3>');
                    wellSection.append('<h3>' + data[i].uniqueID + '</h3>');
 
                    $("#waitlist").append(wellSection);

                }


            });
});