import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  return (
    <Container>
      <Grid
        container
        sx={{
          boxShadow: "rgb(129, 190, 206) 0px 4px 9px",
          borderRadius: 4,
          py: 1,
          mt: 5,
        }}
      >
        <Grid item xs={12} m={2}>
          <Typography
            component="p"
            variant="h6"
            fontWeight={700}
            color="#012e4a"
          >
            فرم ارسال کامنت
          </Typography>
        </Grid>
        <Grid item xs={12} m={2} >
          <TextField
            label="نام کاربری"
            variant="filled"
            sx={{ width: "100%", backgroundColor: "#e8ede7" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="ایمیل"
            variant="filled"
            sx={{ width: "100%", marginTop: "20px", backgroundColor: "#e8ede7", }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="متن کامنت"
            variant="filled"
            sx={{ width: "100%", marginTop: "20px", backgroundColor: "#e8ede7" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
          />
        </Grid>
        <Grid item xs={12} m={2}>
            <Button variant="contained">ارسال</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CommentForm;


