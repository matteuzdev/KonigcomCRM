import type { Metadata } from "next";

export const metadata: Metadata = { title: "König OS — Case 01" };
export const dynamic = "force-dynamic";

const squads = [
  { name: "Revenue", owner: "Hormozi + Growth", mission: "Oferta, aquisição, pipeline, follow-up e fechamento" },
  { name: "Web & Experience", owner: "Web Lead", mission: "Sites, LPs, UX, CRO, SEO, AEO/GEO e QA" },
  { name: "AI & Automation", owner: "AI Architect", mission: "Agentes, skills, MCP, workflows e integrações" },
  { name: "Software & Product", owner: "Product Architect", mission: "Sistemas, dashboards, SaaS e white-label" },
  { name: "Operations & Intelligence", owner: "Ops Lead", mission: "Research, SOPs, métricas e Customer Success" },
];

const ladder = [
  "Raio-X assíncrono",
  "Revenue Autopilot",
  "Growth Autopilot",
  "Operations Autopilot",
  "Web & Conversion",
  "Software / Sistemas",
  "AI Operating System",
];

const funnel = [
  "Prospecção",
  "Raio-X",
  "Demo",
  "WhatsApp",
  "Proposta",
  "Fechamento",
  "Entrega",
  "Expansion Review",
  "LTV",
];

const kpis = [
  "Leads/semana",
  "Taxa de resposta",
  "Qualificados",
  "Propostas",
  "Fechamentos",
  "MRR",
  "Ticket médio",
  "Expansão",
  "LTV",
];

export default function KonigOSPage() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 p-4 sm:p-6 lg:p-8">
      <section className="rounded-2xl border bg-card p-6 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">CASE 01 · A PRÓPRIA KÖNIG</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">König OS</h1>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              A agência operando dentro do próprio sistema: aquisição, vendas, entrega, automação, expansão e LTV.
            </p>
          </div>
          <div className="rounded-xl border bg-muted/40 px-4 py-3 text-sm">
            <p className="font-medium">Squad Master</p>
            <p className="text-muted-foreground">Doug · estratégia, arquitetura e orquestração</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div>
          <h2 className="text-xl font-semibold">Fluxo comercial oficial</h2>
          <p className="text-sm text-muted-foreground">Venda assíncrona por padrão. Call só quando realmente fizer sentido.</p>
        </div>
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max items-center gap-2">
            {funnel.map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <div className="rounded-xl border bg-card px-4 py-3 text-sm font-medium">{item}</div>
                {index < funnel.length - 1 ? <span className="text-muted-foreground">→</span> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border bg-card p-5 sm:p-6">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">Escada de valor</h2>
            <p className="text-sm text-muted-foreground">Cada degrau aumenta o valor do anterior e expande o LTV.</p>
          </div>
          <div className="space-y-3">
            {ladder.map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-xl border p-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium">{item}</p>
                  <p className="text-xs text-muted-foreground">
                    {index === 0 ? "Entrada de baixo atrito" : index === ladder.length - 1 ? "Conta estratégica / maior LTV" : "Expansão do relacionamento"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-5 sm:p-6">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">Revenue Autopilot</h2>
            <p className="text-sm text-muted-foreground">Primeiro produto operacional da König.</p>
          </div>
          <div className="space-y-2 text-sm">
            {[
              "Captura e registra leads",
              "Responde e qualifica",
              "Executa follow-up",
              "Move pipeline",
              "Gera proposta",
              "Reativa oportunidades",
              "Sinaliza lead quente",
              "Prepara handoff humano",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-lg bg-muted/40 px-3 py-2.5">
                <span aria-hidden="true">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Squads da operação</h2>
          <p className="text-sm text-muted-foreground">Um sistema coordenado, não uma coleção de agentes soltos.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {squads.map((squad) => (
            <article key={squad.name} className="rounded-2xl border bg-card p-5">
              <p className="text-sm text-muted-foreground">{squad.owner}</p>
              <h3 className="mt-1 text-lg font-semibold">{squad.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{squad.mission}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border bg-card p-5 sm:p-6">
        <div className="mb-5">
          <h2 className="text-xl font-semibold">Painel de crescimento</h2>
          <p className="text-sm text-muted-foreground">Os números que precisam aparecer aqui conforme conectarmos os dados reais.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {kpis.map((kpi) => (
            <div key={kpi} className="rounded-xl border p-4">
              <p className="text-xs text-muted-foreground">{kpi}</p>
              <p className="mt-2 text-2xl font-semibold">—</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-dashed p-5 sm:p-6">
        <h2 className="text-lg font-semibold">Regra do produto</h2>
        <p className="mt-2 max-w-4xl text-sm leading-6 text-muted-foreground">
          O cliente não compra agente, skill, MCP ou automação. Essas são peças internas. A König entrega uma operação pronta para atingir um resultado de negócio.
        </p>
      </section>
    </main>
  );
}
