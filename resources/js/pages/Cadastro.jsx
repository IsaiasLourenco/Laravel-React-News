import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function Cadastro() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post('/teste', values);
    }

    return (
        <div style={{ padding: 20 }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Cadastro de Usuário</h1>

            <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
                <div style={{ marginBottom: 10 }}>
                    <label>Nome:</label><br />
                    <input 
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        style={{ padding: 8, width: '300px' }}
                    />
                </div>

                <div style={{ marginBottom: 10 }}>
                    <label>Email:</label><br />
                    <input 
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        style={{ padding: 8, width: '300px' }}
                    />
                </div>

                <div style={{ marginBottom: 10 }}>
                    <label>Senha:</label><br />
                    <input 
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        style={{ padding: 8, width: '300px' }}
                    />
                </div>

                <button 
                    type="submit" 
                    style={{ padding: 10, marginTop: 10 }}
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}
