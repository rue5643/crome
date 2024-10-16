const bookmarkBar = document.getElementById("bookmark-bar");
const bookMarkOpen = document.getElementById("bookmark-open");
const bookMarkClose = document.getElementById("bookmark-close");

// <--북마크 바 toggle-->
const bookmarkBarToggle = () => {
    let isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");
    if (isBookMarkBarOpen) {
        if (isBookMarkBarOpen === "open") {
            localStorage.setItem("isBookMarkBarOpen", "close");
						bookmarkBar.style.display = "none";
				    bookMarkOpen.style.display = "none";
				    bookMarkClose.style.display = "flex";
        } else {
            localStorage.setItem("isBookMarkBarOpen", "open");
            bookmarkBar.style.display = "block";
            bookMarkOpen.style.display = "flex";
            bookMarkClose.style.display = "none";
        }
    } else {
        localStorage.setItem("isBookMarkBarOpen", "close");
        bookmarkBar.style.display = "none";
		    bookMarkOpen.style.display = "none";
		    bookMarkClose.style.display = "flex";
    }
};

document.getElementById("bookmark-open-btn").addEventListener("click", bookmarkBarToggle);
document.getElementById("bookmark-close-btn").addEventListener("click", bookmarkBarToggle);
