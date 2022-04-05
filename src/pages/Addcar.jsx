import React, { useState, useDispatch, useSelector } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
// import { addCar } from "../components/redux/actions/carsActions";

function Addcar() {
    const [name, setName] = useState("");
    const [platNumber, setPlatNumber] = useState("");
    const [ChasisNumber, setChasisNumber] = useState("");
    const [capacity, setCapacity] = useState("");
    const [price, setPrice] = useState("");

    async function Addcar(e) {
        // const dispatch = useDispatch();
        // const { loading } = useSelector((state) => state.alert.alertReducer);

        e.preventDefault();
        console.warn(name, platNumber, ChasisNumber, capacity, price);

        try {
            const { data, status } = await axios.post("http://localhost:4000/car", { name, platNumber, ChasisNumber, capacity, price });
            console.log(data.msg, status);
            if (status === 201) toast.success(data.msg);
            else toast.error(data.msg);
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    }

    return (
        <div className="Addcar">
            <Row justify="center mt-5">
                <Col lg={12} sm={24}>
                    <Form className="bs1 p-2" layout="vertical">
                        <Form.Item name="name" label="name" rules={[{ required: true }]}>
                            <Input value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Item>
                        <Form.Item name="PlatNumber" label="PlatNumber" rules={[{ required: true }]}>
                            <Input value={platNumber} onChange={(e) => setPlatNumber(e.target.value)} />
                        </Form.Item>
                        <Form.Item name="ChasisNumber" label="ChasisNumber" rules={[{ required: true }]}>
                            <Input value={ChasisNumber} onChange={(e) => setChasisNumber(e.target.value)} />
                        </Form.Item>
                        <Form.Item name="capacity" label="Capacity" rules={[{ required: true }]}>
                            <Input value={capacity} onChange={(e) => setCapacity(e.target.value)} />
                        </Form.Item>
                        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
                            <Input value={price} onChange={(e) => setPrice(e.target.value)} />
                        </Form.Item>
                        <br />

                        <div>
                            <Button className="btn1 mt-1 mb-3" onClick={Addcar}>
                                Addcar
                            </Button>

                            <ToastContainer />
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Addcar;
