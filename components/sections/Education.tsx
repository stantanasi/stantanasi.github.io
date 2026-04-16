import { education } from '@/data/education';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';

export default function Education() {
  return (
    <Box
      component="section"
      id="education"
      sx={{
        backgroundColor: '#000',
        paddingY: { xs: 8, md: 15 },
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
          Éducation
        </Typography>

        <Stack
          spacing={8}
          direction="column"
          sx={{
            marginTop: 10,
          }}
        >
          {education.map((edu, index) => (
            <Stack
              key={index}
              direction="row"
              spacing={{ xs: 3, md: 6 }}
            >
              <Stack
                direction="column"
                sx={{ alignItems: 'center' }}
              >
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    backgroundColor: '#c8f060',
                    borderRadius: '50%',
                  }}
                />
                <Divider
                  orientation="vertical"
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    flex: 1,
                    marginTop: 1.5,
                  }}
                />
              </Stack>

              <Box sx={{ flex: 1 }}>
                <Stack
                  direction="row"
                  spacing={3}
                  sx={{ alignItems: 'center' }}
                >
                  <Typography sx={{
                    color: '#c8f060',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    lineHeight: 1,
                    textTransform: 'uppercase',
                  }}>
                    {edu.start.getFullYear()} — {edu.end?.getFullYear() ?? 'Présent'}
                  </Typography>
                  <Divider
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      flex: 1,
                    }}
                  />
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    alignItems: 'center',
                    marginTop: 3,
                  }}
                >
                  <Box
                    component="img"
                    src={edu.logo}
                    alt={edu.school}
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: '#0d0d0d',
                      border: '1px solid rgba(255,255,255,0.08)',
                      objectFit: 'contain',
                      padding: '5px',
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: '1.2rem', md: '1.4rem' },
                        fontWeight: 800,
                      }}
                    >
                      {edu.school}
                    </Typography>

                    <Typography
                      sx={{
                        color: '#666',
                        fontFamily: 'monospace',
                        fontSize: '11px',
                        letterSpacing: '0.05em',
                        marginTop: '2px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {edu.location}
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 0.5, md: 1.5 }}
                  sx={{
                    alignItems: { xs: 'flex-start', md: 'center' },
                    marginTop: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color: '#888',
                      fontSize: '15px',
                      fontWeight: 500,
                    }}
                  >
                    {edu.degree}
                  </Typography>

                  <Box
                    component="span"
                    sx={{
                      display: { xs: 'none', md: 'inline' },
                      color: '#c8f060',
                      fontWeight: 900,
                    }}
                  >
                    /
                  </Box>

                  <Typography
                    sx={{
                      color: '#666',
                      fontFamily: 'monospace',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {edu.field}
                  </Typography>
                </Stack>

                <Stack
                  direction="column"
                  spacing={1.25}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    borderLeft: '2px solid rgba(255,255,255,0.1)',
                    marginTop: 2.5,
                    paddingX: 2,
                    paddingY: 1.5,
                  }}
                >
                  {edu.highlights.map((highlight) => (
                    <Stack
                      key={highlight.key}
                      direction="row"
                      spacing={2}
                      sx={{
                        fontFamily: 'monospace',
                        fontSize: { xs: '12px', md: '13px' },
                        lineHeight: 1.6,
                      }}>
                      <Box component="span" sx={{ color: '#c8f060', fontWeight: 'bold' }}>
                        {'>'}
                      </Box>
                      <Box component="span" sx={{ color: '#666', minWidth: 96, textTransform: 'uppercase' }}>
                        {highlight.key}:
                      </Box>
                      <Box component="span" sx={{ color: '#999' }}>
                        {highlight.value}
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}