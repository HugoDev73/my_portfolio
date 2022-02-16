import React from 'react';
import Link from 'next/link'
import styles from '../../styles/Entrada.module.css';

import Container from '../../components/Layout/Container'
/* import { useRouter } from 'next/router' */

const PostPage = ({entrada}) => {
    
    /* const router = useRouter()
    console.log(router.query) */

    return (
        <>
            <Container>
                <div className="text-gray-300 ">
                    <div className="container mx-auto">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <div>
                                <p className="mb-4 inline-block text-xs font-semibold tracking-wider text-primary uppercase rounded-full">
                                    Categoria
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
                                {entrada.title}
                            </h2>
                            <p className="text-base md:text-lg">
                                {entrada.resume} 
                            </p>
                        </div>
                        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                            <img
                                className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                                src={entrada.image[0].url}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="container">
                        <p className={styles.texto }>
                        {entrada.content}
                        </p>
                    </div>
                </div>
            </Container>
        </>
    );
}

export async function getServerSideProps({query: {slug}}) {
    console.log(slug)
    const url = `${process.env.API_URL}/blogs?slug=${slug}`;
    const respuesta = await fetch(url);
    const entrada = await respuesta.json();
    return {
      props: {
        entrada: entrada[0]
      }
    }
  }

export default PostPage;
