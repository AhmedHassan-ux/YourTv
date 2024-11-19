const basePath = 'https://image.tmdb.org/t/p/w500'
let typename = null ;
let title = null;
let iframe = document.createElement('iframe');

function reloadPage() { location.reload(); };

function go_to (ineerId){
  document.getElementById('container').innerHTML = `
  <!DOCTYPE html>
  <html lang="en" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>

     body {
     
      background-size: cover;  /* Makes sure the image covers the whole screen */
      background-position: center center;  /* Centers the image */
      background-repeat: no-repeat;  /* Prevents the image from repeating */
    }

      .release-date, .title, .overview {
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #ccc;
        color: white;
        font-weight: bold;
      }
      .overview {
        height: 100%;
        color: white;
        font-weight: bold;
      }
      .actors {
        margin-top: 0%;
        color: white;
        text-align: right;
        display: inline-flex;
        flex-wrap: wrap; /* السماح بالالتفاف */
        flex-direction: column; /* الاتجاه عمودي */
        max-height: 150px; /* تحديد الحد الأقصى للارتفاع */
        overflow-y: auto; /* إضافة شريط تمرير إذا تجاوز المحتوى */
      }
      .actor-pic {
      color: white;
        margin: 0;
        justify-content: center;
      }
      .actor-pic img {
      color: white;
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      p {
        margin: 3%;
        color: white;
        
      }


      

      h5 {
      
        margin-left: 10px;
        color : white;
        font-weight: bold;
        text-align: right;
        display: inline-flex;
        flex-wrap: wrap; /* السماح بالالتفاف */
        flex-direction: column; /* الاتجاه عمودي */
        max-height: 150px; /* تحديد الحد الأقصى للارتفاع */
        overflow-y: auto; /* إضافة شريط تمرير إذا تجاوز المحتوى */
  }

      h5:hover {
      cursor: pointer;
  }

.imageSrc {
    display : flex;
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; 
    height: 100%;
    overflow: hidden;
}


.iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 95%;
}
  
    </style>
    <title>${title}</title>
  </head>
  <body class="body">
    <div class="container">
    <div id = "imageSrc" class = "imageSrc" >
    <iframe class = "iframe" src="${ineerId.custom_link}" frameborder="0" marginwidth="0" marginheight="0" scrolling="NO" width="100%" height="100%" allowfullscreen="  sandbox="allow-scripts "></iframe>
    </div>
       <div class="title">اسم ${typename}: ${title}</div>
      <div class="release-date">تاريخ الاصدار: ${ineerId.release_date}</div>
      <div class="overview" id ="overview">قصه ${typename}: ${ ineerId.overview}</div>
      <div class="actors" id="actors-container"></div>
    </div>

  </body>
  </html>
  `;

  ///////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const actorsContainer = document.getElementById('actors-container');
  for (let i = 0; i < ineerId.cast.length; i++) {
    const DynamicMoviepic = document.createElement('div');
    DynamicMoviepic.classList.add("actor-pic");
    actorsContainer.appendChild(DynamicMoviepic);
    const p = document.createElement('p');
    p.classList.add('p');
    p.innerText= ineerId.cast[i].name;
    const img = document.createElement('img');
    img.src = basePath+ineerId.cast[i].profile_path ; // Set your default image path here
    DynamicMoviepic.appendChild(img);
    DynamicMoviepic.appendChild(p);
    }      
}

