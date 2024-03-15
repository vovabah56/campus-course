import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {URL_API} from "../../../helper/urlApi.js";
import {useGetApi} from "../../../api/getProfile.js";
import {useState} from "react";
import {axiosEditProfile} from "../../../api/editProfile.js";
import BirthDate from "../BirthDate.jsx";
import FullName from "../FullName.jsx";
import Email from "../Email.jsx";



const ProfilePage = ()=>{
    const [data, loading, error] = useGetApi(null, URL_API.PROFILE_URL);
    const [validated, setValidated] = useState(false);
    const [patchError, setErrors] = useState('');



    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setValidated(true);
            const errorText = await axiosEditProfile(event);
            setErrors(errorText);
        }
    };
    return(
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            {loading ? (
                <h2 className="text-center mt-4">Loading...</h2>
            ) : error ? (
                <h2 className="text-center mt-4">Что-то пошло не так.</h2>
            ) : (
                <Card className='w-75' style={{maxWidth:'33em'}}>
                    <Card.Body>
                        <Card.Title><h2>Профиль</h2></Card.Title>
                        <h6 className="text-danger mt-3">{patchError}</h6>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <FullName baseValue ={data.fullName}></FullName>
                            <Email baseValue={data.email}></Email>
                            <BirthDate baseValue={data.birthDate}></BirthDate>
                            <div className="d-grid mt-2 gap-2">
                                <Button type='submit' variant="primary">
                                    Сохранить
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>)}
        </div>

    );
}

export default ProfilePage;