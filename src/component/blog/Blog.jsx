import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEl from "../shared/CardEl";

function Blog() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);
  if (loading) return <p>Loading...</p>;
  if (errors) return <p>Error</p>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEl {...post}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default Blog;
