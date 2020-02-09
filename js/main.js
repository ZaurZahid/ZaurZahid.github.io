$(function() {
    /* add active class to burger menu */
    const burger_menu = $('.hamburg');
    const header_nav = $('.header--nav');

    burger_menu.on('click', function(e) {
        if (header_nav.hasClass('active-burger')) {
            $(header_nav).removeClass('active-burger');
            $(header_nav).addClass('close-burger');
        } else {
            $(header_nav).removeClass('close-burger');
            $(header_nav).addClass('active-burger ');
        }
    });

    /* add active class */
    const btn_nav = $('.button-nav');
    const nav_about = $('.nav-about');
    $(nav_about[0]).addClass('active');
    btn_nav.on('click', '.nav-btn', function(e) {
        $('.active').removeClass('active');
        $(this).addClass('active');
        $(nav_about[$(this).index()]).addClass('active');

    });
    /* slider */
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        autoplaySpeed: 1200,
        cssEase: 'linear'
    });
    //nav ucun asagidakilar
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        speed: 1000,
        centerMode: true,
        centerPadding: '0',
        cssEase: 'linear'
    });




    // /* add new pics */
    // const loadedData = [{
    //     imgSrc: 'img/graphic design/graphic-design1.jpg'
    // }, {
    //     imgSrc: 'img/graphic design/graphic-design2.jpg'
    // }, {
    //     imgSrc: 'img/graphic design/graphic-design3.jpg'
    // }, {
    //     imgSrc: 'img/graphic design/graphic-design4.jpg'
    // }, {
    //     imgSrc: 'img/graphic design/graphic-design5.jpg'
    // }, {
    //     imgSrc: 'img/graphic design/graphic-design6.jpg'
    // }, {
    //     imgSrc: 'img/graphic design/graphic-design7.jpg'
    // }, {
    //     imgSrc: 'img/graphic design/graphic-design8.jpg'
    // }, {
    //     imgSrc: 'img/graphic design/graphic-design9.jpg'
    // }, {
    //     imgSrc: 'img/graphic design/graphic-design10.jpg'
    // }, {
    //     imgSrc: 'img/graphic design/graphic-design11.jpg'
    // }, {
    //     imgSrc: 'img/graphic design/graphic-design12.jpg'
    // }];
    // const workImg = $('#work-img');
    // workImg.css({
    //     height: workImg.height()
    // });
    // $(".load-more").on('click', function() {
    //     let newThings = [];
    //     for (let i = 0; i < loadedData.length; i++) {
    //         newThings.push(` <div class='work-img-content'><img src= '${loadedData[i].imgSrc}' > </div>`)
    //             // console.log(loadedData[i]);
    //     }
    //     $('#work-img').append(newThings);
    //     workImg.animate({
    //         height: $(workImg).height()
    //     }, 2000, () => {
    //         workImg.css('height', 'auto')
    //     })
    // });

    /* filter */
    let selectedClass = "";
    let gallery = $('#work-img');
    let loadMore = $('.load-more');
    $('.filter').on('click', function() {
        $(".filter").removeClass("active");
        $(this).addClass("active");
        selectedClass = $(this).attr("data-rel"); //i chooes data of selected item

        $('.work-img-content').fadeOut().removeClass('scale'); //and then i remove all scale class
        setTimeout(function() {
            $("." + selectedClass).fadeIn().addClass('scale'); //adding scale ONLY selected item's class
        }, 500);
        if ($("." + selectedClass).length <= 12) {
            $(loadMore).css("display", "none"); //12den kicik olarsa butonu gosterme
            $('.stop').first().css('display', 'block')
        } else {
            $(loadMore).css("display", "block"); //veya block ele buttonu
            $(gallery).css('max-height', '540px');
            $(".stop").first().css("display", "none")
        }

    })
    $(loadMore).click(function() {
        let maxHeight = $(gallery).css('max-height');

        if (maxHeight.slice(0, -2) > 1079) {
            $(loadMore).css("display", "none");
            $(".stop").first().css("display", "block")
        }
        $(gallery).css('max-height', "+=540px");
    });
    $('.work-img-content').hover(function() { //ustune hover edende
            if ($(this).hasClass('web')) { //clasii mueyyenlesdir
                $(this).append($(`<div class='img-content-hover'>` +
                    `<div class='img-content-links'>` +
                    `<a href=''> <i class='fas fa-link'></i> </a>` +
                    `<a href=''><i class='fas fa-search'></i></a>` +
                    `</div>` +
                    `<div class = 'portfolio-info'>` +
                    `<p>awesome web-design</p>` +
                    `<p>awesome web-design</p>` +
                    `</div>` +
                    `</div>`));
            }
            if ($(this).hasClass('graphic')) {
                $(this).append($(`<div class='img-content-hover'>` +
                    `<div class='img-content-links'>` +
                    `<a href=''> <i class='fas fa-link'></i> </a>` +
                    `<a href=''><i class='fas fa-search'></i></a>` +
                    `</div>` +
                    `<div class = 'portfolio-info'>` +
                    `<p>awesome graphic</p>` +
                    `<p>awesome graphic</p>` +
                    `</div>` +
                    `</div>`));
            }
            if ($(this).hasClass('landing')) {
                $(this).append($(`<div class='img-content-hover'>` +
                    `<div class='img-content-links'>` +
                    `<a href=''> <i class='fas fa-link'></i> </a>` +
                    `<a href=''><i class='fas fa-search'></i></a>` +
                    `</div>` +
                    `<div class = 'portfolio-info'>` +
                    `<p>awesome landing</p>` +
                    `<p>awesome landing</p>` +
                    `</div>` +
                    `</div>`));
            }
            if ($(this).hasClass('wordpress')) {
                $(this).append($(`<div class='img-content-hover'>` +
                    `<div class='img-content-links'>` +
                    `<a href=''> <i class='fas fa-link'></i> </a>` +
                    `<a href=''><i class='fas fa-search'></i></a>` +
                    `</div>` +
                    `<div class = 'portfolio-info'>` +
                    `<p>awesome wordpress</p>` +
                    `<p>awesome wordpress</p>` +
                    `</div>` +
                    `</div>`));
            }
            $('.img-content-hover').animate({ //animate metodu ile bottom= -231 -> 0 -a gelsin nece millisaniyeye.... 
                bottom: 0
            }, 500)

        },

        function() { //ikinci ayri funk hover cixanda bu olsun ,yeni silsin yadda qalmasin
            $(this).find(".img-content-hover").remove();
        }
    );


})