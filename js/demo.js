$(function () {
    $(function () {
        $("#dropArtists").change(function () {

            var Dropdown = $("[id*=dropArtists]");

            var selectedText = Dropdown.find("option:selected").text();

            var selectedValue = Dropdown.val();

            var artists =
                [
                { name: "Justin Case", Description: "Test Case"},
                { name: "Justin Time", Description: "Test Time"},
                { name: "Al Coholic", Description: "Test Al"},
                {name: "Stu Pit", Description: "Test Pit"},
                ];

            document.getElementById("ArtName").value = artists[selectedValue]["name"];
            document.getElementById("ArtDescr").value = artists[selectedValue]["Description"];



            return false;
        });
    });

    function roundDps(value) { return +value.toFixed(1); }
    function roundAtsp(value) { return +value.toFixed(2); }

 $(function () {
    $("#dropEvents").change(function () {

        var Dropdown = $("[id*=dropEvents]");

        var selectedText = Dropdown.find("option:selected").text();

        var selectedValue = Dropdown.val();

        var events =
            [
            { name: "Justin Case Event", Description: "Test Case", Datetime: "24 November 2016 9:11"},
            { name: "Justin Time Event", Description: "Test Time", Datetime: "24 November 2016 9:11"},
            { name: "Al Coholic Event", Description: "Test Al", Datetime: "24 November 2016 9:11"},
            {name: "Stu Pit Event", Description: "Test Pit", Datetime: "24 November 2016 9:11"},
            ];

        document.getElementById("EventName").value = events[selectedValue]["name"];
        document.getElementById("EventDescr").value = events[selectedValue]["Description"];
        document.getElementById("Datetime").value = events[selectedValue]["Datetime"];




      return false;
    });
});

$(function () {
   $("#dropSongs").change(function () {

       var Dropdown = $("[id*=dropSongs]");

       var selectedText = Dropdown.find("option:selected").text();

       var selectedValue = Dropdown.val();

       var events =
           [
           { name: "Dust in the wind", url: "http://www.cdkeys.com/"},
           { name: "Makarena", url: "http://www.cdkeys.com/"},
           { name: "Poison", url: "http://www.cdkeys.com/"},
           {name: "We will rock you", url: "http://www.cdkeys.com/"},
           ];

       document.getElementById("SongName").value = events[selectedValue]["name"];
       document.getElementById("SongURL").value = events[selectedValue]["url"];




     return false;
   });
});

});
