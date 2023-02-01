var value

function getData(input){
    var str = input;
    $.ajax({
        type: "GET",
        url: " http://localhost:3000/getData?search="+ input,
        dataType: "json",
        success: function (response) {
          response = Object.values(response)
          value = response.map(d => d.patientdata)
          localStorage.setItem(str, value)
          console.log(value)
        }
    });
}
items();
setInterval(function(){
    items();
}, 5000);

async function items() {
  getData('temp'); 
  getData('bpressure'); 
  getData('bsugar'); 
  getData('cholestrol'); 
  getData('heartb'); 


  $("#signout").click(function (e) { 
    window.location.replace("http://localhost:3000/");
  });


 



    let options = {
        startAngle: -1.55,
        size: 150,
        value: localStorage.getItem('temp'),
        fill: {gradient: ['#7979d8, #5153ee']}
      }
    $(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2)));
    });
    $(".temp .bar").circleProgress({
        value: localStorage.getItem('temp')
      });
    $(".bpressure .bar").circleProgress({
        value: localStorage.getItem('bpressure'),
      });
    $(".bsugar .bar").circleProgress({
        value: localStorage.getItem('bsugar')
      });
    $(".cholestrol .bar").circleProgress({
        value: localStorage.getItem('cholestrol')
      }); 
    $(".heartb .bar").circleProgress({
        value: localStorage.getItem('heartb')
      }); 
    
} 