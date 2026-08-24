"use client";

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SectionHeading from "./SectionHeading";
import { activities, certifications, certificationCategories } from "@/data/portfolio";

export default function Activities() {
  const [certFilter, setCertFilter] = React.useState(certificationCategories[0].id);

  const filteredCertifications = React.useMemo(
    () => certifications.filter((cert) => cert.category === certFilter),
    [certFilter]
  );

  return (
    <Box id="activities" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Beyond the code"
          title="Activities & Certifications"
          subtitle="Leadership, community, and competition experience alongside continuous learning."
        />

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {activities.map((activity) => (
            <Grid key={activity.title} size={{ xs: 12, sm: 6 }}>
              <Paper
                variant="outlined"
                sx={{
                  height: "100%",
                  bgcolor: "background.paper",
                  borderColor: "divider",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                {activity.image && (
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 9",
                      bgcolor: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <Image
                      src={activity.image}
                      alt={`${activity.title} photo`}
                      fill
                      sizes="(max-width: 600px) 100vw, 50vw"
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
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 0.5 }}>
                    {activity.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontWeight: 600,
                      fontSize: 13,
                      mb: 1.5,
                    }}
                  >
                    {activity.role}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {activity.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Paper
          variant="outlined"
          sx={{
            bgcolor: "background.paper",
            borderColor: "divider",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: "center", px: { xs: 3, md: 4 }, pt: { xs: 3, md: 4 } }}
          >
            <WorkspacePremiumIcon sx={{ color: "primary.main" }} />
            <Typography variant="h6">Certifications</Typography>
          </Stack>

          <Tabs
            value={certFilter}
            onChange={(_, v) => setCertFilter(v)}
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
              mt: 1.5,
              borderBottom: "1px solid",
              borderColor: "divider",
              px: { xs: 1, md: 2 },
              "& .MuiTab-root": {
                fontWeight: 600,
                color: "text.secondary",
              },
              "& .Mui-selected": {
                color: "text.primary !important",
              },
            }}
          >
            {certificationCategories.map((cat) => (
              <Tab key={cat.id} value={cat.id} label={cat.label} />
            ))}
          </Tabs>

          <Box sx={{ p: { xs: 3, md: 4 } }}>
            {filteredCertifications.length === 0 ? (
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                More certificates coming soon.
              </Typography>
            ) : (
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  overflowX: "auto",
                  pb: 1,
                  scrollSnapType: "x mandatory",
                  "&::-webkit-scrollbar": { height: 6 },
                  "&::-webkit-scrollbar-thumb": {
                    bgcolor: "rgba(255,255,255,0.15)",
                    borderRadius: 3,
                  },
                }}
              >
                {filteredCertifications.map((cert) => (
                  <Paper
                    key={cert.name}
                    variant="outlined"
                    sx={{
                      flex: "0 0 auto",
                      width: { xs: 220, sm: 240 },
                      scrollSnapAlign: "start",
                      bgcolor: "background.default",
                      borderColor: "divider",
                      borderRadius: 3,
                      overflow: "hidden",
                      transition: "transform 0.2s ease, border-color 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "4 / 3",
                        bgcolor: "#fff",
                      }}
                    >
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        sizes="240px"
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ p: 1.5, fontWeight: 600, color: "text.primary" }}
                    >
                      {cert.name}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
