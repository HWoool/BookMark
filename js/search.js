//
(function () {
    const searchInput = document.getElementById("search-input");

    const showSearchResult = () => {
        let searchWord = searchInput.value;
        // 구글 검색 URL
        window.location.href = `https://www.google.com/search?q=${searchWord}`;
        searchWord = "";
    }
    // 엔터키를 누를시 이벤트
    const enterKey = (event) => {
        // Enter이면 실행
        if (event.code === "Enter") {
            // 검색 함수 실행
            showSearchResult();
        }
    }
    // 특정키를 누르는 이벤트 keypress
    searchInput.addEventListener("keypress", (event) => {
        //인수로 받아 enterKey로 전달
        enterKey(event);
    })
})();