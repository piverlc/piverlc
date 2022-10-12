import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import IconButton from "@mui/joy/IconButton";
import { useColorScheme } from "@mui/joy/styles";
import { Fragment, useEffect, useState } from "react";

const DarkModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="primary" />;
  }

  return (
    <Fragment>
      <IconButton
        color="primary"
        variant="outlined"
        id={`${mode}-mode-toggle`}
        aria-label={`${mode}-mode-toggle`}
        onClick={() => {
          if (mode === "light") return setMode("dark");
          setMode("light");
        }}
      >
        {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    </Fragment>
  );
};

export default DarkModeToggle;
