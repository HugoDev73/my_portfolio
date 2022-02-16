import React from "react";
import Head from "next/head";
import Container from "../../components/Layout/Container";
import CardPost from "../../components/CardPost";

const Blog = ({ entradas }) => {
  const url =  `${process.env.NEXT_PUBLIC_API_URL}/blogs`;

  
  return (
    <>
      <Container>
        <Head>
          <title>Hugo Mendoza - Blog</title>
          <meta
            name="description"
            content="Blog de derassolo web y tecnologias en la nube"
          />
        </Head>
        <div className="index w-full text-gray-100">
          <div className=" h-64 m-0 w-full flex flex-wrap content-center text-center p-5">
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 className=" -max-w-lg mb-2 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
                Bienvenido a mi Blog
              </h2>
              <div className="mx-auto w-1/5 pt-3 border-b-2 border-primary mb-6" />
              <p className="text-base md:text-lg">
                Noticias, tutoriales, y recursos relacionados a tecnologia en
                general podras encontrar en esa seccion.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 w-full">
          <div className="container grid grid-cols- md:grid-cols-2 lg:grid-cols-3  w-full">

            {entradas.map(entrada => (
              <CardPost key={entrada.id} entrada={entrada} />
            ))}

            {/* <div className="proximamente h-48 mt-5">
                <p className="font-bold text-3xl w-full">
                En desarrollo..
                </p>
            </div> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export async function getServerSideProps() {
  const url =  `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  return {
    props: {
      entradas
    }
  }
}

export default Blog;
