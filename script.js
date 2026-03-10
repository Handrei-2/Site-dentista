/* =============================================
   TEMPLATE ODONTOLÓGICO
   script.js

   ✏️  EDITE APENAS O BLOCO "CONFIG" ABAIXO.
       O resto do site se atualiza automaticamente.
   ============================================= */

const CONFIG = {

  /* ── DADOS DO DENTISTA ───────────────────── */
  nome:        "Dr. Rafael Mendes",       // Nome completo exibido no site
  titulo:      "Cirurgião-Dentista",      // Título profissional
  cro:         "CRO-SP 12.345",           // Registro profissional

  /* ── CONTATO ─────────────────────────────── */
  // Somente números com DDI+DDD (ex: 5511999999999)
  whatsappNum:     "5588998204022",
  // Telefone formatado para exibição
  telefoneExibido: "(88) 99999-9999",
  // Nome de usuário do Instagram (sem @)
  instagram:       "drrafaelmendes",

  /* ── LOCALIZAÇÃO ─────────────────────────── */
  endereco: "Av. Paulista, 1000 — Sala 501<br>Bela Vista, São Paulo — SP",
  horario:  "Seg–Sex: 8h às 19h<br>Sábado: 8h às 13h",
  // Cole aqui o src do iframe do Google Maps (Maps → Compartilhar → Incorporar mapa)
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976!2d-46.6545!3d-23.5632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr",

  /* ── FOTOS ───────────────────────────────── */
  // Use caminho relativo (ex: "fotos/hero.jpg") ou URL completa
  fotoHero:  "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&q=80",
  fotoSobre: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",

  /* ── SEO ─────────────────────────────────── */
  cidade:   "São Paulo",
  metaDesc: "Clínica odontológica referência em São Paulo. Limpeza dental, clareamento, implantes e ortodontia. Agende pelo WhatsApp.",

  /* ── SEÇÃO "SOBRE" ───────────────────────── */
  sobreTexto1: "Cirurgião-dentista formado pela Universidade de São Paulo (USP) com mais de 10 anos de experiência clínica. Especialista em Implantodontia e Estética Dental, combina conhecimento técnico avançado com atendimento acolhedor e personalizado.",
  sobreTexto2: "Sua missão é transformar sorrisos com segurança, precisão e respeito à saúde bucal de cada paciente, utilizando equipamentos modernos e técnicas atualizadas.",
  // Card flutuante sobre a foto
  sobreCardTitulo: "Especialista em Implantodontia",
  sobreCardSub:    "USP — 2016",

  // Credenciais exibidas em grid (até 4 itens)
  credenciais: [
    { icone: "🪪", titulo: "CRO-SP 12.345",                  sub: "Registro profissional ativo"      },
    { icone: "🎓", titulo: "Graduação — USP",                 sub: "Faculdade de Odontologia, 2013"  },
    { icone: "⭐", titulo: "Especialização — Implantodontia", sub: "CFO, 2016"                        },
    { icone: "✨", titulo: "Pós-graduação — Estética Dental", sub: "ABO-SP, 2018"                     },
  ],

  /* ── ESTATÍSTICAS (Hero) ─────────────────── */
  stats: [
    { numero: 10,   sufixo: "+", label: "Anos de experiência" },
    { numero: 3000, sufixo: "+", label: "Pacientes atendidos"  },
    { numero: 98,   sufixo: "%", label: "Satisfação"           },
  ],

  /* ── DEPOIMENTOS ─────────────────────────── */
  depoimentos: [
    { iniciais: "AM", nome: "Ana Maria S.",   servico: "Clareamento dental", texto: "O profissional transformou meu sorriso completamente. Atendimento impecável, ambiente moderno e resultado incrível no clareamento!" },
    { iniciais: "CP", nome: "Carlos Pereira", servico: "Implante dentário",  texto: "Fiz implante e a experiência foi muito melhor do que eu esperava. Sem dor, suporte total e resultado perfeito."                     },
    { iniciais: "JL", nome: "Juliana Lima",   servico: "Ortodontia",          texto: "Profissional extremamente competente e atencioso. Me indicou o melhor tratamento e acompanhou cada etapa. Super recomendo!"        },
  ],

};

