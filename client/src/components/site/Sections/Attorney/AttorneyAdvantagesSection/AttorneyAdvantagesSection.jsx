import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './AttorneyAdvantagesSection.scss';

const AttorneyAdvantagesSection = () => {
  const { ref: counter1Ref, inView: counter1InView } = useInView({ triggerOnce: true });
  const { ref: counter2Ref, inView: counter2InView } = useInView({ triggerOnce: true });
  const { ref: counter3Ref, inView: counter3InView } = useInView({ triggerOnce: true });
  const { ref: counter4Ref, inView: counter4InView } = useInView({ triggerOnce: true });

  return (
    <section className='attorney__advantages__section'>
      <div className='attorney__advantages__section__border'>
        <div className="attorney__advantages__section__wrapper container" style={{ padding: "95px 0px " }}>
          <div className="attorney__advantages__section__wrapper__heading">
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                fontStyle: "normal",
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#b1976b"
              }}
            >
              what we are expert at
            </span>
            <h3
              style={{
                letterSpacing: 1,
                fontSize: 33,
                fontWeight: 700,
                textTransform: "none",
                color: "#fff"
              }}
            >
              Why Clients Choose Us?
            </h3>
          </div>
          <div className="attorney__advantages__section__wrapper__body" style={{ fontSize: 16, fontWeight: 400, textTransform: "none", color: "#555555" }}>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookm arksgrove right at the coast of the Semantics, a large language ocean. A small river named
            </p>
            <p>
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
            </p>
          </div>
          <div className='attorney__advantages__section__wrapper__end'>
            <div className="attorney__advantages__section__wrapper__end__crd" style={{ padding: "10px 0px 0px 0px" }}>
              <div className="attorney__advantages__section__wrapper__end__crd__span" style={{ fontSize: 52, fontWeight: 700 }} ref={counter1Ref}>
                {counter1InView && <CountUp start={0} end={1000} duration={3} />}
                <span className="gdlr-core-counter-item-suffix">+</span>
              </div>
              <div className="attorney__advantages__section__wrapper__end__crd__span__last" style={{ fontSize: 17, fontWeight: 400, textTransform: "none" }}>
                Client Consultations
              </div>
            </div>
            <div className="attorney__advantages__section__wrapper__end__crd" style={{ padding: "10px 0px 0px 0px" }}>
              <div className="attorney__advantages__section__wrapper__end__crd__span" style={{ fontSize: 52, fontWeight: 700 }} ref={counter2Ref}>
                {counter2InView && <CountUp start={0} end={95} duration={3} />}
                <span className="gdlr-core-counter-item-suffix">%</span>
              </div>
              <div className="attorney__advantages__section__wrapper__end__crd__span__last" style={{ fontSize: 17, fontWeight: 400, textTransform: "none" }}>
                Successful Cases
              </div>
            </div>
            <div className="attorney__advantages__section__wrapper__end__crd" style={{ padding: "10px 0px 0px 0px" }}>
              <div className="attorney__advantages__section__wrapper__end__crd__span" style={{ fontSize: 52, fontWeight: 700 }} ref={counter3Ref}>
                {counter3InView && <CountUp start={0} end={10} duration={3} />}
                <span className="gdlr-core-counter-item-suffix">mlns</span>
              </div>
              <div className="attorney__advantages__section__wrapper__end__crd__span__last" style={{ fontSize: 17, fontWeight: 400, textTransform: "none" }}>
                Recovered cost for clients
              </div>
            </div>
            <div className="attorney__advantages__section__wrapper__end__crd" style={{ padding: "10px 0px 0px 0px" }}>
              <div className="attorney__advantages__section__wrapper__end__crd__span" style={{ fontSize: 52, fontWeight: 700 }} ref={counter4Ref}>
                {counter4InView && <CountUp start={0} end={30} duration={3} />}
                <span className="gdlr-core-counter-item-suffix">+</span>
              </div>
              <div className="attorney__advantages__section__wrapper__end__crd__span__last" style={{ fontSize: 17, fontWeight: 400, textTransform: "none" }}>
                Professional Attorneys
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttorneyAdvantagesSection;
