import { useMemo, useState } from "react";
import { Bike, Building2, Car, MessageCircle, Wrench } from "lucide-react";

type Categoria = {
  id: string;
  nome: string;
  icon: typeof Building2;
  min: number;
  max: number;
  step: number;
  prazos: number[];
  taxaAdm: number;
  fundoReserva: number;
  inicial: number;
  prazoInicial: number;
};

const CATEGORIAS: Categoria[] = [
  {
    id: "imovel",
    nome: "Imóvel",
    icon: Building2,
    min: 100000,
    max: 1500000,
    step: 10000,
    prazos: [120, 150, 180, 200, 240],
    taxaAdm: 0.25,
    fundoReserva: 0.02,
    inicial: 350000,
    prazoInicial: 200,
  },
  {
    id: "automovel",
    nome: "Automóvel",
    icon: Car,
    min: 30000,
    max: 500000,
    step: 5000,
    prazos: [36, 48, 60, 72, 84, 100],
    taxaAdm: 0.25,
    fundoReserva: 0.02,
    inicial: 100000,
    prazoInicial: 72,
  },
  {
    id: "moto",
    nome: "Moto",
    icon: Bike,
    min: 10000,
    max: 150000,
    step: 2500,
    prazos: [24, 36, 48, 60, 72],
    taxaAdm: 0.25,
    fundoReserva: 0.02,
    inicial: 30000,
    prazoInicial: 48,
  },
  {
    id: "servicos",
    nome: "Serviços",
    icon: Wrench,
    min: 10000,
    max: 200000,
    step: 5000,
    prazos: [24, 36, 48, 60],
    taxaAdm: 0.25,
    fundoReserva: 0.02,
    inicial: 50000,
    prazoInicial: 48,
  },
];

const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function SimuladorConsorcio({ whatsapp }: { whatsapp: string }) {
  const [categoriaId, setCategoriaId] = useState(CATEGORIAS[0]!.id);
  const categoria = CATEGORIAS.find(({ id }) => id === categoriaId) ?? CATEGORIAS[0]!;
  const [credito, setCredito] = useState(350000);
  const [prazo, setPrazo] = useState(200);

  const selecionarCategoria = (novaCategoria: Categoria) => {
    setCategoriaId(novaCategoria.id);
    setCredito(novaCategoria.inicial);
    setPrazo(novaCategoria.prazoInicial);
  };

  const valorCredito = Math.min(Math.max(credito, categoria.min), categoria.max);
  const prazoAtual = categoria.prazos.includes(prazo)
    ? prazo
    : (categoria.prazos[categoria.prazos.length - 1] as number);

  const { parcela, total, custo } = useMemo(() => {
    const total = valorCredito * (1 + categoria.taxaAdm + categoria.fundoReserva);
    return {
      total,
      parcela: total / prazoAtual,
      custo: total - valorCredito,
    };
  }, [valorCredito, prazoAtual, categoria]);

  const mensagem = `${whatsapp}?text=${encodeURIComponent(
    `Olá! Simulei um consórcio de ${categoria.nome.toLowerCase()} de ${brl(valorCredito)} em ${prazoAtual} meses (parcela aprox. ${brl(parcela)}). Quero receber a proposta completa.`,
  )}`;

  return (
    <div className="grid gap-8 rounded-[2rem] border border-border bg-card p-6 shadow-card sm:p-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky">Simulador</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
          Monte seu plano em segundos
        </h3>

        <div className="mt-7">
          <p className="text-sm font-semibold text-navy">O que você quer conquistar?</p>
          <div
            className="mt-3 flex flex-wrap gap-2"
            role="group"
            aria-label="Categoria do consórcio"
          >
            {CATEGORIAS.map((item) => {
              const Icon = item.icon;
              const ativa = item.id === categoria.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={ativa}
                  onClick={() => selecionarCategoria(item)}
                  className={
                    ativa
                      ? "inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-sm font-bold text-primary-foreground"
                      : "inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-sky hover:text-sky"
                  }
                >
                  <Icon className="h-4 w-4" />
                  {item.nome}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-end justify-between gap-4">
            <label htmlFor="credito" className="text-sm font-semibold text-navy">
              Valor do crédito
            </label>
            <span className="text-2xl font-extrabold text-navy">{brl(valorCredito)}</span>
          </div>
          <input
            id="credito"
            type="range"
            min={categoria.min}
            max={categoria.max}
            step={categoria.step}
            value={valorCredito}
            onChange={(e) => setCredito(Number(e.target.value))}
            className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-sky-soft accent-sky"
          />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>{brl(categoria.min)}</span>
            <span>{brl(categoria.max)}</span>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm font-semibold text-navy">Prazo (meses)</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {categoria.prazos.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPrazo(p)}
                className={
                  p === prazoAtual
                    ? "rounded-full bg-navy px-5 py-2 text-sm font-bold text-primary-foreground"
                    : "rounded-full border border-border px-5 py-2 text-sm font-medium text-navy transition-colors hover:border-sky hover:text-sky"
                }
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-[1.5rem] bg-brand-gradient p-7 shadow-soft">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">
            Parcela estimada
          </p>
          <p className="mt-2 text-4xl font-extrabold leading-none text-primary-foreground">
            {brl(parcela)}
          </p>
          <p className="mt-2 text-sm text-primary-foreground/70">por mês, sem juros</p>

          <dl className="mt-7 space-y-3 border-t border-primary-foreground/15 pt-5 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-primary-foreground/70">Crédito contratado</dt>
              <dd className="font-semibold text-primary-foreground">{brl(valorCredito)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-primary-foreground/70">Prazo</dt>
              <dd className="font-semibold text-primary-foreground">{prazoAtual} meses</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-primary-foreground/70">Taxa de administração</dt>
              <dd className="font-semibold text-primary-foreground">
                {(categoria.taxaAdm * 100).toFixed(0)}%
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-primary-foreground/70">Custo total do plano</dt>
              <dd className="font-semibold text-sky">{brl(custo)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-primary-foreground/70">Total a pagar</dt>
              <dd className="font-semibold text-primary-foreground">{brl(total)}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-8">
          <a
            href={mensagem}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Receber proposta completa
          </a>
          <p className="mt-3 text-center text-[11px] leading-relaxed text-primary-foreground/60">
            Valores simulados para referência. A proposta oficial é enviada pela nossa equipe.
          </p>
        </div>
      </div>
    </div>
  );
}
