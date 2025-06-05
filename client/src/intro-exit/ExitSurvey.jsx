import { usePlayer } from "@empirica/core/player/classic/react";
import React, { useState } from "react";
import { Button } from "../components/Button";

export function ExitSurvey({ next }) {
  const labelClassName = "block text-sm font-medium text-gray-700 my-2";
  const inputClassName =
    "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-empirica-500 focus:border-empirica-500 sm:text-sm";
  const player = usePlayer();
 // const [feedback, setFeedback] = useState(""); 
// likert questions
//  const [competitiveness, setCompetitiveness] = useState("");
 // const [contribution_self, setContribution_self] = useState("");
 //const [contribution_winner, setContribution_winner] = useState("");
 //const [contribution_other, setContribution_other] = useState("");
 
 const [bosstrust, setBosstrust] = useState("");

  const [bosscompetency, setBosscompetency] = useState("");
//const [procedurefair, setProcedurefair] = useState("");
  const [allocationfair, setAllocationfair] = useState("");


  //const [bosssatisfaction, setBosssatisfaction] = useState("");
  //const [teamsatisfaction, setTeamsatisfaction] = useState("");
  const [willingness, setWillingness] = useState("");

// Add new state variables for validation
  const [errors, setErrors] = useState({});

  function validateForm() {
    let newErrors = {};

    // Add validation conditions for each field
    // ... other validation conditions ...
    //if (!contribution_self.trim()) newErrors.contribution_self = "This field is required";
    //if (!contribution_winner.trim()) newErrors.contribution_winner = "This field is required";
    //if (!contribution_other.trim()) newErrors.contribution_other = "This field is required";
    //if (!competitiveness.trim()) newErrors.competitiveness = "This field is required";

    if (!bosstrust.trim()) newErrors.bosstrust = "This field is required";

    if (!bosscompetency.trim()) newErrors.bosscompetency = "This field is required";
    //if (!procedurefair.trim()) newErrors.procedurefair = "This field is required";
    if (!allocationfair.trim()) newErrors.allocationfair = "This field is required";


    //if (!bosssatisfaction.trim()) newErrors.bosssatisfaction = "This field is required";
    //if (!teamsatisfaction.trim()) newErrors.teamsatisfaction = "This field is required";
    if (!willingness.trim()) newErrors.willingness = "This field is required";

    setErrors(newErrors);
    // Form is valid if newErrors object is empty
    return Object.keys(newErrors).length === 0;
  }

  

  function handleSubmit(event) {
    event.preventDefault()

    // Validate the form before proceeding
    if (!validateForm()) return;

    player.set("exitSurvey", {
      //contribution_self,
      //contribution_winner,
      //contribution_other,
      //competitiveness,
      bosstrust, 
      bosscompetency,
      allocationfair,
      //outrage,
      //bosssatisfaction,
      willingness
      });
    next();
  }


  return (
    <div className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      <form
        className="mt-12 space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit}
      >
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Exit Survey
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Please answer the following short survey. 
              </p>
            </div>

            <div className="space-y-8 mt-6">

            <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                How <strong>trustworthy</strong> do you think the manager's evaluation was in making award decision for the best player in the game?
                  0: very untrustworthy; 10: very trustworthy
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={bosstrust}
                    name="bosstrust"
                    value={String(value)} // Radio button values are strings
                    label={value}
                    onChange={(e) => setBosstrust(e.target.value)}
                  />
                ))}
                 {errors.bosstrust && <p className="text-red-500 text-xs">{errors.bosstrust}</p>}
              </div>


              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                How <strong>competent</strong> do you think the manager's evaluation was in making award decision for the best player in the game?
                  0: very incompetent; 10: very competent
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={bosscompetency}
                    name="bosscompetency"
                    value={String(value)} // Radio button values are strings
                    label={value}
                    onChange={(e) => setBosscompetency(e.target.value)}
                  />
                ))}
                 {errors.bosscompetency && <p className="text-red-500 text-xs">{errors.bosscompetency}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                How <strong>fair</strong> do you think the manager's evaluation was in making award decision for the best player in the game?
                 0: very unfair; 10: very fair
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={allocationfair}
                    name="allocationfair"
                    value={String(value)} // Radio button values are strings
                    label={value}
                    onChange={(e) => setAllocationfair(e.target.value)}
                  />
                ))}
                {errors.allocationfair && <p className="text-red-500 text-xs">{errors.allocationfair}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                Will you be <strong>willing</strong> to work in future teams like the one in this game, where award decisions are determined based on the manager's evaluations?
                0: very unwilling; 10: very willing
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={willingness}
                    name="willingness"
                    value={String(value)} // Radio button values are strings
                    label={value}
                    onChange={(e) => setWillingness(e.target.value)}
                  />
                ))}
                  {errors.willingness && <p className="text-red-500 text-xs">{errors.willingness}</p>}               
              </div>


              <div className="mb-12">
                <Button type="submit" disabled={Object.keys(errors).length > 0}>Continue</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export function Radio({ selected, name, value, label, onChange }) {
  return (
    <label className="text-sm font-medium text-gray-700">
      <input
        className="mr-2 shadow-sm sm:text-sm"
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={onChange}
      />
      {label}
    </label>
  );
}


//Will you be <strong>willing</strong> to work in future teams with an AI manager like the one in this game, who makes award decisions?
