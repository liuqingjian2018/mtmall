$(function(){
    $('.search-btn').click(function(){
        var keyword = $('.search-text').val();
        location = "list.html?keyword=" + keyword;
    });
});