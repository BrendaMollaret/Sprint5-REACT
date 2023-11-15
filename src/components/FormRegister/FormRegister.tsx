import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/AuthService';
import { toast } from 'react-toastify';
import { Container, Button } from 'react-bootstrap';


const FormRegister: React.FC = () => {

  const navigate = useNavigate();
  

  // YUP - Esquema de validación
  const validationSchema = Yup.object({

    username: Yup.string().required('Este campo es obligatorio'),
    password: Yup.string().required('Este campo es obligatorio'),    
    
    nombre: Yup.string().required("Este campo es obligatorio"),
    apellido: Yup.string().required("Este campo es obligatorio"),
    telefono: Yup.string().required("Este campo es obligatorio"),
    mail: Yup.string().email("Formato de correo electrónico inválido").required("Este campo es obligatorio"),
    
    calle: Yup.string().required("Este campo es obligatorio"),
    nroCalle: Yup.number().required("Este campo es obligatorio").integer("Debe ser un número entero").positive("Debe ser mayor a 0"),
    pisoDpto: Yup.number().integer("Debe ser un número entero").positive("Debe ser mayor o igual a 0"),
    nroDpto: Yup.number().integer("Debe ser un número entero").positive("Debe ser mayor o igual a 0"),
    idLocalidad: Yup.number().integer("Debe ser un número entero").positive("Debe ser mayor o igual a 0"),
  
  });

  const formik = useFormik({

    initialValues: {
      username: "",
      password: "",

      nombre: "",
      apellido: "",
      telefono: 0,
      mail: "",
      
      calle: "",
      nroCalle: 0,
      pisoDpto: 0,
      nroDpto: 0,

      idLocalidad: 0,
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const token = await AuthService.register(values);
        console.log("Registro realizado. Token:", token);
        navigate('/');
        toast.success('Registro realizado');
      } catch (error) {
        console.error("Error al registrarse");
       
      }
    },
  });
  
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Form onSubmit={formik.handleSubmit} className="w-50 p-4 border">
          {/* ----- username ----- */}
          <div className="mb-3 mt-1">
            <label htmlFor="username" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />

            {formik.touched.username && formik.errors.username ? (
              <div className="text-danger"> {formik.errors.username} </div>
            ) : null}
          </div>

          {/* ----- password ----- */}
          <div className="mb-3 mt-1">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />

            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger"> {formik.errors.password} </div>
            ) : null}
          </div>

           {/* ----- nombre ----- */}
           <div className="mb-3 mt-1">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />

            {formik.touched.nombre && formik.errors.nombre ? (
              <div className="text-danger"> {formik.errors.nombre} </div>
            ) : null}
          </div>

           {/* ----- Apellido ----- */}
           <div className="mb-3 mt-1">
            <label htmlFor="apellido" className="form-label">
            Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              name="apellido"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />

            {formik.touched.apellido && formik.errors.apellido ? (
              <div className="text-danger"> {formik.errors.apellido} </div>
            ) : null}
          </div>

           {/* ----- Telefono ----- */}
           <div className="mb-3 mt-1">
            <label htmlFor="telefono" className="form-label">
              Telefono
            </label>
            <input
              type="text"
              className="form-control"
              id="telefono"
              name="telefono"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />

            {formik.touched.telefono && formik.errors.telefono ? (
              <div className="text-danger"> {formik.errors.telefono} </div>
            ) : null}
          </div>

           {/* ----- Mail ----- */}
           <div className="mb-3 mt-1">
            <label htmlFor="mail" className="form-label">
              Mail
            </label>
            <input
              type="text"
              className="form-control"
              id="mail"
              name="mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />

            {formik.touched.mail && formik.errors.mail ? (
              <div className="text-danger"> {formik.errors.mail} </div>
            ) : null}
          </div>

           {/* ----- Calle ----- */}
           <div className="mb-3 mt-1">
            <label htmlFor="calle" className="form-label">
              Calle
            </label>
            <input
              type="text"
              className="form-control"
              id="calle"
              name="calle"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />

            {formik.touched.calle && formik.errors.calle ? (
              <div className="text-danger"> {formik.errors.calle} </div>
            ) : null}
          </div>

           {/* ----- NroCalle ----- */}
           <div className="mb-3 mt-1">
            <label htmlFor="nroCalle" className="form-label">
             NroCalle
            </label>
            <input
              type="text"
              className="form-control"
              id="nroCalle"
              name="nroCalle"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nroCalle}
            />

            {formik.touched.nroCalle && formik.errors.nroCalle ? (
              <div className="text-danger"> {formik.errors.nroCalle} </div>
            ) : null}
          </div>

           {/* ----- Piso dpto ----- */}
           <div className="mb-3 mt-1">
            <label htmlFor="pisoDpto" className="form-label">
              Piso dpto
            </label>
            <input
              type="text"
              className="form-control"
              id="pisoDpto"
              name="pisoDpto"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.pisoDpto}
            />

            {formik.touched.pisoDpto && formik.errors.pisoDpto ? (
              <div className="text-danger"> {formik.errors.pisoDpto} </div>
            ) : null}
          </div>

           {/* ----- nroDpto ----- */}
           <div className="mb-3 mt-1">
            <label htmlFor="nroDpto" className="form-label">
              nro Dpto
            </label>
            <input
              type="text"
              className="form-control"
              id="nroDpto"
              name="nroDpto"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nroDpto}
            />

            {formik.touched.nroDpto && formik.errors.nroDpto ? (
              <div className="text-danger"> {formik.errors.nroDpto} </div>
            ) : null}
          </div>

           {/* ----- idLocalidad ----- */}
           <div className="mb-3 mt-1">
            <label htmlFor="idLocalidad" className="form-label">
              id Localidad
            </label>
            <input
              type="text"
              className="form-control"
              id="idLocalidad"
              name="idLocalidad"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.idLocalidad}
            />

            {formik.touched.idLocalidad && formik.errors.idLocalidad ? (
              <div className="text-danger"> {formik.errors.idLocalidad} </div>
            ) : null}
          </div>

          <div className="text-end">
            <Button className="px-5" variant="primary" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FormRegister