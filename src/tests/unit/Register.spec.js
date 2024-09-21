import { shallowMount } from '@vue/test-utils';
import RegisterForm from '@/components/RegisterForm.vue';
import axios from 'axios';

jest.mock('axios');

describe('RegisterForm.vue', () => {
    it('registers a user successfully', async () => {
        axios.post.mockResolvedValue({ data: { token: 'mockToken' } });
        const wrapper = shallowMount(RegisterForm);

        wrapper.setData({ username: 'testuser', password: 'password123' });
        await wrapper.find('button').trigger('click');

        expect(axios.post).toHaveBeenCalledWith('/api/register', {
            username: 'testuser',
            password: 'password123'
        });
        expect(localStorage.getItem('token')).toBe('mockToken');
    });
});
