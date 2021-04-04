function moviesearch() {
    var movie = document.getElementById("input").value;

    var httprequest = new XMLHttpRequest();

    var url = "https://www.omdbapi.com/?i=tt3896198&apikey=86dd1147&t=" + movie;

    


    httprequest.open("GET", url);
    httprequest.send();

    httprequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);

            console.log(data);

            var count = Object.keys(data.Ratings).length;
            console.log(count);

            document.getElementById("poster").src = data.Poster;
            document.getElementById("title").innerHTML = data.Title;
            document.getElementById("rated").innerHTML = data.Rated;
            document.getElementById("year").innerHTML = data.Year;
            document.getElementById("runtime").innerHTML = data.Runtime;

        

            if ( count > 1 && data.Ratings[0].Source == "Internet Movie Database" && data.Ratings[1].Source == "Rotten Tomatoes") {  
                document.getElementById("imdb_rate").innerHTML = data.Ratings[0].Value;
                document.getElementById("rt_rate").innerHTML = data.Ratings[1].Value;
            }
            else if(count == 1 && data.Ratings[0].Source == "Internet Movie Database" ){
                document.getElementById("imdb_rate").innerHTML = data.Ratings[0].Value;
                document.getElementById("rt_rate").innerHTML = "NA";
            }
            else{
                document.getElementById("rt_rate").innerHTML = "NA";
                document.getElementById("imdb_rate").innerHTML = "NA";
            }


            document.getElementById("genre").innerHTML = data.Genre;
            document.getElementById("country").innerHTML = data.Country;
            document.getElementById("language").innerHTML = data.Language;
            document.getElementById("dir_data").innerHTML = data.Director;
            document.getElementById("wri_data").innerHTML = data.Writer;
            document.getElementById("act_data").innerHTML = data.Actors;
            document.getElementById("aw_data").innerHTML = data.Awards;
            document.getElementById("plot").innerHTML = data.Plot;

        }

    }

    if (document.getElementById("m_card").style.display == 'none') {
        document.getElementById("m_card").style.display = 'block';
        document.getElementById("m_search").style.marginTop="10%"        
    }

}
