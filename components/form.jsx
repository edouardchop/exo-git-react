import { Field } from "formik";

const form = (props) => {
  const { type, nom, classname } = props;
  return (
    <Field name={nom}>
      {({ field }) => (
        <input {...Field} name={nom} type={type} className={classname} />
      )}
    </Field>
  );
};

export default form;
