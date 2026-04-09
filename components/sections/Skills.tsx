'use client';

import { categories, ICategory, skills } from '@/data/skills';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
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
            marginBottom: 6,
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

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, md: 4 },
            gridTemplateColumns: {
              xs: 'repeat(3, 1fr)',
              sm: 'repeat(5, 1fr)',
              md: 'repeat(7, 1fr)',
            },
          }}
        >
          {result.map((skill) => (
            <Stack
              key={skill.name}
              spacing={1.5}
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.06)',
                justifyContent: 'center',
                paddingY: 4,
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
                  fontSize: '13px',
                  fontWeight: 700,
                  fontFamily: 'monospace',
                  letterSpacing: 0.5,
                  maxWidth: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {skill.name}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Container>
    </Box>
  );
}