import { create } from 'apisauce';

const request = create({
    baseURL: 'https://api-dev.polymate.fr/v1/auth',
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
    },
});

async function login(email, password) {
    console.log(`Request: ${email} ${password}`);
    try {
        const response = await request
            .post('/login', {
                email,
                password,
            }
            );
        return response
    } catch (err) {
        console.log(err);
    }
}

export default {
    login,
};