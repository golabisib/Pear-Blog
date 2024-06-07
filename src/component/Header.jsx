import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

function Header() {
  return (
    <div>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#378bae", color: "#e8ede7" }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography component="h1" variant="h4" fontWeight="bold" flex={1}>
              وبلاگ گلابی
            </Typography>
            <BookIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
