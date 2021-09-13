import App from './App';
//for hot reload in the dev server
if (module.hot) {
	module.hot.accept()
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
