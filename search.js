const searchInput = document.getElementById("search-input");

const showSearchResult = () => {
  let searchWord = searchInput.value;
  window.location.href = `https://google.com/search?q=${searchWord}`;
  // 검색 후에 값을 비우는 것이 의미 없으므로 이 줄은 제거합니다.
};

const enterKey = (event) => {
  if (event.code === "Enter") {
    showSearchResult(); // 함수 호출 시 괄호가 올바르게 닫혀야 합니다.
  }
};

searchInput.addEventListener("keypress", (event) => {
  enterKey(event);
});
