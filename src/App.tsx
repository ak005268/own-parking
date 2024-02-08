import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '~/store/store';
import { router } from './app/router';
import './index.css';
import './assets/scss/main.scss';

function App() {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </>
    );
}

export default App;
