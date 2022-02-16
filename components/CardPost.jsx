import { formatearFecha } from "../helpers";
import Link from "next/link";
import Image from 'next/image'


const CardPost = ({ entrada }) => {
  
  const { title, resume, image, published_at, id, slug } = entrada;
  
  return (
    <>
      <article className="w-full p-5">

        <div className="flex flex-col h-full max-w-lg mx-auto bg-white rounded">
          <img src={image[0].url} alt="" />
          {/* <Image
            layout="responsive"
            src={image[0].url}
            alt="Picture of the author"
            width={749}
            height={422}
          /> */} 
          <div className="flex justify-between -mt-4 px-4">
            <span className="inline-block  bg-secondary text-white rounded text-sm font-medium tracking-wide px-3 pt-0.5">
              Categoria
            </span>
          </div>
        
          <div className="py-2 px-4">
            <h2 className="text-xl font-bold leading-6 tracking-wide cursor-pointer mt-2">
              {title}
            </h2>
          </div>
          <div className="px-4 space-y-2 mt-2">
            <p className=" font-semibold text-primary">{formatearFecha(published_at)}</p>
          </div>
          <div className="px-4 space-y-2">
            <p className="font-normal leading-5 tracking-wide">{resume}</p>
          </div>
          
          <div className="flex flex-row items-end h-full w-full px-4 mt-4">
            <div className="flex border-t border-primary w-full py-4">
              <Link href={`/blog/${slug}`}>
                <a className="bg-pink-200 text-dark font-semibold px-2 w-full text-center rounded p-2">
                  Ver más
                </a>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default CardPost;
