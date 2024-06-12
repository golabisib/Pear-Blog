import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

function Header() {
  return (
    <header>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#036280", color: "#e8ede7" }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography component="h1" variant="h4" fontWeight="bold" flex={1}>
            گلابی بلاگ
            </Typography>
            <BookIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
