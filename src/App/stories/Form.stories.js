import React from "react";
import { View, Text } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { BufferView } from "./decorators";
import { Form } from "../components/Form";
import FieldWrapper from "../components/Form/FieldWrapper";

//Form stories
storiesOf("Form", module)
  .addDecorator(BufferView)
  .add("default", () => (
    <Form>
      <View style={{ flex: 1, backgroundColor: "#e6e6e6" }} />
    </Form>
  ))
  .add("with header", () => (
    <Form header="Hello.">
      <View style={{ flex: 1, backgroundColor: "#e6e6e6" }} />
    </Form>
  ))
  .add("with header and subheader", () => (
    <Form
      header="Hello."
      subheader="Welcome back. Kindly enter your login details"
    >
      <View style={{ flex: 1, backgroundColor: "#e6e6e6" }} />
    </Form>
  ));

//FieldWrapper stories
  storiesOf("FieldWrapper", module)
  .addDecorator(BufferView)
  .add("default", () => (
    <FieldWrapper>
      <Text>Hello, wrapper</Text>
    </FieldWrapper>
  ))
  .add("error message", () => (
    <FieldWrapper
      label="Email"
      message="Please enter a valid email!"
      messageType="error"
    >
      <Text>Hello, wrapper</Text>
    </FieldWrapper>
  ))
  .add("success message", () => (
    <FieldWrapper label="Email" message="Looks legit!" messageType="success">
      <Text>Hello, wrapper</Text>
    </FieldWrapper>
  ))
  .add("multiple fields", () => (
    <React.Fragment>
      <FieldWrapper>
        <Text>Hello, wrapper</Text>
      </FieldWrapper>
      <FieldWrapper
        label="Email"
        message="Please enter a valid email!"
        messageType="error"
      >
        <Text>Hello, wrapper</Text>
      </FieldWrapper>
      <FieldWrapper label="Email" message="Looks legit!" messageType="success">
        <Text>Hello, wrapper</Text>
      </FieldWrapper>
    </React.Fragment>
  ));


