import { Box, Button, styled, Theme, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

import ExtraSmallScreenStatSummary from "@/components/ProfileSummary/ExtraSmallScreenProfileSummary/ExtraSmallScreenStatSummary";
import SquareGrid from "@/components/SquareGrid";

const ProfileTabsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  borderTop: `1px solid ${theme.palette.grey[400]}`,
  gap: theme.spacing(2),
}));

const TabButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flex: 1,
  },
}));

const ProfileBody: React.FC = () => {
  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const data = [1, 2, 3, 4, 5, 6, 7];

  const itemRenderer = () => {
    return (
      <div style={{ backgroundColor: "red", height: "100%", width: "100%" }}>
        <img
          src="https://images.unsplash.com/photo-1666817963926-7a87a3dcf187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
    );
  };

  return (
    <Box>
      <Box>
        {isExtraSmallScreen && <ExtraSmallScreenStatSummary />}

        <ProfileTabsContainer>
          <TabButton>
            <Typography>Posts</Typography>
          </TabButton>

          <TabButton>
            <Typography>Saved</Typography>
          </TabButton>

          <TabButton>
            <Typography>Tagged</Typography>
          </TabButton>
        </ProfileTabsContainer>
      </Box>

      <SquareGrid data={data} itemRenderer={itemRenderer} />
    </Box>
  );
};

export default ProfileBody;
