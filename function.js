var like_count=0;
function LikeButtonClicked()
{
        like_count += 1;
	document.getElementById("like_count").innerHTML = like_count;
}

var dislike_count =0;
function DislikeButtonClicked()
{
        dislike_count += 1;
	document.getElementById("dislike_count").innerHTML = dislike_count;
}
