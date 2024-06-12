import { Container, Grid, Typography } from "@mui/material";
import Authors from "../aothur/Authors";
import Blog from "../blog/Blog";

function HomePage() {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2} padding={3}>
          <Grid item xs={12} md={3} mt={4}>
            <Typography
              component="h3"
              variant="h5"
              marginBottom={3}
              fontWeight={700}
            >
              نویسنده ها
              <Authors />
            </Typography>
          </Grid>{" "}
          <Grid item xs={12} md={9} mt={4}>
            <Typography
              component="h3"
              variant="h5"
              marginBottom={3}
              fontWeight={700}
            >
              مقالات
              <Blog />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;
