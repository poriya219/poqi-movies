import Link from "next/link";

const getSimilars = async()=>{
    const data = await fetch('https://moviesapi.ir/api/v1/movies', {next: {revalidate: 86400}})
    return data.json();
}

const Similiars = async({id}) => {
    const s = await getSimilars();
    const similars = s.data;
    const filteredSimilars = similars.filter((s)=> s.id != id);
    const finalSimilars = filteredSimilars.slice(0, 5);
    
    return (
        <div>
            <p>
            فیلم های دیگر:
        </p>
        <div className="flex flex-wrap pt-2 pb-8">
            {
                finalSimilars.map((sMovie, index)=>(
                    <div key={index} className="bg-gray-500 py-1 px-2 mx-2 my-2 rounded-lg text-white hover:text-cyan-500 duration-500 transition-all">
                        <Link href={`/movies/${sMovie.id}`}>
                        {sMovie.title}
                        </Link>
                    </div>
                ))
            }
        </div>
        </div>
    );
}

export default Similiars;