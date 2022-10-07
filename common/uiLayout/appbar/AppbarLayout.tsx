import { Fragment } from "react";
import Link from "next/link";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import AppLayout from "../AppLayout";
import utilStyles from "../../../styles/utils.module.css";
import DarkModeToggle from "../../dark-mode/DarkModeToggle";

const AppbarLayout = () => {
  return (
    <Fragment>
      <AppLayout.Header>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Link href="/">
            <Typography
              component="h1"
              fontWeight="xl"
              level="h4"
              className={utilStyles.headingXl}
            >
              {"Placeholder"}
            </Typography>
          </Link>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
          <Link href="/login">
            <Button variant="outlined" className={utilStyles.headingSm}>
              {"Auth"}
            </Button>
          </Link>
          <DarkModeToggle />
        </Box>
      </AppLayout.Header>
    </Fragment>
  );
};

export default AppbarLayout;
