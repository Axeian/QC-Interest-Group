import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [people, setPeople] = useState([]);
  const [peoplePic, setPeoplePics] = useState([]);
  const [peopleLoaded, setPeopleLoaded] = useState(false);

  useEffect(() => {
    const getPeople = async () => {
      const requestPeopleData = axios.get(
        "https://jsonplaceholder.typicode.com/users/?_limit=7"
      );
      const requestPeoplePic = axios.get(
        "https://jsonplaceholder.typicode.com/photos/?_limit=7"
      );

      axios.all([requestPeopleData, requestPeoplePic]).then(
        axios.spread((...responses) => {
          setPeople(responses[0].data);
          setPeoplePics(responses[1].data);
          setPeopleLoaded(true);
        })
      );
    };

    getPeople();
  }, []);

  return (
    peopleLoaded && (
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {people.map((p, idx) => (
            <div key={idx} className="col mb-5">
              <div className="card h-100">
                <img
                  src={`${peoplePic[idx].url}`}
                  className="card-img-top"
                  alt="..."
                  height="300px"
                  width="300px"
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.company.bs + " " + p.company.catchPhrase}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default About;
