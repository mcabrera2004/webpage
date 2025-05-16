import React, { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ backgroundColor: 'var(--color-primary)', color: '#fff', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" className="logo" style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>Sola Scriptura</a>
        <button className="nav-toggle" onClick={() => setOpen(!open)}>☰</button>
        <nav className={`main-nav ${open ? 'active' : ''}`}> 
          <ul style={{ display: 'flex', listStyle: 'none' }}>
            {['Inicio','Artículos','Libros','Estudios','Recursos','Acerca de'].map(item => (
              <li key={item} style={{ marginLeft: '1.5rem' }}><a href={`/${item.toLowerCase().replace(/ /g,'')}`} style={{ color:'#fff', fontFamily:'var(--font-sans)', fontWeight:600, fontSize:'1rem', textTransform:'uppercase', letterSpacing:'0.5px' }}>{item}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}