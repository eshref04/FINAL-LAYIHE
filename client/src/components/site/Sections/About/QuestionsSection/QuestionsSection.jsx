import React, { useEffect, useState } from 'react';
import './QuestionsSection.scss';


const questions = [
  { question: "What do you get for your attorney’s fee?", answer: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human." },
  { question: "How long is the statute of limitations to file suit for a New York personal injury case?", answer: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human." },
  { question: "What information do you need from me in order to get started?", answer: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human." },
  { question: "What types of injury cases does your firm work on?", answer: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human." },
  { question: "What is my personal injury or insurance claim worth?", answer: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human." },
  { question: "On average, how long does it take before a settlement/trial is reached?", answer: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human." }
];

const QuestionsSection = () => {
  


    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleQuestion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <section className='questions__section'>
        <div className="questions__section__wrapper container" style={{ padding: "100px 50px 50px 50px" }}>
          <div className="questions__section__wrapper__heading" style={{ paddingBottom: 45 }}>
            <h3 style={{ fontSize: 28, fontWeight: 600, letterSpacing: 0, textTransform: "none", color: "#b1976b" }}>
              Frequently Asked Questions
            </h3>
          </div>
          <div className="questions__section__wrapper__body">
            {questions.map((item, index) => (
              <div className="questions__section__wrapper__body__crd" key={index}>
                <div className='questions__section__wrapper__body__crd__qst' onClick={() => toggleQuestion(index)}>
                  <i className={`fa-solid ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                  <h4 style={{ fontSize: 18, fontWeight: 500, letterSpacing: 0, textTransform: "none" }}>
                    {item.question}
                  </h4>
                </div>
                <div className={`questions__section__wrapper__body__crd__answer ${activeIndex === index ? 'active' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default QuestionsSection;
