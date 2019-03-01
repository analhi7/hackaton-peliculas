const objPelis=[];

const cardSection= document.getElementById("card-section")
const characterFromList = document.getElementsByClassName("nameList");
//let i=0;
const arrayPelis =['Get out','Psycho','The babadook','The cabinet of Dr. Caligari',];
url = 'http://www.omdbapi.com/?t=';

for (let i=0; i< arrayPelis.length; i++)
{   
   let url_pelis = url+arrayPelis[i]+'&apikey=4c2bc917'
   fetch(url_pelis ) //lectura del archivo .json
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('data', JSON.stringify(data))
   // console.log (data); 
    objPelis.push(data);
    //console.log(objPelis);
    const dataMovies =  objPelis;
    getMovies(dataMovies);
    return dataMovies;
    
  }) 
  //console.log (data); 
  //getMovies(dataMovies)
  //.catch(err => (err))
}


const firstPage =document.getElementById("first-page")
function getMovies(dataMovies) {
  console.log(dataMovies);
    //const stringMovies = JSON.parse(localStorage.getItem('data'));
    //const section = firstPage;
    firstPage.innerHTML;
    let section ='';
   for(let i in dataMovies) {
    section = section+`
     
      <img src="${dataMovies[i].Poster}" class="d-block w-25" alt="...">
  
 
      `
      firstPage.insertAdjacentHTML("beforeend",section);
      return firstPage;
   }

   console.log(firstPage)     
  
  }
  




  

  // const printCardMovie = (objectPelis)=>{
  //   firstPage.innerHTML = "";
  //   objectPelis.forEach(element=>{
  //     let cardMovie= `
  //     <div class="nameList"><div class="rolPersonajes"><img class="splashPresentation" src="${element.Poster}"></div></div>
      
  //     ` 
  //     firstPage.insertAdjacentHTML("beforeend",cardMovie);
     
  //     for (let i = 0; i < characterFromList.length; i++) {
  //       characterFromList[i].addEventListener('click', () => {
  //   console.log('si funciono')
    
  //       })
  //     }


  //   })
  // }

    // //console.log(stringPokemon);
    // //objPelis.push(stringMovies);
   // console.log(objPelis);
    
  