import MovieBox from "../movie_box"

const getData = async()=>{
        const data = await fetch('https://moviesapi.ir/api/v1/movies', {cache: 'no-store'});
        
    return data.json();
}

const Movies = async() => {
    const data = await getData();
    const movies = data.data;
    
    return (
        <div className="flex flex-wrap px-4 items-center justify-center py-4">
            {
                movies.map((movie,index) => (
                    <MovieBox key={index} data={movie}/>
                ))
            }
        </div>
    );
}

export default Movies;