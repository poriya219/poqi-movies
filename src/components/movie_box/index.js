import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";

const MovieBox = async({data}) => {
    return (
        <div className=" w-64 h-[410px] rounded-lg border-white border-2 mx-2 my-2" style={{direction: "ltr"}}>
                <Image
                className="rounded-tl-lg rounded-tr-lg"
                style={{ width: '256px', height: '300px', overflow: 'hidden', position: 'relative' }}
                src={data.poster}
                alt={data.title}
                width={256}
                height={300}
                layout="fixed"
                />
                <div className="flex flex-col justify-between h-[110px]">
                <Link
                href={`/movies/${data.id}`}
                className="py-2 text-white font-bold px-2 line-clamp-2 hover:text-cyan-700 duration-500 transition-all">
                    {data.title}
                </Link>
                <div className="flex items-center justify-between px-2 pb-4">
                <div className="bg-gray-500 text-sm text-black rounded-lg p-2 line-clamp-1 max-w-40 max-h-[33px]">
                    {data.year} {data.country}
                </div>
                <div className="flex bg-gray-500 text-sm text-black rounded-lg p-2 items-center justify-center gap-2">
                <FaStar
                style={{color: "yellow"}}
                />
                    {data.imdb_rating} 
                    
                </div>
                </div>
                </div>
        </div>
    );
}

export default MovieBox;