import "./app.css"
import{useEffect,useMemo, useState} from "react";
import Trivia from './Trivia'
import Timer from "./Timer";
import Start from "./Start";
import End from "./End";
function App() {
  const [username, setUsername] = useState(null);
const [questionNumber,SetQuestionNumber]=useState(1)
const [stop, setStop] = useState(false)
const [earned, setEarned] = useState("$ 0")
const data = [
  {
    id: 1,
    question: "Rolex is a company that specializes in what type of product?",
    answers: [
      {
        text: "Phone",
        correct: false,
      },
      {
        text: "Watches",
        correct: true,
      },
      {
        text: "Food",
        correct: false,
      },
      {
        text: "Cosmetic",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "When did the website `Facebook` launch?",
    answers: [
      {
        text: 2004,
        correct: true,
      },
      {
        text: 2005,
        correct: false,
      },
      {
        text: 2006,
        correct: false,
      },
      {
        text: 2007,
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Who played the character of harry potter in movie?",
    answers: [
      {
        text: "Johnny Deep",
        correct: false,
      },
      {
        text: "Leonardo Di Caprio",
        correct: false,
      },
      {
        text: "Denzel Washington",
        correct: false,
      },
      {
        text: "Daniel Red Cliff",
        correct: true,
      },
    ],
  },
  { id: 4,
    question: "What is the smallest planet in our solar system?",
    answers: [
      {
        text: "Earth",
        correct: false,
      },
      {
        text: "Mercury",
        correct: true,
      },
      {
        text: "Jupiter",
        correct: false,
      },
      {
        text: "Mars",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "What is the capital of New Zealand?",
    answers: [
      {
        text: "Wellington",
        correct: true,
      },
      {
        text: "NewYork",
        correct: false,
      },
      {
        text: "Washington",
        correct: false,
      },
      {
        text: "None of these",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "From what grain is the Japanese spirit Sake made?",
    answers: [
      {
        text: "Wheat",
        correct: false,
      },
      {
        text: "Rice",
        correct: true,
      },
      {
        text: "Bread",
        correct: false,
      },
      {
        text: "Sugar",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "How many goals did England score (excluding penalty shoot-outs) at the Mens’ 2018 FIFA World Cup?",
    answers: [
      {
        text: 8,
        correct: false,
      },
      {
        text: 5,
        correct: false,
      },
      {
        text: 6,
        correct: false,
      },
      {
        text: 12,
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question: "Who won the Icc Champion Trophy in 2017?",
    answers: [
      {
        text: "India",
        correct: false,
      },
      {
        text: "England",
        correct: false,
      },
      {
        text: "Pakistan",
        correct: true,
      },
      {
        text: "Australia",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "How many horses are on each team in a polo match?",
    answers: [
      {
        text: "Three",
        correct: false,
      },
      {
        text: "Four",
        correct: true,
      },
      {
        text: "One",
        correct: false,
      },
      {
        text: "five",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "What score did cricketing legend Don Bradman average as a batsman across his career??",
    answers: [
      {
        text: 99.94,
        correct: true,
      },
      {
        text: 82,
        correct:false,
      },
      {
        text: 97,
        correct: false,
      },
      {
        text: 98,
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "What is the capital city of Australia?",
    answers: [
      {
        text: "London",
        correct: false,
      },
      {
        text: "NewYork",
        correct: false,
      },
      {
        text: "Canberra",
        correct: true,
      },
      {
        text: "WashingTon",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "What language is spoken in Brazil?",
    answers: [
      {
        text: "English",
        correct: false,
      },
      {
        text: "Portuguese",
        correct: true,
      },
      {
        text: "Chinnese",
        correct: false,
      },
      {
        text: "Urdu",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "How many centimetres in a metre?",
    answers: [
      {
        text: 100,
        correct: true,
      },
      {
        text: 1000,
        correct: false,
      },
      {
        text: 10,
        correct: false,
      },
      {
        text: 10000,
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "What temperature centigrade does water boil at?",
    answers: [
      {
        text: "100 degrees Celcius",
        correct: false,
      },
      {
        text: "100 degrees Farhenheit",
        correct: false,
      },
      {
        text: "Both A and B",
        correct: false,
      },
      {
        text: "100 degrees Centigrade",
        correct: true,
      },
    ],
  },
  {
    id: 15,
    question: "How many planets are in our solar system?",
    answers: [
      {
        text: "Eight",
        correct: true,
      },
      {
        text: "Seven",
        correct: false,
      },
      {
        text: "Nine",
        correct: false,
      },
      {
        text: "Ten",
        correct: false,
      },
    ],
  }

];


const moneyPyramid=useMemo(() => 
[
    {id:1,amount:"$ 100"},
  {id:2,amount:"$ 200"},
  {id:3,amount:"$ 300"},
  {id:4,amount:" $ 400"},
  {id:5,amount:"$ 500"},
  {id:6,amount:"$ 600"},
  {id:7,amount:"$ 700"},
  {id:8,amount:"$ 800"},
  {id:9,amount:"$ 900"},
  {id:10,amount:"$ 1000"},
  {id:11,amount:"$ 1100"},
  {id:12,amount:"$ 1200"},
  {id:13,amount:"$ 1300"},
  {id:14,amount:"$ 1400"},
  {id:15,amount:"$ 1500"},
].reverse(),
[])
useEffect(()=>{
  questionNumber >1 && setEarned(moneyPyramid.find((m)=> m.id=== questionNumber-1).amount)
},[moneyPyramid,questionNumber])
if(earned==="$ 1500"){
  alert("Congrulation You win the game!!!")
  window.location.href='Restart.js'
}


  return (
    <><div className="app">
{username?(
  <>
       <div className="main">
{stop?<> <h1 className="end">You Earn the : {earned} </h1> <End setUsername={setUsername} /></>:(
<div className="top">
    <div className="timer"><Timer setStop={setStop}questionNumber={questionNumber}/></div> 
     <div className="bottom">
        <Trivia data={data} setStop={setStop}questionNumber={questionNumber}  SetQuestionNumber={SetQuestionNumber} />
       </div> 
    </div>
 
 )}


     </div> 
    
    <div className="pyramid"></div>
    <ul className="moneyList">
      {moneyPyramid.map(m=>(
      <li className={questionNumber===m.id ?"moneyListItem_active ":"moneyListItem"}>
      <span className="moneyListItemNumber">{m.id}</span>
      <span className="moneyListItemAmount">{m.amount}</span></li>))}
    </ul>
    
  </>
):<Start setUsername={setUsername} />}

    </div>
   
      </>
  );
}

export default App;
