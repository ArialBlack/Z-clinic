'use strict';
(function ($) {
  console.log('add to calendar');
  $('document').ready(function () {
    if ($('body').hasClass('path-form-schedule-consultation-confirmation')) {
      window.addeventasync = function(){
        addeventatc.settings({
          appleical  : {show:true, text:"Apple Calendar"},
          google     : {show:true, text:"Google <em>(online)</em>"},
          outlook    : {show:true, text:"Outlook"},
          mouse: true,
          css: true
        });
      };
    
      $(document).ready(function(){
        $('#add_to_google_calendar').click(function () {
          console.log('add to google');
          // parse
          
        
          console.log('filteredDate', year, month, day, time.replace(':', ''));
          window.open('https://calendar.google.com/calendar/r/eventedit?text='
            + 'Візит до Заблоцького'
            + '&dates='
            +  year + month + day  + 'T' + time.replace(':', '') + '00/' + year + month + day  + 'T' + String(parseInt(time.replace(':', '')) + 30) + '00'
            + '&details='
            + 'Healthy teeth'
            + '&location=' + location
            + '&sprop=website:&sf=true&output=xml');
          //  window.location = '/';
        });
      });
      var url_string = window.location.href; //window.location.href
      var url = new URL(url_string);
      var date = url.searchParams.get("date");
      var location = url.searchParams.get("city") || 'Lviv';
      var time = url.searchParams.get("time");
    
      var filteredDate = date.substring(4,14);
      var year = filteredDate.substring(6,10);
      var month =  filteredDate.substring(0,2);
      var day = filteredDate.substring(3,5);
      var endTime = String(parseInt(time.replace(':', '')) + 30);
      var hours;
      var minutes;
  
      if (endTime < 1000) {
        endtime = '0' + endtime;
      }
      hours = endTime.substring(0,2);
      minutes = endTime.substring(2, 4);
      console.log('hours', hours, minutes, ' ', time);
      var startTime = time;
      $('.addeventatc .start').text(month + '/' + day + '/' + year + ' ' + time);
      $('.addeventatc .end').text(month + '/' + day + '/' + year + ' ' + hours + ':' + minutes);
      $('.addeventatc .location').text(location);
  
    }
  })
}(jQuery));


