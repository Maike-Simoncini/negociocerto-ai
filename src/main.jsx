import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const seed = [
  {
    id: 1,
    name: "Ana Paula",
    service: "Fotografia de casamento",
    budget: "R$ 3.000 – R$ 5.000",
    status: "Quente",
    next: "Enviar proposta",
    date: "Hoje",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    service: "Identidade visual",
    budget: "R$ 1.000 – R$ 2.000",
    status: "Em análise",
    next: "Perguntar prazo",
    date: "Amanhã",
  },
  {
    id: 3,
    name: "Mariana Souza",
    service: "Manutenção residencial",
    budget: "Até R$ 800",
    status: "Follow-up",
    next: "Retomar contato",
    date: "02/10",
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [leads, setLeads] = useState(seed);
  const [form, setForm] = useState({
    name: "",
    service: "",
    description: "",
    budget: "",
    deadline: "",
  });
  const [notice, setNotice] = useState("");

  const stats = useMemo(() => ({
    total: leads.length,
    hot: leads.filter((x) => x.status === "Quente").length,
    follow: leads.filter((x) => x.status === "Follow-up").length,
  }), [leads]);

  function submitLead(e) {
    e.preventDefault();
    if (!form.name || !form.service) {
      setNotice("Informe pelo menos nome e serviço.");
      return;
    }
    const newLead = {
      id: Date.now(),
      name: form.name,
      service: form.service,
      budget: form.budget || "Não informado",
      status: "Novo",
      next: "Qualificar oportunidade",
      date: "Agora",
    };
    setLeads([newLead, ...leads]);
    setForm({ name: "", service: "", description: "", budget: "", deadline: "" });
    setNotice("Oportunidade criada. A próxima etapa é qualificar o lead.");
    setPage("dashboard");
  }

  function whatsapp(lead) {
    const text = `Olá, ${lead.name}! Vi seu interesse em ${lead.service}. Quero entender melhor o que você precisa para preparar uma proposta.`;
    const number = import.meta.env.VITE_WHATSAPP_NUMBER || "";
    const url = number
      ? `https://wa.me/${number}?text=${encodeURIComponent(text)}`
      : `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="app">
      <header className="nav">
        <button className="brand" onClick={() => setPage("home")}>
          <span className="brand-mark">N</span>
          <span>NegocioCerto<span className="dot">.AI</span></span>
        </button>
        <nav>
          <button onClick={() => setPage("home")}>Início</button>
          <button onClick={() => setPage("dashboard")}>Dashboard</button>
          <button className="nav-cta" onClick={() => setPage("new")}>+ Nova oportunidade</button>
        </nav>
      </header>

      {notice && <div className="notice">{notice}<button onClick={() => setNotice("")}>×</button></div>}

      {page === "home" && (
        <main>
          <section className="hero">
            <div className="hero-copy">
              <span className="eyebrow">IA para pequenos negócios</span>
              <h1>Não deixe um pedido de orçamento virar uma oportunidade perdida.</h1>
              <p>
                Organize seus leads, descubra o próximo passo e gere uma primeira
                resposta comercial com ajuda de IA.
              </p>
              <div className="actions">
                <button className="primary" onClick={() => setPage("new")}>Cadastrar oportunidade</button>
                <button className="secondary" onClick={() => setPage("dashboard")}>Ver demonstração</button>
              </div>
              <div className="proof">
                <span>✓ Simples</span>
                <span>✓ WhatsApp no fechamento</span>
                <span>✓ IA como copiloto</span>
              </div>
            </div>
            <div className="hero-card">
              <div className="mini-top"><span>Oportunidades</span><span className="live">● ao vivo</span></div>
              <div className="metric-row"><strong>{stats.total}</strong><span>leads no painel</span></div>
              <div className="lead-mini">
                <div><span className="avatar">AP</span><div><b>Ana Paula</b><small>Fotografia de casamento</small></div><span className="pill hot">Quente</span></div>
                <p>IA sugere: <b>enviar proposta</b></p>
              </div>
              <div className="lead-mini">
                <div><span className="avatar purple">CM</span><div><b>Carlos Mendes</b><small>Identidade visual</small></div><span className="pill">Análise</span></div>
                <p>IA sugere: <b>perguntar prazo</b></p>
              </div>
            </div>
          </section>

          <section className="section">
            <span className="eyebrow">Como funciona</span>
            <h2>Do pedido de orçamento ao próximo passo.</h2>
            <div className="steps">
              {[
                ["01", "Cadastre", "Registre o pedido em poucos campos."],
                ["02", "Qualifique", "A IA organiza informações e aponta lacunas."],
                ["03", "Aja", "Receba uma sugestão e continue pelo WhatsApp."],
              ].map(([n,t,d]) => <article className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
            </div>
          </section>
        </main>
      )}

      {page === "new" && (
        <main className="page">
          <div className="page-heading">
            <span className="eyebrow">Nova oportunidade</span>
            <h1>Cadastre um pedido de orçamento</h1>
            <p>Comece com o que você já sabe. Os detalhes podem ser completados depois.</p>
          </div>
          <form className="form-card" onSubmit={submitLead}>
            <label>Nome do cliente<input value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Ex.: Ana Paula" /></label>
            <label>Serviço desejado<input value={form.service} onChange={e => setForm({...form, service:e.target.value})} placeholder="Ex.: Fotografia de casamento" /></label>
            <label>O que o cliente pediu?<textarea value={form.description} onChange={e => setForm({...form, description:e.target.value})} placeholder="Resuma a necessidade..." /></label>
            <div className="two">
              <label>Faixa de orçamento<input value={form.budget} onChange={e => setForm({...form, budget:e.target.value})} placeholder="Ex.: R$ 2.000" /></label>
              <label>Prazo desejado<input value={form.deadline} onChange={e => setForm({...form, deadline:e.target.value})} placeholder="Ex.: Outubro" /></label>
            </div>
            <button className="primary" type="submit">Criar oportunidade →</button>
          </form>
        </main>
      )}

      {page === "dashboard" && (
        <main className="page">
          <div className="page-heading row">
            <div><span className="eyebrow">Visão geral</span><h1>Seu pipeline comercial</h1><p>Um painel simples para saber o que merece atenção.</p></div>
            <button className="primary" onClick={() => setPage("new")}>+ Nova oportunidade</button>
          </div>
          <section className="stats">
            <div><small>Oportunidades</small><strong>{stats.total}</strong></div>
            <div><small>Quentes</small><strong>{stats.hot}</strong></div>
            <div><small>Follow-ups</small><strong>{stats.follow}</strong></div>
          </section>
          <section className="table-card">
            <div className="table-title"><h2>Leads recentes</h2><span>IA recomenda o próximo passo</span></div>
            {leads.map(lead => (
              <div className="lead-row" key={lead.id}>
                <span className="avatar">{lead.name.split(" ").map(x=>x[0]).slice(0,2).join("")}</span>
                <div className="lead-main"><b>{lead.name}</b><span>{lead.service}</span></div>
                <div className="lead-budget"><small>Orçamento</small><span>{lead.budget}</span></div>
                <span className={`pill ${lead.status === "Quente" ? "hot" : ""}`}>{lead.status}</span>
                <div className="next"><small>Próximo passo</small><b>{lead.next}</b></div>
                <button className="outline" onClick={() => whatsapp(lead)}>WhatsApp</button>
              </div>
            ))}
          </section>
        </main>
      )}
      <footer><span>NegocioCerto.AI</span><span>MVP • IA + Lovable • 2026</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
