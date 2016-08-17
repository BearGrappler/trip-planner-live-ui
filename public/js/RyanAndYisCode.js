$(function() {



  var iconURLs = {
    hotel: '/images/lodging_0star.png',
    restaurant: '/images/restaurant.png',
    activity: '/images/star-3.png'
  };

var currentMap = initializeMap();

  $.each(hotels, function(key, value){
    $('#hotel-choices').append("<option>" + value.name +"</option>")
  })

   $.each(restaurants, function(key, value){
    $('#restaurant-choices').append("<option>" + value.name +"</option>")
  })

    $.each(activities, function(key, value){
    $('#activity-choices').append("<option>" + value.name +"</option>")
  })

  //attach event listener on click to all buttons




  $(":button").on("click", function(eventObj){
    var domNode = eventObj.currentTarget;
    var selectedItemValue = $(domNode).siblings('select').val();
    var selectedItem = $(domNode).siblings('select');
    console.log('!!!!!!!!!')
    console.dir(selectedItem)
    console.log('heres the current selectedItem value', selectedItemValue)
    console.log('HERES THE CURRENT MAP', currentMap);


    //tells us whether this came from hotels restaurants or activities
    var hotelRestarntOrAty = $(domNode).siblings('select').parent()[0].children[0].textContent;
    var createdElement = '<span class="title">' + selectedItemValue + '</span> \n                 <button class="btn btn-xs btn-danger remove btn-circle">x</button>';
    console.log('heres the next selectedItem value', selectedItemValue)
    console.log('heres the hotel', hotels);
    console.log('heres the type of hotel', typeof hotels);
    console.log('heres the hotel index', hotels[0]);
    console.log('heres the type of hotelarray', typeof hotelsArray);

    if( hotelRestarntOrAty === "Hotels"){
        $("#hotel-itinerary").append(createdElement)
        var location,
        hotelObjWeWant;

        for(var i = 0; i < hotels.length; i++){
          if(hotels[i].name === selectedItemValue){
            hotelObjWeWant = hotels[i];
          }
        }
        console.log('heres the hotelObjWeWant', hotelObjWeWant)
        var locationForHotel = hotelObjWeWant.place.location //this is an array
        console.log('heres the hotel location', locationForHotel);
        drawMarker('hotel', locationForHotel, currentMap);

    }
    else if (hotelRestarntOrAty === "Restaurants"){
        $("#restaurant-itinerary").append(createdElement)
         var location,
         restObjWeWant;

        for(var i = 0; i < restaurants.length; i++){
          if(restaurants[i].name === selectedItemValue){
            restObjWeWant = restaurants[i];
          }
        }

        var locationForRest = restObjWeWant.place.location //this is an array
        console.log('heres the restObjWeWant', locationForRest);
        drawMarker('restaurant', locationForRest, currentMap);

    }
    else if (hotelRestarntOrAty === "Activities"){
        $("#activity-itinerary").append(createdElement)
         var location,
         actyObjWeWant;

        for(var i = 0; i < activities.length; i++){
          if(activities[i].name === selectedItemValue){
            restObjWeWant = activities[i];
          }
        }

        var locationForRest = restObjWeWant.place.location //this is an array
        console.log('heres the restObjWeWant', locationForRest);
        drawMarker('activity', locationForRest, currentMap);
    }
    else{
      console.log("you fucked up");
    }
    //dataset.type
    //look at what parent value is
    // if (hotels ) -> id hotel_itinerary
});
    //$(this).siblings()
    //.find('options').filter(':selected').val()
    //$(this).siblings().children().val());
    console.log('you clicked a button!');
    // asdf.currentTarget  will return the button html element that was clicked


  // $( "select" )
  // .change(function() {
  //   var str = "";
  //   $( "select option:selected" ).each(function() {
  //     str += $( this ).text() + " ";
  //   });
  //   console.log('heres str selected output', str);
  // })

});
