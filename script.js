$(document).ready(() => {

    var initialValue = 10;
    var target = 15;
    var dif = (target - initialValue);
    var loadingBar = $('.loading-bar')[0];

    $('.loading-bar').width(Math.ceil(initialValue) / target * 100 + '%');

    var percentDif = 100 - parseInt(loadingBar.style.width);
    var count = dif / 0.2;
    var step = percentDif / count;

    $('#targetSpan').text(Math.round(dif));
    $('#number-container').text('$' + initialValue.toFixed(1));

    var interval = setInterval(
        () => {
            var loadingBarWidth = $('.loading-bar').width() / $('.loading-bar').parent().width() * 100;
            loadingBarWidth += step;
            initialValue += 0.2;
            dif = target - initialValue;
            $('.loading-bar').width(loadingBarWidth + '%');
            $('#targetSpan').text(dif.toFixed(2));
            $('#number-container').text('$' + initialValue.toFixed(1));
            if (loadingBarWidth > 100) {
                $('.target').addClass('done');
                $('.second-flex:first').fadeTo(250, 0);
                setTimeout(
                    () => {
                        $('.second-flex:first').hide()
                    },
                    1000)
                clearInterval(interval)
            }
        }, 500
    )

})
