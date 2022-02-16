import Head from "next/head";
import Container from "../components/Layout/Container";

import Header from "../components/Header";
import CardFormation from "../components/CardFormation";
import Skill from "../components/Skill";

import { skills, education, proyectos } from "../data";
import Title from "../components/Util/Title";

export default function Home() {
  return (
    <>
      <Container>
        <Head>
        <title>Hugo Mendoza - Desarrollador Web</title>
        <meta
          name="description"
          content="Sitio web personal de Hugo mendoza - Programador web"
        />
        </Head>
        <div className="index w-full ">
          <div className="container">
            <Header />
          </div>

          {/* SKILLS */}
          <div className="skills  w-full bg-gray-200">
            <section className="container">
              <Title text="Habilidades" />
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                {skills.map(({ skill, icon, text }, i) => (
                  <Skill icon={icon} title={skill} text={text} key={i} />
                ))}
              </div>
            </section>
          </div>

          {/* FORMACION */}
          <div className="formacion w-full bg-gray-200">
            <section className="container">
              <Title text="Formación Académica" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {education.map(
                  (
                    {
                      category,
                      title,
                      specialty,
                      date,
                      institution,
                      imagen,
                      documento,
                    },
                    i
                  ) => (
                    <CardFormation
                      key={i}
                      category={category}
                      title={title}
                      specialty={specialty}
                      date={date}
                      institution={institution}
                      imagen={imagen}
                      documento={documento}
                    />
                  )
                )}
              </div>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
