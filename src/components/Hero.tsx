import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import EmailMenu from "./EmailMenu";
import { profile, contact } from "@/data/portfolio";

export default function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        pt: { xs: 12, md: 0 },
      }}
    >
      {/* decorative glow */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: 480, md: 900 },
          height: { xs: 480, md: 900 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,123,255,0.28) 0%, rgba(48,224,209,0.12) 45%, rgba(10,12,20,0) 70%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", textAlign: "center" }}>
        <Typography
          component="p"
          sx={{
            color: "secondary.main",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontSize: 14,
            mb: 2,
          }}
        >
          Hi, I&apos;m {profile.name.split(" ")[0]}
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 36, sm: 48, md: 64 },
            lineHeight: 1.1,
            mb: 2,
          }}
        >
          {profile.tagline}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: 16, md: 18 },
            maxWidth: 620,
            mx: "auto",
            mb: 1,
          }}
        >
          {profile.bio}
        </Typography>

        <Typography sx={{ color: "text.secondary", fontSize: 14, mb: 4 }}>
          {profile.role} · {profile.location}
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mb: 4, justifyContent: "center" }}
        >
          <Button
            href="#projects"
            variant="contained"
            size="large"
            sx={{
              background: "linear-gradient(90deg, #8b7bff, #30e0d1)",
              color: "#0b0e14",
              fontWeight: 700,
              "&:hover": { background: "linear-gradient(90deg, #7a68ff, #23c9bb)" },
            }}
          >
            View Projects
          </Button>
          <Button href="#contact" variant="outlined" size="large" color="inherit">
            Get in Touch
          </Button>
        </Stack>

        <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
          <IconButton
            aria-label="GitHub"
            href={contact.github.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            href={contact.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            href={contact.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
          >
            <InstagramIcon />
          </IconButton>
          <EmailMenu
            email={contact.email}
            variant="icon"
            sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
          />
        </Stack>
      </Container>

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: { xs: "none", sm: "flex" },
          color: "text.secondary",
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 100%": { transform: "translate(-50%, 0)" },
            "50%": { transform: "translate(-50%, 8px)" },
          },
        }}
      >
        <ArrowDownwardIcon fontSize="small" />
      </Box>
    </Box>
  );
}
