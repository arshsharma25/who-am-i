import React from "react";

const Article = (props) => {
  return (
    <article className="experience__details">
      <div>
          <ul class="skills">
            <li class="box">{props.name}</li>
          </ul>
      </div>
    </article>
  );
};

export default Article;
