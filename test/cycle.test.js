const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
const should = chai.should();
const Cycle = require('../models/cycle.model');

chai.use(chaiHttp);

describe('Cycles', () => {
    // let cycle = new Cycle();
    // cycle.name = 'Floracion';
    // cycle.date_init = '12-01-1222';
    // cycle.date_end = '12-34-2122';
    // cycle.description = 'floracion';
    // cycle.temp_max_idea_celsius = 0;
    // cycle.temp_min_idea_celsius = 0;
    // cycle.humidity_max_idea_rate = 0;
    // cycle.humididy_min_idea_rate = 0;
    // cycle.duration_week = 0;
    // cycle.hour_ligth = 0;
    // cycle.hour_dark = 0;
    // cycle.plantation_id = '5f1bae9e839492351b9cadd4';
    // cycle.instance_id = 2;

    const cycle =  {
        "name": 'floracion',
        "date_init": '',
        "date_end": '',
        "description": '',
        "temp_max_idea_celsius": 0,
        "temp_min_idea_celsius": 0,
        "humidity_min_idea_rate": 0,
        "humidity_max_idea_rate": 0,
        "duration_week": 0,
        "hour_dark": 0,
        "hour_ligth": 0,
        "plantation_id": '5f1bae9e839492351b9cadd4',
        "instance_id": 2
    };

    console.log(cycle);

    describe('Add cycle', () => {
        it('add one cycle' , (done) => {
            chai.request(server)
            .post('/api/cycle')
            .send({cycle})
            .end((err, res) => {
                console.log(res);
                // console.log(err);
                res.should.have.status(200);
                done()
            });
        });
    })


    describe('Delete cycle unitary', () => {
        it('deberia remover el indicado', (done)    => {
            const _id  =  '';
            chai.request(server)
                .delete('/api/cycle/'+_id)
                .end((err, result) => {
                    result.should.have.status(200);
                    done();
                })
        })
    })
})