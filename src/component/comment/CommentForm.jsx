import { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.warn("تمام قسمت های مورد نیاز کامنت را پر کنید.", {
        position: "top-center",
      });
    }
  };

  if (data) {
    toast.success("نظر شما با موفقیت ثبت شد. پس از تایید منتشر میشود." ,{
        position: "top-center"
    }
    )
  }

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
        <Grid item xs={12} m={2}>
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
            sx={{
              width: "100%",
              marginTop: "20px",
              backgroundColor: "#e8ede7",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="متن کامنت"
            variant="filled"
            sx={{
              width: "100%",
              marginTop: "20px",
              backgroundColor: "#e8ede7",
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
          />
        </Grid>
        <Grid item xs={12} m={2}>
          {loading ? (
            <Button> در حال ارسال ...</Button>
          ) : (
            <Button variant="contained" onClick={sendHandler}>
              ارسال
            </Button>
          )}
        </Grid>
      </Grid>
      <ToastContainer />
    </Container>
  );
}

export default CommentForm;
