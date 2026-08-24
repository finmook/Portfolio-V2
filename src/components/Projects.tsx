"use client";

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import SectionHeading from "./SectionHeading";
import { projectCategories, projects } from "@/data/portfolio";

export default function Projects() {
  const [filter, setFilter] = React.useState("all");

  const filtered = React.useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category.includes(filter)),
    [filter]
  );

  return (
    <Box
      id="projects"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "rgba(255,255,255,0.015)" }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          subtitle="Filter by category to see full-stack products, frontend builds, backend services, data/AI work, and standalone software."
        />

        <Stack
          direction="row"
          sx={{ flexWrap: "wrap", gap: 1.25, justifyContent: "center", mb: 5 }}
        >
          {projectCategories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <Chip
                key={cat.id}
                label={cat.label}
                onClick={() => setFilter(cat.id)}
                sx={{
                  fontWeight: 600,
                  px: 1,
                  py: 2.2,
                  cursor: "pointer",
                  color: isActive ? "#0b0e14" : "text.secondary",
                  bgcolor: isActive ? "secondary.main" : "rgba(255,255,255,0.06)",
                  border: "1px solid",
                  borderColor: isActive ? "secondary.main" : "divider",
                  "&:hover": {
                    bgcolor: isActive ? "secondary.main" : "rgba(255,255,255,0.1)",
                  },
                }}
              />
            );
          })}
        </Stack>

        <Grid container spacing={3}>
          {filtered.map((project) => (
            <Grid key={project.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "background.paper",
                  borderColor: "divider",
                  borderRadius: 4,
                  overflow: "hidden",
                  transition: "transform 0.2s ease, border-color 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "primary.main",
                  },
                }}
              >
                {project.image && (
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 10",
                      bgcolor: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(11,14,20,0) 55%, rgba(11,14,20,0.65) 100%)",
                      }}
                    />
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  {project.featured && (
                    <Chip
                      label="Featured"
                      size="small"
                      sx={{
                        mb: 1.5,
                        bgcolor: "rgba(48,224,209,0.12)",
                        color: "secondary.main",
                        border: "1px solid rgba(48,224,209,0.35)",
                        fontWeight: 700,
                        fontSize: 11,
                      }}
                    />
                  )}
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 2, minHeight: 60 }}
                  >
                    {project.description}
                  </Typography>
                  <Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.75 }}>
                    {project.tech.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          bgcolor: "rgba(255,255,255,0.06)",
                          color: "text.secondary",
                          fontSize: 11.5,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ px: 3, pb: 2.5, pt: 0, gap: 1 }}>
                  {project.github && (
                    <Button
                      size="small"
                      startIcon={<GitHubIcon fontSize="small" />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: "text.secondary" }}
                    >
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="small"
                      startIcon={<LaunchIcon fontSize="small" />}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: "secondary.main" }}
                    >
                      Live Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
