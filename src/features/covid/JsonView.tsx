import React from "react";
import Form from "@rjsf/material-ui";
import { JSONSchema7 } from "json-schema";

// import dataJson from "./data.json";
// import dataJsonDaily from "./dataDaily.json";
// type APIDATA = typeof dataJson;
// type APIDATADAILY = typeof dataJsonDaily;
const JsonView: React.FC = () => {
  const schema: JSONSchema7 = {
    type: "object",
    title: "Number fields & widgets",
    properties: {
      number: {
        title: "Number",
        type: "number",
      },
      integer: {
        title: "Integer",
        type: "integer",
      },
      numberEnum: {
        type: "number",
        title: "Number enum",
        enum: [1, 2, 3],
      },
      numberEnumRadio: {
        type: "number",
        title: "Number enum",
        enum: [1, 2, 3],
      },
      integerRange: {
        title: "Integer range",
        type: "integer",
        minimum: 42,
        maximum: 100,
      },
      integerRangeSteps: {
        title: "Integer range (by 10)",
        type: "integer",
        minimum: 50,
        maximum: 100,
        multipleOf: 10,
      },
    },
  };

  const formData = {
    number: 3.142,
    integer: 42,
    numberEnum: 2,
    integerRange: 42,
    integerRangeSteps: 80,
  };
  type FORMDATA = typeof formData;

  const uiSchema = {
    integer: {
      "ui:widget": "updown",
    },
    numberEnumRadio: {
      "ui:widget": "radio",
      "ui:options": {
        inline: true,
      },
    },
    integerRange: {
      "ui:widget": "range",
    },
    integerRangeSteps: {
      "ui:widget": "range",
    },
  };

  function handleChange({ formData }: { formData: FORMDATA }) {
    // 入力されたデータ
    console.log(formData);
  }

  function handleSubmit({ formData }: { formData: FORMDATA }) {
    // 入力されたデータ
    console.log(formData);
  }

  return (
    <>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default JsonView;
