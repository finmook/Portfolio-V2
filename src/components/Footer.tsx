import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: "1px solid",
        borderColor: "divider",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          © {new Date().getFullYear()} {profile.name}.
        </Typography>
      </Container>
    </Box>
  );
}
