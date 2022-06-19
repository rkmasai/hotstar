
    var api_key= "ccb731be";

    

   async function mybutton(){
       
       
        movies= document.getElementById("movie").value

        var url= "http://www.omdbapi.com/?apikey="+api_key+"&t="+movies

      //  var nurl= url+"&t="+movies
        let res = await fetch(url)
        let data= await res.json()
        console.log(data)
        
        adddata(data)
        

    

    }

    function adddata(data)
    {
        var container= document.getElementById("container")
            container.innerHTML=null
        
            var image= document.createElement("img")
            image.src=data.Poster
            

            var Tiltle= document.createElement("h1")
            Tiltle.innerText="Title   "+data.Title
            Tiltle.style.color="red"

            var year= document.createElement("p")
            year.innerText="Year : - "+data.Year

            var actor= document.createElement("p")
            actor.innerText="Actors : "+data.Actors
            var rel = document.createElement("p")
            rel.innerText="Released :- "+data.Released
            var lan = document.createElement("p")
            lan.innerText="Language :- "+data.Language

            container.append(image, Tiltle, year, actor, rel, lan)

            
       
    }