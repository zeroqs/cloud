import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={460}
    height={260}
    viewBox='0 0 460 260'
    backgroundColor='#d9d9d9'
    foregroundColor='#f8f8f8'
  >
    <rect x='61' y='279' rx='0' ry='0' width='1' height='0' />
    <rect x='160' y='105' rx='0' ry='0' width='1' height='0' />
    <circle cx='225' cy='121' r='69' />
    <rect x='92' y='21' rx='5' ry='5' width='265' height='26' />
    <rect x='151' y='201' rx='11' ry='11' width='151' height='36' />
  </ContentLoader>
);

export default MyLoader;
