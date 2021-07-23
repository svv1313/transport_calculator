import React from "react";
import Form from "../../shared/form";
import InputField from "../../shared/input_field";
import { useFormik } from "formik";
import * as yup from "yup";
import i18next from "i18next";
import { Button, Grid } from "@material-ui/core";
import { getRandomMileageList } from "../../helper";

interface TransportData {
    privMileageCounter: number;
    newMileageCounter: number;
    dayCounter: number;
}

const TransportCalculatorForm = () => {
  const validationSchema = yup.object({
    privMileageCounter: yup
      .number()
      .required(i18next.t("error_message_required")),
    newMileageCounter: yup
      .number()
      .required(i18next.t("error_message_required")),
    dayCounter: yup.number().required(i18next.t("error_message_required")),
  });

  const onSubmit = (data: TransportData) => {
    const { privMileageCounter, newMileageCounter, dayCounter } = data;
    const diffMileage = newMileageCounter - privMileageCounter;
    const milageList = getRandomMileageList(diffMileage, dayCounter);
    const sum = milageList.reduce((acc, item) => (acc += item), 0);
    console.log(sum, milageList);
  };

  const formik = useFormik({
    initialValues: {
      privMileageCounter: 0,
      newMileageCounter: 0,
      dayCounter: 0,
    },
    validationSchema,
    onSubmit,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Grid container spacing={4}>
        <Grid item lg={4}>
          <InputField
            fullWidth
            id="privMileageCounter"
            name="privMileageCounter"
            label={i18next.t("text_field_label_privMileageCounter")}
            type="number"
            value={formik.values.privMileageCounter}
            onChange={formik.handleChange}
            error={
              formik.touched.privMileageCounter &&
              !!formik.errors.privMileageCounter
            }
            helperText={
              formik.touched.privMileageCounter &&
              formik.errors.privMileageCounter
            }
          />
        </Grid>
        <Grid item lg={4}>
          <InputField
            fullWidth
            id="newMileageCounter"
            name="newMileageCounter"
            label={i18next.t("text_field_label_newMileageCounter")}
            type="number"
            value={formik.values.newMileageCounter}
            onChange={formik.handleChange}
            error={
              formik.touched.newMileageCounter &&
              !!formik.errors.newMileageCounter
            }
            helperText={
              formik.touched.newMileageCounter &&
              formik.errors.newMileageCounter
            }
          />
        </Grid>
        <Grid item lg={4}>
          <InputField
            fullWidth
            id="dayCounter"
            name="dayCounter"
            label={i18next.t("text_field_label_dayCounter")}
            type="number"
            value={formik.values.dayCounter}
            onChange={formik.handleChange}
            error={formik.touched.dayCounter && !!formik.errors.dayCounter}
            helperText={formik.touched.dayCounter && formik.errors.dayCounter}
          />
        </Grid>

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Grid>
    </Form>
  );
};

export default TransportCalculatorForm;
