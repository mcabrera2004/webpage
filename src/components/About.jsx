import React from 'react';
export default function About() {
  return (
    <section className="about" style={{ padding:'4rem 0' }}>
      <div className="container">
        <h2 className="section-title">Quiénes Somos</h2>
        <div className="about-content" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'center' }}>
          <div className="about-text">
            <p>Sola Scriptura es un ministerio dedicado a la promoción y difusión de la teología reformada en el mundo hispanohablante. Nuestro objetivo es proporcionar recursos sólidos y bíblicos para la edificación de la iglesia y la formación teológica de creyentes.</p>
            <p>Creemos en la autoridad suprema de las Escrituras, la soberanía de Dios en la salvación, y la centralidad de Cristo en toda la teología. Trabajamos para traducir y producir contenido que ayude a los cristianos a profundizar en estas verdades.</p>
            <a href="/acerca" className="btn btn-primary" style={{ marginTop: '1rem' }}>Conocer Más</a>
          </div>
          <div className="about-img" style={{ height:'100%', minHeight:'300px', backgroundImage:"url('https://proyectoevanggelio.org/wp-content/uploads/19-de-abril-.jpg)", backgroundSize:'cover', backgroundPosition:'center', borderRadius:'8px' }} />
        </div>
      </div>
    </section>
  );
}