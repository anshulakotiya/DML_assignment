var likeCount =0,dislikeCount=0;
likeButton = document.getElementById('like-btn');
dislikeButton = document.getElementById('dislike-btn');
function backendCounting(button_pressed){
    $.ajax({
        type:'POST',
        url:'/change_counting/',
        data:{
            button_pressed:button_pressed,
            csrfmiddlewaretoken: $('[name="csrfmiddlewaretoken"]').val()
        },
        success:function(data){
                document.getElementById('total-like-count').innerHTML = data.like;
                document.getElementById('total-dislike-count').innerHTML = data.dislike;
            }
    });
}

likeButton.onclick = function(){
    likeCount++;
    document.getElementById('like-count').innerHTML = "No of times like button pressed = "+likeCount;
    backendCounting("like");
}
dislikeButton.onclick = function(){
    dislikeCount++;
    document.getElementById('dislike-count').innerHTML = "No of times dislike button pressed = "+dislikeCount;
    backendCounting("dislike");
}
document.getElementById('like-count').innerHTML = "No of times like button pressed now = "+likeCount;
document.getElementById('dislike-count').innerHTML = "No of times dislike button pressed now = "+dislikeCount;
