import { Box, Container } from "@mui/material";
import { Footer, Navbar, StyledProvider } from "components-extra";
import { Link, Route, Router, Routes } from "react-router-dom";
import { BlogList } from "./features/blog/blogList";
import { BlogPost } from "./features/blog/blogPost";

function App() {
  return (
    <StyledProvider>
      <Container maxWidth={false}>
        <Navbar position="relative">
          <Navbar.Brand title="My Awesome Blog" />
        </Navbar>
        <Box height="79vh" display="flex" flexDirection="column">
          <Routes>
            <Route path="/posts" element={<BlogList />} />
            <Route path="/post/:postSlug" element={<BlogPost />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "0.5rem" }}>
                  <p>There's nothing here!</p>
                  <Link to="/posts" >
                    See Posts
                  </Link>
                </main>
              }
            />
          </Routes>
        </Box>
        <Footer>
          <Footer.Column isInline>
            <Footer.Item>Blog Website</Footer.Item>
          </Footer.Column>
        </Footer>
      </Container>
    </StyledProvider>
  );
}

export default App;
