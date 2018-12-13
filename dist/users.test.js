"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const users_1 = require("./users");
const leveldb_1 = require("./leveldb");
const dbPath = 'db_test/users';
var dbUser;
describe('Users', function () {
    before(function () {
        leveldb_1.LevelDb.clear(dbPath);
        dbUser = new users_1.UserHandler(dbPath);
    });
    after(function () {
        dbUser.db.close();
    });
    describe('#get', function () {
        it('should get undefined on non existing User', function () {
            dbUser.get("0", function (err, result) {
                chai_1.expect(err).to.be.null;
                chai_1.expect(result).to.not.be.undefined;
                chai_1.expect(result).to.be.empty;
            });
        });
    });
    /*
      describe('#save', function () {
        it('should save a User', function () {
          expect(err).to.be.null
        })
    
        it('should update a User', function () {
          expect(err).to.be.null
        })
      })
    
      describe('#delete', function () {
        it('should delete a User', function () {
          expect(err).to.be.null
        })
    
        it('should not fail if User does not exist', function () {
          expect(err).to.be.null
        })
      })*/
});
