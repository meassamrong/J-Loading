window.onload = function() {
    document.body.addEventListener("mousemove", function(event) {
        var x = event.pageX - 1 + "px"
        var y = event.pageY + 1 + "px"
        document.getElementById("cursor").style.left = x;
        document.getElementById("cursor").style.top = y;
    })
};
var chapterSection = 0;
$(".play-button").on('click', function(){
    if(chapterSection == 0){
        $(".chapter2").css('bottom', '0px');
        chapterSection ++;
    }
})

if(chapterSection   == 0){
    setTimeout(() => {
        $(".chapter2").css('bottom', '0px');
        chapterSection ++;
    }, 30000);
}