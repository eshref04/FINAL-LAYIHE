import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import "./CounterSection.scss";

const CounterSection = () => {
  const { ref: counter1Ref, inView: counter1InView } = useInView({ triggerOnce: true });
  const { ref: counter2Ref, inView: counter2InView } = useInView({ triggerOnce: true });
  const { ref: counter3Ref, inView: counter3InView } = useInView({ triggerOnce: true });
  const { ref: counter4Ref, inView: counter4InView } = useInView({ triggerOnce: true });

  return (
    <section className='counter__section'>
      <div className='counter__section__wrapper container'>
        <div className='counter__section__wrapper__cards'>
          <div className="counter__section__wrapper__cards__crd" style={{ padding: "10px 0px 0px 0px" }}>
            <div className="counter__section__wrapper__cards__crd__span" style={{ fontSize: 45, fontWeight: 600 }} ref={counter1Ref}>
              {counter1InView && <CountUp start={0} end={1000} duration={3} />}
              <span className="gdlr-core-counter-item-suffix">+</span>
            </div>
            <div className="counter__section__wrapper__cards__crd__span__last" style={{ fontSize: 18, fontWeight: 500, textTransform: "none" }}>
              Client Consultations
            </div>
          </div>

          <div className="counter__section__wrapper__cards__crd" style={{ padding: "10px 0px 0px 0px" }}>
            <div className="counter__section__wrapper__cards__crd__span" style={{ fontSize: 45, fontWeight: 600 }} ref={counter2Ref}>
              {counter2InView && <CountUp start={0} end={95} duration={3} />}
              <span className="gdlr-core-counter-item-suffix">%</span>
            </div>
            <div className="counter__section__wrapper__cards__crd__span__last" style={{ fontSize: 18, fontWeight: 500, textTransform: "none" }}>
              Successful Cases
            </div>
          </div>

          <div className="counter__section__wrapper__cards__crd" style={{ padding: "10px 0px 0px 0px" }}>
            <div className="counter__section__wrapper__cards__crd__span" style={{ fontSize: 45, fontWeight: 600 }} ref={counter3Ref}>
              {counter3InView && <CountUp start={0} end={10} duration={3} />}
              <span className="gdlr-core-counter-item-suffix">mlns</span>
            </div>
            <div className="counter__section__wrapper__cards__crd__span__last" style={{ fontSize: 18, fontWeight: 500, textTransform: "none" }}>
              Recovered cost for clients
            </div>
          </div>

          <div className="counter__section__wrapper__cards__crd" style={{ padding: "10px 0px 0px 0px" }}>
            <div className="counter__section__wrapper__cards__crd__span" style={{ fontSize: 45, fontWeight: 600 }} ref={counter4Ref}>
              {counter4InView && <CountUp start={0} end={30} duration={3} />}
              <span className="gdlr-core-counter-item-suffix">+</span>
            </div>
            <div className="counter__section__wrapper__cards__crd__span__last" style={{ fontSize: 18, fontWeight: 500, textTransform: "none" }}>
              Professional Attorneys
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
