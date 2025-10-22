import React from 'react';
import '../scss/Project.scss';
import file from '../assets/images/file.svg';

function Project(){
  return(
    <section className='Project'>
      <h2>PROJECT</h2>
      <div className='content projectname'>
        <img src={file} alt='file' title='프로젝트 추가 예정입니다.' />
        <span>프로젝트 추가 예정입니다.</span>
      </div>
    </section>
  );
};

export default Project;