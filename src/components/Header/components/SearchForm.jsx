import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';

SearchForm.propTypes = {};

function SearchForm(props) {
    return (
        <Paper component="form" className="flex items-center justify-between rounded-full border-2 pl-2 shadow-none ">
            <InputBase fullWidth className="ml-2 " placeholder="Search movie..." />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default SearchForm;
