const express = require('express');
const router = express.Router();
let persona = [];

/* GET home page. */
router.get('/', (req, res)=> {
  res.render('index', {title:"Express"});
});

router.get('/registro',(req, res)=>{
  res.render('registro',{title:"Registrar persona"});
 });

 router.get('/view',(req,res)=>{
  res.render('view',{persona:persona, title:"view"});
 });


 router.post('/registro',(req,res)=>{
  const{txtNombres, txtApellidos, sltCargo, txtCedula, sltContacto, dtFecha} = req.body;
 let insert = {txtNombres,txtApellidos, sltCargo, txtCedula,sltContacto, dtFecha};
 
 persona.push(insert);
  res.redirect('/view');
});

module.exports = router;
