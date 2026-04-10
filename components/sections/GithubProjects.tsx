'use client';

import Github, { GithubRepository } from '@/utils/github';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Button, Container, Grid, Skeleton, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const PROJECTS_COUNT = 6;

export default function GithubProjects() {
  const [repositories, setRepositories] = useState<GithubRepository[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prepare = async () => {
      const repositories = await Github.repos.fetch('stantanasi', {
        sort: 'pushed',
        direction: 'desc',
        per_page: 100,
      }).then((repos) => repos.sort((a, b) => b.stargazers_count - a.stargazers_count));

      setRepositories(repositories);
    };

    prepare()
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Box
      component="section"
      id="github-projects"
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
          Mon GitHub
        </Typography>
        <Typography
          sx={{
            color: '#666',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            marginTop: 1,
          }}
        >
          {isLoading ? (
            <Skeleton
              variant="rectangular"
              width={160}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: 0,
              }}
            />
          ) : (
            `// ${repositories.length} repositories`
          )}
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            marginTop: { xs: 6, md: 10 }
          }}
        >
          {isLoading ? Array.from(new Array(PROJECTS_COUNT)).map((_, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Skeleton
                variant="rectangular"
                height={200}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: 0,
                }}
              />
            </Grid>
          )) : repositories.slice(0, PROJECTS_COUNT).map((repo) => (
            <Grid key={repo.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Stack
                component="a"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  height: '100%',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: 3,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#c8f060',
                    transform: 'translateY(-4px)',
                    '& .repo-name': { color: '#c8f060' },
                  },
                }}
              >
                <Typography
                  className="repo-name"
                  variant="h6"
                  sx={{
                    color: '#eee',
                    fontFamily: 'monospace',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    transition: 'all 0.3s',
                  }}
                >
                  {repo.name}
                </Typography>

                {repo.description ? (
                  <Typography
                    sx={{
                      color: '#888',
                      flex: 1,
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                      marginTop: 1,
                    }}
                  >
                    {repo.description}
                  </Typography>
                ) : null}

                <Stack
                  direction="row"
                  spacing={3}
                  sx={{
                    alignItems: 'center',
                    marginTop: 3,
                  }}
                >
                  {repo.language ? (
                    <Typography
                      sx={{
                        color: '#c8f060',
                        fontFamily: 'monospace',
                        fontSize: '10px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                      }}
                    >
                      {repo.language}
                    </Typography>
                  ) : null}

                  <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                    <StarBorderIcon sx={{ color: '#666', fontSize: 14 }} />
                    <Typography sx={{ color: '#666', fontFamily: 'monospace', fontSize: 12 }}>
                      {repo.stargazers_count}
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                    <CallSplitIcon sx={{ color: '#666', fontSize: 14 }} />
                    <Typography sx={{ color: '#666', fontFamily: 'monospace', fontSize: 12 }}>
                      {repo.forks_count}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Button
          variant="outlined"
          href="https://github.com/stantanasi"
          target="_blank"
          startIcon={<GitHubIcon />}
          sx={{
            width: 'fit-content',
            display: 'flex',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 0,
            color: '#fff',
            fontSize: '0.75rem',
            marginTop: 6,
            marginX: 'auto',
            paddingX: 4,
            paddingY: 1.5,
            textTransform: 'uppercase',
            transition: 'all 0.3s',
            '&:hover': {
              borderColor: '#c8f060',
              color: '#c8f060',
            },
          }}
        >
          Voir plus sur GitHub
        </Button>
      </Container>
    </Box>
  );
}