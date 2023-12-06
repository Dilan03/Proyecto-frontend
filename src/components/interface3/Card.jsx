import React from 'react';

const Card = (props) => {

  return(
    <div class="col">
        <div class="card">
            <img src={props.imagen} class="card-img-top" alt="..." style={{ width: "364px", height: "260px" }} />
            <div class="card-body">
                <h5 class="card-title">{props.nombre}:</h5>
                <p class="card-text">{props.descripcion}</p>
                <a href="#" class="btn btn-primary">Ir a</a>
            </div>
        </div>
    </div>
  )
};

export default Card;