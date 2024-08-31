import { createContext, useState } from "react";

export const Quizlist=createContext({
    AddAnswer:()=>{},
    Submit:()=>{},
    options:[],
    AddID:()=>{},
    Delete:()=>{},
    ID:-1,
    Tests:[],
    Quess:[],
    AddTests:()=>{},
    AddQuess:()=>{},
    AddTestsScore:()=>{},
    AddTestInital:()=>{},
    TESTid:1
})
function QuizProvider({children}){
const [Corect, setCorect] = useState("");
const [options, setOptions] = useState([]);
const [Tests, setTests] = useState([]);
const [Quess, setQuess] = useState([]);
const [ID, setID] = useState(-1);
const [TESTid, setTESTid] = useState(1);
function AddID(){
    setID(ID+1)
}
function AddQuess(Quesse) {
  setQuess(Quesse)
  
}
function AddTestInital(options){
  setTests(options) 
}
function AddTests(options){
  setTESTid(TESTid+1)
  setTests((current)=>[
    ...current,
    {
      options:options,
      TESTid:TESTid

    }
  ]) 
  
  
  setOptions([])
}
function AddTestsScore(score,TESTid) {
  setTests((current) =>
    current.map((test) =>
      test.TESTid === TESTid ? { ...test, score: score } : test
    )
  );
}
function Delete(quiz, ID) {
  setOptions(
    options.map((current) => {
      // Check if the current item's ID matches the provided ID
      if (current.ID === ID) {
        // Filter out elements from the value array where the key matches the quiz
        current.value = current.value.filter((value) => value.key !== quiz);
      }
      // Return the updated current object
      return current;
    })
  );
}


function  AddAnswer(quiz,) {
    // if(state="update"){
    //   options.map((option) =>{
    //     if (option.ID === id)
    //     {option.Question=Question;
    //     option.Corect=Corect;}
        
    //   })
    //   setOptions((current) => {
    //       return current.map((option) =>
    //         option.ID === id
    //           ? {
    //               ...option,
                  
    //               value: [
    //                 ...option.value,
    //                 { label: quiz, value: quiz, key: quiz },
    //               ],
    //             }
    //           : option
    //       );
        
    //   });
    // }
    setOptions((current) => {
      const existingEntry = current.find(option => option.ID === ID);
      console.log(existingEntry);
      if (existingEntry) {
        console.log("if");
        return current.map((option) =>
          option.ID === ID
            ? {
                ...option,
                
                value: [
                  ...option.value,
                  { label: quiz, value: quiz, key: quiz },
                ],
              }
            : option
        );
      } else {
        console.log("else");
        return [
          ...current,
          {
            ID: ID,
            value: [{ label: quiz, value: quiz, key: quiz }],
          },
        ];
      }
    });
    console.log(options)
  }
 
  function Submit(Question,Corect) {
    options.map((option) =>{
      if (option.ID === ID)
      {option.Question=Question;
      option.Corect=Corect;
      
    }
      
    })
    setOptions((current) => {
      return current.map((option) =>
        option.ID === ID
          ? {
              ...option,
              Question: Question,
              Corect:Corect  ,
             
                // Ensure Question is added here
            }
          : option
      );
    });
    
    console.log(JSON.stringify(options, null, 2));
   
  }
  const value={
    Submit:Submit,
    AddAnswer:AddAnswer,
    options:options,
    AddID:AddID,
    ID:ID,
    Delete:Delete,
    AddQuess:AddQuess,
    AddTests:AddTests,
    Tests:Tests,
    Quess:Quess,
    AddTestsScore:AddTestsScore,
    AddTestInital:AddTestInital,
    TESTid:TESTid
  }
  return <Quizlist.Provider value={value}>{children}</Quizlist.Provider>
}
export default QuizProvider;