import React, { FC } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import styles from '../RecipeItem.module.css';

const RecipeVideo: FC<{ video: string }> = ({ video }) => {
  return (
    <div className={'p-5 py-3 ' + styles.bg}>
      <div className="d-flex align-items-center">
        <AiFillPlayCircle size={32} className="me-4" />
        <span style={{ fontSize: '1.5rem' }}>Відеорецепт</span>
      </div>
      <div className="d-flex justify-content-center align-items-center py-4">
        <video controls src={video}></video>
      </div>
    </div>
  );
};

export default RecipeVideo;
