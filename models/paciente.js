import mongoose from 'mongoose'

const pacienteSchema = mongoose.Schema({
 nombre: {
    type:String,
    required:true,
 },
 propietario:{
    type:String,
    required:true,
 },
 email:{
    type:String,
    required:true,
 },
 telefono:{
   type:String,
   required:true,
 },
 cedula:{
   type:String,
   required:true,
 },
 fecha:{
    type:Date,
    required:true,
    default:Date.now()
 },
 tipodemascota:{
type:String,
required:true,
 },
 sintomas:{
 type:String,
 required:true,
 },
 peso:{
   type:String,
   required:true,
 },
 vacunas:{
   type:String,
   required:true,

 },
 veterinario:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Veterinario",
 },
 tratamiento:{
   type:String,
   required:true,
 },
 raza:{
  type:String,
  required:true,
 },
 anos:{
  type:String,
  required:true,
 }
},
{
timestamps:true,
}
);

const Paciente = mongoose.model("Paciente",pacienteSchema);

export default Paciente