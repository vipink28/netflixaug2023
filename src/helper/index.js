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
