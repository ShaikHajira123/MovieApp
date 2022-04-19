  



 let container=document.getElementById('container')
    // 3b7e3a90
    async function getMovies(){
        let gifdiv=document.createElement('div')
        gifdiv.id="gifdiv"
        let source="https://lh5.googleusercontent.com/proxy/HqNXitJgBNhVPckrtEpfERRRr6xfen-fyra7vcCQu2ggo9UGqkRmtv33ztNwcCRKhgAqKp0g6j6q=s0-d"
        try{
            let input=document.getElementById("search").value
        let res = await fetch( `http://www.omdbapi.com/?i=tt3896198&apikey=3b7e3a90&s=${input}`);

        let data = await res.json();
        displayMovie(data)
        //console.log(data)
    }catch(error){
        container.innerHTML=""
        let gif=document.createElement("img")
         gif.src=source
        gifdiv.append(gif)
        container.append(gifdiv)
        console.log(error)
    }
}

    
    function displayMovie(movie){
       container.innerHTML=""
     movie.Search.forEach(function(elem){
         let div=document.createElement('div')

         let image=document.createElement("img")
         image.src=elem.Poster

         
         let title=document.createElement("h2")
         title.innerHTML=elem.Title
         
         let year=document.createElement("h3")
         year.innerHTML=elem.Year
         
         let rate=(Math.random()*(9.5-4.5+1)+4.5).toFixed(1);
         let id=document.createElement("h4")
         id.innerHTML=`IMDB Ratings:  ${rate}`
         if(rate>8.5){
             id.innerHTML="Recommended"
         }
         div.append(image,title,year,id)

         document.getElementById('container').append(div)

      
})
    }
    

    async function searchMovies(){
        try{
            let input=document.getElementById("search").value
        let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3b7e3a90&s=${input}`);
    
        let data = await res.json();
      return data
    }catch(error){
        console.log(error)
    }
    }

async function main(){
  
    let data=await searchMovies()

    if(data===undefined){
        return false
    }
    //console.log(data)
    appendData(data)
}
 let movies_div=document.getElementById('movies')

 function appendData(movies){
     movies_div.innerHTML=null
    movies.Search.forEach(function(elem){
        let div5=document.createElement('div')
        div5.setAttribute('id','smalldiv')
        
        div5.onclick=()=>{
            localStorage.setItem("clicked_movie",JSON.stringify(elem))
            window.location.href="show.html"
           
        }
      
         let image=document.createElement("img")
         image.src=elem.Poster
         image.setAttribute("id","smallimg")

         let div1=document.createElement('div')
         div1.setAttribute('id','smallerdiv')

         let title=document.createElement("p")
         title.innerHTML=elem.Title
         title.setAttribute('id','title')

         let year=document.createElement("p")
         year.innerHTML=elem.Year

        
         div1.append(title,year)
         div5.append(image,div1)
         movies_div.append(div5)
    
    })
 

 }


async function trendMovies(){
    try{
    let res = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_ejiw09vu`);
    let data = await res.json();
   console.log(data)
displaytrendMovie(data)
}catch(error){
    console.log(error)
}
}
trendMovies()

 
function displaytrendMovie(movie){
  movie.items.forEach(function(elem){
      let div=document.createElement('div')

      let image=document.createElement("img")
      image.src=elem.image

      
      let title=document.createElement("h2")
      title.innerHTML=elem.title
      
      let year=document.createElement("h3")
      year.innerHTML=`Year : ${elem.year}`
      
      let id=document.createElement("h4")
      id.innerHTML=` IMBD Ratings:  ${elem.imDbRating}`
     
      div.append(image,title,year,id)

      document.getElementById('container').append(div)

   
})
 }

