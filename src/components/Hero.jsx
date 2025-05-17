import React from 'react';

export default function Hero({ onMenuToggle }) {
  return (
    <section className="hero" style={{ 
      backgroundImage: "url('https://myersparkpres.org/wp-content/uploads/2023/05/Sanctuary-Worship_web.jpg')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      color: '#fff', 
      textAlign: 'center', 
      padding: '5rem 1rem', 
      position: 'relative'
    }}>
      <div style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.6)' }} />
      
      {/* Botón de menú - NO fixed */}
      <button 
        className="menu-toggle" 
        onClick={onMenuToggle} 
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '1.8rem',
          cursor: 'pointer'
        }}
      >
        ☰
      </button>
      
      {/* Contenido del hero */}
      <div className="hero-content" style={{ position:'relative', maxWidth:'800px', margin:'0 auto' }}>
        <h1 style={{ fontSize:'3rem', marginBottom:'1.5rem' }}>Explorando la Teología Reformada</h1>
        <p style={{ fontSize:'1.2rem', marginBottom:'2rem', color:'var(--color-light)' }}>Un repositorio de artículos, libros y recursos para profundizar en la comprensión de las doctrinas reformadas y la fe histórica de la iglesia.</p>
        
        <div className="hero-search-bar" style={{ display: 'flex' }}>
          <input 
            type="text" 
            placeholder="Buscar artículos, libros y recursos..." 
            className="hero-search-input" 
            style={{ 
              padding: '0.75rem', 
              border: 'none', 
              borderRadius: '4px 0 0 4px',
              width: '100%',
              fontSize: '1rem',
              height: '45px'
            }}
          />
          <button 
            type="submit" 
            className="btn btn-header"
            style={{
              backgroundColor: 'var(--color-secondary)',
              color: '#fff',
              borderRadius: '0 4px 4px 0',
              border: 'none',
              padding: '0 1.5rem',
              fontWeight: '600',
              cursor: 'pointer',
              height: '45px'
            }}
          >
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
}