import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Test from '../components/Test.vue';

describe('vitest config is ok', () => {
  test('Test.vue', async () => {
    const wrapper = mount(Test);
    expect(wrapper.html()).toContain('count is: 0');
    await wrapper.find('button').trigger('click');
    expect(wrapper.html()).toContain('count is: 1');
  });
});
