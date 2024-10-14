const searchInput = document.getElementById("search-input");

const showSearchResult = () => {
    let searchWord = searchInput.value;
    window.location.href = `https://google.com/search?q=${searchWord}`;
    searchWord = "";
};

const enterKey = (event) => {
    if (event.code === "Enter") {
        showSearchResult();
    }
};

// `keypress` 대신 `keydown`을 사용
searchInput.addEventListener("keydown", (event) => {
    enterKey(event);
});
