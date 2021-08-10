import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import PageDashboard from '../pages/PageDashboard'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('PageDashboard', () => {

  let getters
  let actions
  let store
  beforeEach(() => {
    getters = {
      getPayments: () => []
    }
    actions = {
      fetchData: jest.fn(),
      deletePayment: jest.fn(),
      addNewPayment: jest.fn(),
      editPayment: jest.fn(),
      
    }

    store = new Vuex.Store({
      getters,
      actions
    })
  })

  it('calls addNewPayment action after newPayment method is called', () => {
    const $route = {
      path: '/dashboard',
      params: {
        page: 1
      }
    }
    const wrapper = shallowMount(PageDashboard, {
      mocks: {
        $route
      },
      store,
      localVue
    });

    wrapper.vm.newPayment();

    expect(actions.addNewPayment).toHaveBeenCalled()
  })

})