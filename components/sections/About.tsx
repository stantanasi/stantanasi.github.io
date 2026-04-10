import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import { Avatar, Box, Button, Chip, Container, IconButton, Stack, Typography } from '@mui/material';

export default function About() {
  const links = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/lory-stan-tanasi', icon: <LinkedInIcon fontSize="small" /> },
    { label: 'GitHub', url: 'https://github.com/stantanasi', icon: <GitHubIcon fontSize="small" /> },
    { label: 'Email', url: 'mailto:stantanasi@gmail.com', icon: <EmailIcon fontSize="small" /> },
  ];

  const stack = [
    'TypeScript',
    'Kotlin',
    'Next.js',
    'React',
    'React Native',
    'Android Studio',
    'Node.js',
    'NestJS',
    'GitHub',
    'Jira',
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        backgroundColor: '#000',
        paddingY: { xs: 8, md: 15 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 6, md: 10 }}
          sx={{
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Stack
            direction="column"
            sx={{
              width: '100%',
              position: { md: 'sticky' },
              top: '100px',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.1)',
              maxWidth: '300px',
              padding: { xs: 3, md: 4 },
            }}
          >
            <Avatar
              src="/me.jpg"
              alt="Lory-Stan TANASI"
              sx={{
                width: { xs: 100, md: 120 },
                height: { xs: 100, md: 120 },
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 0,
                '& img': { objectFit: 'cover' }
              }}
            />

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.2rem', md: '1.4rem' },
                fontWeight: 800,
                marginTop: 2,
              }}
            >
              Lory-Stan TANASI
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#c8f060',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: 1.2,
                marginTop: 0.5,
                textTransform: 'uppercase',
              }}
            >
              Développeur mobile & web
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: 'center',
                marginTop: 3,
              }}
            >
              <PlaceIcon sx={{ color: '#c8f060', fontSize: '0.75rem' }} />
              <Typography variant="caption" sx={{ color: '#888' }}>
                Martinique, France
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: 'center',
                marginTop: 0.5,
              }}
            >
              <Typography sx={{ color: '#c8f060', fontSize: '1.2rem' }}>•</Typography>
              <Typography variant="caption" sx={{ color: '#888' }}>
                Disponible
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              sx={{
                marginTop: 3,
              }}
            >
              {links.map((link) => (
                <IconButton
                  key={link.label}
                  size="medium"
                  component="a"
                  href={link.url}
                  target={link.url.startsWith('mailto') ? undefined : '_blank'}
                  sx={{
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 0,
                    color: '#888',
                    '&:hover': {
                      borderColor: '#c8f060',
                      color: '#c8f060',
                    },
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Stack>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<DescriptionIcon sx={{ fontSize: '1rem !important' }} />}
              href="/cv.pdf"
              target="_blank"
              sx={{
                borderColor: 'rgba(255,255,255,0.2)',
                borderRadius: 0,
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 700,
                marginTop: 3,
                paddingY: 1,
                textTransform: 'uppercase',
                '&:hover': {
                  borderColor: '#c8f060',
                  color: '#c8f060',
                },
              }}
            >
              Mon CV
            </Button>
          </Stack>

          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                textTransform: 'uppercase',
              }}
            >
              À propos
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#777',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginTop: 4,
                '& strong': { color: '#fff' },
              }}
            >
              Développeur expérimenté avec plus de <strong>3 ans d'expertise chez 42c</strong>, j'ai conçu des applications mobiles et des sites web innovants pour des projets d'envergure. Mon parcours est porté par une veille constante et le partage de projets personnels suivis par une large communauté sur GitHub.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#777',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginTop: 3,
                '& strong': { color: '#fff' },
              }}
            >
              Diplômé d'un <strong>Master Informatique à l'ESTIAM Paris</strong>, je combine rigueur technique et sens du produit pour transformer des visions complexes en solutions performantes, que ce soit sur le Web ou Mobile.
            </Typography>

            <Typography
              variant="overline"
              sx={{
                display: 'block',
                color: '#666',
                fontWeight: 700,
                letterSpacing: 2,
                marginTop: 6,
              }}
            >
              Expertise technique
            </Typography>

            <Stack
              direction="row"
              spacing={1.5}
              sx={{
                flexWrap: 'wrap',
                marginTop: 2,
              }}
            >
              {stack.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    borderRadius: 0,
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#888',
                    fontFamily: 'monospace',
                    fontSize: '0.85rem',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: '#c8f060',
                      color: '#c8f060',
                      transform: 'translateY(-2px)'
                    }
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box >
  );
}