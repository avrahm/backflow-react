import LocationBlogItem from "../../Components/BlogItems/LocationBlogItem";
import ServicesBlogItem from "../../Components/BlogItems/ServicesBlogItem";

import BackflowDiagramImg from "../../images/backflow-diagram.png";

export default function WhatIsBackflow() {
  return (
    <main role="main" className="container">
      <div className="main">
        <div className="col-md-12">
          <h1>What is Backflow?</h1>

          <p>
            Backflow is the unintended flow of untreated, polluted, or
            contaminated water in a reverse direction . That would be from an
            end user back into the water distribution system. This distribution
            system could be the public water supply or the plumbing in your
            business or home.
          </p>

          <p>
            There are two types of backflow, back-siphonage and back-pressure.
          </p>

          <ul>
            <li>
              Back-siphonage occurs when a drop in pressure happens on the
              upstream side of a cross-connection. The pressure drop could be
              caused by firemen opening a hydrant or a water main breaking,
              among others.
            </li>
            <li>
              Back-pressure is when the pressure downstream, towards the end
              user, of the service connection becomes greater than that
              supplied. It is possible for this to happen when a pump is used to
              transfer fluids, a hot water heater or boiler malfunctioning or an
              elevated storage tank.
            </li>
          </ul>

          <p>
            These examples aren't dangerous until a "cross-connection" exist.
            Backflow Preventers are a special type of control valve and have
            special requirements for their installation and use. If installed
            and maintained properly a backflow preventer assembly will prevent
            both types of backflow protecting your drinking water from
            contamination.
          </p>

          <hr className="water-hr" />

          <center>
            <img src={BackflowDiagramImg} style={{width: '95%'}} alt="BackFlow Diagram" />
          </center>

          <hr className="water-hr" />
          <p>There are four types of approved backflow preventers:</p>
          <p>
            <b>Reduced Pressure Zone Assembly</b>: Designed to protect against
            both back-pressure and back-siphonage by keeping the water pressure
            lower than the supply water pressure. A RPZ is used to protect
            against high level health hazards that could cause illness or even
            death if the contaminate was consumed.
          </p>
          <p>
            <b>Pressure Vacuum Breaker</b>: Will protect against back-siphonage
            only and therefore may not be used where there is any chance of back
            pressure. Usually installed out doors or where there is adequate
            drains due to it's design. When pressure is applied it will spill a
            small amount of water as it activates.
          </p>
          <p>
            {" "}
            <b>Spill Resistant Vacuum Breaker</b>: Very simular to the pressure
            vacuum breaker the SVB is designed not to spill water and therefore
            may be used indoors reducing the need for freeze protection.
          </p>
          <p>
            <b>Double Check Valve Assembly</b>: The DCVA is the most common type
            of backflow preventer. Used on landscape irrigation systems it
            provides protection against both back-pressure and back-siphonage
            and is the only assembly that may be installed below the surface
            grade. Being installed below grade reduces the need for freeze
            protection in areas that are subject to very cold weather. The DCVA
            may only be used on systems with a low heath hazard, that is if the
            device fails the pollutant will not cause illness or death.
          </p>
        </div>

        <hr className="water-hr" />

        <div className="row mb-2">
          <ServicesBlogItem />
          <LocationBlogItem />
        </div>
      </div>
    </main>
  );
}
