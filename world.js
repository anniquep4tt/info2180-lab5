document.addEventListener("DOMContentLoaded", function () {
    const lookupBtn = document.getElementById("lookup");
    const lookupCitiesBtn = document.getElementById("lookupCities");
    const input = document.getElementById("country");
    const result = document.getElementById("result");

    function search(extra) {
        const country = input.value.trim();
        const url = "world.php?country=" + encodeURIComponent(country) + extra;

        fetch(url)
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data;
            })
            .catch(() => {
                result.innerHTML = "<p class='error'>An error occurred while fetching data.</p>";
            });    
    }

    lookupBtn.addEventListener("click", function () {
        search("");
    });

    lookupCitiesBtn.addEventListener("click", function () {
        search("&lookup=cities");
    });

});