import { GithubApiProvider } from "./hooks/GithubApiContext";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";

function App() {
	return (
		<GithubApiProvider>
			<div className="App">
				<Home />
				<GlobalStyle />
			</div>
		</GithubApiProvider>
	);
}

export default App;
