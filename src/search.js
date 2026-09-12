const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const query = searchInput.value.trim();

    if (query) {
        window.location.href =
            `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});