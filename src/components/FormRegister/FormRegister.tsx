import { useFormik } from "formik";
import * as yup from "yup";
import { Form, Modal } from "react-bootstrap";
import { AuthService } from "../../services/AuthService";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FormRegister: React.FC = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  {
    /*
  //almacenar las localidades que nos trae el servicio
  const [localidades, setLocalidades] = useState<Localidad[]>([]);

  
   //buscar las localidades
  useEffect(() => {
    const fetchLocalidades = async () => {
      try {
        const localidadesData = await LocalidadService.getAllLocalidades();
        setLocalidades(localidadesData);
      } catch (error) {
        console.error("Error al obtener las localidades", error);
      }
    };

    fetchLocalidades();
  }, []); */
  }

  // YUP - Esquema de validación
  const validationSchema = yup.object().shape({
    username: yup.string().required("Este campo es obligatorio"),
    password: yup.string().required("Este campo es obligatorio"),
    nombre: yup.string().required("El nombre es obligatorio"),
    apellido: yup.string().required("El apellido es obligatorio"),
    telefono: yup.string().required("El telefono es obligatorio"),
    mail: yup
      .string()
      .email("Formato de correo electrónico inválido")
      .required("Este campo es obligatorio"),
    calle: yup.string().required("La calle es obligatorio"),
    nroCalle: yup
      .number()
      .required("El nro de calle es obligatorio")
      .integer("Debe ser un número entero")
      .positive("Debe ser mayor a 0"),
    pisoDpto: yup
      .number()
      .integer("Debe ser un número entero")
      .positive("Debe ser mayor o igual a 0"),
    nroDpto: yup
      .number()
      .integer("Debe ser un número entero")
      .positive("Debe ser mayor o igual a 0"),
    idLocalidad: yup
      .number()
      .integer("Debe ser un número entero")
      .positive("Debe ser mayor o igual a 0"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      nombre: "",
      apellido: "",
      telefono: "",
      mail: "",
      calle: "",
      nroCalle: 0,
      pisoDpto: 0,
      nroDpto: 0,
      //idLocalidad: 0,
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const token = await AuthService.register(values);
        console.log("Registro realizado. Token:", token);
        toast.success("Registro realizado");
        navigate("/");
      } catch (error) {
        console.error("Error al registrarse");
      }
    },
  });

  const handleHide = () => {
    setShow(false);
  };

  return (
    <Modal
      show={show}
      onHide={handleHide}
      centered
      backdrop="static"
      className="modal-xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>Registrarse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          {/* Form.Group para cada campo para dar de alta o modificar un producto */}
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(
                formik.errors.username && formik.touched.username
              )}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(
                formik.errors.password && formik.touched.password
              )}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="nombre"
              type="text"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.nombre && formik.touched.nombre)}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.nombre}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              name="apellido"
              type="text"
              value={formik.values.apellido}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(
                formik.errors.apellido && formik.touched.apellido
              )}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.apellido}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="telefono">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              name="telefono"
              type="text"
              value={formik.values.telefono}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(
                formik.errors.telefono && formik.touched.telefono
              )}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.telefono}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="mail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="mail"
              type="text"
              value={formik.values.mail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.mail && formik.touched.mail)}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.mail}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="calle">
            <Form.Label>Calle</Form.Label>
            <Form.Control
              name="calle"
              type="text"
              value={formik.values.calle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.calle && formik.touched.calle)}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.calle}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="nroCalle">
            <Form.Label>Nro calle</Form.Label>
            <Form.Control
              name="nroCalle"
              type="text"
              value={formik.values.nroCalle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(
                formik.errors.nroCalle && formik.touched.nroCalle
              )}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.nroCalle}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="pisoDpto">
            <Form.Label>Piso dpto</Form.Label>
            <Form.Control
              name="pisoDpto"
              type="text"
              value={formik.values.pisoDpto}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(
                formik.errors.pisoDpto && formik.touched.pisoDpto
              )}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.pisoDpto}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="nroDpto">
            <Form.Label>Nro dpto</Form.Label>
            <Form.Control
              name="nroDpto"
              type="text"
              value={formik.values.nroDpto}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(
                formik.errors.nroDpto && formik.touched.nroDpto
              )}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.nroDpto}
            </Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group controlId="idLocalidad">
            <Form.Label>Localidad</Form.Label>

            <Dropdown
              onSelect={(selectedId: string | null) => {
                if (selectedId !== null) {
                  formik.setFieldValue("idLocalidad", parseInt(selectedId));
                }
              }}
            >
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {formik.values.idLocalidad === 0
                  ? "Seleccione una localidad"
                  : `Localidad ${formik.values.idLocalidad}`}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {localidades.map((localidad) => (
                  <Dropdown.Item
                    key={localidad.id}
                    eventKey={localidad.id.toString()}
                  >
                    {localidad.nombreLocalidad}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Form.Control.Feedback type="invalid">
              {formik.errors.idLocalidad}
            </Form.Control.Feedback>
          </Form.Group> */}

          <Modal.Footer className="mt-4">
            <Button variant="secondary" onClick={handleHide}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit" disabled={!formik.isValid}>
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormRegister;
