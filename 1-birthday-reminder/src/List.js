import React from "react";

const List = (props) => {
  const { people } = props;
  console.log(people);
  return (
    <>
      <h2>list component</h2>
      <ul>
        {people.map((item) => {
          const { id, name, age, image } = item;
          return (
            <li className="person" key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
