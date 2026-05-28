'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

type TranslationDict = {
  nav: {
    about: string;
    skills: string;
    painting: string;
    branding: string;
    photography: string;
    advertising: string;
    contact: string;
  };
  hero: {
    artistName: string;
    role: string;
    tagline: string;
    secondaryText: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    text: string;
  };
  skills: {
    title: string;
    subtitle: string;
    traditional: string;
    traditionalDesc: string;
    traditionalTools: string;
    branding: string;
    brandingDesc: string;
    brandingTools: string;
    multimedia: string;
    multimediaDesc: string;
    multimediaTools: string;
    toolbox: string;
    toolboxDesc: string;
    toolboxTools: string;
  };
  painting: {
    title: string;
    subtitle: string;
    description: string;
    work1Title: string;
    work1Medium: string;
    work2Title: string;
    work2Medium: string;
    work3Title: string;
    work3Medium: string;
    work4Title: string;
    work4Medium: string;
    work5Title: string;
    work5Medium: string;
    work6Title: string;
    work6Medium: string;
    work7Title: string;
    work7Medium: string;
    viewFullscreen: string;
  };
  branding: {
    title: string;
    subtitle: string;
    caseStudy: string;
    viewCaseStudy: string;
    opusTitle: string;
    opusTagline: string;
    opusDesc: string;
    opusSpecs: string;
    weCafeTitle: string;
    weCafeTagline: string;
    weCafeDesc: string;
    weCafeSpecs: string;
  };
  photography: {
    title: string;
    subtitle: string;
    viewGallery: string;
    closeGallery: string;
  };
  advertising: {
    title: string;
    subtitle: string;
    mainTitle: string;
    mainMedium: string;
    side1Title: string;
    side1Medium: string;
    side2Title: string;
    side2Medium: string;
  };
  contact: {
    title: string;
    tagline: string;
    email: string;
    whatsapp: string;
    copyEmail: string;
    copied: string;
  };
  footer: {
    text: string;
    rights: string;
  };
};

