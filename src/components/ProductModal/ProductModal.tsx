import { Button, Form, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";

//Dependencias para validar los formularios
import * as Yup from "yup";
import { useFormik } from "formik";

import { ArticuloInsumo } from "../../types/ArticuloInsumo";
import { ArticuloInsumoService } from "../../services/ArticuloInsumoService";

//Notificaciones al usuario
import { toast } from 'react-toastify';





//Recibe parametros como props para que se renderice, su titulo y según qué operación queremos realizar.
type ProductModalProps = {
    show: boolean;
    onHide: () => void;
    title: string;
    modalType: ModalType;
    prod: ArticuloInsumo;
    refreshData: React.Dispatch<React.SetStateAction<boolean>>;
    
};





const ProductModal = ({show, onHide, title, prod, modalType, refreshData}:ProductModalProps) => {

    //CREATE-UPDATE función handleSaveUpdate 
    const handleSaveUpdate = async (pro: ArticuloInsumo) => {
    try {
        const isNew = pro.id === 0;
        if (isNew) {
            await ArticuloInsumoService.createProduct(pro);
        } else {
            await ArticuloInsumoService.updateProduct(pro.id, pro);
        }
        toast.success(isNew ? "Insumo Creado" : "Insumo Actualizado", {
            position: "top-center",
        });
        onHide();
        refreshData(prevState => !prevState);
    } catch (error) {
        console.error(error);
        toast.error('Ha ocurrido un error');
    }
    
};


//Función handleDelete (DELETE)
const handleDelete = async () => {
    try {
        await ArticuloInsumoService.deleteProduct(prod.id);
        toast.success("Insumo borrado", {
            position: "top-center",
        });
        onHide();
        refreshData(prevState => !prevState);
    } catch (error) {
        console.error(error);
        toast.error("Ha ocurrido un error");
        
    }
    
}
        //YUP - Esquema de validación
    const validationSchema = () => {
        return Yup.object().shape({
        id: Yup.number().integer().min(0),
        fechaHoraAltaArticuloInsumo: Yup.date().required('La fecha de alta es requerida'),//????
        fechaHoraModificacionArticuloInsumo: Yup.date().required('La fecha de modificacion es requerida'),
        fechaHoraBajaArticuloInsumo: Yup.date().required('La fecha de baja es requerida'),
        nombreArticuloInsumo: Yup.string().required('El nombre del artículo es requerido'),
        precioCompra: Yup.number().min(0).required('El precio de compra es requerido'),
        stockActual: Yup.number().min(0).required('El stock actual es requerido'),
        stockMinimo: Yup.number().min(0).required('El stock mínimo es requerido'),
        urlImagen: Yup.string().required('La URL de la imagen es requerida'),
        unidadMedida: Yup.string().required('La unidad de medida es requerida'),
        rubro: Yup.string().required('El rubro es requerido'),
        });
    };
    

//Formik -  Utiliza el esquema de validación de YUP y obtiene un formulario dinámico que
// bloquea el formulario en caso de haber errores.
    const formik = useFormik({
        initialValues: prod,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: ArticuloInsumo) => handleSaveUpdate(obj),
     });



        return(
            <>

            {modalType === ModalType.DELETE ? (
                <>

                <Modal show={show} onHide={onHide} centered backdrop="static">

                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p> ¿Está seguro que desea eliminar el producto  
                            <br /> <strong> {prod.nombreArticuloInsumo} </strong> ?
                        </p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}>
                            Cancelar
                        </Button>

                        <Button variant="danger" onClick={handleDelete}>
                            Borrar
                        </Button>
                    </Modal.Footer>

                </Modal>
                </>
            ) : (

                <>
                <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                    
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                    {/*"Formulario"*/}
                    <Form onSubmit={formik.handleSubmit}>
                        
                    {/*"Titulo"*/}
                        <Form.Group controlId="formTitulo">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                value={formik.values.nombreArticuloInsumo || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.nombreArticuloInsumo &&
                                formik.touched.nombreArticuloInsumo)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.nombreArticuloInsumo}
                             </Form.Control.Feedback>
                        </Form.Group>


                    {/*"Precio Compra"*/}                    
                        <Form.Group controlId="formPrice">
                            <Form.Label>Precio Compra</Form.Label>
                            <Form.Control
                                name="precioCompra"
                                type="number"
                                value={formik.values.precioCompra || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.precioCompra &&
                                formik.touched.precioCompra)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.precioCompra}
                             </Form.Control.Feedback>
                        </Form.Group>


                    {/*"Stock Actual"*/}                
                        <Form.Group controlId="formStockActual">
                            <Form.Label>Stock Actual</Form.Label>
                            <Form.Control
                                name="StockActual"
                                type="number"
                                value={formik.values.stockActual || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.stockActual &&
                                formik.touched.stockActual)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.stockActual}
                             </Form.Control.Feedback>
                        </Form.Group>
                    

                    {/*"Stock Minimo"*/}                
                        <Form.Group controlId="formStockMinimo">
                            <Form.Label>Stock Minimo</Form.Label>
                            <Form.Control
                                name="StockMinimo"
                                type="number"
                                value={formik.values.stockMinimo || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.stockMinimo &&
                                formik.touched.stockMinimo)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.stockMinimo}
                             </Form.Control.Feedback>
                        </Form.Group>


                    {/*"Imagen"*/}                
                        <Form.Group controlId="formImage">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control
                                name="image"
                                type="text"
                                value={formik.values.urlImagen || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.urlImagen &&
                                formik.touched.urlImagen)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.urlImagen}
                             </Form.Control.Feedback>
                        </Form.Group>


                            <Modal.Footer className="mt-4">
                                
                                <Button variant="secondary" onClick={onHide}>
                                    Cancelar
                                </Button>
                                <Button variant="primary" type="submit" disabled={!formik.isValid}>
                                    Guardar
                                </Button>

                            </Modal.Footer>
                            </Form>
                               

                    </Modal.Body>

                </Modal>

            </>
        )}
        </>
    )

}

export default ProductModal;