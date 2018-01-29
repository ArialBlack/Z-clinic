'use strict';
(function ($) {
  Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
    
    return [this.getFullYear(),
      (mm>9 ? '' : '0') + mm,
      (dd>9 ? '' : '0') + dd
    ].join('');
  };
  
  $(document).ready(function(){
    $('#add_to_google_calendar').click(function () {
      console.log('add to google');
      // parse
      var url_string = window.location.href; //window.location.href
      var url = new URL(url_string);
      var date = url.searchParams.get("date");
      var location = url.searchParams.get("city") || 'Lviv';
      var time = url.searchParams.get("time");
  
      var filteredDate = date.substring(4,14);
      var year = filteredDate.substring(6,10);
      var month =  filteredDate.substring(0,2);
      var day = filteredDate.substring(3,5);
      
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
     $('#add_to_icalendar').on('click', function () {
      console.log('add to icalendar');
    });
    
    $('#add_to_outlook').on('click', function () {
      console.log('outlook calendar');
    })
  });
}(jQuery));


