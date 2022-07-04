import { GithubApiProvider } from "./hooks/GithubApiContext";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<GithubApiProvider>
			<ChakraProvider>
				<div className="App">
					<Home />
					<GlobalStyle />
				</div>
			</ChakraProvider>
		</GithubApiProvider>
	);
}

export default App;
