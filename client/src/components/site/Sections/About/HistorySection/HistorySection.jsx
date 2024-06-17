import React, { useState } from 'react';
import './HistorySection.scss';
import SignatureImg from '../../../../../assets/about-signature.png';
import PlayBtn from '../../../../../assets/about-play-btn.png';
import VideoModal from './VideoModal';

const HistorySection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <section className="history__section">
        <div className="history__section__wrapper container">
          <div
            className="history__section__wrapper__content"
            style={{ padding: '100px 70px 100px 60px' }}
            data-sync-height="height1"
          >
            <div className="history__section__wrapper__content__left">
              <button onClick={openModal} className="play-button">
                <img src={PlayBtn} alt="Play Button" />
              </button>
            </div>

            <div className="history__section__wrapper__content__right">
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  fontStyle: 'normal',
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  color: '#a3a3a3',
                }}
              >
                About Attorna
              </span>

              <h3
                className="history__section__wrapper__content__right__title"
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  letterSpacing: 0,
                  textTransform: 'none',
                  color: '#202020',
                }}
              >
                Our Gorgeous History
              </h3>

              <div
                className="history__section__wrapper__content__right__subtitle"
                style={{ paddingBottom: 20, textTransform: 'none', color: '#6d6d6d' }}
              >
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                  blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                  ocean. A small river named Duden flows.
                </p>
                <p>
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a
                  horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown
                  belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it.
                </p>
              </div>

              <img src={SignatureImg} alt="" width={254} height={47} title="paul" />

              <h3
                className="history__section__wrapper__content__right__end"
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: 3,
                  color: '#6d6d6d',
                }}
              >
                CEO & Founder of Attorna
              </h3>
            </div>
          </div>
        </div>

        <VideoModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      </section>
    </>
  );
};

export default HistorySection;
