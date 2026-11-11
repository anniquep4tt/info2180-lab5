document.addEventListener("DOMContentLoaded", function () {
    const lookupBtn = document.getElementById("lookup");
    const input = document.getElementById("country");
    const result = document.getElementById("result");

    lookupBtn.addEventListener("click", function () {
        const country = input.value.trim();

        fetch("world.php?country=" + encodeURIComponent(country))
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data;
            })
            .catch(() => {
                result.innerHTML = "<p class='error'>An error occurred while fetching the data.</p>";
        });
    });
});