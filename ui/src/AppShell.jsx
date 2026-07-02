import React from 'react';
import GlobalSearch from './GlobalSearch.jsx';

export default function AppShell({ t, route, onNav, live, onSearch, children }) {
  const links = [
    ['home', 'Home'], ['system', 'System Design'],
    ['interface', 'Interface 360'], ['api', 'API 360'],
    ['data', 'Data 360'], ['datapoint', 'Datapoint 360'], ['pii', 'PII Explorer'],
    ['search', 'Search'],
  ];
  const submitSearch = (val) => {
    const v = (val || "").trim();
    if (!v) return;
    window.location.hash = `search?q=${encodeURIComponent(v)}`;
    if (onSearch) onSearch(v);
  };
  return (
    <div style={{ minWidth: t.minWidth, minHeight: '100vh', background: t.bg,
      color: t.text, fontFamily: t.font }}>
      <div style={{ height: 56, background: t.navy, color: '#fff', display: 'flex',
        alignItems: 'center', padding: '0 30px', gap: 20 }}>
        <div style={{ width: 32, height: 32, borderRadius: t.radius.md, background: t.pop,
          display: 'grid', placeItems: 'center', color: t.navy, fontWeight: 700, fontSize: 15 }}>CP</div>
        <div><b style={{ fontSize: 16, fontWeight: 500 }}>CP Catalog</b>
          <span style={{ color: '#8fa6c4', fontSize: 11, marginLeft: 8 }}>
            Brown Brothers Harriman &middot; Capital Partners</span></div>
        <span style={{ marginLeft: 6, fontSize: 10, fontWeight: 700, padding: '3px 9px',
          borderRadius: t.radius.pill,
          color: live ? '#bfe' : '#fc9', background: live ? 'rgba(21,153,67,0.25)' : 'rgba(230,126,34,0.25)' }}>
          {'\u25CF'} {live ? 'LIVE' : 'DEMO'}</span>
        <input placeholder="Search all modules…  (press Enter)"
          onKeyDown={(e) => { if (e.key === "Enter") submitSearch(e.target.value); }}
          style={{ marginLeft: 16, width: 280, height: 32, borderRadius: t.radius.pill,
            border: "none", outline: "none", padding: "0 14px", fontSize: 13, fontFamily: t.font,
            background: "rgba(255,255,255,0.14)", color: "#fff" }} />
        <nav style={{ marginLeft: 'auto', display: 'flex', gap: 5 }}>
          {links.map(([k, l]) => (
            <a key={k} onClick={() => onNav(k)} style={{
              color: route === k ? '#fff' : '#c5d2e4', fontSize: 13, fontWeight: 500,
              padding: '7px 14px', borderRadius: t.radius.sm, cursor: 'pointer',
              background: route === k ? t.accent : 'transparent' }}>{l}</a>
          ))}
        </nav>
      </div>
      <div style={{ padding: '30px 40px 60px', maxWidth: 1500, margin: '0 auto' }}>
        {children}
      </div>
    </div>
  );
}

export function SectionHeader({ t, children }) {
  return (
    <h1 style={{ fontSize: 24, fontWeight: 500, color: t.accent,
      borderBottom: `2px solid ${t.accent}`, paddingBottom: 15, margin: '0 0 30px' }}>
      {children}</h1>
  );
}
