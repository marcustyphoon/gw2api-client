/* eslint-env node, mocha */
const expect = require('chai').expect
const {mockClient, reqMock} = require('../mocks/client.mock.js')
const Module = require('../../src/endpoints/minis.js')

describe('endpoints > minis', () => {
  let endpoint
  beforeEach(() => {
    endpoint = new Module(mockClient)
    reqMock.reset()
  })

  it('test /v2/minis', async () => {
    expect(endpoint.isPaginated).to.equal(true)
    expect(endpoint.isBulk).to.equal(true)
    expect(endpoint.supportsBulkAll).to.equal(true)
    expect(endpoint.isLocalized).to.equal(true)
    expect(endpoint.isAuthenticated).to.equal(false)
    expect(endpoint.url).to.equal('/v2/minis')

    reqMock.addResponse([1, 2, 3])
    let content = await endpoint.ids()
    expect(content).to.deep.equal([1, 2, 3])
  })
})
