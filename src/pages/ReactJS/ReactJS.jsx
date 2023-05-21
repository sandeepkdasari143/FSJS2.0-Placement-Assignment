import { qna } from "../../mock-data/react-js/react-js-qna"

const ReactJS = () => {
  return (
    <div>
      {qna.map((qna, index)=>{
        return(
          <p key={index}>
            <a 
            target="blank"
            className="font-semibold p-3 text-[rgb(240,46,101)]"
            href={qna.linkToAnswer}>
              {qna.question}
            </a>
          </p>
        )
      })}
    </div>
  )
}

export default ReactJS