import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './store';
import GlobalStyle from './styled/reset.js';
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>
);
