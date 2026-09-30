# Mega Prompt — Lovable

Crie um MVP chamado **NegocioCerto.AI**, uma aplicação web para pequenos prestadores de serviços que recebem pedidos de orçamento pelo WhatsApp e precisam organizar oportunidades comerciais.

## Objetivo

O produto deve ajudar o usuário a:

1. cadastrar uma oportunidade;
2. organizar as informações;
3. qualificar o pedido com apoio de IA;
4. visualizar o pipeline;
5. saber o próximo passo;
6. gerar uma primeira mensagem comercial;
7. continuar o atendimento pelo WhatsApp.

Não construir marketplace, checkout ou automação completa de vendas neste MVP.

## Público

- autônomos;
- microempreendedores;
- pequenos prestadores de serviços;
- profissionais que usam WhatsApp como canal comercial.

## Identidade visual

Criar interface moderna, limpa e profissional.

Paleta:

- fundo: #F7F9FC
- branco: #FFFFFF
- texto principal: #172033
- texto secundário: #667085
- roxo principal: #6D55E8
- verde de sucesso: #22A06B
- bordas: #E5E9F0

Tipografia:

- Space Grotesk para títulos;
- DM Sans para textos.

Design:

- cards com bordas suaves;
- bastante espaço em branco;
- responsivo;
- mobile first;
- sem excesso de efeitos;
- aparência de SaaS moderno.

## Landing page

Criar:

- logo NegocioCerto.AI;
- headline: "Não deixe um pedido de orçamento virar uma oportunidade perdida.";
- subtítulo explicando organização + IA;
- CTA "Cadastrar oportunidade";
- CTA secundário "Ver demonstração";
- benefícios;
- seção "Como funciona";
- seção explicando que o fechamento continua humano pelo WhatsApp.

## Formulário

Campos:

- nome;
- serviço desejado;
- descrição;
- faixa de orçamento;
- prazo.

Validar campos essenciais.

Depois do envio:

- salvar oportunidade;
- mostrar confirmação;
- encaminhar ao dashboard.

## Dashboard

Mostrar:

- total de oportunidades;
- oportunidades quentes;
- follow-ups;
- lista de leads;
- nome;
- serviço;
- orçamento;
- status;
- próximo passo;
- data do follow-up;
- botão WhatsApp.

Status:

- Novo;
- Em análise;
- Quente;
- Follow-up;
- Cliente;
- Perdido.

## Agente de IA

Criar fluxo de qualificação.

Entrada:

- nome;
- serviço;
- descrição;
- orçamento;
- prazo.

Saída:

- resumo;
- intenção;
- informações faltantes;
- perguntas sugeridas;
- próxima ação;
- mensagem comercial.

Não inventar dados que não foram informados.

Se houver informação insuficiente, indicar explicitamente o que falta.

## WhatsApp

Gerar uma mensagem comercial com:

- nome;
- serviço;
- contexto informado;
- pergunta de próxima etapa.

Abrir WhatsApp com mensagem pré-preenchida.

O número de WhatsApp deve vir de variável de ambiente/secrets, nunca ficar exposto como segredo no código.

## Lovable Cloud

Usar o backend do Lovable Cloud para persistência quando o projeto estiver conectado ao ambiente.

Não criar servidor externo.

Estruturar dados para:

### leads

- id
- name
- service
- description
- budget
- deadline
- status
- next_action
- follow_up_at
- created_at
- updated_at

## Segurança

Antes de publicar:

- executar revisão de segurança;
- verificar permissões;
- verificar regras de acesso;
- não colocar API keys no frontend;
- usar secrets;
- verificar dados pessoais armazenados;
- limitar acesso administrativo.

## Admin

O painel deve permitir:

- listar leads;
- alterar status;
- registrar próxima ação;
- atualizar follow-up;
- abrir WhatsApp.

## Fora do escopo

Não criar agora:

- Stripe;
- marketplace;
- chatbot completo;
- automação n8n;
- multiempresa avançado;
- aplicativo mobile nativo.

## Critério de sucesso

Uma pessoa deve conseguir:

1. entender a proposta em menos de 30 segundos;
2. cadastrar uma oportunidade;
3. encontrar a oportunidade no painel;
4. entender o próximo passo;
5. gerar uma resposta;
6. abrir o WhatsApp.

Priorize simplicidade e velocidade.
