import { Box, styled, Typography } from "@mui/material";
import React from "react";

const StatSummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(5),
}));

const StatSummary: React.FC = () => {
  return (
    <StatSummaryContainer>
      <Typography>
        <strong>17 </strong>posts
      </Typography>
      <Typography>
        <strong>200 </strong>followers
      </Typography>
      <Typography>
        <strong>200 </strong>following
      </Typography>
    </StatSummaryContainer>
  );
};

export default StatSummary;
