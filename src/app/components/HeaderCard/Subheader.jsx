export const Subheader = ({title, description}) => (
    <div className="block-header">
      <div className="row">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <h2>
            {title}
            <small className="text-muted">{description}</small>
          </h2>
        </div>
      </div>
    </div>
  );