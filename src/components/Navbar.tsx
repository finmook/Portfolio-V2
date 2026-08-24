"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { profile } from "@/data/portfolio";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? "rgba(10,12,20,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: "1px solid",
          borderColor: scrolled ? "divider" : "transparent",
          transition: "all 0.25s ease",
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", px: { xs: 2, md: 3 } }}>
          <Typography
            component="a"
            href="#home"
            sx={{
              fontWeight: 800,
              fontSize: 20,
              flexGrow: 1,
              textDecoration: "none",
              color: "text.primary",
              background: "linear-gradient(90deg, #b3a6ff, #30e0d1)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {profile.nickname}.dev
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            aria-label="Open navigation menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" }, color: "text.primary" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 240, pt: 2 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navItems.map((item) => (
              <ListItemButton key={item.href} component="a" href={item.href}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
