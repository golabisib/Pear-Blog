import PropTypes from "prop-types";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function CardEl({ title, slug, coverPhoto, author }) {
  return (
    <div>
      <Card
        sx={{
          boxShadow: "rgb(129, 190, 206) 0px 4px 9px",
          borderRadius: "4px",
        }}
      >
        {author &&
        <CardHeader
          avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
          title={
            <Typography
              component="p"
              variant="p"
              color="#012e4a"
              fontSize="20px"
            >
              {author.name}
            </Typography>
          }
        />
         }
        <CardMedia
          component="img"
          height="194"
          image={coverPhoto.url}
          alt={slug}
        />

        <CardContent>
          <Typography
            component="h3"
            variant="h6"
            color="#012e4a"
            fontWeight={600}
          >
            {title}
          </Typography>
        </CardContent>
        <Divider variant="middle" sx={{ margin: "10px" }} />
        <CardActions>
          <Link to={`/blogs/${slug}`} style={{textDecoration:"none", width: "100%"}} >
            <Button
              variant="outlined"
              size="medium"
              sx={{
                width: "100%",
                borderRadius: 3,
                backgroundColor: "#036280",
                color: "#e8ede7",
                "&:hover": { backgroundColor: "#e8ede7", color: "#036280" },
              }}
            >
              مطالعه مقاله
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

CardEl.propTypes = {
  author: PropTypes.shape({
    avatar: PropTypes.shape({
      url: PropTypes.any,
    }),
    name: PropTypes.any,
  }),
  coverPhoto: PropTypes.any,
  slug: PropTypes.any,
  title: PropTypes.any,
};

export default CardEl;
