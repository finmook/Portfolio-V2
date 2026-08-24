import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: "center" }}>
      <Typography
        component="p"
        sx={{
          color: "secondary.main",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontSize: 13,
          mb: 1,
        }}
      >
        {eyebrow}
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        sx={{ fontSize: { xs: 28, sm: 34, md: 40 } }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            maxWidth: 620,
            mx: "auto",
            mt: 1.5,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
