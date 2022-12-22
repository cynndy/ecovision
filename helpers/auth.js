import axios from 'axios'

const AuthenticateUser = async (email, password) => {
    // , {
    //     headers: {
    //         'Access-Allow-Control-Origin': ['http://127.0.0.1:5000', 'http://127.0.0.1:3000']
    //     }
    // }
    const res = await axios.post('http://127.0.0.1:5000/api/login', { email, password })

    console.log(res)
}

export default AuthenticateUser