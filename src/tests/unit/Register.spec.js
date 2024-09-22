import { shallowMount } from '@vue/test-utils';
import RegisterForm from '@/components/RegisterForm.vue';
import axios from 'axios';

jest.mock('axios');

describe('RegisterForm.vue', () => {
    it('Registers a user successfully', async () => {
        axios.post.mockResolvedValue({ data: { token: 'mockToken' } });
        const wrapper = shallowMount(RegisterForm);

        await wrapper.setData({ username: 'testuser', email: 'testuser@mail.com', password: 'password123' });
        await wrapper.find('button').trigger('click');

        expect(axios.post).toHaveBeenCalledWith('/api/signup', {
            username: 'testuser',
            email: 'testuser@mail.com',
            password: 'password123'
        });
        expect(localStorage.getItem('token')).toBe('mockToken');
    });
});
