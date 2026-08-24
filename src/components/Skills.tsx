"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  const [active, setActive] = React.useState(0);
  const category = skillCategories[active];

  return (
    <Box id="skills" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills"
          subtitle="Grouped by the kind of problem they help me solve — from pixels on screen to data in a database."
        />

        <Paper
          variant="outlined"
          sx={{
            bgcolor: "background.paper",
            borderColor: "divider",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <Tabs
            value={active}
            onChange={(_, v) => setActive(v)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            textColor="inherit"
            slotProps={{
              indicator: {
                sx: {
                  height: 3,
                  borderRadius: 3,
                  background: "linear-gradient(90deg, #8b7bff, #30e0d1)",
                },
              },
            }}
            sx={{
              borderBottom: "1px solid",
              borderColor: "divider",
              px: 1,
              "& .MuiTab-root": {
                fontWeight: 600,
                color: "text.secondary",
              },
              "& .Mui-selected": {
                color: "text.primary !important",
              },
            }}
          >
            {skillCategories.map((cat) => (
              <Tab key={cat.id} label={cat.label} />
            ))}
          </Tabs>

          <Box sx={{ p: { xs: 3, md: 5 } }}>
            <Typography
              sx={{ color: "text.secondary", mb: 3, fontSize: 15 }}
            >
              {category.description}
            </Typography>
            <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1.25 }}>
              {category.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    bgcolor: "rgba(139,123,255,0.08)",
                    border: "1px solid rgba(139,123,255,0.25)",
                    color: "text.primary",
                    px: 1,
                    py: 2.4,
                    fontSize: 14,
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
