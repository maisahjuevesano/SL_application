import { useTheme } from "../models/theme-context";
import { ToggleContainer, ToggleKnob } from "../styled/Buttons";

export const ToggleButton = () => {
  const { isToggled, toggleTheme } = useTheme();

  return (
    <ToggleContainer $istoggled={isToggled} onClick={toggleTheme}>
      <ToggleKnob />
    </ToggleContainer>
  );
};

export default ToggleButton;
