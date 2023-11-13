import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap"

import { ArticuloInsumo } from "../../types/ArticuloInsumo";
import { ArticuloInsumoService } from "../../services/ArticuloInsumoService";
import { ModalType } from "../../types/ModalType";
import Loader from "../Loader/Loader";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import ProductModal from "../ProductModal/ProductModal";


const ArticuloInsumoTable = () => {

    //Variable que va a contener los datos recibidos por la API
    const [insumos, setInsumos] = useState<ArticuloInsumo[]>([]);

    //Variable que muestra el componente Loader hasta que se reciban los datos de la API
    const [isLoading, setIsLoading] = useState(true);

    //Variable que va actualizar los datos de la tabla luego de cada operacion exitosa
    const [refreshData, setRefreshData] = useState(false);

    //Este hook se va a ejecutar cada vez que se renderice el componente o refreshData cambie de estado
    useEffect(() => {

        //Llamamos a la función para obtener todos los productos declarado en el service
        const fetchProducts = async () => {
            const insumos = await ArticuloInsumoService.getAllProducts();
            setInsumos(insumos);
            setIsLoading(false);
        };

        fetchProducts();
    }, [refreshData]);

    //Test, este log está modificado para que muestre los datos de una manera más legible
    console.log(JSON.stringify(insumos, null, 2));


    //Se inicializa un producto vacio cuando vayamos a crear uno nuevo, para evitar "undefined"
        const initializeNewProduct = (): ArticuloInsumo => {
        return {
            id: 0,
            fechaHoraAltaArticuloInsumo: new Date(),
            fechaHoraModificacionArticuloInsumo: new Date(),
            fechaHoraBajaArticuloInsumo: new Date(),
            nombreArticuloInsumo: "",
            precioCompra: 0,
            stockActual: 0,
            stockMinimo: 0,
            urlImagen: "",
            unidadMedida: {
                nombreUnidadMedida: "",
                abrevitaturaUnidadMedida: "",
                fechaAltaUnidadMedida: new Date(),
                fechaBajaUnidadMedida: new Date(),
                fechaModificacionUnidadMedida: new Date(),
                }
            ,
            rubro: {
                nombreRubro: "",
                fechaAltaRubro: new Date(),
                fechaBajaRubro: new Date(),
                fechaModificacionRubro: new Date(),
                }
            };
    };

    //Producto seleccionado que se va a pasar como prop al Modal
        const [insumo, setProduct] = useState<ArticuloInsumo>(initializeNewProduct);
    
    //Manejo de Modal
        const [showModal, setShowModal] = useState(false);
        const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
        const [title, setTitle] = useState("");

    //Logica de Modal
        const handleClick = (newTitle: string, prod: ArticuloInsumo, modal: ModalType) => {
        setTitle(newTitle);
        setModalType(modal)
        setProduct(prod);
        setShowModal(true);
    };

    return (
        
        <div className="m-3">

        {/* Botón para que cuando el usuario haga click llame a la función que declaramos */}
            <Button onClick={() => handleClick("Nuevo Producto",
                initializeNewProduct(), ModalType.CREATE)}>
                Nuevo Producto
            </Button>

    {isLoading ? <Loader/>: (
           
        <Table>
            <thead>
                <tr>
                    <th> Producto </th>
                    <th> Precio </th>
                    <th> Stock Actual </th>
                    <th> Imagen </th>
                    <th> Editar </th>
                    <th> Borrar </th>
                </tr>
            </thead>
            <tbody>
                {insumos.map(insumo => (
                    <tr key={insumo.id}>
                        
                        <td> {insumo.nombreArticuloInsumo} </td>
                        <td> {insumo.precioCompra} </td>
                        <td> {insumo.stockActual} </td>
                        <td> <img src={insumo.urlImagen} alt={insumo.nombreArticuloInsumo} style={{width: '50px'}} /> </td>
                        <td> <EditButton onClick={() => handleClick("Editar producto", insumo, ModalType.UPDATE)}/> </td>
                        <td> <DeleteButton onClick={() => handleClick("Borrar producto", insumo, ModalType.DELETE)} /> </td>

                    </tr>
                ))}
            </tbody>

        </Table>

    )}

    {showModal && (
        <ProductModal 
        show = {showModal}
        onHide={() => setShowModal(false)}
        title={title}
        modalType={modalType}
        prod={insumo}
        refreshData={setRefreshData}
        />
        
        
        
        
    )}

    
    </div>
    )
}

export default ArticuloInsumoTable