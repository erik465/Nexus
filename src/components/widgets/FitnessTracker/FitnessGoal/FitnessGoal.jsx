import React from "react";
import {
  StyledContainer,
  WeightContainer,
  WeightChart,
  LeftContainer,
  MeditationContainer,
  HydrationContainer,
} from "./FitnessGoal.styled";
import CustomButton from "../../../shared/CustomButton";
import { LuGlassWater } from "react-icons/lu";

const FitnessGoal = ({ data }) => {
  function selectColor() {
    const percentage =
      100 -
      Math.round(
        (Math.abs(data?.currentWeight - data?.weightGoal) * 100) /
          data?.weightGoal
      );

    if (percentage < 30) return "#eaeaea";
    else if (percentage < 65) return "#f2e753";
    else if (percentage < 100) return "#b5dd49";
    else if (percentage === 100) return "#41e528";
  }

  return (
    <StyledContainer>
      <WeightContainer>
        <div>
          <h3>Current weight: </h3>
          <p>{data?.currentWeight} kg</p>
        </div>
        <div>
          <h3>Weight goal: </h3>
          <p>{data?.weightGoal} kg</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <WeightChart
            percentage={
              100 -
              Math.round(
                (Math.abs(data?.currentWeight - data?.weightGoal) * 100) /
                  data?.weightGoal
              )
            }
          >
            <div></div>
          </WeightChart>
          <span>
            {100 -
              Math.round(
                (Math.abs(data?.currentWeight - data?.weightGoal) * 100) /
                  data?.weightGoal
              )}
            %
          </span>
        </div>
        <LeftContainer>
          <p>~{Math.abs(data?.currentWeight - data?.weightGoal)} kg left</p>
          <CustomButton>Change weight</CustomButton>
        </LeftContainer>
      </WeightContainer>
      <MeditationContainer></MeditationContainer>
      <HydrationContainer>
        <h2>Daily hydration</h2>
        <div>
          <p style={{ color: selectColor() }}>1000mL / 2000mL</p>
          <input type="number" placeholder="Quantity in mL" />
        </div>
        <LuGlassWater color={selectColor()} size={200}></LuGlassWater>
        <CustomButton>Add water</CustomButton>
      </HydrationContainer>
    </StyledContainer>
  );
};

export default FitnessGoal;
