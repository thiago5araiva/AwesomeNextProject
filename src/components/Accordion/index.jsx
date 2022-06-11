import React from "react";
import styles from "./styles.module.scss";
export default function AccordionComponent() {
  const [questions, setQuestions] = React.useState([]);
  React.useEffect(() => {
    const questionsGroup = [
      {
        id: "collapseOne",
        heading: "headingOne",
        title: "O que é?",
        text: "O Para Experimentar, é um Pacote fotográfico exclusivo, que te dará a oportunidade de ter uma experiência fotográfica. Sem obrigações. E ainda ganhar um presente especial.",
        show: false,
      },
      {
        id: "collapseTwo",
        heading: "headingTwo",
        title: "Como participar?",
        text: "Para participar do pacote Para Experimentar, você precisa se cadastrar com o seu e-mail. Iremos enviar todas as informações por lá. Estando de acordo com todas os detalhes, e seguindo todas as regras, sua vaga estará garantida.",
        show: false,
      },
      {
        id: "collapseThree",
        heading: "headingThree",
        title: "Qual estilo de fotos posso fazer nesse pacote?",
        text: "Esse pacote é exclusivo para ensaios fotográficos femininos, que podem ser: Boudoir, Gestante, Retratos, aniversário e marca pessoal.",
        show: false,
      },
      {
        id: "collapseFour",
        heading: "headingFour",
        title: "Onde serão feitas as fotos?",
        text: "As fotos serão realizadas em uma locação escolhida para essa experência. Ou você pode indicar um local que goste. Pode ser feita na sua casa, por exemplo.",
        show: false,
      },
    ];
    setQuestions(questionsGroup);
  }, []);

  const handleClick = (id) => {
    const newQuestions = questions.map((question) => {
      return question.id === id
        ? { ...question, show: !question.show }
        : question;
    });
    setQuestions(newQuestions);
  };

  return (
    <div className="accordion" id="accordion">
      {questions.map((question) => {
        return (
          <div className={styles.card} key={question.id}>
            <div className={styles.card__header} id={question.heading}>
              <h2 className="mb-0">
                <button
                  onClick={() => handleClick(question.id)}
                  className={`btn btn-link btn-block text-left ${styles.card__button}`}
                  type="button"
                  data-toggle="collapse"
                  data-target={question.id}
                  aria-expanded="true"
                  aria-controls={question.id}
                >
                  {question.title}
                </button>
              </h2>
            </div>
            <div
              id={question.id}
              className={`collapse ${question.show ? "show" : ""}`}
              aria-labelledby={`#${question.heading}`}
              data-parent="#accordion"
            >
              <div className={styles.card__body}>{question.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
