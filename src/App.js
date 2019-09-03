import React from "react";
import { Form, Input, Select, FileInput, Scope } from "@rocketseat/unform";

import * as Yup from "yup";
import ManipuleData from "./ManipuleData";

const App = () => {
  const handleSubmit = data => {
    console.log(data);
  };
  const handleProgress = (progress, event) => {
    console.log(progress, event);
  };

  const options = [
    { id: "react", title: "ReactJS" },
    { id: "node", title: "NodeJS" },
    { id: "rn", title: "React Native" }
  ];

  const initialData = {
    name: "John Doe",
    address: {
      street: "Sample Avenue"
    }
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Custom invalid email message")
      .required("Custom required message"),
    password: Yup.string()
      .min(4)
      .required()
  });
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h1>Default</h1>
        <Input name="email" />
        <Input name="password" type="password" />
        <button type="submit">Sign in</button>
        <h1>Multiline</h1>
        <Input name="name" />
        <Input multiline name="bio" />
        <button type="submit">Send</button>
        <h1>Select</h1>
        <Select name="tech" options={options} />
        <button type="submit">Send</button>
        <h1>Select</h1>
        <FileInput name="attach" onStartProgress={handleProgress} />
        <button type="submit">Send</button>
        <h1>Choice</h1>
        no export :(
        <h1>Check</h1>
        no export :(
      </Form>

      <h1>Nested fields</h1>
      <Form onSubmit={handleSubmit}>
        <Input name="name" />

        <Scope path="address">
          <Input name="street" />
          <Input name="number" />
        </Scope>

        <button type="submit">Save</button>
      </Form>

      <h1>Initial Data</h1>
      <Form onSubmit={handleSubmit} initialData={initialData}>
        <Input name="name" />

        <Scope path="address">
          <Input name="street" />
          <Input name="number" />
        </Scope>

        <button type="submit">Save</button>
      </Form>

      <h1>Validation</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" />
        <Input name="password" type="password" />

        <button type="submit">Save</button>
      </Form>

      <h1>Manipule Data</h1>
      <ManipuleData />

      <h3>React select e React datepicker Sao opcoes se usaremos unform</h3>
    </>
  );
};

export default App;
