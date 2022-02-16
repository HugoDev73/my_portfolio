import React from 'react'
import Link from 'next/link'

const CardProject = () => {
 
    return (
        <>
            <div className="w-full p-5">
                <div className="flex flex-col h-full max-w-lg mx-auto bg-white rounded">
                    <img className="rounded-lg rounded-b-none" src="https://www.qualitydevs.com/wp-content/uploads/2017/12/desarrollador-1288x724.jpg" alt="thumbnail" loading="lazy" />
                    <div className="flex justify-between -mt-4 px-4">
                    </div>
                    <div className="py-2 px-4">
                        <h2 className="text-xl font-bold leading-6 tracking-wide cursor-pointer mt-4">
                        Titulo del proyecto
                        </h2>
                    </div>
                    <div className="px-4 space-y-2">
                        <p className="font-normal leading-5 tracking-wide">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati iste alias facilis dolorem 
                        </p>
                    </div>

                    <div className="flex flex-row items-end h-full w-full px-4 mt-4">
                        <div className="flex border-t border-primary w-full py-4">
                        <Link href={`/proyectos/project.slug}`}>
                            <a className="bg-pink-200 text-dark font-semibold px-2 w-full text-center rounded p-2">
                                Ver Proyecto
                            </a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CardProject
