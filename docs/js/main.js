(function($) {
  'use strict';

/*=================================================
IE10 viewport fix
=================================================*/

  (function() {
    'use strict';
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement('style')
      msViewportStyle.appendChild(
        document.createTextNode(
          '@-ms-viewport{width:auto!important}'
        )
      )
      document.querySelector('head').appendChild(msViewportStyle)
    }
  })();

/*=================================================
smooth scroll
=================================================*/

  function _smoothScroll() {

    var platform = navigator.platform.toLowerCase();

    if (platform.indexOf('win') == 0 || platform.indexOf('linux') == 0) {
      if ($.browser.webkit) {
        $.srSmoothscroll({
          step: 100,
          speed: 110,
          ease: 'easeOutCubic',
          target: $('body'),
          container: $(window)
        });
      }
    }

  }

/*=================================================
scroll to element
=================================================*/

  function _scrollTo() {
    $('a[href^="#"]').on("click", function(e) {
      var target = $($(this).attr("href"));
      e.preventDefault();
      if (target.length) {
        $("html, body").stop(true).animate({
          scrollTop: target.offset().top
        }, 1000, 'swing'); // scroll speed
      }
    });
  }

/*=================================================
affix
=================================================*/

  function _affix() {
    $('#sidebar-affix').affix({
      offset: {
        top: 0
      }
    })
    var sidebarWidth = $('#scroll-spy').width();
    $('#sidebar-affix').css({'width' : sidebarWidth});

SyntaxHighlighter.defaults['auto-links'] = false;
SyntaxHighlighter.defaults['toolbar'] = false;
SyntaxHighlighter.all()

  }

/*=================================================
window on load
=================================================*/

  $(window).on('load', function() {
  });

/*=================================================
document on ready
=================================================*/

  $(document).on('ready', function() {
    _scrollTo();
    _affix();

  });

/*=================================================
window on resize
=================================================*/

  $(window).on('resize', function() {

  }).trigger('resize');

})(jQuery);