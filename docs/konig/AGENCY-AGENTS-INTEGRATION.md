# Agency Agents na König

## Fonte externa

Upstream oficial: `msitarzewski/agency-agents`
Licença: MIT.

A König não copia e ativa dezenas de agentes indiscriminadamente. O repositório funciona como **banco externo de especialistas**. O Squad Master seleciona somente os papéis necessários para cada processo.

Para sincronizar a biblioteca localmente:

```bash
bash scripts/sync-agency-agents.sh
```

A cópia fica em `.external/agency-agents/`.

## Regra de arquitetura

- **Doug / Squad Master** decide prioridade, responsável e handoff.
- **Squad** reúne especialistas para um resultado de negócio.
- **Agent** é um papel especialista.
- **Skill** é uma capacidade reutilizável.
- **Automation / Tool** executa ações.
- **Autopilot** é o produto operacional entregue ao cliente.

Agency Agents alimenta principalmente a camada de **Agents**.

## Primeiro recorte oficial: Revenue Squad

Quatro papéis foram priorizados a partir do Agency Agents:

1. **Offer & Lead Gen Strategist** — desenha oferta, lead magnet e canal de aquisição.
2. **Outbound Strategist** — ICP, sinais, prospecção e sequências multicanal.
3. **Sales Engineer** — transforma tecnologia em demonstração focada no problema e no resultado.
4. **Proposal Strategist** — converte diagnóstico e oportunidade em proposta persuasiva e específica.

Eles complementam o agente Hormozi da König, que permanece como referência de oferta e vendas.

## Regra comercial para negócios locais

A arquitetura sofisticada é interna. O cliente não precisa entender agentes, skills, MCP, RAG, workflows ou multi-agent systems.

A comunicação externa deve seguir:

**Problema visível → resultado desejado → solução simples → prova/demo → próximo passo.**

Exemplos:

- Interno: `Revenue Autopilot com agentes, skills, CRM e automações`.
  Externo: **"Sua empresa responde, acompanha e recupera clientes automaticamente no WhatsApp."**

- Interno: `Web & Conversion Squad + CRO + SEO/AEO/GEO`.
  Externo: **"Um site feito para transformar visitas em pedidos de orçamento."**

- Interno: `Outbound Strategist + Research + CRM automation`.
  Externo: **"Encontramos empresas com sinais reais de necessidade e preparamos a abordagem certa."**

## Princípio König

**Complexidade por dentro. Simplicidade por fora.**

O cliente compra resultado e operação funcionando. A König mantém a arquitetura, os especialistas e a automação nos bastidores.
