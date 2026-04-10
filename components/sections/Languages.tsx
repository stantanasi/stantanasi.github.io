import { languages } from '@/data/languages';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';

export default function Languages() {
  return (
    <Box
      component="section"
      id="languages"
      sx={{
        backgroundColor: '#000',
        paddingY: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 800,
            textTransform: 'uppercase',
          }}
        >
          Langues
        </Typography>

        <Grid
          container
          spacing="1px"
          sx={{
            backgroundColor: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.06)',
            marginTop: 7,
          }}
        >
          {languages.map((language) => (
            <Grid
              key={language.name}
              size={{ xs: 12, md: 4 }}
              sx={{
                backgroundColor: '#000',
                padding: { xs: '2rem', md: '3rem 2rem' },
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(200,240,96,0.02)',
                  '& .lang-abbr': { WebkitTextStroke: '1px #c8f060' },
                  '& .lang-line': { width: 48, backgroundColor: '#c8f060' },
                  '& .lang-level': { color: '#c8f060' },
                },
              }}
            >
              <Typography
                className="lang-abbr"
                sx={{
                  color: 'transparent',
                  fontSize: '4rem',
                  fontWeight: 800,
                  lineHeight: 1,
                  transition: 'all 0.3s ease',
                  WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                }}
              >
                {language.abbr}
              </Typography>

              <Divider
                className="lang-line"
                sx={{
                  width: 24,
                  height: '1px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderColor: 'transparent',
                  marginTop: 2,
                  transition: 'all 0.3s ease',
                }}
              />

              <Typography
                sx={{
                  color: '#fff',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  marginTop: 2,
                }}
              >
                {language.name}
              </Typography>

              <Typography
                className="lang-level"
                sx={{
                  color: '#555',
                  fontSize: '0.8rem',
                  fontFamily: 'monospace',
                  letterSpacing: '0.15em',
                  marginTop: 0.5,
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                }}
              >
                {language.level}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}