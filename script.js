$(document).ready(function () {
    // Grab images with the same class name and load them into an array 
    var $gameImgArray = $(".gameImg");

    // Function that loops through the array to change the image when you hover over the image 
    $gameImgArray.each(function (index) {
        $(this).mouseover(function () {
            for (var i=0; i <= index; i++) {
                $(this).attr("src", "image/game" + (i + 1) + ".gif");
                $(this).css("border", "5px dashed orange");
            }
        });
    });

    // Function that loops through the array to change the image when you hover out of the image
    $gameImgArray.each(function (index) {
        $(this).mouseout(function() {
            for (var i=0; i <= index; i++) {
                $(this).attr("src", "image/game" + (i + 1) + ".jpg");
                $(this).css("border", "none");
            }
        });
    });

    // Function to get URL parameters
    function getParameterByName(name) {
        const url = new URL(window.location.href);
        return url.searchParams.get(name);
    }

    const gameNumber = getParameterByName("game");

    // Map game numbers to corresponding images
    const gameImages = {
        1: "image/game1.gif",
        2: "image/game2.gif",
        3: "image/game3.gif",
        4: "image/game4.gif",
        5: "image/game5.gif",
        6: "image/game6.gif",
        7: "image/game7.gif",
        8: "image/game8.gif",
        9: "image/game9.gif"
    };

    // Set the image dynamically based on the game number
    if (gameImages[gameNumber]) {
        $("#game").attr("src", gameImages[gameNumber]);
    } else {
        // Default image if no valid game parameter is found
        $("#game").attr("src", "image/default.gif");
    }

});

