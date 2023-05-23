import { Link } from "react-router-dom";
import { jsQNA } from "../../mock-data/js-qna";

const JavaScriptES6 = () => {
  return (
    <main className="basis-[85%] p-3 flex items-center justify-center h-[92vh]">
      <section className="basis-[90%] h-[100%] flex flex-wrap gap-3 justify-center overflow-y-auto">
        {jsQNA?.map((qna, index) => {
          return (
            <Link
              key={index}
              target="blank"
              className="trasition-all break-all duration-700 linear p-3 font-semibold text-[rgb(240,46,101)] flex flex-col gap-1 justify-center w-[40%] bg-gray-800 rounded-md hover:scale-105"
              to={qna.linkToAnswer}
            >
              <p className="">{qna.questionText}</p>
              {qna.subQuestions && (
                <ul className="ml-7 flex flex-col break-all">
                  {qna?.subQuestions.map((subqna, index) => {
                    return (
                      <li
                        className="text-sm break-all text-[rgba(240,46,101,0.8)]"
                        key={index}
                      >
                        <p className="break-all">{subqna}</p>
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

export default JavaScriptES6;
