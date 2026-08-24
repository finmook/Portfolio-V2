import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SectionHeading from "./SectionHeading";
import EmailMenu from "./EmailMenu";
import { contact } from "@/data/portfolio";

const links = [
  {
    label: contact.phone,
    href: contact.phoneHref,
    icon: PhoneIcon,
  },
  {
    label: `github.com/${contact.github.handle}`,
    href: contact.github.url,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: contact.linkedin.url,
    icon: LinkedInIcon,
  },
  {
    label: `@${contact.instagram.handle}`,
    href: contact.instagram.url,
    icon: InstagramIcon,
  },
];

export default function Contact() {
  return (
    <Box id="contact" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="sm">
        <SectionHeading
          eyebrow="Let's talk"
          title="Get In Touch"
          subtitle="Have a project, an opportunity, or just want to say hi? My inbox is open."
        />

        <Paper
          variant="outlined"
          sx={{
            p: { xs: 3, md: 5 },
            bgcolor: "background.paper",
            borderColor: "divider",
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <EmailMenu
            email={contact.email}
            variant="button"
            label="Say Hello"
            sx={{
              mb: 4,
              background: "linear-gradient(90deg, #8b7bff, #30e0d1)",
              color: "#0b0e14",
              fontWeight: 700,
              "&:hover": { background: "linear-gradient(90deg, #7a68ff, #23c9bb)" },
            }}
          />

          <Stack spacing={1.5}>
            <EmailMenu email={contact.email} variant="row" label={contact.email} />
            {links.map(({ label, href, icon: Icon }) => (
              <Stack
                key={label}
                component="a"
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                direction="row"
                spacing={1.5}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  color: "text.secondary",
                  "&:hover": { color: "text.primary" },
                }}
              >
                <Icon fontSize="small" sx={{ color: "primary.main" }} />
                <Typography variant="body2">{label}</Typography>
              </Stack>
            ))}
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
