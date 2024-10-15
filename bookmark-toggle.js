const bookmakrBar=document.getElementById("bookmark-bar");
const bookMarkOpen=document.getElementById("bookmark-open");
const bookMarkClose=document.getElementById("bookmark-close");

// 북마크
const isBookMarkBarOpen=localStorage.getItem("isBookMarkBarOpen");
if(isBookMarkBarOpen==="close"){
  bookmarkBar.style.display="none";
  bookMarkOpen.style.display="none";
  bookMarkClose.style.display="flex";
}else{
  bookmarkBar.style.display="block";
  bookMarkOpen.style.display="flex";
  bookMarkClose.style.display="none";
}
// 북마크 toggle
const bookmarkBarToggle=()=>{
  let isBookMarkBarOpen=localStorage.getItem("isBookmarkBarOpen");
