export default function ServicesCard({ service }) {
  return (
    <div className="col-sm-2 col-md-3 m-2">
      <div className="servicesCard text-center">
        <h4 className=" mb-md-3 mb-sm-5">{service.title}</h4>
        <p>{service.description}</p>
      </div>
    </div>
  );
}
