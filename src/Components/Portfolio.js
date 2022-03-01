import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import { Button } from "react-bootstrap";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap" >
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center",fontWeight:"bold" }}>{projects.title}</div>
            <div id="projectDescription" style={{padding:"10px"}}>{projects.category}</div>
            <div style={{paddingLeft:"25%",paddingRight:"25%"}}>
            <Button href={projects.url} style={{display:"inline-block",paddingRight:"20px"}}>view demo</Button>
            <Button size="lg" href={projects.source} style={{display:"inline-block"}}>view source</Button>
            </div>

          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Work</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-halves cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
