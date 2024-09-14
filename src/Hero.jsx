import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            I'm baby hoodie intelligentsia cray humblebrag. Banh mi DSA
            vaporware, live-edge thundercats gochujang post-ironic bodega boys
            tonx. Cold-pressed glossier vaporware helvetica tofu keytar
            lumbersexual edison bulb pug vegan neutra grailed kale chips
            snackwave chartreuse.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser " className="img"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
