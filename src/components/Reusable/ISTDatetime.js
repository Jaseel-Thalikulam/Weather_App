import { Typography } from "@mui/material";
import React from "react";
import { getISTDatetime } from "../../utilities/DatetimeUtils";

const ISTDatetime = () => {
  const istFullDate = getISTDatetime();
  const originalDateTime = new Date(istFullDate);
  const formattedDate = originalDateTime.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  });
  const formattedTime = originalDateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  const convertedDateTime = `${formattedDate} ${formattedTime}`;

  const utcTimeValue = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: "400",
        fontSize: { xs: "10px", sm: "12px" },
        color: "rgba(255, 255, 255, .7)",
        lineHeight: 1,
        paddingRight: "2px",
        fontFamily: "Poppins",
      }}
    >
      {convertedDateTime}
    </Typography>
  );
  return utcTimeValue;
};

export default ISTDatetime;
