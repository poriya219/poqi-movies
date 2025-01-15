import ImageCarousel from "@/components/carousel";
import Similiars from "@/components/similars";
import Image from "next/image";

const getData = async(id)=>{
    const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {cache: "no-store"});
    return data.json();
}

const MoviePage = async({params}) => {
    const param = await params;
    const id = param.slug;
    const data = await getData(id);
    return (
        <div>
            <div className="flex text-black bg-[#84c4eb] mx-10 mt-10 mb-4 justify-between rounded-lg">
            
            <div className="flex flex-col mx-6 my-4 gap-4">
                <h1>
                    نام فیلم: {data.title}
                </h1>
                <a>
                امتیاز imdb: {data.imdb_rating}
            </a>
            <a>
                سال ساخت: {data.year}
            </a>
            <a>
                مدت زمان: {data.runtime}
            </a>
            <a>
                کارگردان: {data.director}
            </a>
            <a>
                نویسنده: {data.writer}
            </a>
            <a>
                بازیگران: {data.actors}
            </a>
            <a>
                کشور سازنده: {data.country}
            </a>
            <a>
                جوایز: {data.awards}
            </a>
            <a>
                خلاصه داستان: {data.plot}
            </a>
            </div>
            <Image
            className="rounded-tl-lg rounded-bl-lg"
            src={data.poster}
            alt={data.title}
            width={320}
  height={480}
            />
        </div>
        <div className="flex items-center justify-start mx-10">
        {data.genres.map((genre, index)=> (
            <div key={index} className="bg-[#84c4eb] px-2 mx-2 rounded-lg text-black">
                {genre}
            </div>
        ))}
        </div>
        <ImageCarousel images={data.images}/>
        <Similiars id={id}/>
        </div>
    );
}

export default MoviePage;