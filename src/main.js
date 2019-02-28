const objPelis=[];
const firstPage =document.getElementById("first-page")
//let i=0;
const arrayPelis =['Get out','Psycho','The babadook','The cabinet of Dr. Caligari','The silence of the Lambs','Girls Trip','Zoolander','I Heart Huckabees','Tenacious D in The Pick of Destiny','Bridesmaids','Indiana Jones','Star Wars','Jumanji','Jurassic Park','Pirates of the Caribbean: The Curse of the Black Pearl','Mad Max: Fury Road','E.T.The Extra-Terrestrial','Metropolis','Gravity','War for the Planet of the Apes','Wall-E','Die Hard','Terminator 2: Judgment Day','The Dark Knight','Drive'];
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



function getMovies(NewArray) {
    const stringMovies = JSON.parse(localStorage.getItem('data'));
    const sectionOne = firstPage;
    sectionOne.innerHTML='';
    NewArray.map((ObjPelis) => {
      sectionOne.innerHTML+= `
      <div class="nameList"><div class="rolPersonajes"><img class="splashPresentation" src="${ObjPelis.Poster}"></div></div>
      `
    })
  }

    // //console.log(stringPokemon);
    // //objPelis.push(stringMovies);
    console.log(objPelis);
    
  