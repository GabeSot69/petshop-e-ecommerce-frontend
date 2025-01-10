import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const CustomBar = styled(Toolbar)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: 'center',
	color: theme.palette.text.primary,
	backgroundColor: theme.palette.background.default,
}));

const BarItem = styled('div')(( {theme} ) => ({
	display: "flex",
	flexDirection: "row",
	paddingRight: theme.spacing(5)
}));

const BarItemGroup = styled('div')(() => ({
	display: "flex",
	flexDirection: "row",
}));


const Header = () => {
	return (
			<>
				<AppBar position="static" >
            <CustomBar>
							<BarItemGroup>
								<BarItem>
									<LocalPhoneOutlinedIcon/>
									<Typography>
											+55 555-5555
									</Typography>
								</BarItem>
								<BarItem>
									<EmailOutlinedIcon/>
									<Typography>
										petshop@animals.com
									</Typography>
								</BarItem>
							</BarItemGroup>
							<BarItem>
								<LocationOnOutlinedIcon/>
								<Typography>
									Rua 7 de setembro,1976, centro
								</Typography>
							</BarItem>
            </CustomBar>
        </AppBar>
			</>
	)
}

export default Header;