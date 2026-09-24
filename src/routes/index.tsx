import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  Building2,
  CheckCircle2,
  FileCheck2,
  HandCoins,
  Instagram,
  KeyRound,
  MessageCircle,
  Phone,
  PlayCircle,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Star,
  SearchCheck,
  TrendingUp,
  UserRound,
} from "lucide-react";

import logoAsset from "@/assets/grupo-invest-logo.jpg";
import gestoresAsset from "@/assets/gestores.png";
import heroImovel from "@/assets/hero-imovel.jpeg";
import { SimuladorConsorcio } from "@/components/SimuladorConsorcio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grupo Invest | Crédito Imobiliário e Consórcio" },
      {
        name: "description",
        content:
          "Imóveis na planta, consórcios e investimentos em Belém. Simule seu plano e fale conosco.",
      },
      { property: "og:title", content: "Grupo Invest | Crédito Imobiliário e Consórcio" },
      {
        property: "og:description",
        content:
          "Realize o sonho da casa própria sem juros, com planejamento e acompanhamento de ponta a ponta.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5500000000000";
const INSTAGRAM = "https://www.instagram.com/g.r.u.p.o_invest/";
const INSTAGRAM_POST = "https://www.instagram.com/p/DdKECuYJSq3/";

const instagramVideos = [
  {
    id: "estrategia",
    url: "https://www.instagram.com/p/DdE4sfFpGGN/",
    eyebrow: "Estratégia",
    title: "Decisões melhores começam com informação",
    description:
      "Conteúdo direto para entender possibilidades, organizar prioridades e escolher o próximo passo com mais segurança.",
  },
  {
    id: "patrimonio",
    url: "https://www.instagram.com/p/DdE46LepKKg/",
    eyebrow: "Patrimônio",
    title: "Planejamento que sai do papel",
    description:
      "Uma visão prática sobre crédito, consórcio e construção de patrimônio para quem quer avançar com clareza.",
  },
];

function InstagramVideo({
  url = INSTAGRAM_POST,
  title = "Vídeo do Grupo Invest no Instagram",
  compact = false,
}: {
  url?: string;
  title?: string;
  compact?: boolean;
}) {
  return (
    <div className="mx-auto w-full max-w-[390px]">
      <div className="relative rounded-[2.25rem] bg-navy-deep p-2 shadow-soft ring-1 ring-navy/10">
        <div className="pointer-events-none absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-primary-foreground/25" />
        <div
          className={`relative overflow-hidden rounded-[1.8rem] bg-white ${compact ? "h-[560px] sm:h-[610px]" : "h-[620px] sm:h-[680px]"}`}
        >
          <iframe
            src={`${url}embed/captioned/`}
            title={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="mx-auto mt-4 flex w-fit items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-sky"
      >
        Assistir no Instagram <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}

function InstagramShowcase() {
  const [activeId, setActiveId] = useState(instagramVideos[0].id);
  const activeVideo = instagramVideos.find((video) => video.id === activeId) ?? instagramVideos[0];

  return (
    <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <InstagramVideo url={activeVideo.url} title={activeVideo.title} compact />
      <div>
        <div className="inline-flex rounded-full border border-border bg-background/70 p-1 shadow-card">
          {instagramVideos.map((video, index) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActiveId(video.id)}
              aria-pressed={activeId === video.id}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${activeId === video.id ? "bg-navy text-primary-foreground" : "text-muted-foreground hover:text-navy"}`}
            >
              Vídeo {index + 1}
            </button>
          ))}
        </div>
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-sky">
          {activeVideo.eyebrow}
        </p>
        <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          {activeVideo.title}
        </h3>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          {activeVideo.description}
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            ["+R$ 90 mi", "em créditos comercializados"],
            ["Belém • PA", "atendimento próximo e regional"],
            ["Ponta a ponta", "orientação em cada etapa"],
          ].map(([value, label]) => (
            <div key={label} className="glass-card rounded-2xl p-4">
              <p className="font-extrabold text-navy">{value}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={activeVideo.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <PlayCircle className="h-4 w-4" /> Assistir no Instagram
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold text-navy transition-colors hover:border-sky hover:text-sky"
          >
            <Instagram className="h-4 w-4" /> Ver todos os conteúdos
          </a>
        </div>
      </div>
    </div>
  );
}
const beneficios = [
  {
    icon: HandCoins,
    titulo: "Sem juros",
    texto:
      "Você paga apenas taxa de administração — nada de juros bancários corroendo seu patrimônio.",
  },
  {
    icon: TrendingUp,
    titulo: "Parcela que cabe",
    texto: "Planos flexíveis a partir de valores acessíveis, ajustados ao seu orçamento real.",
  },
  {
    icon: KeyRound,
    titulo: "Poder de compra à vista",
    texto: "Na contemplação você negocia como comprador à vista e conquista os melhores descontos.",
  },
  {
    icon: ShieldCheck,
    titulo: "Segurança total",
    texto: "Administradoras autorizadas e fiscalizadas pelo Banco Central do Brasil.",
  },
];

const passos = [
  { n: "01", t: "Diagnóstico", d: "Entendemos seu objetivo, prazo e capacidade de investimento." },
  {
    n: "02",
    t: "Plano ideal",
    d: "Selecionamos a carta de crédito e o grupo certo para o seu perfil.",
  },
  { n: "03", t: "Estratégia de lance", d: "Montamos o caminho mais rápido até a contemplação." },
  { n: "04", t: "Chaves na mão", d: "Acompanhamos a compra do imóvel do início à escritura." },
];

const faq = [
  {
    q: "O que é consórcio imobiliário?",
    a: "É uma compra planejada e coletiva. Você entra em um grupo, paga parcelas mensais e é contemplado por sorteio ou lance com uma carta de crédito para comprar seu imóvel.",
  },
  {
    q: "Preciso dar entrada?",
    a: "Não. Não existe entrada obrigatória — você começa pagando a primeira parcela do plano escolhido.",
  },
  {
    q: "Posso usar o FGTS?",
    a: "O uso do FGTS depende da modalidade, do bem escolhido e das regras vigentes. Nossa equipe analisa seu objetivo e orienta sobre as possibilidades disponíveis.",
  },
  {
    q: "Em quanto tempo sou contemplado?",
    a: "Depende do grupo e da estratégia de lance. Na consultoria montamos um plano realista para acelerar sua contemplação.",
  },
];

function Index() {
  return (
    <div className="liquid-page min-h-screen bg-background text-foreground">
      <header className="glass-nav sticky top-0 z-50 border-b backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#topo" className="flex items-center gap-3">
            <img
              src={logoAsset}
              alt="Grupo Invest — Investimentos & Consórcios"
              className="h-11 w-11 rounded-lg object-cover"
              width={44}
              height={44}
            />
            <span className="hidden text-sm font-semibold uppercase tracking-[0.2em] text-navy sm:block">
              Grupo Invest
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-navy" href="#vantagens">
              Vantagens
            </a>
            <a className="transition-colors hover:text-navy" href="#como-funciona">
              Como funciona
            </a>
            <a className="transition-colors hover:text-navy" href="#simulador">
              Simulador
            </a>
            <a className="transition-colors hover:text-navy" href="#sobre-nos">
              Sobre nós
            </a>
            <a className="transition-colors hover:text-navy" href="#avaliacoes">
              Avaliações
            </a>
            <a className="transition-colors hover:text-navy" href="#instagram">
              Instagram
            </a>
          </nav>
          <a
            href={WHATSAPP}
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" />
            Simular agora
          </a>
        </div>
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="liquid-hero relative overflow-hidden bg-brand-gradient">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="glass-card-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                Investimentos & Consórcios
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                Seu imóvel próprio
                <span className="block text-sky"> sem juros e sem pressa.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Crédito imobiliário e consórcio com curadoria do Grupo Invest. Planejamento honesto,
                estratégia de contemplação e acompanhamento até as chaves na mão.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  className="inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Fale conosco
                </a>
                <a
                  href="#simulador"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Simular agora
                </a>
              </div>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-7">
                {[
                  ["+500", "famílias atendidas"],
                  ["0%", "de juros"],
                  ["100%", "acompanhamento"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <dt className="text-2xl font-extrabold text-sky sm:text-3xl">{k}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/65">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="liquid-frame overflow-hidden rounded-[2rem] shadow-soft">
                <img
                  src={heroImovel}
                  alt="Prédio residencial moderno em dia ensolarado"
                  width={1280}
                  height={1280}
                  className="h-[380px] w-full object-cover sm:h-[460px]"
                />
              </div>
              <div className="glass-panel absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl px-5 py-4 sm:left-6">
                <Building2 className="h-9 w-9 text-sky" />
                <div>
                  <p className="text-sm font-bold text-navy">Carta de crédito</p>
                  <p className="text-xs text-muted-foreground">
                    Imóveis, veículos, motos e serviços
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VANTAGENS */}
        <section id="vantagens" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky">
              Por que consórcio
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              A forma mais inteligente de comprar um imóvel
            </h2>
            <p className="mt-4 text-muted-foreground">
              Enquanto o financiamento cobra juros por décadas, o consórcio transforma sua parcela
              em patrimônio.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {beneficios.map(({ icon: Icon, titulo, texto }) => (
              <article key={titulo} className="glass-card rounded-2xl p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-soft text-navy">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texto}</p>
              </article>
            ))}
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="bg-sky-soft/60 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Quatro passos até a sua carta de crédito
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {passos.map((p) => (
                <div key={p.n} className="glass-card rounded-2xl p-7">
                  <span className="text-3xl font-extrabold text-sky">{p.n}</span>
                  <h3 className="mt-3 text-lg font-bold text-navy">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SIMULADOR */}
        <section id="simulador" className="bg-sky-soft/40 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky">
                Simulador online
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Descubra sua parcela agora mesmo
              </h2>
              <p className="mt-4 text-muted-foreground">
                Escolha a categoria, o valor do crédito e o prazo do seu plano. O cálculo é
                instantâneo e sem compromisso.
              </p>
            </div>
            <div className="mt-12">
              <SimuladorConsorcio whatsapp={WHATSAPP} />
            </div>
          </div>
        </section>

        {/* ORIENTAÇÃO */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative mx-auto w-full max-w-[430px]">
              <InstagramVideo />
              <div className="glass-panel absolute -right-2 top-16 hidden items-center gap-3 rounded-2xl px-5 py-4 shadow-card sm:flex">
                <Instagram className="h-6 w-6 text-sky" />
                <div>
                  <p className="text-sm font-bold text-navy">@g.r.u.p.o_invest</p>
                  <p className="text-xs text-muted-foreground">Conteúdo e oportunidades</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky">
                O primeiro passo
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                Comprar seu apartamento pode ser mais simples do que você imagina!
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Antes de escolher o imóvel, é importante entender se você está pronto para o
                financiamento, quais documentos serão necessários e como funciona a análise de
                crédito. E você não precisa fazer isso sozinho.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Na Grupo Invest, você conta com orientação em cada etapa para encontrar a melhor
                opção de acordo com a sua realidade.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: SearchCheck,
                    titulo: "Análise",
                    texto: "Entenda seu momento financeiro.",
                  },
                  { icon: FileCheck2, titulo: "Documentos", texto: "Saiba tudo o que preparar." },
                  { icon: KeyRound, titulo: "Escolha", texto: "Encontre a opção ideal para você." },
                ].map(({ icon: Icon, titulo, texto }) => (
                  <article key={titulo} className="glass-card rounded-2xl p-5">
                    <Icon className="h-6 w-6 text-sky" />
                    <h3 className="mt-3 font-bold text-navy">{titulo}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{texto}</p>
                  </article>
                ))}
              </div>

              <p className="mt-8 text-lg font-bold text-navy">
                Seu apartamento começa com uma boa orientação.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Fale com a Grupo Invest
                </a>
                <a
                  href={INSTAGRAM_POST}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold text-navy transition-colors hover:border-sky hover:text-sky"
                >
                  <Instagram className="h-4 w-4" />
                  Ver no Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE NÓS */}
        <section id="sobre-nos" className="liquid-dark-section bg-navy-deep py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_1fr]">
            <div className="relative">
              <img
                src={gestoresAsset}
                alt="Luiz Ricardo e Talia Pinheiro, gestores do Grupo Invest"
                loading="lazy"
                width={638}
                height={638}
                className="w-full rounded-[2rem] object-cover shadow-soft"
              />
              <div className="glass-panel absolute -bottom-6 left-6 right-6 rounded-2xl px-5 py-4 sm:right-auto">
                <p className="text-sm font-bold text-navy">Luiz Ricardo &amp; Talia Pinheiro</p>
                <p className="text-xs text-muted-foreground">Gestores do Grupo Invest</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky">Sobre nós</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Transformamos oportunidades em patrimônio
              </h2>
              <p className="mt-5 leading-relaxed text-primary-foreground/75">
                Há mais de 5 anos no mercado de Belém, o Grupo Invest conecta pessoas a
                oportunidades imobiliárias com estratégia, transparência e atendimento próximo. Já
                são mais de R$ 745 milhões em créditos, transformando planos em patrimônio.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  ["+5 anos", "de mercado | Belém, PA"],
                  ["+R$ 745 mi", "em créditos"],
                  ["Soluções", "Imóveis • Consórcios • Investimentos"],
                ].map(([valor, legenda]) => (
                  <div key={legenda} className="glass-card-dark rounded-2xl p-4">
                    <p className="text-lg font-extrabold text-sky">{valor}</p>
                    <p className="mt-1 text-xs leading-relaxed text-primary-foreground/70">
                      {legenda}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    nome: "Luiz Ricardo",
                    cargo: "Gestor de Crédito & Estratégia",
                    bio: "Estrutura cartas de crédito, estratégias de lance e a melhor rota até a contemplação.",
                  },
                  {
                    nome: "Talia Pinheiro",
                    cargo: "Gestora de Relacionamento",
                    bio: "Acompanha cada cliente do primeiro cálculo à escritura, com transparência total.",
                  },
                ].map((g) => (
                  <article key={g.nome} className="glass-card-dark rounded-2xl p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky/20 text-sky">
                      <UserRound className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-primary-foreground">{g.nome}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky">
                      {g.cargo}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                      {g.bio}
                    </p>
                  </article>
                ))}
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Atendimento 100% personalizado",
                  "Estratégia de lance sob medida",
                  "Transparência em cada taxa",
                  "Suporte após a contemplação",
                ].map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-primary-foreground/85"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-sky" />
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP}
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <Phone className="h-4 w-4" />
                Fale conosco
              </a>
            </div>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section id="avaliacoes" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky">Avaliações</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              A confiança de quem planeja com a gente
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                nome: "Camila S.",
                texto:
                  "Atendimento muito claro e atencioso. Entendi cada etapa e consegui escolher com mais segurança.",
              },
              {
                nome: "Rafael M.",
                texto:
                  "A equipe foi transparente desde a primeira conversa e montou uma estratégia alinhada ao meu momento.",
              },
              {
                nome: "Juliana A.",
                texto:
                  "Gostei do acompanhamento próximo e da agilidade para tirar todas as minhas dúvidas.",
              },
            ].map((avaliacao) => (
              <article key={avaliacao.nome} className="glass-card rounded-2xl p-7">
                <div className="flex gap-1 text-sky" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  “{avaliacao.texto}”
                </p>
                <p className="mt-5 font-bold text-navy">{avaliacao.nome}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTEÚDOS DO INSTAGRAM */}
        <section id="instagram" className="bg-sky-soft/50 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky">
                <Instagram className="h-4 w-4" /> Conteúdo Grupo Invest
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy sm:text-5xl">
                Informação para decidir com mais confiança
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                Assista, compare e entenda como a Grupo Invest transforma temas financeiros em
                caminhos claros para construir patrimônio.
              </p>
            </div>
            <InstagramShowcase />
            <div className="glass-panel mt-12 flex flex-col items-center gap-6 rounded-3xl border border-border p-6 shadow-card sm:flex-row sm:justify-between sm:p-8">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="rounded-full bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 p-[3px]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background p-1">
                    <img
                      src={logoAsset}
                      alt="Grupo Invest no Instagram"
                      loading="lazy"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-navy">@g.r.u.p.o_invest</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Imóveis • Consórcios • Investimentos | Belém, PA
                  </p>
                </div>
              </div>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 via-rose-600 to-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-soft transition-transform hover:scale-[1.03]"
              >
                <Instagram className="h-4 w-4" /> Seguir no Instagram
              </a>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-5 py-20 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Dúvidas frequentes
          </h2>
          <div className="glass-panel mt-10 divide-y divide-border rounded-3xl px-6">
            {faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-navy">
                  {f.q}
                  <span className="text-sky transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="mx-auto max-w-6xl px-5 pb-24">
          <div className="liquid-cta overflow-hidden rounded-[2rem] bg-brand-gradient px-8 py-14 text-center shadow-soft sm:px-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
              O próximo endereço da sua família começa aqui
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Simulação gratuita e sem compromisso. Responda algumas perguntas e receba seu plano
              ideal hoje mesmo.
            </p>
            <a
              href={WHATSAPP}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              Quero minha simulação
            </a>
          </div>
        </section>
      </main>

      <footer className="glass-nav border-t py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset}
              alt="Grupo Invest"
              loading="lazy"
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg object-cover"
            />
            <p className="text-sm font-semibold text-navy">
              Grupo Invest
              <span className="block text-xs font-normal text-muted-foreground">
                Investimentos & Consórcios
              </span>
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Grupo Invest. Consórcio não é financiamento —
            administradoras autorizadas pelo Banco Central.
          </p>
        </div>
      </footer>
    </div>
  );
}
