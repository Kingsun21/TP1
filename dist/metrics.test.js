"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const metrics_1 = require("./metrics");
const leveldb_1 = require("./leveldb");
const dbPath = 'db_test/metrics';
var dbMet;
describe('Metrics', function () {
    before(function () {
        leveldb_1.LevelDb.clear(dbPath);
        dbMet = new metrics_1.MetricsHandler(dbPath);
    });
    after(function () {
        dbMet.db.close();
    });
    describe('#get', function () {
        it('should get empty array on non existing group', function () {
            dbMet.get("user", "0", function (err, result) {
                chai_1.expect(err).to.be.null;
                chai_1.expect(result).to.not.be.undefined;
                chai_1.expect(result).to.be.empty;
            });
        });
    });
    describe('#save', function () {
        it('should save data', function () {
            const met = [new metrics_1.Metric(`${new Date('2013-11-04 14:00 UTC').getTime()}`, 12)];
            dbMet.save("user", "0", met, function (err) {
            });
        });
        it('should not fail if data exist', function () {
            dbMet.get("user", "0", function (err, result) {
                chai_1.expect(err).to.be.null;
                chai_1.expect(result).to.not.be.undefined;
                chai_1.expect(result).to.be.an("array");
            });
        });
    });
    describe('#update', function () {
        it('should update data', function () {
        });
        describe('#delete', function () {
            it('should delete data', function () {
                const met = new metrics_1.Metric(`${new Date('2013-11-04 14:00 UTC').getTime()}`, 12);
                dbMet.remove("user", "0", function (err) {
                    chai_1.expect(err).to.be.null;
                });
            });
        });
        it('should not fail if data does not exist', function () {
            dbMet.get("user", "0", function (err, result) {
                chai_1.expect(err).to.be.null;
                chai_1.expect(result).to.be.undefined;
            });
        });
    });
});
