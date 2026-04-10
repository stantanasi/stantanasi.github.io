import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Container, Stack, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="caption"
          sx={{
            color: '#888',
            display: 'block',
            fontWeight: 500,
            letterSpacing: 4,
            textTransform: 'uppercase',
          }}
        >
          Développeur mobile & web full-stack
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: '#555',
            display: 'block',
            fontFamily: 'monospace',
            fontSize: '0.65rem',
            fontWeight: 500,
            letterSpacing: 1,
            marginTop: 1,
          }}
        >
          React • Next.js • React Native • Android Studio • Node.js
        </Typography>

        <Typography
          variant="h1"
          sx={{
            display: 'block',
            fontSize: { xs: '3rem', md: '8rem' },
            fontWeight: 800,
            lineHeight: 1,
            marginTop: 2,
            textTransform: 'uppercase',
          }}
        >
          Lory-Stan
          <br />
          <Box
            component="span"
            sx={{
              color: 'rgba(255,255,255,0.3)'
            }}
          >
            TANASI
          </Box>
        </Typography>

        <Stack
          direction="row"
          spacing={{ xs: 3, sm: 6, md: 15 }}
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            justifyContent: 'center',
            marginTop: 8,
            paddingTop: 6,
          }}
        >
          {[
            { val: '3+', label: "Ans d'Exp." },
            { val: '20+', label: 'Projets' },
            { val: '30+', label: 'Technologies' },
          ].map((stat) => (
            <Box key={stat.label}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.8rem', md: '3.5rem' },
                  fontWeight: 800,
                }}
              >
                {stat.val}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#666',
                  fontSize: { xs: '0.6rem', md: '0.75rem' },
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 1,
          opacity: 0.6,
          transform: 'translateX(-50%)',
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0) translateX(-50%)" },
            "40%": { transform: "translateY(-10px) translateX(-50%)" },
            "60%": { transform: "translateY(-5px) translateX(-50%)" },
          },
          animation: "bounce 2s infinite",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: '0.7rem',
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          Découvrir
        </Typography>
        <KeyboardArrowDownIcon />
      </Box>
    </Box >
  );
}