import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  CheckCircle2,
  HandCoins,
  KeyRound,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
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
          "Empresa de crédito imobiliário e consórcio. Simule seu plano sem juros e fale com os gestores Luiz Ricardo e Talia Pinheiro.",
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

const beneficios = [
  {
    icon: HandCoins,
    titulo: "Sem juros",
    texto: "Você paga apenas taxa de administração — nada de juros bancários corroendo seu patrimônio.",
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
  { n: "02", t: "Plano ideal", d: "Selecionamos a carta de crédito e o grupo certo para o seu perfil." },
  { n: "03", t: "Estratégia de lance", d: "Montamos o caminho mais rápido até a contemplação." },
  { n: "04", t: "Chaves na mão", d: "Acompanhamos a compra do imóvel do início à escritura." },
];

const planos = [
  { credito: "R$ 200 mil", parcela: "R$ 1.190", prazo: "200 meses" },
  { credito: "R$ 350 mil", parcela: "R$ 2.080", prazo: "200 meses", destaque: true },
  { credito: "R$ 500 mil", parcela: "R$ 2.970", prazo: "200 meses" },
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
    a: "Sim. O FGTS pode ser usado para dar lance, complementar a carta de crédito ou amortizar parcelas, conforme as regras vigentes.",
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
            <a className="transition-colors hover:text-navy" href="#vantagens">Vantagens</a>
            <a className="transition-colors hover:text-navy" href="#como-funciona">Como funciona</a>
            <a className="transition-colors hover:text-navy" href="#simulador">Simulador</a>
            <a className="transition-colors hover:text-navy" href="#planos">Planos</a>
            <a className="transition-colors hover:text-navy" href="#gestores">Gestores</a>
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
                  Falar com um gestor
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
                    <dd className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/65">{v}</dd>
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
                  <p className="text-xs text-muted-foreground">Casa, apartamento, terreno ou reforma</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VANTAGENS */}
        <section id="vantagens" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky">Por que consórcio</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              A forma mais inteligente de comprar um imóvel
            </h2>
            <p className="mt-4 text-muted-foreground">
              Enquanto o financiamento cobra juros por décadas, o consórcio transforma sua parcela em patrimônio.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {beneficios.map(({ icon: Icon, titulo, texto }) => (
              <article
                key={titulo}
                className="glass-card rounded-2xl p-7"
              >
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
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky">Simulador online</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Descubra sua parcela agora mesmo
              </h2>
              <p className="mt-4 text-muted-foreground">
                Escolha a categoria, o valor do crédito e o prazo. O cálculo é instantâneo e sem compromisso.
              </p>
            </div>
            <div className="mt-12">
              <SimuladorConsorcio whatsapp={WHATSAPP} />
            </div>
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky">Simulações</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Escolha o crédito e comece hoje
            </h2>
            <p className="mt-4 text-muted-foreground">
              Valores de referência. A proposta exata é montada gratuitamente pelos nossos gestores.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {planos.map((p) => (
              <div
                key={p.credito}
                className={
                  p.destaque
                    ? "rounded-3xl bg-brand-gradient p-8 shadow-soft"
                    : "glass-card rounded-3xl p-8"
                }
              >
                <p
                  className={
                    p.destaque
                      ? "text-xs font-semibold uppercase tracking-[0.2em] text-sky"
                      : "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                  }
                >
                  Crédito
                </p>
                <p
                  className={
                    p.destaque
                      ? "mt-2 text-3xl font-extrabold text-primary-foreground"
                      : "mt-2 text-3xl font-extrabold text-navy"
                  }
                >
                  {p.credito}
                </p>
                <p className={p.destaque ? "mt-6 text-primary-foreground/80" : "mt-6 text-muted-foreground"}>
                  a partir de{" "}
                  <strong className={p.destaque ? "text-sky" : "text-navy"}>{p.parcela}</strong> /mês
                </p>
                <p className={p.destaque ? "mt-1 text-sm text-primary-foreground/65" : "mt-1 text-sm text-muted-foreground"}>
                  em até {p.prazo}
                </p>
                <ul className="mt-6 space-y-2">
                  {["Sem juros", "Sem entrada", "Uso do FGTS permitido"].map((i) => (
                    <li
                      key={i}
                      className={
                        p.destaque
                          ? "flex items-center gap-2 text-sm text-primary-foreground/85"
                          : "flex items-center gap-2 text-sm text-muted-foreground"
                      }
                    >
                      <CheckCircle2 className="h-4 w-4 text-sky" />
                      {i}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP}
                  className={
                    p.destaque
                      ? "mt-8 inline-flex w-full items-center justify-center rounded-full bg-sky px-6 py-3 text-sm font-bold text-primary-foreground"
                      : "mt-8 inline-flex w-full items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-bold text-primary-foreground"
                  }
                >
                  Quero simular
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* GESTORES */}
        <section id="gestores" className="liquid-dark-section bg-navy-deep py-20 md:py-24">
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
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky">Quem conduz o seu plano</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Uma gestão feita a quatro mãos
              </h2>
              <p className="mt-5 leading-relaxed text-primary-foreground/75">
                O Grupo Invest é conduzido por Luiz Ricardo e Talia Pinheiro. Juntos, eles unem estratégia
                financeira e atendimento próximo para que cada cliente saia do aluguel com clareza — sem
                promessas irreais e sem letras miúdas.
              </p>

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
                  <article
                    key={g.nome}
                    className="glass-card-dark rounded-2xl p-6"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky/20 text-sky">
                      <UserRound className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-primary-foreground">{g.nome}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky">{g.cargo}</p>
                    <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{g.bio}</p>
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
                  <li key={i} className="flex items-center gap-2 text-sm text-primary-foreground/85">
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
                Falar com os gestores
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-5 py-20 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Dúvidas frequentes</h2>
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
              Simulação gratuita e sem compromisso. Responda algumas perguntas e receba seu plano ideal hoje mesmo.
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
            © {new Date().getFullYear()} Grupo Invest. Consórcio não é financiamento — administradoras
            autorizadas pelo Banco Central.
          </p>
        </div>
      </footer>
    </div>
  );
}
