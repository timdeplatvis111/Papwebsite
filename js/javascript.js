/* Waypoint 
var waypoint = new Waypoint
({
    element: document.getElementById('yeet'),
    handler: function() 
    {
      var element = document.getElementById("highlight");
       element.classList.add("animated");
       element.classList.add("flash");
        element.classList.add("infinite");
        element.classList.add("slower");
        console.log("YEET")
    },
    offset: 600
})
*/

function topFunction() 
{
    document.body.scrollTop = 4000; // For Safari
    document.documentElement.scrollTop = 4000; // For Chrome, Firefox, IE and Opera
    
    var element = document.getElementById("highlight");
    element.classList.add("animated");
    element.classList.add("flash");
    element.classList.add("infinite");
    element.classList.add("slower");

    var element2 = document.getElementById("highlight2");
    element2.classList.add("animated");
    element2.classList.add("flash");
    element2.classList.add("infinite");
    element2.classList.add("slower");
    console.log("YEET")
    
}