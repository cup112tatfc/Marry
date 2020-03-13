var menu = {
    init: function() {
        this.ScrollMenu();
    },
    ScrollMenu: function() {
        window.addEventListener('scroll', (function(event) {
            this.position = window.pageYOffset;
            this.topMenu = document.querySelector('.header');
            if (position > 80) {
                topMenu.classList.add("fixed");
            } else {
                topMenu.classList.remove("fixed"); // say khi croll < 200 thì sẽ bỏ class có chức năng fixed đi và trở về vị trí ban đầu
            }
        }))
        window.addEventListener('scroll', (function(event) {
            this.position = window.pageYOffset;
            this.topMenu = document.querySelector('.header');
            if (position > 200) {
                topMenu.classList.remove("fixed");
            }
        }))
    }
}
menu.init();
$('.Toggleslide ').click(function() {
    $('.list__menu').slideToggle();
    $('.sub__menu').css('display', 'none');
});
$('.list__item').click(function() {
    $(this).find('.sub__menu').slideToggle();
});

$(window).resize(function() {
    if ($(window).width() > 768) {
        $('.list__menu').removeAttr('style');
        $('.sub__menu').removeAttr('style');
    }
});

$(document).ready(function() {
    var owl_Carousel = {
        init: function() {
            this.owlCarousel();
        },
        owlCarousel: function() {
            $(document).ready(function() {
                $("#owlcarousel").owlCarousel();
            });
            $("#owlcarousel").owlCarousel({

                loop: true,
                items: 3,
                margin: 10,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: 4,
                        nav: false,
                        loop: true
                    }
                }
            });
        }
    }
    owl_Carousel.init();

});
$(document).ready(function() {
    var nav_Carousel = {
        init: function() {
            this.owlCarousel();
        },
        owlCarousel: function() {
            $('.carousel').owlCarousel({
                loop: true,
                items: 1,
                margin: 10,
                nav: true,
                autoplay: true,
                autoplayTimeout: 500,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1,
                        nav: false,
                        loop: true
                    }
                }
            })

        }
    }
    nav_Carousel.init();

});

$(document).ready(function() {
    var Scroll = {
        init: function() {
            this.Scroll();
        },
        Scroll: function() {
            $('.to-top').click(function(e) {
                $('html, body').animate({ scrollTop: 0 });
                return false;
            });
        }
    }
    Scroll.init();
});
var Action = {
    init: function() {
        this.Action();
    },
    Action: function() {
        window.addEventListener('scroll', function(e) {
            this.back_top = document.querySelector('.to-top');
            this.position = this.window.pageYOffset;
            if (position > 200) {
                this.back_top.classList.add('active');
            } else {
                this.back_top.classList.remove('active');
            }
        });
    }
}
Action.init();
// $(document).ready(function() {
//     $('active').click(function() {

//         $("html, body").animate({ scrollTop: 0 }, 0);
//         return false;
//     });
// });
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
var tablist = {
    init: function() {
        this.openCity();
    },
    openCity: function() {
        $(document).ready(function() {

            $('ul.tabs li').click(function() {
                var tab_id = $(this).attr('data-tab');

                $('ul.tabs li').removeClass('current');
                $('.tab-content').removeClass('current');

                $(this).addClass('current');
                $("#" + tab_id).addClass('current');
            })

        })
    }
}

tablist.init();
var stckysibar = {
    init: function() {
        this.sidebar();
    },
    sidebar: function() {
        var slide = {
            init: function() {
                this.sticky_sidebar()
            },
            sticky_sidebar: function() {
                var a = new StickySidebar('.list__menu', {
                    topSpacing: 25,
                    containerSelector: '.container',
                    innerWrapperSelector: '.list__menu'
                });
            }
        }
    }
}
stckysibar.init();