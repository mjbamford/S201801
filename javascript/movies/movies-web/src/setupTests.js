import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import fetchMock from 'jest-fetch-mock'
import 'jest-enzyme'

configure({ adapter: new Adapter() })

global.fetch = fetchMock

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
}

global.localStorage = localStorageMock

/*
// Manually mocking of fetch
const fetchPromise = Promise.resolve({
  json: () => Promise.resolve({}),
})

global.fetch = () => fetchPromise
*/
