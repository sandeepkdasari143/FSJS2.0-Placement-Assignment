import { Link } from "react-router-dom";
import { htmlQNA } from "../../mock-data/html5-qna";

const HTML5 = () => {
  return (
    <main className="basis-[85%] p-3 flex items-center justify-center h-[92vh]">
      <section className="basis-[90%] h-[100%] flex flex-wrap gap-3 justify-center overflow-y-auto">
        {htmlQNA?.map((qna, index) => {
          return (
            <Link
              key={index}
              target="blank"
              className="trasition-all duration-700 linear p-3 font-semibold text-[rgb(240,46,101)] flex flex-col gap-1 justify-center w-[40%] bg-pink-100 dark:bg-gray-800 rounded-md hover:scale-105"
              to={qna.linkToAnswer}
            >
              <p className="">{qna.questionText}</p>
              {qna.subQuestions && (
                <ul className="ml-7 flex flex-col">
                  {qna?.subQuestions.map((subqna, index) => {
                    return (
                      <li
                        className="text-sm text-[rgba(240,46,101,0.8)]"
                        key={index}
                      >
                        {"- "}
                        {subqna}
                      </li>
                    );
                  })}
                </ul>
              )}
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default HTML5;
