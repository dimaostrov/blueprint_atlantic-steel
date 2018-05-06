import React from "react";
import { Card, Elevation, Button, FormGroup, Colors } from "@blueprintjs/core";

const Contact = () => (
  <Card
    interactive={true}
    elevation={Elevation.FOUR}
    className="section"
    style={{ background: Colors.GRAY4 }}
  >
    <h1>Contact Us</h1>
    <FormGroup
      helperText="Helper text with details..."
      label="Label A"
      labelFor="text-input"
      requiredLabel={true}
    >
      <input id="text-input" placeholder="Placeholder text" />
    </FormGroup>
  </Card>
);

export default Contact;
