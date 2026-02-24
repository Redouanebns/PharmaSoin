export default function Baner() {
  return (
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide carousel-dark carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="img/img1.jpeg" className="d-block w-100" alt="one" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Des soins pharmaceutiques de confiance</h5>
            <p className="text-dark">
              De la délivrance des ordonnances aux médicaments sans
              prescription, nous proposons une gamme complète de produits de
              santé adaptés à vos besoins.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/img2.jpeg" className="d-block w-100 " alt="two" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Votre santé, notre priorité</h5>
            <p>
              Nous nous engageons à fournir des médicaments sûrs, fiables et de
              haute qualité afin de soutenir votre bien-être au quotidien. Notre
              équipe vous garantit un service professionnel et digne de
              confiance.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/img3.jpeg" className="d-block w-100" alt="three" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Conseils d’experts et accompagnement personnalisé</h5>
            <p>
              Nos pharmaciens qualifiés sont toujours disponibles pour vous
              guider avec les traitements appropriés, les conseils de dosage et
              les recommandations de santé.
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
