import { CircularProgress, Grid } from "@mui/material";
import { Card } from "components-extra";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetPostBySlugQuery } from "./blogApi";

export interface InputProps {}

const BlogPost: FC<InputProps> = () => {
  const params = useParams();
  const { postSlug = "" } = params;
  const {
    data = { post: { content: "", title: "", author: "", slug: "" } },
    isLoading,
    error,
  } = useGetPostBySlugQuery(postSlug);
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
  const { post } = data;
  console.log(data, error);

  return (
    <>
      <Card description={post.content} title={post.title}>
        <Card.Button href="/posts">Go Back</Card.Button>
      </Card>
    </>
  );
};

export { BlogPost };
