'use client';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Collapse, Container, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const items = [
  { name: 'À propos', href: '#about' },
  { name: 'Expériences', href: '#experience' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();

    const id = href.replace('#', '');
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled || menuOpen ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(10px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: '0 !important' }}>
          <Typography
            variant="h6"
            component="a"
            href="#hero"
            onClick={(event) => scrollToSection(event, '#hero')}
            sx={{
              color: '#fff',
              fontSize: '1.5rem',
              fontWeight: 800,
              textDecoration: 'none',
            }}
          >
            STAN<Box component="span" sx={{ color: '#c8f060' }}>.</Box>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {items.map((item) => (
              <Typography
                key={item.name}
                component="a"
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
                sx={{
                  color: '#aaa',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  '&:hover': { color: '#c8f060' },
                }}
              >
                {item.name}
              </Typography>
            ))}
          </Box>

          <Button
            variant="outlined"
            href="mailto:stantanasi@gmail.com"
            sx={{
              display: { xs: 'none', md: 'block' },
              borderColor: 'rgba(255,255,255,0.2)',
              borderRadius: 0,
              color: '#fff',
              paddingX: 3,
              '&:hover': { borderColor: '#c8f060' },
            }}
          >
            Parlons-en
          </Button>

          <IconButton
            color="inherit"
            aria-label="menu"
            edge="start"
            onClick={() => setMenuOpen((prev) => !prev)}
            sx={{
              display: { md: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <Collapse in={menuOpen} timeout="auto" unmountOnExit>
          <Stack
            sx={{
              display: { md: 'none' },
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              paddingBottom: 3,
              paddingTop: 1,
            }}
          >
            {items.map((item) => (
              <Typography
                key={item.name}
                component="a"
                href={item.href}
                onClick={(e) => {
                  scrollToSection(e, item.href);
                  setMenuOpen(false);
                }}
                sx={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
                  color: '#888',
                  fontSize: '1rem',
                  fontWeight: 600,
                  paddingY: 1.5,
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  '&:hover': { color: '#fff' },
                }}
              >
                {item.name}
              </Typography>
            ))}

            <Button
              fullWidth
              variant="contained"
              href="mailto:stantanasi@gmail.com"
              sx={{
                backgroundColor: '#c8f060',
                borderRadius: 0,
                color: '#000',
                fontSize: '1rem',
                fontWeight: 800,
                marginTop: 2,
                paddingY: 1.5,
                '&:hover': { bgcolor: '#e8e0c0' },
              }}
            >
              Parlons-en
            </Button>
          </Stack>
        </Collapse>
      </Container>
    </AppBar>
  );
}