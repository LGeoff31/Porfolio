import React from "react";
import { Box, Typography, Stack, Chip, Link } from "@mui/material";

interface BlogPost {
  title: string;
  date: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Brain Teasers",
    date: "October 22 2024",
    description: "Compilation of my favourite riddles and puzzles.",
  },
];

const Blog: React.FC = () => {
  return (
    <Box
      sx={{
        paddingTop: "5rem",
        background: "rgb(36,36,36)",
        paddingBottom: "10rem",
        paddingLeft: { md: "10rem", sm: "4rem", xs: "2rem" },
        paddingRight: { md: "10rem", sm: "4rem", xs: "2rem" },
      }}
    >
      <Typography
        variant="h4"
        color="rgb(107 114 128/var(--tw-text-opacity))"
        letterSpacing={"10px"}
        fontWeight="100"
        textAlign={"center"}
        fontSize="2.5rem"
        textTransform={"uppercase"}
        marginBottom="3.5rem"
      >
        Blog
      </Typography>
      <Stack spacing={2}>
        {blogPosts.map((post, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#2a2a2a",
              padding: "1rem",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Link
                href="brainteasers"
                variant="h5"
                color="#fcb232"
                sx={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline", // Underline on hover
                  },
                }}
              >
                {post.title}
              </Link>
              <Typography variant="body1" color="gray">
                {post.description}
              </Typography>
            </Box>
            <Stack direction="row" spacing={1}>
              <Typography
                variant="body2"
                color="gray"
                sx={{ fontStyle: "italic" }}
              >
                {post.date}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Blog;
