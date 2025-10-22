import React from 'react';
import '../scss/Project.scss';
import file from '../assets/images/projectImg/file.svg';

function Project(){
  return(
    <section className='Project'>
      <h2>PROJECT</h2>
      <div className='content projectname'>
        <img src={file} alt='file.svg' title='프로젝트 추가 예정입니다.' />
        <div className='context'>
          <p>프로젝트 추가 예정입니다.</p>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia, quas ad ipsum aspernatur, ducimus in illum nostrum possimus maiores provident perspiciatis! Fuga, voluptates necessitatibus enim totam quo quia non.</span>
        </div>
      </div>
    </section>
  );
};

export default Project;