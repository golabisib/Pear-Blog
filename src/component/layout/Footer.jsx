import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="h7"
        sx={{ backgroundColor: "#036280", color: "#e8ede7" }}
        padding="10px"
        textAlign="center"
        mt={10}
      >
        نوشته شده با GraphQL , MUI و API: HyGraph
      </Typography>
    </footer>
  );
}

export default Footer;
