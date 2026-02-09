var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function ($) {
    $.fn.typewriter = function () {
        this.each(function () {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
            var timer = setInterval(function () {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

function timeElapse(date) {
    var current = new Date(); // Usamos la hora actual exacta
    var targetDate = new Date(2025, 8, 14);
    // Calcular diferencia en segundos
    var seconds = Math.floor((current.getTime() - targetDate.getTime()) / 1000);

    // Calcular unidades de tiempo
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);

    var hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;

    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    // Formatear la salida (añadir ceros a la izquierda si es necesario)
    var dStr = days;
    var hStr = (hours < 10) ? "0" + hours : hours;
    var mStr = (minutes < 10) ? "0" + minutes : minutes;
    var sStr = (seconds < 10) ? "0" + seconds : seconds;

    var result = " <span class=\"digit\">" + dStr + "</span> días " +
                 "<span class=\"digit\">" + hStr + "</span> horas " +
                 "<span class=\"digit\">" + mStr + "</span> minutos " +
                 "<span class=\"digit\">" + sStr + "</span> segundos";
    
    $("#clock").html(result);
}