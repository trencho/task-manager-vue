import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';
import axios from 'axios';

jest.mock('axios');

describe('LoginForm.vue', () => {
    it('logs in a user successfully', async () => {
        axios.post.mockResolvedValue({ data: { token: 'mockToken' } });
        const wrapper = shallowMount(LoginForm);

        wrapper.setData({ username: 'testuser', password: 'password123' });
        await wrapper.find('button').trigger('click');

        expect(axios.post).toHaveBeenCalledWith('/api/login', {
            username: 'testuser',
            password: 'password123'
        });
        expect(localStorage.getItem('token')).toBe('mockToken');
    });
});
