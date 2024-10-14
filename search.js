const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// 검색 결과를 보여주는 함수
const showSearchResult = () => {
    let searchWord = searchInput.value.trim(); // 검색어를 가져오고 공백 제거
    if (searchWord) { // 검색어가 비어있지 않을 때만 실행
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchWord)}`;
    } else {
        alert("검색어를 입력하세요."); // 빈 검색어 경고
    }
};

// Enter 키 입력 감지
const enterKey = (event) => {
    if (event.key === "Enter") {
        showSearchResult();
    }
};

// 버튼 클릭 시 검색 실행
searchButton.addEventListener("click", showSearchResult);

// 키 입력 감지
searchInput.addEventListener("keydown", enterKey);
