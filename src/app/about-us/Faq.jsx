/* eslint-disable react/no-unescaped-entities */

"use client";

import Accordion from "react-bootstrap/Accordion";

const Methodology = () => {
  return (

      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Methodology</h2>
        </div>
        <div className="zubuz-accordion-wrap zubuz-accordion-wrap2">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                 Clarify    </Accordion.Header>
              <Accordion.Body>
               <p className="text-sm leading-loose  open-sans">An essential part of the process, this is where we learn about your company, how you work, and your short and long-term goals whilst making ourselves aware of all factors that can affect your business needs. We work closely with you to agree business objectives and how these will be met. We'll also define the project scope, the budget and how the success of the project will be measured. We'll be your business consultants.  </p>    </Accordion.Body></Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
              Specify   </Accordion.Header>
              <Accordion.Body>
                      <p className="text-sm leading-loose  open-sans">Having agreed to your business objectives, the next stage involves establishing exactly what your solution will be and we build this into a detailed specification, encompassing the target audiences, functionality, technical deliverables and creative design. We would expect to discuss and refine it until a solution is arrived at that suits your requirements.</p>

       </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
              Design and Build   </Accordion.Header>
              <Accordion.Body>
                  <p className="text-sm leading-loose  open-sans">Working from the specification, we design and build the solution, developing the brand, and functionality of your project. Quality Assurance will be evaluated on the work done, and this will allow users and client to view the progress throughout the stage of the design. When you are satisfied with the design of the basic structure we can move onto the next stage.        </p>    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
               Implement  </Accordion.Header>
              <Accordion.Body>
                <p className="text-sm leading-loose  open-sans"> We now build the final product, marrying all the parts into one complete solution. If required, we can integrate the solution into your own in-house systems ready for the launch. The project deliverables are all thoroughly tested and quality assured again before the launch and you'll receive any training required managing and maintaining it.
   </p> </Accordion.Body>
            </Accordion.Item>
                <Accordion.Item eventKey="4">
              <Accordion.Header>
              Enhance  </Accordion.Header>
              <Accordion.Body>
                <p className="text-sm leading-loose  open-sans">Absolutely. We understand the importance of seamless
                integration. Our SaaS solution is designed to work harmoniously
                with a variety of popular tools and platforms, ensuring a smooth
                workflow and reducing any disruptions to your current processes.</p> 
              </Accordion.Body>
            </Accordion.Item>
          
          </Accordion>
        </div>
      </div>

  );
};

export default Methodology;
