(function ($) {
    $(function () {

        //----Якоря-----------------

        $("#menu").on("click", "a", function (event) {

            event.preventDefault();

            var id = $(this).attr('href'),
                top = $(id).offset().top;

            $('body,html').animate({
                scrollTop: top
            }, 500);

        });
        //----!Якоря-----------------

        //----Селекты
        $(document).ready(function () {
            $('select').material_select();
        });
        //----!Селекты





        $('.button-collapse').sideNav();
        $('.carousel.carousel-slider').carousel({
            fullWidth: true
        });


        // Клик для просмотра видео из слайдера
        $('#index-work-sample').find('img').on('click', function (e) {

            $('body').append('<div id="video-sample-modal" class="modal ku-video-modal"></div>');

            $('#video-sample-modal').modal({
                startingTop: '35%',
                complete: function () {
                    $('#video-sample-modal').remove();
                }
            });
            $('#video-sample-modal').modal('open');

            $('#video-sample-modal').html('<div class="video-container"><iframe width="100%" height="100%" src=' + '"' + e.currentTarget.dataset.url + '"' + ' frameborder="0" allowfullscreen></iframe></div>');

        });

        // Скрол фаер
        var options = [
            {
                selector: '.testFire',
                offset: 200,

                        }
                ];

        Materialize.scrollFire(options);



    }); // end of document ready
})(jQuery); // end of jQuery name space
