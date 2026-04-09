'use client';

import { categories, ICategory, skills } from '@/data/skills';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<ICategory['id']>('all');

  const result = activeCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category.includes(activeCategory));

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        backgroundColor: '#000',
        color: '#fff',
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
          Compétences
        </Typography>

        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            flexWrap: 'wrap',
            marginTop: 4,
          }}
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <Button
                key={category.name}
                onClick={() => setActiveCategory(category.id)}
                startIcon={category.icon}
                sx={{
                  border: '1px solid',
                  borderColor: isActive ? '#c8f060' : 'rgba(255,255,255,0.1)',
                  borderRadius: 0,
                  color: isActive ? '#c8f060' : '#555',
                  fontFamily: 'monospace',
                  textTransform: 'none',
                  transition: 'color 0.2s, border-color 0.2s',
                  '&:hover': {
                    borderColor: isActive ? '#c8f060' : 'rgba(255,255,255,0.25)',
                    color: isActive ? '#c8f060' : '#999',
                  },
                }}
              >
                {category.name}
              </Button>
            );
          })}
        </Stack>

        <Grid
          container
          spacing={4}
          sx={{
            marginTop: 6,
          }}
        >
          {result.map((skill) => (
            <Grid
              key={skill.name}
              size={{ xs: 4, md: 12 / 7 }}
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingY: 4,
                paddingX: 1,
                transition: 'background-color 0.2s, border-color 0.2s, transform 0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(200,240,96,0.05)',
                  borderColor: 'rgba(200,240,96,0.2)',
                  transform: 'translateY(-5px)',
                  '& .skill-img': {
                    transform: 'scale(1.2)',
                    filter: 'grayscale(0%)',
                  },
                  '& .skill-name': {
                    color: '#c8f060',
                  },
                },
              }}
            >
              <Box
                className="skill-img"
                component="img"
                src={skill.icon}
                alt={skill.name}
                sx={{
                  width: { xs: 36, md: 48 },
                  height: { xs: 36, md: 48 },
                  filter: 'grayscale(1) brightness(0.8)',
                  objectFit: 'contain',
                  transition: 'all 0.3s ease',
                }}
              />

              <Typography
                className="skill-name"
                sx={{
                  color: '#555',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  fontWeight: 700,
                  maxWidth: '100%',
                  marginTop: 1.5,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {skill.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}