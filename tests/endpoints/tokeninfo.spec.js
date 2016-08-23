/* eslint-env node, mocha */
const expect = require('chai').expect
const {mockClient, reqMock} = require('../mocks/client.mock.js')
const Module = require('../../src/endpoints/tokeninfo.js')

describe('endpoints > tokeninfo', () => {
  let endpoint
  beforeEach(() => {
    endpoint = new Module(mockClient)
    reqMock.reset()
  })

  it('test /v2/tokeninfo', async () => {
    expect(endpoint.isPaginated).to.equal(false)
    expect(endpoint.isBulk).to.equal(false)
    expect(endpoint.isLocalized).to.equal(false)
    expect(endpoint.isAuthenticated).to.equal(true)
    expect(endpoint.url).to.equal('/v2/tokeninfo')

    reqMock.addResponse({id: 'uuid', name: 'public key', permissions: ['account']})
    let content = await endpoint.get()
    expect(content.name).to.equal('public key')
  })
})
