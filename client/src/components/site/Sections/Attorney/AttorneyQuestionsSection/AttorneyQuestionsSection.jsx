import React, { useEffect } from "react";
import { useState } from "react";
import "./AttorneyQuestionsSection.scss";


const questions = [
  {
    question: "What do you get for your attorney’s fee?",
    answer:
      "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed",
  },
  {
    question:
      "How long is the statute of limitations to file?",
    answer:
      "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed",
  },
  {
    question: "What information do you need from me in order to get started?",
    answer:
      "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed",
  },
  {
    question: "What types of injury cases does your firm work on?",
    answer:
      "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed",
  },
  {
    question: "What is my personal injury or insurance claim worth?",
    answer:
      "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed",
  }
];

const AttorneyQuestionsSection = () => {
 
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="attorney__questions__section">
      <div className="attorney__questions__section__wrapper container">
        <div className="attorney__questions__section__wrapper__left">
          <iframe
            width="600"
            height="340"
            src="https://www.youtube.com/embed/fFrp-SOM7H8?si=APR-btKPMcrbfyMA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <div className="attorney__questions__section__wrapper__left__text">
            <h3>We won many awards</h3>

            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics.
            </p>
          </div>
        </div>

        <div className="attorney__questions__section__wrapper__right">
          {questions.map((item, index) => (
            <div
              className="attorney__questions__section__wrapper__right__crd"
              key={index}
            >
              <div
                className="attorney__questions__section__wrapper__right__crd__qst"
                onClick={() => toggleQuestion(index)}
              >
                <i
                  className={`fa-solid ${
                    activeIndex === index ? "fa-minus" : "fa-plus"
                  }`}
                ></i>
                <h4
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    letterSpacing: 0,
                    textTransform: "none",
                  }}
                >
                  {item.question}
                </h4>
              </div>
              <div
                className={`attorney__questions__section__wrapper__right__crd__answer ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttorneyQuestionsSection;
