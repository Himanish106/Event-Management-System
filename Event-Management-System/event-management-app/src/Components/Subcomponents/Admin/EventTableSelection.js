import React, { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import "../../CSS/ServiceBrief.css";
import "../../CSS/EventSelection.css";
import { Link } from "react-router-dom";
const EventTableSelection = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#292827",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <CirclesWithBar
            height="250"
            width="200"
            color=" var(--emphasis-text)"
            outerCircleColor="var( --theme-color)"
            innerCircleColor="var(--emphasis-text)"
            barColor="var(--text-color)"
            ariaLabel="circles-with-bar-loading"
            visible={true}
          />
        </div>
      ) : (
        <section className="pricing event-selection">
          <h1 className="event-selection-heading">
           Preview Events
          </h1>
          <div className="events select-event">
            <div className="private-event event-private">
              <h3 className="title">Private Events</h3>
              <h3 className="amount">
                Click to view <span className="col">Private Events</span>
              </h3>
              <Link to="/privateeventtable" className="btn">
                check out
              </Link>
            </div>
            <div className="public-event event-public">
              <h3 className="title">Public Events</h3>
              <h3 className="amount">
                Click to view <span className="col">Public Events</span>
              </h3>
              <Link to="/publiceventtable" className="btn">
                check out
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default EventTableSelection;
