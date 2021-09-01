const $like = document.getElementById("like");
const $counter = document.getElementById("counter");

let isLiked = false;

$like.addEventListener("click", function () {
  // $like.classList.add('is-liked')
  this.classList.toggle("is-liked");
  isLiked = !isLiked;
  if (isLiked) {
    $counter.textContent = parseInt($counter.textContent) + 1;
  }

  if (!isLiked) {
    $counter.textContent = parseInt($counter.textContent) - 1;
  }
});
