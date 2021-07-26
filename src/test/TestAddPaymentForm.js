import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import AddPaymentForm from '../components/AddPaymentForm'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AddPaymentForm', () => {

  let getters
  let store
  beforeEach(() => {
    getters = {
      getCategoriesList: () => ['Navigation', 'Transport']
    }

    store = new Vuex.Store({
      getters
    })
  })


  it('emits "AddNewPayment" event on Save click', () => {

    // mocking router path
    const $route = {
      path: '/dashboard'
    }
    const wrapper = mount(AddPaymentForm, {
      mocks: {
        $route
      },
      store,
      localVue
    });

    const saveBtn = wrapper.find('button');
    saveBtn.trigger('click')

    expect(wrapper.emitted().addNewPayment).toBeTruthy()
  })

  it('takes category from route params', () => {
    // mocking router params
    const $route = {
      params: {
        category: 'Transport'
      }
    }

    const wrapper = mount(AddPaymentForm, {
      mocks: {
        $route
      },
      store,
      localVue
    });

    expect(wrapper.vm.category).toEqual('Transport')
  })

  it('takes value from route query', () => {
    // mocking router params
    const $route = {
      params: {
        category: 'Transport'
      },
      query: {
        value: '1000'
      }
    }

    const wrapper = mount(AddPaymentForm, {
      mocks: {
        $route
      },
      store,
      localVue
    });

    expect(wrapper.vm.value).toEqual('1000')
  })

  it('calls acceptQuickPayment() if route changes', () => {
    const $route = {
      path: '/dashboard'
    }

    const acceptQuickPayment = jest.spyOn(AddPaymentForm.methods, 'acceptQuickPayment')


    const wrapper = mount(AddPaymentForm, {
      mocks: {
        $route
      },
      store,
      localVue
    });

    wrapper.vm.$options.watch.$route.call(wrapper.vm);

    expect(acceptQuickPayment).toHaveBeenCalled();
  })
})