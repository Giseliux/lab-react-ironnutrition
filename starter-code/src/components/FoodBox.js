import React from 'react';

function FoodBox({ name, calories, image, quantity , handleClick ,buttonAzul}) {
  


  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} Cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input onChange={handleClick} type="number" className="input" value={quantity} />
            </div>
            <div className="control">
              <button onChange={buttonAzul(name)}  className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default FoodBox