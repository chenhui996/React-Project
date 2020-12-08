import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Nav from "./Nav";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const getTours = await response.json();
      setLoading(false);
      setTours(getTours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Nav />
        <Loading />
      </main>
    );
  } else if (tours.length === 0) {
    return (
      <main>
        <Nav />
        <div className="title">
          <h2>没有旅游了</h2>
          <button
            className="btn"
            onClick={() => {
              fetchTours();
            }}
          >
            重新获取
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Nav />
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
