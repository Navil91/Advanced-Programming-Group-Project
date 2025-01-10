/* eslint-disable react/prop-types */
import { StatLabel, StatRoot, StatValueText } from "@chakra-ui/react";

export default function StatWidgetInfo({
  label = "Unique visitors",
  text = "192.1k",
}) {
  return (
    <StatRoot>
      <StatLabel>{label}</StatLabel>
      <StatValueText>{text}</StatValueText>
    </StatRoot>
  );
}
