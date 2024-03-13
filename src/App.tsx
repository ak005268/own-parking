import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '~/store/store';
import { router } from './app/router';
import './index.css';
import './assets/scss/main.scss';
import { Toaster } from 'sonner';

function App() {
    return (
        <>
            <Toaster
                position="top-center"
                richColors
            />

            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </>
    );
}

export default App;
