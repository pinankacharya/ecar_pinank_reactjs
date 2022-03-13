import React from "react";
import { useFormik } from "formik"; // form handling
import * as Yup from "yup"; // js schema validation
import "./Homestyle.css";

import TextField from "@mui/material/TextField";

import ECAR_BACKEND_CALL from "../../services/http.axios";

const CARSELECT_SCHEMA = Yup.object().shape({
    pickup: Yup.string().required("Required"),
    drop: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    time: Yup.string().required("Required"),
    type: Yup.string().required("Required"),
});

const CarSelectForm = () => {
    const formik = useFormik({
        initialValues: {
            pickup: "Platform",
            drop: "",
            date: "",
            time: "",
            type: "XUV",
        },
        validationSchema: CARSELECT_SCHEMA,
        onSubmit: (values) => {
            ECAR_BACKEND_CALL(
                "",
                "POST",
                {
                    "content-type": "application/json",
                },
                values
            )
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label id htmlFor="pickup">
                Pickup
            </label>
            <select name="pickup" id="pickup" value={formik.values.pickup} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="Self">Self</option>
                <option value="Platform">Platform</option>
            </select>
            {formik.errors.pickup && formik.touched.pickup ? <p>{formik.errors.pickup}</p> : null}

            {/* <div className="Drop"> */}
            <label htmlFor="drop">Drop</label>
            <input type="text" name="drop" id="drop" value={formik.values.drop} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.drop && formik.touched.drop ? <p>{formik.errors.drop}</p> : null}
            {/* </div> */}

            {/* <div className="Date"> */}
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.date && formik.touched.date ? <p>{formik.errors.date}</p> : null}
            {/* </div> */}

            {/* <div className="Time"> */}
            <label htmlFor="time">Time</label>
            <input type="time" name="time" id="time" value={formik.values.time} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.time && formik.touched.time ? <p>{formik.errors.time}</p> : null}
            {/* </div> */}

            {/* <div className="Cartype"> */}
            <label htmlFor="type">Car Type</label>
            <select name="type" id="type" value={formik.values.type} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="XUV">XUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Small">Small</option>
            </select>
            {formik.errors.type && formik.touched.type ? <p>{formik.errors.type}</p> : null}
            {/* </div> */}

            <input type="submit" value="Submit" />
        </form>
    );
};

export default CarSelectForm;
