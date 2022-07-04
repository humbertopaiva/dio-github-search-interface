import { useEffect, useState } from "react";
import { useGithubApi } from "../../hooks/GithubApiContext";
import * as S from "./styles";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrClearOption } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SearchBox = () => {
	const [inputText, setInputText] = useState("");
	const { setUser, getUserData } = useGithubApi();
	const [isSearching, setIsSearching] = useState(true);

	const handleSearch = () => {
		getUserData(inputText);
		setIsSearching(false);
	};

	const handleClick = () => {
		setIsSearching(true);
	};

	const handleKeyDown = () => {
		setIsSearching(true);
	};

	const handleClear = () => {
		setUser(null);
		setIsSearching(false);
		setInputText("");
	};

	useEffect(() => {
		if (!inputText) {
			setUser(null);
			setIsSearching(true);
		}
	}, [inputText]);

	return (
		<S.Container>
			<S.Content>
				<input
					type="text"
					placeholder={"Search user by username"}
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
					onClick={() => {
						handleClick();
					}}
					onKeyDown={handleKeyDown}
				/>

				<S.SearchButton
					onClick={isSearching ? handleSearch : handleClear}
					className={!isSearching ? "clear-button" : ""}
				>
					{!isSearching ? <GrClearOption /> : <BiSearchAlt2 />}
				</S.SearchButton>
			</S.Content>
			<ToastContainer />
		</S.Container>
	);
};
