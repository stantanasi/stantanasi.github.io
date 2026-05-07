'use client';

import { IService, services } from '@/data/services';
import emailjs from '@emailjs/browser';
import { Box, Button, CircularProgress, Container, Grid, Input, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const SHOW_PRICES = false;

export default function Services() {
  const [activeService, setActiveService] = useState<IService>(services[0]);
  const [selections, setSelections] = useState<number[]>([0, 0, 0]);
  const [step, setStep] = useState<'config' | 'contact'>('config');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const categories: { name: string; key: IService['category']; }[] = [
    { name: 'Sites web', key: 'web' },
    { name: 'Applications mobiles', key: 'mobile' },
  ];

  const computePrice = () => {
    let total = activeService.basePrice;
    activeService.questions.forEach((question, index) => {
      const option = question.options[selections[index]];
      total += option.price;
    });
    const isUrgent = activeService.questions.some((question, index) => {
      return question.options[selections[index]]?.urgent;
    });
    if (isUrgent) total = Math.round(total * (1 + 20 / 100));
    return { low: total, high: Math.round(total * (1 + 40 / 100)) };
  };

  const { low, high } = computePrice();

  const send = () => {
    if (sending) return;

    if (!form.name || !form.email) {
      alert('Veuillez remplir au moins votre nom et email.');
      return;
    }

    setSending(true);
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        time: new Date().toLocaleString('fr-FR', {
          day: '2-digit', month: '2-digit', year: 'numeric',
          hour: '2-digit', minute: '2-digit',
        }),
        name: form.name,
        email: form.email,
        message: form.message || "Aucun message supplémentaire",
        service_name: activeService.name,
        service_category: activeService.category,
        quote_details: activeService.questions.map((question, index) => {
          const selectedOption = question.options[selections[index]];
          return `• ${question.label} : ${selectedOption.label} (+${selectedOption.price} €)`;
        }).join('\n'),
        total_estimated: `${low} € — ${high} €`,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
      .then(() => {
        alert('Devis envoyé avec succès !');
      })
      .catch((err) => {
        console.error('Erreur EmailJS:', err);
        alert('Désolé, une erreur est survenue. Réessayez plus tard.');
      })
      .finally(() => setSending(false));
  };

  return (
    <Box
      component="section"
      id="services"
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
          Mes services
        </Typography>
        <Typography
          sx={{
            color: '#666',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            marginTop: 1,
          }}
        >
          {'// Choisissez un service, configurez, obtenez une estimation'}
        </Typography>

        <Grid
          container
          spacing="1px"
          sx={{
            border: '1px solid rgba(255,255,255,0.06)',
            marginTop: 10,
          }}
        >
          <Grid size={{ xs: 12, md: 8 }}>
            {categories.map((category) => (
              <Box key={category.key}>
                <Typography
                  sx={{
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    color: '#444',
                    fontFamily: 'monospace',
                    fontSize: '0.7rem',
                    letterSpacing: 1,
                    paddingY: 1.25,
                    paddingX: 2.5,
                    textTransform: 'uppercase',
                  }}
                >
                  {category.name}
                </Typography>

                {services.filter((service) => service.category === category.key).map((service) => {
                  const isActive = activeService.name === service.name;

                  return (
                    <Stack
                      key={service.name}
                      direction="row"
                      sx={{
                        backgroundColor: isActive ? 'rgba(200,240,96,0.05)' : 'transparent',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                        borderLeft: isActive ? '2px solid #c8f060' : '2px solid transparent',
                        cursor: 'pointer',
                        gap: 2,
                        justifyContent: 'space-between',
                        paddingY: 1.5,
                        paddingX: 2.5,
                        transition: 'background-color 0.2s',
                        '&:hover': {
                          backgroundColor: isActive ? 'rgba(200,240,96,0.05)' : 'rgba(200,240,96,0.02)',
                        },
                      }}
                      onClick={() => {
                        setActiveService(service);
                        setSelections([0, 0, 0]);
                        setStep('config');
                      }}
                    >
                      <Stack direction="column" spacing={1}>
                        <Typography
                          sx={{
                            fontSize: '0.875rem',
                            fontWeight: 800,
                          }}
                        >
                          {service.name}
                        </Typography>

                        <Typography
                          sx={{
                            color: '#555',
                            fontSize: '11px',
                          }}
                        >
                          {service.description}
                        </Typography>
                      </Stack>

                      {SHOW_PRICES && (
                        <Typography
                          sx={{
                            color: '#c8f060',
                            fontFamily: 'monospace',
                            fontSize: '0.7rem',
                            letterSpacing: '0.06em',
                          }}
                        >
                          {service.basePrice} €+
                        </Typography>
                      )}
                    </Stack>
                  );
                })}
              </Box>
            ))}

          </Grid>

          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              bgcolor: 'rgba(255,255,255,0.02)',
              borderLeft: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {step === 'config' && (
              <Stack
                direction="column"
                sx={{
                  padding: 2.5,
                }}
              >
                <Typography
                  sx={{
                    color: '#c8f060',
                    fontFamily: 'monospace',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  Configurez
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    marginTop: 0.8,
                  }}
                >
                  {activeService.name}
                </Typography>

                <Stack direction="column" spacing={2.5} sx={{ marginTop: 2.5 }}>
                  {activeService.questions.map((question, qi) => (
                    <Stack key={qi} spacing={0.5}>
                      <Typography
                        sx={{
                          color: '#444',
                          fontFamily: 'monospace',
                          fontSize: '10px',
                        }}
                      >
                        {question.label}
                      </Typography>

                      {question.options.map((option, oi) => {
                        const isSelected = selections[qi] === oi;

                        return (
                          <Stack
                            key={oi}
                            direction="row"
                            sx={{
                              alignItems: 'center',
                              border: '1px solid',
                              borderColor: isSelected ? 'rgba(255,255,255,0.15)' : '#1c1c1c',
                              cursor: 'pointer',
                              justifyContent: 'space-between',
                              paddingY: 1,
                              paddingX: 1.25,
                              transition: 'border-color 0.2s',
                              '&:hover': {
                                borderColor: isSelected ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)',
                                '& .option-label': { color: isSelected ? '#fff' : '#888', },
                              },
                            }}
                            onClick={() => setSelections((prev) => {
                              const next = [...prev];
                              next[qi] = oi;
                              return next;
                            })}
                          >
                            <Typography
                              className="option-label"
                              sx={{
                                color: isSelected ? '#fff' : '#555',
                                fontFamily: 'monospace',
                                fontSize: '11px',
                                transition: 'color 0.2s',
                              }}
                            >
                              {option.label}
                            </Typography>

                            {SHOW_PRICES && (
                              <Typography
                                sx={{
                                  color: isSelected ? '#c8f060' : '#333',
                                  fontSize: '10px',
                                }}
                              >
                                {option.urgent
                                  ? '+20%'
                                  : option.price === 0
                                    ? 'inclus'
                                    : `+${option.price} €`}
                              </Typography>
                            )}
                          </Stack>
                        );
                      })}
                    </Stack>
                  ))}
                </Stack>

                <Box sx={{ marginTop: 3 }}>
                  {SHOW_PRICES && (
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: 'monospace',
                          fontSize: '0.6rem',
                          color: '#444',
                          letterSpacing: '0.08em',
                        }}
                      >
                        Estimation indicative
                      </Typography>
                      <Typography
                        sx={{
                          color: '#c8f060',
                          fontSize: '1.4rem',
                          fontWeight: 800,
                          marginTop: 0.6,
                        }}
                      >
                        {low} € — {high} €
                      </Typography>
                    </Box>
                  )}

                  <Stack direction="row" spacing={1} sx={{ marginTop: 1.5 }}>
                    <Button
                      variant="contained"
                      onClick={() => setStep('contact')}
                      sx={{
                        borderRadius: 0,
                        flex: 1,
                        fontFamily: 'monospace',
                        fontSize: '11px',
                        textTransform: 'none',
                      }}
                    >
                      Demander un devis
                    </Button>

                    <Button
                      variant="outlined"
                      onClick={() => setStep('contact')}
                      sx={{
                        borderColor: '#1c1c1c',
                        borderRadius: 0,
                        color: '#555',
                        fontFamily: 'monospace',
                        fontSize: '11px',
                        textTransform: 'none',
                        '&:hover': {
                          borderColor: '#c8f060',
                          color: '#c8f060',
                        },
                      }}
                    >
                      Contact
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            )}

            {step === 'contact' && (
              <Stack
                direction="column"
                spacing={2}
                sx={{
                  padding: 2.5,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: '#c8f060',
                      fontFamily: 'monospace',
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Configurez
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      marginTop: 0.8,
                    }}
                  >
                    {activeService.name}
                  </Typography>
                  {SHOW_PRICES && (
                    <Typography
                      sx={{
                        color: '#444',
                        fontFamily: 'monospace',
                        fontSize: '0.7rem',
                        marginTop: 0.8,
                      }}
                    >
                      Estimation : {low} € — {high} €
                    </Typography>
                  )}
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'monospace',
                      fontSize: '10px',
                      color: '#444',
                      letterSpacing: '0.04em',
                      mb: '5px',
                    }}
                  >
                    Votre nom
                  </Typography>
                  <Input
                    fullWidth
                    disableUnderline
                    type="text"
                    placeholder="Prénom NOM"
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))}
                    inputProps={{
                      style: {
                        fontFamily: 'monospace',
                        fontSize: '11px',
                        padding: 0,
                      },
                    }}
                    sx={{
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #1c1c1c',
                      padding: 1,
                      transition: 'all 0.2s ease-in-out',
                      '& ::placeholder': {
                        color: '#444',
                        opacity: 1,
                      },
                      '&:hover': {
                        borderColor: '#2c2c2c',
                      },
                      '&.Mui-focused': {
                        borderColor: '#c8f060',
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'monospace',
                      fontSize: '10px',
                      color: '#444',
                      letterSpacing: '0.04em',
                      mb: '5px',
                    }}
                  >
                    Votre email
                  </Typography>
                  <Input
                    fullWidth
                    disableUnderline
                    type="email"
                    placeholder="email@exemple.com"
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))}
                    inputProps={{
                      style: {
                        fontFamily: 'monospace',
                        fontSize: '11px',
                        padding: 0,
                      },
                    }}
                    sx={{
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #1c1c1c',
                      padding: 1,
                      transition: 'all 0.2s ease-in-out',
                      '& ::placeholder': {
                        color: '#444',
                        opacity: 1,
                      },
                      '&:hover': {
                        borderColor: '#2c2c2c',
                      },
                      '&.Mui-focused': {
                        borderColor: '#c8f060',
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'monospace',
                      fontSize: '10px',
                      color: '#444',
                      letterSpacing: '0.04em',
                      mb: '5px',
                    }}
                  >
                    Votre projet
                  </Typography>
                  <Input
                    fullWidth
                    disableUnderline
                    multiline
                    rows={4}
                    type="text"
                    placeholder="Décrivez votre idée en quelques mots…"
                    value={form.message}
                    onChange={(event) => setForm((prev) => ({
                      ...prev,
                      message: event.target.value,
                    }))}
                    inputProps={{
                      style: {
                        fontFamily: 'monospace',
                        fontSize: '11px',
                        padding: 0,
                      },
                    }}
                    sx={{
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #1c1c1c',
                      padding: 1,
                      transition: 'all 0.2s ease-in-out',
                      '& ::placeholder': {
                        color: '#444',
                        opacity: 1,
                      },
                      '&:hover': {
                        borderColor: '#2c2c2c',
                      },
                      '&.Mui-focused': {
                        borderColor: '#c8f060',
                      },
                    }}
                  />
                </Box>

                <Stack direction="row" spacing={1} sx={{ marginTop: 1.5 }}>
                  <Button
                    variant="outlined"
                    onClick={() => setStep('config')}
                    sx={{
                      borderColor: '#1c1c1c',
                      borderRadius: 0,
                      color: '#555',
                      fontFamily: 'monospace',
                      fontSize: '11px',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#c8f060',
                        color: '#c8f060',
                      },
                    }}
                  >
                    ← Retour
                  </Button>

                  <Button
                    variant="contained"
                    onClick={() => send()}
                    sx={{
                      borderRadius: 0,
                      flex: 1,
                      fontFamily: 'monospace',
                      fontSize: '11px',
                      gap: 2,
                      textTransform: 'none',
                    }}
                  >
                    Envoyer

                    <CircularProgress
                      aria-label="Sending…"
                      size={16}
                      style={{
                        display: sending ? 'block' : 'none',
                        color: '#000'
                      }}
                    />
                  </Button>
                </Stack>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}