/* ==============================================
   ⛔ NÃO EDITE ABAIXO DESTA LINHA
      (a menos que queira mudar o comportamento)
   ============================================== */

document.addEventListener('DOMContentLoaded', () => {

  const WA_LINK = `https://wa.me/${CONFIG.whatsappNum}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.`;
  const IG_LINK = `https://instagram.com/${CONFIG.instagram}`;

  /* helpers */
  const $       = (s)          => document.querySelector(s);
  const set     = (s, h)       => { const e = $(s); if (e) e.innerHTML = h; };
  const setAttr = (s, a, v)    => { const e = $(s); if (e) e.setAttribute(a, v); };
  const setAll  = (s, a, v)    => document.querySelectorAll(s).forEach(e => e.setAttribute(a, v));

  /* 1 ── SEO / <head> */
  document.title = `${CONFIG.nome} | Dentista em ${CONFIG.cidade}`;
  setAttr('meta[name="description"]',        'content', CONFIG.metaDesc);
  setAttr('meta[name="keywords"]',           'content', `dentista, clínica odontológica, ${CONFIG.cidade}`);
  setAttr('meta[property="og:title"]',       'content', `${CONFIG.nome} | Dentista em ${CONFIG.cidade}`);
  setAttr('meta[property="og:description"]', 'content', CONFIG.metaDesc);

  /* 2 ── Navbar */
  set('#navLogo', CONFIG.nome);
  setAttr('#navWhatsapp', 'href', WA_LINK);

  /* 3 ── Hero */
  set('#heroBadge', `✦ ${CONFIG.cro}`);
  setAttr('#heroImg', 'src', CONFIG.fotoHero);
  setAttr('#heroImg', 'alt', `${CONFIG.nome}, dentista`);
  setAll('.link-whatsapp', 'href', WA_LINK);

  /* Stats */
  const statsContainer = $('#heroStats');
  if (statsContainer) {
    statsContainer.innerHTML = CONFIG.stats.map((s, i) => `
      ${i > 0 ? '<div class="stat-divider"></div>' : ''}
      <div class="stat">
        <span class="stat-number" data-num="${s.numero}" data-sufixo="${s.sufixo}">
          ${s.numero.toLocaleString('pt-BR')}${s.sufixo}
        </span>
        <span class="stat-label">${s.label}</span>
      </div>
    `).join('');
  }

  /* 4 ── Sobre */
  const sobreImgEl = $('#sobreImg');
  if (sobreImgEl) {
    sobreImgEl.innerHTML = `
      <img src="${CONFIG.fotoSobre}" alt="${CONFIG.nome} em consultório" loading="lazy" />
      <div class="sobre-card-float">
        <div class="sobre-card-icon">🎓</div>
        <div>
          <strong>${CONFIG.sobreCardTitulo}</strong>
          <span>${CONFIG.sobreCardSub}</span>
        </div>
      </div>`;
  }
  set('#sobreTexto1', CONFIG.sobreTexto1);
  set('#sobreTexto2', CONFIG.sobreTexto2);

  const credGrid = $('#credenciaisGrid');
  if (credGrid) {
    credGrid.innerHTML = CONFIG.credenciais.map(c => `
      <div class="credential">
        <div class="credential-icon">${c.icone}</div>
        <div><strong>${c.titulo}</strong><span>${c.sub}</span></div>
      </div>`).join('');
  }

  /* 5 ── Depoimentos */
  const depGrid = $('#depoimentosGrid');
  if (depGrid) {
    depGrid.innerHTML = CONFIG.depoimentos.map(d => `
      <div class="depoimento-card reveal">
        <div class="stars">★★★★★</div>
        <p>"${d.texto}"</p>
        <div class="depoimento-author">
          <div class="author-avatar">${d.iniciais}</div>
          <div><strong>${d.nome}</strong><span>${d.servico}</span></div>
        </div>
      </div>`).join('');
  }

  /* 6 ── Contato */
  set('#contatoTelefone',
    `<strong>Telefone / WhatsApp</strong>
     <a href="https://wa.me/${CONFIG.whatsappNum}" target="_blank" rel="noopener">${CONFIG.telefoneExibido}</a>`);
  set('#contatoInstagram',
    `<strong>Instagram</strong>
     <a href="${IG_LINK}" target="_blank" rel="noopener">@${CONFIG.instagram}</a>`);
  set('#contatoEndereco',
    `<strong>Endereço</strong><span>${CONFIG.endereco}</span>`);
  set('#contatoHorario',
    `<strong>Horário de Atendimento</strong><span>${CONFIG.horario}</span>`);
  setAttr('#contatoInstagramBtn', 'href', IG_LINK);
  setAttr('#googleMapsIframe', 'src',   CONFIG.googleMapsEmbed);
  setAttr('#googleMapsIframe', 'title', `Localização — ${CONFIG.nome}`);

  /* 7 ── Footer */
  set('#footerNome', CONFIG.nome);
  set('#footerCro',  `${CONFIG.cro} | ${CONFIG.titulo}`);
  set('#footerCopy', `© ${new Date().getFullYear()} ${CONFIG.nome} Odontologia. Todos os direitos reservados.`);

  /* 8 ── WhatsApp flutuante */
  setAttr('#whatsappFloat', 'href', WA_LINK);

  /* 9 ── Serviços: links dinâmicos */
  document.querySelectorAll('.servico-link[data-servico]').forEach(el => {
    const s = el.getAttribute('data-servico');
    el.href = `https://wa.me/${CONFIG.whatsappNum}?text=Ol%C3%A1!%20Tenho%20interesse%20em%20${encodeURIComponent(s)}.`;
  });

  /* ══════════════════════════════════════════
     COMPORTAMENTOS
     ══════════════════════════════════════════ */

  /* Navbar scroll */
  const navbar = $('#navbar');
  const updateNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  /* Menu mobile */
  const navToggle = $('#navToggle');
  const navLinks  = $('#navLinks');
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active', open);
    navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    document.body.style.overflow = '';
  }));

  /* Smooth scroll */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight - 8, behavior: 'smooth' });
    });
  });

  /* Link ativo navbar */
  const sections     = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const highlightNav = () => {
    let current = '';
    sections.forEach(sec => { if (window.scrollY + navbar.offsetHeight + 80 >= sec.offsetTop) current = sec.id; });
    navLinkItems.forEach(link => {
      const active = link.getAttribute('href') === '#' + current;
      link.style.color      = active ? 'var(--azul)' : '';
      link.style.background = active ? 'var(--azul-claro)' : '';
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

  /* Reveal ao rolar */
  const revealObs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  // pequeno delay para incluir elementos gerados dinamicamente (depoimentos)
  setTimeout(() => document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el)), 60);

  /* WhatsApp float */
  const wf = $('#whatsappFloat');
  let wfOn = false;
  wf.style.cssText = 'transition:opacity .4s ease,transform .4s ease;opacity:0;transform:translateY(20px);pointer-events:none;';
  window.addEventListener('scroll', () => {
    const show = window.scrollY > 300;
    if (show !== wfOn) {
      wfOn = show;
      wf.style.opacity       = show ? '1' : '0';
      wf.style.transform     = show ? 'translateY(0)' : 'translateY(20px)';
      wf.style.pointerEvents = show ? 'all' : 'none';
    }
  }, { passive: true });

  /* Contagem animada */
  const statsSection = $('#heroStats');
  let statsAnimated = false;
  if (statsSection) {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !statsAnimated) {
          statsAnimated = true;
          document.querySelectorAll('.stat-number[data-num]').forEach(el => {
            const target = +el.dataset.num;
            const sufixo = el.dataset.sufixo || '';
            const steps  = Math.ceil(1600 / 16);
            let cur = 0;
            const t = setInterval(() => {
              cur += target / steps;
              if (cur >= target) { el.textContent = target.toLocaleString('pt-BR') + sufixo; clearInterval(t); }
              else { el.textContent = Math.floor(cur).toLocaleString('pt-BR') + sufixo; }
            }, 16);
          });
        }
      });
    }, { threshold: 0.5 }).observe(statsSection);
  }

});
