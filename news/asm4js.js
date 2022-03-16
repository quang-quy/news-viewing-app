
$(document).ready(function () {
    var url = "https://gnews.io/api/v4/top-headlines?token=b9a19c53194967dc1504e0dd242b4d17";
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
          
            let arr = data.articles;
            let str = "";
            for (let i = 0; i < arr.length; i++) {
                str += `<div class="row"><div class="col-md-3"><img src="${arr[i].image}"></div>
                <div class="col-md-9"><a target="_blank" href="${arr[i].url}">${arr[i].title}</a><div>${arr[i].content}</div></div>
                </div>`
            }
            document.getElementById("content").innerHTML = str;
        });
             
$("#show").click(function(){
    $("#ct2").css("display","block")
})
        
    $("#search").click(function () {
        var queryString = $("#textSearch").val();
         url = "https://gnews.io/api/v4/search?q=" + queryString + "&token=b9a19c53194967dc1504e0dd242b4d17";

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
              
                let arr = data.articles;
                let str = "";
                for (let i = 0; i < arr.length; i++) {
                    str += `<div class="col-md-3"><img src="${arr[i].image}"></div>
                <div class="col-md-9"><a target="_blank" href="${arr[i].url}">${arr[i].title}</a></div>
                <div>${arr[i].description}</div>`
                }
                document.getElementById("content").innerHTML = str;

            });


    })
})




