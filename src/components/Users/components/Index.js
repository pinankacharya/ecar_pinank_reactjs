// import axios from "axios";

// const getData = () => {
//     axios.get(`http://localhost:4000/users`).then((res) => {
//         console.log(res.data);
//     });
// };
// const postData = (data) => {
//     axios.post(`http://localhost:4000/users`, data).then((res) => {
//         console.log(res);
//     });
// };

// const deleteData = () => {
//     var id;
//     axios.delete(`http://localhost:4000/users/${id}`).then((res) => {
//         console.log(res.status);
//         if (res.status === 204) {
//             alert("Deleted Successfully");
//         } else {
//             console.log("not deleted");
//         }
//     });
// };

// const putData = (data, id) => {
//     axios.put(`http://localhost:4000/users/${id}`, data).then((res) => {
//         if (res.status === 200) {
//             alert("Updated Successfully");
//             console.log(res.data);
//         } else {
//             console.log("not updated");
//         }
//     });
// };

// export { getData, postData, deleteData, putData };