document.addEventListener('DOMContentLoaded', function() {

  document.body.style.backgroundImage  = [`url('${basePath+tvshowsDatabase[Math.floor(Math.random() * tvshowsDatabase.length)].backdrop_path}')`,`url('${basePath+moviesDatabase[Math.floor(Math.random() * moviesDatabase.length)].backdrop_path}')`]; 
  //[ ] ;
      //===========================================Movie===========================================
     
    const h1Movie = document.createElement('h8');
    h1Movie.classList.add('h1Movie')
    h1Movie.innerHTML = `
    <h15>احدث  الافلام</h15>
    `;
    container.appendChild(h1Movie);
    const moviesList = document.createElement('div');
    moviesList.classList.add('moviesList');
    container.appendChild(moviesList);
    moviesDatabase.forEach(moviesDatabase => {
         
        // if (movie.year === 2014) {
            const movieItem = document.createElement('div');
            movieItem.id = moviesDatabase.id
        movieItem.classList.add('movie');
        movieItem.style.backgroundImage = `url('${basePath+moviesDatabase.poster_path}')` ;
        moviesList.appendChild(movieItem);
        // }
       
    });
    
    

    //===========================================Esposide===========================================
    const h1Esposide = document.createElement('h8');
    h1Esposide.classList.add('h1Esposide')
    h1Esposide.innerHTML = `
    <h15>احدث المسلسلات</h15>
    `;
    container.appendChild(h1Esposide);
    const EsposideList = document.createElement('div');
    EsposideList.classList.add('EsposideList');
    container.appendChild(EsposideList);
    tvshowsDatabase.forEach(tvshowsDatabase => {
    
        // if (movie.year === 2014) {
            const EsposideItem = document.createElement('div');
            EsposideItem.id = tvshowsDatabase.id
            EsposideItem.classList.add('movie');
            EsposideItem.style.backgroundImage = `url('${basePath+tvshowsDatabase.poster_path}')` ;
            EsposideList.appendChild(EsposideItem);
        // }
           
    });




//where  div clicked movie
moviesList.addEventListener('click', function(e) {
let ineerId = moviesDatabase.find(m => m.id == e.target.id)  ;
 typename = 'الفيلم';
 title = ineerId.title;
 document.body.style.backgroundImage  = `url('${basePath+ineerId.backdrop_path}')`;
 

go_to (moviesDatabase.find(m => m.id == e.target.id))
  }); 


//where  div clicked esposide
 EsposideList.addEventListener('click', function(e) {
 let ineerId = tvshowsDatabase.find(m => m.id == e.target.id)  ;
  typename = 'المسلسل';
  title = ineerId.name;

    go_to (tvshowsDatabase.find(m => m.id == e.target.id));
    const seasonscount = document.createElement('div');
    container.appendChild(seasonscount); 
    let overview =  document.getElementById('overview');
    const imageSrc =  document.getElementById('imageSrc'); 
    imageSrc.innerHTML = '';  
    document.body.style.backgroundImage  = `url('${basePath+ineerId.backdrop_path}')`;
    
    const EspDiv = document.createElement('div');
    container.appendChild(EspDiv);

    for (let i = 0; i < ineerId.seasons.length; i++) {
        const h5 = document.createElement('h5');
        h5.id = i ;
        h5.innerText='الموسسم   '+ineerId.seasons[i].season_number;

        EspDiv.appendChild(h5);
        ses (0);
        function ses(non){
          const chseason = ineerId.seasons[non];
          seasonscount.innerHTML='';
          overview.innerHTML = chseason.overview;
          document.body.style.backgroundImage  = `url('${basePath+chseason.image_url}')`

          for (let i = 0 ;i < chseason.episode_count ;i++){
           const h5 = document.createElement('button');
           h5.style.cursor = 'pointer';
           h5.style.borderRadius = '50%';
           h5.id = i ;
           h5.innerHTML = i+1;
           seasonscount.appendChild(h5);
            // event to
            h5.addEventListener('click', function(e) {
            overview.innerHTML = chseason.episodes[e.target.id].overview;  
            iframe.classList.add("iframe");
            iframe.setAttribute('src', chseason.episodes[e.target.id].custom_link);  // URL to embed in the iframe
            iframe.setAttribute('frameborder', '0');             // Removes border around the iframe
            iframe.setAttribute('marginwidth', '0');             // No left/right margin inside the iframe content
            iframe.setAttribute('marginheight', '0');            // No top/bottom margin inside the iframe content
            iframe.setAttribute('scrolling', 'no');              // Disable scrolling inside the iframe
            iframe.setAttribute('width', '100%');                 // Set iframe width to 100% of the parent container
            iframe.setAttribute('height', '100%');                // Set iframe height to 100% of the parent container
            iframe.setAttribute('allowfullscreen', ''); 
            document.body.style.backgroundImage  = `url('${basePath+chseason.episodes[e.target.id].image_url}')`
            imageSrc.appendChild(iframe);
           
            
            });

           }; 
        };

     

        ///event to  show espside
        h5.addEventListener('click', function(e) {
        non = e.target.id;
          ses (non);                   
           
            });

              }  

          }); 
    });


   

    
   
