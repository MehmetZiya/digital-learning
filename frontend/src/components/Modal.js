import "../scss/modal.scss";


const Modal = (props) => {
  
  return (
    <div className="modal-backdrop">
      <div className="modal-control">
        {props.headerName && (
          <header className="modal-header">{`${props.headerName} Info`}</header>
        )}
        <main>
          {props.data && (
            <p>{`${props.data.createUser.email} registered succesfully`}</p>
          )}
          {props.loading && <p> Loading... </p>}
          {props.error && <p> {props.error.message}</p>}
        </main>
        <button className="btn" onClick={props.onCloseModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
