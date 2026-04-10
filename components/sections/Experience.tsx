'use client';

import { experiences } from '@/data/experiences';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Chip, Collapse, Container, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export default function Experience() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean; }>({});

  return (
    <Box
      component="section"
      id="experience"
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
          Expériences
        </Typography>

        <Stack spacing={8} sx={{ marginTop: 10 }}>
          {experiences.map((experience, index) => {
            const isExpanded = !experience.collapsible || expanded[index];

            return (
              <Box
                key={index}
                onClick={() => {
                  if (!experience.collapsible) return;
                  setExpanded((prev) => ({
                    ...prev,
                    [index]: !prev[index],
                  }));
                }}
                sx={{
                  cursor: experience.collapsible ? 'pointer' : 'default',
                }}
              >
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#555',
                      fontWeight: 700,
                      letterSpacing: 1.5,
                      textTransform: 'uppercase'
                    }}
                  >
                    {experience.start.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })} — {experience.end?.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' }) ?? 'Présent'}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#333', fontWeight: 900 }}>•</Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#444',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}
                  >
                    {experience.location}
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    alignItems: 'center',
                    marginTop: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={experience.logo}
                    alt={experience.company}
                    sx={{
                      width: 42,
                      height: 32,
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      objectFit: 'contain',
                      padding: 0.5,
                    }}
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      flex: 1,
                      fontWeight: 800,
                    }}
                  >
                    {experience.company}
                  </Typography>

                  {experience.collapsible && (
                    <ExpandMoreIcon
                      sx={{
                        color: '#666',
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'all 0.3s',
                      }}
                    />
                  )}
                </Stack>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#c8f060',
                    fontWeight: 700,
                    letterSpacing: 1,
                    marginTop: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  {experience.role}
                </Typography>

                <Collapse
                  in={isExpanded}
                  timeout="auto"
                >
                  <Box sx={{ marginTop: 4 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#aaa',
                        marginBottom: 3,
                      }}
                    >
                      {experience.summary}
                    </Typography>

                    <Stack spacing={1.5}>
                      {experience.highlights.map((item) => (
                        <Stack
                          key={item}
                          direction="row"
                          spacing={2}
                          sx={{ alignItems: 'center' }}
                        >
                          <Typography sx={{ color: '#c8f060' }}>•</Typography>
                          <Typography variant="body2" sx={{ color: '#eee' }}>
                            {item}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        flexWrap: 'wrap',
                        marginTop: 4,
                      }}
                    >
                      {experience.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            backgroundColor: 'transparent',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: 0,
                            color: '#888',
                            fontFamily: 'monospace',
                            fontSize: '0.85rem',
                            transition: 'all 0.3s',
                            '&:hover': {
                              borderColor: '#c8f060',
                              color: '#c8f060',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Collapse>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}