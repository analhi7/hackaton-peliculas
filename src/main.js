const objPelis=[];
const firstPage =document.getElementById("first-page")
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
    getMovies(objPelis)
  }) 
  //console.log (data); 
  
  .catch(err => (err))
}



function getMovies(objectPelis) {
    //const stringMovies = JSON.parse(localStorage.getItem('data'));
    const sectionOne = firstPage;
    sectionOne.innerHTML='';
    objectPelis.forEach( element => {

      let section = `
      <div class="nameList"><div class="rolPersonajes"><img class="splashPresentation" src="${element.Poster}"></div></div>
      
      ` 
      firstPage.insertAdjacentHTML("beforeend",section);
      console.log(sectionOne)
    }); 
      
  
  }
  

    // //console.log(stringPokemon);
    // //objPelis.push(stringMovies);
   // console.log(objPelis);
    
  