import React, { useEffect, useState } from 'react';
import "./ReviewSection.scss";
import PlayIcon from "../../../../../assets/play-icon.png";
import Modal from 'react-modal';
import ReactPlayer from 'react-player';


Modal.setAppElement('#root');  

const ReviewSection = () => {
 
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <section className='review__section'>
      <div className='review__section__border'>
        <div  className="review__section__border__wrapper container">
          <div className='review__section__border__wrapper__box'></div>
          <img src={PlayIcon} alt="Play Icon" onClick={openModal} />
          <div className='review__section__border__wrapper__text'>
            <h3>Reviews From Our Clients</h3>
            <p>We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field.</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="video-modal"
        overlayClassName="video-overlay"
      >
        <button onClick={closeModal} className="close-button">&times;</button>
        <ReactPlayer
          url="https://youtu.be/j5zzEaCs57I"
          controls
          playing
          width="100%"
          height="100%"
        />
      </Modal>
    </section>
  )
}

export default ReviewSection;
