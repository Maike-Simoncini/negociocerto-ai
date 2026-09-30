# 🚀 NegocioCerto.AI

> MVP criado para o desafio **MeuNegócio.AI: Construindo um Produto Digital com Agentes de IA e Lovable**, da trilha Santander + DIO.

[![Status](https://img.shields.io/badge/status-MVP-orange)](https://github.com/)
[![Lovable](https://img.shields.io/badge/built%20with-Lovable-ff5f8f)](https://lovable.dev/)
[![IA](https://img.shields.io/badge/IA-Agentes%20de%20IA-7c3aed)](https://openai.com/)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## 🎯 Visão do produto

O **NegocioCerto.AI** é um MVP para pequenos prestadores de serviços que recebem pedidos de orçamento pelo WhatsApp e acabam perdendo oportunidades por falta de organização.

A proposta é simples:

**captar → organizar → qualificar → responder → acompanhar → fechar pelo WhatsApp.**

A IA entra como copiloto para transformar informações soltas em uma ficha de oportunidade, sugerir perguntas de qualificação e gerar uma resposta comercial inicial.

O MVP não tenta substituir o atendimento humano. Ele reduz o trabalho operacional antes da conversa de venda.

---

## 🚀 Dor escolhida

Pequenos prestadores de serviços — como fotógrafos, designers, profissionais de beleza, manutenção, eventos e serviços técnicos — frequentemente recebem vários pedidos de orçamento em canais diferentes.

Quando o volume aumenta, problemas comuns aparecem:

- mensagens esquecidas;
- informações do cliente espalhadas;
- falta de follow-up;
- dificuldade para saber quais oportunidades estão mais maduras;
- respostas comerciais feitas do zero;
- perda de tempo copiando informações entre WhatsApp e planilhas.

### Por que isso pode virar negócio?

O problema está ligado diretamente a **tempo e receita perdida**. Se uma ferramenta simples recuperar apenas algumas oportunidades por mês, existe uma relação clara entre valor percebido e disposição para pagar.

O MVP testa exatamente essa hipótese, sem tentar construir um CRM completo.

---

## 🧪 Tese do MVP

> **Pequenos prestadores de serviços pagarão por uma ferramenta simples que organiza pedidos de orçamento e usa IA para preparar o próximo passo do atendimento, desde que o ganho de tempo e a recuperação de oportunidades sejam percebidos rapidamente.**

### Hipóteses principais

| Hipótese | Como testar |
|---|---|
| A dor é frequente | Entrevistas com 5–10 prestadores |
| A organização dos leads tem valor | Usar o painel durante atendimentos reais |
| Sugestões de IA economizam tempo | Comparar atendimento com/sem sugestão |
| WhatsApp continua sendo o canal de fechamento | Medir cliques e conversões |
| Existe disposição para pagar | Conversa de venda após período de teste |

---

# 📊 Tamanho de mercado

O mercado abaixo é uma **estimativa de planejamento**, não uma medição oficial.

Para evitar apresentar números hipotéticos como fatos, o modelo utiliza premissas explícitas que podem ser substituídas por dados de fontes oficiais durante a validação.

### Modelo inicial

- **TAM:** pequenos negócios e profissionais autônomos que vendem serviços e recebem solicitações digitais.
- **SAM:** prestadores de serviços que usam WhatsApp como canal comercial e têm necessidade de acompanhar orçamentos.
- **SOM:** primeiros clientes alcançáveis em uma operação local/regional, por indicação, conteúdo e prospecção direta.

### Premissa financeira inicial

Exemplo para validar a tese:

- preço hipotético: **R$ 29/mês**;
- 100 clientes: **R$ 2.900 MRR**;
- 500 clientes: **R$ 14.500 MRR**;
- 1.000 clientes: **R$ 29.000 MRR**.

Esses valores são cenários matemáticos, **não previsão de receita**.

A validação real deve substituir as premissas por entrevistas, taxa de conversão, retenção e dados de mercado.

---

# 🧩 Business Model Canvas

| Bloco | Hipótese |
|---|---|
| **Segmentos de clientes** | Autônomos e pequenos prestadores de serviços |
| **Proposta de valor** | Organizar oportunidades e acelerar o próximo atendimento |
| **Canais** | WhatsApp, Instagram, indicação, conteúdo e prospecção |
| **Relacionamento** | Produto simples + onboarding guiado + suporte |
| **Receitas** | Assinatura mensal |
| **Recursos-chave** | Aplicação web, IA, banco de leads e integração com WhatsApp |
| **Atividades-chave** | Qualificação, organização e acompanhamento de oportunidades |
| **Parcerias-chave** | Ferramentas de IA, WhatsApp e provedores de infraestrutura |
| **Estrutura de custos** | Infraestrutura, IA, domínio, aquisição e suporte |

---

# 🏗️ O que o MVP entrega

### Cliente

1. Landing page.
2. Explicação da proposta.
3. Formulário para cadastrar uma oportunidade.
4. Qualificação inicial.
5. Sugestão de próxima ação.
6. Geração de mensagem comercial.
7. Abertura do WhatsApp para finalizar o atendimento.

### Administração

1. Dashboard.
2. Lista de leads.
3. Status da oportunidade.
4. Valor estimado.
5. Próxima ação.
6. Data do follow-up.
7. Visão de clientes.
8. Lembretes.

---

# 🤖 Onde a IA entra

O MVP foi pensado para trabalhar com um **agente de qualificação comercial**.

Entrada:

```text
Nome
Serviço desejado
Descrição
Prazo
Faixa de orçamento
Canal de contato
```

Saída esperada:

```text
Resumo da oportunidade
Nível de intenção
Informações faltantes
Perguntas sugeridas
Próxima ação
Mensagem comercial sugerida
```

A IA **não fecha a venda automaticamente**. O fechamento continua humano e acontece pelo WhatsApp.

---

# ✋ O que ficou manual de propósito

Para testar a tese antes de aumentar a complexidade:

- pagamento;
- negociação;
- fechamento;
- atendimento pelo WhatsApp;
- cadastro inicial de clientes;
- cobrança;
- suporte;
- recuperação de clientes inativos.

Isso reduz o escopo e permite descobrir se existe valor antes de construir integrações caras.

---

# 🖥️ Fluxo do produto

```text
LANDING PAGE
     ↓
CADASTRAR OPORTUNIDADE
     ↓
QUALIFICAÇÃO COM IA
     ↓
PAINEL
     ↓
SUGESTÃO DE RESPOSTA
     ↓
WHATSAPP
     ↓
VENDA / NÃO VENDA
     ↓
FOLLOW-UP
```

---

# 🧠 Mega Prompt do Lovable

O prompt completo usado como base do projeto está em:

[`docs/mega-prompt-lovable.md`](docs/mega-prompt-lovable.md)

As correções posteriores estão em:

[`docs/correcoes.md`](docs/correcoes.md)

---

# 🧪 Testes do MVP

### Fluxo principal

- [x] Landing page
- [x] Cadastro de oportunidade
- [x] Validação dos campos
- [x] Dashboard
- [x] Status do lead
- [x] Próxima ação
- [x] Follow-up
- [x] Geração de mensagem demonstrativa
- [x] Ação para WhatsApp
- [x] Dados de demonstração

### Segurança

- [x] Nenhum segredo no código
- [x] `.env.example` sem valores reais
- [x] `.gitignore`
- [x] Orientação para usar secrets do ambiente
- [x] Não armazenar tokens no frontend

Checklist completo:

[`docs/checklist-seguranca.md`](docs/checklist-seguranca.md)

---

# 📁 Estrutura

```text
negociocerto-ai/
├── README.md
├── LICENSE
├── .gitignore
├── .env.example
├── package.json
├── index.html
├── docs/
│   ├── business-model-canvas.md
│   ├── hipoteses-mvp.md
│   ├── mega-prompt-lovable.md
│   ├── correcoes.md
│   ├── checklist-seguranca.md
│   └── testes.md
└── src/
    ├── main.jsx
    └── styles.css
```

---

# 🌐 Aplicação publicada

> **Substitua este endereço pelo URL real publicado no Lovable antes de enviar o desafio.**

[`https://pixel-perfect-snapshot-5206.lovable.app`](https://pixel-perfect-snapshot-5206.lovable.app)

---
