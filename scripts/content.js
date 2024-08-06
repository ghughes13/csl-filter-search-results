function hideSponsoredPosts() {
  const ads = document.querySelectorAll("#bottomads, #tvcap");
  console.log("ads", ads);
  ads.forEach((element) => {
    element.style = "display: none";
  });
}

const resizeObserver = new ResizeObserver(() => {
  hideSponsoredPosts();
});

window.addEventListener("load", function () {
  hideSponsoredPosts();
});

resizeObserver.observe(document.body);
