import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function About() {
  return (
    <Card>
      <div className="about">
        <h1> this is about page</h1>
      </div>
      ;
      <p>
        <Link to={"/"}>Back to Home</Link>
      </p>
    </Card>
  );
}
export default About;
