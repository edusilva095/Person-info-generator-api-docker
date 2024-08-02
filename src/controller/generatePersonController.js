const mongoose = require("mongoose");
const Name = mongoose.model("name");
const Surname = mongoose.model("surname");
const ListCities = require("./listCities");
const GenerateNames = require("./generateNames");
const generateDocument = require("./generateDocument");
const GenerateDate = require("./generateDate");
const TypeBlood = require("./typeBlood");
const Sign = require("./sign");
const GenerateNumberPhone = require("./generateNumberPhone");

exports.randomPerson = (req, res) => {
    const countAllDatas = Name.countDocuments({});
    const countMale = Name.where({ "gender": "male" }).countDocuments().then((value) => { return value }).catch((error) => { res.send(error) });
    const countFemale = Name.where({ "gender": "female" }).countDocuments().then((value) => { return value }).catch((error) => { res.send(error) });
    const countSobrenome = Surname.countDocuments({});
    const date = GenerateDate.dateOfBirth();
    GenerateNames.getRandomNameOfAnyGender(countAllDatas, countMale, countFemale).then((random) => {
        GenerateNames.getRandomSurname(countSobrenome).then((surname) => {
            ListCities.listCities().then((city) => {
                const person = {
                    nome: `${random.person.name} ${surname.lastSurnameMother.surname} ${surname.lastSurnameFather.surname}`,
                    cpf: generateDocument.generateCpf(city.state),
                    rg: generateDocument.generateRg(),
                    sexo: random.person.gender,
                    nascimento: date,
                    signo: Sign.sign(date),
                    altura: (Math.random() * (1.90 - 1.55) + 1.55).toFixed(2), // definindo a altura mínima com 1.55 e altura máxima com 1.90
                    peso: (Math.random() * (90 - 60) + 60).toFixed(2), // definindo o peso mínimo com 60 kg e peso máximo com 90 kg
                    tipo_sanguineo: TypeBlood.TypeBloodArray(),
                    Estado: city.state,
                    cidade: city.city,
                    telefone: GenerateNumberPhone.generateNumberLandline(city.ddd),
                    celular: GenerateNumberPhone.generateNumberCellPhone(city.ddd),
                    mae: `${random.mae.name} ${surname.middleSurnameMother.surname} ${surname.lastSurnameMother.surname}`,
                    pai: `${random.pai.name} ${surname.middleSurnameFather.surname} ${surname.lastSurnameFather.surname}`,
                }
                res.json(person);
            }).catch((error) => {
                console.log(error)
                res.send(error);
            })
        }).catch((error) => {
            console.log(error)
            res.send(error);
        })
    }).catch((error) => {
        console.log(error)
        res.send(error);
    })
}

exports.randomPersonMale = (req, res) => {
    const countMale = Name.where({ "gender": "male" }).countDocuments().then((value) => { return value }).catch((error) => { res.send(error) });
    const countFemale = Name.where({ "gender": "female" }).countDocuments().then((value) => { return value }).catch((error) => { res.send(error) });
    const countSobrenome = Surname.countDocuments({});
    const date = GenerateDate.dateOfBirth();
    GenerateNames.getRandomNameMale(countMale, countFemale).then((random) => {
        GenerateNames.getRandomSurname(countSobrenome).then((surname) => {
            ListCities.listCities().then((city) => {
                const person = {
                    nome: `${random.person.name} ${surname.lastSurnameMother.surname} ${surname.lastSurnameFather.surname}`,
                    cpf: generateDocument.generateCpf(city.state),
                    rg: generateDocument.generateRg(),
                    sexo: random.person.gender,
                    nascimento: date,
                    signo: Sign.sign(date),
                    altura: (Math.random() * (1.90 - 1.55) + 1.55).toFixed(2), // definindo a altura mínima com 1.55 e altura máxima com 1.90
                    peso: (Math.random() * (90 - 60) + 60).toFixed(2), // definindo o peso mínimo com 60 kg e peso máximo com 90 kg
                    tipo_sanguineo: TypeBlood.TypeBloodArray(),
                    Estado: city.state,
                    cidade: city.city,
                    telefone: GenerateNumberPhone.generateNumberLandline(city.ddd),
                    celular: GenerateNumberPhone.generateNumberCellPhone(city.ddd),
                    mae: `${random.mae.name} ${surname.middleSurnameMother.surname} ${surname.lastSurnameMother.surname}`,
                    pai: `${random.pai.name} ${surname.middleSurnameFather.surname} ${surname.lastSurnameFather.surname}`,
                }
                res.json(person);
            }).catch((error) => {
                console.log(error)
                res.send(error);
            })
        }).catch((error) => {
            console.log(error)
            res.send(error);
        })
    }).catch((error) => {
        console.log(error)
        res.send(error);
    })
}

exports.randomPersonFemale = (req, res) => {
    const countMale = Name.where({ "gender": "male" }).countDocuments().then((value) => { return value }).catch((error) => { return error });
    const countFemale = Name.where({ "gender": "female" }).countDocuments().then((value) => { return value }).catch((error) => { return error });
    const countSobrenome = Surname.countDocuments({});
    const date = GenerateDate.dateOfBirth();
    GenerateNames.getRandomNameFemale(countMale, countFemale).then((random) => {
        GenerateNames.getRandomSurname(countSobrenome).then((surname) => {
            ListCities.listCities().then((city) => {
                const person = {
                    nome: `${random.person.name} ${surname.lastSurnameMother.surname} ${surname.lastSurnameFather.surname}`,
                    cpf: generateDocument.generateCpf(city.state),
                    rg: generateDocument.generateRg(),
                    sexo: random.person.gender,
                    nascimento: date,
                    signo: Sign.sign(date),
                    altura: (Math.random() * (1.90 - 1.55) + 1.55).toFixed(2), // definindo a altura mínima com 1.55 e altura máxima com 1.90
                    peso: (Math.random() * (90 - 60) + 60).toFixed(2), // definindo o peso mínimo com 60 kg e peso máximo com 90 kg
                    tipo_sanguineo: TypeBlood.TypeBloodArray(),
                    Estado: city.state,
                    cidade: city.city,
                    telefone: GenerateNumberPhone.generateNumberLandline(city.ddd),
                    celular: GenerateNumberPhone.generateNumberCellPhone(city.ddd),
                    mae: `${random.mae.name} ${surname.middleSurnameMother.surname} ${surname.lastSurnameMother.surname}`,
                    pai: `${random.pai.name} ${surname.middleSurnameFather.surname} ${surname.lastSurnameFather.surname}`,
                }
                res.json(person);
            }).catch((error) => {
                console.log(error)
                res.send(error);
            })
        }).catch((error) => {
            console.log(error)
            res.send(error);
        })
    }).catch((error) => {
        console.log(error)
        res.send(error);
    })
}