const translations: Record<Language, TranslationDict> = {
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Disciplinas',
      painting: 'Pintura',
      branding: 'Branding',
      photography: 'Fotografía',
      advertising: 'Publicidad',
      contact: 'Contacto',
    },
    hero: {
      artistName: 'Laura Camila Guerra Moreno',
      role: 'Visual Artist & Creative Designer',
      tagline: '“Creando experiencias visuales a través del arte, el diseño y la identidad visual.”',
      secondaryText: '“Artista visual especializada en pintura, branding y diseño creativo, combinando sensibilidad artística con soluciones visuales modernas y funcionales.”',
      ctaPrimary: 'Explorar Obra',
      ctaSecondary: 'Descargar CV',
    },
    about: {
      title: 'Sobre mí',
      text: 'Soy artista visual y licenciada en Artes Visuales, con experiencia en pintura, branding, fotografía y diseño publicitario. Mi trabajo combina una sensibilidad artística clásica con un enfoque contemporáneo orientado a la identidad visual y la comunicación creativa.\n\nMe apasiona construir piezas visuales capaces de transmitir personalidad, emoción y propósito, adaptándose a las necesidades de cada proyecto y cada contexto.',
    },
    skills: {
      title: 'Disciplinas Creativas',
      subtitle: 'Áreas de enfoque artístico y conceptual',
      traditional: 'Arte Tradicional',
      traditionalDesc: 'Exploración de la materia sobre lienzo a través del óleo, acrílicos y técnicas mixtas, centrada en la textura, el gesto y la expresión abstracta.',
      traditionalTools: 'Óleo · Acrílico · Carboncillo · Canvas de Gran Formato · Espátulas',
      branding: 'Branding & Dirección de Arte',
      brandingDesc: 'Creación de marcas con propósito y coherencia visual. Diseño de sistemas de identidad, logotipos, tipografía y dirección estética general.',
      brandingTools: 'Illustrator · Photoshop · InDesign · Figma · Manuales de Marca',
      multimedia: 'Multimedia & Fotografía',
      multimediaDesc: 'Intersección de la captura visual and el entorno digital, integrando fotografía de alta sensibilidad, video y composiciones experimentales.',
      multimediaTools: 'Lightroom · Premiere Pro · Grabado Digital · Cámaras Analógicas',
      toolbox: 'Herramientas & Medios',
      toolboxDesc: 'Procesos técnicos que conectan la visión manual con el flujo digital, uniendo técnicas tradicionales con software contemporáneo.',
      toolboxTools: 'DSLR Cameras · Pinceles · Escáner Gran Formato · Wacom Tablet · Analog Film',
    },
    painting: {
      title: 'Obra Pictórica',
      subtitle: 'La densidad de la materia sobre el lienzo',
      description: 'Mi práctica pictórica gira en torno al óleo. Trabajo a través del color y raspados sucesivos para construir paisajes de textura compleja que reflejan estados emocionales y conceptuales. Es un diálogo introspectivo expresado en capas cromáticas.',
      work1Title: 'Paro nacional',
      work1Medium: 'Óleo & técnica mixta sobre lienzo — 2021',
      work2Title: 'Pearl',
      work2Medium: 'Óleo & técnica mixta sobre lienzo — 2023',
      work3Title: 'Apropiacionismo: Marco Mazzoni',
      work3Medium: 'Óleo & técnica mixta sobre lienzo — 2023',
      work4Title: 'Mujer salvaje',
      work4Medium: 'Óleo & técnica mixta sobre lienzo — 2023',
      work5Title: 'Noa',
      work5Medium: 'Óleo & técnica mixta sobre panel — 2024',
      work6Title: 'Mia 01',
      work6Medium: 'Óleo & técnica mixta sobre lienzo — 2025',
      work7Title: 'Mia 02',
      work7Medium: 'Óleo & técnica mixta sobre lienzo — 2026',
      viewFullscreen: 'Apreciar obra completa',
    },
    branding: {
      title: 'Branding & Dirección de Arte',
      subtitle: 'Casos de estudio visuales e identidad de marca',
      caseStudy: 'Caso de Estudio',
      viewCaseStudy: 'Explorar Caso de Marca',
      opusTitle: 'Cuarteto Opus — Identidad Visual',
      opusTagline: 'Dirección de arte e identidad para un cuarteto de cuerdas contemporáneo, inspirada en la vibración acústica y el rigor clásico.',
      opusDesc: 'El proyecto se estructuró a partir de formas geométricas y contrastes severos que representan la tensión de las cuerdas y la armonía sonora. La identidad abarca el logotipo principal, sistemas de papelería, indumentaria, y portadas tipográficas de alta gama.',
      opusSpecs: 'Identidad de Marca · Dirección de Arte · Papelería & Editorial · 2025',
      weCafeTitle: 'We Café — Espacio & Comunidad',
      weCafeTagline: 'Identidad visual para un café-bar especial enfocado en la música y la experiencia de transición entre el día y la noche.',
      weCafeDesc: 'Creación de una paleta cromática cálida e identidades gráficas que evocan confort y lifestyle urbano. El diseño incluye el sistema tipográfico, empaques ecológicos y adaptaciones del menú nocturno.',
      weCafeSpecs: 'Branding · Mockup de Espacio · Diseño de Packaging · 2026',
    },
    photography: {
      title: 'Fotografía',
      subtitle: 'Encuadres de luz y tiempo.',
      viewGallery: 'Ver galería completa',
      closeGallery: 'Cerrar Galería',
    },
    advertising: {
      title: 'Diseño Publicitario',
      subtitle: 'Campañas visuales orientadas a medios impresos, editoriales y digitales de alto impacto.',
      mainTitle: 'Poster promocional evento musical',
      mainMedium: '2025',
      side1Title: 'Cover de exposición artística',
      side1Medium: '2025',
      side2Title: 'Campaña de difusión evento pro-fondos',
      side2Medium: '2023',
    },
    contact: {
      title: 'Contacto',
      tagline: '“Disponible para proyectos creativos, colaboraciones y oportunidades profesionales.”',
      email: 'Correo Electrónico',
      whatsapp: 'WhatsApp Directo',
      copyEmail: 'Copiar Correo',
      copied: '¡Copiado!',
    },
    footer: {
      text: 'Laura Camila Guerra Moreno — Portafolio Profesional',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Disciplines',
      painting: 'Painting',
      branding: 'Branding',
      photography: 'Photography',
      advertising: 'Advertising',
      contact: 'Contact',
    },
    hero: {
      artistName: 'Laura Camila Guerra Moreno',
      role: 'Visual Artist & Creative Designer',
      tagline: '“Creating visual experiences through art, design, and visual identity.”',
      secondaryText: '“Visual artist specializing in painting, branding, and creative design, combining classic artistic sensitivity with modern and functional visual solutions.”',
      ctaPrimary: 'Explore Work',
      ctaSecondary: 'Download CV',
    },
    about: {
      title: 'About Me',
      text: 'I am a visual artist and a graduate in Visual Arts, with experience in painting, branding, photography, and advertising design. My work combines a classical artistic sensitivity with a contemporary approach oriented towards visual identity and creative communication.\n\nI am passionate about building visual pieces capable of transmitting personality, emotion, and purpose, adapting to the needs of each project and context.',
    },
    skills: {
      title: 'Creative Disciplines',
      subtitle: 'Artistic and conceptual areas of focus',
      traditional: 'Traditional Art',
      traditionalDesc: 'Material exploration on canvas through oils, acrylics, and mixed media, focusing on texture, gesture, and abstract expression.',
      traditionalTools: 'Oil paint · Acrylics · Charcoal · Large format canvas · Palette knives',
      branding: 'Branding & Art Direction',
      brandingDesc: 'Creation of brands with purpose and visual coherence. Design of identity systems, logos, typography, and general aesthetic direction.',
      brandingTools: 'Illustrator · Photoshop · InDesign · Figma · Brand guidelines',
      multimedia: 'Multimedia & Photography',
      multimediaDesc: 'Intersection of visual capture and the digital environment, integrating high-sensitivity photography, video, and experimental compositions.',
      multimediaTools: 'Lightroom · Premiere Pro · Digital print · Analog cameras',
      toolbox: 'Herramientas & Medios',
      toolboxDesc: 'Technical processes bridging manual vision with digital workflow, uniting traditional tools with contemporary software.',
      toolboxTools: 'DSLR Cameras · Artist brushes · Large format scanner · Wacom Tablet · Analog Film',
    },
    painting: {
      title: 'Painting Work',
      subtitle: 'The density of matter upon the canvas',
      description: 'My painting practice centers on oils. I work through color and successive scrapings to build complex textured landscapes that reflect emotional and conceptual states. It is an introspective dialogue expressed in chromatic layers.',
      work1Title: 'Paro nacional',
      work1Medium: 'Oil & mixed media on canvas — 2021',
      work2Title: 'Pearl',
      work2Medium: 'Oil & mixed media on canvas — 2023',
      work3Title: 'Apropiacionismo: Marco Mazzoni',
      work3Medium: 'Oil & mixed media on canvas — 2023',
      work4Title: 'Mujer salvaje',
      work4Medium: 'Oil & mixed media on canvas — 2023',
      work5Title: 'Noa',
      work5Medium: 'Oil & mixed media on panel — 2024',
      work6Title: 'Mia 01',
      work6Medium: 'Oil & mixed media on canvas — 2025',
      work7Title: 'Mia 02',
      work7Medium: 'Oil & mixed media on canvas — 2026',
      viewFullscreen: 'Appreciate full artwork',
    },
    branding: {
      title: 'Branding & Art Direction',
      subtitle: 'Visual case studies and brand identity',
      caseStudy: 'Case Study',
      viewCaseStudy: 'Explore Brand Case Study',
      opusTitle: 'Opus Quartet — Visual Identity',
      opusTagline: 'Art direction and identity for a contemporary string quartet, inspired by acoustic vibration and classical rigor.',
      opusDesc: 'The project was structured from geometric shapes and severe contrasts representing string tension and sonic harmony. The identity spans the main logo, stationery systems, apparel, and high-end typographic covers.',
      opusSpecs: 'Brand Identity · Art Direction · Stationery & Editorial · 2025',
      weCafeTitle: 'We Café — Space & Community',
      weCafeTagline: 'Visual identity for a specialty coffee-bar focused on music and the transitional experience between day and night.',
      weCafeDesc: 'Creation of a warm color palette and graphic identities evoking comfort and urban lifestyle. The design includes the typographic system, eco-friendly packaging, and night menu adaptations.',
      weCafeSpecs: 'Branding · Space Mockup · Packaging Design · 2026',
    },
    photography: {
      title: 'Photography',
      subtitle: 'Frames of light and time.',
      viewGallery: 'View full gallery',
      closeGallery: 'Close Gallery',
    },
    advertising: {
      title: 'Advertising Design',
      subtitle: 'Visual campaigns oriented towards high-impact print, editorial, and digital media.',
      mainTitle: 'Promotional poster for musical event',
      mainMedium: '2025',
      side1Title: 'Art exhibition cover',
      side1Medium: '2025',
      side2Title: 'Diffusion campaign for fundraiser event',
      side2Medium: '2023',
    },
    contact: {
      title: 'Contact',
      tagline: '“Available for creative projects, collaborations, and professional opportunities.”',
      email: 'Email Address',
      whatsapp: 'Direct WhatsApp',
      copyEmail: 'Copy Email',
      copied: 'Copied!',
    },
    footer: {
      text: 'Laura Camila Guerra Moreno — Professional Portfolio',
      rights: 'All rights reserved.',
    },
  },
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: TranslationDict;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const stored = localStorage.getItem('artist_portfolio_lang') as Language;
    if (stored === 'es' || stored === 'en') {
      setLanguage(stored);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = language === 'es' ? 'en' : 'es';
    setLanguage(nextLang);
    localStorage.setItem('artist_portfolio_lang', nextLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
