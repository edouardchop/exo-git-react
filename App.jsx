import "./styles.css";
import Button from "./components/button";
import List from "./components/listcomp";
import Input from "./components/form";
import { useCallback, useState } from "react";
import { valtab, buttonvalue } from "./initial";
import { Formik, Form } from "formik";

export default function App() {
  const [item, setItem] = useState([]);
  const callback = useCallback(
    async ({ nom, color, age, date, password }, { resetForm }) => {
      setItem((item) => [...item, [nom, color, age, date, password]]);
      resetForm();
      return;
    },
    []
  );

  return (
    <>
      <Formik initialValues={valtab} onSubmit={callback}>
        {({ isSubmitting, isValid }) => (
          <Form className="flex flex-col gap-4 p-4">
            <Input name="nom" type="text" />
            <Input name="color" type="color" />
            <Input name="age" type="number" />
            <Input name="date" type="date" />
            <Input name="password" type="password" />
            <Button
              active={isSubmitting || !isValid}
              value={buttonvalue}
              type="submit"
              className="p-4 first:border-t border-b"
            />
          </Form>
        )}
      </Formik>
      <List content={item} className="p-4 first:border-t border-b" />
    </>
  );
}
