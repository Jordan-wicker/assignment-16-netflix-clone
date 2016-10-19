//Shell Script sanity checks
//========================================
//console.log($)
//console.log('JS Works')
//========================================





//Student Notes: So I feel like this is a pretty ok setup for my JS file.
//I asked a bunch of people questions and felt like I was finally getting a grasp on this
//But I literally can't get anything to render on my HTML.
//So after 3 days of working and playing with it I'm at a loss and am just gonna submit it.
//I know this is probably a half assed attempt but I tried hard.









var userList = {
   matt: {username: "Matt", showIds: [170,169,175,318,76,270, 255]},
   ed: {username: "Ed", showIds: [5853,431,80,279,570,76,73,20540,83,17119]},
   michelle: {username: "Michelle", showIds: [83,576,735,73,749,170,112,80]},
   justin: {username: "Justin", showIds: [551,169,490,530,73,302, 547, 532]},
}
//console.log(userList)


var forEach = function(arr, cb){
  for(var i = 0 ; i < arr.length; i+=1){
     cb(arr[i], i, arr)
  }
}


var router = function(){
  var selectedUser = window.location.hash.slice(1)

  if(selectedUser.length === 0){
     accountSelector()


     return
}
  console.log( selectedUser )
  showsPage(selectedUser)
}

var accountSelector = function(){
   var accountSelectorHTML = '<div class="row container1">'
       accountSelectorHTML += "<h2>Who's Watching?</h2>"

   for(var prop in userList) {

       accountSelectorHTML +=    '<div class="col-xs-6 col-sm-3 text-center userbox">'
       accountSelectorHTML +=      '<a href="#' + prop + '">'
       accountSelectorHTML +=        '<img src="https://flathash.com/' + prop + '">'
       accountSelectorHTML +=        '<h3>' + userList[prop].username + '</h3>'
       accountSelectorHTML +=      '</a>'
       accountSelectorHTML +=    '</div>'
   }

       accountSelectorHTML += '</div>'
       containerEl.innerHTML = accountSelectorHTML
   }

 var showsPage = function(usr) {
    var usrObj = userList[usr]

    var showsPageHTML =    '<a href="#" class="home"><i class="fa fa-home fa-4x houseIcon" aria-hidden="true"></i></a>'
        showsPageHTML +=   '<h2><span class="bg-danger" style="font-size:2em; color:#000">' + usrObj.username + '\'s</span> Titles </h2>'
        showsPageHTML +=   '<div class="row titles-list"></div>'

        containerEl.innerHTML = showsPageHTML

   var showSelctor = usrObj.showIds[0]


   forEach(usrObj.showIds, function(elementNum) {


    $.getJSON("http://api.tvmaze.com/shows/" + elementNum).then(function(data) {
      console.log(data)


      var showSelector = document.querySelector('.titles-list')


      var showSelectorHTML =  '<div class="col-sm-3 columnContainer text-center">'
          showSelectorHTML +=              "<img src='" + dataResponse.image.medium + "'>"
          showSelectorHTML +=              "<h4>" + dataResponse.name + "</h4>"
          showSelectorHTML +=         '</div>'


          showSelector.innerHTML += showSelectorHTML

       })
   })
}
router()
window.addEventListener('hashchange', router)





   var containerEl = document.querySelector('containerEl')
