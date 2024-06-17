import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const VideoModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '800px',
        },
      }}
    >
      <iframe
        width="100%"
        height="450px"
        src="https://www.youtube.com/embed/j5zzEaCs57I"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </Modal>
  );
};

export default VideoModal;
