import { expect } from 'chai'
import { User, UserHandler } from './users'
import { LevelDb } from "./leveldb"

const dbPath: string = 'db_test/users'
var dbUser: UserHandler

describe('Users', function () {
  before(function () {
    LevelDb.clear(dbPath)
    dbUser = new UserHandler(dbPath)
  })

  after(function () {
    dbUser.db.close()
  })

  describe('#get', function () {
    it('should get undefined on non existing User', function () {
      dbUser.get("0", function (err: Error | null, result?: User) {
        expect(err).to.be.null
        expect(result).to.not.be.undefined
        expect(result).to.be.empty
      })
    })
  })
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
})
