export const imagePath = (path)=>{
    return `https://image.tmdb.org/t/p/original${path}`
}

export const truncateText=(str="", limit)=>{
    if(str.length < limit){
        return str;
    }else{
        let text = str.substring(0, limit);
        return text + "...";
    }
}

export const printYear=(dateString)=>{
    let date = new Date(dateString);
    return date.getFullYear();
}

export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
