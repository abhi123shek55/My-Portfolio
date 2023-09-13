$(document).ready(function(){

  // MODAL
  var modalText = {
    roambi: {
      title: 'Tecknowscope Solutions',
      tag: 'BUSINESS ANALYTICS.',
      detail: 'Worked on www.lovemytest.com in Angular, TypeScript, Lambda APIs and AWS',
      link: 'https://tecknowscope.com/'
    },
    walker: {
      title: 'Online Appointment Booking',
      tag: 'Website | PHP, MySQL',
      detail: 'Patients can book an appointment by checking the doctors distance.',
      link: 'https://drive.google.com/drive/u/1/folders/1b9zK8eLEghUawA6a9sQF2LfeCKaxSat5?usp=sharing'
    },
    powur: {
      title: 'Face Mask Detector',
      tag: 'Application| Python',
      detail: ' It can be used for crowd monitoring.',
      link: 'https://drive.google.com/drive/u/1/folders/1b9zK8eLEghUawA6a9sQF2LfeCKaxSat5?usp=sharing'
    },
    mystand: {
      title: 'In Progress',
      tag: 'No tag',
      detail: 'Not completed yet.',
     
    },
    never: {
      title: 'Ideacan Technology Solutions',
      tag: 'Software Developer, Banglore',
      detail: 'Worked on http://www.aptitude.com and other companies in Angular and React both.',
      link: 'https://www.linkedin.com/in/ideacan-technology-solutions-1a7b24209/'
    },
    themall: {
      title: 'Ideacan Technology Solutions',
      tag: 'Software Developer, Banglore',
      detail: 'Worked on http://www.aptitude.com and other companies in Angular and React both.',
      link: 'https://www.linkedin.com/in/ideacan-technology-solutions-1a7b24209/'
    }
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background: "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
              
    });
  }
})
