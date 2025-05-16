import React from 'react';
export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: "url('https://myersparkpres.org/wp-content/uploads/2023/05/Sanctuary-Worship_web.jpg')", backgroundSize:'cover', backgroundPosition:'center', color:'#fff', textAlign:'center', padding:'5rem 1rem', position:'relative' }}>
      <div style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.6)' }} />
      <div className="hero-content" style={{ position:'relative', maxWidth:'800px', margin:'0 auto' }}>
        <h1 style={{ fontSize:'3rem', marginBottom:'1.5rem' }}>Explorando la Teología Reformada</h1>
        <p style={{ fontSize:'1.2rem', marginBottom:'2rem', color:'var(--color-light)' }}>Un repositorio de artículos, libros y recursos para profundizar en la comprensión de las doctrinas reformadas y la fe histórica de la iglesia.</p>
        <a href="/articulos" className="btn btn-primary">Explorar Artículos</a>
      </div>
    </section>
  );
}