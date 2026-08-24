"use client";

import * as React from "react";
import type { SxProps, Theme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Snackbar from "@mui/material/Snackbar";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type EmailMenuProps = {
  email: string;
  variant?: "icon" | "button" | "row";
  label?: string;
  sx?: SxProps<Theme>;
};

export default function EmailMenu({ email, variant = "icon", label, sx }: EmailMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [copied, setCopied] = React.useState(false);
  const open = Boolean(anchorEl);

  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  const outlookHref = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(email)}`;

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // clipboard unavailable — silently ignore
    }
    handleClose();
  };

  return (
    <>
      {variant === "icon" && (
        <IconButton aria-label="Email" onClick={handleOpen} sx={sx}>
          <EmailIcon />
        </IconButton>
      )}

      {variant === "button" && (
        <Button
          onClick={handleOpen}
          variant="contained"
          size="large"
          startIcon={<EmailIcon />}
          sx={sx}
        >
          {label}
        </Button>
      )}

      {variant === "row" && (
        <Stack
          direction="row"
          spacing={1.5}
          onClick={handleOpen}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "text.secondary",
            "&:hover": { color: "text.primary" },
            ...sx,
          }}
        >
          <EmailIcon fontSize="small" sx={{ color: "primary.main" }} />
          <Typography variant="body2">{label}</Typography>
        </Stack>
      )}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        slotProps={{
          paper: {
            variant: "outlined",
            sx: {
              mt: 1,
              bgcolor: "background.paper",
              borderColor: "divider",
              borderRadius: 2,
              minWidth: 220,
            },
          },
        }}
      >
        <MenuItem
          component="a"
          href={gmailHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClose}
        >
          <ListItemIcon>
            <OpenInNewIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Open in Gmail</ListItemText>
        </MenuItem>
        <MenuItem
          component="a"
          href={outlookHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClose}
        >
          <ListItemIcon>
            <OpenInNewIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Open in Outlook</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleCopy}>
          <ListItemIcon>
            <ContentCopyIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy email address</ListItemText>
        </MenuItem>
      </Menu>

      <Snackbar
        open={copied}
        autoHideDuration={2000}
        onClose={() => setCopied(false)}
        message="Email address copied"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
}
