import {
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { FC } from "react";
import { useListPostsQuery } from "./blogApi";
import ErrorIcon from "@mui/icons-material/Error";
import { Link } from "react-router-dom";

export interface InputProps {}

const BlogList: FC<InputProps> = () => {
  const { data = [], isLoading, error } = useListPostsQuery(null);

  if (isLoading) {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }

  if (error) {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <ErrorIcon color="error" />
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <List>
        {data.map((post) => (
          <Link
            to={`/post/${post.slug}`}
            style={{ display: "block", margin: "1rem 0" }}
            key={post.slug}
          >
            <ListItem>
              <ListItemText primary={post.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export { BlogList };
