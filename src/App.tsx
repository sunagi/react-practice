import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, TextField, Typography, Button, Select, MenuItem,} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

const useStyles = makeStyles((t: Theme) => createStyles({
	app: { },
	toolbar: { },
	title: { margin: "1em 1em 1em 0", flexGrow: 1 },
	content: { padding: "3em 0em 3em 2em", backgroundColor: "#F6F6F6" },
	execButton: { minWidth: "6em", minHeight: "3em" },
	bottomSpace1: { marginBottom: "1em" },
	backdrop: { zIndex: t.zIndex.drawer + 1, color: '#fff' },
	attrAreaLine: { display: "flex", alignItems: "center" },
	commandArea: {padding: "2em 3em 1em 3em" },
	leftSpace1: { marginLeft: "2em" },
}));

function App() {
	const c = useStyles();
	const state = useState<boolean>(true);
	const [userName, setUserName] = useState<string | null>(null);
	const [userAttributeName, setUserAttributeName] = useState<string>("1");
	const [userAttributeValue, setUserAttributeValue] = useState<string | null>(null);
	const [isLoading, setLoading] = useState(false);

	const loading = (execute: () => void, infinit?: boolean): (() => void) => {
		return async () => {
			setLoading(true);
			try {
				await new Promise(r => setTimeout(r, 200));
				await execute();
			}
			finally {
				if (!infinit) {
					setLoading(false);
				}
			}
		};
	};

	const inRoom = loading(async () => {
		try {
		}
		catch (err) {
		}
	});

	const outRoom = loading(async () => {
		try {
		}
		catch (err) {
		}
	});

	return (
		<>
			<div className={c.app}>
				<AppBar position="static">
					<Toolbar className={c.toolbar}>
						<Typography variant="h6" className={c.title}>{process.env.REACT_APP_APPLICATION_NAME}</Typography>
					</Toolbar>
				</AppBar>
				<div className={c.content}>
					<div className={[c.attrAreaLine, c.commandArea].join(" ")}>
					{/* eslint-disable-next-line react-hooks/exhaustive-deps */}
					<Button  variant="contained" color="primary" className={[c.execButton, c.leftSpace1].join(" ")} onClick={inRoom}>IN</Button>
					<Button  variant="contained" color="primary" className={[c.execButton, c.leftSpace1].join(" ")} onClick={outRoom}>OUT</Button>
					</div>
				</div>
			</div>
			<Backdrop className={c.backdrop} open={isLoading}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</>
	);
}
export default App;