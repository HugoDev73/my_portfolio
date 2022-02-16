import React from 'react';

const Skill = (props) => {
  return (
    <>
      <div class="flex items-center p-4 bg-white rounded shadow-sm dark:bg-gray-800">
        <div class="p-3 mr-4 bg-pink-100 text-primary rounded-md">
          <i className={`${props.icon} text-3xl`}></i>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-dark">{props.title}</p>
          <p class="text-sm font-normal text-gray-800">{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default Skill;
