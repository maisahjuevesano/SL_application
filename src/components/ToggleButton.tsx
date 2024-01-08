import { useState } from "react";
import { ToggleContainer, ToggleKnob } from "../styled/Buttons";

export const ToggleButton = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <ToggleContainer toggled={toggled} onClick={handleToggle}>
      <ToggleKnob />
    </ToggleContainer>
  );
};

export default ToggleButton;
