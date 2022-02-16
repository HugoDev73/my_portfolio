import React from 'react';
import { useState } from 'react';

const CardFormation = ({ category, title, specialty, date, institution, imagen, documento }) => {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  return (
    <>
      <div className=" w-full p-2">
        <div className="flex flex-col h-full max-w-lg mx-auto bg-white rounded-lg">
          <div className="flex justify-between -mt-4 px-4">
            <span className="inline-block bg-secondary text-white rounded text-sm tracking-wide px-3 pt-0.5">
              {category}
            </span>
          </div>
          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold">
              {title}
            </h1>
            {/* <p className="py-2">
              <span className="font-bold">Especialidad: </span>
              {specialty}
            </p> */}
            <div className="flex items-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h1 className="px-2 text-sm">{date}</h1>
            </div>
            <div className="flex items-center mt-4">
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
                />
              </svg>
              <h1 className="px-2 text-sm"> {institution} </h1>
            </div>


          </div>


          <div className="flex flex-row items-end h-full w-full px-4 mt-4">
            <div className="flex border-t border-primary w-full py-4">


              <button onClick={() => SetIsModalOpen(true)}
                className="modal-open bg-pink-200 font-semibold px-2 w-full text-center rounded p-2">
                Ver documento
              </button>


            </div>
          </div>

        </div>

      </div>

      {/* Modal de certificado */}
      {isModalOpen && (
        <>
          <div
            id="modal-document"
            className="fixed z-10 inset-0 overflow-y-"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
              />
              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >

              </span>
              <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-secondary sm:mx-0 sm:h-10 sm:w-10">
                      {/* Heroicon name: outline/exclamation */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fondo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-300"
                        id="modal-title"
                      >
                        Documento
                      </h3>
                      <div className="mt-4">
                        <img src={imagen} alt="imagen" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 p-4 flex items-center gap-2">
                  <a href={documento} target="_blank"
                    className="text-center w-1/2 rounded-md px-4 py-2 bg-white text-base font-medium text-gray-800">
                    Ver pdf
                  </a>
                  <button onClick={() => SetIsModalOpen(false)}
                    type="button"
                    className="text-center w-1/2 rounded-md px-4 py-2 bg-secondary text-base font-medium text-gray-300"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}


    </>
  );
}

export default CardFormation;
