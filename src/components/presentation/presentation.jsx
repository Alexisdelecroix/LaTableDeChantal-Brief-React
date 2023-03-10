import React from "react";
import restaurant from "../../images/restaurant.jpg";
import chef from "../../images/chef.jpg";
import "./presentationStyle.css";

export default function Presentation() {
  return (
    <article>
      <div className="conteneur-presentation">
        <div className="conteneurimg">
          <img src={restaurant} alt="" />
        </div>

        <div className="conteneurtext">
          <h3>Le restaurant</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus natus consectetur corporis magnam nobis et, nihil
            alias, provident tempora numquam eligendi accusantium rem vel.
            Delectus nesciunt labore nemo cumque ducimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus natus consectetur corporis magnam nobis et, nihil
            alias, provident tempora numquam eligendi accusantium rem vel.
            Delectus nesciunt labore nemo cumque ducimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus natus consectetur corporis magnam nobis et, nihil
            alias, provident tempora numquam eligendi accusantium rem vel.
            Delectus nesciunt labore nemo cumque ducimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus natus consectetur corporis magnam nobis et, nihil
            alias, provident tempora numquam eligendi accusantium rem vel.
            Delectus nesciunt labore nemo cumque ducimus?
          </p>
        </div>
      </div>
      <div className="conteneur-presentation">
        <div className="conteneurimg">
          <img src={chef} alt="" />
        </div>

        <div className="conteneurtext">
          <h3>Le chef</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus natus consectetur corporis magnam nobis et, nihil
            alias, provident tempora numquam eligendi accusantium rem vel.
            Delectus nesciunt labore nemo cumque ducimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus natus consectetur corporis magnam nobis et, nihil
            alias, provident tempora numquam eligendi accusantium rem vel.
            Delectus nesciunt labore nemo cumque ducimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus natus consectetur corporis magnam nobis et, nihil
            alias, provident tempora numquam eligendi accusantium rem vel.
            Delectus nesciunt labore nemo cumque ducimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus natus consectetur corporis magnam nobis et, nihil
            alias, provident tempora numquam eligendi accusantium rem vel.
            Delectus nesciunt labore nemo cumque ducimus?
          </p>
        </div>
      </div>
    </article>
  );
}
