var _window = $(window),
    _header = $('.h_container'),
    heroBottom;

_window.on('scroll',function(){
    heroBottom = $('.area_top_view').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('transform');
    }
    else{
        _header.removeClass('transform');
    }
});

_window.trigger('scroll');
