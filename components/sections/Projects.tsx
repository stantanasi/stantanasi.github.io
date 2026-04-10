import { projects } from '@/data/projects';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

export default function Projects() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        backgroundColor: '#000',
        paddingY: { xs: 8, md: 15 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 800,
            textTransform: 'uppercase',
          }}
        >
          Projets
        </Typography>


        <Grid container spacing={4} sx={{ marginTop: 10 }}>
          {projects.map((project, index) => (
            <Grid
              key={project.id}
              size={{
                xs: 12,
                md: (index % 2 === Math.floor(index / 2) % 2) ? 7 : 5,
              }}
            >
              <Box
                component="a"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  height: { xs: '300px', md: '400px' },
                  border: '1px solid rgba(255,255,255,0.2)',
                  cursor: 'pointer',
                  display: 'block',
                  overflow: 'hidden',
                  position: 'relative',
                  textDecoration: 'none',
                  '&:hover': {
                    borderColor: '#c8f060',
                    '& .overlay': { opacity: 1 },
                    '& .bar': { opacity: 0 },
                    '& .proj-img': { filter: 'grayscale(0) brightness(0.5)', transform: 'scale(1.08)' },
                  },
                }}
              >
                <Box
                  className="proj-img"
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    height: '100%',
                    width: '100%',
                    filter: 'grayscale(0.5) brightness(0.6)',
                    objectFit: 'cover',
                    transition: 'all 0.3s',
                  }}
                />

                <Stack
                  className="bar"
                  direction="row"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                    justifyContent: 'space-between',
                    padding: 3,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography sx={{ color: '#fff', fontSize: '1.2rem', fontWeight: 800 }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: '#c8f060', fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 700 }}>
                    {project.stack[0]}
                  </Typography>
                </Stack>

                <Stack
                  className="overlay"
                  spacing={2}
                  sx={{
                    position: 'absolute',
                    backgroundColor: 'rgba(0,0,0,0.85)',
                    inset: 0,
                    justifyContent: 'center',
                    opacity: 0,
                    padding: 4,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#fff', fontWeight: 800 }}>
                    {project.title}
                  </Typography>

                  <Typography sx={{ color: '#aaa', fontSize: '0.9rem' }}>
                    {project.description}
                  </Typography>

                  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                    {project.stack.map((tech) => (
                      <Typography
                        key={tech}
                        sx={{
                          color: '#eee',
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          fontSize: '0.7rem',
                          fontFamily: 'monospace',
                          paddingY: 0.5,
                          paddingX: 1.5,
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Stack>

                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#c8f060',
                      fontFamily: 'monospace',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      gap: 1,
                      marginTop: 2,
                    }}
                  >
                    Voir le projet <Box component="span" sx={{ fontSize: '1.2rem' }}>→</Box>
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography
          sx={{
            color: '#444',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            marginTop: 6,
            textAlign: 'center',
          }}
        >
          {`// +15 autres projets d'envergure réalisés notamment pour TF1 et France TV`}
        </Typography>

        <Typography
          sx={{
            color: '#222',
            fontFamily: 'monospace',
            fontSize: '0.75rem',
            marginTop: 1,
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          Broadcast • Cloud Infrastructure • OTT Solutions • Web3
        </Typography>
      </Container>
    </Box>
  );
}