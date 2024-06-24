import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sanitizeHtml from "sanitize-html";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (errors) return <p>Error</p>;
  console.log(data);
  const { post } = data;
  return (
    <Container maxWidth="lg">
      <Grid Container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="#012e4a"
            fontWeight={700}
          >
            {post.title}
          </Typography>
          <ArrowBackIcon
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={post.coverPhoto.url}
            alt={post.slug}
            width="100%"
            style={{ borderRadius: "15px" }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="#012e4a">
              {post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={6}>
            <div dangerouslySetInnerHTML={{__html : sanitizeHtml(post.content.html)}}></div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
