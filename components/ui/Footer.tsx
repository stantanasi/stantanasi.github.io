import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Container, IconButton, Stack, Typography } from '@mui/material';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'GitHub', url: 'https://github.com/stantanasi', icon: <GitHubIcon fontSize="small" /> },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/lory-stan-tanasi', icon: <LinkedInIcon fontSize="small" /> },
    { label: 'Email', url: 'mailto:stantanasi@gmail.com', icon: <EmailIcon fontSize="small" /> },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        paddingBottom: 3,
        paddingTop: 6,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="column"
          sx={{ alignItems: 'center' }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              textTransform: 'uppercase',
            }}
          >
            Lory-Stan
            <Box component="span" sx={{ color: '#c8f060' }}>{' TANASI'}</Box>
          </Typography>

          <Typography
            sx={{
              color: '#555',
              fontSize: '0.7rem',
              textTransform: 'uppercase',
            }}
          >
            Développeur mobile & web full-stack
          </Typography>

          <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
            {links.map((link) => (
              <IconButton
                key={link.label}
                href={link.url}
                target={link.url.startsWith('mailto') ? undefined : '_blank'}
                aria-label={link.label}
                sx={{
                  width: 36,
                  height: 36,
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 0,
                  color: '#888',
                  '&:hover': {
                    color: '#c8f060',
                    borderColor: '#c8f060',
                  },
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 4,
          }}
        >
          <Typography
            sx={{
              color: '#5a5a5a',
              fontFamily: 'monospace',
              fontSize: '10px',
              letterSpacing: '0.1em',
            }}
          >
            © {currentYear}
            <Box component="span" sx={{ color: '#777' }}>{' Lory-Stan TANASI '}</Box>
            — Tous droits réservés
          </Typography>

          <Typography
            sx={{
              color: '#5a5a5a',
              fontFamily: 'monospace',
              fontSize: '10px',
              letterSpacing: '0.1em',
            }}
          >
            <Box component="span" sx={{ color: '#c8f060', opacity: 0.4 }}>{'• '}</Box>
            Next.js · MUI · TypeScript
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}