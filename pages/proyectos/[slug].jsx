import React from 'react';
import Link from 'next/link'

import Container from '../../components/Layout/Container';

const ProjectPage = () => {
    return (
        <>
            <Container>
            <div className="text-gray-300 ">
                    <div className="container mx-auto">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <div>
                                <p className="mb-4 inline-block text-xs font-semibold tracking-wider text-primary uppercase rounded-full">
                                    Tecnologias: Next Js, Django Rest Framework
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
                                Titulo del proyecto
                            </h2>
                            <p className="text-base md:text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium mollitia alias ex optio exercitationem quaerat, sit quia aliquam provident deleniti perspiciatis quo 
                            </p>
                        </div>
                        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                            <img
                                className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                                src="https://www.qualitydevs.com/wp-content/uploads/2017/12/desarrollador-1288x724.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="container">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quia odit? Deleniti repellendus voluptas dolores architecto porro a, libero natus rem culpa debitis alias minima id officia maiores? Quaerat, labore.
                    </div>
                </div>
            </Container>
        </>
    );
}

export default ProjectPage;
