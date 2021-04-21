const mongoose = require('mongoose');
const pationschema = require('../Model/pationtform')
const hospitalschema = require('../Model/hospitalform');
const formcontroller = () => {
    return {
        async getpationform(req, res) {
            res.render('PationtForm')
        },
        async gethospitalform(req, res) {
            res.render('HospitalForm')

        },
        async handelpationtform(req, res) {
            const newpationt = {
                name: req.body.name,
                mobileno: req.body.mobileno,
                address: req.body.address,
                requirement: req.body.requirement
            }
            const allpations = await pationschema.create(newpationt);
            const messages = [{ msg: "Pationt added successfully" }]
            res.render('PationtForm', { messages })


        },
        async handelhospitalform(req, res) {
            try {
                const newhospital = {
                    name: req.body.name,
                    mobileno: req.body.mobileno,
                    beds: req.body.beds
                }
                const detals = await hospitalschema.create(newhospital);
                const messages = [{ msg: "Hospital added successfully" }]
                res.render('HospitalForm', { messages })
            }
            catch (err) {
                console.log(err);
                if (err) res.send("Internal server error")
            }


        },
        async getallpationts(req, res) {
            const allpationts = await pationschema.find().sort({ date: -1 });
            res.render('showpations', { allpationts })

        },
        async getallhospitals(req, res) {
            const allhopitals = await hospitalschema.find().sort({ date: -1 });
            res.render('showHospitals', { allhopitals });

        }
    }

}
module.exports = formcontroller;