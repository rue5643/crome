const searchInput = document.getElementById("search-input");

const showSearchResult = () => {
    let searchWord = searchInput.value;
    if (searchWord) {  // 검색어가 있을 경우만 실행
        window.location.href = `https://google.com/search?q=${searchWord}`;
    }
};

const enterKey = (event) => {
    if (event.key === "Enter") {  // event.code 대신 event.key 사용
        showSearchResult();
    }
};

// keydown 이벤트 사용
searchInput.addEventListener("keydown", enterKey);
