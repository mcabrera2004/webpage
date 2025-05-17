import React from 'react';
export default function CTA() {
  return (
    <section className="cta animated-cta" style={{ color:'#fff', padding:'4rem 0', textAlign:'center' }}>
      <div className="container">
        <div className="cta-content" style={{ maxWidth:'700px', margin:'0 auto' }}>
          <h2>¿Quieres mantenerte actualizado?</h2>
          <p>Suscríbete a nuestro boletín semanal y recibe artículos, recursos y novedades directamente en tu correo.</p>
          <a href="#newsletter" className="btn btn-accent" style={{ marginTop: '1rem' }}>Suscribirse</a>
        </div>
      </div>
    </section>
  );
}