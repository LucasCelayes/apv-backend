import Paciente from "../models/paciente.js"
const agregarPaciente = async (req,res) => {
    delete req.body.id
const paciente = new Paciente(req.body);
paciente.veterinario = req.veterinario._id;
try {
    const pacienteAlmacenado = await paciente.save()
    res.json(pacienteAlmacenado);
} catch (error) {
    console.log(error)
}
};
const obtenerPacientes = async (req,res) => {
    const pacientes = await Paciente.find()
    .where("veterinario")
    .equals(req.veterinario);

    res.json(pacientes)

};

const obtenerPaciente = async (req,res) => {
    const {id} = req.params;
    const paciente = await Paciente.findById(id);
    if(!paciente) {
        return res.status(400).json({msg:"no encontrado"})
    }
    if(paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
        return res.json({ msg: "accion no valida"});
    }
   
        res.json(paciente)
    
}
const actualizarPaciente = async (req,res) =>{
    const {id} = req.params;
    const paciente = await Paciente.findById(id);
    if(!paciente) {
        return res.status(400).json({msg:"no encontrado"})
    }
    if(paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
        return res.json({ msg: "accion no valida"});
    }
    // actualizar paciente

paciente.nombre = req.body.nombre || paciente.nombre
paciente.propietario = req.body.propietario || paciente.propietario
paciente.email = req.body.email || paciente.email
paciente.fecha = req.body.fecha || paciente.fecha
paciente.sintomas = req.body.sintomas || paciente.sintomas
paciente.telefono = req.body.telefono || paciente.telefono
paciente.cedula = req.body.cedula || paciente.cedula
paciente.tipodemascota = req.body.tipodemascota || paciente.tipodemascota
paciente.peso = req.body.peso || paciente.peso
paciente.vacunas = req.body.vacunas || paciente.vacunas
paciente.tratamiento = req.body.tratamiento || paciente.tratamiento
paciente.raza = req.body.raza || paciente.raza
paciente.anos = req.body.raza || paciente.anos
try {
    const pacienteActualizado = await paciente.save()
    res.json(pacienteActualizado)
} catch (error) {
    console.log(error)
    
}
}
const eliminarPaciente = async (req,res) =>{
    const {id} = req.params;
    const paciente = await Paciente.findById(id);
    if(!paciente) {
        return res.status(400).json({msg:"no encontrado"})
    }
    if(paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
        return res.json({ msg: "accion no valida"});
    }
    try {
        await paciente.deleteOne()
        res.json({msg:"Paciente Eliminado"})
    } catch (error) {
        console.log(error)
    }
}

export {agregarPaciente,obtenerPacientes,obtenerPaciente,actualizarPaciente,eliminarPaciente}