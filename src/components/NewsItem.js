import React from "react";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";

const NewsItem = (props) => {
  const { news } = props;
  // console.log(news);

  return (
    <>
      <Card sx={{ maxWidth: 320 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {news.source.name.charAt(0)}
            </Avatar>
          }
          // action={}
          title={news.source.name}
          subheader={news.publishedAt.split("T")[0]}
        />
        <CardMedia
          component="img"
          height="194"
          image={news.urlToImage}
          alt="News Thumbnail"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {news.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default NewsItem;
